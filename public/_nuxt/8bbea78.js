(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{767:function(t,e,n){"use strict";n.r(e);var r={props:{value:Object,method:{default:"get"},action:{default:"/api"},push:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{loading:!1,resp:!1,error:!1,props:Object.assign({},this.$props)}},methods:{submit:function(){var t=this,e=this.$axios[this.method],n="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.resp=!1,this.error=!1,e(this.action,n).then((function(e){t.loading="",t.resp=e.data})).catch((function(e){t.loading="",t.error=e.response.data||{}}))}},mounted:function(){this.submit()}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default",null,{loading:t.loading,resp:t.resp,error:t.error,submit:t.submit})],2)}),[],!1,null,null,null);e.default=component.exports}}]);