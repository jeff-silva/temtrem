(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("d2189bd8",content,!0,{sourceMap:!1})},217:function(t,e,n){"use strict";var o=n(206);n.n(o).a},218:function(t,e,n){(e=n(30)(!1)).push([t.i,".leaflet-popup-content-wrapper{padding:0!important;border-radius:0!important;background:none!important;box-shadow:none!important;height:auto!important}.leaflet-popup-content{margin:0!important}.leaflet-popup-close-button{color:#fff!important;background:red!important;padding:2px 0!important;height:auto!important;border-radius:50%;margin:-8px -7px 0 0!important}",""]),t.exports=e},233:function(t,e,n){"use strict";n.r(e);var o,r={data:function(){var data={loading:!1,map:{zoom:16,center:[0,0]}};return data.productTypes=this.modelDefault("productTypes"),data.productCategories=this.modelDefault("productCategories"),data.markers=[],data},methods:{eventMapUpdateBounds:function(t){var e=this;this.loading=!0,o&&clearTimeout(o),o=setTimeout((function(){var n={latMin:t._southWest.lat,latMax:t._northEast.lat,lngMin:t._southWest.lng,lngMax:t._northEast.lng};e.$axios.get("/api/products/business-search",{params:n}).then((function(t){e.markers=t.data,e.loading=!1}))}),1e3)}},mounted:function(){var t=this;this.$geolocation().then((function(e){t.map.center=[e.lat,e.lng]}))}},l=(n(217),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("l-map",t._b({ref:"map",staticStyle:{width:"100vw",height:"100vh"},on:{"update:bounds":function(e){return t.eventMapUpdateBounds(e)}}},"l-map",t.map,!1),[n("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.markers,(function(e){return n("l-marker",{key:e.id,attrs:{"lat-lng":[e.lat,e.lng]}},[e.category_photo?n("l-icon",[n("img",{staticClass:"animate__animated animate__flipInX",staticStyle:{width:"35px",height:"35px"},attrs:{src:e.category_photo,alt:""}})]):t._e(),t._v(" "),n("l-popup",{staticClass:"bg-white p-2 animate__animated animate__flipInX",staticStyle:{width:"170px"}},[n("div",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v(t._s(e.description))]),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:e.category_photo,alt:""}})])],1)}))],2),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"fixed",bottom:"0px",right:"0px","z-index":"999!important",background:"#fff"},attrs:{clsas:"shadow-sm"}},[e("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}),this._v(" Carregando...\r\n    ")])}],!1,null,null,null);e.default=component.exports}}]);