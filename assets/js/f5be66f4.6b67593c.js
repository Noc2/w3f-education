"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9003],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={id:"slices",title:"Slices in Rust",sidebar_label:"Slices",description:"Learn what slices are, how they work, and why they are useful."},c=void 0,l={unversionedId:"Rust/section3/slices",id:"Rust/section3/slices",isDocsHomePage:!1,title:"Slices in Rust",description:"Learn what slices are, how they work, and why they are useful.",source:"@site/docs/Rust/section3/slices.md",sourceDirName:"Rust/section3",slug:"/Rust/section3/slices",permalink:"/w3f-education/docs/Rust/section3/slices",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section3/slices.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1679628587,formattedLastUpdatedAt:"3/24/2023",frontMatter:{id:"slices",title:"Slices in Rust",sidebar_label:"Slices",description:"Learn what slices are, how they work, and why they are useful."},sidebar:"rust",previous:{title:"Borrowing & References",permalink:"/w3f-education/docs/Rust/section3/borrowing"},next:{title:"Intro to Intermediate Rust - Enums & Matching Patterns",permalink:"/w3f-education/docs/Rust/section4/section-4-intro"}},u=[{value:"String slices",id:"string-slices",children:[]},{value:"Modifying a slice in-place",id:"modifying-a-slice-in-place",children:[]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Slices are another type of reference.  As the name implies, they ",(0,a.kt)("em",{parentName:"p"},"refer")," to a ",(0,a.kt)("em",{parentName:"p"},"slice")," of information, in bytes, to an existing variable in memory.  "),(0,a.kt)("p",null,"Instead of handling an entire collection, which could be costly performance-wise, we can use slices to handle a ",(0,a.kt)("em",{parentName:"p"},"reference")," to those items.  These slices can be modified in place or returned as immutable as part of a function."),(0,a.kt)("h2",{id:"string-slices"},"String slices"),(0,a.kt)("p",null,"Working with string and byte slices is one of the most common tasks when working with Rust, especially at a lower level."),(0,a.kt)("p",null,"A String slice is simply a reference to a part, or slice, of a String:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nlet name = String::from("Bader");\n// We can use the `..` operator to specify a range for the slice to cover\n// In this case, we want the \'Bad\' from Bader\nlet bad_slice = &name[0..3];\nprintln!("{bad_slice}"); // Prints "Bad"\n\n')),(0,a.kt)("p",null,"The double period syntax (",(0,a.kt)("inlineCode",{parentName:"p"},".."),") signifies a range.  It creates a variable that represents that specific String in memory from those specified positions (",(0,a.kt)("inlineCode",{parentName:"p"},"[starting_index..ending_index]"),")."),(0,a.kt)("h2",{id:"modifying-a-slice-in-place"},"Modifying a slice in-place"),(0,a.kt)("p",null,"It's possible to modify a mutable slice.  This is also called changing it 'in place', as you are manipulating the data within that specific starting and ending index. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn main() {\n    let mut name = String::from("Bader");\n    // Pass in a mutable reference, where this function will\n    // Borrow the value, clear it, then return ownership\n    // Back to the main function\'s scope.\n    modify_in_place(&mut name);\n    println!("{name}"); // Prints nothing! the String is empty.\n}\n\n\nfn modify_in_place(s: &mut String) {\n    s.clear();\n}\n\n')),(0,a.kt)("p",null,"We can define simply a slice versus the entire String.  This way, we can only act on the part of the data given."),(0,a.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,a.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+name+%3D+String%3A%3Afrom%28%22Bader%22%29%3B%0A++++%2F%2F+We+can+use+the+%60..%60+operator+to+specify+a+range+for+the+slice+to+cover%0A++++%2F%2F+In+this+case%2C+we+just+want+the+%27Bad%27+from+Bader%0A++++let+bad_slice+%3D+%26name%5B0..3%5D%3B%0A++++println%21%28%22%7Bbad_slice%7D%22%29%3B+%2F%2F+Prints+%22Bad%22%0A%7D%0A%0A%0A%2F%2F+A+function+that+does+the+same+as+above%2C+only+specifies+a+the+return+type+as+%0A%2F%2F+a+string+slice%0Afn+take_slice%28s%3A+%26String%29+-%3E+%26str+%7B%0A++++%26s%5B0..3%5D%0A%7D%0A%0A"}),(0,a.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,a.kt)("p",null,"The code above illustrates how to construct a basic string slice as well as return it in a function.  To make it interesting, try to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," as a mutable reference - does it work?  Why and why not?"))}d.isMDXComponent=!0}}]);