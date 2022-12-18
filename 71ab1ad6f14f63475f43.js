"use strict";(self.webpackChunkfunStackLabs_github_io=self.webpackChunkfunStackLabs_github_io||[]).push([[45],{9045:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(8720),c=n(30),l=n(2643),i=(n(4099),n(7617)),o=n(6482),u=n(2530),m=n(5485),s=n(1647);const h=n.p+"a1ca81649fc1e26f26d677872319be8f.png";var b=n(1394),f=n(7873);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const g=function(){var e,t,n=(e=r.useState({frequency:"",r1:"",vR1:"",v:"",C:0,unit:"uF"}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=n[0],g=n[1],E=function(e){return function(t){var n,r=v(v({},p),{},d({},e,t.target.value)),a=(n=r,Object.keys(n).every((function(e){return"C"===e||"unit"===e||!Number.isNaN(n[e])&&Number(n[e])>0}))?function(e){var t=e.v,n=e.vR1,r=e.r1,a=e.frequency,c=t/(n/r),l=2*Math.PI*a,i=1/(c*c-r*r),o=Math.sqrt(i)/l,u="F";return o<1&&(o*=1e3,u="mF"),o<1&&(o*=1e3,u="uF"),o<1&&(o*=1e3,u="nF"),o<1&&(o*=1e3,u="pF"),{C:o,unit:u}}(r):{C:0});g(v(v({},r),a))}};return r.createElement(o.Z,{sx:{bgcolor:"#cccccc",minWidth:"320px"}},r.createElement(a.Z,{sx:{maxWidth:"480px",margin:"auto"}},r.createElement(m.Z,{component:"img",height:"25%",image:h,alt:"schematic"})),r.createElement(u.Z,null,r.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},"Capacitance Calculator"),r.createElement(s.Z,{variant:"body2",color:"text.secondary"},r.createElement(b.Z,{href:"https://youtu.be/Q2e1XRCYLZM"},"Check out this video on how to use this calculator. ",r.createElement("br",null)," "),r.createElement("b",null,"V1")," : Sine wave generator. Exm: 1V peak to peak 50Hz - 10Khz sine wave.",r.createElement("br",null),r.createElement("b",null," R1")," : Current limiting sense resistor. Exm: 150 ohms.",r.createElement("br",null),r.createElement("b",null," C1")," : Capacitor to measure. 22pF - 22uF"),r.createElement(l.Z,{light:!0}),r.createElement(c.ZP,{container:!0,spacing:2,sx:{mt:1}},r.createElement(c.ZP,{item:!0,xs:6},r.createElement(f.a,{id:"r1",label:"R_{1}",unit:"\\Omega",values:p,handleChange:E})),r.createElement(c.ZP,{item:!0,xs:6},r.createElement(f.a,{id:"frequency",label:"Frequency",unit:"Hz",values:p,handleChange:E})),r.createElement(c.ZP,{item:!0,xs:6},r.createElement(f.a,{id:"vR1",label:"V_{R1}",unit:"mV",values:p,handleChange:E})),r.createElement(c.ZP,{item:!0,xs:6},r.createElement(f.a,{id:"v",label:"V",unit:"mV",values:p,handleChange:E})),r.createElement(c.ZP,{item:!0,xs:12},r.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},0===p.L?r.createElement(i.InlineMath,{math:"C=\\: ?"}):r.createElement(i.InlineMath,{math:"C=".concat(p.C.toFixed(2),"\\:").concat(p.unit)}))))))}},7873:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(7294),a=n(4327),c=n(9316),l=(n(4099),n(7617)),i=function(e){var t=e.id,n=e.label,i=e.unit,o=e.values,u=e.handleChange;return r.createElement(a.Z,{key:"ick_".concat(t),id:"ic_".concat(t),type:"text",label:r.createElement(l.InlineMath,{math:n}),variant:"standard",InputProps:{endAdornment:r.createElement(c.Z,{position:"end"},r.createElement(l.InlineMath,{math:i}))},onChange:u(t),value:o[t]})}}}]);