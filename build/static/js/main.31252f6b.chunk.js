(this["webpackJsonpdarly-sol"]=this["webpackJsonpdarly-sol"]||[]).push([[0],{59:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(59),n(35)),o=(n(60),n(70),n(63),n(101)),l=n(106),d=n(105),u=n(30),j=n(13),h=n(8);s.a.initializeApp({apiKey:"AIzaSyD9I3Y90q6rWsdnbMpQyaNA33vcRiP1VnI",authDomain:"test-darly-auth-react.firebaseapp.com",databaseURL:"https://test-darly-auth-react-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-darly-auth-react",storageBucket:"test-darly-auth-react.appspot.com",messagingSenderId:"659989739444",appId:"1:659989739444:web:11703fbe46214fb7eba4e1"});var b=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var p=function(){var e=b();return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(u.b,{to:"/page",children:"Page"}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/singin",children:Object(h.jsx)(n,{})}),Object(h.jsx)(j.a,{path:"/reguser",children:Object(h.jsx)(a,{})}),Object(h.jsx)(j.a,{path:"/page",children:Object(h.jsx)(t,{})})]})]})})});function t(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Welcome to My Awesome App"}),Object(h.jsx)(u.b,{to:"/singin",children:"Sign up"}),Object(h.jsx)("p",{children:"or"}),Object(h.jsx)(u.b,{to:"/reguser",children:"Registration"})]})}function n(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)("h3",{children:"Sign up"}),Object(h.jsx)(d.a,{id:"loginemail",label:"Enter you email:"}),Object(h.jsx)(d.a,{id:"loginpass",label:"Enter you pass:"})]}),Object(h.jsxs)("div",{className:"WrapperButton",children:[Object(h.jsx)(l.a,{variant:"contained",color:"primary",onClick:r,children:"Log in"}),Object(h.jsx)(l.a,{variant:"outlined",color:"primary",onClick:i,children:"Log out"}),Object(h.jsx)("p",{children:"or"}),Object(h.jsx)(u.b,{to:"/reguser",children:"Registration"})]})]})}function a(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)("h3",{children:"Registration"}),Object(h.jsx)(d.a,{id:"registeremail",label:"Enter you email:"}),Object(h.jsx)(d.a,{id:"registerpass",label:"Enter you pass:"})]}),Object(h.jsxs)("div",{className:"WrapperButton",children:[Object(h.jsx)(l.a,{variant:"contained",color:"primary",onClick:c,children:"Check in"}),Object(h.jsx)("p",{children:"or"}),Object(h.jsx)(u.b,{to:"/singin",children:"Sign up"})]})]})}function c(){var e=document.querySelector("#registeremail").value,t=document.querySelector("#registerpass").value;s.a.auth().signOut(),s.a.auth().createUserWithEmailAndPassword(e,t)}function r(){var e=document.querySelector("#loginemail").value,t=document.querySelector("#loginpass").value;s.a.auth().signInWithEmailAndPassword(e.trim(),t).then((function(e){var t=e.user;console.log("Congratulation Register & Authorized user: ".concat(t.email," ! You accese to this page"))})).catch((function(e){var t=e.code,n=e.message;console.log("Wrong ".concat(t," ").concat(n))})),document.querySelector("form").reset()}function i(){s.a.auth().signOut().then((function(){console.log("Sign-out successful.")})).catch((function(e){console.log("An error happened.")}))}},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),g()}},[[69,1,2]]]);
//# sourceMappingURL=main.31252f6b.chunk.js.map