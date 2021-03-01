(function(t){function e(e){for(var s,r,c=e[0],a=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,c=1;c<o.length;c++){var a=o[c];0!==n[a]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-posts/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"mt-3 mb-5 text-center"},[o("h1",{staticClass:"is-size-1"},[t._v("Posts")]),o("div",{staticClass:"m-3"},[t.posts.length<1?o("p",[t._v("No posts yet!")]):o("post-form",{class:{"is-active":t.isCreating},attrs:{post:t.newPost,"form-title":"Create new post",editing:!1},on:{"close:modal":function(e){t.isCreating=!1},"add:post":t.addPost}}),o("button",{staticClass:"button is-link",on:{click:function(e){t.isCreating=!0}}},[t._v("Create post")])],1)]),o("div",{staticClass:"container"},[o("posts",{attrs:{posts:t.posts},on:{"delete:post":t.deletePost}})],1)])},i=[],r=(o("4de4"),o("d81d"),o("fb6a"),o("bc3a")),c=o.n(r),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.posts,(function(e){return o("div",{key:e.id},[o("post",{attrs:{post:e},on:{"delete:post":function(o){return t.$emit("delete:post",e.id)}}})],1)})),0)},l=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card p-4 mb-3"},[o("h3",[t._v(t._s(t.post.title))]),o("p",[t._v(t._s(t.post.body))]),o("div",{staticClass:"d-flex justify-content-end"},[o("button",{staticClass:"button is-warning mr-3",on:{click:function(e){return t.setEditMode(t.post)}}},[t._v(" Edit ")]),o("button",{staticClass:"button is-danger is-light",on:{click:function(e){return t.$emit("delete:post",t.post.id)}}},[t._v(" Delete ")])]),o("post-form",{class:{"is-active":null!==t.editMode},attrs:{post:t.post,"form-title":"Edit post",editing:null!==t.editMode},on:{"edit:post":t.editPost}})],1)},u=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal"},[o("div",{staticClass:"modal-background"}),o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.formTitle))]),t.editing?o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.cancelEditing()}}}):o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.cancel}})]),o("section",{staticClass:"modal-card-body"},[t.error?o("p",{staticClass:"text-danger"},[t._v("Please, fill all the fields!")]):t._e(),o("form",[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.post.title},on:{focus:function(e){t.error=!1},input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{cols:"30",rows:"5",placeholder:"Post body..."},domProps:{value:t.post.body},on:{focus:function(e){t.error=!1},input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),o("footer",{staticClass:"modal-card-foot is-justify-content-end"},[t.editing?o("button",{staticClass:"button is-success",on:{click:function(e){return t.saveChanges(t.post)}}},[t._v("Save Changes")]):o("button",{staticClass:"button is-success",on:{click:function(e){return t.addPost(t.post)}}},[t._v("Add")]),t.editing?o("button",{staticClass:"button",on:{click:function(e){return t.cancelEditing()}}},[t._v("Cancel")]):o("button",{staticClass:"button",on:{click:t.cancel}},[t._v("Cancel")])])])])},f=[],h={name:"post-form",props:{formTitle:{required:!0,type:String},post:{required:!0,type:Object},editing:{required:!0,type:Boolean}},data:function(){return{cachedPost:null,error:!1}},methods:{cancel:function(){this.$emit("close:modal")},cancelEditing:function(){this.$emit("edit:post",this.cachedPost),this.cachedPost=null},saveChanges:function(t){""!==t.title&&""!==t.body?(this.$emit("edit:post",t),this.cachedPost=null):this.error=!0},addPost:function(t){""!==t.title&&""!==t.body?this.$emit("add:post",t):this.error=!0}},created:function(){this.cachedPost=Object.assign({},this.post)}},m=h,v=o("2877"),b=Object(v["a"])(m,p,f,!1,null,"d7b7d2b8",null),g=b.exports,y={name:"post",components:{PostForm:g},props:["post"],data:function(){return{editMode:null}},methods:{setEditMode:function(t){this.editMode=t.id},editPost:function(t){this.$emit("edit:post",t),this.editMode=null}}},C=y,P=Object(v["a"])(C,d,u,!1,null,"332bfcf3",null),_=P.exports,j={name:"posts",components:{Post:_},props:{posts:{required:!0}}},w=j,x=Object(v["a"])(w,a,l,!1,null,null,null),O=x.exports,k={name:"App",components:{Posts:O,PostForm:g},data:function(){return{posts:[],newPost:{title:"",body:""},isCreating:!1}},methods:{deletePost:function(t){c.a.delete("https://jsonplaceholder.typicode.com/posts/".concat(t)).then((function(){return console.log("deleted")})).catch((function(t){return console.log(t)})),this.posts=this.posts.filter((function(e){return e.id!==t}))},editPost:function(t){c.a.put("https://jsonplaceholder.typicode.com/posts/".concat(t.id),t).then((function(){return console.log("edited")})).catch((function(t){return console.log(t)})),this.posts=this.posts.map((function(e){return e.id===t.id?t:e}))},addPost:function(t){var e=this;c.a.post("https://jsonplaceholder.typicode.com/posts",t).then((function(t){return e.posts.unshift(t.data)})).catch((function(t){return console.log(t)})),this.newPost={title:"",body:""},this.isCreating=!1}},created:function(){var t=this;c.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t.posts=e.data.slice(0,10)})).catch((function(t){return console.log(t)}))}},$=k,E=(o("034f"),Object(v["a"])($,n,i,!1,null,null,null)),M=E.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.5759d447.js.map