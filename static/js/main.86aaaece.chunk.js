(this["webpackJsonpfile-downloader"]=this["webpackJsonpfile-downloader"]||[]).push([[0],{43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(7),a=n.n(c),r=n(14),s=n.n(r),l=(n(43),n(15)),o=n(17),d=function(){return Object(i.jsx)("input",{type:"file",accept:".tsv, .csv",onChange:function(e){return function(e){var t=e.files[0],n=t.name.split("."),i=n[n.length-1],c=o.a("tsv"===i?"\t":","),a=new FileReader;a.onload=function(e){var t=c.parse(e.target.result);window.alert("Start downloads"),t.forEach((function(e,t){Object(l.saveAs)("https://api.allorigins.win/raw?url="+e.url,e.filename)}))},a.readAsText(t)}(e.target)}})};n(46);var j=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h1",{children:"Download and rename many files"}),Object(i.jsxs)("p",{children:["Load a ",Object(i.jsx)("kbd",{children:".csv"})," or a ",Object(i.jsx)("kbd",{children:".tsv"})," with 2 columns:"]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"a url to the file"}),Object(i.jsx)("li",{children:"the filename you want to give to the downloaded file (with original extension)"})]}),Object(i.jsx)(d,{})]})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),u()}},[[47,1,2]]]);
//# sourceMappingURL=main.86aaaece.chunk.js.map