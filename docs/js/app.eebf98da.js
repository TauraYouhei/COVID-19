(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2b198bfe":"b69c42d3","chunk-0e0f083f":"165dd765","chunk-2b12c4ec":"5fcfc2fc","chunk-40fb6e73":"c4acd6df","chunk-723def32":"82775452","chunk-c276190a":"270241ee","chunk-e844c228":"705f1117"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2b198bfe":1,"chunk-0e0f083f":1,"chunk-2b12c4ec":1,"chunk-40fb6e73":1,"chunk-723def32":1,"chunk-c276190a":1,"chunk-e844c228":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2b198bfe":"ef6e8770","chunk-0e0f083f":"a9a1e82d","chunk-2b12c4ec":"90bb780c","chunk-40fb6e73":"1fb628e9","chunk-723def32":"899016dd","chunk-c276190a":"edf6e028","chunk-e844c228":"8af1033f"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),t(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,c,a){var u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(u)}var c=t("b85c"),a={name:"App",mounted:function(){navigator.serviceWorker.getRegistrations().then((function(e){var n,t=Object(c["a"])(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.unregister()}}catch(o){t.e(o)}finally{t.f()}}))}};t("64be");a.render=o;var u=a,i=t("9483");Object(i["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var s=t("6c02"),f=[{path:"/",name:"Mainpage",component:function(){return Promise.all([t.e("chunk-2b198bfe"),t.e("chunk-0e0f083f")]).then(t.bind(null,"4edd"))}},{path:"/Detailspage",name:"detailspage",component:function(){return t.e("chunk-c276190a").then(t.bind(null,"4811"))}},{path:"/shisetupage",name:"shisetupage",component:function(){return t.e("chunk-40fb6e73").then(t.bind(null,"7796"))}},{path:"/helppage",name:"helppage",component:function(){return t.e("chunk-723def32").then(t.bind(null,"681d"))}},{path:"/shisetupage/itiranpage",name:"Shisetu_itiranpage",component:function(){return Promise.all([t.e("chunk-2b198bfe"),t.e("chunk-2b12c4ec")]).then(t.bind(null,"a239"))},props:!0},{path:"/shisetupage/itiran/syousai",name:"Shisetu_syousaipage",component:function(){return t.e("chunk-e844c228").then(t.bind(null,"ee4b"))},props:!0}],l=Object(s["a"])({history:Object(s["b"])(""),routes:f}),d=l,p=t("5502"),h=t("0e44"),b=Object(p["a"])({state:{detaildata:[],detaildata2:[],facilityTableData:[]},mutations:{Enter:function(e,n){e.detaildata=n},Enter2:function(e,n){e.detaildata2=n},toStore:function(e,n){e.facilityTableData=n}},actions:{},modules:{},plugins:[Object(h["a"])({storage:window.sessionStorage})]}),g=Object(r["c"])(u);g.config.devtools=!0,g.use(b).use(d).mount("#app")},"64be":function(e,n,t){"use strict";t("c894")},c894:function(e,n,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ZGZiNiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNmN2UiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCJqc29ucFNjcmlwdFNyYyIsInAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsImNzc0NodW5rcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwiZXhpc3RpbmdMaW5rVGFncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJkYXRhSHJlZiIsImdldEF0dHJpYnV0ZSIsInJlbCIsImV4aXN0aW5nU3R5bGVUYWdzIiwibGlua1RhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25sb2FkIiwib25lcnJvciIsImV2ZW50IiwicmVxdWVzdCIsInRhcmdldCIsInNyYyIsImVyciIsIkVycm9yIiwiY29kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJtb3VudGVkIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsImdldFJlZ2lzdHJhdGlvbnMiLCJyZWdpc3RyYXRpb25zIiwicmVnaXN0cmF0aW9uIiwidW5yZWdpc3RlciIsInJlbmRlciIsInJlZ2lzdGVyIiwicHJvY2VzcyIsInJlYWR5IiwibG9nIiwicmVnaXN0ZXJlZCIsImNhY2hlZCIsInVwZGF0ZWZvdW5kIiwidXBkYXRlZCIsIm9mZmxpbmUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJoaXN0b3J5IiwiY3JlYXRlV2ViSGFzaEhpc3RvcnkiLCJjcmVhdGVTdG9yZSIsInN0YXRlIiwiZGV0YWlsZGF0YSIsImRldGFpbGRhdGEyIiwiZmFjaWxpdHlUYWJsZURhdGEiLCJtdXRhdGlvbnMiLCJFbnRlciIsIkVudGVyMiIsInRvU3RvcmUiLCJhY3Rpb25zIiwicGx1Z2lucyIsImNyZWF0ZVBlcnNpc3RlZFN0YXRlIiwic3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiYXBwIiwiY3JlYXRlQXBwIiwiQXBwIiwiY29uZmlnIiwiZGV2dG9vbHMiLCJ1c2UiLCJzdG9yZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBQ25CSyxFQUFpQkwsRUFBSyxHQUlITSxFQUFJLEVBQUdDLEVBQVcsR0FDcENELEVBQUlILEVBQVNLLE9BQVFGLElBQ3pCSixFQUFVQyxFQUFTRyxHQUNoQkcsT0FBT0MsVUFBVUMsZUFBZUMsS0FBS0MsRUFBaUJYLElBQVlXLEVBQWdCWCxJQUNwRkssRUFBU08sS0FBS0QsRUFBZ0JYLEdBQVMsSUFFeENXLEVBQWdCWCxHQUFXLEVBRTVCLElBQUlELEtBQVlHLEVBQ1pLLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtSLEVBQWFILEtBQ3BEYyxFQUFRZCxHQUFZRyxFQUFZSCxJQUcvQmUsR0FBcUJBLEVBQW9CaEIsR0FFNUMsTUFBTU8sRUFBU0MsT0FDZEQsRUFBU1UsT0FBVFYsR0FPRCxPQUhBVyxFQUFnQkosS0FBS0ssTUFBTUQsRUFBaUJiLEdBQWtCLElBR3ZEZSxJQUVSLFNBQVNBLElBRVIsSUFEQSxJQUFJQyxFQUNJZixFQUFJLEVBQUdBLEVBQUlZLEVBQWdCVixPQUFRRixJQUFLLENBRy9DLElBRkEsSUFBSWdCLEVBQWlCSixFQUFnQlosR0FDakNpQixHQUFZLEVBQ1JDLEVBQUksRUFBR0EsRUFBSUYsRUFBZWQsT0FBUWdCLElBQUssQ0FDOUMsSUFBSUMsRUFBUUgsRUFBZUUs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bEQsS0FBTSxXQUNObUQsVUFBVyxrQkFBTSx1RkFFbkIsQ0FDRUQsS0FBTSxlQUNObEQsS0FBTSxjQUNObUQsVUFBVyxrQkFBTSxrREFFbkIsQ0FDRUQsS0FBTSxlQUNObEQsS0FBTSxjQUNObUQsVUFBVyxrQkFBTSxrREFFbkIsQ0FDRUQsS0FBTSxZQUNObEQsS0FBTSxXQUNObUQsVUFBVyxrQkFBTSxrREFFbkIsQ0FDRUQsS0FBTSwwQkFDTmxELEtBQU0scUJBQ05tRCxVQUFXLGtCQUFNLHNGQUNqQkMsT0FBTyxHQUVULENBQ0VGLEtBQU0sOEJBQ05sRCxLQUFNLHNCQUNObUQsVUFBVyxrQkFBTSxpREFDakJDLE9BQU8sSUFJTEMsRUFBU0MsZUFBYSxDQUMxQkMsUUFBU0MsZUFBcUJmLElBQzlCUSxXQUdhSSxJLHdCQ3ZDQUksaUJBQVksQ0FDekJDLE1BQU8sQ0FDTEMsV0FBWSxHQUNaQyxZQUFhLEdBQ2JDLGtCQUFtQixJQUVyQkMsVUFBVyxDQUNUQyxNQURTLFNBQ0ZMLEVBQU83SSxHQUNWNkksRUFBTUMsV0FBYTlJLEdBRXZCbUosT0FKUyxTQUlETixFQUFPN0ksR0FDYjZJLEVBQU1FLFlBQWMvSSxHQUV0Qm9KLFFBUFMsU0FPQVAsRUFBTzdJLEdBQ2Q2SSxFQUFNRyxrQkFBb0JoSixJQUc5QnFKLFFBQVMsR0FFVHRJLFFBQVMsR0FFVHVJLFFBQVMsQ0FBQ0MsZUFBcUIsQ0FDN0JDLFFBQVN4QyxPQUFPeUMsb0JDbkJkQyxFQUFNQyxlQUFVQyxHQUV0QkYsRUFBSUcsT0FBT0MsVUFBVyxFQUN0QkosRUFBSUssSUFBSUMsR0FBT0QsSUFBSXZCLEdBQVF5QixNQUFNLFMsb0NDVGpDLFciLCJmaWxlIjoianMvYXBwLmVlYmY5OGRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fVxuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJqcy9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcImNodW5rLTJiMTk4YmZlXCI6XCJiNjljNDJkM1wiLFwiY2h1bmstMGUwZjA4M2ZcIjpcIjE2NWRkNzY1XCIsXCJjaHVuay0yYjEyYzRlY1wiOlwiNWZjZmMyZmNcIixcImNodW5rLTQwZmI2ZTczXCI6XCJjNGFjZDZkZlwiLFwiY2h1bmstNzIzZGVmMzJcIjpcIjgyNzc1NDUyXCIsXCJjaHVuay1jMjc2MTkwYVwiOlwiMjcwMjQxZWVcIixcImNodW5rLWU4NDRjMjI4XCI6XCI3MDVmMTExN1wifVtjaHVua0lkXSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCJjaHVuay0yYjE5OGJmZVwiOjEsXCJjaHVuay0wZTBmMDgzZlwiOjEsXCJjaHVuay0yYjEyYzRlY1wiOjEsXCJjaHVuay00MGZiNmU3M1wiOjEsXCJjaHVuay03MjNkZWYzMlwiOjEsXCJjaHVuay1jMjc2MTkwYVwiOjEsXCJjaHVuay1lODQ0YzIyOFwiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJjc3MvXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjaHVuay0yYjE5OGJmZVwiOlwiZWY2ZTg3NzBcIixcImNodW5rLTBlMGYwODNmXCI6XCJhOWExZTgyZFwiLFwiY2h1bmstMmIxMmM0ZWNcIjpcIjkwYmI3ODBjXCIsXCJjaHVuay00MGZiNmU3M1wiOlwiMWZiNjI4ZTlcIixcImNodW5rLTcyM2RlZjMyXCI6XCI4OTkwMTZkZFwiLFwiY2h1bmstYzI3NjE5MGFcIjpcImVkZjZlMDI4XCIsXCJjaHVuay1lODQ0YzIyOFwiOlwiOGFmMTAzM2ZcIn1bY2h1bmtJZF0gKyBcIi5jc3NcIjtcbiBcdFx0XHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuIFx0XHRcdFx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuIFx0XHRcdFx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuIFx0XHRcdFx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiBcdFx0XHRcdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiBcdFx0XHRcdGxpbmtUYWcub25sb2FkID0gcmVzb2x2ZTtcbiBcdFx0XHRcdGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gXHRcdFx0XHRcdHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gXHRcdFx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVxdWVzdCArIFwiKVwiKTtcbiBcdFx0XHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF1cbiBcdFx0XHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcImNodW5rLXZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XG4gIDxyb3V0ZXItdmlldy8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFwcFwiLFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9ucygpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9ucykge1xuICAgICAgZm9yKGxldCByZWdpc3RyYXRpb24gb2YgcmVnaXN0cmF0aW9ucykge1xuICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiNhcHAge1xuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuXG4jbmF2IGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbiNuYXYgYS5yb3V0ZXItbGluay1leGFjdC1hY3RpdmUge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjZmYyMmY2JmJpbmRpbmdzPXt9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAncmVnaXN0ZXItc2VydmljZS13b3JrZXInXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHJlZ2lzdGVyKGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXNlcnZpY2Utd29ya2VyLmpzYCwge1xuICAgIHJlYWR5ICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnQXBwIGlzIGJlaW5nIHNlcnZlZCBmcm9tIGNhY2hlIGJ5IGEgc2VydmljZSB3b3JrZXIuXFxuJyArXG4gICAgICAgICdGb3IgbW9yZSBkZXRhaWxzLCB2aXNpdCBodHRwczovL2dvby5nbC9BRnNrcUInXG4gICAgICApXG4gICAgfSxcbiAgICByZWdpc3RlcmVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkLicpXG4gICAgfSxcbiAgICBjYWNoZWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaGFzIGJlZW4gY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKVxuICAgIH0sXG4gICAgdXBkYXRlZm91bmQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGRvd25sb2FkaW5nLicpXG4gICAgfSxcbiAgICB1cGRhdGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLicpXG4gICAgfSxcbiAgICBvZmZsaW5lICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJylcbiAgICB9LFxuICAgIGVycm9yIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcilcbiAgICB9XG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhhc2hIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdNYWlucGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL01haW5wYWdlLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL0RldGFpbHNwYWdlJyxcbiAgICBuYW1lOiAnZGV0YWlsc3BhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9EZXRhaWxzcGFnZS52dWUnKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZScsXG4gICAgbmFtZTogJ3NoaXNldHVwYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dXBhZ2UudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvaGVscHBhZ2UnLFxuICAgIG5hbWU6ICdoZWxwcGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL0hlbHBwYWdlLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3NoaXNldHVwYWdlL2l0aXJhbnBhZ2UnLFxuICAgIG5hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlJyksXG4gICAgcHJvcHM6IHRydWVcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvc2hpc2V0dXBhZ2UvaXRpcmFuL3N5b3VzYWknLFxuICAgIG5hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWUnKSxcbiAgICBwcm9wczogdHJ1ZVxuICB9LFxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICBoaXN0b3J5OiBjcmVhdGVXZWJIYXNoSGlzdG9yeShwcm9jZXNzLmVudi5CQVNFX1VSTCksXG4gIHJvdXRlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgY3JlYXRlUGVyc2lzdGVkU3RhdGUgZnJvbSAndnVleC1wZXJzaXN0ZWRzdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIGRldGFpbGRhdGE6IFtdLFxuICAgIGRldGFpbGRhdGEyOiBbXSxcbiAgICBmYWNpbGl0eVRhYmxlRGF0YTogW10sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIEVudGVyIChzdGF0ZSwgZGF0YSkge1xuICAgICAgICBzdGF0ZS5kZXRhaWxkYXRhID0gZGF0YTtcbiAgICB9LFxuICAgIEVudGVyMiAoc3RhdGUsIGRhdGEpIHtcbiAgICAgIHN0YXRlLmRldGFpbGRhdGEyID0gZGF0YTtcbiAgICB9LFxuICAgIHRvU3RvcmUgKHN0YXRlLCBkYXRhKSB7XG4gICAgICBzdGF0ZS5mYWNpbGl0eVRhYmxlRGF0YSA9IGRhdGE7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICB9LFxuICBtb2R1bGVzOiB7XG4gIH0sXG4gIHBsdWdpbnM6IFtjcmVhdGVQZXJzaXN0ZWRTdGF0ZSh7XG4gICAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlXG4gIH0pXVxufSlcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXHJcbmltcG9ydCAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXInXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcclxuXHJcbmFwcC5jb25maWcuZGV2dG9vbHMgPSB0cnVlXHJcbmFwcC51c2Uoc3RvcmUpLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJykiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/P3JlZi0tMC0xIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9