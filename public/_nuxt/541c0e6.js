(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{390:function(e,t,r){var content=r(396);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("9ad8599e",content,!0,{sourceMap:!1})},393:function(e,t,r){"use strict";var o=r(7),n=r(32),l=r(40),c=r(279),d=r(76),f=r(16),v=r(58).f,m=r(77).f,h=r(14).f,$=r(409).trim,_=o.Number,x=_,w=_.prototype,y="Number"==l(r(97)(w)),C="trim"in String.prototype,E=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,o,n,l=(t=C?t.trim():$(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,o)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(y?f((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new x(E(t)),r,_):E(t)};for(var O,j=r(13)?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;j.length>N;N++)n(x,O=j[N])&&!n(_,O)&&h(_,O,m(x,O));_.prototype=w,w.constructor=_,r(17)(o,"Number",_)}},394:function(e,t,r){var content=r(412);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("5dc4fad2",content,!0,{sourceMap:!1})},395:function(e,t,r){"use strict";var o=r(390);r.n(o).a},396:function(e,t,r){(t=r(30)(!1)).push([e.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),e.exports=t},397:function(e,t,r){"use strict";r.r(t);r(395);var o=r(8),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-actions"},[t("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[t("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports},398:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},399:function(e,t,r){"use strict";r.r(t);r(24),r(57),r(75),r(393);var o=r(2);r.n(o).a.component("ui-select-item",{props:{value:[Boolean,Number,String,Object,Array]},methods:{select:function(){var e=this;setTimeout((function(){e.$parent.selectedLabel=e.$parent.props.placeholder,e.$parent.props.multiple?e.selected&&(e.$parent.selectedLabel=e.$refs.content.innerHTML):e.$parent.props.value&&(e.$parent.selectedLabel=e.$refs.content.innerHTML),e.$parent.emitValue()}),100)},isInvisible:function(){return!(!this.$refs.content||!this.$parent.props.filter||this.$refs.content.innerText.toLowerCase().includes(this.$parent.props.filter.toLowerCase()))}},computed:{selected:function(){return this.$parent.props.multiple?this.$parent.props.value.indexOf(this.value)>=0:this.$parent.props.value==this.value}},template:'<label class="d-block p-2 m-0 ui-select-item" :class="{\'d-none\':isInvisible()}" @click="select()">\n    <input class="d-none" type="checkbox" v-model="$parent.props.value" :true-value="value" :value="value" v-if="$parent.props.multiple" />\n    <input class="d-none" type="radio" :name="$parent.props.name" v-model="$parent.props.value" :value="value" v-else />\n    \n    <div class="d-flex align-items-center">\n      <div class="flex-grow-1 ui-select-item-content" ref="content">\n        <slot></slot>\n      </div>\n\n      <div class="text-right" style="width:25px;">\n        <i class="fas" :class="{\'fa-check\':selected}"></i>\n      </div>\n    </div>\n  </label>'});var n={props:{value:[Boolean,Number,String,Object,Array],multiple:{default:!1},placeholder:{default:"Selecione"},name:{default:""},filter:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){var data={focused:!1};return data.selectedLabel=this.$props.placeholder,data.props=Object.assign({},this.$props),data.props.multiple?Array.isArray(data.props.value)||(data.props.value=[data.props.value]):Array.isArray(data.props.value)&&(data.props.value=data.props.value[0]||!1),data},methods:{emitValue:function(){this.$emit("input",this.props.value)},documentClickHandle:function(e){this.focused=this.$el.contains(e.target)}},mounted:function(){this.props.name=this.props.name||"input-"+Math.round(9999*Math.random()),document.addEventListener("click",this.documentClickHandle)},beforeDestroy:function(){document.removeEventListener("click",this.documentClickHandle)}},l=(r(411),r(8)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-select"},[r("div",{staticClass:"input-group"},[r("div",{staticClass:"form-control border-0",domProps:{innerHTML:e._s(e.selectedLabel)}}),e._v(" "),e.props.multiple&&e.props.value.length>=2?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text bg-white border-0"},[e._v("\r\n      + "+e._s(e.props.value.length-1)+"\r\n    ")])]):r("div",{staticClass:"input-group-append"},[e._m(0)])]),e._v(" "),e.focused?r("div",{staticClass:"ui-select-dropdown"},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.filter,expression:"props.filter"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.props.filter},on:{input:function(t){t.target.composing||e.$set(e.props,"filter",t.target.value)}}}),e._v(" "),e._m(1)]),e._v(" "),r("div",{staticClass:"ui-select-options bg-white shadow-sm"},[e._t("default")],2)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-text bg-white border-0"},[t("i",{staticClass:"fas fa-caret-down"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-append"},[t("div",{staticClass:"input-group-text"},[t("i",{staticClass:"fas fa-search"})])])}],!1,null,null,null);t.default=component.exports},400:function(e,t,r){"use strict";r.r(t);var o={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&e.$set(e.props,"value",r.concat([null])):l>-1&&e.$set(e.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(414).default})},407:function(e,t,r){"use strict";r.r(t);var o={props:{label:{default:""},help:{default:""},error:{default:""}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[e._v(e._s(e.label))]),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},409:function(e,t,r){var o=r(10),n=r(41),l=r(16),c=r(410),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(e,t,r){var n={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=n[e]=d?t(h):c[e];r&&(n[r]=f),o(o.P+o.F*d,"String",n)},h=m.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=m},410:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},411:function(e,t,r){"use strict";var o=r(394);r.n(o).a},412:function(e,t,r){(t=r(30)(!1)).push([e.i,".ui-select *{transition:all .3s ease}.ui-select{position:relative;cursor:pointer}.ui-select-dropdown{position:absolute;top:100%;left:0;width:100%;z-index:3}.ui-select-options{max-height:300px;overflow:auto}.ui-select-item:hover{background:#eee}",""]),e.exports=t},414:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;t+=10*(l-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(8),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,r){"use strict";r.r(t);r(393);var o={props:{value:[String,Number,Array,Object,Boolean],multiple:{default:!1},placeholder:{default:"Selecione"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-select",{attrs:{multiple:e.props.multiple,placeholder:e.props.placeholder},on:{input:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},[r("ui-select-item",{attrs:{value:"admin"}},[e._v("Admin")]),e._v(" "),r("ui-select-item",{attrs:{value:"user"}},[e._v("User")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiSelect:r(399).default})},607:function(e,t,r){"use strict";r.r(t);r(78),r(26),r(25),r(4),r(59);var o=r(42);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={layout:"admin",middleware:"auth",data:function(){return{model:l({},this.$store.state.user.model),error:l({},this.$store.state.user.error)}},mounted:function(){this.$store.dispatch("user/find",this.$route.params.id||0)}},d=r(8),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-form",{on:{submit:function(t){return e.$store.dispatch("user/save",e.model)}}},[r("ui-field",{attrs:{label:"name",error:e.error.name}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.model.name},on:{input:function(t){t.target.composing||e.$set(e.model,"name",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"email",error:e.error.email}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.model.email},on:{input:function(t){t.target.composing||e.$set(e.model,"email",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"password",error:e.error.password}},[r("ui-password",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),r("ui-field",{attrs:{label:"type",error:e.error.type}},[r("ui-user-type",{model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}})],1),e._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/user"}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v(" Voltar\n\t\t\t")]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-save"}),e._v(" Salvar\n\t\t\t")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(407).default,UiPassword:r(400).default,UiUserType:r(494).default,UiActions:r(397).default,UiForm:r(398).default})}}]);