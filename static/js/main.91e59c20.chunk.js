(this.webpackJsonpchk01=this.webpackJsonpchk01||[]).push([[0],{10:function(e,n,t){e.exports=t(28)},15:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(3),c=t.n(r),a=(t(15),t(2)),l=t(6),d=t.n(l),u=t(7),s=t(8),g=t.n(s),m=t(4),f=t.n(m),h=function(){var e=Object(o.useState)(""),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(1),l=Object(a.a)(c,2),s=l[0],m=l[1],h=Object(o.useState)(100),p=Object(a.a)(h,2),y=p[0],v=p[1];Object(o.useEffect)((function(){return E(),window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}}),[]);var E=function(){v(window.innerWidth)};return i.a.createElement("div",{id:"qr2",style:{display:"flex",flexDirection:"column",flex:1}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement("div",{onClick:function(e){return m(1)},style:{padding:10,backgroundColor:1==s?"lightgreen":"lightgrey"}},"1"),i.a.createElement("div",{onClick:function(e){return m(2)},style:{padding:10,backgroundColor:2==s?"lightgreen":"lightgrey"}},"2"),i.a.createElement("div",{onClick:function(e){return m(3)},style:{padding:10,backgroundColor:3==s?"lightgreen":"lightgrey"}},"3"),i.a.createElement("div",{onClick:function(e){return function(){if(1==s){var e=document.getElementById("printqrcode");g()(e).then((function(e){var n=e.toDataURL("image/png"),t=document.createElement("a");t.href=n,t.download="store-qrcode.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}))}}()},style:{padding:10,backgroundColor:3==s?"lightgreen":"lightgrey"}},"QRMK")),1==s&&i.a.createElement("header",{id:"printqrcode",style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",backgroundColor:"lightblue"}},i.a.createElement("p",null,y),i.a.createElement(u.QRCode,{id:"xprintqrcode",style:{display:"flex"},size:3*y/4,logoImage:d.a,value:"https://github.com/gcoro/react-qrcode-logo"})),2==s&&i.a.createElement("header",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)"}},i.a.createElement("div",null,"SCAN: ",t),i.a.createElement(f.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){r(e)},style:{width:"100%"},facingMode:"environment"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,n,t){e.exports=t.p+"static/media/image_kan-256x256.904c77a7.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.91e59c20.chunk.js.map