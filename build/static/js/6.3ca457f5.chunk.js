(this["webpackJsonpcrypto-trading"]=this["webpackJsonpcrypto-trading"]||[]).push([[6],{274:function(e,t,n){"use strict";var a=n(6),i=n(1),r=n(0),c=n.n(r),o=(n(11),n(45)),s=n(53),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=c.a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,p=e.container,x=void 0!==p&&p,g=e.direction,v=void 0===g?"row":g,h=e.item,w=void 0!==h&&h,b=e.justify,y=void 0===b?"flex-start":b,j=e.lg,S=void 0!==j&&j,E=e.md,C=void 0!==E&&E,W=e.sm,k=void 0!==W&&W,z=e.spacing,I=void 0===z?0:z,M=e.wrap,O=void 0===M?"wrap":M,N=e.xl,q=void 0!==N&&N,B=e.xs,F=void 0!==B&&B,G=e.zeroMinWidth,_=void 0!==G&&G,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(d.root,u,x&&[d.container,0!==I&&d["spacing-xs-".concat(String(I))]],w&&d.item,_&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==O&&d["wrap-xs-".concat(String(O))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==C&&d["grid-md-".concat(String(C))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==q&&d["grid-xl-".concat(String(q))]);return c.a.createElement(f,Object(i.a)({className:R,ref:t},D))}));var f=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(i,2)),width:"calc(100% + ".concat(u(i),")"),"& > $item":{padding:u(i,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=f},280:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,a(n(55)).default)(i.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=r},404:function(e,t,n){},614:function(e,t,n){"use strict";n.r(t);var a=n(74),i=n.n(a),r=n(86),c=n(0),o=n.n(c),s=n(258),l=n(254),d=n(274),u=n(611),m=n(280),f=n.n(m),p=n(54),x=n.n(p),g=(n(404),n(59));t.default=function(e){var t=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x()({method:"post",url:"".concat("https://jsramverk-paka17.azurewebsites.net","/account/signin"),data:n}).then((function(t){g.a.authenticate(t.data.accessToken,t.data.username),e.history.push("/dashboard/trade")})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement(f.a,{fontSize:"large",className:"arrow_back",onClick:function(){e.history.push("/")}})),o.a.createElement("h1",null,"Sign In"),o.a.createElement(s.b,{onSubmit:t,validate:function(e){var t={};return e.email||(t.email="Required"),e.password||(t.password="Required"),t}},(function(e){var t=e.handleSubmit;e.values,e.pristine;return o.a.createElement("form",{onSubmit:t,noValidate:!0},o.a.createElement("div",null,o.a.createElement(d.a,{container:!0,alignItems:"flex-start",item:!0,xs:12,spacing:2},o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(s.a,{className:"label",name:"email",fullWidth:!0,required:!0,component:l.TextField,type:"email",label:"Email"})),o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(s.a,{className:"label",fullWidth:!0,required:!0,name:"password",component:l.TextField,type:"password",label:"Password",autoComplete:"false"})),o.a.createElement(d.a,{item:!0,xs:6},o.a.createElement(u.a,{variant:"contained",color:"primary",className:"primary_button",type:"submit"},"Sign In")))))})))}}}]);
//# sourceMappingURL=6.3ca457f5.chunk.js.map