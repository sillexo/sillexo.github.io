(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,6],{236:function(n,e,t){var content=t(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(49).default)("05df6d46",content,!0,{sourceMap:!1})},237:function(n,e,t){"use strict";t(236)},238:function(n,e,t){var l=t(48)((function(i){return i[1]}));l.push([n.i,".vue-simple-spinner{\n  transition:all .3s linear\n}\n@-webkit-keyframes vue-simple-spinner-spin{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes vue-simple-spinner-spin{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}",""]),n.exports=l},239:function(n,e,t){var content=t(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(49).default)("14a7ec02",content,!0,{sourceMap:!1})},241:function(n,e,t){"use strict";t.r(e);t(240);var l={name:"v-spinner",props:{size:{type:Number,default:32},"line-size":{type:Number,default:3},"line-bg-color":{type:String,default:"#eee"},"line-fg-color":{type:String,default:"#2196f3"},speed:{type:Number,default:.8},spacing:{type:Number,default:4},message:{type:String,default:""},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#555"}},computed:{size_px:function(){switch(this.size){case"tiny":return 12;case"small":return 16;case"medium":return 32;case"large":return 48;case"big":return 64;case"huge":return 96;case"massive":return 128;default:return 32}},line_size_px:function(){switch(this.size){case"tiny":return 1;case"small":return 2;case"medium":case"large":return 3;case"big":case"huge":return 4;case"massive":return 5;default:return 4}},text_margin_top:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12);default:return 4}},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(.4*this.size_px),11),32);default:return 13}},spinner_style:function(){return{margin:"0 auto","border-radius":"100%",border:this.line_size_px+"px solid "+this.lineBgColor,"border-top":this.line_size_px+"px solid "+this.lineFgColor,width:this.size_px+"px",height:this.size_px+"px",animation:"vue-simple-spinner-spin "+this.speed+"s linear infinite"}},text_style:function(){return{"margin-top":this.text_margin_top+"px",color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":"center"}}}},r=(t(237),t(27)),component=Object(r.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"vue-simple-spinner",style:n.spinner_style}),n._v(" "),n.message.length>0?t("div",{staticClass:"vue-simple-spinner-text",style:n.text_style},[n._v("\n    "+n._s(n.message)+"\n  ")]):n._e()])}),[],!1,null,null,null);e.default=component.exports},244:function(n,e,t){"use strict";t(239)},245:function(n,e,t){var l=t(48)((function(i){return i[1]}));l.push([n.i,'.modal{\n  position:fixed;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:1050;\n  overflow:auto;\n  display:block!important\n}\n@media screen and (min-width:1024px){\n.modal-dialog{\n    max-width:600px\n}\n}\n@media screen and (max-width:1023px){\n.modal-dialog{\n    max-width:80%\n}\n}\n@media screen and (max-width:767px){\n.modal-dialog{\n    max-width:90%\n}\n}\n.modal-dialog{\n  margin:50px auto 0;\n  pointer-events:auto\n}\n.modal.in{\n  display:block;\n  opacity:1;\n  -webkit-animation:fade-In 1s forwards;\n          animation:fade-In 1s forwards\n}\n.modal-open{\n  overflow:hidden\n}\n.modal-body{\n  position:relative;\n  padding:30px;\n  background-color:#fff\n}\n@media screen and (max-width:767px){\n.modal-body{\n    padding:30px\n}\n}\n.modal-open-scroll{\n  padding:0\n}\n.modal-close{\n  position:absolute;\n  right:6px;\n  top:6px;\n  margin:0;\n  padding:0;\n  width:32px;\n  height:32px;\n  line-height:32px;\n  cursor:pointer;\n  opacity:.8\n}\n.modal-close,.modal-close:focus,.modal-close:hover{\n  transition-property:opacity;\n  transition-duration:.5s\n}\n.modal-close:focus,.modal-close:hover{\n  opacity:1;\n  outline:none\n}\n.modal-close:after,.modal-close:before{\n  content:" ";\n  position:absolute;\n  left:15px;\n  top:5px;\n  height:22px;\n  width:2px;\n  background-color:#000\n}\n.modal-close:before{\n  transform:rotate(45deg)\n}\n.modal-close:after{\n  transform:rotate(-45deg)\n}\n.modal-overlay{\n  position:fixed;\n  bottom:0;\n  left:0;\n  top:0;\n  right:0;\n  z-index:100;\n  overflow:auto;\n  -webkit-overflow-scrolling:touch\n}\n.modal-overlay>*{\n  -webkit-transform:translateZ(0)\n}\n.modal-overlay{\n  background:rgba(0,0,0,.8);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr = #7F000000,endColorstr = #7F000000);\n  zoom:1\n}',""]),n.exports=l},250:function(n,e,t){"use strict";t.r(e);t(12),t(22);var l=t(248),r=t.n(l),o={props:["service"],data:function(){return{mail:{name:null,phone:null,email:null,service:this.service,message:null,licenses:!0},validate:{},isLoading:!1}},components:{vSpinner:t(241).default},mounted:function(){this.validate=Object.assign({},this.validate,this.clearValid)},methods:{onClick:function(){var n=this;this.formIsValid()&&(this.isLoading=!0,this.$axios.post("http://laranuxt.sillexlab.ru/mail",this.mail).then((function(e){200===e.status&&(n.$emit("form-sended",e.data.message),n.clearValid())})).catch((function(n){console.log(n)})).finally((function(){n.isLoading=!1})))},clearValid:function(){this.validate={name:null,phone:null,email:null,service:null,message:null,licenses:null}},formIsValid:function(){this.clearValid();var n=!0;return r.a.isEmpty(this.mail.name)&&(this.validate.form=!1,this.validate.name="Обязательно для заполнения",n=!1),r.a.isEmpty(this.mail.phone)&&(this.validate.form=!1,this.validate.phone="Обязательно для заполнения",n=!1),r.a.isEmpty(this.mail.email)?(this.validate.form=!1,this.validate.email="Обязательно для заполнения",n=!1):r.a.single(this.mail.email,{email:!0})&&(this.validate.form=!1,this.validate.email="Введите корректный email",n=!1),r.a.isEmpty(this.mail.service)&&(this.validate.form=!1,this.validate.service="Обязательно для заполнения",n=!1),r.a.isEmpty(this.mail.message)&&(this.validate.form=!1,this.validate.message="Обязательно для заполнения",n=!1),this.mail.licenses||(this.validate.form=!1,this.validate.licenses="Необходимо принять соглашение",n=!1),n}}},d=t(27),component=Object(d.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("form",{staticClass:"flex flex-col space-y-2.5 mx-14"},[t("div",{staticClass:"flex flex-col space-y-1"},[n._m(0),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.mail.name,expression:"mail.name"}],staticClass:"px-4 py-1.5 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",class:{"border-red-500":n.validate.name},attrs:{id:"name",placeholder:"Представьтесь, пожалуйста",type:"text",autofocus:"",required:""},domProps:{value:n.mail.name},on:{input:function(e){e.target.composing||n.$set(n.mail,"name",e.target.value)}}}),n._v(" "),n.validate.name?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.name))]):n._e()]),n._v(" "),t("div",{staticClass:"flex flex-col space-y-1"},[n._m(1),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.mail.phone,expression:"mail.phone"}],staticClass:"px-4 py-1.5 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",class:{"border-red-500":n.validate.phone},attrs:{id:"phone",placeholder:"Номер телефона",type:"tel",autofocus:"",required:""},domProps:{value:n.mail.phone},on:{input:function(e){e.target.composing||n.$set(n.mail,"phone",e.target.value)}}}),n._v(" "),n.validate.phone?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.phone))]):n._e()]),n._v(" "),t("div",{staticClass:"flex flex-col space-y-1"},[n._m(2),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.mail.email,expression:"mail.email"}],staticClass:"px-4 py-1.5 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",class:{"border-red-500":n.validate.email},attrs:{id:"email",type:"email",autofocus:"",required:"",placeholder:"Email адрес"},domProps:{value:n.mail.email},on:{input:function(e){e.target.composing||n.$set(n.mail,"email",e.target.value)}}}),n._v(" "),n.validate.email?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.email))]):n._e()]),n._v(" "),t("div",{staticClass:"flex flex-col space-y-1"},[t("label",{staticClass:"text-sm font-semibold text-gray-500",attrs:{for:"service"}},[n._v("Услуга")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.mail.service,expression:"mail.service"}],staticClass:"px-4 py-1.5 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",class:{"border-red-500":n.validate.service},attrs:{id:"service",type:"text",autofocus:"",readonly:""},domProps:{value:n.mail.service},on:{input:function(e){e.target.composing||n.$set(n.mail,"service",e.target.value)}}}),n._v(" "),n.validate.service?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.service))]):n._e()]),n._v(" "),t("div",{staticClass:"flex flex-col space-y-1"},[n._m(3),n._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.mail.message,expression:"mail.message"}],staticClass:"px-4 py-1.5 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",class:{"border-red-500":n.validate.message},attrs:{id:"message",autofocus:"",required:"",placeholder:"Сообщение"},domProps:{value:n.mail.message},on:{input:function(e){e.target.composing||n.$set(n.mail,"message",e.target.value)}}}),n._v(" "),n.validate.message?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.message))]):n._e()]),n._v(" "),t("div",{staticClass:"flex flex-col space-y-1"},[t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.mail.licenses,expression:"mail.licenses"}],attrs:{id:"licenses",type:"checkbox",required:""},domProps:{checked:Array.isArray(n.mail.licenses)?n._i(n.mail.licenses,null)>-1:n.mail.licenses},on:{change:function(e){var t=n.mail.licenses,l=e.target,r=!!l.checked;if(Array.isArray(t)){var o=n._i(t,null);l.checked?o<0&&n.$set(n.mail,"licenses",t.concat([null])):o>-1&&n.$set(n.mail,"licenses",t.slice(0,o).concat(t.slice(o+1)))}else n.$set(n.mail,"licenses",r)}}}),n._v(" "),n._m(4)]),n._v(" "),n.validate.licenses?t("div",{staticClass:"text-red-500 text-sm"},[n._v(n._s(n.validate.licenses))]):n._e()]),n._v(" "),t("div",{staticClass:"mt-5"},[t("button",{staticClass:"flex items-center inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 rounded hover:bg-blue-50 focus:outline-none",attrs:{type:"submit",disabled:n.isLoading},on:{click:function(e){return e.preventDefault(),n.onClick(e)}}},[n._v("\n      Отправить\n      "),n.isLoading?t("v-spinner",{staticClass:"ml-3",attrs:{size:"small","line-fg-color":"#3b82f6"}}):n._e()],1)])])}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("label",{staticClass:"text-sm font-semibold text-gray-500",attrs:{for:"name"}},[n._v("Ваше имя "),t("span",{staticClass:"text-red-700"},[n._v("*")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("label",{staticClass:"text-sm font-semibold text-gray-500",attrs:{for:"phone"}},[n._v("Номер телефона "),t("span",{staticClass:"text-red-700"},[n._v("*")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("label",{staticClass:"text-sm font-semibold text-gray-500",attrs:{for:"email"}},[n._v("Email адрес "),t("span",{staticClass:"text-red-700"},[n._v("*")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("label",{staticClass:"text-sm font-semibold text-gray-500",attrs:{for:"message"}},[n._v("Сообщение "),t("span",{staticClass:"text-red-700"},[n._v("*")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("label",{staticClass:"ml-3",attrs:{for:"licenses"}},[n._v("\n        Я согласен на "),t("a",{staticClass:"text-blue-500",attrs:{href:"javascript:;"}},[n._v("обработку персональных данных")])])}],!1,null,null,null);e.default=component.exports},251:function(n,e,t){"use strict";t.r(e);var l={name:"v-modal",props:{classmodal:{type:String,default:""},classoverlay:{type:String,default:""},showModal:{type:Boolean,default:!0}},data:function(){return{spinner_size:24,spinner_speed:.8}},mounted:function(){var n=this;document.addEventListener("click",(function(e){e.target===n.$refs.closeOnClick&&n.close()})),document.body.classList.add("modal-open"),document.addEventListener("keyup",(function(e){27===e.keyCode&&n.close()}))},methods:{close:function(){this.$emit("modalclose",!1),document.body.classList.remove("modal-open")}}},r=(t(244),t(27)),component=Object(r.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"modal-overlay",class:n.classoverlay},[t("div",{ref:"closeOnClick",staticClass:"modal",class:n.classmodal,attrs:{role:"dialog"}},[t("div",{staticClass:"modal-dialog"},[t("div",{staticClass:"modal-body"},[t("span",{staticClass:"modal-close",on:{click:function(e){return n.close()}}}),n._v(" "),n._t("default",[t("v-spinner",{attrs:{size:n.spinner_size,speed:n.spinner_speed}})])],2)])])])}),[],!1,null,null,null);e.default=component.exports},260:function(n,e,t){"use strict";var l=t(2),r=t(64).find,o=t(111),d="find",c=!0;d in[]&&Array(1).find((function(){c=!1})),l({target:"Array",proto:!0,forced:c},{find:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}}),o(d)},266:function(n,e,t){"use strict";t.r(e);var l=t(6),r=(t(50),t(260),t(29),t(38),{components:{Form:t(250).default},asyncData:function(n){return Object(l.a)(regeneratorRuntime.mark((function e(){var t,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.params,l=n.redirect,!(r=[{title:"Поддержка вашего сайта",slug:"podderghka-sajta",description:"\n        <p>Бессрочная поддержка ваших проектов.</p>\n        <ul>\n          <li>Добавление верстки</li>\n          <li>Доработка функционала или его добавление</li>\n          <li>Внедрение «реактивности»</li>\n          <li>Исправление возможных «багов»</li>\n        </ul>",icon:"",price:"500 руб/час",active:!0},{title:"Верстка готового шаблона",slug:"verstka-gotovogo-shablona",description:'<p style="padding-bottom: 10px;">Доработка макетов оценивается отдельно. При более сжатых сроках стоимость увеличивается на 40%.</p>\n          <ul>\n            <li>Верстка по стандартам W3C</li>\n            <li>Валидный код</li>\n            <li>«Зеленая зона» в <a class="text-blue-500" href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">google pagespeed insights</a></li>\n            <li>Соблюдение сроков</li>\n            <li>Простой javascript</li>\n          </ul>\n          <br>\n          <table class="table">\n            <tbody>\n            <tr>\n              <th>\n                Страница\n              </th>\n              <th>\n                ПК\n              </th>\n              <th>\n                Мобильные устройства\n              </th>\n            </tr>\n            <tr>\n              <td>\n                Главная\n              </td>\n              <td>\n                5 900 руб.<br>\n                5 дней\n              </td>\n              <td>\n                + 2 000 руб.<br>\n                + 2 дня\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Внутренние страницы\n              </td>\n              <td>\n                3 000 руб.<br>\n                2 дня\n              </td>\n              <td>\n                + 2 000 руб.<br>\n                + 2 дня\n              </td>\n            </tr>\n            </tbody>\n            </table>',icon:"",price:"от 5900 руб.",active:!0},{title:"Разработка одностраничного сайта",slug:"razrabotka-odnostranichnogo-sajta",description:"<p><strong>Landing page (LP), лендинг или посадочная страница</strong> - сайт, состоящий из одной страницы, на которую потенциальный клиент попадает по ссылке в Yandex/Google или через рекламный блок на сторонних сайтах. На сегодняшний день интерес к подобным страницам быстро возрастает и создание LP становится одним из самых выгодных маркетинговых инструментов для малого и среднего бизнеса, а также для продвижения отдельных предложений крупных компаний.</p>\n        <h4>По сравнению с обыкновенными сайтами с внутренними страницами, LP имеет много преимуществ:</h4>\n        <ul>\n          <li>LP предлагает не множество решений, а делает одно уникальное предложение</li>\n          <li>увеличение конверсии на 30%</li>\n          <li>пользователю не надо переходить по сайту и искать необходимую информацию в разных разделах – все расположено в рамках одной страницы</li>\n          <li>сравнительно невысокая стоимость создания</li>\n        </ul>\n        <p>Популярность LP увеличивается из-за того, что при невысокой стоимости такой страницы – это один из самых эффективных способов продажи в интернете. Из-за небольшого количества страниц и отсутствия сложной навигации пользователю остается либо выполнить необходимое от него действие (заказать услугу либо оставить свои контакты) либо покинуть сайт. По сравнению с обычными сайтами LP создает наибольшую конверсию.</p>\n\n          <h4>Имея опыт в создании LP я могу выделить основные требования, которым должны соответствовать подобные сайты:</h4>\n          <ul>\n          <li>четко структурированный дизайн – нужно исключить всю не нужную пользователю информацию</li>\n          <li>максимально четкая и конкретная информация, почему пользователю необходимо приобрести товар либо услугу именно у вашей компании</li>\n          <li>минимальный набор действий, которые должен совершить пользователь</li>\n        </ul>\n        <p>Хороший лендинг станет вашим конкурентным преимуществом. LP является не только инструментом продаж, но и рекламным инструментом, который не только презентует услугу либо товар, но и формирует образ компании.</p>",icon:"",price:"от 15990 руб.",active:!0},{title:"Разработка сайта визитки",slug:"razrabotka-sajta-vizitki",description:"\n        <h4>Что такое сайт визитка?</h4>\n        <p>\n          <strong>Сайт визитка</strong> - маленький информационный веб-ресурс, с минимумом статических страниц. Эффективен, как правило, благодаря множеству модулей, например:</p>\n          <ul>\n          <li>форма обратной связи</li>\n          <li>форма «заказать звонок»</li>\n          <li>карта сайта с удобной навигацией</li>\n          <li>меню</li>\n          <li>виджеты социальных сетей</li>\n          <li>социальные кнопки like/repost</li>\n          </ul>\n          <h4>В состав обычно входит:</h4>\n          <ul>\n            <li>Готовый (или индивидуальный, выполненный под заказ) дизайн</li>\n            <li>3-7 основные страницы сайта (основная информация о компании и ее деятельности, контактная информация, прайс-лист, схема проезда и т.п.)</li>\n            <li>административная панель управления сайтом</li>\n            <li>продвижение сайта в поисковых системах</li>\n          </ul>\n\n        <h4>Как создается сайт визитка?</h4>\n        <p>\n          Сначала выясняются потребности заказчика, затем создаются макеты с уникальным дизайном, дизайн подтверждается, макеты верстаются и натягиваются на систему управления контентом (CMS).</p><p>\n          Кому подходит сайт-визитка?</p>\n          <ul>\n          <li>Однозначно сайт-визитка подходит открывающимся компаниям с очень низким бюджетом. Компании, заказывающие сайт-визитку, как правило, только выходят на рынок и только начинают искать клиентов через глобальную сеть интернет.</li>\n          <li>Компаниям, у которых небольшой спектр услуг. Нередко на простом сайте-визитке используется анимация, которая делает сайт запоминающимся и надолго откладывается в памяти у пользователя.</li>\n          <li>Сайт-визитка подходит организациям, которые ищут партнеров.</li>\n          </ul>\n        </p>\n        <h4>Почему это необходимо?</h4>\n        <p>\n          В наше конкурентноспособное время любой компании необходим веб-сайт. Благодаря мировой сети интернет конкуренция среди компаний выросла в несколько раз. Ваши клиенты уже ищут Вас в интернете.</p>\n          <p>Если у вас низкий бюджет или же вы просто хотите убедиться в том, что интернет-сайт увеличит продажи вашей компании, то сайт-визитка - это то, что вам нужно.</p>",icon:"",price:"от 9990 руб.",active:!0},{title:"Разработка сайта портфолио",slug:"razrabotka-sajta-portfolio",description:"\n          <h4>Что такое сайт-портфолио?</h4>\n          <p><strong>Сайт-портфолио</strong> - информационный веб ресурс предназначенный для размещения работ, например: дизайнеров, фотографов, видеооператоров и специалистов других профессий, связанных с творчеством. Сайт-портфолио, как правило, состоит из небольшого количества модулей:</p>\n          <ul>\n            <li>контакты</li>\n            <li>карта</li>\n            <li>галерея работ</li>\n          </ul>\n          <h4>Как создается сайт-портфолио?</h4>\n          <p>После обсуждения с Вами концепции сайта, готовятся предварительные макеты уникального дизайна. Вы просматриваете макеты, выбираете подходящий, после чего идет верстка и натяжка на систему управления контентом (CMS). Когда вся функциональная часть сайта готова, мы вместе с Вами наполняем сайт необходимым контентом.</p>\n          <h4>Кому необходим сайт-портфолио?</h4>\n          <p>Сайт-портфолио чаще всего необходим людям, чья профессия связана с творчеством. Обычно такому клиенту необходим минимум функционала с максимальной нагрузкой на визуальную часть. Данный тип сайта необходим людям, у которых основная цель и направление - уникальность и неповторимость их работ. Им не требуется сложная техническая структура, а важно показать заказчику незаурядность своих работ. Чаще всего это:</p>\n            <ul>\n            <li>веб-дизайнеры</li>\n            <li>графические дизайнеры</li>\n            <li>дизайнеры интерьера</li>\n            <li>ландшафтные дизайнеры</li>\n            <li>фотографы</li>\n            <li>видео-операторы</li>\n            <li>художники</li>\n            <li>фешн-стилисты</li>\n            <li>модельеры</li>\n          </ul>\n          <h4>Почему это необходимо?</h4>\n          <p>\n            Сайт-портфолио необходим для простого отображения полезной пользователю информации. Благодаря ему владелец сайта делает усилия только в сторону добавления нового материала по своей тематике. Обычно такие сайты не нуждаются в продвижении и ссылку на них творческие деятели дают по запросу.</p>\n            <p>Я предлагаю услуги по созданию сайта-портфолио с уникальным дизайном, отображающим вашу индивидуальность и направление вашего творчества.\n          </p>",icon:"",price:"от 15990 руб.",active:!0},{title:"Разработка интернет-магазина",slug:"razrabotka-internet-magazina",description:"<p><strong>Интернет-магазин</strong> - это основной инструмент продаж товаров в интернете. В наше время практически каждая организация, занимающаяся торговлей переходит в сферу прямых продаж через интернет, открывая интернет-магазины. Интернет-магазин технически сложная система, предоставляющая массу функциональных возможностей для владельца сайта от добавления новых товаров, до . Множество пользователей на сегодняшний день совершает покупки через интернет в интернет-магазинах.</p>\n        <h4>В состав обычно входит:</h4>\n        <ul>\n          <li>индивидуальный дизайн, разработанный на базе передовых технологий</li>\n          <li>наполнение специализированным контентом</li>\n          <li>модули «Каталог продукции», «Корзина», «Отзывы», «Комментарии», «FAQ» и др.</li>\n          <li>каталог продукции с возможностью помещения ее в корзину для передачи и оформления заказа</li>\n          <li>административная панель управления сайтом</li>\n          <li>продвижение сайта в поисковых системах</li>\n        </ul>\n        <h4>Как создается интернет-магазин?</h4>\n        <p>В первую очередь происходит обсуждение основных тезисов с заказчиком:</p>\n        <ul>\n          <li>определяется направление торговли</li>\n          <li>обговариваются разделы интернет-магазина</li>\n          <li>обсуждаются все разделы сайта</li>\n          <li>модули оплаты</li>\n        </ul>\n        <p>Когда переговоры и основные моменты выяснены, происходит отрисовка интерфейсов, дизайна сайта и логотипа. После подтверждения заказчиком всех визуальных элементов, сайт верстается, натягивается на систему управления контентом (CMS). Далее производится тестирование, базовое наполнение.</p>\n        <h4>Кому необходим интернет-магазин?</h4>\n        <p>\n          Интернет-магазин необходим бизнесу связанному с торговлей и ритейлом. Так же интернет-магазин требуется малому бизнесу, который не хочет тратиться на арендные площадки и продавцов.\n        </p>\n        <h4>Почему необходим интернет-магазин?</h4>\n        <p>Торговля через интернет во многом упрощает работу компании. Происходит значительная экономия средств, в первую очередь, на заработной плате сотрудников и аренде.</p>\n          <p>Также многие люди перестают делать покупки в offline и перебираются в интернет, и если у Вашей компании нет интернет-магазина, то Вы упускаете множество клиентов.</p>",icon:"",price:"от 35990 руб.",active:!0},{title:"Создание сайта на основе готового шаблона",slug:"sozdanie-sajta-na-osnove-gotovogo-shablona",description:'<p>\n          Работы по разработке сайта на основе готового решения\n        </p>\n        <p>\n          Данная услуга необходима тем, кто хочет в короткие сроки и умеренном бюджете создать новый сайт или интернет-магазин.\n        </p>\n        <br>\n        <p><strong>Базовые работы для запуска сайта в работу</strong></p>\n        <table class="table table-striped">\n        <thead>\n        <tr>\n          <th>\n            №\n          </th>\n          <th>\n            Наименование\n          </th>\n          <th>\n            Ед.изм.\n          </th>\n          <th>\n            Цена(ед.)\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>\n            1\n          </td>\n          <td>\n            <a href="#">Хостинг для сайта</a>\n          </td>\n          <td>\n            1 сайт\n          </td>\n          <td>\n            10 000 руб.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            2\n          </td>\n          <td>\n            <a href="#">Регистрация домена в зоне .ru/рф</a>\n          </td>\n          <td>\n            1 сайт\n          </td>\n          <td>\n            1 000 руб.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            3\n          </td>\n          <td>\n            <a href="#">Доработка шаблона</a>\n          </td>\n          <td>\n            1 сайт\n          </td>\n          <td>\n            от 1 500 руб.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            4\n          </td>\n          <td>\n            <a href="#">Добавление контента на сайт</a>\n          </td>\n          <td>\n            1 сайт\n          </td>\n          <td>\n            7 500 руб.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            5\n          </td>\n          <td>\n            <a href="#">Изменение внешнего вида сайта</a>\n          </td>\n          <td>\n            1 сайт\n          </td>\n          <td>\n            от 7 500 руб.\n          </td>\n        </tr>\n        </tbody>\n        </table>',icon:"",price:null,active:!0},{title:"Разработка корпоративного сайта",slug:"razrabotka-korporativnogo-sajta",description:"\n          <h4>Что такое корпоративный сайт?</h4>\n          <p>\n            <strong>Корпоративный сайт</strong> - это полноценный веб-ресурс, представляющий Вашу компанию в интернете, что предполагает поддержание фирменного стиля и уникальность в дизайне сайта. Такие сайты предоставляют пользователю всю информацию о деятельности компании, ее продукции и/или услугах, таким образом привлекая клиентов и партнеров. Но основное отличие корпоративного сайта от остальных типов в том, что корпоративный сайт несет не только информативную функцию, но также и управленческую. Корпоративный сайт решает проблемы взаимодействия филиалов компании, доступа к внутренним базам, проведения бухгалтерии и множество других. С помощью корпоративного сайта можно публиковать новости для сотрудников компании, создавать базы файлов, форумы для сотрудников и т.д.\n          </p>\n          <h4>В состав обычно входит:</h4>\n          <ul>\n          <li>индивидуальный дизайн, разработанный на базе передовых технологий</li>\n          <li>наполнение специализированным контентом</li>\n          <li>установка необходимых (согласованных) модулей</li>\n          <li>административная панель управления сайтом</li>\n          <li>продвижение сайта в поисковых системах</li>\n          </ul>\n          <h4>Как создается корпоративный сайт?</h4>\n          <p>\n            В первую очередь, с вами согласовывается все техническое задание, прописываются все модули и функции будущего сайта. На этом этапе необходимо четкое осознание конечного результата. Далее происходит подготовка макетов дизайна, которые будут соответствовать фирменному стилю Вашей компании. Утвержденные макеты дизайна верстаются, а затем натягиваются на систему управления контентом (CMS), настроенную специально под Вас, для удобства добавления и редактирования контента в будущем.</p>\n            <p>Благодаря системе управления контентом, не только владелец сайта, но и сотрудники компании, получившие доступ к сайту, могут использовать модули - самостоятельно изменять базы данных прайс-листов, изменять каталог, добавлять на сайт новости и статьи. Последний этап при создании корпоративного сайта - это наполнение его контентом - тем, который увидят Ваши клиенты и тем, который будет доступен Вашим сотрудникам.\n          </p>\n          <h4>Кому необходим корпоративный сайт?</h4>\n          <p>\n            Корпоративный сайт необходим компании, которая стремится к совместной работе своих сотрудников и/или филиалов компании, а также стремится автоматизировать свой бизнес. Корпоративные сайты поддерживают работу с несколькими корпоративными приложениями - почта, CRM, ERP.</p>\n            <p>Также корпоративный сайт нужен компании, которая хочет поддерживать связь со своими клиентами - помимо форм обратной связи корпоративный сайт предоставляет возможность online консультаций и многое другое.</p>\n          <h4>Почему необходим корпоративный сайт?</h4>\n          <p>\n            Корпоративный сайт - это бизнес-инструмент, позволяющий влиять на уровень продаж путем постоянного обновления сайта, контролировать сотрудников, упрощать работу компании. Являясь полноценной системой для совместной работы, корпоративный сайт дает возможность совместного использования календаря, хранилища документов, системы управления задачами.</p>",icon:"",price:"от 45990 руб.",active:!0},{title:"Разработка веб-приложения",slug:"razrabotka-veb-prilozheniya",description:"<h4>\n          Что такое веб-приложение?\n        </h4>\n        <p>\n          <strong>Веб-приложение</strong> - это приложение с клиент-серверной архитектурой. В качестве клиента выступает браузер пользователя, а сервером обычно является веб-сервер. Хранение информации преимущественно остается на сервере. Веб-приложения интересны обществу из-за отсутствия зависимости от операционной системы. Веб-приложение является самым настоящим кросс-платформенным сервисом. Полноценные программы, в которых в качестве промежуточного звена (между пользователем и сервером) является браузер (игры, фото-видео редакторы и другие), являются веб-приложениями.\n        </p>\n        <h4>Плюсы веб-приложения</h4>\n          <ul>\n            <li><strong>Надежность.</strong> Приложение должно работать с заданными характеристиками и установленной скоростью вне зависимости от количества пользователей.</li>\n            <li><strong>Быстродействие.</strong> В любых условиях среднее время обработки запроса системой не должно превышать заданных параметров.</li>\n            <li><strong>Безопасность.</strong> Включает уровни прав доступа, авторизацию и аутентификацию.</li>\n            <li><strong>Масштабируемость.</strong> Если в будущем будет принято решение добавить компоненты, система должны быть способна увеличить поизводительность с учетом новых условий.</li>\n          </ul>\n        <h4>\n          Как создается веб-приложение?\n        </h4>\n        <p>После согласования с заказчиком основных тезисов приложения происходит составление технического задания. В техническом задании выявляются основные требования приложения:</p>\n        <ul>\n          <li>цели</li>\n          <li>задачи</li>\n          <li>методы осуществления передачи данных</li>\n          <li>интерфейсы и внешний вид приложения</li>\n          <li>графический дизайн</li>\n          <li>сроки</li>\n        </ul>\n        <p>После подписания технического задания происходит создание API приложения (серверной части) и написание клиента в виде front-end части. Далее происходит тестирование и отладка.</p>\n\n        <h4>\n          Почему необходимо веб-приложение?\n        </h4>\n        <p>Веб-приложение необходимо для упрощения бизнес-логики предприятия. Мы создаем быстрые и качественные веб-приложения, которые помогут Вам упростить управление Вашей компанией. С помощью веб-приложений вы сможите создавать мгновенные отчеты, давать и проверять задачи сотрудникам и вывести уровень компании на новый уровень.</p>",icon:"",price:null,active:!0},{title:"Разработка парсера",slug:"razrabotka-parsera",description:"\n        <h4>\n          Что такое парсинг?\n        </h4>\n        <p><strong>Парсинг</strong> – это процесс получения данных любого сайта в сети Интернет.</p>\n\n        <p>Объектом парсинга может быть справочник, интернет-магазин, форум, блог и абсолютно любой интернет-ресурс.</p>\n\n        <p>Парсинг сайтов – это самый лучший способ автоматизировать процесс сбора и сохранения информации. Благодаря парсеру можно создавать и обновлять сайты, схожие по оформлению, содержанию и структуре.</p>\n\n        <p>Проще говоря, парсить можно почти все, в зависимости от того, чем вы пользуетесь, и насколько защищен сайт или ресурс, с которого будете парсить.</p>\n\n        <h4>Получите необходимую информацию о ресурсе</h4>\n        <ul>\n          <li>Изображения</li>\n          <li>URL</li>\n          <li>Название товара</li>\n          <li>Уникальный идентификатор товара</li>\n          <li>Цены</li>\n          <li>Товары</li>\n          <li>Статьи</li>\n          <li>и многое другое...</li>\n        </ul>\n        <h4>Для чего это нужно?</h4>\n        <ul>\n          <li>Получение информации о количестве товара, предлагаемых услугах, ценах и акциях конкурентов или партнеров</li>\n          <li>Экономия времени на сбор и обработку информации</li>\n          <li>Извлечение информации со сторонних источников позволит экономить время на обновлении контента на вашем сайте</li>\n          <li>Работа парсера в автоматическом режиме</li>\n        </ul>",icon:"",price:"от 5900 руб.",active:!0}].find((function(n){return n.slug.toLowerCase()===t.slug})))){e.next=5;break}return e.abrupt("return",{title:r.title,description:r.description,price:r.price});case 5:l("/");case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{showModal:!1,formIsSuccessSended:!1,formSuccessMessage:""}},mounted:function(){},methods:{formSended:function(n){this.formIsSuccessSended=!0,this.formSuccessMessage=n},modalCloseEmitted:function(){this.showModal=!1},modalClose:function(){this.showModal=!1,document.body.classList.remove("modal-open")}}}),o=t(27),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"mb-10"},[t("h2",{staticClass:"flex justify-between md:items-center mb-6 flex-col md:flex-row"},[t("span",{staticClass:"font-medium text-lg mb-3"},[n._v(n._s(n.title))]),n._v(" "),t("div",{staticClass:"flex md:items-center flex-col md:flex-row"},[n.price?t("p",{staticClass:"font-bold md:mr-10 mb-2"},[n._v("\n          Цена: "+n._s(n.price)+"\n        ")]):n._e(),n._v(" "),t("button",{staticClass:"inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 rounded focus:outline-none hover:bg-blue-50",attrs:{type:"button"},on:{click:function(e){n.showModal=!0}}},[n._v("\n          Заказать услугу\n        ")])])]),n._v(" "),t("div",{staticClass:"content",domProps:{innerHTML:n._s(n.description)}})]),n._v(" "),n.showModal?t("v-modal",{on:{modalclose:n.modalCloseEmitted}},[n.formIsSuccessSended?t("h4",{staticClass:"text-2xl text-center mb-5 text-green-600"},[n._v(n._s(n.formSuccessMessage))]):[t("h3",{staticClass:"mb-5 text-3xl text-center"},[n._v("Заказать услугу")]),n._v(" "),t("Form",{attrs:{service:n.title},on:{"form-sended":n.formSended}})]],2):n._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VModal:t(251).default})}}]);