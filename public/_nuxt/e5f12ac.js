(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{667:function(e,t,n){"use strict";n.r(t);var r={name:"ui-laravel-pagination",props:{value:{default:""},range:{default:3}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(link){this.props.value.current_page=link.page,this.$emit("change",link)}},computed:{compLinks:function(){var e=this.props.value,t=[],n=e.total&&e.per_page?Math.ceil(parseInt(e.total)/parseInt(e.per_page)):0;if(n<=1)return[];var r=Math.max(1,(e.current_page||0)-this.range),c=Math.min(n,r+2*this.range);t.push({page:1,active:1==e.current_page,label:'<i class="fas fa-chevron-left"></i>'});for(var p=r;p<=c;p++)t.push({page:p,active:p==e.current_page,label:p});return t.push({page:n,active:n==e.current_page,label:'<i class="fas fa-chevron-right"></i>'}),t}},data:function(){return{props:Object.assign({},this.$props)}}},c=n(15),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-laravel-pagination"},[n("ul",{staticClass:"pagination m-0"},e._l(e.compLinks,(function(t,i){return n("li",{key:i,staticClass:"page-item",class:{active:t.active}},[n("a",{staticClass:"page-link",attrs:{href:"javascript:;"},domProps:{innerHTML:e._s(t.label)},on:{click:function(n){return e.emit(t)}}})])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);