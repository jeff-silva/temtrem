(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{607:function(t,e,o){var content=o(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("8ea61a60",content,!0,{sourceMap:!1})},617:function(t,e,o){"use strict";o(607)},618:function(t,e,o){var n=o(40)(!1);n.push([t.i,".ui-html .ck-editor{border:1px solid #eee}.ui-html .ck-editor__editable,.ui-html .ck-toolbar{border:none!important;box-shadow:none!important}",""]),t.exports=n},624:function(t,e,o){"use strict";o.r(e);o(61);var n=o(631),r=o.n(n),c={props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(t){var e=this;setTimeout((function(){e.props=Object.assign({},t),e.ckeditor&&!e.$el.contains(document.activeElement)&&e.ckeditor.setData(e.props.value||"")}),10)}}},data:function(){return{ckeditor:!1,props:Object.assign({},this.$props)}},methods:{ckeditorInit:function(){var t=this,e={extraPlugins:[],codeBlock:{language:"javascript"},width:this.$el.offsetWidth};r.a.create(this.$refs.textarea,e).then((function(e){t.ckeditor=e,e.setData(t.props.value||""),e.model.document.on("change:data",(function(){t.$el.contains(document.activeElement)&&(t.props.value=e.getData(),t.$emit("input",t.props.value))}))}))}},mounted:function(){this.ckeditorInit()}},l=(o(617),o(5)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-html"},[e("textarea",{ref:"textarea"})])}),[],!1,null,null,null);e.default=component.exports}}]);