(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return g}});var t=n(5893),a=n(7757),s=n.n(a),r=n(8023),i=n(5861),o=n(7028),c=n(7084),u=n.n(c),d=n(9008),x=n(7294),f=n(7467),h=[{label:"Discord \ud83d\udd35",value:"discord"},{label:"Embarassing \ud83d\ude33",value:"embarassing"},{label:"Food \ud83c\udf72",value:"food"},{label:"Funny \ud83d\ude02",value:"funny"},{label:"Games \ud83c\udfae",value:"games"},{label:"Gross \ud83e\udd22",value:"gross"},{label:"Random \ud83c\udfb2",value:"random"},{label:"Rules \ud83d\udcc4",value:"rules"},{label:"Couples \ud83d\udc6b\ud83d\udd1e",value:"nsfw/couples"},{label:"Dirty \ud83d\udca6\ud83d\udd1e",value:"nsfw/dirty"},{label:"Girls \ud83d\udc69\ud83d\udd1e",value:"nsfw/girls"},{label:"Guys \ud83d\udc68\ud83d\udd1e",value:"nsfw/guys"}];function m(e){var l=Math.floor(Math.random()*e.length);return[e[l],e.filter((function(n){return n!==e[l]}))]}function g(){var e=(0,x.useState)([]),l=e[0],n=e[1],a=(0,x.useState)(!1),c=a[0],g=a[1],b=(0,x.useState)(!1),v=b[0],w=b[1],p=(0,x.useState)([]),N=p[0],j=p[1],y=(0,x.useState)(),_=y[0],k=y[1],C=(0,x.useCallback)((function(){var e=m(N),l=(0,o.Z)(e,2),n=l[0],t=l[1];k(n),j(t)}),[N]),E=(0,x.useCallback)((0,i.Z)(s().mark((function e(){var n,t,a,i,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,Promise.all(l.map((function(e){var l=e.value;return fetch("data/".concat(l,".txt")).then((function(e){return e.text()}))})));case 3:n=e.sent,t=n.map((function(e){return e.split("\n")})).reduce((function(e,l){return[].concat((0,r.Z)(e),(0,r.Z)(l))}),[]),a=m(t),i=(0,o.Z)(a,2),c=i[0],u=i[1],k(c),j(u),w(!0),g(!1);case 10:case"end":return e.stop()}}),e)}))),[l]),S=(0,x.useCallback)((function(){w(!1),g(!1),k(null),j([])}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.default,{children:(0,t.jsx)("title",{children:"Never Have I Ever"})}),v?(0,t.jsx)("div",{className:"flex flex-col min-h-screen p-8 bg-indigo-200 min-w-screen",children:(0,t.jsxs)("div",{className:"flex flex-col items-center flex-1 max-w-xl p-6 mx-auto space-y-8 bg-white rounded-lg shadow-lg",children:[(0,t.jsx)("h1",{className:"mt-6 text-5xl font-bold",children:"Never Have I Ever"}),(0,t.jsx)("h3",{className:"flex items-center flex-1 p-8 mb-4 text-3xl font-semibold text-center bg-gray-100 rounded-lg shadow-inner",dangerouslySetInnerHTML:{__html:_&&u()(_)}}),(0,t.jsxs)("p",{className:"font-bold text-gray-500",children:[N.length," left"]}),(0,t.jsx)("button",{disabled:0===l.length,className:"w-full p-2 text-2xl text-white transition-all duration-150 rounded-md "+(l.length>0&&!c?"shadow-md bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 cursor-pointer":"bg-gray-300 cursor-not-allowed"),onClick:N.length>0?C:S,children:N.length>0?"Next":"New Game"})]})}):(0,t.jsx)("div",{className:"min-h-screen p-8 bg-indigo-200 min-w-screen",children:(0,t.jsxs)("div",{className:"flex flex-col items-center max-w-xl p-6 mx-auto space-y-8 bg-white rounded-lg shadow-lg",children:[(0,t.jsx)("h1",{className:"mt-6 text-5xl font-bold",children:"Never Have I Ever"}),(0,t.jsxs)("div",{className:"w-full space-y-2",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:"Select Categories"}),(0,t.jsx)(f.ZP,{className:"w-full",options:h,value:l,onChange:n,labelledBy:"Select"}),(0,t.jsx)("button",{disabled:0===l.length,className:"w-full p-2 text-2xl text-white transition-all duration-150 rounded-md "+(l.length>0&&!c?"shadow-md bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 cursor-pointer":"bg-gray-300 cursor-not-allowed"),onClick:l.length>0&&E,children:c?(0,t.jsx)("div",{className:"flex items-center justify-center p-1",children:(0,t.jsx)("div",{className:"w-8 h-8 border-2 border-gray-200 rounded-full animate-spin",style:{borderTopColor:"black"}})}):"Let's Play"})]})]})})]})}},8581:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[386,774,888,179],(function(){return l=8581,e(e.s=l);var l}));var l=e.O();_N_E=l}]);