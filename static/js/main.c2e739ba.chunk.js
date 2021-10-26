(this["webpackJsonpsleep-db"]=this["webpackJsonpsleep-db"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=function(){var e=Math.floor(2*Math.random()+1)%2===0?"\ud83c\udf19":"\ud83d\udca4";return l.a.createElement("h2",{className:"header"},"Restly.app",l.a.createElement("sup",null,l.a.createElement("sup",null,e)))},s=a(1),u=a(5),i=a(2),m=function(e,t){var a;switch(t.type){case"UPDATE_SLEEPHOURSGOAL":return localStorage.setItem("sleepHoursGoal",t.payload),Object(i.a)({},e,{sleepHoursGoal:t.payload});case"DELETE_SLEEPENTRY":return a=e.sleepEntries.filter((function(e){return e.id!==t.payload})),localStorage.setItem("sleepEntries",JSON.stringify(a)),Object(i.a)({},e,{sleepEntries:a});case"ADD_SLEEPENTRY":return a=[t.payload].concat(Object(u.a)(e.sleepEntries)),localStorage.setItem("sleepEntries",JSON.stringify(a)),Object(i.a)({},e,{sleepEntries:a});default:return e}},E={sleepHoursGoal:+localStorage.getItem("sleepHoursGoal")||8,sleepEntries:localStorage.getItem("sleepEntries")?JSON.parse(localStorage.getItem("sleepEntries")).map((function(e){return e.dateAdded=new Date(e.dateAdded),e.date=new Date(e.date),e.startTime=new Date(e.startTime),e.endTime=new Date(e.endTime),e})):[]},p=Object(n.createContext)(E),d=function(e){var t=e.children,a=Object(n.useReducer)(m,E),r=Object(s.a)(a,2),c=r[0],o=r[1];return l.a.createElement(p.Provider,{value:{sleepHoursGoal:c.sleepHoursGoal,sleepEntries:c.sleepEntries,updateSleepHoursGoal:function(e){o({type:"UPDATE_SLEEPHOURSGOAL",payload:e})},deleteSleepEntry:function(e){o({type:"DELETE_SLEEPENTRY",payload:e})},addSleepEntry:function(e){o({type:"ADD_SLEEPENTRY",payload:e})}}},t)},f=function(){var e=Object(n.useContext)(p),t=e.sleepHoursGoal,a=e.updateSleepHoursGoal;return l.a.createElement("div",{className:"sleep-goal"},l.a.createElement("h4",null,"My Goal ",l.a.createElement("span",{className:"hint"},"(click to edit)")),l.a.createElement("input",{type:"number",className:"inputHoursGoal",value:t,onChange:function(e){return function(e){var n=+e[e.length-1];n<=9&&n>=1&&!isNaN(n)?a(n):a(t)}(e.target.value)}}),l.a.createElement("h1",null,"hours",l.a.createElement("span",{className:"hint"}," per night")))},g=function(e){var t=parseInt(e/1e3,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60);return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},v=function(){var e,t=Object(n.useContext)(p),a=t.sleepHoursGoal,r=t.sleepEntries,c=r.reduce((function(e,t){return t.durationHours>=a&&(e+=1),e}),0),o=r.filter((function(e){return e.durationHours<a}));if(0!==o.length){var s=36e5*o.reduce((function(e,t){return e+(a-t.durationHours)}),0)/o.length;e=g(s)}else e="0:00";return l.a.createElement("div",{className:"inc-exp-container"},l.a.createElement("div",null,l.a.createElement("h4",null,"Rested Nights"),l.a.createElement("p",{className:"stats plus"},c)),l.a.createElement("div",null,l.a.createElement("h4",null,"AVG Deficit"),l.a.createElement("p",{className:"stats minus"},e||"0:00")))},S=function(e){var t=e.sleepEntry,a=Object(n.useContext)(p),r=a.sleepHoursGoal,c=a.deleteSleepEntry,o=t.id,s=t.date,u=t.startTime,i=t.endTime,m=(t.notes,t.durationHHMM),E=t.durationHours,d=u.toLocaleTimeString().substring(0,5),f=i.toLocaleTimeString().substring(0,5);return l.a.createElement("li",{className:E<r?"minus":"plus"},s.toDateString()," ",l.a.createElement("span",{className:"timeRange"},"(",d,"\u2192",f,")")," ",l.a.createElement("span",null,m),l.a.createElement("button",{className:"delete-btn",onClick:function(){return c(o)}},"x"))},b=function(){var e=Object(n.useContext)(p).sleepEntries;return l.a.createElement("div",null,l.a.createElement("h3",null,"Sleep Log"),l.a.createElement("ul",{className:"list"},e.map((function(e){return l.a.createElement(S,{key:e.id,sleepEntry:e})}))))},h=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(null),E=Object(s.a)(m,2),d=E[0],f=E[1],v=Object(n.useState)(""),S=Object(s.a)(v,2),b=S[0],h=S[1],N=Object(n.useContext)(p).addSleepEntry,y=(new Date).toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],D=(new Date).toDateString();return Object(n.useEffect)((function(){if(a){var e=a.toDateString();if(u){var t=u.toLocaleTimeString(),n=new Date("".concat(e," ").concat(t," ").concat(y));n.getHours()>=12&&n.setHours(n.getHours()-24),i(n)}if(d){var l=d.toLocaleTimeString(),r=new Date("".concat(e," ").concat(l," ").concat(y));f(r)}}}),[a]),l.a.createElement("div",null,l.a.createElement("h3",null,"Add new entry"),l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&u&&d){var t=d.getTime()-u.getTime();if(t<0)alert("Enter a valid time range.");else{var n=g(t),l=t/36e5,r={id:Math.floor(1e12*Math.random()),dateAdded:new Date,date:a,startTime:u,endTime:d,notes:b,durationHHMM:n,durationHours:l};N(r)}}}},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{type:"date",onChange:function(e){return r(new Date(e.target.value+" "+y))}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("div",{className:"input-label-group"},l.a.createElement("label",{htmlFor:"amount"},"Sleep Start"),l.a.createElement("input",{type:"time",onChange:function(e){var t;(t=a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(y)):new Date("".concat(D," ").concat(e.target.value," ").concat(y))).getHours()>=12&&t.setHours(t.getHours()-24),i(t)}})),l.a.createElement("div",{className:"input-label-group"},l.a.createElement("label",{htmlFor:"amount"},"Sleep End"),l.a.createElement("input",{type:"time",onChange:function(e){f(a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(y)):new Date("".concat(D," ").concat(e.target.value," ").concat(y)))}}))),l.a.createElement("label",{htmlFor:"note"},"Notes"),l.a.createElement("div",{className:"form-control"},l.a.createElement("textarea",{type:"text",autoComplete:"off",spellCheck:"false",autoCorrect:"off",onChange:function(e){return h(e.target.value)}})),l.a.createElement("button",{className:"btn"},"Add entry")))};a(11);var N=function(){return l.a.createElement(d,null,l.a.createElement("div",{className:"container"},l.a.createElement(o,null),l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(h,null)))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.c2e739ba.chunk.js.map