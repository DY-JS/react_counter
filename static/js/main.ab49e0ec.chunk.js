(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),o=n(5),u=n(7),r=n(6),i=n(1),d=n.n(i),b=(n(12),n(0)),l=function(t){Object(u.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5!==0?t.addOne():(t.addOne(),t.add100())},t.reset=function(){t.setState({count:0})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h1",{children:this.state.count}),Object(b.jsx)("input",{className:"app__reset",type:"button",value:"Reset",onClick:this.reset}),Object(b.jsxs)("div",{className:"app__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.addOne,children:"Add 1"}),Object(b.jsx)("button",{type:"button",onClick:this.add100,children:"Add 100"}),Object(b.jsx)("button",{type:"button",onClick:this.increase,children:"Special"})]})]})}}]),n}(d.a.Component),j=l;a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ab49e0ec.chunk.js.map