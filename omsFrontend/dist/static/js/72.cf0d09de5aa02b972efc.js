webpackJsonp([72],{"5lFj":function(t,e,s){var a=s("GTnp");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("0ccdc74e",a,!0)},GTnp:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".jobname{font-weight:600;margin-left:20px}",""])},KnUO:function(t,e,s){"use strict";function a(t){s("5lFj")}Object.defineProperty(e,"__esModule",{value:!0});var l=s("fZjL"),o=s.n(l),n=s("Dd8w"),r=s.n(n),i=s("iVC1"),c=s("QmSG"),u=s("NYxO"),d={components:{},data:function(){return{job_id:this.$route.params.job_id,currentPage:1,listQuery:{limit:c.LIMIT,offset:"",search:"",job__id:""},pagesize:c.pagesize,pageformat:c.pageformat,tableData:[],tabletotal:0,DEPLOY_STATUS:{deploy:{text:"发布中",type:"primary",icon:"el-icon-loading"},success:{text:"发布成功",type:"success",icon:"el-icon-success"},failed:{text:"发布失败",type:"danger",icon:"el-icon-error"}},selectId:[],butstatus:!0,showresult:!1,job_results:[],check_job_status:""}},computed:r()({},Object(u.b)(["role"])),created:function(){this.fetchDeployJobData()},methods:{fetchDeployJobData:function(){var t=this;this.listQuery.job__id=this.job_id,Object(i.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count,t.tableData.map(function(t){return t.deploy_status}).indexOf("deploy")>-1?t.check_job_status=setInterval(function(){var e={job__id:t.job_id};Object(i.m)(e).then(function(e){0===e.data.count?(clearInterval(t.check_job_status),console.log("game over"),t.$emit("updateStatus"),t.fetchDeployJobData()):console.log("check job_status 3/s")})},3e3):(console.log("game over22"),clearInterval(t.check_job_status),t.$emit("updateStatus"))})},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchDeployJobData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*c.LIMIT,this.fetchDeployJobData()},handleSelectionChange:function(t){this.selectId=[];for(var e=0,s=t.length;e<s;e++)this.selectId.push(t[e].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},deleteForm:function(){var t=this;clearInterval(this.check_job_status);for(var e=0,s=this.selectId.length;e<s;e++)Object(i.a)(this.selectId[e]).then(function(s){delete t.selectId[e]});setTimeout(this.fetchDeployJobData,1e3)},showJobResult:function(t){this.showresult=!0;var e=new Function("return "+t)(),s=[];o()(e).map(function(t){s.push({host:t,data:e[t]})}),this.job_results=s},searchClick:function(){this.fetchDeployJobData()}}},p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-card",[s("div",{staticClass:"table-button"},[s("a",{staticClass:"jobname"},[t._v("发布记录")]),t._v(" "),s("el-button",{staticStyle:{padding:"3px 0","margin-left":"20px"},attrs:{type:"danger",plain:"",icon:"el-icon-refresh"},on:{click:t.fetchDeployJobData}},[t._v("刷新\n      ")])],1),t._v(" "),s("div",{staticClass:"table-search"},[s("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}},[s("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1),t._v(" "),s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},["super"===t.role?s("el-table-column",{attrs:{type:"selection"}}):t._e(),t._v(" "),s("el-table-column",{attrs:{prop:"version",label:"发布版本"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[s("el-popover",{attrs:{placement:"top",width:"200",trigger:"hover",content:e.row.content}},[s("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[t._v(t._s(e.row.version))])],1)],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"deploy_status",label:"发布状态",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[s("el-button",{attrs:{plain:"",size:"mini",type:t.DEPLOY_STATUS[e.row.deploy_status].type,icon:t.DEPLOY_STATUS[e.row.deploy_status].icon}},[t._v("\n                "+t._s(t.DEPLOY_STATUS[e.row.deploy_status].text)+"\n              ")])],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"env",label:"发布步骤"}}),t._v(" "),s("el-table-column",{attrs:{prop:"deploy_cmd_host",label:"命令目标"}}),t._v(" "),s("el-table-column",{attrs:{prop:"action_user",label:"发布人"}}),t._v(" "),s("el-table-column",{attrs:{prop:"create_time",label:"发布时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(t._f("formatTime")(e.row.create_time))+"\n            ")])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"success",size:"mini",disabled:!e.row.result},on:{click:function(s){t.showJobResult(e.row.result)}}},[t._v("结果\n            ")])]}}])})],1)],1),t._v(" "),s("div",{staticClass:"table-footer"},["super"===t.role?s("div",{staticClass:"table-button"},[s("el-button",{attrs:{type:"danger",icon:"delete",disabled:t.butstatus},on:{click:t.deleteForm}},[t._v("删除记录")])],1):t._e(),t._v(" "),s("div",{staticClass:"table-pagination"},[s("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),s("el-dialog",{attrs:{visible:t.showresult},on:{"update:visible":function(e){t.showresult=e}}},[s("div",t._l(t.job_results,function(e){return s("div",{key:e.id,staticClass:"runlog"},[s("p",{staticClass:"host"},[t._v(t._s(e.host))]),t._v(" "),s("pre",[t._v(t._s(e.data))])])}))])],1)},h=[],f={render:p,staticRenderFns:h},b=f,_=s("VU/8"),v=a,y=_(d,b,!1,v,null,null);e.default=y.exports}});