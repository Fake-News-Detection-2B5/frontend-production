(this["webpackJsonpfake-news-front-end"]=this["webpackJsonpfake-news-front-end"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(30),c=n.n(i),s=(n(91),n(14)),o=n(15),d=n(17),l=n(16),u=n(33),j=n(8),h=n(18),b=n(19),p=n(85),O=(n(97),n(1)),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a,r;return Object(s.a)(this,n),(r=t.call(this,e)).state={showFAQ:!0},r.state.showFAQ=null===(a=e.showFAQ)||void 0===a||a,r}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(r.a.Fragment,{children:Object(O.jsx)("footer",{className:this.props.fixed?"footer-fixed":"",children:Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsxs)("div",{children:["Contact:",Object(O.jsx)("a",{className:"footer-contact-label",href:"https://github.com/orgs/Fake-News-Detection-2B5/teams/front-end",children:"Our Github"}),"|",Object(O.jsx)("a",{className:"footer-contact-label",href:"https://github.com/orgs/Fake-News-Detection-2B5/teams/front-end",children:"Our Github"})]}),this.state.showFAQ?Object(O.jsx)(b.LinkContainer,{to:"/faq",children:Object(O.jsx)(p.a,{variant:"primary",size:"sm",children:"FAQ"})}):Object(O.jsx)(b.LinkContainer,{to:"/",children:Object(O.jsx)(p.a,{variant:"primary",size:"sm",children:"Home"})})]})})})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{id:"fancy-btn"})}}]),n}(a.Component),g=n(12),x=function(){var e=Object(g.b)(),t=e.loginWithRedirect;e.isAuthenticated;return Object(O.jsx)(p.a,{onClick:function(){return t()},id:"btn-heigth",type:"button",size:"lg",block:!0,children:"Login or Register"})};n(105);var v=function(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(g.b)().isAuthenticated?Object(O.jsx)(j.c,{to:"/setup"}):Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsxs)("grid-template",{children:[Object(O.jsx)("grid-image",{onMouseOver:function(){return i(Object(O.jsx)("div",{}))},children:Object(O.jsx)("img",{src:"../../../res/img/landingpage.svg",alt:"React Logo",width:"100%",height:"100%"})}),n,Object(O.jsx)("btn-login",{onMouseOver:function(){return i(Object(O.jsx)(m,{}))},children:Object(O.jsx)(x,{})}),Object(O.jsxs)("div",{id:"top-remove",onMouseOver:function(){return i(Object(O.jsx)("div",{}))},children:[Object(O.jsx)("div",{id:"info",children:Object(O.jsx)("h1",{id:"title-fnd",children:Object(O.jsx)("b",{children:"Fake News Detection"})})}),Object(O.jsxs)("div",{id:"info-bottom",children:[Object(O.jsx)("h2",{children:"Welcome!"}),Object(O.jsx)("h3",{children:"Please login or register to continue..."})]})]}),Object(O.jsx)("div",{id:"left-remove",onMouseOver:function(){return i(Object(O.jsx)("div",{}))}}),Object(O.jsx)("div",{id:"bottom-remove",onMouseOver:function(){return i(Object(O.jsx)("div",{}))}}),Object(O.jsx)("div",{id:"right-remove",onMouseOver:function(){return i(Object(O.jsx)("div",{}))}})]}),Object(O.jsx)(f,{fixed:!0})]})},_=n(7),y=n(141),I=n(86),k=n(138);var P=function(){var e=Object(g.b)(),t=e.isAuthenticated,n=e.logout;return t&&Object(O.jsx)(k.a.Item,{onClick:function(){n({returnTo:window.location.origin}),window.location="/"},children:"Logout"})},E=(n(106),n(37)),C=n.n(E),R=function(e,t){return e.endsWith("/")?t.startsWith("/")?e+t.substring(1):e+t:t.startsWith("/")?e+t:e+"/"+t},w={API_URL:"https://fake-news-zuul-gateway.herokuapp.com/fake-database",API_URL2:"https://fake-database-fe-support.herokuapp.com",API_PROVIDER:"/provider"};w.API_PROVIDER_BY_ID="".concat(w.API_PROVIDER,"/getById"),w.API_PROVIDER_COUNT="".concat(w.API_PROVIDER,"/getCount"),w.API_PROVIDER_GET_INTERVAL="".concat(w.API_PROVIDER,"/getInterval"),w.API_PROVIDER_SEARCH_COUNT="".concat(w.API_PROVIDER,"/searchCount"),w.API_PROVIDER_SEARCH="".concat(w.API_PROVIDER,"/search"),w.API_PROVIDER_GET_BY_NAME="".concat(w.API_PROVIDER,"/getByName"),w.API_POST="/post",w.API_POST_GET_INTERVAL="".concat(w.API_POST,"/getInterval"),w.API_USER="/user",w.API_USER_GET_BY_ID="".concat(w.API_USER,"/get"),w.API_PREFERENCES="/preferences",w.API_PREFERENCES_GET="".concat(w.API_PREFERENCES,"/isSubscribed"),w.API_PREFERENCES_UPDATE="".concat(w.API_PREFERENCES,"/updateSubscriptionStatus"),w.API_PREFERENCES_GET_SUBSCRIBED_PROVIDERS="".concat(w.API_PREFERENCES,"/getByUserId");var S={routes:w,get:function(e,t){return C.a.get(R(w.API_URL,e),{params:t})},post:function(e,t){return C.a.post(R(w.API_URL,e),t)},put:function(e,t){return C.a.put(R(w.API_URL,e),t)},put2:function(e,t){var n=R(w.API_URL,e);n+="?";for(var a=!0,r=0,i=Object.entries(t);r<i.length;r++){var c=Object(h.a)(i[r],2);a?a=!1:n+="&",n+=c[0]+"="+c[1]}return C.a.put(n,t)},getUrl:function(e,t){return C.a.get(e,{params:t})},postUrl:function(e,t){return C.a.post(e,t)},putUrl:function(e,t){return C.a.put(e,t)}},A={ready:!1,data:{userId:43,username:null,avatar:null,bio:null,email:null}},N=function(){A.ready||S.get(S.routes.API_USER_GET_BY_ID,{id:A.data.userId}).then((function(e){A.data.username=e.data.username,A.data.avatar=e.data.avatarUrl,A.data.bio=e.data.bio,A.data.email=e.data.email,A.ready=!0})).catch((function(e){console.error(e),A.ready=!0}))},F=function(){return A.ready},D=function(){return A.data},T=function(e){var t=Object(a.useState)(0).sessionInterval,n=Object(g.b)(),i=n.isAuthenticated,c=n.user;return Object(a.useEffect)((function(){F()||(t=setInterval((function(){F()&&clearInterval(t)}),10))}),[]),Object(O.jsx)(r.a.Fragment,{children:Object(O.jsxs)(y.a,{id:"navbar",bg:"white",expand:"sm",className:"sticky-top border-bottom",children:[Object(O.jsx)(b.LinkContainer,{to:"/",children:Object(O.jsx)(y.a.Brand,{children:Object(O.jsx)("img",{className:"image-brand rounded-img shadow-img",width:"32",height:"32",src:"/res/img/logo512.png",alt:"Brand"})})}),e.authenticated?Object(O.jsx)(y.a.Collapse,{children:Object(O.jsx)(I.a,{className:"ml-auto",children:Object(O.jsxs)(k.a,{title:i?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("img",{className:"image-brand",width:"32",height:"32",src:c.picture,alt:c.name}),Object(O.jsx)("span",{id:"username",children:c.name})]}):"",children:[Object(O.jsx)(b.LinkContainer,{to:"/profile",children:Object(O.jsx)(k.a.Item,{children:"Profile"})}),Object(O.jsx)(b.LinkContainer,{to:"/settings",children:Object(O.jsx)(k.a.Item,{children:"Settings"})}),Object(O.jsx)(P,{})]})})}):""]})})},L=(n(125),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(r.a.Fragment,{children:Object(O.jsxs)("div",{className:"post-container",children:[Object(O.jsx)("a",{className:"post-readmore",href:this.props.url,target:"_blank",children:"[read more]"}),Object(O.jsxs)("div",{className:"post-header",children:[Object(O.jsx)(b.LinkContainer,{to:"/profile_provider",children:Object(O.jsxs)("div",{className:"pointer",children:[Object(O.jsx)("img",{className:"post-provider-avatar",src:this.props.provider.avatar,alt:"Avatar"}),Object(O.jsx)("span",{className:"post-provider-name",children:this.props.provider.name})]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(b.LinkContainer,{to:"#",children:Object(O.jsx)("a",{className:"post-feedback-text text-secondary",children:"(feedback)"})}),Object(O.jsxs)("span",{className:"post-credibility-".concat(parseInt(this.props.fake)<50?"good":"bad"),children:[this.props.fake,"% fake"]})]})]}),Object(O.jsxs)("div",{className:"post-body",children:[Object(O.jsx)("a",{href:this.props.url,target:"_blank",children:Object(O.jsx)("img",{className:"post-thumbnail",src:this.props.thumbnail,alt:"Thumbnail"})}),Object(O.jsx)("a",{className:"post-title",href:this.props.url,target:"_blank",children:this.props.title}),Object(O.jsx)("div",{className:"post-description text-secondary",children:this.props.description})]})]})})}}]),n}(a.Component)),q=(n(126),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],postIndex:0},e.componentDidMount=function(){e.loadPosts(10),window.addEventListener("scroll",e.listenToScroll,!0)},e.listenToScroll=function(t){t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight&&e.loadPosts(5)},e.loadPosts=function(t){S.get(S.routes.API_POST_GET_INTERVAL,{skip:e.state.postIndex,count:t}).then((function(n){e.setState({posts:e.state.posts.concat(n.data.map((function(e){return{provider:{avatar:"http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",name:"Digi24"},id:e.id,title:e.title,thumbnail:e.thumbnail,description:e.description,url:e.sourceUrl,fake:e.score,date:e.postDate}}))),postIndex:e.state.postIndex+t})})).catch((function(e){console.error(e)}))},e}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(T,{authenticated:!0}),Object(O.jsx)("main",{id:"main-feed",children:this.state.posts.map((function(e){return Object(a.createElement)(L,Object(_.a)(Object(_.a)({},e),{},{key:"post-".concat(e.id)}))}))}),Object(O.jsx)(f,{fixed:!0})]})}}]),n}(a.Component)),V=n(43),U=n.n(V),B=n(62),z=(n(128),function(){var e=Object(a.useState)(0).sessionInterval,t=Object(g.b)(),n=t.isAuthenticated,i=t.user;return Object(a.useEffect)((function(){F()||(e=setInterval((function(){F()&&clearInterval(e)}),10))}),[]),Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(T,{authenticated:!0}),n?Object(O.jsxs)("div",{id:"profile-container",children:[Object(O.jsxs)("div",{id:"profile-header",children:[Object(O.jsx)("img",{src:i.picture,alt:i.name}),Object(O.jsx)("div",{id:"profile-username",children:Object(O.jsx)("h1",{children:i.name})})]}),Object(O.jsx)("div",{id:"bio-container-profile",className:"justify-content-center",children:Object(O.jsx)("div",{id:"bio-text-container",children:D().bio})})]}):"",Object(O.jsx)(f,{fixed:!0})]})}),M=(n(129),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={providerReady:!1,provider:{},posts:[],providerValid:!0},e.componentDidMount=function(){S.get(S.routes.API_PROVIDER_BY_ID,{id:e.props.match.params.providerId}).then((function(t){e.setState({provider:t.data,providerValid:!!t.data,providerReady:!0})})).catch((function(t){console.error(t),e.setState({providerValid:!1})}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(r.a.Fragment,{children:0==this.state.providerValid?Object(O.jsx)(j.c,{to:"/feed"}):Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(T,{authenticated:!0}),this.state.providerReady?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsxs)("div",{id:"profile-container",children:[Object(O.jsxs)("div",{id:"profile-header",children:[Object(O.jsx)("img",{className:"photo-border",src:this.state.provider.avatar,alt:"User avatar"}),Object(O.jsxs)("div",{id:"provider-profile-name-credibility",children:[Object(O.jsxs)("h1",{children:[" ",this.state.provider.name,"  "]}),Object(O.jsxs)("h2",{children:[" Credibility: ",this.state.provider.credibility,"% "]})]})]}),Object(O.jsx)("div",{id:"bio-container-provider",className:"justify-content-center",children:Object(O.jsx)("div",{id:"bio-text-container",children:"No description"})})]}),Object(O.jsx)("div",{id:"horizontal-line"}),Object(O.jsx)("div",{id:"profile-posts",children:Object(O.jsx)("main",{children:this.state.posts.map((function(e){return Object(O.jsx)(L,Object(_.a)({},e))}))})})]}):"",Object(O.jsx)(f,{fixed:!0})]})})}}]),n}(a.Component)),G=n(143),H=n(137),Q=n(139),K=n(140),W=n(144),Y=(n(83),function(){var e=Object(g.b)(),t=e.isAuthenticated,n=e.user;return Object(O.jsx)(r.a.Fragment,{children:t?Object(O.jsx)("img",{id:"photo-border",src:n.picture,alt:n.name,width:"100%",height:"100%"}):"Error"})}),J=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(r.a.Fragment,{children:Object(O.jsxs)("div",{className:"preference-provider",children:[Object(O.jsx)("img",{className:"photo-border",src:this.props.avatar,width:"128",height:"128"}),Object(O.jsxs)("div",{className:"preference-provider-info",children:[Object(O.jsxs)("p",{children:[" ",this.props.name," "]}),Object(O.jsxs)("p",{children:[" Credibility: ",this.props.credibility,"% "]})]}),Object(O.jsx)(K.a,{className:"ml-auto subscribe-form",children:Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)(K.a.Check,{type:"checkbox",id:"provider-checkbox"+this.props.name,label:"Subscribed",onChange:function(){e.props.onChange()},checked:this.props.checked})},"provider-checkbox"+this.props.name)})]})})}}]),n}(a.Component),Z=function(){var e=Object(g.b)(),t=e.user,n=e.getAccessTokenSilently,i=Object(a.useState)({count:0,list:[]}),c=Object(h.a)(i,2),s=c[0],o=c[1],d=Object(a.useState)(""),l=Object(h.a)(d,2),u=l[0],j=l[1],b=Object(a.useState)(""),m=Object(h.a)(b,2),x=m[0],v=m[1],y=Object(a.useState)({index:1,count:0}),I=Object(h.a)(y,2),k=I[0],P=I[1],E=Object(a.useState)(null),C=Object(h.a)(E,2),R=C[0],w=(C[1],Object(a.useState)(null)),A=Object(h.a)(w,2),N=(A[0],A[1],r.a.useState()),L=Object(h.a)(N,2)[1],q=r.a.useCallback((function(){return L({})}),[]),V=Object(a.useState)(!1),z=Object(h.a)(V,2),M=z[0],Z=z[1],X=Object(a.useState)(""),$=Object(h.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(h.a)(ne,2),re=ae[0],ie=ae[1];Object(a.useEffect)((function(){re||(ie(!0),se(),F()||(R=setInterval((function(){F()&&clearInterval(R)}),10)))}));var ce=function(){S.get(x.length>0?S.routes.API_PROVIDER_SEARCH:S.routes.API_PROVIDER_GET_INTERVAL,{skip:3*(k.index-1),count:Math.min(3,s.count-3*(k.index-1)),query:u}).then((function(e){o(Object(_.a)(Object(_.a)({},s),{},{list:e.data})),s=Object(_.a)(Object(_.a)({},s),{},{list:e.data}),oe()})).catch((function(e){console.error(e)}))},se=function(){S.get(x.length>0?S.routes.API_PROVIDER_SEARCH_COUNT:S.routes.API_PROVIDER_COUNT,{query:u}).then((function(e){var t=e.data.count;o(Object(_.a)(Object(_.a)({},s),{},{count:t})),s=Object(_.a)(Object(_.a)({},s),{},{count:t}),P(Object(_.a)(Object(_.a)({},k),{},{count:Math.ceil(t/3)})),k=Object(_.a)(Object(_.a)({},k),{},{count:Math.ceil(t/3)}),ce()})).catch((function(e){console.error(e)}))},oe=function(){s.list.map((function(e,t){S.get(S.routes.API_PREFERENCES_GET,{uid:D().userId,prov_id:e.id}).then((function(e){var n="true"===e.data.toString().trim().toLowerCase();s.list[t].checked=n,q()})).catch((function(e){console.error(e)}))}))},de=function(e){return function(t){e>=1&&e<=k.count&&(P(Object(_.a)(Object(_.a)({},k),{},{index:e})),k=Object(_.a)(Object(_.a)({},k),{},{index:e}),ce())}},le=function(){j(x),console.log("Search: ".concat(u)),se()},ue=function(){Z(!1)},je=function(){var e=Object(B.a)(U.a.mark((function e(){var a,r,i,c,s,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="gmatei.eu.auth0.com",e.next=3,n({audience:"https://gmatei.eu.auth0.com/api/v2/",scope:"read:client_grants,create:client_grants,delete:client_grants,update:client_grants,read:users,update:users,delete:user,create:users,read:users_app_metadata,update:users_app_metadata,delete:users_app_metadata,create:users_app_metadata,read:user_custom_blocks,create:user_custom_blocks,delete:user_custom_blocks,create:user_tickets,read:clients,update:clients,delete:clients,create:clients,read:client_keys,update:client_keys ,delete:client_keys,create:client_keys,read:connections,update:connections,delete:connections,create:connections,read:resource_servers,update:resource_servers,delete:resource_servers,create:resource_servers,read:device_credentials,update:device_credentials,delete:device_credentials,create:device_credentials,read:rules,update:rules,delete:rules,create:rules,read:rules_configs,update:rules_configs,delete:rules_configs,read:hooks,update:hookS,delete:hooks,create:hooks,read:actions,update:actions\t,delete:actions,create:actions,read:email_provider,update:email_provider,delete:email_provider,create:email_provider,blacklist:tokens,read:stats,read:insights,read:tenant_settings,update:tenant_settings,read:logs,read:logs_users,read:shields,create:shields,update:shields,delete:shields,read:anomaly_blocks,delete:anomaly_blocks\t ,update:triggers,read:triggers,read:grants,delete:grants,read:guardian_factors,update:guardian_factors,read:guardian_enrollments,delete:guardian_enrollments,create:guardian_enrollment_tickets,read:user_idp_tokens,create:passwords_checking_job,delete:passwords_checking_job,read:custom_domains,delete:custom_domains,create:custom_domains,update:custom_domains,read:email_templates,create:email_templates,update:email_templates,read:mfa_policies,update:mfa_policies,read:roles,create:roles\t ,delete:roles,update:roles,read:prompts,update:prompts,read:branding,update:branding,delete:branding,read:log_streams,create:log_streams,delete:log_streams,update:log_streams,create:signing_keys,read:signing_keys,update:signing_keys,read:limits,update:limits,create:role_members,read:role_members,delete:role_members,read:entitlements,read:attack_protection,update:attack_protection,read:organizations,update:organizations,create:organizations,delete:organizations,create:organization_members,read:organization_members,delete:organization_members,create:organization_connections,read:organization_connections,update:organization_connections,delete:organization_connections,create:organization_member_roles,read:organization_member_roles,delete:organization_member_roles,create:organization_invitations,read:organization_invitations,delete:organization_invitations"});case 3:return r=e.sent,i="https://".concat(a,"/api/v2/users/").concat(t.sub),e.next=7,fetch(i,{headers:{Authorization:"Bearer ".concat(r)}});case 7:return c=e.sent,e.next=10,c.json();case 10:s=e.sent,o=s.user_metadata,t.user_metadata=o,console.log(o),t.user_metadata={image:ee},t.user_metadata.picture&&(t.picture=ee,console.log("MERGE BOSS!"));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(T,{authenticated:!0}),Object(O.jsx)("div",{id:"settings-container",children:Object(O.jsxs)(G.a,{defaultActiveKey:"account",className:"justify-content-center",children:[Object(O.jsx)(H.a,{eventKey:"account",title:"Account Settings",children:Object(O.jsx)("div",{className:"tab-custom-container",children:Object(O.jsxs)("div",{id:"account-settings-container",children:[Object(O.jsx)("div",{id:"account-container",children:Object(O.jsx)("div",{id:"photo-container",className:"justify-content-center",children:Object(O.jsxs)("div",{id:"photo-with-button",children:[Object(O.jsx)(Y,{}),Object(O.jsxs)(Q.a,{show:M,onHide:ue,children:[Object(O.jsx)(Q.a.Header,{closeButton:!0,children:Object(O.jsx)(Q.a.Title,{children:"Modal heading"})}),Object(O.jsx)(Q.a.Body,{children:Object(O.jsx)(K.a.Group,{controlId:"formchangePicture",id:"formmargin",children:Object(O.jsx)(K.a.Control,{type:"text",placeholder:"write image url",onChange:function(e){te(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(je(),e.preventDefault())}})})}),Object(O.jsxs)(Q.a.Footer,{children:[Object(O.jsx)(p.a,{variant:"secondary",onClick:ue,children:"Cancel"}),Object(O.jsx)(p.a,{variant:"primary",onClick:je,children:"Save Changes"})]})]}),Object(O.jsxs)(p.a,{onClick:function(){Z(!0)},id:"settings-button",children:[" ","Edit"," "]})]})})}),Object(O.jsxs)("div",{id:"password-container",className:"justify-content-center",children:[Object(O.jsx)(K.a.Group,{controlId:"formchangePassword",id:"formmargin",children:Object(O.jsx)(K.a.Control,{type:"password",placeholder:"New Password"})}),Object(O.jsx)(p.a,{className:"settings-button",children:"Change password"})]}),Object(O.jsxs)("div",{id:"bio-container",className:"justify-content-center",children:[Object(O.jsx)(p.a,{className:"settings-button",id:"bio-button",children:"Change Bio"}),Object(O.jsx)("div",{id:"bio-text-container",children:D().bio})]})]})})}),Object(O.jsx)(H.a,{eventKey:"preferences",title:"Preferences Settings",children:Object(O.jsx)("div",{className:"tab-custom-container",children:Object(O.jsxs)("div",{id:"preferences-settings-container",children:[Object(O.jsxs)(K.a,{id:"preferences-settings-search",children:[Object(O.jsx)(K.a.Control,{type:"text",placeholder:"Search...",onChange:function(e){v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(le(),e.preventDefault())}}),Object(O.jsx)(p.a,{id:"preferences-settings-search-button",variant:"primary",onClick:le,children:"Search"})]}),s.list.length>0?s.list.map((function(e,t){return Object(O.jsx)(J,Object(_.a)(Object(_.a)({},e),{},{onChange:function(){s.list[t].checked=!s.list[t].checked,q()},checked:!!e.checked}))})):Object(O.jsx)("div",{id:"settings-preferences-loading",children:"Loading..."}),Object(O.jsxs)(W.a,{id:"settings-preferences-pagination",children:[Object(O.jsx)(W.a.First,{onClick:de(1)}),Object(O.jsx)(W.a.Prev,{onClick:de(k.index-1)}),k.index>3?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(W.a.Item,{onClick:de(1),children:1}),Object(O.jsx)(W.a.Ellipsis,{disabled:!0})]}):"",function(){for(var e=[],t=k.index-1;t>=1&&t>=k.index-1;--t)e.push(Object(O.jsx)(W.a.Item,{onClick:de(t),children:t}));return e}(),Object(O.jsx)(W.a.Item,{active:!0,onClick:de(k.index),children:k.index}),function(){for(var e=[],t=k.index+1;t<=k.count&&t<=k.index+1;++t)e.push(Object(O.jsx)(W.a.Item,{onClick:de(t),children:t}));return e}(),Math.max(k.index+1,3)<k.count?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(W.a.Ellipsis,{disabled:!0}),Object(O.jsx)(W.a.Item,{onClick:de(k.count),children:k.count})]}):"",Object(O.jsx)(W.a.Next,{onClick:de(k.index+1)}),Object(O.jsx)(W.a.Last,{onClick:de(k.count)})]}),Object(O.jsxs)(p.a,{id:"settings-save-btn",onClick:function(){s.list.map((function(e,t){S.put2(S.routes.API_PREFERENCES_UPDATE,{uid:D().userId,prov_id:e.id,status:!!e.checked}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}))},children:[" ","Save settings"]})]})})})]})}),Object(O.jsx)(f,{fixed:!0})]})},X=n(142),$=n(145),ee=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)($.a,{children:[Object(O.jsx)(X.a.Toggle,{className:"faq-question-header",as:$.a.Header,eventKey:this.props.count,children:Object(O.jsxs)("span",{children:[this.props.count,". ",this.props.question]})}),Object(O.jsx)(X.a.Collapse,{eventKey:this.props.count,children:Object(O.jsx)($.a.Body,{className:"faq-question-body",children:Object(O.jsxs)("span",{children:[" ",this.props.answer," "]})})})]})}}]),n}(a.Component),te=(n(130),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={questions:[{count:"1",question:"What is Fake News Detection?",answer:"Fake News Detection is a site which provides the user with news from various providers. For each news, it displays a probabiliy of it being fake."},{count:"2",question:"Do I need something special to use it?",answer:"You only need an account on our site and you will be ready to use it after setting up your account."},{count:"3",question:"Why do I need an account?",answer:"An account is needed so you can receive news from only from the the providers that you want."},{count:"4",question:"What does the percentage of a news mean?",answer:"The percentage represents the probability how much of a piece of news is fake."},{count:"5",question:"How can I change the providers that I am following?",answer:Object(O.jsxs)(r.a.Fragment,{children:[" To update your list of followed providers you need to go to the top right and press on profile avatar. ",Object(O.jsx)("br",{})," From here you go Settings > Preferences Settings. ",Object(O.jsx)("br",{})," And from here you only need to select the providers you want to follow or unfollow. ",Object(O.jsx)("br",{})," In the end, you will have to press the Save settings button to commit your changes. "]})},{count:"6",question:"Can I access the profile of a news provider?",answer:Object(O.jsxs)(r.a.Fragment,{children:[" Yes, you can access it and in two ways. ",Object(O.jsx)("br",{})," The first way is to click on the provider's avatar from a post. ",Object(O.jsx)("br",{})," The other way is to go to Settings > Preferences Settings and search for the specific provider and click on its avatar. "]})},{count:"7",question:"How is a news provider's profile different from mine?",answer:"A news provider's profile contains a score of credibility and a list containing a few of their most recent news."},{count:"8",question:"How do you determine how fake a piece of news is?",answer:"We use a multitude of artificial intelligence algorithms to determine a percentage of how fake a piece of news is."}]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsxs)("div",{id:"faq-header-container",children:[Object(O.jsx)("div",{id:"faq-logo-container",children:Object(O.jsx)(b.LinkContainer,{to:"/",children:Object(O.jsx)("img",{id:"faq-logo",className:"rounded-img",src:"/res/img/logo512.png",alt:"brand logo",width:"128",height:"128"})})}),Object(O.jsx)("div",{id:"faq-title-container",children:Object(O.jsx)("h1",{children:"Frequently asked questions"})})]}),Object(O.jsx)("main",{id:"faq_main",children:Object(O.jsx)(X.a,{className:"faq-accordion",children:this.state.questions.map((function(e){return Object(O.jsx)(ee,Object(_.a)({},e))}))})}),Object(O.jsx)(f,{showFAQ:!1})]})}}]),n}(a.Component)),ne=(n(131),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={provider:{count:0,list:[]},query:"",searchQuery:"",pagination:{index:1,count:0},sessionInterval:null,redirectComponent:null},e.componentDidMount=function(){e.updateProviderCount(),F()?e.setState():e.state.sessionInterval=setInterval((function(){F()&&(clearInterval(e.state.sessionInterval),e.setState())}),10),e.shouldRedirect()},e.updateProviders=function(){S.get(e.state.searchQuery.length>0?S.routes.API_PROVIDER_SEARCH:S.routes.API_PROVIDER_GET_INTERVAL,{skip:6*(e.state.pagination.index-1),count:Math.min(6,e.state.provider.count-6*(e.state.pagination.index-1)),query:e.state.query}).then((function(t){console.log(t.data),e.setState({provider:Object(_.a)(Object(_.a)({},e.state.provider),{},{list:t.data})}),e.updateProviderChecked()})).catch((function(e){console.error(e)}))},e.updateProviderCount=function(){S.get(e.state.searchQuery.length>0?S.routes.API_PROVIDER_SEARCH_COUNT:S.routes.API_PROVIDER_COUNT,{query:e.state.query}).then((function(t){var n=t.data.count;e.setState({provider:Object(_.a)(Object(_.a)({},e.state.provider),{},{count:n}),pagination:Object(_.a)(Object(_.a)({},e.state.pagination),{},{count:Math.ceil(n/6)})}),e.updateProviders()})).catch((function(e){console.error(e)}))},e.updateProviderChecked=function(){e.state.provider.list.map((function(t,n){S.get(S.routes.API_PREFERENCES_GET,{uid:D().userId,prov_id:t.id}).then((function(t){var a="true"===t.data.toString().trim().toLowerCase();e.state.provider.list[n].checked=a,e.setState(),e.forceUpdate()})).catch((function(e){console.error(e)}))}))},e.handlePaginationFactory=function(t){return function(n){t>=1&&t<=e.state.pagination.count&&e.setState({pagination:Object(_.a)(Object(_.a)({},e.state.pagination),{},{index:t})},e.updateProviders)}},e.handleSearchKeyPress=function(t){"Enter"===t.key&&(e.handleSearch(),t.preventDefault())},e.handleSearchChange=function(t){e.setState({searchQuery:t.target.value})},e.handleSearch=function(){e.setState({query:e.state.searchQuery},(function(){e.updateProviderCount(),console.log("Search: ".concat(e.state.query)),e.updateProviderCount()}))},e.handleSaveSettings=function(){e.state.provider.list.map((function(e,t){S.put2(S.routes.API_PREFERENCES_UPDATE,{uid:D().userId,prov_id:e.id,status:!!e.checked}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}))},e.shouldRedirect=function(){S.get(S.routes.API_PREFERENCES_GET_SUBSCRIBED_PROVIDERS,{uid:D().userId,skip:0,count:100}).then((function(t){console.log(t.data),e.setState({redirectComponent:t.data.length>0?Object(O.jsx)(j.c,{to:"/feed"}):""})})).catch((function(e){console.error(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(r.a.Fragment,{children:[this.state.redirectComponent,Object(O.jsxs)("div",{className:"tab-custom-container",children:[Object(O.jsxs)("div",{className:"setup-title",children:["Looks like you're not subscribed to any news provider",Object(O.jsx)("br",{}),"Select some, and you'll see news from them in your feed"]}),Object(O.jsxs)("div",{id:"preferences-setup-container",children:[Object(O.jsxs)(K.a,{id:"preferences-setup-search",children:[Object(O.jsx)(K.a.Control,{type:"text",placeholder:"Search...",onChange:this.handleSearchChange,onKeyPress:this.handleSearchKeyPress}),Object(O.jsx)(p.a,{id:"preferences-setup-search-button",variant:"primary",onClick:this.handleSearch,children:"Search"})]}),this.state.provider.list.length>0?this.state.provider.list.map((function(t,n){return Object(O.jsx)(J,Object(_.a)(Object(_.a)({},t),{},{onChange:function(){e.state.provider.list[n].checked=!e.state.provider.list[n].checked,e.setState(),e.forceUpdate()},checked:!!t.checked}))})):Object(O.jsx)("div",{id:"setup-preferences-loading",children:"Loading..."}),Object(O.jsxs)(W.a,{id:"setup-preferences-pagination",children:[Object(O.jsx)(W.a.First,{onClick:this.handlePaginationFactory(1)}),Object(O.jsx)(W.a.Prev,{onClick:this.handlePaginationFactory(this.state.pagination.index-1)}),this.state.pagination.index>6?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(W.a.Item,{onClick:this.handlePaginationFactory(1),children:1}),Object(O.jsx)(W.a.Ellipsis,{disabled:!0})]}):"",function(){for(var t=[],n=e.state.pagination.index-1;n>=1&&n>=e.state.pagination.index-2.5;--n)t.push(Object(O.jsx)(W.a.Item,{onClick:e.handlePaginationFactory(n),children:n}));return t}(),Object(O.jsx)(W.a.Item,{active:!0,onClick:this.handlePaginationFactory(this.state.pagination.index),children:this.state.pagination.index}),function(){for(var t=[],n=e.state.pagination.index+1;n<=e.state.pagination.count&&n<=e.state.pagination.index+2.5;++n)t.push(Object(O.jsx)(W.a.Item,{onClick:e.handlePaginationFactory(n),children:n}));return t}(),Math.max(this.state.pagination.index+1,3)<this.state.pagination.count?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(W.a.Ellipsis,{disabled:!0}),Object(O.jsx)(W.a.Item,{onClick:this.handlePaginationFactory(this.state.pagination.count),children:this.state.pagination.count})]}):"",Object(O.jsx)(W.a.Next,{onClick:this.handlePaginationFactory(this.state.pagination.index+1)}),Object(O.jsx)(W.a.Last,{onClick:this.handlePaginationFactory(this.state.pagination.count)})]}),Object(O.jsx)(b.LinkContainer,{to:"/feed",children:Object(O.jsx)(p.a,{id:"setup-save-btn",onClick:this.handleSaveSettings,children:"Save setup"})})]})]}),Object(O.jsx)(f,{fixed:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})}}]),n}(a.Component));var ae=function(){return Object(g.b)().isAuthenticated?"":Object(O.jsx)(j.c,{to:"/"})},re=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={},N(),e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(u.BrowserRouter,{children:[Object(O.jsx)(j.g,{children:Object(O.jsx)(j.d,{exact:!0,path:"/",component:v})}),Object(O.jsx)(ae,{}),Object(O.jsxs)(j.g,{children:[Object(O.jsx)(j.d,{exact:!0,path:"/feed",component:q}),Object(O.jsx)(j.d,{exact:!0,path:"/profile",component:z}),Object(O.jsx)(j.d,{exact:!0,path:"/settings",component:Z}),Object(O.jsx)(j.d,{exact:!0,path:"/faq",component:te}),Object(O.jsx)(j.d,{exact:!0,path:"/setup",component:ne}),Object(O.jsx)(j.d,{exact:!0,path:"/:providerId",component:M})]})]})}}]),n}(a.Component),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g.a,{domain:"gmatei.eu.auth0.com",clientId:"OzQArkLiVElk6NOvIthKWFmQmeyxZZBI",redirectUri:window.location.origin,audience:"https://gmatei.eu.auth0.com/api/v2/",scope:"read:messages",children:Object(O.jsx)(re,{})})}),document.getElementById("root")),ie()},83:function(e,t,n){},91:function(e,t,n){},97:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.44d3467b.chunk.js.map