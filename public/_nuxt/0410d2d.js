(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{546:function(t,n,e){"use strict";e.r(n);var o={layout:"admin",middleware:"auth",props:{value:{default:function(){return{}}}},methods:{notificationsRead:function(t){this.$axios.post("/api/user/notification/".concat(t.id,"/")).then((function(t){}))}},mounted:function(){this.notificationsRead(this.value)}},c=e(14),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h3",{staticClass:"h5"},[this._v(this._s(this.value.title))]),this._v(" "),n("div",{domProps:{innerHTML:this._s(this.value.body)}})])}),[],!1,null,null,null);n.default=component.exports}}]);