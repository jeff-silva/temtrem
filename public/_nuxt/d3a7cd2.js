(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{781:function(e,t,r){"use strict";r.r(t);r(403);var l={name:"ui-temtrem-business",props:{value:{default:"",type:[Number,String,Array]},placeholder:{default:"Selecionar"},multiple:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=JSON.parse(JSON.stringify(e)),this.remoteSearch("",this.props.value)}}},methods:{emitValue:function(){this.$emit("input",this.props.value),this.$emit("change",this.props.value)},remoteSearch:function(){var e=this,q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$axios.get("/api/temtrem-business/search",{params:{q:q,id:t}}).then((function(t){e.items=t.data.data}))}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),items:[]}}},n=r(15),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-select",{staticClass:"form-control p-0",attrs:{multiple:e.props.multiple,filterable:"",remote:"",placeholder:e.props.placeholder,"reserve-keyword":"","remote-method":e.remoteSearch},on:{change:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},e._l(e.items,(function(i){return r("el-option",{key:i.id,attrs:{value:i.id,label:i.name||i.id}},[e._v(e._s(i.name||i.id))])})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);