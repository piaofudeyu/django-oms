webpackJsonp([58],{"38YR":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.right-title{font-size:20px;font-weight:600;padding-left:10px}.card-head-btn{float:right;padding:3px 0}.appendInfo{padding:5px;margin:5px}.action{margin:5px}.han{margin-left:5px}",""])},"7nVu":function(t,a,e){"use strict";function s(t){e("xXUi")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("Dd8w"),n=e.n(i),c=e("EMlb"),l=e("Xoog"),r=e.n(l),o=e("QmSG"),_=e("NYxO"),d={components:{VueMarkdown:r.a},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.id,ticketData:{},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},Demand_Status:{0:"未审核",1:"已通过",2:"未通过",3:"已完成"},Status_Text:{1:"已指派",2:"处理中",3:"待测试",4:"测试中",5:"已测试",6:"待上线",7:"已上线",8:"暂停"},users:[],errortime:!1,apiurl:o.apiUrl,enclosureData:[],viewdemand_btn_add_project:!1,projectData:[]}},computed:n()({},Object(_.b)(["role","elements"])),created:function(){this.fetchData(),this.fetchEnclosureData()},methods:{fetchData:function(){var t=this;Object(c.j)(null,this.pid).then(function(a){t.ticketData=a.data,t.fetchProjectData(t.ticketData.name)})},fetchEnclosureData:function(){var t=this,a={project__id:this.pid};Object(c.i)(a).then(function(a){t.enclosureData=a.data})},fetchProjectData:function(t){var a=this,e={demand__name:t};Object(c.k)(e).then(function(t){a.projectData=t.data})}}},u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[e("el-card",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:16}},[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("a",{staticClass:"title"},[t._v(t._s(t.ticketData.name))]),t._v(" "),e("hr",{staticClass:"heng"}),t._v(" "),e("div",{staticClass:"appendInfo"},[e("a",{staticClass:"ticketinfo create_user"},[e("span",{staticClass:"han"},[t._v("\n                              创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),e("a",{staticClass:"ticketinfo create_user"},[e("span",{staticClass:"han"},[e("a",{staticClass:"shu"}),t._v("\n                              发起人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),e("a",{staticClass:"shu"}),t._v(" "),e("span",{staticClass:"han"},[t._v("类型：")]),t._v(" "),t.ticketData.type?e("a",[t._v(t._s(t.ticketData.type))]):e("a",{staticClass:"ticketinfo"},[t._v("未设置")]),t._v(" "),e("a",{staticClass:"shu"}),t._v(" "),e("span",{staticClass:"han"},[t._v("当前状态：")]),t._v(" "),e("el-tag",[t._v("\n                "+t._s(t.Demand_Status[t.ticketData.status])+"\n              ")]),t._v(" "),e("a",{staticClass:"shu"}),t._v(" "),e("span",{staticClass:"han"},[t._v("计划结束时间：")]),t._v(" "),t.ticketData.end_time?e("a",{staticClass:"ticketinfo"},[t._v(t._s(t.ticketData.end_time))]):e("a",{staticClass:"ticketinfo"},[t._v("未设置")])],1)]),t._v(" "),e("vue-markdown",{attrs:{source:t.ticketData.content}}),t._v(" "),e("hr",{staticClass:"heng"}),t._v(" "),t.enclosureData.length>0?e("div",[e("ul",t._l(t.enclosureData,function(a){return a.file?e("li",{key:a.id,staticStyle:{"list-style":"none"}},[e("i",{staticClass:"fa fa-paperclip"}),t._v(" "),e("a",{attrs:{href:t.apiurl+"/upload/"+a.file,download:a.file}},[t._v(t._s(a.file.split("/")[1]))])]):t._e()}))]):t._e()],1)],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("a",{staticClass:"right-title"},[t._v("任务列表")])]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.projectData,stripe:""}},[e("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/projects/viewproject/"+a.row.id}},[e("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(a.row.name))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{attrs:{slot:"reference"},slot:"reference"},[e("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t.Status_Text[a.row.status]))])],1)]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"action_user",label:"开发",width:"80"}})],1)],1)],1)],1)],1)],1)},p=[],f={render:u,staticRenderFns:p},h=f,v=e("VU/8"),m=s,D=v(d,h,!1,m,null,null);a.default=D.exports},xXUi:function(t,a,e){var s=e("38YR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("3053fa62",s,!0)}});