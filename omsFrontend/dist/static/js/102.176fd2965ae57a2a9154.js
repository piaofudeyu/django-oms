webpackJsonp([102],{"GBk+":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={data:function(){return{ruleForm:{name:"hosts",asset:"",method:"",before:"",diff:"",after:""},rules:{name:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],asset:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],method:[{required:!0,message:"请输入一个正确的内容",trigger:"change"}]},methods:["create","update","delete"]}},created:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$emit("formdata",r.ruleForm),r.ruleForm={name:"hosts",asset:"",method:"",before:"",after:""}})},resetForm:function(e){this.$refs[e].resetFields()}}},l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"模块名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"资产名称",prop:"asset"}},[t("el-input",{model:{value:e.ruleForm.asset,callback:function(r){e.$set(e.ruleForm,"asset",r)},expression:"ruleForm.asset"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"操作类型",prop:"method"}},[t("el-select",{attrs:{placeholder:"请选择操作类型"},model:{value:e.ruleForm.method,callback:function(r){e.$set(e.ruleForm,"method",r)},expression:"ruleForm.method"}},e._l(e.methods,function(e){return t("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"修改前数据",prop:"before"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.before,callback:function(r){e.$set(e.ruleForm,"before",r)},expression:"ruleForm.before"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修改后数据",prop:"after"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.after,callback:function(r){e.$set(e.ruleForm,"after",r)},expression:"ruleForm.after"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"前后数据对比",prop:"diff"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.diff,callback:function(r){e.$set(e.ruleForm,"diff",r)},expression:"ruleForm.diff"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},a=[],s={render:l,staticRenderFns:a},m=s,u=t("VU/8"),n=u(o,m,!1,null,null,null);r.default=n.exports}});