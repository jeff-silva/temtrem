(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{668:function(t,n,e){var content=e(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("2309e88c",content,!0,{sourceMap:!1})},709:function(t,n,e){"use strict";e(668)},710:function(t,n,e){var o=e(40)(!1);o.push([t.i,".ui-content.form-control{height:auto}",""]),t.exports=o},775:function(t,n,e){"use strict";e.r(n);e(7),e(37),e(4),e(64),e(638),e(642),e(644),e(645),e(646),e(647),e(648),e(649),e(650),e(651),e(652),e(653),e(654),e(655),e(656),e(657),e(659),e(660),e(661),e(662),e(663),e(664),e(665),e(666),e(667);var o={name:"ui-content",props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},formControlHandle:function(t){this.props.value=t.target.innerHTML,this.$emit("input",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}},mounted:function(){this.$el.innerHTML=this.props.value}},r=(e(709),e(5)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"form-control ui-content",attrs:{contenteditable:"true"},on:{keyup:function(n){return t.formControlHandle(n)},click:function(n){return t.formControlHandle(n)}}})}),[],!1,null,null,null);n.default=component.exports}}]);