(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[0,10,11,12],{199:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n,r,l=t(0),c=t(11),o=t(108),s=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function m(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(c.f)(t);var n=a.value,r=a.children,l=s(a,["value","children"]),o="string"===typeof n?new Date(n||0):n;return r("formatDate"===e?t.formatDateToParts(o,l):t.formatTimeToParts(o,l))}))};return a.displayName=r[e],a}function i(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(c.f)(t);var n=a.value,r=a.children,o=s(a,["value","children"]),m=t[e](n,o);if("function"===typeof r)return r(m);var i=t.textComponent||l.Fragment;return l.createElement(i,null,m)}))};return a.displayName=n[e],a}function d(e){return e}i("formatDate"),i("formatTime"),i("formatNumber"),i("formatList"),i("formatDisplayName"),m("formatDate"),m("formatTime")},200:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(3),r=t(0),l=t.n(r),c=t(95),o=t(107),s=t(224),m=t(45);function i(e){var a=e.siteTitle,t=e.socialLinks,r=Object(o.b)(),i=Object(m.b)(),d=Object(n.a)(i,1)[0].$;return l.a.createElement("header",{role:"banner"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9 social"},null===t||void 0===t?void 0:t.map((function(e){return l.a.createElement("a",{key:e.socialNetwork_s,href:e.url_s,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"fa fa-"+e.socialNetwork_s}))}))),l.a.createElement("div",{className:"col-3 search-top"},l.a.createElement(s.a,{classes:{form:"search-top-form"},placeholder:"Type keyword to search..."}))))),l.a.createElement("div",{className:"container logo-wrap"},l.a.createElement("div",{className:"row pt-5"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("a",{className:"absolute-toggle d-block d-md-none","data-toggle":"collapse",href:"#navbarMenu",onClick:function(e){e.preventDefault(),d("#navbarMenu").toggleClass("show")},role:"button","aria-expanded":"false","aria-controls":"navbarMenu"},l.a.createElement("span",{className:"burger-lines"})),l.a.createElement("h1",{className:"site-logo"},l.a.createElement(c.b,{to:"/"},a))))),l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMenu"},l.a.createElement("ul",{className:"navbar-nav mx-auto"},null===r||void 0===r?void 0:r.sort((function(e,a){var t=e.orderDefault_f,n=a.orderDefault_f;return t<n?-1:t>n?1:0})).map((function(e){return l.a.createElement("li",{className:"nav-item",key:e.url},l.a.createElement(c.c,{exact:!0,className:"nav-link",activeClassName:"active",to:e.url},e.navLabel))})))))))}},201:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(0),r=t.n(n),l=t(95),c=t(107),o=t(94);function s(e){var a=e.socialLinks,t=Object(c.a)();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(o.b,{model:t,className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(o.e,{component:"h3",model:t,fieldId:"aboutTitle_s"}),r.a.createElement("p",{className:"mb-4"},r.a.createElement(o.e,{component:"img",model:t,target:"src",fieldId:"aboutImage_s",alt:"",className:"img-fluid"})),r.a.createElement(o.e,{component:"p",model:t,fieldId:"about_t"})),r.a.createElement("div",{className:"col-md-6 ml-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(o.e,{component:"h3",model:t,fieldId:"quickLinksTitle_s"}),r.a.createElement(o.b,{component:"ul",model:t,className:"list-unstyled",fieldId:"quickLinks_o"},null===t||void 0===t?void 0:t.quickLinks_o.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(l.b,{to:e.url_s},e.label_s))})))),r.a.createElement("div",{className:"col-md-1"}),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"mb-5"},r.a.createElement(o.e,{component:"h3",model:t,fieldId:"socialLinksTitle_s"}),r.a.createElement("ul",{className:"list-unstyled footer-social"},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement("li",{key:e.socialNetwork_s},r.a.createElement("a",{href:e.url_s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fa fa-"+e.socialNetwork_s}),e.label_s))})))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center",dangerouslySetInnerHTML:{__html:t.copyright_html_raw}})))))}},203:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(94);a.default=function(e){var a=e.model,t=e.model,n=t.linkButtonText_s,c=t.showLinkButton_b,o=t.facebookLink_s,s=t.twitterLink_s,m=t.instagramLink_s,i=t.youTubeLink_s;return r.a.createElement(l.b,{className:"bio text-center",model:a},r.a.createElement(l.e,{component:"img",target:"src",model:a,fieldId:"profilePic_s",className:"img-fluid",alt:""}),r.a.createElement("div",{className:"bio-body"},r.a.createElement(l.e,{component:"h2",model:a,fieldId:"name_s"}),c&&n&&r.a.createElement("p",null,r.a.createElement(l.e,{component:"a",model:a,fieldId:"linkButtonText_s,linkButtonUrl_s",target:"children,href",className:"btn btn-primary btn-sm rounded"})),r.a.createElement(l.e,{component:"p",model:a,fieldId:"bio_t"}),r.a.createElement("p",{className:"social"},o&&r.a.createElement("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-facebook"})),s&&r.a.createElement("a",{href:s,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-twitter"})),m&&r.a.createElement("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-instagram"})),i&&r.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-youtube-play"})))))}},222:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return d}));var n=t(3),r=t(0),l=t.n(r),c=t(95),o=t(234),s=t(94),m="landscape",i="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,r=Object(o.a)().formatDate,u=e.classes,f=e.format,p=void 0===f?"portrait":f,b=e.showBlurb,v=void 0!==b&&b,E=e.numOfComments,N=e.model,g=e.model,h=Object(n.a)(g.authorBio_o,1)[0],y=h.name_s,_=h.profilePic_s,k=g.headline_s,O=g.mainImage_s,j=g.mainImageAlt_s,I=void 0===j?"":j,x=g.categories_o,w=g.craftercms.dateModified,T=N.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml","");switch(p){case"portrait":return l.a.createElement(s.b,{component:c.b,model:N,to:T,className:"blog-entry ".concat(null!==(a=null===u||void 0===u?void 0:u.root)&&void 0!==a?a:"")},l.a.createElement(s.e,{component:"img",model:N,target:"src",fieldId:"mainImage_s",alt:I}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement(s.b,{component:"span",model:N,fieldId:"authorBio_o",index:0,className:"author mr-2"},l.a.createElement("img",{src:_,alt:""})," ",y)," \u2022 ",l.a.createElement("span",{className:"mr-2"},r(w)),E&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",E))),l.a.createElement(s.e,{component:"h2",model:N,fieldId:"headline_s"})));case m:return l.a.createElement("div",{className:"post-entry-horizontal"},l.a.createElement(s.b,{component:c.b,model:N,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement(s.e,{model:N,fieldId:"mainImage_s",target:"style.backgroundImage",format:function(e){return"url(".concat(e,")")},className:"image"}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement(s.b,{className:"author mr-2",model:N,fieldId:"authorBio_o",index:0},l.a.createElement("img",{src:_,alt:I})," ",y),"\u2022 ",l.a.createElement("span",{className:"mr-2"},r(w)),E&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",E))),l.a.createElement(s.e,{component:"h2",fieldId:"headline_s",model:N}))));case i:return l.a.createElement(s.b,{component:c.b,model:N,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement(s.e,{component:"img",target:"src",model:N,fieldId:"mainImage_s",className:"mr-4",alt:""}),l.a.createElement("div",{className:"text"},l.a.createElement(s.e,{component:"h4",model:N,fieldId:"headline_s"}),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},r(w)))));case d:return l.a.createElement(s.b,{model:N,fieldId:"mainImage_s",className:"a-block d-flex align-items-center ".concat(null!==(t=null===u||void 0===u?void 0:u.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(O,")")}},l.a.createElement(s.b,{component:c.b,model:N,to:T,className:"text ".concat(null===u||void 0===u?void 0:u.innerWrapper)},l.a.createElement("div",{className:"post-meta"},x&&l.a.createElement(l.a.Fragment,null,null===x||void 0===x?void 0:x.map((function(e){return l.a.createElement("span",{className:"category",key:e.key},e.value_smv)}))," \u2022 "),l.a.createElement("span",{className:"mr-2"},r(w)),E&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",E))),l.a.createElement(s.e,{component:"h3",model:N,fieldId:"headline_s"}),v&&l.a.createElement(s.e,{component:"p",model:N,fieldId:"blurb_t"})));default:return console.error('Unknown PostCard format "'.concat(p,'" on post "').concat(k,'"')),l.a.createElement(s.b,{component:c.b,model:N,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement("h2",null,k))}}},224:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),c=t(42),o=t(107),s=0;a.a=function(e){var a=Object(c.f)(),t=e.placeholder,r=void 0===t?"":t,m=e.id,i=void 0===m?"searchInput_".concat(s++):m,d=Object.assign({form:"",input:"",inputWrapper:""},e.classes),u=Object(o.e)(),f=Object(n.a)(u,2),p=f[0],b=f[1];return l.a.createElement("form",{className:d.form,onSubmit:function(e){e.preventDefault(),p.trim()&&a.push("/search?q=".concat(p))}},l.a.createElement("div",{className:d.inputWrapper},l.a.createElement("span",{className:"icon fa fa-search"}),l.a.createElement("input",{id:i,type:"text",value:p,onChange:b,className:d.input,placeholder:r})))}},230:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(3),r=t(200),l=t(201),c=t(0),o=t.n(c),s=t(45);function m(e){var a=e.siteTitle,t=e.socialLinks,c=e.children,m=Object(s.b)(),i=Object(n.a)(m,1)[0].theme;return o.a.createElement("div",{className:"wrap theme-".concat(i)},o.a.createElement(r.default,{siteTitle:a,socialLinks:t}),o.a.createElement("div",{className:"wrap"},c),o.a.createElement(l.default,{socialLinks:t}))}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(203),c=t(94);function o(e){var a=e.model,t=e.fieldId;return r.a.createElement(c.e,{model:a,fieldId:t,format:function(e){return null===e||void 0===e?void 0:e.map((function(e,n){return r.a.createElement(c.b,{key:"".concat(e.craftercms.id,"_").concat(n),model:a,fieldId:t,index:n,className:"sidebar-box"},r.a.createElement(l.default,{model:e}))}))}})}},232:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(235),c=t(222),o=t(107);a.a=function(){var e=Object(o.d)();return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Recent Posts"})),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement("li",{key:e.craftercms.id},r.a.createElement(c.d,{model:e,format:c.c}))})))))}},233:function(e,a,t){"use strict";t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return p}));var n=t(0),r=t.n(n),l=t(235),c=t(107),o=t(16),s=t(76),m=t(33),i=t(94);function d(e){var a=e.filter,t=e.baseUrl,n=e.listClass,l=e.resource.read().data,c=Object(m.a)(l.taxonomy.items).filter(a)[0];return r.a.createElement(i.b,{component:"ul",model:c,className:"".concat(n," clearfix")},null===c||void 0===c?void 0:c.items.item.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:"".concat(t,"/").concat(e.key)},e.value))})))}function u(e){var a=e.title,t=e.filter,l=e.baseUrl,o=e.listClass,m=Object(c.g)();return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},a),r.a.createElement(n.Suspense,{fallback:r.a.createElement(s.a,{screenHeight:!1})},r.a.createElement(d,{resource:m,filter:t,baseUrl:l,listClass:o})))}function f(){return r.a.createElement(u,{title:r.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(o.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function p(){return r.a.createElement(u,{title:r.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(o.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},234:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t(108),l=t(11);function c(){var e=Object(n.useContext)(r.a);return Object(l.f)(e),e}},235:function(e,a,t){"use strict";var n=t(18),r=t(83),l=t(132),c=t(85),o=t(84),s=t(0),m=t(108),i=t(133),d=t(11),u=t(104),f=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},p=t.n(u).a||u;function b(e,a){return Object(i.a)(Object.assign(Object.assign({},d.a),{locale:"en"}),Object(d.b)(),e,a)}var v=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,n=f(a,["values"]),r=e.values,l=f(e,["values"]);return!p(r,t)||!p(n,l)}},{key:"render",value:function(){var e=this;return s.createElement(m.a.Consumer,null,(function(a){e.props.defaultMessage||Object(d.f)(a);var t=a||{},r=t.formatMessage,l=void 0===r?b:r,c=t.textComponent,o=void 0===c?s.Fragment:c,m=e.props,i=m.id,u=m.description,f=m.defaultMessage,p=m.values,v=m.children,E=m.tagName,N=void 0===E?o:E,g=l({id:i,description:u,defaultMessage:f},p);return Array.isArray(g)||(g=[g]),"function"===typeof v?v.apply(void 0,Object(n.a)(g)):N?s.createElement.apply(s,[N,null].concat(Object(n.a)(g))):g}))}}]),t}(s.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v}}]);
//# sourceMappingURL=0.258ad2d3.chunk.js.map