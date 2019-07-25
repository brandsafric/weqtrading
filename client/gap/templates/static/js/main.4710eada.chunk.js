(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,a,t){e.exports=t(378)},377:function(e,a,t){},378:function(e,a,t){"use strict";t.r(a);var l={};t.r(l),t.d(l,"home_page",function(){return i}),t.d(l,"contact_page",function(){return u}),t.d(l,"about_page",function(){return E}),t.d(l,"login_page",function(){return d}),t.d(l,"logout_page",function(){return f}),t.d(l,"signup_page",function(){return b}),t.d(l,"forget_password_page",function(){return g}),t.d(l,"download_page",function(){return p}),t.d(l,"profile_page",function(){return N}),t.d(l,"music_page",function(){return v}),t.d(l,"videos_page",function(){return h}),t.d(l,"blog_page",function(){return x}),t.d(l,"my_music_page",function(){return _}),t.d(l,"my_videos_page",function(){return y}),t.d(l,"admin_page",function(){return F}),t.d(l,"dashboard_page",function(){return w});t(156);var n=t(0),r=t.n(n),c=t(152),m=t.n(c),o=t(8),s=t(41),i="/",u="/contact",E="/about",d="/login",f="/logout",b="/signup",g="/forget",p="/download",N="/profile",v="/music",h="/videos",x="/blog",_="/music/user/",y="/videos/user/",F="/admin/user/",w="/dashboard",B=t(27),C=t(40),M={userid:"",email:"",names:"",isLoggedIn:!1},k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"sidebar-menu"},r.a.createElement("li",{className:"header"},"B-Feather"),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.home_page,title:"Big feather Music Portal"},r.a.createElement("i",{className:"fa fa-home"})," ",r.a.createElement("strong",null,"Home"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.about_page,title:"About"},r.a.createElement("i",{className:"fa fa-info"})," ",r.a.createElement("strong",null,"About"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.contact_page,title:"Contact Us"},r.a.createElement("i",{className:"fa fa-envelope"})," ",r.a.createElement("strong",null,"Contact"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.blog_page,title:"Big Feather Blog"},r.a.createElement("i",{className:"fa fa-book"}," ")," ",r.a.createElement("strong",null,"Blog"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.music_page,title:"Big Feather Music Portal"},r.a.createElement("i",{className:"fa fa-soundcloud"}," ")," ",r.a.createElement("strong",null,"Music"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.videos_page,title:"Big Feather Music Videos Portal"},r.a.createElement("i",{className:"fa fa-youtube"}," ")," ",r.a.createElement("strong",null,"Videos"))),r.a.createElement("li",{className:"active treeview"},r.a.createElement(o.b,{to:"#"},r.a.createElement("i",{className:"fa fa-user-md"})," ",r.a.createElement("span",null,"Client Area"),r.a.createElement("span",{className:"pull-right-container"},r.a.createElement("i",{className:"fa fa-angle-left pull-right"}))),r.a.createElement("ul",{className:"treeview-menu"},r.a.createElement("li",null,r.a.createElement(o.b,{to:l.profile_page,title:"Manage your Account"},r.a.createElement("i",{className:"fa fa-sign-in"}," ")," ",r.a.createElement("strong",null," Account (Profile) ")," ")," "),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.my_music_page,title:"Manage Your Music"},r.a.createElement("i",{className:"fa fa-soundcloud"}," ")," ",r.a.createElement("strong",null," My Music"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.my_videos_page,title:"Manage Your Music Videos"},r.a.createElement("i",{className:"fa fa-youtube"}," ")," ",r.a.createElement("strong",null," My Videos"))))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.logout_page,title:"logout"},r.a.createElement("i",{className:"fa fa-sign-out"}," ")," Logout ")),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.dashboard_page,title:"Dashboard"},r.a.createElement("i",{className:"fa fa-dashboard"}," ")," ",r.a.createElement("strong",null,"Dashboard")))))},S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"sidebar-menu"},r.a.createElement("li",{className:"header"},"B-Feather"),r.a.createElement("li",{className:"active treeview"},r.a.createElement("ul",{className:"treeview-menu"},r.a.createElement("li",null,r.a.createElement(o.b,{to:l.home_page,title:"Big feather Music Portal"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.about_page,title:"About Us"},r.a.createElement("i",{className:"fa fa-info"})," About")),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.contact_page,title:"Contact Us"},r.a.createElement("i",{className:"fa fa-envelope"})," Contact")),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.blog_page,title:"Big Feather Blog"},r.a.createElement("i",{className:"fa fa-book"}," ")," ",r.a.createElement("strong",null,"Blog"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.music_page,title:"Big Feather Music Portal"},r.a.createElement("i",{className:"fa fa-soundcloud"}," ")," ",r.a.createElement("strong",null,"Music"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.videos_page,title:"Big Feather Music Videos Portal"},r.a.createElement("i",{className:"fa fa-youtube"}," ")," ",r.a.createElement("strong",null,"Videos"))),r.a.createElement("li",null,r.a.createElement(o.b,{to:l.login_page,title:"Login to Big Feather"},r.a.createElement("i",{className:"fa fa-sign-in"}," ")," Login "))))))};function j(e){var a=Object(n.useReducer)(function(e,a){switch(a.type){case"load_state":default:return e}},{user:Object(B.a)({},M)}),t=Object(C.a)(a,2),l=t[0];t[1];return r.a.createElement(n.Fragment,null,l.user.isLoggedIn?r.a.createElement(k,null):r.a.createElement(S,null))}var A=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"main-header"},r.a.createElement(o.b,{to:l.home_page,className:"logo"},r.a.createElement("span",{className:"logo-mini"},r.a.createElement("b",null,"B"),"-F"),r.a.createElement("span",{className:"logo-lg"},r.a.createElement("b",null,"Big")," Feather")),r.a.createElement("nav",{className:"navbar navbar-static-top"},r.a.createElement("a",{to:"#",className:"sidebar-toggle","data-toggle":"offcanvas","data-target":"sidebar-menu",role:"button",onClick:void 0},r.a.createElement("span",{className:"sr-only"},"B-Feather"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})))))};function D(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-music"}," ")," Big Feather Music Portal ")))))}function O(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-info"}," ")," About")))))}function P(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-envelope"}," ")," Contact"))),r.a.createElement("div",{className:"box-footer"},r.a.createElement("form",{className:"form-horizontal",onSubmit:function(e){return function(e){e.preventDefault(),console.log("Submitting Contact Form")}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"names",placeholder:"Names"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"surname",placeholder:"Surname"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"cell",placeholder:"Cell"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"subject",placeholder:"Subject"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"message",placeholder:"Message...",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-success btn-block btn-lg"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-send"}," ")," Send Message")))))))}function L(){function e(e){e.preventDefault(),console.log("Updating Account Details")}return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Account Details")),r.a.createElement("form",{className:"form-horizontal",onSubmit:function(a){return e(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-warning btn-lg",name:"update",onClick:function(a){return e(a)}},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-plus"}," ")," Update "))))))}function U(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("i",{className:"fa fa-user"}," ")," Personal Details")),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"names",placeholder:"Names"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"surname",placeholder:"Surname"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"cell",placeholder:"Cell"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-warning btn-lg",name:"update"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-plus"}," ")," Update"))))))}function V(){var e=Object(n.useReducer)(function(e,a){switch(a.type){case"account-details":return Object(B.a)({},e,{load_profile_cmp:"account-details"});case"personal-details":return Object(B.a)({},e,{load_profile_cmp:"personal-details"});default:return e}},{load_profile_cmp:"account-details"}),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-secret"}," ")," User Profile ")),r.a.createElement("div",{className:"box-tools"},r.a.createElement("button",{type:"button",className:"btn btn-box-tool",name:"accountDetails",onClick:function(e){return l({type:"account-details"})}},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Account Details ")),r.a.createElement("button",{type:"button",className:"btn btn-box-tool",name:"personalDetails",onClick:function(e){return l({type:"personal-details"})}},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user"}," ")," Personal Details")))),r.a.createElement("div",{className:"box-footer"},"account-details"===t.load_profile_cmp?r.a.createElement(L,null):"","personal-details"===t.load_profile_cmp?r.a.createElement(U,null):"")))}function z(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-sign-in"}," ")," Login User "))),r.a.createElement("div",{className:"box-footer"},r.a.createElement("form",{className:"form-horizontal",onSubmit:function(e){return function(e){e.preventDefault(),console.log("Handling Submit form")}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"loginName",placeholder:"Login Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-sign-in"}," ")," Login ")),r.a.createElement("button",{type:"reset",className:"btn btn-primary btn-lg"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-eraser"}," ")," Cancel ")),r.a.createElement(o.b,{to:l.forget_password_page},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-unlock"}," ")," Forget Password "))))))))}function I(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-sign-out"}," ")," Logout"))),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-danger",name:"logout",onClick:function(e){return function(e){e.preventDefault(),console.log("Login Out of Big Feather")}(e)}},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-sign-out"}," ")," Logout "))))))}function R(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},"Signup")),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Surname"),r.a.createElement("input",{type:"text",className:"form-control",name:"surname",value:""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Cell"),r.a.createElement("input",{type:"text",className:"form-control",name:"cell",value:""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"text",className:"form-control",name:"password",value:""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg",name:"singup"},r.a.createElement("strong",null," Subscribe"))))))}function H(){return r.a.createElement(n.Fragment,null,r.a.createElement("aside",{className:"main-sidebar"},r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{className:"user-panel"},r.a.createElement("div",{className:"pull-left image"},r.a.createElement("img",{src:"/static/dist/img/sms.jpeg",id:"strSideUserImageID",className:"img-circle",alt:"Big-Feather"})),r.a.createElement("div",{className:"pull-left info"},r.a.createElement("p",{id:"strSideUserNameID"},r.a.createElement(o.b,{to:l.login_page},"Please Login")))),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log("Searching site...")}(e)},method:"get",className:"sidebar-form"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",name:"q",className:"form-control",placeholder:"Search..."}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",name:"search",id:"search-btn",className:"btn btn-flat"},r.a.createElement("i",{className:"fa fa-search"}))))),r.a.createElement("ul",{className:"sidebar-menu"},r.a.createElement(j,null)))))}function J(){return r.a.createElement("div",{className:"box box-footer with-border"},r.a.createElement("footer",{className:"main-footer"},r.a.createElement("div",{className:"pull-right hidden-xs"},r.a.createElement("b",null,"Big Feather ")," ",r.a.createElement("a",{href:"#"}," Music Portal")),r.a.createElement("div",{className:"pull-left hidden-xs"},r.a.createElement("strong",null,"Copyright \xa9 2019 ",r.a.createElement("a",{href:"#"},"Big Feather"),"."))," All rights reserved"))}function W(){function e(e){e.preventDefault(),console.log("Sending Recovery Email")}return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box-header"},r.a.createElement("h3",{className:"box-title"}," ",r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-key"}," ")," Forget Password")," ")),r.a.createElement("div",{className:"box box-footer"},r.a.createElement("form",{className:"form-horizontal",onSubmit:function(a){return e(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("span",null,"Enter your username so what we can send you a password recovery message")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg",onClick:function(a){return e(a)}},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-unlock-alt"}," ")," Send Recovery Email")),r.a.createElement("button",{type:"reset",className:"btn btn-warning btn-lg"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-eraser"}," ")," Cancel ")))))))}function Y(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Artists  ")))))}function q(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-folder-o"}," ")," Albums ")))))}function $(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-music"}," ")," Songs(Mp3) ")))))}function G(){var e=Object(n.useReducer)(function(e,a){switch(a.type){case"artists":return Object(B.a)({},e,{load_music_cmp:"artists"});case"albums":return Object(B.a)({},e,{load_music_cmp:"albums"});case"songs":return Object(B.a)({},e,{load_music_cmp:"songs"});default:return e}},{load_music_cmp:"artists"}),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-soundcloud"}," ")," Music ")),r.a.createElement("div",{className:"box-tools"},r.a.createElement("button",{className:"btn btn-box-tool",onClick:function(e){return l({type:"artists"})}}," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Artists"),r.a.createElement("button",{className:"btn btn-box-tool",onClick:function(e){return l({type:"albums"})}}," ",r.a.createElement("i",{className:"fa fa-folder-o"}," ")," Albums"),r.a.createElement("button",{className:"btn btn-box-tool",onClick:function(e){return l({type:"songs"})}}," ",r.a.createElement("i",{className:"fa fa-music"}," ")," Songs(Mp3)"))),"artists"===t.load_music_cmp?r.a.createElement(Y,null):"","albums"===t.load_music_cmp?r.a.createElement(q,null):"","songs"===t.load_music_cmp?r.a.createElement($,null):""))}function K(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Artists ")))))}function Q(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-footer"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strog",null," ",r.a.createElement("i",{className:"fa fa-youtube-play"}," ")," Music Videos ")))))}function T(){var e=Object(n.useReducer)(function(e,a){switch(a.type){case"artists":return Object(B.a)({},e,{load_videos_cmp:"artists"});case"videos":return Object(B.a)({},e,{load_videos_cmp:"videos"});default:return e}},{load_videos_cmp:"artists"}),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-youtube"}," ")," Videos ")),r.a.createElement("div",{className:"box-tools"},r.a.createElement("button",{className:"btn btn-box-tool",onClick:function(e){return l({type:"artists"})}}," ",r.a.createElement("i",{className:"fa fa-user-md"}," ")," Artists"),r.a.createElement("button",{className:"btn btn-box-tool",onClick:function(e){return l({type:"videos"})}}," ",r.a.createElement("i",{className:"fa fa-folder-o"}," ")," Videos"))),"artists"===t.load_videos_cmp?r.a.createElement(K,null):"","videos"===t.load_videos_cmp?r.a.createElement(Q,null):""))}function X(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box box-body"},r.a.createElement("div",{className:"box box-header"},r.a.createElement("h3",{className:"box-title"},r.a.createElement("strong",null," ",r.a.createElement("i",{className:"fa fa-book"}," ")," Blog ")))))}t(377),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(function(){return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(A,null),r.a.createElement(H,null),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("section",{className:"content-header"},r.a.createElement("section",{className:"content"},r.a.createElement(s.a,{exact:!0,path:l.home_page,component:D}),r.a.createElement(s.a,{exact:!0,path:l.about_page,component:O}),r.a.createElement(s.a,{exact:!0,path:l.contact_page,component:P}),r.a.createElement(s.a,{exact:!0,path:l.blog_page,component:X}),r.a.createElement(s.a,{exact:!0,path:l.music_page,component:G}),r.a.createElement(s.a,{exact:!0,path:l.videos_page,component:T}),r.a.createElement(s.a,{exact:!0,path:l.login_page,component:z}),r.a.createElement(s.a,{exact:!0,path:l.logout_page,component:I}),r.a.createElement(s.a,{exact:!0,path:l.signup_page,component:R}),r.a.createElement(s.a,{exact:!0,path:l.forget_password_page,component:W}),r.a.createElement(s.a,{exact:!0,path:l.profile_page,component:V})))),r.a.createElement(J,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,1,2]]]);
//# sourceMappingURL=main.4710eada.chunk.js.map