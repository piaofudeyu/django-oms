webpackJsonp([33],{FTZb:function(t,e,a){"use strict";function s(t){a("hO/s")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("ZTLr"),c=a("nSkA"),r=a("QmSG"),l=a("Xoog"),u=a.n(l),d=a("vMJZ"),_=a("NYxO"),m=a("0xDb"),p={components:{VueMarkdown:u.a},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.pid,ticket_id:"",ticketData:{},commentData:{},enclosureData:{},apiurl:r.apiUrl,commentForm:{ticket:"",create_user:localStorage.getItem("username"),content:"【问题处理】"},enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},rowdata:{action_user:"",edit_user:""},count:0,toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},users:[],uploadurl:r.uploadurl,STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已完成",3:"搁置"},STATUS_TYPE:{0:"danger",1:"success",2:"info",3:"warning"},radio_status:"0",mailcontent:"",sendnotice:!1,sendop:!0,selectcopy:!1,workticketlist_btn_edit:!1}},computed:n()({},Object(_.b)(["role","elements","username"])),created:function(){this.workticketlist_btn_edit=this.elements["编辑工单-编辑工单按钮"],this.fetchData(),this.CommentData(),this.EnclosureData(),this.getUsers()},methods:{fetchData:function(){var t=this,e={pid:this.pid};Object(o.f)(e).then(function(e){t.ticketData=e.data[0],t.ticket_id=t.ticketData.id,t.rowdata.action_user=t.ticketData.action_user,t.rowdata.edit_user=t.ticketData.edit_user})},CommentData:function(){var t=this,e={ticket__pid:this.pid};Object(o.c)(e).then(function(e){t.commentData=e.data}),this.commentForm.content=""},EnclosureData:function(){var t=this,e={ticket__pid:this.pid};Object(o.d)(e).then(function(e){t.enclosureData=e.data,t.count=e.data.length})},deleteEnclosure:function(t){Object(o.a)(t),setTimeout(this.EnclosureData,1e3)},changeStatus:function(){var t=this,e={ticket_status:1,action_user:localStorage.getItem("username")};Object(o.g)(this.ticket_id,e).then(function(){t.fetchData()})},submitForm:function(t){var e=this;this.$confirm("你的操作即将提交，提交完成后会立即跳转到工单列表页面!","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(t){if(e.commentForm.ticket=e.ticket_id,e.rowdata.edit_user=e.commentForm.create_user,"1"===e.radio_status){e.commentForm.content="【工单状态变化】工单被"+e.commentForm.create_user+"重新指派给"+e.rowdata.action_user+","+e.mailcontent;var a={action_user:e.rowdata.action_user,title:"【工单更换指派人】"+e.ticketData.name,message:"指派人: "+e.rowdata.action_user+"\n工单地址: "+window.location.href};Object(c.h)(a)}else if("2"===e.radio_status){e.rowdata.ticket_status=e.ticketData.ticket_status=e.radio_status,e.commentForm.content="【工单状态变化】工单被"+e.commentForm.create_user+"关闭！"+e.mailcontent;var s={action_user:e.ticketData.create_user,title:"【工单已完成】"+e.ticketData.name,message:"指派人: "+e.ticketData.action_user+"\n工单地址: "+window.location.href};Object(c.h)(s)}else{if(e.commentForm.content="【问题处理】"+e.mailcontent,e.sendnotice){var i={action_user:e.ticketData.create_user,title:"【工单有新回复】"+e.ticketData.name,message:"指派人: "+e.ticketData.action_user+"\n工单地址: "+window.location.href};Object(c.h)(i)}if(e.sendop){var n={action_user:"itsupport",title:"【工单有新回复】"+e.ticketData.name,message:"指派人: "+e.ticketData.action_user+"\n工单地址: "+window.location.href};Object(c.h)(n)}}Object(o.h)(e.commentForm).then(function(t){e.patchForm(e.rowdata),e.$router.push("/worktickets/workticket")})}).catch(function(){e.$message({type:"error",message:"已取消本次操作"})})},patchForm:function(t){Object(o.g)(this.ticket_id,t)},handleSuccess:function(t,e){var a=this,s=new FormData;s.append("username",this.enclosureForm.create_user),s.append("file",e.raw),s.append("create_time",Object(m.a)(e.uid)),s.append("type",e.raw.type),s.append("archive",this.route_path[1]),Object(c.i)(s).then(function(t){a.enclosureForm.file=t.data.filepath,a.enclosureForm.ticket=a.ticket_id,Object(o.i)(a.enclosureForm),setTimeout(a.EnclosureData,1e3),"Created"===t.statusText&&a.$message({type:"success",message:"恭喜你，上传成功"})}).catch(function(t){a.$message.error("上传失败"),a.$refs.upload.clearFiles(),console.log(t)})},imgAdd:function(t,e){var a=this.$refs.md,s=new FormData;s.append("username",this.username),s.append("file",e),s.append("create_time",Object(m.a)(e.lastModified)),s.append("type",e.type),s.append("archive",this.route_path[1]),Object(c.i)(s).then(function(e){a.$imglst2Url([[t,e.data.file]])})},getUsers:function(){var t=this;Object(d.f)().then(function(e){t.users=e.data})}}},h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"workticket"},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"title"},[t._v(t._s(t.ticketData.name))]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("div",{staticClass:"appendInfo"},[a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[t._v("\n                              工单创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                              工单发起人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),a("a",{staticClass:"ticketinfo action_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                             工单指派者：")]),t._v(t._s(t.ticketData.action_user))]),t._v(" "),0!=t.ticketData.ticket_status?a("a",{staticClass:"ticketinfo action_user"},[a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("最新回复人：")]),t._v(t._s(t.ticketData.edit_user))]):t._e(),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("工单类型：")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.type))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("工单当前状态：")]),t._v(" "),a("el-tag",{attrs:{type:t.STATUS_TYPE[t.ticketData.ticket_status]}},[t._v("\n              "+t._s(t.STATUS_TEXT[t.ticketData.ticket_status])+"\n            ")])],1),t._v(" "),2!=t.ticketData.ticket_status?a("div",{staticClass:"appendInfo"},[a("span",{staticClass:"han"},[t._v("工单操作：")]),t._v(" "),"super"===t.role&&0===t.ticketData.ticket_status?a("el-button",{attrs:{type:"success",size:"small"},on:{click:t.changeStatus}},[t._v("接收\n            ")]):t._e(),t._v(" "),t.workticketlist_btn_edit||"super"===t.role?a("router-link",{attrs:{to:"/worktickets/copyworkticket/"+t.pid}},[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("乾坤大挪移")])],1):t._e(),t._v(" "),a("div",{staticClass:"action"},[a("el-radio-group",{model:{value:t.radio_status,callback:function(e){t.radio_status=e},expression:"radio_status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("不操作")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("关闭工单")]),t._v(" "),"super"===t.role?a("el-radio",{attrs:{label:"1"}},[t._v("更改指派人")]):t._e()],1),t._v(" "),1==t.radio_status?a("div",{staticClass:"action"},[a("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:t.rowdata.action_user,callback:function(e){t.$set(t.rowdata,"action_user",e)},expression:"rowdata.action_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})}))],1):t._e()],1)],1):t._e()]),t._v(" "),a("vue-markdown",{attrs:{source:t.ticketData.content}}),t._v(" "),t.ticketData.ticket_status<2?a("div",[a("hr",{staticClass:"heng"}),t._v(" "),a("el-upload",{ref:"upload",attrs:{action:t.uploadurl,"on-success":t.handleSuccess,"show-file-list":!1}},[a("el-button",{attrs:{slot:"trigger",size:"mini",type:"danger",plain:"",icon:"upload2",disabled:t.count>2},slot:"trigger"},[t._v("\n              上传附件\n            ")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("p",[t._v("上传文件不超过10m，"),a("a",{staticStyle:{color:"red"}},[t._v("最多只能上传3个文件")])])])],1),t._v(" "),a("hr",{staticClass:"heng"})],1):t._e(),t._v(" "),t.enclosureData.length>0?a("div",{staticClass:"ticketenclosure"},[a("ul",t._l(t.enclosureData,function(e){return e.file?a("li",{key:e.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),t._v(" "),a("a",{attrs:{href:t.apiurl+"/upload/"+e.file,download:e.file}},[t._v(t._s(e.file.split("/")[1]))]),t._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){t.deleteEnclosure(e.id)}}})],1):t._e()}))]):t._e()],1)],1),t._v(" "),t.ticketData.ticket_status<2?a("div",[a("el-form",{ref:"mailcontent",attrs:{model:t.commentForm,"label-width":"80px"}},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-form-item",{attrs:{label:"问题处理",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.mailcontent,callback:function(e){t.mailcontent=e},expression:"mailcontent"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到问题处理里面")])],1),t._v(" "),"0"===t.radio_status?a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:t.ticketData.create_user,callback:function(e){t.$set(t.ticketData,"create_user",e)},expression:"ticketData.create_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})})),t._v(" "),a("el-checkbox",{model:{value:t.sendnotice,callback:function(e){t.sendnotice=e},expression:"sendnotice"}},[t._v("发送通知")])],1):t._e(),t._v(" "),"0"===t.radio_status?a("el-form-item",{attrs:{label:"通知运维"}},[a("el-checkbox",{model:{value:t.sendop,callback:function(e){t.sendop=e},expression:"sendop"}})],1):t._e(),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1):t._e(),t._v(" "),t.commentData.length>0?a("el-card",{staticClass:"ticketcomment"},[t._v("\n      处理历史记录\n      "),t._l(t.commentData,function(e){return a("div",{key:e.id},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:1}},[a("el-button",{staticClass:"commentuser",attrs:{type:"primary",plain:""}},[t._v(t._s(e.create_user))])],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"dialog-box"},[a("span",{staticClass:"bot"}),t._v(" "),a("span",{staticClass:"top"}),t._v(" "),a("div",{staticClass:"comment"},[a("vue-markdown",{attrs:{source:e.content}}),t._v(" "),a("p",{staticClass:"commenttime"},[t._v("处理时间："+t._s(t._f("parseDate")(e.create_time)))])],1)])])],1)],1)})],2):t._e()],1)],1)},v=[],f={render:h,staticRenderFns:v},k=f,b=a("VU/8"),g=s,D=b(p,k,!1,g,null,null);e.default=D.exports},"hO/s":function(t,e,a){var s=a("sBuQ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("637529ae",s,!0)},sBuQ:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.appendInfo{padding:5px;margin:5px}.action{display:inline;margin-left:20px}.han{margin-left:5px}.content{margin:20px 5px}.ticketcomment{margin-top:20px;background-color:rgba(48,250,81,.17)}.ticketcomment .dialog-box{position:relative;left:100px;margin-left:-30px}.ticketcomment .dialog-box span{width:0;height:0;font-size:0;overflow:hidden;position:absolute}.ticketcomment .dialog-box span.bot{border-width:16px;border-style:solid dashed dashed;border-color:transparent rgba(48,250,81,.38) transparent transparent;top:10px;left:-30px}.ticketcomment .dialog-box .comment{border:1px solid rgba(255,164,186,.62);padding:6px;margin-bottom:10px;min-height:50px}.ticketcomment .dialog-box .comment .commenttime{float:right}",""])}});