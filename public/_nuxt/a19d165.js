(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{785:function(e,n,t){"use strict";t.r(n);var o=t(15),r=t(699),l={components:{draggable:t.n(r).a},props:Object(o.a)({value:Array,handle:{default:".div"},animation:{default:200}},"handle",{default:!1}),watch:{deep:!0,handler:function(e){this.props=Object.assign({},e)}},data:function(){return{props:Object.assign({},this.$props)}},computed:{computedBind:function(){return{tag:this.props.tag,animation:this.props.animation,handle:this.props.handle}}}},d=t(16),component=Object(d.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("draggable",e._b({on:{end:function(n){return e.$emit("input",e.props.value)}},model:{value:e.props.value,callback:function(n){e.$set(e.props,"value",n)},expression:"props.value"}},"draggable",e.computedBind,!1),[t("transition-group",{attrs:{duration:e.props.animation,name:"ui-draggable-transition-group","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[e._t("default")],2)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);