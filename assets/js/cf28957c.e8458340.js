"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,v=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"call-reliability",title:"Improving Call Reliability"},l=void 0,d={unversionedId:"user-guide/call-reliability",id:"user-guide/call-reliability",title:"Improving Call Reliability",description:"This guide covers some basic knowledge about STUN and TURN servers but most importantly why you should have and use both.",source:"@site/docs/user-guide/call-reliability.md",sourceDirName:"user-guide",slug:"/user-guide/call-reliability",permalink:"/handbook/docs/user-guide/call-reliability",draft:!1,editUrl:"https://github.com/react-native-webrtc/handbook/edit/master/docs/user-guide/call-reliability.md",tags:[],version:"current",frontMatter:{id:"call-reliability",title:"Improving Call Reliability"},sidebar:"docs",previous:{title:"Call Guide",permalink:"/handbook/docs/user-guide/call-guide"},next:{title:"Developer Guide",permalink:"/handbook/docs/category/developer-guide"}},c={},u=[{value:"What is a NAT and how do we get around it?",id:"what-is-a-nat-and-how-do-we-get-around-it",level:2},{value:"What is a STUN server and why do i need it?",id:"what-is-a-stun-server-and-why-do-i-need-it",level:2},{value:"What is a TURN server and why do i need it?",id:"what-is-a-turn-server-and-why-do-i-need-it",level:2},{value:"Are there any free STUN/TURN servers?",id:"are-there-any-free-stunturn-servers",level:2},{value:"Can i host my own?",id:"can-i-host-my-own",level:2},{value:"Can i test the STUN/TURN servers?",id:"can-i-test-the-stunturn-servers",level:2}],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide covers some basic knowledge about STUN and TURN servers but most importantly why you should have and use both.",(0,i.kt)("br",{parentName:"p"}),"\n","If you're having issues getting devices connected together then you are definitely in the right place.",(0,i.kt)("br",{parentName:"p"}),"\n","Don't be discouraged, if you are pushing app development to production then you will need to consider reliability.  "),(0,i.kt)("h2",{id:"what-is-a-nat-and-how-do-we-get-around-it"},"What is a NAT and how do we get around it?"),(0,i.kt)("p",null,"NAT (Network Address Translation) is a method of mapping an IP Address space to make sure traffic can flow to its desired destination when a device doesn't have a dedicated public IP Address.  "),(0,i.kt)("p",null,"On a typical network you'll find a NAT device sitting on the edge mapped to a public IP Address waiting to handout local IP Addresses to all of the devices on the same network wanting internet access.  "),(0,i.kt)("p",null,"Simply put, all of the devices behind the NAT will have local IP Addresses rather than accessible public IP Addresses and as such the NAT device has to then route all of the traffic to the correct devices.  "),(0,i.kt)("p",null,"To the internet all devices behind the NAT will just look like one device as they will all be going over a single Public IP Address. There is a good reason for having a NAT, like for example the IPv4 limitations where there can only be around 4.29 billion addresses and as new devices are being created all the time it makes sense to throw them over smaller amounts of Public IP Addresses rather than giving them one each.  "),(0,i.kt)("h2",{id:"what-is-a-stun-server-and-why-do-i-need-it"},"What is a STUN server and why do i need it?"),(0,i.kt)("p",null,"STUN (Session Traversal Utilities for NAT) is a protocol that helps devices behind a NAT connect outside of the local network.",(0,i.kt)("br",{parentName:"p"}),"\n","The STUN server enables devices to find out what their public IP Address is, the type of NAT they are behind and also the accessible public port associated with the device behind the NAT.  "),(0,i.kt)("p",null,"Once that information has been gathered tests can take place to determine if data can be routed to the device directly without restriction. If data can't be routed properly then a relay selection process begins.",(0,i.kt)("br",{parentName:"p"}),"\n","At this point a TURN server will be chosen to relay data for you.",(0,i.kt)("br",{parentName:"p"}),"\n","If you don't use a TURN server then the connection will just outright fail.  "),(0,i.kt)("h2",{id:"what-is-a-turn-server-and-why-do-i-need-it"},"What is a TURN server and why do i need it?"),(0,i.kt)("p",null,"TURN (Traversal Using Relay NAT) is a protocol specifically designed to help relay traffic around restrictive networks.",(0,i.kt)("br",{parentName:"p"}),"\n","When a direct connection can't be established between peers then the only option is to relay data or fail to connect.  "),(0,i.kt)("p",null,"You should always use a STUN server to determine if direct connections can be established.",(0,i.kt)("br",{parentName:"p"}),"\n","Then your TURN server can be used as the fallback option.",(0,i.kt)("br",{parentName:"p"}),"\n","At the end of the day, it is better to have a working call service vs connections failing.  "),(0,i.kt)("h2",{id:"are-there-any-free-stunturn-servers"},"Are there any free STUN/TURN servers?"),(0,i.kt)("p",null,"Free TURN servers do exist but they are either slow, restrictive or unreliable.",(0,i.kt)("br",{parentName:"p"}),"\n","As such it is hard to really advise any for actual production use.  "),(0,i.kt)("p",null,"Google provides STUN servers freely which are generally reliable.",(0,i.kt)("br",{parentName:"p"}),"\n","But don't forget, using just a STUN server won't create a reliable call service.  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stun:stun.l.google.com:19302"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"stun:stun1.l.google.com:19302"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"stun:stun2.l.google.com:19302"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"stun:stun3.l.google.com:19302"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"stun:stun4.l.google.com:19302"),"  "),(0,i.kt)("h2",{id:"can-i-host-my-own"},"Can i host my own?"),(0,i.kt)("p",null,"Here are just a few of the common typical STUN and TURN server softwares.",(0,i.kt)("br",{parentName:"p"}),"\n","Not all TURN server softwares include STUN server functionalities.  "),(0,i.kt)("p",null,"Make sure wherever you decide to host doesn't restrict opening ports and has an open network.",(0,i.kt)("br",{parentName:"p"}),"\n","The whole purpose of having a TURN server is to relay traffic through restrictive networks.  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/coturn/coturn"},"coturn - STUN + TURN")," - Plenty of Features, Recommended",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://eturnal.net/"},"eturnal - STUN + TURN"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://stunprotocol.org/"},"stuntman - STUN"),"  "),(0,i.kt)("h2",{id:"can-i-test-the-stunturn-servers"},"Can i test the STUN/TURN servers?"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/"},"Official WebRTC Trickle Ice Sample")," to test your STUN and TURN server.",(0,i.kt)("br",{parentName:"p"}),"\n","Be advised, make sure your TURN server has authentication in place.",(0,i.kt)("br",{parentName:"p"}),"\n","Otherwise anyone could potentially use your server for relaying without permission."))}h.isMDXComponent=!0}}]);