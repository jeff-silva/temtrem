(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{614:function(t,e,n){var content=n(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("882c75e4",content,!0,{sourceMap:!1})},627:function(t,e,n){"use strict";n(614)},628:function(t,e,n){var r=n(40)(!1);r.push([t.i,".temtrem-map .leaflet-popup-content-wrapper{border-radius:0}.temtrem-map .leaflet-popup-content{margin:0!important}.temtrem-map .leaflet-popup-content p{margin:0;padding:0}",""]),t.exports=r},680:function(t,e,n){"use strict";n.r(e);n(7),n(27),n(61),n(36);var r={data:function(){return{search:{loading:!1,params:{q:"",latMin:0,latMax:0,lngMin:0,lngMax:0},results:{data:[]}}}},methods:{businessSearch:function(){var t=this;this._businessSearchTimeout&&clearTimeout(this._businessSearchTimeout),this.search.loading=!0,this._businessSearchTimeout=setTimeout((function(){var e=t.search.params;t.$axios.get("/api/temtrem-business/search",{params:e}).then((function(e){t.search.results=e.data,t.search.loading=!1}))}),1e3)},businessGoto:function(t){this.$router.push("/business/".concat(t.slug))},updateBoundsHandler:function(t){this.search.params.latMin=t._southWest.lat,this.search.params.latMax=t._northEast.lat,this.search.params.lngMin=t._southWest.lng,this.search.params.lngMax=t._northEast.lng,this.businessSearch()},mapReadyHandler:function(t){var e=this.$refs.map.mapObject.getBounds();this.search.params.latMin=e._southWest.lat,this.search.params.latMax=e._northEast.lat,this.search.params.lngMin=e._southWest.lng,this.search.params.lngMax=e._northEast.lng,this.businessSearch()},getGeoposition:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){console.log(t)}))}},mounted:function(){this.getGeoposition()}},o=(n(627),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"temtrem-map",staticStyle:{position:"relative",height:"100vh","z-index":"0"}},[n("l-map",t._b({ref:"map",staticStyle:{width:"100%",height:"100%"},on:{"update:bounds":function(e){return t.updateBoundsHandler(e)},ready:t.mapReadyHandler}},"l-map",{zoom:13,center:[-19.9830486,-44.0079828]},!1),[n("l-tile-layer",{attrs:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.search.results.data,(function(s){return n("l-marker",{key:s.id,attrs:{"lat-lng":[parseFloat(s.lat),parseFloat(s.lng)]}},[n("l-popup",{attrs:{options:{offset:[0,-10]}}},[n("div",{staticClass:"p-2",staticStyle:{width:"250px"}},[n("h3",{staticClass:"m-0 p-0"},[t._v(t._s(s.name))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(s.description)}})]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary d-block border-0 text-white",attrs:{to:"/business/"+s.slug}},[t._v("Ver detalhes")])],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);