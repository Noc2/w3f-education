"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[3369],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,y=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"interoperability"},l="Interoperability",c={unversionedId:"Polkadot/Module5/interoperability",id:"Polkadot/Module5/interoperability",isDocsHomePage:!1,title:"Interoperability",description:"XCMP",source:"@site/docs/Polkadot/Module5/interoperability.md",sourceDirName:"Polkadot/Module5",slug:"/Polkadot/Module5/interoperability",permalink:"/w3f-education/docs/Polkadot/Module5/interoperability",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module5/interoperability.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"interoperability"},sidebar:"polkadot",previous:{title:"Decentralization of Network",permalink:"/w3f-education/docs/Polkadot/Module4/decentralization"},next:{title:"Polkadot Bridges",permalink:"/w3f-education/docs/Polkadot/Module5/bridges"}},d=[{value:"XCMP",id:"xcmp",children:[]}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interoperability"},"Interoperability"),(0,r.kt)("h2",{id:"xcmp"},"XCMP"),(0,r.kt)("p",null,"If an account on one parachain sends tokens to another parachain, then XCMP\nensures that this message is delivered correctly. It is sent at a speed which is not dependent on how\nlong it takes to finalise blocks, which means that it needs to deal with the possibility of Polkadot\nforking. Thus we optimistically execute based on the assumption that the parachain blocks are\ncorrect. If one is not, then we need to revert and for that, it is important that parachains only\nreceive messages that were sent by blocks recorded on this new relay chain fork, and not the\nreverted fork. Thus we need that the parachain and XCMP logic ensure that a fork of the relay\nchain defines a consistent history of Polkadot and thus messages only arrive when they have been\nsent previously in the history de\u2000ned by this fork."),(0,r.kt)("p",null,"XCMP is the protocol that parachains use to send messages to each other. It aims to guarantee\nfour things: \u2000rst that messages arrive quickly; second that messages from one parachain arrive to\nanother in order; third that arriving messages were indeed sent in the finalised history of the sending\nchain; and fourth that recipients will receive messages fairly across senders, helping guarantee that\nsenders never wait inde\u2000nitely for their messages to be seen.\nThere are two parts to XCMP. (1) Metadata about outgoing messages for a parachain block\nare included on the relay chain and later this metadata is used to authenticate messages by the\nreceiving parachain. (2) The message bodies corresponding to this metadata need to be actually\ndistributed from the senders to the recipients, together with a proof that the message body is actu-\nally associated with the relevant metadata. The details of distribution are covered as a networking\nprotocol in Cross-chain message; the remainder is covered below.\nThe way relay chain blocks include headers of parachain blocks gives a synchronous notion\nof time for parachain blocks, just by relay chain block numbers. Additionally it allows us to\nauthenticate messages as being sent in the history given by the relay chain i.e. it is impossible\nthat one parachain sends a message, then reorgs 2 so that that message was not sent, but has\nbeen received. This holds even though the system may not have reached \u2000nality over whether the\nmessage was sent, because any relay chain provides a consistent history.\nBecause we require parachains to act on every message eventually, non-delivery of a single\nmessage can potentially stop a parachain from being able to build blocks. Consequently we need\nenough redundancy in our message delivery system. Any validators who validate the PoV block\nshould keep any outgoing messages from that block available for a day or so and all full nodes of\nthe sending parachain also store the outgoing messages until they know they have been acted on."))}u.isMDXComponent=!0}}]);