(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{754:function(t,e,r){"use strict";r.r(e);var o={layout:"tools",mounted:function(){var t=this;this.$router.options.routes.forEach((function(e){e.meta.comoLidar&&t.routes.push(Object.assign({path:e.path,title:"",group:""},e.meta.comoLidar))}))},data:function(){return{categories:[{id:"product-manager",title:"Gerentes de Produto"},{id:"designer",title:"Designers"},{id:"project-manager",title:"Gerentes de Projeto"},{id:"development-manager",title:"Gerentes de Desenvolvimento"},{id:"developer",title:"Desenvolvedores"},{id:"quality-assurance",title:"Garantia de Qualidade"}],routes:[]}}},n=r(13),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v("Como lidar com pessoas em gerenciamento de projetos")]),t._v(" "),t._m(0),t._v(" "),r("br"),t._v(" "),t._l(t.categories,(function(e){return r("div",{staticClass:"card mb-3 border-0 shadow-sm"},[r("div",{staticClass:"card-header p-2 border-0 font-weight-bold"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"card-body p-2"},t._l(t.routes,(function(o){return o.group==e.id?r("div",[r("nuxt-link",{attrs:{to:o.path}},[t._v(t._s(o.title))])],1):t._e()})),0)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://www.howtodeal.dev/",target:"_blank"}},[e("small",{staticClass:"text-muted"},[this._v("Fonte")])])])}],!1,null,null,null);e.default=component.exports}}]);