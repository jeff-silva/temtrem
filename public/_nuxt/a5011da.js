(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{631:function(t,e,n){var content=n(679);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("064767a4",content,!0,{sourceMap:!1})},642:function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},675:function(t,e,n){"use strict";var strong=n(676),r=n(642);t.exports=n(677)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},676:function(t,e,n){"use strict";var r=n(24).f,o=n(85),l=n(366),c=n(52),f=n(365),d=n(370),h=n(165),v=n(371),m=n(157),_=n(16),w=n(162).fastKey,y=n(642),C=_?"_s":"size",x=function(t,e){var n,r=w(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var v=t((function(t,r){f(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[C]=0,null!=r&&d(r,n,t[h],t)}));return l(v.prototype,{clear:function(){for(var t=y(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[C]=0},delete:function(t){var n=y(this,e),r=x(n,t);if(r){var o=r.n,l=r.p;delete n._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),n._f==r&&(n._f=o),n._l==r&&(n._l=l),n[C]--}return!!r},forEach:function(t){y(this,e);for(var n,r=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!x(y(this,e),t)}}),_&&r(v.prototype,"size",{get:function(){return y(this,e)[C]}}),v},def:function(t,e,n){var r,o,l=x(t,e);return l?l.v=n:(t._l=l={i:o=w(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[C]++,"F"!==o&&(t._i[o]=l)),t},getEntry:x,setStrong:function(t,e,n){h(t,e,(function(t,n){this._t=y(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))}),n?"entries":"values",!n,!0),m(e)}}},677:function(t,e,n){"use strict";var r=n(8),o=n(5),l=n(29),c=n(366),meta=n(162),f=n(370),d=n(365),h=n(18),v=n(17),m=n(156),_=n(84),w=n(166);t.exports=function(t,e,n,y,C,x){var E=r[t],k=E,A=C?"set":"add",S=k&&k.prototype,P={},j=function(t){var e=S[t];l(S,t,"delete"==t||"has"==t?function(a){return!(x&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return x&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(x||S.forEach&&!v((function(){(new k).entries().next()})))){var z=new k,O=z[A](x?{}:-0,1)!=z,$=v((function(){z.has(1)})),F=m((function(t){new k(t)})),I=!x&&v((function(){for(var t=new k,e=5;e--;)t[A](e,e);return!t.has(-0)}));F||((k=e((function(e,n){d(e,k,t);var r=w(new E,e,k);return null!=n&&f(n,C,r[A],r),r}))).prototype=S,S.constructor=k),($||I)&&(j("delete"),j("has"),C&&j("get")),(I||O)&&j(A),x&&S.clear&&delete S.clear}else k=y.getConstructor(e,t,C,A),c(k.prototype,n),meta.NEED=!0;return _(k,t),P[t]=k,o(o.G+o.W+o.F*(k!=E),P),x||y.setStrong(k,t,C),k}},678:function(t,e,n){"use strict";var r=n(631);n.n(r).a},679:function(t,e,n){(e=n(32)(!1)).push([t.i,".email-parser-animated{transition:all .2s ease}",""]),t.exports=e},709:function(t,e,n){"use strict";n.r(e);n(50),n(113),n(15),n(4),n(42),n(675);var r=n(147);var o=n(182);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c={layout:"tools",meta:{tool:{title:"Extrator de e-mails",group:["text"]}},methods:{clipboardCopy:function(text){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Texto copiado";this.$copy(text).then((function(n){t.$swal(e,"","success")}))},getEmailsParsed:function(){var t=function(t){return l(new Set(t))},e=this.emails.toLowerCase().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi),data={infos:[]};(e=Array.isArray(e)?e:[]).length&&(data.infos.push({title:"E-mails únicos",show:!1,items:t(e)}),data.infos.push({title:"E-mails duplicados",show:!1,items:function(e){if(!Array.isArray(e))return[];if(0==e.length)return[];e=l(e);for(var n=[],i=0;i<e.length-1;i++)e[i+1]==e[i]&&n.push(e[i]);return t(n)}(e)}),data.infos.push({title:"Hosts",show:!1,items:t(e.map((function(t){return t.split("@")[1]})))})),this.emailsParsed=data}},data:function(){return{emails:"",emailsParsed:{}}}},f=(n(678),n(13)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-12 col-md-4 pr-3"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.emails,expression:"emails"}],staticClass:"form-control",attrs:{rows:"20"},domProps:{value:t.emails},on:{keyup:function(e){return t.getEmailsParsed()},input:function(e){e.target.composing||(t.emails=e.target.value)}}}),t._v(" "),n("div",{staticClass:"mt-3 text-right"},[n("button",{staticClass:"btn btn-primary text-white",attrs:{type:"button"},on:{click:function(e){return t.getEmailsParsed()}}},[t._v("\r\n                    Executar\r\n                ")])])]),t._v(" "),n("div",{staticClass:"col-12 col-md-8"},[t._m(0),t._v(" "),t._l(t.emailsParsed.infos,(function(i){return n("div",{staticClass:"card border-0 shadow-sm mb-3"},[n("div",{staticClass:"card-header py-2 px-3 font-weight-bold border-0 d-flex align-items-center"},[n("div",{staticClass:"flex-grow-1"},[t._v(t._s(i.title)+" ("+t._s(i.items.length)+")")]),t._v(" "),n("div",{staticClass:"ml-1"},[n("button",{staticClass:"btn btn-primary text-white btn-sm",attrs:{type:"button"},on:{click:function(e){t.clipboardCopy(i.items.join("\n"),i.title+" copiados")}}},[n("i",{staticClass:"fas fa-fw fa-copy"})])]),t._v(" "),n("div",{staticClass:"ml-1"},[n("button",{staticClass:"btn btn-sm",attrs:{type:"button"},on:{click:function(t){i.show=!i.show}}},[n("i",{staticClass:"fas fa-fw fa-chevron-down email-parser-animated",class:{"fa-rotate-90":!i.show}})])])]),t._v(" "),n("el-collapse-transition",[i.show?n("div",{staticClass:"card-body p-2",staticStyle:{"max-height":"300px",overflow:"auto"}},[n("ol",{staticClass:"ml-5"},t._l(i.items,(function(e){return n("li",[t._v(t._s(e))])})),0)]):t._e()])],1)}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 bg-white p-2 shadow-sm"},[e("div",{staticClass:"font-weight-bold mb-1"},[this._v("Como utilizar a ferramenta?")]),this._v(" "),e("p",[this._v("Cole todo o texto no campo da esquerda e clique em executar. Os e-mails limpos serão exibidos na direita.")]),this._v(" "),e("p",[this._v("Não se preocupe em limpar quebras de linha, nomes em parênteses nem nada. Pode passar toda a sujeira pra cá. Gostamos de desafios!")])])}],!1,null,null,null);e.default=component.exports}}]);