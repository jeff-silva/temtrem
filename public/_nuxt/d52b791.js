(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{742:function(t,e,d){"use strict";d.r(e);var l=d(0),v=d.n(l),c={layout:"tools",data:function(){return{date_start:"",date_final:""}},computed:{computedDiff:function(){var t=v()(this.date_start),e=v()(this.date_final);return!(!t.isValid()||!e.isValid())&&{seconds:e.diff(t,"seconds"),minutes:e.diff(t,"minutes"),hours:e.diff(t,"hours"),days:e.diff(t,"days"),weeks:e.diff(t,"weeks"),months:e.diff(t,"months"),years:e.diff(t,"years")}}}},o=d(13),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("div",{staticClass:"row"},[d("div",{staticClass:"col-12 col-md-6"},[d("div",{staticClass:"form-group"},[d("label",[t._v("Data inicial")]),t._v(" "),d("el-date-picker",{attrs:{type:"datetime"},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1),t._v(" "),d("div",{staticClass:"form-group"},[d("label",[t._v("Data inicial")]),t._v(" "),d("el-date-picker",{attrs:{type:"datetime"},model:{value:t.date_final,callback:function(e){t.date_final=e},expression:"date_final"}})],1)]),t._v(" "),d("div",{staticClass:"col-12 col-md-6 pt-md-4"},[d("el-collapse-transition",[t.computedDiff?d("div",{staticClass:"bg-white p-3 shadow-sm"},[d("div",{staticClass:"d-flex"},[d("div",{staticClass:"pr-3"},[d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.seconds,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.minutes,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.hours,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.days,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.weeks,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.months,0)))]),t._v(" "),d("div",{staticClass:"p-1"},[t._v(t._s(t._f("numberFormat")(t.computedDiff.years,0)))])]),t._v(" "),d("div",[d("div",{staticClass:"p-1"},[t._v("Segundos")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Minutos")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Horas")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Dias")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Semanas")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Meses")]),t._v(" "),d("div",{staticClass:"p-1"},[t._v("Anos")])])])]):t._e()])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);