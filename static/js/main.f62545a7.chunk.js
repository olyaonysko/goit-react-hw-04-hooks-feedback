(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(4),s=n.n(i),o=(n(10),n(2)),b=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})},j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)(b,{title:"Please leave feedback",children:Object.keys(t).map((function(e){return Object(c.jsx)("button",{type:"button",name:e,onClick:function(){return n(e)},children:e},e)}))})},u=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})},d=function(e){var t=e.good,n=e.neutral,r=e.bad,a=e.total,i=e.positivePercentage;return Object(c.jsx)(b,{title:"Statistics",children:a?Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad:",r]}),Object(c.jsxs)("li",{children:["Total: ",a]}),Object(c.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]}):Object(c.jsx)(u,{message:"No feedback given"})})};function l(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),s=Object(o.a)(i,2),b=s[0],u=s[1],l=Object(r.useState)(0),O=Object(o.a)(l,2),h=O[0],f=O[1],x=function(){return n+b+h};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{options:{good:n,neutral:b,bad:h},onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}}),Object(c.jsx)(d,{good:n,neutral:b,bad:h,total:x(),positivePercentage:Math.round(n/x()*100)})]})}s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f62545a7.chunk.js.map