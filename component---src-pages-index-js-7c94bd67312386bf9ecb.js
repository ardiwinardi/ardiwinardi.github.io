(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5,6,7],{Fe8V:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("91GP");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J"),s=a("vrFN"),c=a("/MKj"),o=a("pmdI"),u=a("HPK8");function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={list:[],showDeleteModal:!1,selectedUser:null},a.handleDelete=a.handleDelete.bind(d(a)),a.hideDeleteModal=a.hideDeleteModal.bind(d(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.handleDelete=function(){this.props.dispatch(o.b.remove(this.state.selectedUser.id)),this.hideDeleteModal()},c.showDeleteModal=function(e){this.setState({selectedUser:e,showDeleteModal:!0})},c.hideDeleteModal=function(){this.setState({showDeleteModal:!1})},c.componentDidMount=function(){this.props.dispatch(o.b.getAll())},n.getDerivedStateFromProps=function(e,t){var a=t;if(e.user.list){var n=e.user.list;a=Object.assign({},a,{list:n})}return a},c.render=function(){var e=this,t=this.state.list;return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Menampilkan data user"}),l.a.createElement(u.Title,null,"User"),l.a.createElement(u.Subtitle,null,"Menampilkan data user"),l.a.createElement(u.Table,{isBordered:!0,isStriped:!0,isNarrow:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t.length>0&&t.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,l.a.createElement(r.a,{to:"/user/"+t.id+"/edit",className:"button is-light"},"Edit",l.a.createElement(u.Icon,{className:"fa fa-home fa-lg"}))," ",l.a.createElement(u.Button,{className:"button is-danger",onClick:function(){return e.showDeleteModal(t)}},"Delete")))})))),this.state.selectedUser&&l.a.createElement(u.Modal,{isActive:this.state.showDeleteModal},l.a.createElement(u.ModalBackground,null),l.a.createElement(u.ModalCard,null,l.a.createElement(u.ModalCardHeader,null,l.a.createElement(u.ModalCardTitle,null,"Hapus Data"),l.a.createElement(u.Delete,null)),l.a.createElement(u.ModalCardBody,null,"Hapus user ",this.state.selectedUser.name," ?"),l.a.createElement(u.ModalCardFooter,null,l.a.createElement(u.Button,{isColor:"danger",onClick:function(){return e.handleDelete()}},"Delete"),l.a.createElement(u.Button,{isColor:"warning",onClick:function(){return e.hideDeleteModal()}},"Cancel")))))},n}(n.Component);t.default=Object(c.connect)((function(e){return{user:e.user}}))(m)},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("YwZP"),i=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Wbzz")),s=a("X4fA");var c="undefined"!=typeof window,o=function(e){var t=e.component,a=e.location,n=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["component","location"]);return Object(s.b)()||"/login"===a.pathname?l.a.createElement(t,n):(c&&Object(i.b)("/login"),null)},u=a("Fe8V"),d=a("pk1y"),m=a("gHPf"),h=a("SGa5");t.default=function(){return l.a.createElement(r.Location,null,(function(e){e.location;return l.a.createElement(r.Router,{className:"router"},l.a.createElement(h.default,{path:"/login"}),l.a.createElement(o,{exact:!0,path:"/",component:m.default}),l.a.createElement(o,{path:"/user",component:u.default}),l.a.createElement(o,{path:"/user/:id/edit",component:d.default}))}))}},SGa5:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("91GP");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J"),s=a("vrFN"),c=a("/MKj"),o=a("pmdI"),u=a("HPK8");function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={data:{email:"",password:""}},a.handleChange=a.handleChange.bind(d(a)),a.handleSubmit=a.handleSubmit.bind(d(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.handleChange=function(e){var t,a=this.state.data;this.setState({data:Object.assign({},a,(t={},t[e.target.name]=e.target.value,t))})},c.handleSubmit=function(e){e.preventDefault();var t=this.state.data;this.props.dispatch(o.a.login(t))},c.render=function(){var e=this,t=this.state.data;return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Login Page"}),l.a.createElement("section",{class:"section hero"},l.a.createElement("div",{class:"hero-body"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"columns is-centered"},l.a.createElement("div",{class:"column is-two-fifths"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-content"},l.a.createElement("form",{method:"post",onSubmit:function(t){e.handleSubmit(t)}},l.a.createElement("div",{class:"field"},l.a.createElement("label",{class:"label"},"E-mail Address"),l.a.createElement("div",{class:"control is-clearfix"},l.a.createElement(u.Input,{type:"text",name:"email",value:t.email,onChange:this.handleChange,placeholder:"Email Address"}))),l.a.createElement("div",{class:"field"},l.a.createElement("label",{class:"label"},"Password"),l.a.createElement("div",{class:"control is-clearfix"},l.a.createElement(u.Input,{type:"password",name:"password",value:t.password,onChange:this.handleChange,placeholder:"Password"}))),l.a.createElement("hr",null),l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("div",{class:"control"},l.a.createElement(u.Button,{isColor:"primary",type:"submit"},"Login")),l.a.createElement("div",{class:"control"},l.a.createElement(r.a,{to:"/user",className:"button is-link"},"Back"))))))))))))},n}(n.Component);t.default=Object(c.connect)((function(e){return{user:e.user}}))(m)},gHPf:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J"),s=a("vrFN");t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Home Page"}),l.a.createElement("section",{class:"section is-fullheight"},l.a.createElement("h1",null,"Hi from the home Page"),l.a.createElement(r.a,{to:"/user"},"User")))}},pk1y:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("91GP");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J"),s=a("vrFN"),c=a("/MKj"),o=a("pmdI"),u=a("HPK8");function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={data:{name:"",email:""}},a.handleChange=a.handleChange.bind(d(a)),a.handleSubmit=a.handleSubmit.bind(d(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.handleChange=function(e){var t,a=this.state.data;this.setState({data:Object.assign({},a,(t={},t[e.target.name]=e.target.value,t))})},c.handleSubmit=function(e){e.preventDefault();var t=this.state.data;this.props.dispatch(o.b.save(t,this.props.id))},c.componentDidMount=function(){this.props.dispatch(o.b.get(this.props.id))},n.getDerivedStateFromProps=function(e,t){var a=t;if(e.user.single&&t.user!==e.user.single){var n=e.user.single;a=Object.assign({},a,{user:n,data:{name:n.name,email:n.email}})}return a},c.render=function(){var e=this,t=this.props.user,a=this.state.data;return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Edit data user"}),l.a.createElement(u.Title,null,"User"),l.a.createElement(u.Subtitle,null,"Edit Data"),l.a.createElement("div",{class:"tile is-ancestor"},l.a.createElement("div",{class:"tile is-vertical is-8"},l.a.createElement("div",{class:"tile"},l.a.createElement("div",{class:"tile is-parent is-vertical"},l.a.createElement("article",{class:"tile is-child"},l.a.createElement("form",{method:"post",onSubmit:function(t){e.handleSubmit(t)}},l.a.createElement(u.Field,null,l.a.createElement(u.Label,null,"Name"),l.a.createElement(u.Control,null,l.a.createElement(u.Input,{type:"text",name:"name",value:a.name,onChange:this.handleChange,placeholder:"Name"}))),l.a.createElement(u.Field,null,l.a.createElement(u.Label,null,"Email"),l.a.createElement(u.Control,null,l.a.createElement(u.Input,{type:"text",name:"email",value:a.email,onChange:this.handleChange,placeholder:"Email"}))),l.a.createElement(u.Field,{isGrouped:!0},l.a.createElement(u.Control,null,l.a.createElement(u.Button,{isColor:"primary",type:"submit",isLoading:t.loading},"Submit")),l.a.createElement(u.Control,null,l.a.createElement(r.a,{to:"/user",className:"button is-link"},"Back")))))),l.a.createElement("div",{class:"tile is-parent"},l.a.createElement("article",{class:"tile is-child"}))))))},n}(n.Component);t.default=Object(c.connect)((function(e){return{user:e.user}}))(m)}}]);
//# sourceMappingURL=component---src-pages-index-js-7c94bd67312386bf9ecb.js.map