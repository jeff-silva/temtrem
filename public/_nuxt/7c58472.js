(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{765:function(e,t,r){"use strict";r.r(t);r(23);var o={layout:"tools",meta:{tool:{title:"Vagas",group:[]}},methods:{submit:function(){this.$router.push({query:this.query})}},data:function(){return{query:Object.assign({search:"",place:""},this.$route.query)}},computed:{vagasLinks:function(){if(!this.query.search)return[];var e=encodeURI(this.query.search),t=encodeURI(this.query.place),r=[];return r.push({title:"Linkedin",resume:"Rede social para trabalho",link:"https://www.linkedin.com/jobs/search/?keywords=".concat(e,"&location=").concat(t)}),r.push({title:"Indeed",resume:"Vagas de emprego",link:"https://br.indeed.com/empregos?q=".concat(e,"&l=").concat(t)}),r.push({title:"It Jobs",resume:"Vagas de emprego em Portugal",link:"https://www.itjobs.pt/emprego?q=".concat(e)}),r.push({title:"Vagas",resume:"Vagas de emprego no Brasil",link:"https://www.vagas.com.br/vagas/pesquisas?q=".concat(e,"%20").concat(t)}),r.push({title:"Catho",resume:"Vagas de emprego no Brasil",link:"https://www.catho.com.br/vagas/?q=".concat(e)}),r.push({title:"99 Freelas",resume:"Contratação de freelancers",link:"https://www.99freelas.com.br/freelancers?q=".concat(e)}),r.push({title:"Workana",resume:"Contratação de freelancers",link:"https://www.workana.com/jobs?language=pt&query=".concat(e)}),r.push({title:"Fiverr",resume:"Contratação de freelancers",link:"https://www.fiverr.com/search/gigs?search_in=everywhere&query=".concat(e)}),r.push({title:"Get Ninjas",resume:"Contratação de freelancers e serviços rápidos",link:"https://www.getninjas.com.br/requests/new?q=".concat(e)}),r.push({title:"Freelancer",resume:"Contratação de freelancers",link:"https://www.freelancer.com/jobs/?w=f&keyword=".concat(e)}),r}}},n=r(13),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-tools-vagas"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-group shadow-sm"},[r("div",{staticClass:"input-group-text bg-white border-0 font-weight-bold"},[e._v("O quê:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.search,expression:"query.search"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Motorista"},domProps:{value:e.query.search},on:{input:function(t){t.target.composing||e.$set(e.query,"search",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-text bg-white border-0 font-weight-bold"},[e._v("Onde:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.place,expression:"query.place"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Belo Horizonte"},domProps:{value:e.query.place},on:{input:function(t){t.target.composing||e.$set(e.query,"place",t.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),r("div",{staticClass:"row no-gutters mt-3 bg-white shadow-sm"},e._l(e.vagasLinks,(function(t){return r("div",{staticClass:"col-6 col-md-3"},[r("a",{staticClass:"d-block p-2",staticStyle:{"text-decoration":"none!important"},attrs:{href:t.link,target:"_blank"}},[r("div",[e._v(e._s(t.title))]),e._v(" "),r("small",{staticClass:"text-muted"},[e._v(e._s(t.resume))])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-btn"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t("i",{staticClass:"fas fw-fw fa-search text-white"})])])}],!1,null,null,null);t.default=component.exports}}]);