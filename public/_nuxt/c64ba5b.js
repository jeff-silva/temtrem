(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{665:function(t,e,o){var content=o(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("40c539fc",content,!0,{sourceMap:!1})},724:function(t,e,o){"use strict";o(665)},725:function(t,e,o){var r=o(43)(!1);r.push([t.i,".ui-upload{cursor:pointer}",""]),t.exports=r},776:function(t,e,o){"use strict";o.r(e);o(66),o(6),o(64),o(32),o(22);var r={name:"ui-upload",props:{value:{default:""},action:{default:"/api/upload"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{file:function(){var t={family:!1,format:!1};if(this.props.value.startsWith("data:")){var e=this.props.value.split(/[^a-zA-Z0-9]/);t.family=e[1],t.format=e[2]}return t},backgroundImage:function(){var t=this.props.value.split(".").pop().toLowerCase(),e=["jpg","jpeg","bmp","png","gif","webp"].indexOf(t)>=0,o=e?"background:url(".concat(window.location.origin,"/").concat(this.props.value,") center center no-repeat; background-size:cover;"):"",r=e?"":'<i class="far fa-file-'.concat(t,'" style="padding:7px 0 0 7px; font-size:20px;"></i>');return'<div style="width:72px; height:72px; '.concat(o,'">').concat(r,"</div>")}},filters:{filename:function(t){return t.split("/").pop()}},methods:{emit:function(){this.$emit("input",this.props.value)},onDrop:function(t){t.preventDefault(),this.getFile(t.dataTransfer.files[0]||!1)},openBrowser:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(e){t.doUpload(e.target.files[0]||!1)}}).click()},getFile:function(t){var e=this;if(t){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){e.props.value=o.result,e.$emit("input",e.props.value)}}},doUpload:function(t){var e=this;this.upload.progress=0;var data=new FormData;data.append("file",t,t.name),this.$axios.post(this.props.action,data,{onUploadProgress:function(t){e.upload.running=!0,e.upload.progress=Math.round(100*t.loaded/t.total)}}).then((function(t){e.upload.running=!1,e.upload.progress=100,e.upload.mime=t.data.mime||!1,e.upload.error=t.data.error||!1,e.props.value=t.data.path,e.$emit("input",e.props.value)}))}},data:function(){return{upload:{running:!1,progress:0,mime:!1,error:!1},props:Object.assign({},this.$props)}}},n=(o(724),o(15)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-upload",attrs:{dropzone:"copy"},on:{drop:function(e){return t.onDrop(e)},dragover:function(t){return t.preventDefault()}}},[o("div",{staticClass:"d-flex align-items-stretch bg-white shadow-sm m-0",staticStyle:{position:"relative"},on:{click:function(e){return t.openBrowser()}}},[o("div",{staticClass:"bg-secondary",domProps:{innerHTML:t._s(t.backgroundImage)}}),t._v(" "),o("div",{staticClass:"flex-grow-1 p-3 pl-0 d-flex align-items-center"},[o("div",{staticClass:"flex-grow-1"},[t.props.value?o("div",[t._v(t._s(t._f("filename")(t.props.value)))]):o("div",[o("i",{staticClass:"fas fa-upload"}),t._v("   Upload")]),t._v(" "),t.upload.running?o("div",{staticClass:"progress mt-1",staticStyle:{height:"5px"}},[o("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:"width:"+t.upload.progress+"%",attrs:{role:"progressbar"}})]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports}}]);