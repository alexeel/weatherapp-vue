(function(e){function t(t){for(var i,n,c=t[0],o=t[1],l=t[2],d=0,h=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);p&&p(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/weatherapp-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("fa6d"),a("f5df1");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("aside",{staticClass:"sidebar"},[a("ul",{staticClass:"city-list"},e._l(e.cities,(function(t,i){return a("li",{key:i,staticClass:"city-list__item"},[a("a",{staticClass:"city-list__link",class:[t.isActive?"active":"",t.isCorrect?"":"uncorrect"],attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.getWeather(t,i)}}},[e._v(e._s(t.cityTitle))])])})),0)]),a("main",{staticClass:"main"},[a("div",{staticClass:"weather-wrap"},[a("div",{staticClass:"weather__title"},[e.visible?a("h1",[e._v(e._s(e.weather.cityName))]):a("span",{staticClass:"h2"},[e._v('Город "'+e._s(e.weather.cityName)+'" не найден. Попробуйте повторить попытку')])]),e.visible?a("div",{staticClass:"weather__info"},[a("div",{staticClass:"weather-today"},[a("div",{staticClass:"weather-today__wrap"},[e._m(0),a("div",{staticClass:"weather-today__info"},[a("span",{staticClass:"weather-today__degree"},[e._v(e._s(e.weather.temperature[1])+"°C")]),a("span",{staticClass:"weather-today__icon"},[a("img",{attrs:{width:"64",height:"64",src:e.weather.icon[1],alt:e.weather.description[1]}})])]),a("span",{staticClass:"weather-today__conditions"},[e._v(e._s(e.weather.description[1]))])]),a("div",{staticClass:"weather-map"},[a("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"500px"},attrs:{center:e.centerMap,zoom:8,options:{mapTypeControl:!1,streetViewControl:!1,zoomControl:!0,panControl:!0,scaleControl:!1,fullscreenControl:!1,styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#96a3a9"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#cfd8dc"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}]},"map-type-id":"terrain"}})],1)]),a("div",{staticClass:"weather__subinfo"},[a("div",{staticClass:"weather-day"},[e._m(1),a("div",{staticClass:"weather-day__info"},[a("div",{staticClass:"weather-day__subinfo"},[a("span",{staticClass:"weather-day__degree"},[e._v(e._s(e.weather.temperature[0])+"°C")]),a("span",{staticClass:"weather-day__icon"},[a("img",{attrs:{width:"40",height:"40",src:e.weather.icon[0],alt:e.weather.description[0]}})])]),a("span",{staticClass:"weather-day__conditions"},[e._v(e._s(e.weather.description[0]))])])]),a("div",{staticClass:"weather-day"},[e._m(2),a("div",{staticClass:"weather-day__info"},[a("div",{staticClass:"weather-day__subinfo"},[a("span",{staticClass:"weather-day__degree"},[e._v(e._s(e.weather.temperature[2])+"°C")]),a("span",{staticClass:"weather-day__icon"},[a("img",{attrs:{width:"40",height:"40",src:e.weather.icon[2],alt:e.weather.description[2]}})])]),a("span",{staticClass:"weather-day__conditions"},[e._v(e._s(e.weather.description[2]))])])]),a("div",{staticClass:"weather-day"},[e._m(3),a("div",{staticClass:"weather-day__info"},[a("div",{staticClass:"weather-day__subinfo"},[a("span",{staticClass:"weather-day__degree"},[e._v(e._s(e.weather.temperature[3])+"°C")]),a("span",{staticClass:"weather-day__icon"},[a("img",{attrs:{width:"40",height:"40",src:e.weather.icon[3],alt:e.weather.description[3]}})])]),a("span",{staticClass:"weather-day__conditions"},[e._v(e._s(e.weather.description[3]))])])])])]):e._e()]),e._m(4)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-today__title"},[a("span",[e._v("Сегодня")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-day__title"},[a("span",[e._v("Вчера")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-day__title"},[a("span",[e._v("Завтра")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-day__title"},[a("span",[e._v("Послезавтра")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer-wrap"},[a("p",[e._v("Disined by Alex Troshkin")])])])}],n=a("1da1"),c=(a("96cf"),a("a15b"),a("ac1f"),a("1276"),a("99af"),a("d3b7"),a("b0c0"),a("a4d3"),a("e01a"),a("159b"),a("a9e3"),{data:function(){return{centerMap:{lat:55.75,lng:37.62},visible:!0,citySearch:"",cities:[{cityTitle:"Москва",isActive:!0,isCorrect:!0},{cityTitle:"Нью-Йорк",isActive:!1,isCorrect:!0},{cityTitle:"Рио-де-Жанейро",isActive:!1,isCorrect:!0},{cityTitle:"Бирлен",isActive:!1,isCorrect:!0}],weather:{cityName:"Москва",temperature:[0,0,0,0],description:["Не получено","Не получено","Не получено","Не получено"],icon:["//cdn.weatherapi.com/weather/64x64/day/113.png","//cdn.weatherapi.com/weather/64x64/day/113.png","//cdn.weatherapi.com/weather/64x64/day/113.png","//cdn.weatherapi.com/weather/64x64/day/113.png"]}}},methods:{setCenter:function(e,t){this.centerMap={lat:e,lng:t}},getWeather:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var i,r,s,n,c,o,l,p,d,h,u,f,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.cityTitle,r="2f496ab65f5a480192f101539211304",s=new Date(Date.now()-1264e5).toLocaleDateString().split(".").reverse().join("-"),n=new Date(Date.now()+1728e5).toLocaleDateString().split(".").reverse().join("-"),c="https://api.weatherapi.com/v1/history.json?q=".concat(i,"&key=").concat(r,"&lang=ru&dt=").concat(s,"&end_dt=").concat(n),o="https://api.weatherapi.com/v1/current.json?q=".concat(i,"&key=").concat(r,"&lang=ru"),e.prev=6,e.next=9,fetch(c);case 9:return l=e.sent,e.next=12,fetch(o);case 12:return p=e.sent,e.next=15,l.json();case 15:return d=e.sent,e.next=18,p.json();case 18:h=e.sent,this.weather.cityName=d.location.name,u=0;case 21:if(!(u<4)){e.next=30;break}if(1!==u){e.next=24;break}return e.abrupt("continue",27);case 24:this.weather.temperature[u]=Math.round(d.forecast.forecastday[u].day.avgtemp_c),this.weather.description[u]=d.forecast.forecastday[u].day.condition.text,this.weather.icon[u]=d.forecast.forecastday[u].day.condition.icon;case 27:u++,e.next=21;break;case 30:this.weather.temperature[1]=Math.round(h.current.temp_c),this.weather.description[1]=h.current.condition.text,this.weather.icon[1]=h.current.condition.icon,this.visible=!0,this.cities.isActive=!1,this.cities.forEach((function(e,t){e.isActive=t===a})),f=Number(h.location.lat),y=Number(h.location.lon),this.setCenter(f,y),e.next=46;break;case 41:e.prev=41,e.t0=e["catch"](6),this.visible=!1,this.weather.cityName=i,this.cities.forEach((function(e,t){e.isActive=!1,t===a&&(e.isCorrect=!1)}));case 46:case"end":return e.stop()}}),e,this,[[6,41]])})));function t(t,a){return e.apply(this,arguments)}return t}()}}),o=c,l=(a("5c0b"),a("2877")),p=Object(l["a"])(o,r,s,!1,null,null,null),d=p.exports,h=a("755e");i["a"].config.productionTip=!1,i["a"].use(h,{load:{key:"AIzaSyBxLG1DqAeMXNC-VDJAG_MRDt7u06VypJc",libraries:"places",region:"RU",language:"ru"}}),new i["a"]({render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.16bc62a9.js.map