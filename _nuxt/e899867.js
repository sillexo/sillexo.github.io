(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,o){"use strict";o.r(e);o(283);var r={data:function(){return{pages:[{id:1,link:"/",title:"Обо мне",active:!0,icon:"#account"},{id:2,link:"/services",title:"Услуги",active:!0,icon:"#service"},{id:3,link:"/portfolio",title:"Портфолио",active:!0,icon:"#case"}],contacts:[{id:1,link:"https://github.com/sillexo",title:"Мой Github",active:!0,icon:"#github"},{id:2,link:"http://vk.com/baluev_r",title:"Написать мне в Вконтакте",active:!0,icon:"#vk"},{id:3,link:"https://t.me/sillexo",title:"Написать мне в Telegram",active:!0,icon:"#telegram"},{id:4,link:"viber://chat?number=79638760737",title:"Написать мне в Viber",active:!0,icon:"#viber"},{id:5,link:"mailto:sillexlab@gmail.com",title:"Написать мне на Email",active:!0,icon:"#mail"}],isShowedMobileMenu:!1}},mounted:function(){},methods:{showMobileMenu:function(){this.isShowedMobileMenu=!0},hideMobileMenu:function(){this.isShowedMobileMenu=!1},redirectToLink:function(link){window.location.href=link}}},n=o(33),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"z-20 flex-shrink-0 overflow-hidden md:static md:h-full focus:outline-none md:flex md:order-none order-1 fixed bottom-0 w-full md:w-auto",attrs:{tabindex:"-1"}},[e("div",{staticClass:"flex md:flex-col flex-row flex-shrink-0 h-full px-2 py-2 md:py-4 bg-gray-800 text-gray-200"},[e("div",{staticClass:"flex-col items-center flex-1 space-y-4 md:flex hidden"},[t._l(t.pages,(function(o){return[o.active?e("NuxtLink",{key:o.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:o.link,title:o.title}},[e("svg",{staticClass:"fill-current w-8 h-8"},[e("use",{attrs:{"xlink:href":o.icon}})])]):t._e()]}))],2),t._v(" "),e("div",{staticClass:"flex-1 flex md:hidden"},[t.isShowedMobileMenu?t._e():e("a",{staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300 z-10",attrs:{href:"javascript:;"},on:{click:t.showMobileMenu}},[e("svg",{staticClass:"fill-current w-8 h-8"},[e("use",{attrs:{"xlink:href":"#burger"}})])]),t._v(" "),t.isShowedMobileMenu?e("a",{staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300 z-10",attrs:{href:"javascript:;"},on:{click:t.hideMobileMenu}},[e("svg",{staticClass:"fill-current w-8 h-8"},[e("use",{attrs:{"xlink:href":"#close"}})])]):t._e(),t._v(" "),e("div",{staticClass:"bg-gray-800 fixed flex-1 flex-col h-full items-center left-0 space-y-4 text-gray-200 top-0 z-0 w-4/5 p-3",class:{"transform -translate-x-full":!t.isShowedMobileMenu},on:{click:t.hideMobileMenu}},[t._l(t.pages,(function(o){return[o.active?e("NuxtLink",{key:o.id,staticClass:"flex items-center p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:o.link,title:o.title}},[e("svg",{staticClass:"fill-current w-8 h-8 mr-2"},[e("use",{attrs:{"xlink:href":o.icon}})]),t._v("\n            "+t._s(o.title)+"\n          ")]):t._e(),t._v(" "),"/"==o.link?[o.active?e("NuxtLink",{key:o.id+10,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/skills"}},[t._v("\n              Мои знания\n            ")]):t._e(),t._v(" "),o.active?e("NuxtLink",{key:o.id+20,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/stack"}},[t._v("\n              Используемый стек\n            ")]):t._e(),t._v(" "),o.active?e("NuxtLink",{key:o.id+30,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/services"}},[t._v("\n              Предоставляемый сервис\n            ")]):t._e()]:t._e()]}))],2)]),t._v(" "),e("div",{staticClass:"flex flex-row md:flex-col items-center justify-center flex-shrink-0 z-10"},[t._l(t.contacts,(function(o){return[o.active&&5!==o.id?e("a",{key:o.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{target:"_blank",href:o.link,title:o.title}},[e("svg",{staticClass:"fill-current w-7 h-7"},[e("use",{attrs:{"xlink:href":o.icon}})])]):o.active&&5===o.id?e("a",{key:o.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{href:"javascript:;",title:o.title},on:{click:function(e){return t.redirectToLink(o.link)}}},[e("svg",{staticClass:"fill-current w-7 h-7"},[e("use",{attrs:{"xlink:href":o.icon}})])]):t._e()]}))],2)]),t._v(" "),e("svg",{staticClass:"hidden"},[e("symbol",{attrs:{id:"account",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}})]),t._v(" "),e("symbol",{attrs:{id:"case",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"}})]),t._v(" "),e("symbol",{attrs:{id:"service",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"}})]),t._v(" "),e("symbol",{attrs:{id:"contacts",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"}})]),t._v(" "),e("symbol",{attrs:{id:"github",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})]),t._v(" "),e("symbol",{attrs:{id:"vk",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 11 9.89 12.8 10.38 12.8C10.57 12.8 10.65 12.71 10.65 12.25V10.1C10.6 9.12 10.07 9.03 10.07 8.68C10.07 8.5 10.21 8.34 10.44 8.34H12.73C13.04 8.34 13.15 8.5 13.15 8.88V11.77C13.15 12.08 13.28 12.19 13.38 12.19C13.56 12.19 13.72 12.08 14.05 11.74C15.1 10.57 15.85 8.76 15.85 8.76C15.95 8.55 16.11 8.35 16.5 8.35H17.93C18.37 8.35 18.47 8.58 18.37 8.89C18.19 9.74 16.41 12.25 16.43 12.25C16.27 12.5 16.21 12.61 16.43 12.9C16.58 13.11 17.09 13.55 17.43 13.94C18.05 14.65 18.53 15.24 18.66 15.65C18.77 16.06 18.57 16.27 18.15 16.27Z"}})]),t._v(" "),e("symbol",{attrs:{id:"telegram",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}})]),t._v(" "),e("symbol",{attrs:{id:"viber",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"}})]),t._v(" "),e("symbol",{attrs:{id:"mail",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]),t._v(" "),e("symbol",{attrs:{id:"burger",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}})]),t._v(" "),e("symbol",{attrs:{id:"close",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"}})])])])}),[],!1,null,null,null);e.default=component.exports},142:function(t,e,o){"use strict";var r=o(1),n=o(210);o(305);r.a.use(n.a)},196:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("395ea510",content,!0,{sourceMap:!1})},213:function(t,e,o){"use strict";var r={components:{Sidebar:o(137).default},data:function(){return{isSidebarOpen:!1}},mounted:function(){},methods:{}},n=(o(286),o(33)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex h-screen antialiased text-gray-900 bg-gray-100 svg-background md:flex-row flex-col"},[t.isSidebarOpen?e("div",{staticClass:"fixed inset-0 z-10 bg-gray-800 lg:hidden",staticStyle:{opacity:"0.5"},attrs:{"aria-hidden":"true"},on:{click:function(e){t.isSidebarOpen=!1}}}):t._e(),t._v(" "),e("sidebar"),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Sidebar:o(137).default})},215:function(t,e,o){o(216),t.exports=o(217)},281:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("758cc9b5",content,!0,{sourceMap:!1})},282:function(t,e,o){var r=o(88)((function(i){return i[1]}));r.push([t.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{-webkit-text-size-adjust:100%;line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Helvetica,Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\";margin:0}hr{color:inherit;height:0}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{border:0 solid;box-sizing:border-box}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a3a3a3;opacity:1}input::placeholder,textarea::placeholder{color:#a3a3a3;opacity:1}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-opacity:1;border-color:#e5e5e5;border-color:rgba(229,229,229,var(--tw-border-opacity))}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.top-0{top:0}.bottom-0{bottom:0}.left-0{left:0}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.order-1{order:1}.m-6{margin:1.5rem}.mx-0{margin-left:0;margin-right:0}.my-4{margin-bottom:1rem;margin-top:1rem}.my-8{margin-bottom:2rem;margin-top:2rem}.mt-2{margin-top:.5rem}.mt-5{margin-top:1.25rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-16{margin-top:4rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-10{margin-bottom:2.5rem}.mb-16{margin-bottom:4rem}.ml-0{margin-left:0}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-10{margin-left:2.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.h-7{height:1.75rem}.h-8{height:2rem}.h-16{height:4rem}.h-32{height:8rem}.h-36{height:9rem}.h-44{height:11rem}.h-full{height:100%}.h-screen{height:100vh}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.w-7{width:1.75rem}.w-8{width:2rem}.w-16{width:4rem}.w-32{width:8rem}.w-64{width:16rem}.w-1\\/5{width:20%}.w-4\\/5{width:80%}.w-full{width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x:-100%}@keyframes spin{to{transform:rotate(1turn)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.25rem;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:.25rem;margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:.5rem;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:1rem;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:.625rem;margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.border-l-4{border-left-width:4px}.border-gray-300{--tw-border-opacity:1;border-color:#d4d4d4;border-color:rgba(212,212,212,var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:#f43f5e;border-color:rgba(244,63,94,var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity:1;border-color:#3b82f6;border-color:rgba(59,130,246,var(--tw-border-opacity))}.focus\\:border-transparent:focus{border-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:#fafafa;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:#262626;background-color:rgba(38,38,38,var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:#dbeafe;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:#eff6ff;background-color:rgba(239,246,255,var(--tw-bg-opacity))}.bg-contain{background-size:contain}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.fill-current{fill:currentColor}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.pt-2{padding-top:.5rem}.pt-3{padding-top:.75rem}.text-center{text-align:center}.text-right{text-align:right}.font-serif{font-family:ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-6xl{font-size:3.75rem;line-height:1}.text-9xl{font-size:8rem;line-height:1}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.italic{font-style:italic}.text-gray-200{--tw-text-opacity:1;color:#e5e5e5;color:rgba(229,229,229,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:#737373;color:rgba(115,115,115,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:#525252;color:rgba(82,82,82,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:#404040;color:rgba(64,64,64,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity))}.text-red-400{--tw-text-opacity:1;color:#fb7185;color:rgba(251,113,133,var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:#f43f5e;color:rgba(244,63,94,var(--tw-text-opacity))}.text-red-700{--tw-text-opacity:1;color:#be123c;color:rgba(190,18,60,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:#059669;color:rgba(5,150,105,var(--tw-text-opacity))}.hover\\:text-blue-300:hover{--tw-text-opacity:1;color:#93c5fd;color:rgba(147,197,253,var(--tw-text-opacity))}.hover\\:text-blue-500:hover{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,:after,:before{--tw-shadow:0 0 transparent}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}*,:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-blue-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(191,219,254,var(--tw-ring-opacity))}.filter{--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);filter:/*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/ /*!*/;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.content p{margin:0 0 10px}.content b,.content strong{color:inherit;font-family:inherit;font-weight:700;font-weight:500;line-height:1.1}.content ol,.content ul{line-height:1.75rem;margin-bottom:10px;margin-left:20px;margin-top:0}.content ol ol,.content ol ul,.content ul ol,.content ul ul{margin-bottom:0}.content ul{list-style:disc}.content hr{border:0;border-top:1px solid #eee;margin-bottom:20px;margin-top:20px}.content .h3,.content .h4,.content .h5,.content .h6,.content h3,.content h4,.content h5,.content h6{color:inherit;font-family:inherit;font-weight:500;line-height:1.1}.content .h3,.content h3{margin-bottom:10px;margin-top:20px}.content .h4,.content h4{margin-bottom:10px;margin-top:16px}.content .h5,.content .h6,.content h5,.content h6{margin-bottom:10px;margin-top:10px}.content .h3,.content h3{font-size:20px}.content .h4,.content h4{font-size:16px}.content .h5,.content h5{font-size:14px}.content .h6,.content h6{font-size:12px}.content table{background-color:transparent}.content caption{color:#777;padding-bottom:8px;padding-top:8px;text-align:left}.content th{text-align:left}.content .table{margin-bottom:20px;max-width:100%;width:100%}.content .table>tbody>tr>td,.content .table>tbody>tr>th,.content .table>tfoot>tr>td,.content .table>tfoot>tr>th,.content .table>thead>tr>td,.content .table>thead>tr>th{border-top:1px solid #ddd;line-height:1.42857143;padding:8px;vertical-align:top}.content .table>thead>tr>th{border-bottom:2px solid #ddd;vertical-align:bottom}.content .table>caption+thead>tr:first-child>td,.content .table>caption+thead>tr:first-child>th,.content .table>colgroup+thead>tr:first-child>td,.content .table>colgroup+thead>tr:first-child>th,.content .table>thead:first-child>tr:first-child>td,.content .table>thead:first-child>tr:first-child>th{border-top:0}.content .table>tbody+tbody{border-top:2px solid #ddd}.content .table .table{background-color:#fff}.content .table-condensed>tbody>tr>td,.content .table-condensed>tbody>tr>th,.content .table-condensed>tfoot>tr>td,.content .table-condensed>tfoot>tr>th,.content .table-condensed>thead>tr>td,.content .table-condensed>thead>tr>th{padding:5px}.content .table-bordered,.content .table-bordered>tbody>tr>td,.content .table-bordered>tbody>tr>th,.content .table-bordered>tfoot>tr>td,.content .table-bordered>tfoot>tr>th,.content .table-bordered>thead>tr>td,.content .table-bordered>thead>tr>th{border:1px solid #ddd}.content .table-bordered>thead>tr>td,.content .table-bordered>thead>tr>th{border-bottom-width:2px}.content .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.content .table-hover>tbody>tr:hover{background-color:#f5f5f5}.content table col[class*=col-]{display:table-column;float:none;position:static}.content table td[class*=col-],.content table th[class*=col-]{display:table-cell;float:none;position:static}.content .table>tbody>tr.active>td,.content .table>tbody>tr.active>th,.content .table>tbody>tr>td.active,.content .table>tbody>tr>th.active,.content .table>tfoot>tr.active>td,.content .table>tfoot>tr.active>th,.content .table>tfoot>tr>td.active,.content .table>tfoot>tr>th.active,.content .table>thead>tr.active>td,.content .table>thead>tr.active>th,.content .table>thead>tr>td.active,.content .table>thead>tr>th.active{background-color:#f5f5f5}.content .table-hover>tbody>tr.active:hover>td,.content .table-hover>tbody>tr.active:hover>th,.content .table-hover>tbody>tr:hover>.active,.content .table-hover>tbody>tr>td.active:hover,.content .table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.content .table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.content .table-responsive{-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd;margin-bottom:15px;overflow-y:hidden;width:100%}.content .table-responsive>.table{margin-bottom:0}.content .table-responsive>.table>tbody>tr>td,.content .table-responsive>.table>tbody>tr>th,.content .table-responsive>.table>tfoot>tr>td,.content .table-responsive>.table>tfoot>tr>th,.content .table-responsive>.table>thead>tr>td,.content .table-responsive>.table>thead>tr>th{white-space:nowrap}.content .table-responsive>.table-bordered{border:0}.content .table-responsive>.table-bordered>tbody>tr>td:first-child,.content .table-responsive>.table-bordered>tbody>tr>th:first-child,.content .table-responsive>.table-bordered>tfoot>tr>td:first-child,.content .table-responsive>.table-bordered>tfoot>tr>th:first-child,.content .table-responsive>.table-bordered>thead>tr>td:first-child,.content .table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.content .table-responsive>.table-bordered>tbody>tr>td:last-child,.content .table-responsive>.table-bordered>tbody>tr>th:last-child,.content .table-responsive>.table-bordered>tfoot>tr>td:last-child,.content .table-responsive>.table-bordered>tfoot>tr>th:last-child,.content .table-responsive>.table-bordered>thead>tr>td:last-child,.content .table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.content .table-responsive>.table-bordered>tbody>tr:last-child>td,.content .table-responsive>.table-bordered>tbody>tr:last-child>th,.content .table-responsive>.table-bordered>tfoot>tr:last-child>td,.content .table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}.content fieldset{border:0;margin:0;min-width:0;padding:0}.content legend{border:0;border-bottom:1px solid #e5e5e5;color:#333;display:block;font-size:21px;line-height:inherit;margin-bottom:20px;padding:0;width:100%}.content label{display:inline-block;font-weight:700;margin-bottom:5px;max-width:100%}.svg-background{background-attachment:fixed;background-color:#aaa;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(161 .5 .5)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23aaa'/%3E%3Cstop offset='1' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(218 .5 .5)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23eee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eee'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='0' x2='2' y1='0' y2='2' gradientTransform='rotate(360 .5 .5)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23eee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M0 0h2v1H0z'/%3E%3Cpath fill='url(%23b)' d='M0 1V0h2z'/%3E%3Cpath fill='url(%23c)' d='M2 1V0H0z'/%3E%3C/svg%3E\");background-size:cover}@media (min-width:768px){.md\\:static{position:static}.md\\:order-none{order:0}.md\\:mx-14{margin-left:3.5rem;margin-right:3.5rem}.md\\:mr-10{margin-right:2.5rem}.md\\:mb-0{margin-bottom:0}.md\\:ml-3{margin-left:.75rem}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-48{height:12rem}.md\\:h-60{height:15rem}.md\\:h-full{height:100%}.md\\:w-auto{width:auto}.md\\:w-1\\/3{width:33.333333%}.md\\:w-8\\/12{width:66.666667%}.md\\:flex-row{flex-direction:row}.md\\:flex-col{flex-direction:column}.md\\:items-center{align-items:center}.md\\:p-4{padding:1rem}.md\\:p-10{padding:2.5rem}.md\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.md\\:py-4{padding-bottom:1rem;padding-top:1rem}.md\\:py-5{padding-bottom:1.25rem;padding-top:1.25rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width:1024px){.lg\\:relative{position:relative}.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:w-1\\/2{width:50%}.lg\\:transform-none{transform:none}.lg\\:p-3{padding:.75rem}.lg\\:px-20{padding-left:5rem;padding-right:5rem}.lg\\:py-10{padding-bottom:2.5rem;padding-top:2.5rem}}",""]),r.locals={},t.exports=r},286:function(t,e,o){"use strict";o(196)},287:function(t,e,o){var r=o(88)((function(i){return i[1]}));r.push([t.i,'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px}*,:after,:before{box-sizing:border-box;margin:0}',""]),r.locals={},t.exports=r},44:function(t,e,o){"use strict";var r=o(33),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("main",{staticClass:"flex-1"},[e("div",{staticClass:"h-full min-h-screen overflow-x-hidden overflow-y-auto md:px-5 md:py-5 lg:py-10 lg:px-20 p-5"},[e("div",{staticClass:"flex justify-center bg-white md:p-10 p-5 shadow min-h-full mb-16 md:mb-0"},[e("div",{staticClass:"flex flex-col items-center justify-center"},[e("h1",{staticClass:"font-serif text-9xl font-bold text-red-400"},[t._v("404")]),t._v(" "),e("h2",{staticClass:"font-serif text-6xl font-medium py-8"},[t._v("No Coffee, No Workee!")]),t._v(" "),e("NuxtLink",{staticClass:"inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 my-8 rounded hover:bg-blue-50",attrs:{to:"/"}},[t._v("\n          На главную\n        ")])],1)])])])}),[],!1,null,null,null);e.a=component.exports}},[[215,17,3,18]]]);