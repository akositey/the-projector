(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7],{"+7iA":function(t,e,s){"use strict";s.r(e);var n=s("ungf"),r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"textarea-input-".concat(this._uid)}},value:String,label:String,error:String},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}},o=s("KHd+"),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("textarea",t._b({ref:"input",staticClass:"form-textarea",class:{error:t.error},attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$attrs,!1)),t._v(" "),t.error?s("div",{staticClass:"form-error"},[t._v(t._s(t.error))]):t._e()])}),[],!1,null,null,null).exports,a=s("gLH2"),l=s("3658"),u={components:{TextInput:n.a,TextareaInput:i,LoadingButton:a.a,Dropdown:l.a},props:{loading:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!1},form:{type:Object,default:function(){}},errors:{type:Object,default:function(){}}},data:function(){return{}}},c=Object(o.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[s("div",{staticClass:"grid md:grid-cols-2 gap-8 p-8"},[s("text-input",{staticClass:"w-full pb-4",attrs:{error:t.errors.code,label:"Code"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),t._v(" "),s("text-input",{staticClass:"w-full pb-4",attrs:{error:t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("text-input",{staticClass:"w-full pb-4",attrs:{type:"number",error:t.errors.budget,label:"Budget"},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}}),t._v(" "),s("textarea-input",{staticClass:"w-full pb-4 col-span-full",attrs:{error:t.errors.remarks,label:"Remarks"},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),t._v(" "),s("div",{staticClass:"flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200",class:t.showDelete?"justify-between":"justify-end"},[t.showDelete?s("dropdown",{scopedSlots:t._u([{key:"trigger",fn:function(){return[s("button",{staticClass:"btn-red",attrs:{tabindex:"-1",type:"button"}},[t._v("\n          Delete\n        ")])]},proxy:!0},{key:"content",fn:function(){return[s("button",{staticClass:"text-sm py-2 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-red-800",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete")}}},[t._v("\n          Confirm Delete\n        ")])]},proxy:!0}],null,!1,683085144)}):t._e(),t._v(" "),s("loading-button",{staticClass:"btn-indigo",attrs:{loading:t.loading,type:"submit"}},[t._v("\n      Save\n    ")])],1)])}),[],!1,null,null,null);e.default=c.exports},3658:function(t,e,s){"use strict";var n={props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},watch:{},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"==this.align?"origin-top-left left-0":"right"==this.align?"origin-top-right right-0":"origin-top"}}},r=s("KHd+"),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:" z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-md shadow-xs",class:t.contentClasses},[t._t("content")],2)])])}),[],!1,null,null,null);e.a=o.exports},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,r,o,i,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return n}))},Pkoe:function(t,e,s){"use strict";s.r(e);var n=s("hAWA"),r=s("+7iA"),o={components:{AppLayout:n.a,ProjectForm:r.default},props:{errors:{type:Object,default:function(){}}},data:function(){return{sending:!1,form:{code:null,name:null,budget:null,remarks:null}}},methods:{submit:function(){var t=this;console.log("submitted"),this.sending=!0,this.$inertia.post(this.route("projects.store"),this.form,{onFinish:function(){t.sending=!1}})}}},i=s("KHd+"),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("app-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n    Create Project\n  ")]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"w-full my-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg"},[s("project-form",{attrs:{form:t.form,errors:t.errors,loading:t.sending},on:{submit:t.submit}})],1)])}),[],!1,null,null,null);e.default=a.exports},gLH2:function(t,e,s){"use strict";var n={props:{loading:{type:Boolean,default:!1}}},r=s("KHd+"),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"flex items-center",attrs:{disabled:t.loading},on:{click:function(e){return t.$emit("click")}}},[t.loading?s("div",{staticClass:"mr-2 btn-spinner"}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},hAWA:function(t,e,s){"use strict";var n={props:["href","active","as","responsive"],computed:{classes:function(){return this.reponsive?this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out":this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}},r=s("KHd+"),o={data:function(){return{show:!0}},watch:{"$page.props.flash":{handler:function(){this.show=!0},deep:!0}},mounted:function(){}},i={components:{NavLink:Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return"button"==this.as?e("button",{staticClass:"w-full text-left",class:this.classes},[this._t("default")],2):e("inertia-link",{class:this.classes,attrs:{href:this.href}},[this._t("default")],2)}),[],!1,null,null,null).exports,FlashMessages:Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.$page.props.flash.success&&t.show?s("div",{staticClass:"flex items-center justify-between w-full mb-8 bg-green-500 rounded"},[s("div",{staticClass:"flex items-center"},[s("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-4 mr-2 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("polygon",{attrs:{points:"0 11 2 9 7 14 18 3 20 5 7 18"}})]),t._v(" "),s("div",{staticClass:"py-4 text-sm font-medium text-white"},[t._v("\n        "+t._s(t.$page.props.flash.success)+"\n      ")])]),t._v(" "),s("button",{staticClass:"p-2 mr-2 group",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[s("svg",{staticClass:"block w-2 h-2 fill-green-800 group-hover:text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908"}},[s("path",{attrs:{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"}})])])]):t._e(),t._v(" "),(t.$page.props.flash.error||Object.keys(t.$page.props.errors).length>0)&&t.show?s("div",{staticClass:"flex items-center justify-between w-full mb-8 bg-red-500 rounded"},[s("div",{staticClass:"flex items-center"},[s("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-4 mr-2 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"}})]),t._v(" "),t.$page.props.flash.error?s("div",{staticClass:"py-4 text-sm font-medium text-white"},[t._v("\n        "+t._s(t.$page.props.flash.error)+"\n      ")]):s("div",{staticClass:"py-4 text-sm font-medium text-white"},[1===Object.keys(t.$page.props.errors).length?s("span",[t._v("There is one form error.")]):s("span",[t._v("There are "+t._s(Object.keys(t.$page.props.errors).length)+" form errors.")])])]),t._v(" "),s("button",{staticClass:"p-2 mr-2 group",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[s("svg",{staticClass:"block w-2 h-2 fill-red-800 group-hover:text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908"}},[s("path",{attrs:{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"}})])])]):t._e()])}),[],!1,null,null,null).exports},data:function(){return{showDropdownNav:!1}},methods:{logout:function(){this.$inertia.post(this.route("logout"))}}},a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen bg-gray-100"},[s("nav",{staticClass:"bg-white border-b border-gray-50 shadow-md"},[s("div",{staticClass:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},[s("div",{staticClass:"flex justify-between h-16"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex items-center flex-shrink-0"},[s("inertia-link",{attrs:{href:t.route("projects.index")}},[s("span",{staticClass:"uppercase text-xs"},[t._v("The")]),t._v(" "),s("span",{staticClass:"btn-indigo-light px-1 py-1"},[t._v("Projector")])])],1),t._v(" "),s("div",{staticClass:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},[s("nav-link",{attrs:{href:t.route("projects.index"),active:"projects.index"==t.$page.props.currentRouteName}},[t._v("\n              Projects\n            ")])],1),t._v(" "),s("div",{staticClass:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},[s("nav-link",{attrs:{href:t.route("persons.index"),active:"persons.index"==t.$page.props.currentRouteName}},[t._v("\n              Persons\n            ")])],1)]),t._v(" "),s("div",{staticClass:"hidden sm:flex"},[s("div",{staticClass:"flex items-center justify-items-end pl-4"},[s("div",{staticClass:"ml-3"},[s("div",{staticClass:"text-base font-medium text-gray-800"},[t._v("\n                Welcome "+t._s(t.$page.props.user.name)+"!\n              ")])]),t._v(" "),s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[s("nav-link",{attrs:{as:"button"}},[t._v("\n                Logout\n              ")])],1)])]),t._v(" "),s("div",{staticClass:"flex items-center -mr-2 sm:hidden"},[s("button",{staticClass:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",on:{click:function(e){t.showDropdownNav=!t.showDropdownNav}}},[s("svg",{staticClass:"w-6 h-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{class:{hidden:t.showDropdownNav,"inline-flex":!t.showDropdownNav},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}}),t._v(" "),s("path",{class:{hidden:!t.showDropdownNav,"inline-flex":t.showDropdownNav},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),s("div",{staticClass:"sm:hidden",class:{block:t.showDropdownNav,hidden:!t.showDropdownNav}},[s("div",{staticClass:"py-4 space-y-1 px-4"},[s("nav-link",{attrs:{responsive:!0,href:t.route("projects.index"),active:"projects.index"==t.$page.props.currentRouteName}},[t._v("\n          Projects\n        ")])],1),t._v(" "),s("div",{staticClass:"py-4 space-y-1 px-4"},[s("nav-link",{attrs:{responsive:!0,href:t.route("persons.index"),active:"persons.index"==t.$page.props.currentRouteName}},[t._v("\n          Persons\n        ")])],1),t._v(" "),s("div",{staticClass:"py-4 space-y-1 px-4"},[s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[s("nav-link",{attrs:{responsive:!0,as:"button"}},[t._v("\n            Logout\n          ")])],1)])])]),t._v(" "),s("main",[s("div",{staticClass:"flex-1 max-w-6xl px-4 py-4 md:px-8 m-auto overflow-y-auto",attrs:{"scroll-region":""}},[s("header",[s("h1",{staticClass:"page-header"},[t._t("header")],2)]),t._v(" "),s("flash-messages"),t._v(" "),s("div",{staticClass:"container w-full mx-auto"},[t._t("default")],2)],1)])])}),[],!1,null,null,null);e.a=a.exports},ungf:function(t,e,s){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:function(){}},label:{type:String,default:function(){}},error:{type:String,default:function(){}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},r=s("KHd+"),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.error},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.error?s("div",{staticClass:"form-error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.a=o.exports}}]);
//# sourceMappingURL=2.js.map?id=8ed4436f5a92a4d785ef