(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{518:function(e,t,r){var content=r(522);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("9ad8599e",content,!0,{sourceMap:!1})},521:function(e,t,r){"use strict";var n=r(518);r.n(n).a},522:function(e,t,r){(t=r(34)(!1)).push([e.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),e.exports=t},523:function(e,t,r){"use strict";r.r(t);r(521);var n=r(10),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-actions"},[t("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[t("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports},524:function(e,t,r){"use strict";var n=r(7),o=r(36),l=r(48),c=r(346),d=r(100),f=r(18),v=r(73).f,h=r(101).f,m=r(15).f,_=r(534).trim,x=n.Number,O=x,w=x.prototype,y="Number"==l(r(145)(w)),N="trim"in String.prototype,$=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=N?t.trim():_(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(y?f((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new O($(t)),r,x):$(t)};for(var j,E=r(13)?v(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)o(O,j=E[C])&&!o(x,j)&&m(x,j,h(O,j));x.prototype=w,w.constructor=x,r(19)(n,"Number",x)}},532:function(e,t,r){"use strict";r.r(t);var n={props:{label:{default:""},help:{default:""},error:{default:""}}},o=r(10),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[e._v(e._s(e.label))]),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},534:function(e,t,r){var n=r(9),o=r(49),l=r(18),c=r(535),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(e,t,r){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=o[e]=d?t(m):c[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},m=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=h},535:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},540:function(e,t,r){"use strict";r.r(t);r(11),r(524);var n={props:{value:[String,Number,Array,Object,Boolean],multiple:{default:!1},placeholder:{default:"Selecione"},fieldValue:{default:"id"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{loading:!1,results:{data:[]},props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;var r={search:t,perpage:0};this.$axios.get("/api/user/search",{params:r}).then((function(t){e.loading=!1,e.results=t.data}))}},mounted:function(){this.search()}},o=r(10),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",multiple:e.props.multiple,placeholder:e.props.placeholder,loading:e.loading,"remote-method":e.search},on:{change:function(t){return e.emitValue()},input:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},e._l(e.results.data,(function(i){return r("el-option",{key:i.id,attrs:{value:i[e.fieldValue],label:i.name}},[e._v("\n\t\t"+e._s(i.name)+"\n\t")])})),1)}),[],!1,null,null,null);t.default=component.exports},619:function(e,t,r){"use strict";r.r(t);r(524);var n={props:{value:[String,Number,Array,Object,Boolean],multiple:{default:!1},placeholder:{default:"Selecione"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)}}},o=r(10),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{attrs:{multiple:e.props.multiple,placeholder:e.props.placeholder},on:{input:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},[r("el-option",{attrs:{value:"em-andamento",label:"Em Andamento"}},[e._v("Em Andamento")]),e._v(" "),r("el-option",{attrs:{value:"concluido",label:"Concluido"}},[e._v("Concluido")])],1)}),[],!1,null,null,null);t.default=component.exports},737:function(e,t,r){"use strict";r.r(t);r(102),r(28),r(27),r(4),r(74);var n=r(50);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={layout:"admin",middleware:"auth",data:function(){return{edit:l({},this.$store.state.shop_order.edit),error:this.$store.state.shop_order.error}},mounted:function(){this.$store.dispatch("shop_order/find",this.$route.params.id||!1)}},d=r(10),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.shop_order.loading,expression:"$store.state.shop_order.loading"}],on:{submit:function(t){return t.preventDefault(),e.$store.dispatch("shop_order/save",e.edit)}}},[r("ui-field",{attrs:{label:"owner_id",error:e.error.owner_id}},[r("ui-user",{model:{value:e.edit.owner_id,callback:function(t){e.$set(e.edit,"owner_id",t)},expression:"edit.owner_id"}})],1),e._v(" "),r("ui-field",{attrs:{label:"buyer_id",error:e.error.buyer_id}},[r("ui-user",{model:{value:e.edit.buyer_id,callback:function(t){e.$set(e.edit,"buyer_id",t)},expression:"edit.buyer_id"}})],1),e._v(" "),r("ui-field",{attrs:{label:"status",error:e.error.status}},[r("ui-shop-order-status",{model:{value:e.edit.status,callback:function(t){e.$set(e.edit,"status",t)},expression:"edit.status"}})],1),e._v(" "),r("pre",[e._v(e._s(e.edit,e.error))]),e._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/shop-order"}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v(" Voltar\n\t\t\t")]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-save"}),e._v(" Salvar\n\t\t\t")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiUser:r(540).default,UiField:r(532).default,UiShopOrderStatus:r(619).default,UiActions:r(523).default})}}]);