(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{gHPf:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),i=n("eHHv"),o=n("Bl7J"),r=n("CCtv"),u=n("zLVn"),l=n("dI71"),c=n("puyr"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editText:n.props.message.text}}))},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.authUser,n=e.message,a=e.onRemoveMessage,i=this.state,o=i.editMode,r=i.editText;return s.a.createElement("li",null,o?s.a.createElement("input",{type:"text",value:r,onChange:this.onChangeEditText}):s.a.createElement("span",null,s.a.createElement("strong",null,n.userId)," ",n.text,n.editedAt&&s.a.createElement("span",null,"(Edited)")),t.uid===n.userId&&s.a.createElement("span",null,o?s.a.createElement("span",null,s.a.createElement("button",{onClick:this.onSaveEditText},"Save"),s.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):s.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!o&&s.a.createElement("button",{type:"button",onClick:function(){return a(n.uid)}},"Delete")))},t}(a.Component),m=function(e){var t=e.authUser,n=e.messages,a=e.onEditMessage,i=e.onRemoveMessage;return s.a.createElement("ul",null,n.map((function(e){return s.a.createElement(d,{authUser:t,key:e.uid,message:e,onEditMessage:a,onRemoveMessage:i})})))},g=function(e){function t(t){var n;return(n=e.call(this,t)||this)._initFirebase=!1,n.firebaseInit=function(){n.props.firebase&&!n._initFirebase&&(n._initFirebase=!0,n.onListenForMessages())},n.onListenForMessages=function(){n.setState({loading:!0}),n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.state.limit).on("value",(function(e){var t=e.val();if(t){var a=Object.keys(t).map((function(e){return Object.assign({},t[e],{uid:e})}));n.setState({messages:a,loading:!1})}else n.setState({messages:null,loading:!1})}))},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){e.uid;var a=Object(u.a)(e,["uid"]);n.props.firebase.message(e.uid).set(Object.assign({},a,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.setState((function(e){return{limit:e.limit+5}}),n.onListenForMessages)},n.state={text:"",loading:!1,messages:[],limit:5},n}Object(l.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.firebaseInit()},n.componentDidUpdate=function(){this.firebaseInit()},n.componentWillUnmount=function(){this.props.firebase.messages().off()},n.render=function(){var e=this,t=this.state,n=t.text,a=t.messages,i=t.loading;return s.a.createElement(r.a.Consumer,null,(function(t){return s.a.createElement("div",null,!i&&a&&s.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),i&&s.a.createElement("div",null,"Loading ..."),a&&s.a.createElement(m,{authUser:t,messages:a,onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!a&&s.a.createElement("div",null,"There are no messages ..."),s.a.createElement("form",{onSubmit:function(n){return e.onCreateMessage(n,t)}},s.a.createElement("input",{type:"text",value:n,onChange:e.onChangeText}),s.a.createElement("button",{type:"submit"},"Send")))}))},t}(a.Component),p=Object(c.c)(g),f=Object(i.a)(r.c,Object(r.b)((function(e){return!!e})))((function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Home Page"),s.a.createElement("p",null,"The Home Page is accessible by every signed in user."),s.a.createElement(p,null))}));t.default=function(){return s.a.createElement(o.a,null,s.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-home-js-0f8422d43699f3be08ff.js.map