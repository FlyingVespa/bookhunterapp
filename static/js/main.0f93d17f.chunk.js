(this.webpackJsonpbookhunterapp=this.webpackJsonpbookhunterapp||[]).push([[0],{38:function(A,e,t){},39:function(A,e,t){"use strict";t.r(e);var g=t(0),s=t(2),n=t.n(s),c=t(6),i=t.n(c),B=t(3),a=t(15),o=t.n(a),r=(t(4),{title:"N/A",summary:"No Summary Available",category:"Unknown",image:t.p+"static/media/openbook.77b19f19.png",authors:"Unknown",publishedDate:"Unknown"});var d=function(A){var e=function(A,e,t,g,s,n,c,i){return""!==A&&void 0!==A||(A=r.title),""!==s&&void 0!==s&&null!=s||(s=r.image),""!==g&&void 0!==g||(g=r.category),""!==n&&void 0!==n||(n=r.authors),""!==c&&void 0!==c||(c=r.publishedDate),""!==e&&void 0!==e||(e=r.summary),{title:A,summary:e,link:t,category:g,image:s,authors:n,publishedDate:c,preview:i}}(A.title,A.summary,A.link,A.category,A.image,A.authors,A.publishedDate,A.preview);return Object(g.jsxs)("div",{className:"book-card",children:[Object(g.jsx)("img",{className:"book-thumbnail",src:e.image,alt:"book thumbail"}),Object(g.jsxs)("div",{className:"info-container",children:[Object(g.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(g.jsx)("h1",{children:e.title&&e.title.substr(0,70)})}),Object(g.jsxs)("div",{className:"desc",children:[Object(g.jsxs)("p",{id:"category",children:[Object(g.jsx)("b",{children:"Category:"})," ",e.category]}),Object(g.jsxs)("p",{id:"author",children:[Object(g.jsx)("b",{children:"Author:"})," ",e.authors]}),Object(g.jsxs)("p",{id:"publish",children:[Object(g.jsx)("b",{children:"Published:"})," ",e.publishedDate]})]})]}),Object(g.jsx)("div",{className:"summary",children:Object(g.jsx)("p",{children:e.summary&&e.summary.substr(0,300)+"..."})}),Object(g.jsx)("a",{href:e.preview,target:"_blank",rel:"noreferrer",children:Object(g.jsx)("button",{className:"btn-info",children:" Read More"})})]})},w=t.p+"static/media/insta.45246790.png",b=t.p+"static/media/book.aa791be5.jpg",Q=function(){var A=Object(s.useState)([]),e=Object(B.a)(A,2),t=e[0],n=e[1],c=Object(s.useState)(),i=Object(B.a)(c,2),a=i[0],r=i[1],Q=Object(s.useState)(""),l=Object(B.a)(Q,2),C=l[0],u=l[1],v=Object(s.useState)(!1),j=Object(B.a)(v,2)[1],O=Object(s.useState)(!1),m=Object(B.a)(O,2)[1];return Object(s.useEffect)((function(){o.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(C)+"&maxResults=40").then((function(A){A.data.items.forEach((function(A){void 0===A.volumeInfo&&(A.volumeInfo={imageLinks:{thumbnail:""}}),void 0===A.volumeInfo.imageLinks&&(A.volumeInfo.imageLinks={thumbnail:""})})),n(A.data.items),j(!1),m(!1)})).catch((function(A){m(!0)}))}),[C]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("form",{onSubmit:function(A){A.preventDefault(),u(a),r("")},children:Object(g.jsxs)("div",{className:"search",children:[Object(g.jsx)("input",{className:"input-box",type:"text",placeholder:"Search for a book",value:a,onChange:function(A){r(A.target.value)}}),Object(g.jsx)("button",{className:"btn-submit",type:"submit",children:"Search"})]})}),Object(g.jsx)("div",{className:"resultstitle",children:Object(g.jsx)("h2",{children:"RESULTS"})}),Object(g.jsxs)("div",{className:"results",children:[t&&t.length>0&&t.map((function(A){return Object(g.jsx)(d,{title:A.volumeInfo.title,summary:A.volumeInfo.description,link:A.volumeInfo.infoLink,category:A.volumeInfo.categories,image:A.volumeInfo.imageLinks.thumbnail,authors:A.volumeInfo.authors,publishedDate:A.volumeInfo.publishedDate,preview:A.volumeInfo.previewLink},A.id)})),!t&&Object(g.jsxs)("div",{children:[" ",Object(g.jsx)("p",{children:"Oops....Not found. Try searching something else."})," "]})]}),Object(g.jsx)("img",{id:"bgImg",src:b,alt:""}),Object(g.jsx)("footer",{children:Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsx)("a",{href:"https://www.instagram.com/hedrinel/",children:Object(g.jsx)("img",{className:"icon",src:w,alt:""})}),Object(g.jsx)("a",{href:"https://https://github.com/FlyingVespa/bookhunterapp",children:Object(g.jsx)("img",{className:"icon",src:"data:image/png;base64,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",alt:""})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/hedrinel/",children:Object(g.jsx)("img",{className:"icon",src:"data:image/png;base64,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",alt:""})}),Object(g.jsx)("p",{children:"Helena Nel \xa9 2020 "})]})})]})},l=(t(38),t.p+"static/media/openbook.77b19f19.png"),C=function(){return Object(g.jsxs)("header",{children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("img",{className:"logo-img",src:l,alt:"a"}),Object(g.jsx)("h1",{children:"BOOKHUNTER"})]}),Object(g.jsx)("div",{className:"slogan",children:Object(g.jsx)("p",{children:"Bound to find something"})})]})};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),i.a.render(Object(g.jsx)(C,{}),document.getElementById("header"))},4:function(A,e,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.0f93d17f.chunk.js.map