(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{518:function(t,e,r){var content=r(522);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("9ad8599e",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";var n=r(518);r.n(n).a},522:function(t,e,r){(e=r(34)(!1)).push([t.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),t.exports=e},523:function(t,e,r){"use strict";r.r(e);r(521);var n=r(10),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-actions"},[e("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[e("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},524:function(t,e,r){"use strict";var n=r(7),o=r(36),l=r(48),c=r(346),d=r(100),f=r(18),h=r(73).f,m=r(101).f,v=r(15).f,_=r(534).trim,x=n.Number,y=x,O=x.prototype,w="Number"==l(r(145)(O)),N="trim"in String.prototype,$=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=N?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(w?f((function(){O.valueOf.call(r)})):"Number"!=l(r))?c(new y($(e)),r,x):$(e)};for(var j,E=r(13)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(y,j=E[I])&&!o(x,j)&&v(x,j,m(y,j));x.prototype=O,O.constructor=x,r(19)(n,"Number",x)}},532:function(t,e,r){"use strict";r.r(e);var n={props:{label:{default:""},help:{default:""},error:{default:""}}},o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[t._v(t._s(t.label))]),t._v(" "),t.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},534:function(t,e,r){var n=r(9),o=r(49),l=r(18),c=r(535),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(v):c[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},535:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},540:function(t,e,r){"use strict";r.r(e);r(11),r(524);var n={props:{value:[String,Number,Array,Object,Boolean],multiple:{default:!1},placeholder:{default:"Selecione"},fieldValue:{default:"id"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{loading:!1,results:{data:[]},props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)},search:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;var r={search:e,perpage:0};this.$axios.get("/api/user/search",{params:r}).then((function(e){t.loading=!1,t.results=e.data}))}},mounted:function(){this.search()}},o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",multiple:t.props.multiple,placeholder:t.props.placeholder,loading:t.loading,"remote-method":t.search},on:{change:function(e){return t.emitValue()},input:function(e){return t.emitValue()}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},t._l(t.results.data,(function(i){return r("el-option",{key:i.id,attrs:{value:i[t.fieldValue],label:i.name}},[t._v("\n\t\t"+t._s(i.name)+"\n\t")])})),1)}),[],!1,null,null,null);e.default=component.exports},564:function(t,e,r){"use strict";r.r(e);r(11),r(524);var n={props:{value:[String,Number,Array,Object,Boolean],multiple:{default:!1},placeholder:{default:"Selecione"},fieldValue:{default:"id"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{loading:!1,results:{data:[]},props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)},search:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;var r={search:e,perpage:0};this.$axios.get("/api/shop-product/search",{params:r}).then((function(e){t.loading=!1,t.results=e.data}))}},mounted:function(){this.search()}},o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",multiple:t.props.multiple,placeholder:t.props.placeholder,loading:t.loading,"remote-method":t.search},on:{change:function(e){return t.emitValue()},input:function(e){return t.emitValue()}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},t._l(t.results.data,(function(i){return r("el-option",{key:i.id,attrs:{value:i[t.fieldValue],label:i.name}},[t._v("\n\t\t"+t._s(i.name)+"\n\t")])})),1)}),[],!1,null,null,null);e.default=component.exports},738:function(t,e,r){"use strict";r.r(e);r(102),r(28),r(27),r(4),r(74);var n=r(50);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={layout:"admin",middleware:"auth",data:function(){return{edit:l({},this.$store.state.shop_orders_item.edit),error:this.$store.state.shop_orders_item.error}},mounted:function(){this.$store.dispatch("shop_orders_item/find",this.$route.params.id||!1)}},d=r(10),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.shop_orders_item.loading,expression:"$store.state.shop_orders_item.loading"}],on:{submit:function(e){return e.preventDefault(),t.$store.dispatch("shop_orders_item/save",t.edit)}}},[r("ui-field",{attrs:{label:"user_id",error:t.error.user_id}},[r("ui-user",{model:{value:t.edit.user_id,callback:function(e){t.$set(t.edit,"user_id",e)},expression:"edit.user_id"}})],1),t._v(" "),r("ui-field",{attrs:{label:"product_id",error:t.error.product_id}},[r("ui-shop-product",{model:{value:t.edit.product_id,callback:function(e){t.$set(t.edit,"product_id",e)},expression:"edit.product_id"}})],1),t._v(" "),r("ui-field",{attrs:{label:"quantity",error:t.error.quantity}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.quantity,expression:"edit.quantity"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.edit.quantity},on:{input:function(e){e.target.composing||t.$set(t.edit,"quantity",e.target.value)}}})]),t._v(" "),r("pre",[t._v(t._s(t.edit,t.error))]),t._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/shop-orders-item"}},[r("i",{staticClass:"fas fa-chevron-left"}),t._v(" Voltar\n\t\t\t")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-save"}),t._v(" Salvar\n\t\t\t")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiUser:r(540).default,UiField:r(532).default,UiShopProduct:r(564).default,UiActions:r(523).default})}}]);