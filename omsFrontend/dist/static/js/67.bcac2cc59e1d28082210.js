webpackJsonp([67],{"O2B+":function(t,e,a){var s=a("lyMo");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("8968a686",s,!0)},Zthv:function(t,e,a){"use strict";function s(t){a("O2B+")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("lLHC"),o=a("QmSG"),n=a("HQ/U"),c=a("Xoog"),l=a.n(c),r={components:{addProject:n.default,VueMarkdown:l.a},data:function(){return{pid:this.$route.params.id,ticketData:{},STATUS_TEXT:{0:"进行中",1:"已完成",2:"搁置"},STATUS_COLOR:{0:"primary",1:"success",2:"warning"},apiurl:o.apiUrl,projectData:[],addForm:!1,editForm:!1,completeform:{id:"",status:"",task_complete:""},commentform:{project:"",content:"",create_user:localStorage.getItem("username")},commentData:[],onlyView:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(i.e)(null,this.pid).then(function(e){t.ticketData=e.data,t.fetchProjectData()})},fetchProjectData:function(){var t=this,e={demand__id:this.pid};Object(i.f)(e).then(function(e){t.projectData=e.data})},fetchCommentData:function(t){var e=this,a={project__id:t};Object(i.g)(a).then(function(t){e.commentData=t.data,e.commentData.map(function(t){var e=t.create_time,a=e.slice(0,10),s=e.slice(11,19);t.tag=a+" "+s})})},getDialogStatus:function(t){this.addForm=t,this.editForm=t,this.fetchData()},editComplete:function(t){100===t.task_complete?this.onlyView=!0:this.editForm=!0,this.completeform.id=this.commentform.project=t.id,this.completeform.task_complete=t.task_complete,this.completeform.content1=t.content1,this.completeform.status=t.status.toString(),this.fetchCommentData(this.completeform.id)},addComment:function(){var t=this;Object(i.k)(this.commentform).then(function(){t.fetchCommentData(t.completeform.id)})},updateComplete:function(){var t=this;"2"!==this.completeform.status&&(100===this.completeform.task_complete?this.completeform.status=1:this.completeform.status=0),Object(i.i)(this.completeform.id,this.completeform).then(function(e){t.fetchData(),t.editForm=!1})},deleteGroup:function(t){var e=this;this.$confirm("你确定要删除这个, 是否继续?","美丽的妲己提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.c)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"title"},[t._v(t._s(t.ticketData.name))]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("div",{staticClass:"appendInfo"},[a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[t._v("\n                              创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                              创建人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("计划开始日期：")]),t._v(" "),a("a",{staticClass:"ticketinfo"},[t._v(t._s(t.ticketData.start_time))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("计划完成日期：")]),t._v(" "),a("a",{staticClass:"ticketinfo"},[t._v(t._s(t.ticketData.end_time))])])]),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n            项目目标\n          ")]),t._v(" "),a("vue-markdown",{attrs:{source:t.ticketData.content1}})],1),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n            项目范围\n          ")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.content2))])]),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n            项目预算\n          ")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.content3))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"right-title"},[t._v("任务列表")]),t._v(" "),a("el-button",{staticClass:"card-head-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addForm=!0}}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.projectData,stripe:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini",type:t.STATUS_COLOR[e.row.status]}},[t._v(t._s(t.STATUS_TEXT[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"complete",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){t.editComplete(e.row)}}},[t._v("进度")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])],1)]}}])})],1)],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.addForm},on:{"update:visible":function(e){t.addForm=e}}},[a("add-project",{attrs:{demand:t.ticketData},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{title:"任务进度",visible:t.editForm},on:{"update:visible":function(e){t.editForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"任务内容"}},[a("span",[t._v(t._s(t.completeform.content1))])]),t._v(" "),a("el-form-item",{attrs:{label:"完成百分比"}},[a("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.completeform.task_complete,callback:function(e){t.$set(t.completeform,"task_complete",e)},expression:"completeform.task_complete"}}),t._v(" "),a("a",[t._v(t._s(t.completeform.task_complete)+"%")])],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:t.completeform.status,callback:function(e){t.$set(t.completeform,"status",e)},expression:"completeform.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"进度详情"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入进度详情"},model:{value:t.commentform.content,callback:function(e){t.$set(t.commentform,"content",e)},expression:"commentform.content"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.addComment}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.updateComplete}},[t._v("确定")])],1)],1),t._v(" "),[a("light-timeline",{attrs:{items:t.commentData}})]],2),t._v(" "),a("el-dialog",{attrs:{title:"任务进度",visible:t.onlyView},on:{"update:visible":function(e){t.onlyView=e}}},[100==t.completeform.task_complete?a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}}):t._e(),t._v(" "),a("light-timeline",{attrs:{items:t.commentData}})],1)],1)},p=[],d={render:m,staticRenderFns:p},f=d,u=a("VU/8"),_=s,h=u(r,f,!1,_,null,null);e.default=h.exports},lyMo:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.right-title{font-size:20px;font-weight:600;padding-left:10px}.card-head-btn{float:right;padding:3px 0}.appendInfo{padding:5px;margin:5px}.action{margin:5px}.han{margin-left:5px}",""])}});