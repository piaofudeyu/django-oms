<template>
  <div class="components-container" style='height:100vh'>
    <el-card>
      <div class="head-lavel">
        <div class="table-button">
        </div>
        <div class="table-search">
          <el-input
            placeholder="搜索 ..."
            v-model="listQuery.search"
            @keyup.enter.native="searchClick">
            <i class="el-icon-search el-input__icon" slot="suffix" @click="searchClick"></i>
          </el-input>
        </div>
      </div>
      <div>
        <el-table :data='tableData' border style="width: 100%">
          <el-table-column label="记录" type="expand" width="50">
            <template slot-scope="scope">
              <el-table :data='scope.row.recordData' border style="width: 100%">
                <el-table-column prop="record_id" label="记录ID" sortable width="100"></el-table-column>
                <el-table-column prop='name' label='名称' width="100"></el-table-column>
                <el-table-column prop='type' label='类型' width="100"></el-table-column>
                <el-table-column prop='value' label='值'></el-table-column>
                <el-table-column prop='value2' label='备用值'></el-table-column>
                <el-table-column prop='ttl' label='ttl' width="100"></el-table-column>
                <el-table-column prop='use' label='用途'></el-table-column>
                <el-table-column prop='desc' label='备注'></el-table-column>
                <el-table-column v-if="scope.row.type==='bind'" prop='tan' label='探测'>
                  <template slot-scope="props">
                    <el-tag v-if="props.row.tan" type="success">True</el-tag>
                    <el-tag v-else type="danger">False</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="160">
                  <template slot-scope="props">
                    <el-button-group v-if="['NS', 'SOA'].indexOf(props.row.type)<0">
                      <el-button type="success" size="mini" @click="editGroup(props.row)">修改</el-button>
                      <el-button type="primary" size="mini" @click="swithGroup(props.row)">交换ip</el-button>
                    </el-button-group>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column prop='name' label='名称' sortable></el-table-column>
          <el-table-column prop='dnsname' label='属于' width="100"></el-table-column>
          <el-table-column prop='create_time' label='注册时间' width="100">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <span>{{scope.row.create_time | parseDate}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop='expire_time' label='到期时间' width="100">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <span>{{scope.row.expire_time | parseDate}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label='到期天数' width="80">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <span>{{scope.row.expire_time | diffDate}}</span>
              </div>
            </template>
          </el-table-column>
          </el-table-column>
          <el-table-column prop='status' label='状态' width="100">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <el-tag :type="Dns_Color[scope.row.status]">
                  {{Dns_Status[scope.row.status]}}
                </el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop='update_time' label='修改时间' width="100">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <span>{{scope.row.update_time | parseDate}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop='dnsService' label='dns服务商' width="260">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper" style="text-align: center; color: rgb(0,0,0)">
                <el-tag v-for="item in scope.row.dnsService.split('|')" :key="item">
                  {{item}}
                </el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop='desc' label='备注'></el-table-column>
          <el-table-column label="操作" width="260">
            <template slot-scope="scope">
              <el-button-group>
                <el-button type="warning" size="mini" @click="syncGroup(scope.row)">同步记录</el-button>
                <el-button type="primary" size="mini" @click="addGroup(scope.row)">添加记录</el-button>
                <el-button type="success" size="mini" @click="updateDesc(scope.row)">修改</el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="pagesize"
          :page-size="listQuery.limit"
          :layout="pageformat"
          :total="tabletotal">
        </el-pagination>
      </div>
    </el-card>

    <el-dialog :visible.sync="addForm">
      <el-form label-width="90px">
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="rowdata.status">
            <el-radio v-for="item in Object.keys(Dns_Status)" :key="item" :label="item">{{Dns_Status[item]}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input v-model="rowdata.desc" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeDesc">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="addRecordForm">
      <el-form :model="recordForm" ref="recordForm" label-width="100px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="recordForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="recordForm.type" placeholder="请选择类型">
            <el-option v-for="item in record_types" :key="item.id" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="值" prop="value">
          <el-input v-model="recordForm.value"></el-input>
        </el-form-item>
        <el-form-item label="备用值" prop="value2">
          <el-input v-model="recordForm.value2"></el-input>
        </el-form-item>
        <el-form-item label="ttl" prop="ttl">
          <el-input v-model="recordForm.ttl"></el-input>
        </el-form-item>
        <el-form-item label="用途" prop="use">
          <el-input v-model="recordForm.use" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input v-model="recordForm.desc" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="探测" prop="tan">
          <el-switch v-model="recordForm.tan" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addDnsRecord('recordForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="editRecordForm">
      <el-form :model="recorddata" ref="recorddata" label-width="100px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="recorddata.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="recorddata.type" disabled></el-input>
        </el-form-item>
        <el-form-item label="值" prop="value">
          <el-input v-model="recorddata.value"></el-input>
        </el-form-item>
        <el-form-item label="备用值" prop="value2">
          <el-input v-model="recorddata.value2"></el-input>
        </el-form-item>
        <el-form-item label="ttl" prop="ttl">
          <el-input v-model="recorddata.ttl"></el-input>
        </el-form-item>
        <el-form-item label="用途" prop="use">
          <el-input v-model="recorddata.use" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input v-model="recorddata.desc" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="探测" prop="tan">
          <el-switch v-model="recorddata.tan" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editDnsRecord('recorddata')">立即更新</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import {
  getDnsDomain,
  postDnspodRecord,
  postGodaddyRecord,
  postBindRecord,
  patchDnsDomain,
  getDnsRecord,
  postDnsRecord,
  putDnsRecord
} from 'api/dnsapi'
import { LIMIT, pagesize, pageformat } from '@/config'

export default {
  components: {},
  data() {
    return {
      tableData: [],
      tabletotal: 0,
      currentPage: 1,
      pagesize: pagesize,
      pageformat: pageformat,
      listQuery: {
        limit: LIMIT,
        offset: '',
        search: ''
      },
      Dns_Status: {
        0: '使用中',
        1: '备用',
        2: '被墙'
      },
      Dns_Color: {
        0: 'success',
        1: 'warning',
        2: 'danger'
      },
      Dns_Types: ['dnspod', 'godaddy'],
      addForm: false,
      rowdata: {
        status: '',
        use: '',
        desc: ''
      },
      selectdomain: {},
      addRecordForm: false,
      recordForm: {
        domain: '',
        name: '',
        value: '',
        value2: '',
        type: 'A',
        ttl: 600,
        use: '',
        desc: '',
        tan: false
      },
      record_types: ['A', 'CNAME', 'MX', 'TXT'],
      editRecordForm: false,
      recorddata: {}
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      getDnsDomain(this.listQuery).then(response => {
        this.tableData = response.data.results
        this.tabletotal = response.data.count
        this.tableData.map(function(item) {
          const parmas = {
            domain__name: item.name
          }
          getDnsRecord(parmas).then(res => {
            item.recordData = res.data
          })
        })
      })
    },
    searchClick() {
      this.fetchData()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.offset = (val - 1) * LIMIT
      this.fetchData()
    },
    syncGroup(row) {
      row.action = 'sync'
      row.domain = row.name
      this.$message({
        message: '正在同步中，请稍后',
        type: 'info'
      })
      if (row.type === 'dnspod') {
        postDnspodRecord(row).then(() => {
          this.$message({
            message: '同步成功',
            type: 'success'
          })
          this.fetchData()
        })
      } else if (row.type === 'godaddy') {
        postGodaddyRecord(row).then(() => {
          this.$message({
            message: '同步成功',
            type: 'success'
          })
          this.fetchData()
        })
      } else if (row.type === 'bind') {
        postBindRecord(row).then(() => {
          this.$message({
            message: '同步成功',
            type: 'success'
          })
          this.fetchData()
        })
      }
    },
    updateDesc(row) {
      this.addForm = true
      this.rowdata = row
    },
    changeDesc() {
      patchDnsDomain(this.rowdata.id, this.rowdata).then(() => {
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        this.addForm = false
        this.fetchData()
      })
    },
    addGroup(row) {
      this.recordForm.domain = row.name
      this.recordForm.dnsname = row.dnsname
      this.recordForm.domain_type = row.type
      this.addRecordForm = true
    },
    addDnsRecord() {
      const loading = this.$loading({
        lock: true,
        text: '正在火速连接api添加，请稍等。。。',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      postDnsRecord(this.recordForm).then(() => {
        loading.close()
        this.fetchData()
        this.addRecordForm = false
      }).catch(error => {
        const errordata = JSON.stringify(error.response.data)
        this.$message.error(errordata)
      })
    },
    editGroup(row) {
      this.recorddata = row
      this.editRecordForm = true
    },
    editDnsRecord() {
      const loading = this.$loading({
        lock: true,
        text: '正在火速连接api修改，请稍等。。。',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      putDnsRecord(this.recorddata.id, this.recorddata).then(() => {
        loading.close()
        this.fetchData()
        this.editRecordForm = false
      }).catch(error => {
        const errordata = JSON.stringify(error.response.data)
        this.$message.error(errordata)
      })
    },
    swithGroup(row) {
      this.recorddata = row
      const temp = this.recorddata.value
      this.recorddata.value = this.recorddata.value2
      this.recorddata.value2 = temp
      const loading = this.$loading({
        lock: true,
        text: '正在火速连接api修改，请稍等。。。',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      putDnsRecord(this.recorddata.id, this.recorddata).then(() => {
        loading.close()
        this.fetchData()
      }).catch(error => {
        const errordata = JSON.stringify(error.response.data)
        this.$message.error(errordata)
      })
    }
  }
}
</script>

<style lang='scss'>

</style>
