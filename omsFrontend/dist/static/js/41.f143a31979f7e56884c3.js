webpackJsonp([41],{PzF8:function(t,i,a){var e=a("QmCv");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("78879046",e,!0)},QmCv:function(t,i,a){i=t.exports=a("FZ+f")(!1),i.push([t.i,".viewwiki{text-align:center}.viewwiki .viewwiki-content .meta{font-size:12px;font-weight:400;line-height:20px;color:hsla(0,0%,50%,.82)}.viewwiki .viewwiki-content .meta a{padding:0 10px}.viewwiki .viewwiki-content .meta a i{padding-right:5px}.viewwiki .viewwiki-content .meta a:hover{color:#4b4b4b}.viewwiki .viewwiki-content .abstract{text-align:left;margin:10px 10%}",""])},eJB1:function(t,i,a){"use strict";function e(t){a("PzF8")}Object.defineProperty(i,"__esModule",{value:!0});var n=a("+Yhu"),s=a("Xoog"),c=a.n(s),o={components:{VueMarkdown:c.a},data:function(){return{rowdata:{},route_path:this.$route.path.split("/"),wikiid:this.$route.params.wikiid}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(n.c)(null,this.wikiid).then(function(i){t.rowdata=i.data})}}},r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",{staticClass:"viewwiki"},[a("div",{staticClass:"viewwiki-content"},[a("h1",[t._v(t._s(t.rowdata.title))]),t._v(" "),a("div",{staticClass:"meta"},[a("a",{staticClass:"author"},[a("i",{staticClass:"fa fa-user"}),t._v(t._s(t.rowdata.create_user)+"\n        ")]),t._v(" "),a("a",{staticClass:"create_time"},[a("i",{staticClass:"fa fa-calendar"}),t._v(t._s(t._f("formatTime")(t.rowdata.create_time))+"\n        ")])]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("p",{staticClass:"abstract"},[a("vue-markdown",{attrs:{source:t.rowdata.content}})],1)])])],1)},w=[],l={render:r,staticRenderFns:w},v=l,d=a("VU/8"),u=e,h=d(o,v,!1,u,null,null);i.default=h.exports}});