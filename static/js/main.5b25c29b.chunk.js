(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(23),i=n.n(a),s=n(8),u=n(17),o=n(5),j=n(10),b=n.n(j),l=n(14),d=n(15);n(32),n(44),n(45);d.a.initializeApp({apiKey:"AIzaSyA1iEw7MsrhJfrjtgv2J3SbtaIvKUxQrRw",authDomain:"nwitter-5f6dc.firebaseapp.com",projectId:"nwitter-5f6dc",storageBucket:"nwitter-5f6dc.appspot.com",messagingSenderId:"156566718182",appId:"1:156566718182:web:5f350b02e73cc461179d27"});var O=d.a,h=d.a.auth(),p=d.a.firestore(),x=d.a.storage(),f=n(1),g=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),p=d[0],x=d[1],g=Object(r.useState)(""),m=Object(s.a)(g,2),v=m[0],w=m[1],S=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},k=function(){var e=Object(l.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new O.auth.GoogleAuthProvider:"github"===n&&(r=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:k,children:[Object(f.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:S}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:S}),Object(f.jsx)("input",{type:"submit",value:p?"Create Account":"Log in"}),v]}),Object(f.jsx)("span",{onClick:function(){return x((function(e){return!e}))},children:p?"Sign In":"Create Account"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:C,name:"google",children:"Continue with Google"}),Object(f.jsx)("button",{onClick:C,name:"github",children:"Continue with Github"})]})]})},m=n(26),v=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],O=j[1],h=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,p.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return u((function(e){return!e}))},m=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:i?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},value:d,required:!0}),Object(f.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(f.jsx)("button",{onClick:g,children:"Cancel"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(f.jsx)("button",{onClick:g,children:"Edit Nweet"})]})," "]})})},w=n(47),S=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)([]),o=Object(s.a)(u,2),j=o[0],d=o[1],O=Object(r.useState)(""),h=Object(s.a)(O,2),g=h[0],S=h[1];Object(r.useEffect)((function(){p.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));d(t)}))}),[]);var k=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===g){e.next=10;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=6,c.putString(g,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,p.collection("nweets").add({text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r});case 12:i(""),S("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:k,children:[Object(f.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(f.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;S(t)},n.readAsDataURL(t)}}),Object(f.jsx)("input",{type:"submit",value:"Nweet"}),g&&Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:g,width:"50px",height:"50px"}),Object(f.jsx)("button",{onClick:function(){return S("")},children:"Clear"})]})]}),Object(f.jsx)("div",{children:j.map((function(e){return Object(f.jsx)(v,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},k=function(){var e=Object(o.f)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{onClick:function(){h.signOut(),e.push("/")},children:"Log Out"})})},C=function(){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/profile",children:"My Profile"})})]})})},y=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(f.jsxs)(u.a,{children:[t&&Object(f.jsx)(C,{}),Object(f.jsx)(o.c,{children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(S,{userObj:n})}),Object(f.jsx)(o.a,{exact:!0,path:"/profile",children:Object(f.jsx)(k,{})})]}):Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})})})]})};var I=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(h.currentUser),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(null),b=Object(s.a)(j,2),l=b[0],d=b[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){e?(o(e),d(e)):o(!1),c(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(y,{isLoggedIn:u,userObj:l}):"initializing..."})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5b25c29b.chunk.js.map