(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(24),i=n.n(a),s=n(7),u=n(17),o=n(5),j=n(8),b=n.n(j),l=n(13),d=n(15);n(32),n(44),n(45);d.a.initializeApp({apiKey:"AIzaSyA1iEw7MsrhJfrjtgv2J3SbtaIvKUxQrRw",authDomain:"nwitter-5f6dc.firebaseapp.com",projectId:"nwitter-5f6dc",storageBucket:"nwitter-5f6dc.appspot.com",messagingSenderId:"156566718182",appId:"1:156566718182:web:5f350b02e73cc461179d27"});var p=d.a,O=d.a.auth(),h=d.a.firestore(),f=d.a.storage(),x=n(1),m=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(""),d=Object(s.a)(j,2),p=d[0],h=d[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?o(r):"password"===n&&h(r)},y=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!n){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(u,p);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(u,p);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:u,onChange:w}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:p,onChange:w}),Object(x.jsx)("input",{type:"submit",value:n?"Create Account":"Log in"}),v]}),Object(x.jsx)("span",{onClick:function(){return c((function(e){return!e}))},children:n?"Sign In":"Create Account"})]})},v=function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"google"===(n=t.target.name)?r=new p.auth.GoogleAuthProvider:"github"===n&&(r=new p.auth.GithubAuthProvider),O.signInWithPopup(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(x.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},g=n(19),w=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],p=j[1],O=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,f.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},value:d,required:!0}),Object(x.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(x.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:O,children:"Delete Nweet"}),Object(x.jsx)("button",{onClick:m,children:"Edit Nweet"})]})," "]})})},y=n(47),S=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],d=o[1],p=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return c=f.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=6,c.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,h.collection("nweets").add({text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r});case 12:i(""),d("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,children:[Object(x.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(x.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:j,width:"50px",height:"50px"}),Object(x.jsx)("button",{onClick:function(){return d("")},children:"Clear"})]})]})},k=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{userObj:t}),Object(x.jsx)("div",{children:a.map((function(e){return Object(x.jsx)(w,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.userObj,n=e.refreshUser,c=Object(r.useState)([]),a=Object(s.a)(c,2),i=a[0],u=a[1],j=Object(r.useState)(t.displayName),d=Object(s.a)(j,2),p=d[0],f=d[1],m=Object(o.f)(),v=function(){var e=Object(l.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===p){e.next=5;break}return e.next=4,t.updateProfile({displayName:p});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));u(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){y()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"Display name",value:p}),Object(x.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(x.jsx)("button",{onClick:function(){O.signOut(),m.push("/")},children:"Log Out"}),Object(x.jsx)("div",{children:i.map((function(e){return Object(x.jsx)(w,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(u.b,{to:"/",children:"Home"})}),Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:t.photoURL,width:"25px",height:"25px"}),Object(x.jsxs)(u.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})]})]})})},I=function(e){var t=e.isLoggedIn,n=e.userObj,r=e.refreshUser;return Object(x.jsxs)(u.a,{children:[t&&Object(x.jsx)(U,{userObj:n}),Object(x.jsx)(o.c,{children:t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(k,{userObj:n})}),Object(x.jsx)(o.a,{exact:!0,path:"/profile",children:Object(x.jsx)(C,{refreshUser:r,userObj:n})})]}):Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(v,{})})})]})};var A=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(s.a)(a,2),u=i[0],o=i[1];Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){j(),c(!0)}))}),[]);var j=function(){var e=O.currentUser;Boolean(e)?o({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}}):o(null)};return Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(I,{refreshUser:j,isLoggedIn:Boolean(u),userObj:u}):"initializing..."})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ea82eb88.chunk.js.map