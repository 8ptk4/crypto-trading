(this["webpackJsonpcrypto-trading"]=this["webpackJsonpcrypto-trading"]||[]).push([[8],{274:function(e,t,n){"use strict";var a=n(6),i=n(1),r=n(0),o=n.n(r),c=(n(11),n(45)),s=n(53),l=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=o.a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,m=e.className,d=e.component,f=void 0===d?"div":d,x=e.container,g=void 0!==x&&x,p=e.direction,v=void 0===p?"row":p,b=e.item,h=void 0!==b&&b,w=e.justify,y=void 0===w?"flex-start":w,j=e.lg,S=void 0!==j&&j,E=e.md,C=void 0!==E&&E,W=e.sm,k=void 0!==W&&W,I=e.spacing,O=void 0===I?0:I,z=e.wrap,M=void 0===z?"wrap":z,N=e.xl,D=void 0!==N&&N,B=e.xs,G=void 0!==B&&B,q=e.zeroMinWidth,A=void 0!==q&&q,F=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),J=Object(c.a)(u.root,m,g&&[u.container,0!==O&&u["spacing-xs-".concat(String(O))]],h&&u.item,A&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==M&&u["wrap-xs-".concat(String(M))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==r&&u["align-content-xs-".concat(String(r))],"flex-start"!==y&&u["justify-xs-".concat(String(y))],!1!==G&&u["grid-xs-".concat(String(G))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==C&&u["grid-md-".concat(String(C))],!1!==S&&u["grid-lg-".concat(String(S))],!1!==D&&u["grid-xl-".concat(String(D))]);return o.a.createElement(f,Object(i.a)({className:J,ref:t},F))}));var f=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(i,2)),width:"calc(100% + ".concat(m(i),")"),"& > $item":{padding:m(i,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f},594:function(e,t,n){},615:function(e,t,n){"use strict";n.r(t);var a=n(47),i=n(0),r=n.n(i),o=n(258),c=n(254),s=n(274),l=n(611),u=n(54),m=n.n(u);n(594);t.default=function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),u=n[0],d=n[1],f=localStorage.getItem("token");return r.a.createElement("div",{className:"deposit_wrapper"},r.a.createElement("h1",null,"Deposit"),r.a.createElement(o.b,{onSubmit:function(t){return new Promise((function(n){m()({method:"post",headers:{"x-access-token":f},url:"".concat("https://jsramverk-paka17.azurewebsites.net","/wallet/deposit"),data:{amount:t.amount,user:localStorage.getItem("username")}}).then((function(t){d(t.data.response),e.fetchBalance()})).catch((function(e){console.log(e)})),setTimeout(n,3e3)}))},validate:function(e){var t={};return e.amount||(t.amount="Required"),e.amount<=0&&(t.amount="Amount must be bigger than 0"),t},render:function(e){var t=e.handleSubmit,n=(e.values,e.submitting),a=e.pristine,i=e.form;return r.a.createElement("form",{onSubmit:function(e){var n=t(e);return n.then((function(){i.reset()})),n}},r.a.createElement("div",null,r.a.createElement(s.a,{container:!0,alignItems:"flex-start",item:!0,xs:6,spacing:2},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(o.a,{className:"label",name:"amount",fullWidth:!0,required:!0,component:c.TextField,type:"number",label:"Amount",autoComplete:"off"})),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(l.a,{variant:"contained",color:"primary",className:"primary_button",type:"submit",disabled:n||a},"Deposit")))),r.a.createElement("h4",null,u))}}))}}}]);
//# sourceMappingURL=8.e9671fdd.chunk.js.map