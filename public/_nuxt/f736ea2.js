(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{755:function(t,e,o){"use strict";o.r(e);var r={layout:"tools",meta:{tool:{title:"Como lidar",group:[]}},mounted:function(){var t=this;this.$router.options.routes.forEach((function(e){e.meta.comoLidar&&t.routes.push(Object.assign({path:e.path,title:"",group:""},e.meta.comoLidar))}))},data:function(){return{categories:[{id:"product-manager",title:"Gerentes de Produto"},{id:"designer",title:"Designers"},{id:"project-manager",title:"Gerentes de Projeto"},{id:"development-manager",title:"Gerentes de Desenvolvimento"},{id:"developer",title:"Desenvolvedores"},{id:"quality-assurance",title:"Garantia de Qualidade"}],routes:[]}}},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[t._v("Como lidar com pessoas em gerenciamento de projetos")]),t._v(" "),t._m(0),t._v(" "),o("br"),t._v(" "),t._l(t.categories,(function(e){return o("div",{staticClass:"card mb-3 border-0 shadow-sm"},[o("div",{staticClass:"card-header p-2 border-0 font-weight-bold"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"card-body p-2"},t._l(t.routes,(function(r){return r.group==e.id?o("div",[o("nuxt-link",{attrs:{to:r.path}},[t._v(t._s(r.title))])],1):t._e()})),0)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://www.howtodeal.dev/",target:"_blank"}},[e("small",{staticClass:"text-muted"},[this._v("Fonte")])])])}],!1,null,null,null);e.default=component.exports}}]);