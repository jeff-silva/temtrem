(window.webpackJsonp=window.webpackJsonp||[]).push([[60,9,23,24,33],{603:function(t,e,n){"use strict";n.r(e);var r={props:{horizontal:{default:!1},label:{default:""},help:{default:""},error:{default:""}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group row no-gutters mb-3"},[t.horizontal?[n("label",[t._v(t._s(t.label))]),t._v(" "),t._t("default"),t._v(" "),t.help?n("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e(),t._v(" "),t.error?n("small",{staticClass:"d-block text-danger",domProps:{innerHTML:t._s(t.error)}}):t._e()]:[n("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[n("div",[t._v(t._s(t.label))]),t._v(" "),t.help?n("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),n("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?n("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)]],2)}),[],!1,null,null,null);e.default=component.exports},604:function(t,e,n){var content=n(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("615b391c",content,!0,{sourceMap:!1})},609:function(t,e,n){"use strict";n(604)},610:function(t,e,n){var r=n(40)(!1);r.push([t.i,".ui-file{position:relative}",""]),t.exports=r},612:function(t,e,n){"use strict";n.r(e);n(36),n(26);var r={props:{value:Object},data:function(){return{products:{loading:!1,params:{business_id:this.value.id,perpage:99},results:{data:[]}}}},computed:{groupsProducts:function(){var t=JSON.parse(JSON.stringify(this.products.results.data)),e=JSON.parse(JSON.stringify(this.value.groups));return 0==(e=e.map((function(e){return e.products=t.filter((function(t){return e.products.indexOf(t.id)>=0})),e}))).length&&e.push({id:"all",name:"Todos",products:t}),e}},methods:{refresh:function(){this.loadProducts()},loadProducts:function(){var t=this;this.products.loading=!0;var e=this.products.params;e.business_id=this.value.id,this.$axios.get("/api/temtrem-product/search",{params:e}).then((function(e){t.products.loading=!1,t.products.results=e.data}))}},mounted:function(){this.refresh()}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{overflow:"auto"}},[t.value.cover&&t.value.cover.url?n("img",{staticStyle:{width:"100%",height:"150px","object-fit":"cover"},attrs:{src:t.value.cover.url,alt:""}}):t._e(),t._v(" "),n("div",{staticClass:"p-3"},[n("h1",[t._v(t._s(t.value.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.value.description)}}),t._v(" "),t.value.route&&t.value.district&&t.value.city&&t.value.state?n("small",{staticClass:"text-muted d-block"},[n("i",{staticClass:"fas fa-map-marker"}),t._v("  \r\n            "+t._s(t.value.route)+" "+t._s(t.value.number)+", "+t._s(t.value.district)+",\r\n            "+t._s(t.value.city)+" "+t._s(t.value.state)+"\r\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"mb-4"}),t._v(" "),t._l(t.groupsProducts,(function(g){return n("div",{staticClass:"mb-4"},[g.products.length>0?[n("div",[n("small",{staticClass:"font-weight-bold"},[t._v(t._s(g.name))])]),t._v(" "),t._l(g.products,(function(p){return n("div",{staticClass:"mb-2"},[n("div",{staticClass:"d-flex align-items-center bg-white shadow-sm mb-2"},[p.cover&&p.cover.url?n("div",{staticClass:"p-1"},[n("img",{staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:p.cover.url,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"flex-grow-2 p-3"},[n("div",{staticClass:"font-weight-bold"},[t._v(t._s(p.name))]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v(t._s(p.price)+" "+t._s(p.unity||"Unidade"))])])])])}))]:t._e()],2)}))],2)])}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";n.r(e);n(32),n(20),n(26),n(45),n(19),n(46);var r=n(12);n(73),n(42),n(7),n(62),n(21);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{value:{default:Object}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t)),this.props.value=this.valueDefault(this.props.value)}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),showModal:!1,focused:!1}},methods:{emitValue:function(){this.$emit("input",this.props.value)},valueDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({name:"",filename:"",size:0,type:"",url:""},t=JSON.parse(JSON.stringify(t||{})))},handleFile:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(e){var n=e.target.files[0],r=new FileReader;r.readAsDataURL(n),r.onload=function(){t.props.value={name:n.name.split(".").slice(0,-1).join("."),filename:n.name,size:n.size,type:n.type,url:r.result},t.emitValue()}}}).click()},handleFocused:function(t){this.focused=this.$el.contains(t.target)}},computed:{computedIcon:function(){var t="fa-upload";return this.props.value&&this.props.value.type&&(t="audio"==(t=this.props.value.type.split("/")[0])?"fa-file-audio":"image"==t?"fa-image":"fa-file"),t}},mounted:function(){document.addEventListener("click",this.handleFocused)}},d=(n(609),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-file"},[n("div",{staticClass:"input-group form-control p-0 rounded-0"},[n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.handleFile()}}},[n("i",{staticClass:"fas fa-upload"})])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.url,expression:"props.value.url"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"URL"},domProps:{value:t.props.value.url},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"url",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-btn"},[t.props.value.url?n("button",{staticClass:"btn btn-danger rounded-0 border border-danger text-white",attrs:{type:"button"},on:{click:function(e){t.props.value=t.valueDefault()}}},[n("i",{staticClass:"fas fa-times"})]):t._e()])])]),t._v(" "),n("el-collapse-transition",[t.focused?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.name,expression:"props.value.name"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Descrição"},domProps:{value:t.props.value.name},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"name",e.target.value)}}})]):t._e()]),t._v(" "),n("el-collapse-transition",[t.props.value&&t.props.value.url?n("div",{staticClass:"border border-top-0"},[n("img",{staticStyle:{width:"100%","max-height":"200px","object-fit":"contain"},attrs:{src:t.props.value.url,alt:t.props.value.name}})]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},619:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=9)}([function(t,e,n){"use strict";e.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(t,e,n){"use strict";var r=n(2),i=n(5),u=n(0);e.a=function(t,e){if(e.value){var o=n.i(i.a)(u.a,e.value);if("INPUT"!==t.tagName.toLocaleUpperCase()){var a=t.getElementsByTagName("input");1!==a.length||(t=a[0])}t.oninput=function(){var e=t.value.length-t.selectionEnd;t.value=n.i(r.a)(t.value,o),e=Math.max(e,o.suffix.length),e=t.value.length-e,e=Math.max(e,o.prefix.length+1),n.i(r.b)(t,e),t.dispatchEvent(n.i(r.c)("change"))},t.onfocus=function(){n.i(r.b)(t,t.value.length-o.suffix.length)},t.oninput(),t.dispatchEvent(n.i(r.c)("input"))}}},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof t&&(t=t.toFixed(o(e.precision)));var n=t.indexOf("-")>=0?"-":"",a=d(l(u(t),e.precision)).split("."),p=a[0],r=a[1];return p=c(p,e.thousands),e.prefix+n+s(p,r,e.decimal)+e.suffix}function i(t,e){var n=t.indexOf("-")>=0?-1:1,i=l(u(t),e);return parseFloat(i)*n}function u(t){return d(t).replace(/\D+/g,"")||"0"}function o(t){return a(0,t,20)}function a(t,e,n){return Math.max(t,Math.min(e,n))}function l(t,e){var n=Math.pow(10,e);return(parseFloat(t)/n).toFixed(o(e))}function c(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+e)}function s(t,e,n){return e?t+n+e:t}function d(t){return t?t.toString():""}function p(t,e){var n=function(){t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function f(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var v=n(0);n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return f}))},function(t,e,n){"use strict";function r(t,e){e&&Object.keys(e).map((function(t){a.a[t]=e[t]})),t.directive("money",o.a),t.component("money",u.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(e,"Money",(function(){return u.a})),n.d(e,"VMoney",(function(){return o.a})),n.d(e,"options",(function(){return a.a})),n.d(e,"VERSION",(function(){return l}));var l="0.8.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);e.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(t,e){var r=n.i(u.a)(t,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(t){this.$emit("input",this.masked?t.target.value:n.i(u.d)(t.target.value,this.precision))}}}},function(t,e,n){"use strict";e.a=function(t,e){return t=t||{},e=e||{},Object.keys(t).concat(Object.keys(e)).reduce((function(n,r){return n[r]=void 0===e[r]?t[r]:e[r],n}),{})}},function(t,e,n){var r=n(7)(n(4),n(8),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var i,u=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,u=t.default);var a="function"==typeof u?u.options:u;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach((function(t){var e=r[t];l[t]=function(){return e}}))}return{esModule:i,exports:u,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:t.precision,decimal:t.decimal,thousands:t.thousands,prefix:t.prefix,suffix:t.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:t.formattedValue},on:{change:t.change}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},626:function(t,e,n){"use strict";n.r(e);var r={name:"ui-money",components:{Money:n(619).Money},props:{value:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=this.defaultProps(t)}}},methods:{defaultProps:function(t){return(t=JSON.parse(JSON.stringify(t))).value=isNaN(t.value)?0:t.value,t.value=t.value||0,t}},data:function(){return{props:this.defaultProps(this.$props)}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("money",t._b({staticClass:"form-control",nativeOn:{change:function(e){return t.$emit("input",t.props.value)}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},"money",{decimal:",",thousands:".",prefix:"R$ ",precision:2},!1))}),[],!1,null,null,null);e.default=component.exports},766:function(t,e,n){"use strict";n.r(e);n(33);var r={middleware:"auth",layout:"admin",data:function(){return{model:{},business:{}}},methods:{successHandler:function(t){this.$swal("","Produto salvo","success"),this.$router.push("/admin/temtrem/business/".concat(this.$route.params.id,"/product/").concat(t.id)),this.$refs.businessProfile.loadProducts()},loadProduct:function(){var t=this;+this.$route.params.productId&&(this.$axios.get("/api/temtrem-product/find/".concat(this.$route.params.productId)).then((function(e){t.model=e.data})),this.$axios.get("/api/temtrem-business/find/".concat(this.$route.params.id)).then((function(e){t.business=e.data})))}},mounted:function(){this.model.business_id=this.$route.params.id,this.loadProduct()}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-form",{attrs:{method:"post",action:"/api/temtrem-product/save"},on:{success:function(e){return t.successHandler(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.error;e.success,e.loading;return[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-8"},[n("ui-field",{attrs:{label:"Nome",error:r.name}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}})]),t._v(" "),n("ui-field",{attrs:{label:"Preço",error:r.price}},[n("ui-money",{model:{value:t.model.price,callback:function(e){t.$set(t.model,"price",e)},expression:"model.price"}})],1),t._v(" "),n("ui-field",{attrs:{label:"Imagem",error:r.cover}},[n("ui-file",{model:{value:t.model.cover,callback:function(e){t.$set(t.model,"cover",e)},expression:"model.cover"}})],1),t._v(" "),n("ui-actions",[n("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/temtrem/business/"+t.$route.params.id+"/"}},[t._v("\r\n                        Negócio\r\n                    ")]),t._v(" "),n("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/temtrem/business/"+t.$route.params.id+"/product/"}},[t._v("\r\n                        Produtos\r\n                    ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[n("i",{staticClass:"fas fa-save"}),t._v(" Salvar\r\n                    ")])],1)],1),t._v(" "),n("div",{staticClass:"col-12 col-md-4"},[n("temtrem-business-profile",{ref:"businessProfile",staticClass:"bg-white shadow-sm",model:{value:t.business,callback:function(e){t.business=e},expression:"business"}})],1)])]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:n(603).default,UiMoney:n(626).default,UiFile:n(613).default,UiActions:n(404).default,TemtremBusinessProfile:n(612).default,UiForm:n(406).default})}}]);