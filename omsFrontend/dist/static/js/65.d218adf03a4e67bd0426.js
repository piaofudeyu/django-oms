webpackJsonp([65],{"3PNK":function(t,e,a){"use strict";function s(t){a("9hWK")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("lLHC"),o=a("QmSG"),n=a("MQTS"),i=a.n(n),r={components:{},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,pagesize:o.pagesize,pageformat:o.pageformat,listQuery:{limit:o.LIMIT,offset:"",status:"",search:""},STATUS_TEXT:{0:"进行中",1:"已完成",2:"搁置"},STATUS_COLOR:{0:"primary",1:"success",2:"warning"},editForm:!1,completeform:{id:"",status:"",task_complete:""},commentform:{project:"",content:"",create_user:localStorage.getItem("username")},commentData:[],selectcreatedate:"",selectupdatedate:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},onlyView:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},fetchCommentData:function(t){var e=this,a={project__id:t};Object(l.g)(a).then(function(t){e.commentData=t.data,e.commentData.map(function(t){var e=t.create_time,a=e.slice(0,10),s=e.slice(11,19);t.tag=a+" "+s})})},deleteGroup:function(t){var e=this;this.$confirm("你确定要删除这个, 是否继续?","美丽的妲己提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.c)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},editComplete:function(t){100===t.task_complete?this.onlyView=!0:this.editForm=!0,this.completeform.id=this.commentform.project=t.id,this.completeform.task_complete=t.task_complete,this.completeform.content1=t.content1,this.completeform.status=t.status.toString(),this.fetchCommentData(this.completeform.id)},addComment:function(){var t=this;Object(l.k)(this.commentform).then(function(){t.fetchCommentData(t.completeform.id)})},updateComplete:function(){var t=this;"2"!==this.completeform.status&&(100===this.completeform.task_complete?this.completeform.status=1:this.completeform.status=0),Object(l.i)(this.completeform.id,this.completeform).then(function(e){t.fetchData(),t.editForm=!1})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*o.LIMIT,this.fetchData()},changeStatus:function(){this.fetchData()},selectCreatedate:function(t){t?(this.listQuery.create_date_0=i()(t[0],"YYYY-MM-DD"),this.listQuery.create_date_1=i()(t[1],"YYYY-MM-DD")):(this.listQuery.create_date_0="",this.listQuery.create_date_1=""),this.fetchData()},selectUpdatedate:function(t){t?(this.listQuery.update_date_0=i()(t[0],"YYYY-MM-DD"),this.listQuery.update_date_1=i()(t[1],"YYYY-MM-DD")):(this.listQuery.update_date_0="",this.listQuery.update_date_1=""),this.fetchData()}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"创建日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.selectCreatedate},model:{value:t.selectcreatedate,callback:function(e){t.selectcreatedate=e},expression:"selectcreatedate"}}),t._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"修改日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.selectUpdatedate},model:{value:t.selectupdatedate,callback:function(e){t.selectupdatedate=e},expression:"selectupdatedate"}}),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"编号、标题、内容"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"pid",label:"编号",width:"153"}}),t._v(" "),a("el-table-column",{attrs:{prop:"demand",label:"关联项目",width:"153"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务概要"}}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"负责人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini",type:t.STATUS_COLOR[e.row.status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[e.row.status])+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"task_complete",label:"进度",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.task_complete)+"%\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom",width:"152"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"修改时间",sortable:"custom",width:"152"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[t._v(t._s(t._f("parseDate")(e.row.update_time)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){t.editComplete(e.row)}}},[t._v("进度")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{small:"","current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),a("el-dialog",{attrs:{title:"任务进度",visible:t.editForm},on:{"update:visible":function(e){t.editForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"任务内容"}},[a("span",[t._v(t._s(t.completeform.content1))])]),t._v(" "),a("el-form-item",{attrs:{label:"完成百分比"}},[a("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.completeform.task_complete,callback:function(e){t.$set(t.completeform,"task_complete",e)},expression:"completeform.task_complete"}}),t._v(" "),a("a",[t._v(t._s(t.completeform.task_complete)+"%")])],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:t.completeform.status,callback:function(e){t.$set(t.completeform,"status",e)},expression:"completeform.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"进度详情"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入进度详情"},model:{value:t.commentform.content,callback:function(e){t.$set(t.commentform,"content",e)},expression:"commentform.content"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.addComment}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateComplete}},[t._v("确定")])],1)],1),t._v(" "),[a("light-timeline",{attrs:{items:t.commentData}})]],2),t._v(" "),a("el-dialog",{attrs:{title:"任务进度",visible:t.onlyView},on:{"update:visible":function(e){t.onlyView=e}}},[100==t.completeform.task_complete?a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}}):t._e(),t._v(" "),a("light-timeline",{attrs:{items:t.commentData}})],1)],1)},u=[],m={render:c,staticRenderFns:u},p=m,d=a("VU/8"),f=s,h=d(r,p,!1,f,null,null);e.default=h.exports},"9hWK":function(t,e,a){var s=a("hu2C");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("31d2a163",s,!0)},hu2C:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])}});