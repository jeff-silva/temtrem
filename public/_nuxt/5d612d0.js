(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{655:function(t,n,e){var content=e(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("2309e88c",content,!0,{sourceMap:!1})},694:function(t,n,e){"use strict";e(655)},695:function(t,n,e){var o=e(43)(!1);o.push([t.i,".ui-content.form-control{height:auto}",""]),t.exports=o},760:function(t,n,e){"use strict";e.r(n);e(6),e(36),e(4),e(63),e(625),e(629),e(631),e(632),e(633),e(634),e(635),e(636),e(637),e(638),e(639),e(640),e(641),e(642),e(643),e(644),e(646),e(647),e(648),e(649),e(650),e(651),e(652),e(653),e(654);var o={name:"ui-content",props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},formControlHandle:function(t){this.props.value=t.target.innerHTML,this.$emit("input",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}},mounted:function(){this.$el.innerHTML=this.props.value}},r=(e(694),e(15)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"form-control ui-content",attrs:{contenteditable:"true"},on:{keyup:function(n){return t.formControlHandle(n)},click:function(n){return t.formControlHandle(n)}}})}),[],!1,null,null,null);n.default=component.exports}}]);