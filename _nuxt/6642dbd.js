(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{108:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{pages:[{id:1,link:"/",title:"Обо мне",active:!0,icon:"#account"},{id:2,link:"/services",title:"Услуги",active:!0,icon:"#service"},{id:3,link:"/portfolio",title:"Портфолио",active:!0,icon:"#case"}],contacts:[{id:1,link:"https://github.com/sillexo",title:"Мой Github",active:!0,icon:"#github"},{id:2,link:"http://vk.com/baluev_r",title:"Написать мне в Вконтакте",active:!0,icon:"#vk"},{id:3,link:"https://t.me/sillexo",title:"Написать мне в Telegram",active:!0,icon:"#telegram"},{id:4,link:"viber://chat?number=79638760737",title:"Написать мне в Viber",active:!0,icon:"#viber"},{id:5,link:"mailto:sillexlab@gmail.com",title:"Написать мне на Email",active:!0,icon:"#mail"}],isShowedMobileMenu:!1}},mounted:function(){},methods:{showMobileMenu:function(){this.isShowedMobileMenu=!0},hideMobileMenu:function(){this.isShowedMobileMenu=!1},redirectToLink:function(link){window.location.href=link}}},r=n(27),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"z-20 flex-shrink-0 overflow-hidden md:static md:h-full focus:outline-none md:flex md:order-none order-1 fixed bottom-0 w-full md:w-auto",attrs:{tabindex:"-1"}},[n("div",{staticClass:"flex md:flex-col flex-row flex-shrink-0 h-full px-2 py-2 md:py-4 bg-gray-800 text-gray-200"},[n("div",{staticClass:"flex-col items-center flex-1 space-y-4 md:flex hidden"},[t._l(t.pages,(function(e){return[e.active?n("NuxtLink",{key:e.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:e.link,title:e.title}},[n("svg",{staticClass:"fill-current w-8 h-8"},[n("use",{attrs:{"xlink:href":e.icon}})])]):t._e()]}))],2),t._v(" "),n("div",{staticClass:"flex-1 flex md:hidden"},[t.isShowedMobileMenu?t._e():n("a",{staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300 z-10",attrs:{href:"javascript:;"},on:{click:t.showMobileMenu}},[n("svg",{staticClass:"fill-current w-8 h-8"},[n("use",{attrs:{"xlink:href":"#burger"}})])]),t._v(" "),t.isShowedMobileMenu?n("a",{staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300 z-10",attrs:{href:"javascript:;"},on:{click:t.hideMobileMenu}},[n("svg",{staticClass:"fill-current w-8 h-8"},[n("use",{attrs:{"xlink:href":"#close"}})])]):t._e(),t._v(" "),n("div",{staticClass:"bg-gray-800 fixed flex-1 flex-col h-full items-center left-0 space-y-4 text-gray-200 top-0 z-0 w-4/5 p-3",class:{"transform -translate-x-full":!t.isShowedMobileMenu},on:{click:t.hideMobileMenu}},[t._l(t.pages,(function(e){return[e.active?n("NuxtLink",{key:e.id,staticClass:"flex items-center p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:e.link,title:e.title}},[n("svg",{staticClass:"fill-current w-8 h-8 mr-2"},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v("\n            "+t._s(e.title)+"\n          ")]):t._e(),t._v(" "),"/"==e.link?[e.active?n("NuxtLink",{key:e.id+10,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/skills"}},[t._v("\n              Мои знания\n            ")]):t._e(),t._v(" "),e.active?n("NuxtLink",{key:e.id+20,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/stack"}},[t._v("\n              Используемый стек\n            ")]):t._e(),t._v(" "),e.active?n("NuxtLink",{key:e.id+30,staticClass:"flex items-center p-2 ml-10 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{to:"/about/services"}},[t._v("\n              Предоставляемый сервис\n            ")]):t._e()]:t._e()]}))],2)]),t._v(" "),n("div",{staticClass:"flex flex-row md:flex-col items-center justify-center flex-shrink-0 z-10"},[t._l(t.contacts,(function(e){return[e.active&&5!==e.id?n("a",{key:e.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{target:"_blank",href:e.link,title:e.title}},[n("svg",{staticClass:"fill-current w-7 h-7"},[n("use",{attrs:{"xlink:href":e.icon}})])]):e.active&&5===e.id?n("a",{key:e.id,staticClass:"p-2 transition-colors duration-200 rounded-full focus:outline-none hover:text-blue-300",attrs:{target:"_blank",href:"javascript:;",title:e.title},on:{click:function(n){return t.redirectToLink(e.link)}}},[n("svg",{staticClass:"fill-current w-7 h-7"},[n("use",{attrs:{"xlink:href":e.icon}})])]):t._e()]}))],2)]),t._v(" "),n("svg",{staticClass:"hidden"},[n("symbol",{attrs:{id:"account",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}})]),t._v(" "),n("symbol",{attrs:{id:"case",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"}})]),t._v(" "),n("symbol",{attrs:{id:"service",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"}})]),t._v(" "),n("symbol",{attrs:{id:"contacts",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"}})]),t._v(" "),n("symbol",{attrs:{id:"github",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})]),t._v(" "),n("symbol",{attrs:{id:"vk",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 11 9.89 12.8 10.38 12.8C10.57 12.8 10.65 12.71 10.65 12.25V10.1C10.6 9.12 10.07 9.03 10.07 8.68C10.07 8.5 10.21 8.34 10.44 8.34H12.73C13.04 8.34 13.15 8.5 13.15 8.88V11.77C13.15 12.08 13.28 12.19 13.38 12.19C13.56 12.19 13.72 12.08 14.05 11.74C15.1 10.57 15.85 8.76 15.85 8.76C15.95 8.55 16.11 8.35 16.5 8.35H17.93C18.37 8.35 18.47 8.58 18.37 8.89C18.19 9.74 16.41 12.25 16.43 12.25C16.27 12.5 16.21 12.61 16.43 12.9C16.58 13.11 17.09 13.55 17.43 13.94C18.05 14.65 18.53 15.24 18.66 15.65C18.77 16.06 18.57 16.27 18.15 16.27Z"}})]),t._v(" "),n("symbol",{attrs:{id:"telegram",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}})]),t._v(" "),n("symbol",{attrs:{id:"viber",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"}})]),t._v(" "),n("symbol",{attrs:{id:"mail",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]),t._v(" "),n("symbol",{attrs:{id:"burger",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}})]),t._v(" "),n("symbol",{attrs:{id:"close",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"}})])])])}),[],!1,null,null,null);e.default=component.exports},151:function(t,e,n){var content=n(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("438e1f7c",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";var o={components:{Sidebar:n(108).default},data:function(){return{isSidebarOpen:!1}},mounted:function(){},methods:{}},r=(n(210),n(27)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex h-screen antialiased text-gray-900 bg-gray-100 svg-background md:flex-row flex-col"},[t.isSidebarOpen?n("div",{staticClass:"fixed inset-0 z-10 bg-gray-800 lg:hidden",staticStyle:{opacity:"0.5"},attrs:{"aria-hidden":"true"},on:{click:function(e){t.isSidebarOpen=!1}}}):t._e(),t._v(" "),n("sidebar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Sidebar:n(108).default})},170:function(t,e,n){n(171),t.exports=n(172)},208:function(t,e,n){var content=n(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("4ec1dd84",content,!0,{sourceMap:!1})},209:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,".content p{\n  margin:0 0 10px\n}\n\n.content b,.content strong{\n  font-weight:700;\n  font-family:inherit;\n  font-weight:500;\n  line-height:1.1;\n  color:inherit\n}\n\n.content ol,.content ul{\n  margin-top:0;\n  margin-bottom:10px;\n  margin-left:20px;\n  line-height:1.75rem\n}\n\n.content ol ol,.content ol ul,.content ul ol,.content ul ul{\n  margin-bottom:0\n}\n\n.content ul{\n  list-style:disc\n}\n\n.content hr{\n  margin-top:20px;\n  margin-bottom:20px;\n  border:0;\n  border-top:1px solid #eee\n}\n\n.content .h3,.content .h4,.content .h5,.content .h6,.content h3,.content h4,.content h5,.content h6{\n  font-family:inherit;\n  font-weight:500;\n  line-height:1.1;\n  color:inherit\n}\n\n.content .h3,.content h3{\n  margin-top:20px;\n  margin-bottom:10px\n}\n\n.content .h4,.content h4{\n  margin-top:16px;\n  margin-bottom:10px\n}\n\n.content .h5,.content .h6,.content h5,.content h6{\n  margin-top:10px;\n  margin-bottom:10px\n}\n\n.content .h3,.content h3{\n  font-size:20px\n}\n\n.content .h4,.content h4{\n  font-size:16px\n}\n\n.content .h5,.content h5{\n  font-size:14px\n}\n\n.content .h6,.content h6{\n  font-size:12px\n}\n\n.content table{\n  background-color:transparent\n}\n\n.content caption{\n  padding-top:8px;\n  padding-bottom:8px;\n  color:#777;\n  text-align:left\n}\n\n.content th{\n  text-align:left\n}\n\n.content .table{\n  width:100%;\n  max-width:100%;\n  margin-bottom:20px\n}\n\n.content .table>tbody>tr>td,.content .table>tbody>tr>th,.content .table>tfoot>tr>td,.content .table>tfoot>tr>th,.content .table>thead>tr>td,.content .table>thead>tr>th{\n  padding:8px;\n  line-height:1.42857143;\n  vertical-align:top;\n  border-top:1px solid #ddd\n}\n\n.content .table>thead>tr>th{\n  vertical-align:bottom;\n  border-bottom:2px solid #ddd\n}\n\n.content .table>caption+thead>tr:first-child>td,.content .table>caption+thead>tr:first-child>th,.content .table>colgroup+thead>tr:first-child>td,.content .table>colgroup+thead>tr:first-child>th,.content .table>thead:first-child>tr:first-child>td,.content .table>thead:first-child>tr:first-child>th{\n  border-top:0\n}\n\n.content .table>tbody+tbody{\n  border-top:2px solid #ddd\n}\n\n.content .table .table{\n  background-color:#fff\n}\n\n.content .table-condensed>tbody>tr>td,.content .table-condensed>tbody>tr>th,.content .table-condensed>tfoot>tr>td,.content .table-condensed>tfoot>tr>th,.content .table-condensed>thead>tr>td,.content .table-condensed>thead>tr>th{\n  padding:5px\n}\n\n.content .table-bordered,.content .table-bordered>tbody>tr>td,.content .table-bordered>tbody>tr>th,.content .table-bordered>tfoot>tr>td,.content .table-bordered>tfoot>tr>th,.content .table-bordered>thead>tr>td,.content .table-bordered>thead>tr>th{\n  border:1px solid #ddd\n}\n\n.content .table-bordered>thead>tr>td,.content .table-bordered>thead>tr>th{\n  border-bottom-width:2px\n}\n\n.content .table-striped>tbody>tr:nth-of-type(odd){\n  background-color:#f9f9f9\n}\n\n.content .table-hover>tbody>tr:hover{\n  background-color:#f5f5f5\n}\n\n.content table col[class*=col-]{\n  position:static;\n  display:table-column;\n  float:none\n}\n\n.content table td[class*=col-],.content table th[class*=col-]{\n  position:static;\n  display:table-cell;\n  float:none\n}\n\n.content .table>tbody>tr.active>td,.content .table>tbody>tr.active>th,.content .table>tbody>tr>td.active,.content .table>tbody>tr>th.active,.content .table>tfoot>tr.active>td,.content .table>tfoot>tr.active>th,.content .table>tfoot>tr>td.active,.content .table>tfoot>tr>th.active,.content .table>thead>tr.active>td,.content .table>thead>tr.active>th,.content .table>thead>tr>td.active,.content .table>thead>tr>th.active{\n  background-color:#f5f5f5\n}\n\n.content .table-hover>tbody>tr.active:hover>td,.content .table-hover>tbody>tr.active:hover>th,.content .table-hover>tbody>tr:hover>.active,.content .table-hover>tbody>tr>td.active:hover,.content .table-hover>tbody>tr>th.active:hover{\n  background-color:#e8e8e8\n}\n\n.content .table-responsive{\n  min-height:.01%;\n  overflow-x:auto\n}\n\n@media screen and (max-width:767px){\n  .content .table-responsive{\n    width:100%;\n    margin-bottom:15px;\n    overflow-y:hidden;\n    -ms-overflow-style:-ms-autohiding-scrollbar;\n    border:1px solid #ddd\n  }\n\n  .content .table-responsive>.table{\n    margin-bottom:0\n  }\n\n  .content .table-responsive>.table>tbody>tr>td,.content .table-responsive>.table>tbody>tr>th,.content .table-responsive>.table>tfoot>tr>td,.content .table-responsive>.table>tfoot>tr>th,.content .table-responsive>.table>thead>tr>td,.content .table-responsive>.table>thead>tr>th{\n    white-space:nowrap\n  }\n\n  .content .table-responsive>.table-bordered{\n    border:0\n  }\n\n  .content .table-responsive>.table-bordered>tbody>tr>td:first-child,.content .table-responsive>.table-bordered>tbody>tr>th:first-child,.content .table-responsive>.table-bordered>tfoot>tr>td:first-child,.content .table-responsive>.table-bordered>tfoot>tr>th:first-child,.content .table-responsive>.table-bordered>thead>tr>td:first-child,.content .table-responsive>.table-bordered>thead>tr>th:first-child{\n    border-left:0\n  }\n\n  .content .table-responsive>.table-bordered>tbody>tr>td:last-child,.content .table-responsive>.table-bordered>tbody>tr>th:last-child,.content .table-responsive>.table-bordered>tfoot>tr>td:last-child,.content .table-responsive>.table-bordered>tfoot>tr>th:last-child,.content .table-responsive>.table-bordered>thead>tr>td:last-child,.content .table-responsive>.table-bordered>thead>tr>th:last-child{\n    border-right:0\n  }\n\n  .content .table-responsive>.table-bordered>tbody>tr:last-child>td,.content .table-responsive>.table-bordered>tbody>tr:last-child>th,.content .table-responsive>.table-bordered>tfoot>tr:last-child>td,.content .table-responsive>.table-bordered>tfoot>tr:last-child>th{\n    border-bottom:0\n  }\n}\n\n.content fieldset{\n  min-width:0;\n  padding:0;\n  margin:0;\n  border:0\n}\n\n.content legend{\n  display:block;\n  width:100%;\n  padding:0;\n  margin-bottom:20px;\n  font-size:21px;\n  line-height:inherit;\n  color:#333;\n  border:0;\n  border-bottom:1px solid #e5e5e5\n}\n\n.content label{\n  display:inline-block;\n  max-width:100%;\n  margin-bottom:5px;\n  font-weight:700\n}\n\n.svg-background{\n  background-color:#aaa;\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(161 .5 .5)'%3E%3Cstop offset='0' stop-color='%23aaa'/%3E%3Cstop offset='1' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(218 .5 .5)'%3E%3Cstop offset='0' stop-color='%23eee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eee'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(360 .5 .5)'%3E%3Cstop offset='0' stop-color='%23eee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M0 0h2v1H0z'/%3E%3Cpath fill='url(%23b)' d='M0 1V0h2z'/%3E%3Cpath fill='url(%23c)' d='M2 1V0H0z'/%3E%3C/svg%3E\");\n  background-attachment:fixed;\n  background-size:cover\n}",""]),t.exports=o},210:function(t,e,n){"use strict";n(151)},211:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}',""]),t.exports=o},34:function(t,e,n){"use strict";var o=n(27),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"flex-1"},[n("div",{staticClass:"h-full min-h-screen overflow-x-hidden overflow-y-auto md:px-5 md:py-5 lg:py-10 lg:px-20 p-5"},[n("div",{staticClass:"flex justify-center bg-white md:p-10 p-5 shadow min-h-full mb-16 md:mb-0"},[n("div",{staticClass:"flex flex-col items-center justify-center"},[n("h1",{staticClass:"font-serif text-9xl font-bold text-red-400"},[t._v("404")]),t._v(" "),n("h2",{staticClass:"font-serif text-6xl font-medium py-8"},[t._v("No Coffee, No Workee!")]),t._v(" "),n("NuxtLink",{staticClass:"inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 my-8 rounded hover:bg-blue-50",attrs:{to:"/"}},[t._v("\n          На главную\n        ")])],1)])])])}),[],!1,null,null,null);e.a=component.exports}},[[170,15,2,16]]]);