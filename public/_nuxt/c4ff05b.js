(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{751:function(t,e,r){"use strict";r.r(e);var n={layout:"tools",meta:{tool:{title:"ASCII",group:["encode"]}},data:function(){return{imageUrl:"",letters:[{letter:" "},{letter:"."},{letter:":"},{letter:"+"},{letter:"#"},{letter:"@"}],ascii:!1,imageData:[]}},methods:{upload:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(e){var r=e.target.files[0];t.imageUrl=window.URL.createObjectURL(r),t.imageUrlToAscii()}}).click()},imageUrlToAscii:function(){var t=this,e={string:"",url:""};if(this.imageUrl)var canvas=document.createElement("canvas"),r=canvas.getContext("2d"),img=Object.assign(document.createElement("img"),{src:this.imageUrl,onload:function(){canvas.width=img.width,canvas.height=img.height,r.drawImage(img,0,0,img.width,img.height);var n=[],l=document.createElement("canvas");l.width=img.width,l.height=img.height;var o=l.getContext("2d");o.font="8px monospace";for(var c=0;c<=img.height;c+=5){for(var m=0;m<=img.width;m+=5){var d=r.getImageData(m,c,1,1).data,v={x:m,y:c};v.r=d[0],v.g=d[1],v.b=d[2],v.limit=255/t.letters.length,v.avg=(v.r+v.g+v.b)/3,v.letter=Math.floor(255/v.avg%t.letters.length),v.letter=(t.letters[v.letter]||t.letters[0]).letter||" ",n.push(v.letter),o.fillText(v.letter,m,c)}n.push("\n")}e.string=n.join(""),e.url=l.toDataURL(),t.ascii=e}})}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[t.imageUrl?r("div",[r("img",{attrs:{src:t.imageUrl,alt:"",width:"100%"}}),t._v(" "),r("a",{staticClass:"btn btn-outline-primary btn-block mt-3",attrs:{href:"javascript:;"},on:{click:function(e){t.imageUrl="",t.imageUrlToAscii()}}},[t._v("Remover")])]):r("div",{staticClass:"border py-5 text-center",on:{click:t.upload}},[t._v("\r\n                Imagem\r\n            ")]),t._v(" "),r("hr"),t._v(" "),t._l(t.letters,(function(e){return r("div",[r("div",{staticClass:"input-group p-0 mb-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.letter,expression:"l.letter"}],staticClass:"form-control border-0",attrs:{type:"text"},domProps:{value:e.letter},on:{input:[function(r){r.target.composing||t.$set(e,"letter",r.target.value)},function(e){return t.imageUrlToAscii()}]}}),t._v(" "),t._m(0,!0)])])}))],2),t._v(" "),r("div",{staticClass:"col-6"},[t.ascii?r("div",[r("img",{attrs:{src:t.ascii.url,alt:"",width:"100%"}})]):t._e(),t._v(" "),t.imageUrl?r("button",{staticClass:"btn btn-primary btn-block text-white mt-3",attrs:{type:"button"},on:{click:function(e){return t.imageUrlToAscii()}}},[t._v("\r\n                Converter\r\n            ")]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-fw fa-times text-white"})])])}],!1,null,null,null);e.default=component.exports}}]);