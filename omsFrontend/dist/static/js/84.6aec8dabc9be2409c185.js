webpackJsonp([84],{"5cvz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("0xDb"),i=a("nSkA"),o=a("ZTLr"),n=a("+Yhu"),s={data:function(){return{rowdata:{},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},types:[],route_path:this.$route.path.split("/"),wikiid:this.$route.params.wikiid,rules:{rules:{title:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请选择正确的内容",trigger:"change"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]}}}},created:function(){this.fetchData(),this.getTicketType()},methods:{fetchData:function(){var t=this;Object(n.d)(null,this.wikiid).then(function(e){t.rowdata=e.data})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(n.h)(e.rowdata.id,e.rowdata).then(function(t){e.$message({message:"恭喜你，更新成功",type:"success"}),e.$router.push("/wikis/wikiadmin")}).catch(function(t){e.$message.error("更新失败"),console.log(t)})})},getTicketType:function(){var t=this;Object(o.e)().then(function(e){t.types=e.data})},imgAdd:function(t,e){var a=this.$refs.md,o=new FormData;o.append("username",this.rowdata.create_user),o.append("file",e),o.append("create_time",Object(r.a)(e.lastModified)),o.append("type",e.type),o.append("archive",this.route_path[1]),Object(i.i)(o).then(function(e){a.$imglst2Url([[t,e.data.file]])})}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",{staticStyle:{"min-height":"800px"}},[a("el-form",{ref:"ruleForm",attrs:{model:t.rowdata,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.rowdata.title,callback:function(e){t.$set(t.rowdata,"title",e)},expression:"rowdata.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:t.rowdata.type,callback:function(e){t.$set(t.rowdata,"type",e)},expression:"rowdata.type"}},t._l(t.types,function(t){return a("el-option",{key:t.id,attrs:{value:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"正文",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"min-height":"500px"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.rowdata.content,callback:function(e){t.$set(t.rowdata,"content",e)},expression:"rowdata.content"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("立即更新")])],1)],1)],1)],1)},c=[],d={render:l,staticRenderFns:c},u=d,p=a("VU/8"),m=p(s,u,!1,null,null,null);e.default=m.exports}});