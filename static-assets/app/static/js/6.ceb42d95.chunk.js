(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[6,11],{181:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r,n,l=t(0),c=t(4),s=t(84),m=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));function o(e){var a=function(a){return l.createElement(s.a.Consumer,null,(function(t){Object(c.f)(t);var r=a.value,n=a.children,l=m(a,["value","children"]),s="string"===typeof r?new Date(r||0):r;return n("formatDate"===e?t.formatDateToParts(s,l):t.formatTimeToParts(s,l))}))};return a.displayName=n[e],a}function i(e){var a=function(a){return l.createElement(s.a.Consumer,null,(function(t){Object(c.f)(t);var r=a.value,n=a.children,s=m(a,["value","children"]),o=t[e](r,s);if("function"===typeof n)return n(o);var i=t.textComponent||l.Fragment;return l.createElement(i,null,o)}))};return a.displayName=r[e],a}function u(e){return e}i("formatDate"),i("formatTime"),i("formatNumber"),i("formatList"),i("formatDisplayName"),o("formatDate"),o("formatTime")},184:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return f}));var r=t(9),n=t(0),l=t.n(n),c=t(5),s=t(185),m=t(70),o=t(20),i="landscape",u="landscapeCompressed",f="imageBackground";a.d=function(e){var a,t,n=Object(s.a)().formatDate,d=Object(o.b)(),E=Object(r.a)(d,1)[0].isAuthoring,p=e.classes,v=e.parentModelId,b=e.format,g=void 0===b?"portrait":b,N=e.showBlurb,h=void 0!==N&&N,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,k=e.model,F=e.model,w=Object(r.a)(F.authorBio_o,1)[0],P=w.name_s,x=w.profilePic_s,_=F.blurb_t,T=F.headline_s,C=F.mainImage_s,D=F.mainImageAlt_s,L=void 0===D?"":D,M=F.craftercms.dateModified,B=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace("post/","articles/"),A=Object(m.b)({model:k,parentModelId:v,isAuthoring:E}).props;switch(g){case"portrait":return l.a.createElement(c.b,Object.assign({to:B,className:"blog-entry ".concat(null!==(a=null===p||void 0===p?void 0:p.root)&&void 0!==a?a:"")},A),l.a.createElement("img",{src:C,alt:L}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",P)," \u2022 ",l.a.createElement("span",{className:"mr-2"},n(M)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h2",null,T)));case i:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},A),l.a.createElement(c.b,{to:B,className:null===p||void 0===p?void 0:p.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(C,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",P),"\u2022 ",l.a.createElement("span",{className:"mr-2"},n(M)),j&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",j))),l.a.createElement("h2",null,T))));case u:return l.a.createElement(c.b,Object.assign({to:B,className:null===p||void 0===p?void 0:p.root},A),l.a.createElement("img",{src:C,alt:L,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,T),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},n(M)))));case f:return l.a.createElement(c.b,{to:B,className:"a-block d-flex align-items-center ".concat(null!==(t=null===p||void 0===p?void 0:p.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(C,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===p||void 0===p?void 0:p.innerWrapper)},A),l.a.createElement("div",{className:"post-meta"},O&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"category"},O)," \u2022 "),l.a.createElement("span",{className:"mr-2"},n(M)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h3",null,T),h&&l.a.createElement("p",null,_)));default:return console.error('Unknown PostCard format "'.concat(g,'" on post "').concat(T,'"')),l.a.createElement(c.b,Object.assign({to:B,className:null===p||void 0===p?void 0:p.root},A),l.a.createElement("h2",null,T))}}},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),n=t(84),l=t(4);function c(){var e=Object(r.useContext)(n.a);return Object(l.f)(e),e}},186:function(e,a,t){"use strict";var r=t(88),n=t(55),l=t(86),c=t(57),s=t(56),m=t(0),o=t(84),i=t(87),u=t(4),f=t(71),d=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t},E=t.n(f).a||f;function p(e,a){return Object(i.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,r=d(a,["values"]),n=e.values,l=d(e,["values"]);return!E(n,t)||!E(r,l)}},{key:"render",value:function(){var e=this;return m.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},n=t.formatMessage,l=void 0===n?p:n,c=t.textComponent,s=void 0===c?m.Fragment:c,o=e.props,i=o.id,f=o.description,d=o.defaultMessage,E=o.values,v=o.children,b=o.tagName,g=void 0===b?s:b,N=l({id:i,description:f,defaultMessage:d},E);return Array.isArray(N)||(N=[N]),"function"===typeof v?v.apply(void 0,Object(r.a)(N)):g?m.createElement.apply(m,[g,null].concat(Object(r.a)(N))):N}))}}]),t}(m.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},187:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186),c=t(184);a.a=function(e){var a=e.posts;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(c.d,{model:e,format:c.c}))})))))}},188:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),n.a.createElement("ul",{className:"categories"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food ",n.a.createElement("span",null,"(12)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel ",n.a.createElement("span",null,"(22)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle ",n.a.createElement("span",null,"(37)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business ",n.a.createElement("span",null,"(42)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure ",n.a.createElement("span",null,"(14)")))))}},189:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),n.a.createElement("ul",{className:"tags"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing"))))}},190:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r);a.default=function(e){var a=e.ice,t=e.model,r=t.bio_t,l=t.name_s,c=t.profilePic_s,s=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b,i=t.facebookLink_s,u=t.twitterLink_s,f=t.instagramLink_s,d=t.youTubeLink_s;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",Object.assign({className:"bio text-center"},a),n.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),n.a.createElement("div",{className:"bio-body"},n.a.createElement("h2",null,l),n.a.createElement("p",null,r),o&&n.a.createElement("p",null,n.a.createElement("a",{href:m,className:"btn btn-primary btn-sm rounded"},s)),n.a.createElement("p",{className:"social"},i&&n.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-facebook"})),u&&n.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-twitter"})),f&&n.a.createElement("a",{href:f,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-instagram"})),d&&n.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},193:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(190),c=t(23);function s(e){var a=e.model,t=Object(c.c)(e);return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement(l.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return n.a.createElement(n.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement(s,{key:e.craftercms.id,model:e})})))}},194:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(181),c=t(185),s=t(89),m=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(c.a)().formatMessage;return n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement(s.a,{id:"s",placeholder:e(m.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},200:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(85),c=t(187),s=t(184),m=t(193),o=t(194),i=t(188),u=t(189);a.default=function(e){var a=e.bios_o,t=e.posts;return n.a.createElement(l.a,null,n.a.createElement("section",{className:"site-section pt-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h2",{className:"mb-4"},"Category: Food"))),n.a.createElement("div",{className:"row blog-entries"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement("div",{className:"row mb-5 mt-5"},n.a.createElement("div",{className:"col-md-12"},null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(s.d,{key:e.craftercms.id,model:e,format:s.b})})))),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("nav",{"aria-label":"Page navigation",className:"text-center"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item  active"},n.a.createElement("a",{className:"page-link",href:"/"},"<")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"1")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"2")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"3")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"4")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"5")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},">"))))))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement(o.a,null),n.a.createElement(m.a,{bios:a}),n.a.createElement(c.a,{posts:t}),n.a.createElement(i.a,null),n.a.createElement(u.a,null))))))}}}]);
//# sourceMappingURL=6.ceb42d95.chunk.js.map