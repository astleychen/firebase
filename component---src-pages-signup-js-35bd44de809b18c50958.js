(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HZzO:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var a=t("dI71"),r=t("q1tI"),o=t.n(r),s=t("Wbzz"),i=t("puyr"),u=t("oGAK"),c=t("Zs1j"),l={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},m=function(e){function n(n){var t;return(t=e.call(this,n)||this).onSubmit=function(e){var n=t.state,a=n.username,r=n.email,o=n.passwordOne,i=n.isAdmin,m={};i&&(m[c.a]=c.a),t.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return t.props.firebase.user(e.user.uid).set({username:a,email:r,roles:m})})).then((function(){return t.props.firebase.doSendEmailVerification()})).then((function(){t.setState(Object.assign({},l)),Object(s.c)(u.c)})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n"),t.setState({error:e})})),e.preventDefault()},t.onChange=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.onChangeCheckbox=function(e){var n;t.setState(((n={})[e.target.name]=e.target.checked,n))},t.state=Object.assign({},l),t}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.state,n=e.username,t=e.email,a=e.passwordOne,r=e.passwordTwo,s=e.isAdmin,i=e.error,u=a!==r||""===a||""===t||""===n;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{name:"username",value:n,onChange:this.onChange,type:"text",placeholder:"Full Name"}),o.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),o.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),o.a.createElement("input",{name:"passwordTwo",value:r,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),o.a.createElement("label",null,"Admin:",o.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:s,onChange:this.onChangeCheckbox})),o.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),i&&o.a.createElement("p",null,i.message))},n}(r.Component),h=function(){return o.a.createElement("p",null,"Don't have an account? ",o.a.createElement(s.a,{to:u.g},"Sign Up"))};n.b=Object(i.c)(m)},Wwxz:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),o=t("Bl7J"),s=t("HZzO"),i=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(s.b,null))};n.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i,null))}}}]);
//# sourceMappingURL=component---src-pages-signup-js-35bd44de809b18c50958.js.map