(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{578:function(t,n,e){for(var r,o=e(8),c=e(39),f=e(72),l=f("typed_array"),h=f("view"),d=!(!o.ArrayBuffer||!o.DataView),v=d,i=0,y="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");i<9;)(r=o[y[i++]])?(c(r.prototype,l,!0),c(r.prototype,h,!0)):v=!1;t.exports={ABV:d,CONSTR:v,TYPED:l,VIEW:h}},579:function(t,n,e){var r=e(70),o=e(30);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=o(n);if(n!==e)throw RangeError("Wrong length!");return e}},599:function(t,n,e){e(600)("Uint8",1,(function(t){return function(data,n,e){return t(this,data,n,e)}}))},600:function(t,n,e){"use strict";if(e(16)){var r=e(71),o=e(8),c=e(17),f=e(5),l=e(578),h=e(601),d=e(51),v=e(365),y=e(74),m=e(39),w=e(366),_=e(70),A=e(30),E=e(579),S=e(155),x=e(86),I=e(41),O=e(88),B=e(18),L=e(40),T=e(159),U=e(85),V=e(368),W=e(73).f,j=e(160),P=e(72),F=e(6),D=e(369),R=e(158),N=e(112),M=e(161),C=e(75),$=e(156),k=e(157),Y=e(367),H=e(602),J=e(24),G=e(87),z=J.f,K=G.f,Q=o.RangeError,X=o.TypeError,Z=o.Uint8Array,tt=Array.prototype,nt=h.ArrayBuffer,et=h.DataView,it=D(0),ot=D(2),ut=D(3),st=D(4),ct=D(5),at=D(6),ft=R(!0),lt=R(!1),ht=M.values,pt=M.keys,gt=M.entries,vt=tt.lastIndexOf,yt=tt.reduce,mt=tt.reduceRight,wt=tt.join,bt=tt.sort,_t=tt.slice,At=tt.toString,Et=tt.toLocaleString,St=F("iterator"),xt=F("toStringTag"),It=P("typed_constructor"),Ot=P("def_constructor"),Bt=l.CONSTR,Lt=l.TYPED,Tt=l.VIEW,Ut=D(1,(function(t,n){return Ft(N(t,t[Ot]),n)})),Vt=c((function(){return 1===new Z(new Uint16Array([1]).buffer)[0]})),Wt=!!Z&&!!Z.prototype.set&&c((function(){new Z(1).set({})})),jt=function(t,n){var e=_(t);if(e<0||e%n)throw Q("Wrong offset!");return e},Pt=function(t){if(B(t)&&Lt in t)return t;throw X(t+" is not a typed array!")},Ft=function(t,n){if(!B(t)||!(It in t))throw X("It is not a typed array constructor!");return new t(n)},Dt=function(t,n){return Rt(N(t,t[Ot]),n)},Rt=function(t,n){for(var e=0,r=n.length,o=Ft(t,r);r>e;)o[e]=n[e++];return o},Nt=function(t,n,e){z(t,n,{get:function(){return this._d[e]}})},Mt=function(source){var i,t,n,e,r,o,c=L(source),f=arguments.length,l=f>1?arguments[1]:void 0,h=void 0!==l,v=j(c);if(null!=v&&!T(v)){for(o=v.call(c),n=[],i=0;!(r=o.next()).done;i++)n.push(r.value);c=n}for(h&&f>2&&(l=d(l,arguments[2],2)),i=0,t=A(c.length),e=Ft(this,t);t>i;i++)e[i]=h?l(c[i],i):c[i];return e},Ct=function(){for(var t=0,n=arguments.length,e=Ft(this,n);n>t;)e[t]=arguments[t++];return e},$t=!!Z&&c((function(){Et.call(new Z(1))})),kt=function(){return Et.apply($t?_t.call(Pt(this)):Pt(this),arguments)},Yt={copyWithin:function(t,n){return H.call(Pt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return st(Pt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return Y.apply(Pt(this),arguments)},filter:function(t){return Dt(this,ot(Pt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return ct(Pt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return at(Pt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){it(Pt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return lt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ft(Pt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return wt.apply(Pt(this),arguments)},lastIndexOf:function(t){return vt.apply(Pt(this),arguments)},map:function(t){return Ut(Pt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return yt.apply(Pt(this),arguments)},reduceRight:function(t){return mt.apply(Pt(this),arguments)},reverse:function(){for(var t,n=Pt(this).length,e=Math.floor(n/2),r=0;r<e;)t=this[r],this[r++]=this[--n],this[n]=t;return this},some:function(t){return ut(Pt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return bt.call(Pt(this),t)},subarray:function(t,n){var e=Pt(this),r=e.length,o=S(t,r);return new(N(e,e[Ot]))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,A((void 0===n?r:S(n,r))-o))}},Ht=function(t,n){return Dt(this,_t.call(Pt(this),t,n))},Jt=function(t){Pt(this);var n=jt(arguments[1],1),e=this.length,r=L(t),o=A(r.length),c=0;if(o+n>e)throw Q("Wrong length!");for(;c<o;)this[n+c]=r[c++]},qt={entries:function(){return gt.call(Pt(this))},keys:function(){return pt.call(Pt(this))},values:function(){return ht.call(Pt(this))}},Gt=function(t,n){return B(t)&&t[Lt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function(t,n){return Gt(t,n=x(n,!0))?y(2,t[n]):K(t,n)},Kt=function(t,n,desc){return!(Gt(t,n=x(n,!0))&&B(desc)&&I(desc,"value"))||I(desc,"get")||I(desc,"set")||desc.configurable||I(desc,"writable")&&!desc.writable||I(desc,"enumerable")&&!desc.enumerable?z(t,n,desc):(t[n]=desc.value,t)};Bt||(G.f=zt,J.f=Kt),f(f.S+f.F*!Bt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:Kt}),c((function(){At.call({})}))&&(At=Et=function(){return wt.call(this)});var Qt=w({},Yt);w(Qt,qt),m(Qt,St,qt.values),w(Qt,{slice:Ht,set:Jt,constructor:function(){},toString:At,toLocaleString:kt}),Nt(Qt,"buffer","b"),Nt(Qt,"byteOffset","o"),Nt(Qt,"byteLength","l"),Nt(Qt,"length","e"),z(Qt,xt,{get:function(){return this[Lt]}}),t.exports=function(t,n,e,h){var d=t+((h=!!h)?"Clamped":"")+"Array",y="get"+t,w="set"+t,_=o[d],S=_||{},x=_&&V(_),I=!_||!l.ABV,L={},T=_&&_.prototype,j=function(t,e){z(t,e,{get:function(){return function(t,e){var data=t._d;return data.v[y](e*n+data.o,Vt)}(this,e)},set:function(t){return function(t,e,r){var data=t._d;h&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),data.v[w](e*n+data.o,r,Vt)}(this,e,t)},enumerable:!0})};I?(_=e((function(t,data,e,r){v(t,_,d,"_d");var o,c,f,l,h=0,y=0;if(B(data)){if(!(data instanceof nt||"ArrayBuffer"==(l=O(data))||"SharedArrayBuffer"==l))return Lt in data?Rt(_,data):Mt.call(_,data);o=data,y=jt(e,n);var w=data.byteLength;if(void 0===r){if(w%n)throw Q("Wrong length!");if((c=w-y)<0)throw Q("Wrong length!")}else if((c=A(r)*n)+y>w)throw Q("Wrong length!");f=c/n}else f=E(data),o=new nt(c=f*n);for(m(t,"_d",{b:o,o:y,l:c,e:f,v:new et(o)});h<f;)j(t,h++)})),T=_.prototype=U(Qt),m(T,"constructor",_)):c((function(){_(1)}))&&c((function(){new _(-1)}))&&$((function(t){new _,new _(null),new _(1.5),new _(t)}),!0)||(_=e((function(t,data,e,r){var o;return v(t,_,d),B(data)?data instanceof nt||"ArrayBuffer"==(o=O(data))||"SharedArrayBuffer"==o?void 0!==r?new S(data,jt(e,n),r):void 0!==e?new S(data,jt(e,n)):new S(data):Lt in data?Rt(_,data):Mt.call(_,data):new S(E(data))})),it(x!==Function.prototype?W(S).concat(W(x)):W(S),(function(t){t in _||m(_,t,S[t])})),_.prototype=T,r||(T.constructor=_));var P=T[St],F=!!P&&("values"==P.name||null==P.name),D=qt.values;m(_,It,!0),m(T,Lt,d),m(T,Tt,!0),m(T,Ot,_),(h?new _(1)[xt]==d:xt in T)||z(T,xt,{get:function(){return d}}),L[d]=_,f(f.G+f.W+f.F*(_!=S),L),f(f.S,d,{BYTES_PER_ELEMENT:n}),f(f.S+f.F*c((function(){S.of.call(_,1)})),d,{from:Mt,of:Ct}),"BYTES_PER_ELEMENT"in T||m(T,"BYTES_PER_ELEMENT",n),f(f.P,d,Yt),k(d),f(f.P+f.F*Wt,d,{set:Jt}),f(f.P+f.F*!F,d,qt),r||T.toString==At||(T.toString=At),f(f.P+f.F*c((function(){new _(1).slice()})),d,{slice:Ht}),f(f.P+f.F*(c((function(){return[1,2].toLocaleString()!=new _([1,2]).toLocaleString()}))||!c((function(){T.toLocaleString.call([1,2])}))),d,{toLocaleString:kt}),C[d]=F?P:D,r||F||m(T,St,D)}}else t.exports=function(){}},601:function(t,n,e){"use strict";var r=e(8),o=e(16),c=e(71),f=e(578),l=e(39),h=e(366),d=e(17),v=e(365),y=e(70),m=e(30),w=e(579),_=e(73).f,A=e(24).f,E=e(367),S=e(84),x=r.ArrayBuffer,I=r.DataView,O=r.Math,B=r.RangeError,L=r.Infinity,T=x,U=O.abs,V=O.pow,W=O.floor,j=O.log,P=O.LN2,F=o?"_b":"buffer",D=o?"_l":"byteLength",R=o?"_o":"byteOffset";function N(t,n,e){var r,o,c,f=new Array(e),l=8*e-n-1,h=(1<<l)-1,d=h>>1,rt=23===n?V(2,-24)-V(2,-77):0,i=0,s=t<0||0===t&&1/t<0?1:0;for((t=U(t))!=t||t===L?(o=t!=t?1:0,r=h):(r=W(j(t)/P),t*(c=V(2,-r))<1&&(r--,c*=2),(t+=r+d>=1?rt/c:rt*V(2,1-d))*c>=2&&(r++,c/=2),r+d>=h?(o=0,r=h):r+d>=1?(o=(t*c-1)*V(2,n),r+=d):(o=t*V(2,d-1)*V(2,n),r=0));n>=8;f[i++]=255&o,o/=256,n-=8);for(r=r<<n|o,l+=n;l>0;f[i++]=255&r,r/=256,l-=8);return f[--i]|=128*s,f}function M(t,n,e){var r,o=8*e-n-1,c=(1<<o)-1,f=c>>1,l=o-7,i=e-1,s=t[i--],h=127&s;for(s>>=7;l>0;h=256*h+t[i],i--,l-=8);for(r=h&(1<<-l)-1,h>>=-l,l+=n;l>0;r=256*r+t[i],i--,l-=8);if(0===h)h=1-f;else{if(h===c)return r?NaN:s?-L:L;r+=V(2,n),h-=f}return(s?-1:1)*r*V(2,h-n)}function C(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function $(t){return[255&t]}function k(t){return[255&t,t>>8&255]}function Y(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function H(t){return N(t,52,8)}function J(t){return N(t,23,4)}function G(t,n,e){A(t.prototype,n,{get:function(){return this[e]}})}function z(view,t,n,e){var r=w(+n);if(r+t>view[D])throw B("Wrong index!");var o=view[F]._b,c=r+view[R],f=o.slice(c,c+t);return e?f:f.reverse()}function K(view,t,n,e,r,o){var c=w(+n);if(c+t>view[D])throw B("Wrong index!");for(var f=view[F]._b,l=c+view[R],h=e(+r),i=0;i<t;i++)f[l+i]=h[o?i:t-i-1]}if(f.ABV){if(!d((function(){x(1)}))||!d((function(){new x(-1)}))||d((function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name}))){for(var Q,X=(x=function(t){return v(this,x),new T(w(t))}).prototype=T.prototype,Z=_(T),tt=0;Z.length>tt;)(Q=Z[tt++])in x||l(x,Q,T[Q]);c||(X.constructor=x)}var view=new I(new x(2)),nt=I.prototype.setInt8;view.setInt8(0,2147483648),view.setInt8(1,2147483649),!view.getInt8(0)&&view.getInt8(1)||h(I.prototype,{setInt8:function(t,n){nt.call(this,t,n<<24>>24)},setUint8:function(t,n){nt.call(this,t,n<<24>>24)}},!0)}else x=function(t){v(this,x,"ArrayBuffer");var n=w(t);this._b=E.call(new Array(n),0),this[D]=n},I=function(t,n,e){v(this,I,"DataView"),v(t,x,"DataView");var r=t[D],o=y(n);if(o<0||o>r)throw B("Wrong offset!");if(o+(e=void 0===e?r-o:m(e))>r)throw B("Wrong length!");this[F]=t,this[R]=o,this[D]=e},o&&(G(x,"byteLength","_l"),G(I,"buffer","_b"),G(I,"byteLength","_l"),G(I,"byteOffset","_o")),h(I.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var n=z(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=z(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return C(z(this,4,t,arguments[1]))},getUint32:function(t){return C(z(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return M(z(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return M(z(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){K(this,1,t,$,n)},setUint8:function(t,n){K(this,1,t,$,n)},setInt16:function(t,n){K(this,2,t,k,n,arguments[2])},setUint16:function(t,n){K(this,2,t,k,n,arguments[2])},setInt32:function(t,n){K(this,4,t,Y,n,arguments[2])},setUint32:function(t,n){K(this,4,t,Y,n,arguments[2])},setFloat32:function(t,n){K(this,4,t,J,n,arguments[2])},setFloat64:function(t,n){K(this,8,t,H,n,arguments[2])}});S(x,"ArrayBuffer"),S(I,"DataView"),l(I.prototype,f.VIEW,!0),n.ArrayBuffer=x,n.DataView=I},602:function(t,n,e){"use strict";var r=e(40),o=e(155),c=e(30);t.exports=[].copyWithin||function(t,n){var e=r(this),f=c(e.length),l=o(t,f),h=o(n,f),d=arguments.length>2?arguments[2]:void 0,v=Math.min((void 0===d?f:o(d,f))-h,f-l),y=1;for(h<l&&l<h+v&&(y=-1,h+=v-1,l+=v-1);v-- >0;)h in e?e[l]=e[h]:delete e[l],l+=y,h+=y;return e}},687:function(t,n,e){"use strict";e.r(n);e(599),e(9),e(10),e(4),e(34);var r={props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props),components:[{id:"content",name:"Content",component:e(706).default}]}},methods:{uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},sectionAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},section=Object.assign({type:"section",id:this.uuid("section-"),classes:"",tag:"section",items:[]},t);return this.props.value.sections.push(section),section},containerAdd:function(section){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({type:"container",id:this.uuid("container-"),classes:"",full:!1,gutters:!0,items:[]},t);return section.items.push(n),n},colAdd:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},col=Object.assign({type:"column",id:this.uuid("col-"),classes:"",xs:"col-12",sm:!1,md:!1,lg:!1,items:[]},n);return t.items.push(col),col},componentAdd:function(col,component){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.error("component",component);var n=Object.assign({type:"component",id:this.uuid("component-"),classes:"",component:component,componentBind:{}},t);return col.items.push(n),n},defaultValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({sections:[]},t)}},mounted:function(){this.props.value=this.defaultValue(this.props.value);var section=this.sectionAdd(),t=this.containerAdd(section),n=(this.colAdd(t,{sm:"col-sm-6"}),this.colAdd(t,{sm:"col-sm-6"}));this.componentAdd(n,this.components[0].component)}},o=e(13),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-layout"},[t._l(t.props.value.sections,(function(n){return e("div",{key:n.id},t._l(n.items,(function(r){return e("div",{key:n.id,staticClass:"border",class:{container:!n.full}},[e("div",{staticClass:"row",class:{"no-gutters":!r.gutters}},t._l(r.items,(function(n){return e("div",{class:[n.xs,n.sm,n.md,n.lg]},t._l(n.items,(function(n){return e("div",[e(n.component,t._b({tag:"component"},"component",n.componentBind,!1))],1)})),0)})),0)])})),0)})),t._v(" "),e("pre",[t._v("$data: "+t._s(t.$data))])],2)}),[],!1,null,null,null);n.default=component.exports},706:function(t,n,e){"use strict";e.r(n);var r={props:{title:{default:"Default title"},text:{default:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim accusamus exercitationem explicabo eius totam at tempora earum, veritatis, architecto, voluptates fugit esse? Doloremque temporibus molestiae fugiat porro obcaecati rerum dignissimos."}},edit:{title:{component:"input",componentBind:{type:"text",class:"form-control"},value:"Aaa"},text:{component:"ui-content",componentBind:{},value:"Aaa"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},o=e(13),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",{domProps:{innerHTML:this._s(this.props.title)}}),this._v(" "),n("div",{domProps:{innerHTML:this._s(this.props.text)}})])}),[],!1,null,null,null);n.default=component.exports},782:function(t,n,e){"use strict";e.r(n);var r=e(13),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("ui-layout")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiLayout:e(687).default})}}]);