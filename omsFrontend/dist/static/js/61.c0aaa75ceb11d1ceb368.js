webpackJsonp([61],{PeDL:function(e,t,r){"use strict";function a(e){r("qwqW")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("EMlb"),o=r("nSkA"),s=r("QmSG"),n=r("0xDb"),i={components:{},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.id,ruleForm:{},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},users:[],toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},apiurl:s.apiUrl,uploadurl:s.uploadurl,types:[],img_file:{},count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""}}},created:function(){this.fetchData(),this.getTypes(),this.fetchEnclosureData()},methods:{fetchData:function(){var e=this;Object(l.j)(null,this.pid).then(function(t){e.ruleForm=t.data,e.enclosureForm.project=e.ruleForm.id,e.count=t.data.length})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(l.B)(t.ruleForm.id,t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，更新成功"}),t.$router.push("/projects/demands")})})},resetForm:function(e){this.$refs[e].resetFields()},getTypes:function(){var e=this;Object(l.n)().then(function(t){e.types=t.data})},imgAdd:function(e,t){var r=this.$refs.md,a=new FormData;a.append("username",localStorage.getItem("username")),a.append("file",t),a.append("create_time",Object(n.a)(t.lastModified)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(o.i)(a).then(function(t){r.$imglst2Url([[e,t.data.file]])})},beforeAvatarUpload:function(e){var t=this,r=new FormData;return r.append("username",this.enclosureForm.create_user),r.append("file",e),r.append("create_time",Object(n.a)()),r.append("type",e.type),r.append("archive",this.route_path[1]),Object(o.i)(r).then(function(e){t.enclosureForm.file=e.data.filepath,Object(l.t)(t.enclosureForm),"Created"===e.statusText&&t.$message({type:"success",message:"恭喜你，上传成功"}),t.fetchEnclosureData()}).catch(function(e){t.$message.error("上传失败"),t.$refs.upload.clearFiles(),console.log(e)}),!0},fetchEnclosureData:function(){var e=this,t={project__id:this.pid};Object(l.i)(t).then(function(t){e.enclosureData=t.data,e.count=t.data.length})},deleteEnclosure:function(e){Object(l.b)(e),this.fetchEnclosureData()}}},c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"show-file-list":!1,"before-upload":e.beforeAvatarUpload}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"}),e._v(" "),e.enclosureData.length>0?r("div",{staticClass:"ticketenclosure"},[r("ul",e._l(e.enclosureData,function(t){return t.file?r("li",{key:t.id,staticStyle:{"list-style":"none"}},[r("i",{staticClass:"fa fa-paperclip"}),e._v(" "),r("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除附件",placement:"right"}},[r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){e.deleteEnclosure(t.id)}}})],1)],1):e._e()}))]):e._e()],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("更新")])],1)],1)],1)],1)},u=[],p={render:c,staticRenderFns:u},d=p,m=r("VU/8"),f=a,h=m(i,d,!1,f,null,null);t.default=h.exports},qwqW:function(e,t,r){var a=r("wzFX");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("3ef67130",a,!0)},wzFX:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])}});