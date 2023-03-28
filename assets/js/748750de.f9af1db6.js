"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4278],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"ownership",title:"Rust's Ownership Model",sidebar_label:"The Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time."},p=void 0,l={unversionedId:"Rust/section3/ownership",id:"Rust/section3/ownership",isDocsHomePage:!1,title:"Rust's Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time.",source:"@site/docs/Rust/section3/ownership.md",sourceDirName:"Rust/section3",slug:"/Rust/section3/ownership",permalink:"/w3f-education/docs/Rust/section3/ownership",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section3/ownership.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1679628587,formattedLastUpdatedAt:"3/24/2023",frontMatter:{id:"ownership",title:"Rust's Ownership Model",sidebar_label:"The Ownership Model",description:"Learn how the ownership model works in Rust, and why it allows for Rust to be safe at compile time."},sidebar:"rust",previous:{title:"Intro to Intermediate Rust - Ownership, Borrowing, & Slices",permalink:"/w3f-education/docs/Rust/section3/section-3-intro"},next:{title:"Borrowing & References",permalink:"/w3f-education/docs/Rust/section3/borrowing"}},c=[{value:"Ownership Rules",id:"ownership-rules",children:[]},{value:"Variable Scope",id:"variable-scope",children:[]},{value:"Try it out!",id:"try-it-out",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],h={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As mentioned in the intro, a crucial part of Rust's safety is its memory management.  ",(0,o.kt)("strong",{parentName:"p"},"Ownership")," in Rust is the concept that defines a set of rules for how to handle memory in a Rust program.  It does not affect performance - as ownership checks happen at compile time.  "),(0,o.kt)("p",null,"While these rules may seem prohibitive, they sometimes ensure entirely memory-safe code."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you aren't familiar with the stack and heap, make sure you ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap"},"read this first"),", as it will provide context for why ownership is essential when dealing with collections."))),(0,o.kt)("h2",{id:"ownership-rules"},"Ownership Rules"),(0,o.kt)("p",null,"As stated in the Rust book, ownership has three primary concepts/rules: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every single value (statement) has an owner"),(0,o.kt)("li",{parentName:"ul"},"There can only be one owner at a time"),(0,o.kt)("li",{parentName:"ul"},"Ownership is heavily dependent on the scope.  When a statement goes out of scope, the ownership is dropped.")),(0,o.kt)("p",null,"These rules ensure that the ownership of a particular variable in memory is managed correctly and appropriately. Simply put - the scope defines the ownership of a particular variable, as you will see."),(0,o.kt)("h2",{id:"variable-scope"},"Variable Scope"),(0,o.kt)("p",null,"Let's run through an example to demonstrate the importance of scope and how it relates to ownership: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// You can define a new scope within main using this syntax.\n// Everything within this scope is valid until the closing curly bracket.\n// For example, you cannot use `x` outside of this scope - as the variable is dropped from memory\n\n{\n    // Declare an integer x\n    let x = 10;\n    // We can do whatever we want in the context of this scope,\n    // but after it ends, we cannot use x.\n}\n// We cannot use `x` here!\n")),(0,o.kt)("p",null,"In terms of ownership, the ",(0,o.kt)("em",{parentName:"p"},"variable ",(0,o.kt)("inlineCode",{parentName:"em"},"x"))," is owned by this scope, defined by curly brackets, until the end of the scope.  From here, the Rust compiler handles the de-allocation of memory in a safe manner."),(0,o.kt)("p",null,"Ownership gets more complex when dealing with values not defined at compile-time.  For more information on the complexities of ownership, read the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"},"Rust book's explanation"),". "),(0,o.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,o.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A+++let+y+%3D+11%3B%0A++++%2F%2F+You+can+define+a+new+scope+within+main+using+this+syntax.%0A++++%2F%2F+Everything+within+this+scope+is+valid+until+the+closing+curly+bracket.%0A++++%2F%2F+For+example%2C+you+cannot+use+%60x%60+outside+of+this+scope+-+as+the+variable+is+dropped+from+memory%0A++++%7B%0A++++++++%2F%2F+Declare+an+integer+x%0A++++++++let+x+%3D+10%3B%0A++++++++%2F%2F+We+can+do+whatever+we+want+in+the+context+of+this+scope%2C%0A++++++++%2F%2F+but+after+it+ends%2C+we+cannot+use+x.%0A++++++++println%21%28%22x%3A+%7Bx%7D%2C+y%3A+%7By%7D%22%29%3B%0A++++%7D%0A++++%2F%2F+We+cannot+use+%60x%60+here%21+It+was+owned+by+the+inner+scope+defined+previously.%0A++++%2F%2F+println%21%28%22%7Bx%7D%22%29%3B+-+this+wouldn%27t+work.%0A++++%2F%2F+Printing+%60y%60+is+perfectly+fine%2C+as+it+it%27s+ownership+and+scope+is+above+that%0A++++%2F%2F+of+x%27s.%0A++++println%21%28%22only+y%3A+%7By%7D%22%29%3B%0A%7D%0A"}),(0,o.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,o.kt)("p",null,"We define two variables here: ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),".  Both are fixed size, and known at compile time.  The difference between the two is that ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," is owned by the scope of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function, while ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is owned by another inner scope.  The code illustrates that ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is dropped after the inner scope ends, while ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," can still be used until the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function's scope."))}u.isMDXComponent=!0}}]);