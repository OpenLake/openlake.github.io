(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8ncr":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=a(n("TSYQ"));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.animate,n=e.className,o=e.layout,a=e.children;return r.default.createElement("div",{className:(0,i.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===o,"vertical-timeline--one-column":"1-column"===o})},a)};l.propTypes={children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]).isRequired,className:o.default.string,animate:o.default.bool,layout:o.default.oneOf(["1-column","2-columns"])},l.defaultProps={animate:!0,className:"",layout:"2-columns"};var c=l;t.default=c},"9GH6":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=(n("Wbzz"),n("Bl7J")),a=n("vrFN"),l=n("UQjd"),c=(n("aw3t"),n("tr08")),u=n("ofer"),s=n("LYUY"),f=Object(s.a)(o.a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code"),p=function(e){var t=e.orgName,n=e.contributor,r=e.content,i=e.date,a=Object(c.a)(),s=a.palette,p=a.shadows;return o.a.createElement(l.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentArrowStyle:{borderRight:"7px solid  "+s.background.paper},contentStyle:{backgroundColor:s.background.paper,boxShadow:p[2]},date:i,iconStyle:{background:s.primary[s.type],color:"#fff",boxShadow:p[2]},icon:o.a.createElement(f,null)},o.a.createElement(u.a,{variant:"h6",className:"vertical-timeline-element-title"},t),o.a.createElement(u.a,{variant:"subtitle1",className:"vertical-timeline-element-subtitle"},n),o.a.createElement(u.a,{variant:"body1"},r))},d=Object(s.a)(o.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),m=n("R/WZ"),b=n("Ji2X"),h=Object(m.a)((function(e){return{timelineCustom:{"&::before":{background:e.palette.text.primary}}}})),y="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";t.default=function(){var e=Object(c.a)(),t=e.palette,n=e.shadows,r=h();return o.a.createElement(i.a,null,o.a.createElement(a.a,{title:"Community"}),o.a.createElement(b.a,null,o.a.createElement(u.a,{variant:"h4",component:"h2",style:{margin:30}},"Community"),o.a.createElement(l.VerticalTimeline,{className:r.timelineCustom},o.a.createElement(p,{orgName:"DBpedia",contributor:"Anand PanchBhai",content:y,date:"2019"}),o.a.createElement(p,{orgName:"DBpedia",contributor:"Anand PanchBhai",content:y,date:"2019"}),o.a.createElement(p,{orgName:"DBpedia",contributor:"Anand PanchBhai",content:y,date:"2019"}),o.a.createElement(l.VerticalTimelineElement,{iconStyle:{background:t.primary[t.type],color:"#fff",boxShadow:n[2]},icon:o.a.createElement(d,null)}))))}},IdOR:function(e,t,n){"use strict";var r=n("J4zp");n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=c(n("17x9")),a=c(n("TSYQ")),l=c(n("aqT/"));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){var t=e.children,n=e.className,i=e.contentArrowStyle,c=e.contentStyle,u=e.date,f=e.dateClassName,p=e.icon,d=e.iconClassName,m=e.iconOnClick,b=e.onTimelineElementClick,h=e.iconStyle,y=e.id,v=e.position,g=e.style,O=e.textClassName,k=e.visibilitySensorProps,w=(0,o.useState)(!1),x=r(w,2),C=x[0],T=x[1];return o.default.createElement("div",{id:y,className:(0,a.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:g},o.default.createElement(l.default,s({},k,{onChange:function(e){var t=k.onChange;"function"==typeof t&&t(e),e&&T(!0)}}),o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:h,onClick:m,className:(0,a.default)(d,"vertical-timeline-element-icon",{"bounce-in":C,"is-hidden":!C})},p),o.default.createElement("div",{style:c,onClick:b,className:(0,a.default)(O,"vertical-timeline-element-content",{"bounce-in":C,"is-hidden":!C})},o.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),t,o.default.createElement("span",{className:(0,a.default)(f,"vertical-timeline-element-date")},u)))))};f.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visibilitySensorProps:i.default.shape({onChange:i.default.func,partialVisibility:i.default.bool,offset:i.default.shape({})})},f.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",position:"",textClassName:"",visibilitySensorProps:{partialVisibility:!0,offset:{bottom:40}}};var p=f;t.default=p},J4zp:function(e,t,n){var r=n("wTVA"),o=n("m0LI"),i=n("ZhPi"),a=n("wkBT");e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},Ji2X:function(e,t,n){"use strict";n("0mN4"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP");var r=n("wx14"),o=n("Ff2n"),i=n("rePB"),a=n("q1tI"),l=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("NqtD"),s=a.forwardRef((function(e,t){var n=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,f=e.disableGutters,p=void 0!==f&&f,d=e.fixed,m=void 0!==d&&d,b=e.maxWidth,h=void 0===b?"lg":b,y=Object(o.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(s,Object(r.a)({className:Object(l.a)(n.root,i,m&&n.fixed,p&&n.disableGutters,!1!==h&&n["maxWidth".concat(Object(u.a)(String(h)))]),ref:t},y))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UQjd:function(e,t,n){"use strict";e.exports={VerticalTimeline:n("8ncr").default,VerticalTimelineElement:n("IdOR").default}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},"aqT/":function(e,t,n){var r;n("f3/d"),n("/SS/"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var r=e.direction,o=e.value;switch(r){case"top":return n.top+o<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+o<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-o>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-o>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(1),o=n.n(r),i=n(2),a=n.n(i),l=n(0),c=n.n(l),u=n(3),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=d(t).call(this,e),n=!o||"object"!==f(o)&&"function"!=typeof o?m(r):o,h(m(n),"getContainer",(function(){return n.props.containment||window})),h(m(n),"addEventListener",(function(e,t,r,o){var i;n.debounceCheck||(n.debounceCheck={});var a=function(){i=null,n.check()},l={target:e,fn:o>-1?function(){i||(i=setTimeout(a,o||0))}:function(){clearTimeout(i),i=setTimeout(a,r||0)},getLastTimeout:function(){return i}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),h(m(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),h(m(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),h(m(n),"check",(function(){var e,t,r=n.node;if(!r)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var o=n.props.containment.getBoundingClientRect();t={top:o.top,left:o.left,bottom:o.bottom,right:o.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=n.props.offset||{};"object"===f(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&a.top&&a.left&&a.bottom&&a.right;if(l&&n.props.partialVisibility){var u=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(u=a[n.props.partialVisibility]),c=n.props.minTopValue?u&&e.top<=t.bottom-n.props.minTopValue:u}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),c=s()(i,e,t));var p=n.state;return n.state.isVisible!==c&&(p={isVisible:c,visibilityRect:a},n.setState(p),n.props.onChange&&n.props.onChange(c)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):o.a.Children.only(this.props.children)}}])&&p(n.prototype,r),i&&p(n,i),t}(o.a.Component);h(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:o.a.createElement("span",null)}),h(y,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!=typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var r=n(6);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=r(n("q1tI"),n("i8i4"))},aw3t:function(e,t,n){},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-community-js-804810c43f79dde1dddf.js.map