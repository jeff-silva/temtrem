(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{747:function(t,n,e){"use strict";e.r(n);var o={layout:"admin",middleware:"auth",props:{value:{default:function(){return{}}}},methods:{notificationsRead:function(t){this.$axios.post("/api/user/notification/".concat(t.id,"/")).then((function(t){}))}},mounted:function(){this.notificationsRead(this.value)}},c=e(15),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",{staticClass:"h5"},[t._v(t._s(t.value.title))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.value.body)}})])}),[],!1,null,null,null);n.default=component.exports}}]);