(this["webpackJsonp@craftercms/wordify-react"]=this["webpackJsonp@craftercms/wordify-react"]||[]).push([[6,11],{142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14);a.default=function(e){var a=e.model,t=e.model,n=t.linkButtonText_s,c=t.showLinkButton_b,o=t.facebookLink_s,m=t.twitterLink_s,s=t.instagramLink_s,i=t.youTubeLink_s;return r.a.createElement(l.b,{className:"bio text-center",model:a},r.a.createElement(l.d,{component:"img",renderTarget:"src",model:a,fieldId:"profilePic_s",className:"img-fluid",alt:""}),r.a.createElement("div",{className:"bio-body"},r.a.createElement(l.d,{component:"h2",model:a,fieldId:"name_s"}),c&&n&&r.a.createElement("p",null,r.a.createElement(l.d,{component:"a",model:a,fieldId:"linkButtonText_s,linkButtonUrl_s",renderTarget:"children,href",className:"btn btn-primary btn-sm rounded bio-link"})),r.a.createElement(l.d,{component:"p",model:a,fieldId:"bio_t"}),r.a.createElement("p",{className:"social"},o&&r.a.createElement("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-facebook"})),m&&r.a.createElement("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-twitter"})),s&&r.a.createElement("a",{href:s,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-instagram"})),i&&r.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-youtube-play"})))))}},154:function(e,a,t){"use strict";t.r(a);var n=t(41),r=t(1),l=t(0),c=t.n(l),o=t(80),m=t(163),s=t(162),i=t(164),d=t(165),u=t(167),f=t(14),p=t(82),g=t(168),E=function(e){var a=e.id,t=e.websiteShortname;return Object(l.useEffect)((function(){var e="dsq-count-scr";if(!document.getElementById(e)){var a=document,n=a.createElement("script");n.src="https://".concat(null!==t&&void 0!==t?t:"DISQUS",".disqus.com/count.js"),n.id=e,n.async=!0,a.body.appendChild(n)}}),[a,t]),c.a.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":a,"data-disqus-url":window.location.origin})},v=function(e){var a=e.id,t=e.websiteShortname;return Object(l.useEffect)((function(){var e="disq_script";if(document.getElementById(e))window.DISQUS.reset({reload:!0,config:n});else{var n=function(){this.page.url=window.location.origin,this.page.identifier=a},r=document,l=r.createElement("script");l.src="https://".concat(null!==t&&void 0!==t?t:"DISQUS",".disqus.com/embed.js"),l.id=e,l.async=!0,l.setAttribute("data-timestamp",+new Date),r.body.appendChild(l)}}),[a,t]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"disqus_recommendations"}),"   ",c.a.createElement("div",{id:"disqus_thread",className:"mt-5"}))},b=t(166),N=t(35);a.default=function(e){var a,t,h,_,y,k=e.model,I=e.meta,C=I.levelDescriptor,w=I.disqus.websiteShortname,x=Object(g.a)().formatDate,P=Object(l.useState)({itemsPerPage:10,currentPage:0}),j=Object(r.a)(P,2),T=j[0],O=j[1],S=Object(N.c)(T,k.categories_o,k.tags_o,k.craftercms.path);return c.a.createElement(o.a,{model:C},c.a.createElement("section",{className:"site-section py-lg"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row blog-entries element-animate-disabled"},c.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},c.a.createElement(f.d,{component:"img",model:k,fieldId:"mainImage_s",renderTarget:"src",alt:"",className:"img-fluid mb-5"}),c.a.createElement("div",{className:"post-meta"},c.a.createElement("span",{className:"author mr-2"},c.a.createElement("img",{src:k.authorBio_o[0].profilePic_s,alt:"",className:"mr-2"})," ",k.authorBio_o[0].name_s)," \u2022 ",c.a.createElement("span",{className:"mr-2"},x(k.craftercms.dateCreated))," \u2022 ",c.a.createElement("span",{className:"ml-2"},c.a.createElement("span",{className:"fa fa-comments mr-2"})),c.a.createElement(E,{id:k.craftercms.id,websiteShortname:w})),c.a.createElement(f.d,{component:"h1",model:k,fieldId:"headline_s",className:"mb-4"}),null===(a=k.categories_o)||void 0===a?void 0:a.map((function(e){return c.a.createElement("a",{className:"category mb-5",href:"/category/".concat(e.key),key:e.key},e.value_smv)})),c.a.createElement(f.d,{model:k,component:"div",fieldId:"content_o",className:"post-content-body",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,a){return c.a.createElement(f.b,{key:"".concat(e.craftercms.id,"_").concat(a),model:k,index:a,fieldId:"content_o"},c.a.createElement(f.a,{model:e,contentTypeMap:p.a}))}))}}),c.a.createElement("div",{className:"pt-5"},(null===(t=k.categories_o)||void 0===t?void 0:t.length)>0&&c.a.createElement("div",null,"Categories:",null===(h=k.categories_o)||void 0===h?void 0:h.map((function(e,a){return c.a.createElement("a",{href:"/category/".concat(e.key),key:e.key},e.value_smv,k.categories_o.length===a+1?"":",")}))),(null===(_=k.tags_o)||void 0===_?void 0:_.length)>0&&c.a.createElement("div",null,"Tags:",null===(y=k.tags_o)||void 0===y?void 0:y.map((function(e,a){return c.a.createElement("a",{href:"/tag/".concat(e.key),key:e.key},"#",e.value_smv,k.tags_o.length===a+1?"":",")})))),w&&c.a.createElement(v,{id:k.craftercms.id,websiteShortname:w})),c.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},c.a.createElement(d.a,null),c.a.createElement(u.a,{model:k,fieldId:"authorBio_o"}),c.a.createElement(m.a,null),c.a.createElement(i.a,null),c.a.createElement(i.b,null))))),c.a.createElement("section",{className:"py-5"},c.a.createElement("div",{className:"container"},S&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h2",{className:"mb-3"},"Related Posts"))),c.a.createElement("div",{className:"row"},null===S||void 0===S?void 0:S.items.map((function(e){return c.a.createElement("div",{key:e.craftercms.id,className:"col-md-6 col-lg-4"},c.a.createElement(s.d,{model:e,format:s.a,classes:{root:"sm height-md"}}))}))),(null===S||void 0===S?void 0:S.pageCount)>1&&c.a.createElement("nav",{"aria-label":"Posts navigation",className:"text-center"},c.a.createElement(b.a,{pageCount:S.pageCount,onPageChange:function(e){return O(Object(n.a)(Object(n.a)({},T),{},{currentPage:e*T.itemsPerPage}))}}))))))}},162:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n),l=t(31),c=t(168),o=t(14),m="portrait",s="landscape",i="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(c.a)().formatDate,u=e.classes,f=e.format,p=void 0===f?m:f,g=e.showBlurb,E=void 0!==g&&g,v=e.numOfComments,b=e.model,N=e.model,h=N.authorBio_o,_=N.headline_s,y=N.mainImageAlt_s,k=void 0===y?"":y,I=N.categories_o,C=N.craftercms.dateModified,w=null===h||void 0===h?void 0:h[0],x=r.a.createElement("div",{className:"post-meta"},r.a.createElement(o.b,{component:"span",model:b,fieldId:"authorBio_o",index:0,className:"author mr-2"},r.a.createElement(o.b,{component:"span",model:w},r.a.createElement(o.d,{component:"img",model:w,renderTarget:"src",fieldId:"profilePic_s",alt:""})," ",r.a.createElement(o.d,{component:"span",model:w,fieldId:"name_s"})))," \u2022 ",r.a.createElement("span",{className:"mr-2"},n(C)),v&&r.a.createElement(r.a.Fragment,null," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",v))),P=b.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml","");switch(p){case m:return r.a.createElement(o.b,{component:l.b,model:b,to:P,className:"blog-entry ".concat(null!==(a=null===u||void 0===u?void 0:u.root)&&void 0!==a?a:"")},r.a.createElement("div",{className:"img-container"},r.a.createElement(o.d,{component:"img",model:b,renderTarget:"src",fieldId:"mainImage_s",alt:k})),r.a.createElement("div",{className:"blog-content-body"},x,r.a.createElement(o.d,{component:"h2",model:b,fieldId:"headline_s"})));case s:return r.a.createElement("div",{className:"post-entry-horizontal"},r.a.createElement(o.b,{component:l.b,model:b,to:P,className:null===u||void 0===u?void 0:u.root},r.a.createElement(o.d,{model:b,fieldId:"mainImage_s",renderTarget:"style.backgroundImage",format:function(e){return'url("'.concat(e,'")')},className:"image"}),r.a.createElement("span",{className:"text"},x,r.a.createElement(o.d,{component:"h2",fieldId:"headline_s",model:b}))));case i:return r.a.createElement(o.b,{component:l.b,model:b,to:P,className:null===u||void 0===u?void 0:u.root},r.a.createElement(o.d,{component:"img",renderTarget:"src",model:b,fieldId:"mainImage_s",className:"mr-4",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement(o.d,{component:"h4",model:b,fieldId:"headline_s"}),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},n(C)))));case d:return r.a.createElement(o.d,{model:b,fieldId:"mainImage_s",renderTarget:"style",className:"a-block d-flex align-items-center ".concat(null!==(t=null===u||void 0===u?void 0:u.root)&&void 0!==t?t:""),format:function(e){return{backgroundImage:'url("'.concat(e,'")')}}},r.a.createElement(o.b,{component:l.b,model:b,to:P,className:"text ".concat(null===u||void 0===u?void 0:u.innerWrapper)},r.a.createElement("div",{className:"post-meta"},I&&r.a.createElement(r.a.Fragment,null,null===I||void 0===I?void 0:I.map((function(e){return r.a.createElement("span",{className:"category",key:e.key},e.value_smv)}))," \u2022 "),r.a.createElement("span",{className:"mr-2"},n(C)),v&&r.a.createElement(r.a.Fragment,null," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",v))),r.a.createElement(o.d,{component:"h3",model:b,fieldId:"headline_s"}),E&&r.a.createElement(o.d,{component:"p",model:b,fieldId:"blurb_t"})));default:return console.error('Unknown PostCard format "'.concat(p,'" on post "').concat(_,'"')),r.a.createElement(o.b,{component:l.b,model:b,to:P,className:null===u||void 0===u?void 0:u.root},r.a.createElement("h2",null,_))}}},163:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(169),c=t(162),o=t(35);a.a=function(){var e=Object(o.d)();return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Latest Posts"})),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement("li",{key:e.craftercms.id},r.a.createElement(c.d,{model:e,format:c.c}))})))))}},164:function(e,a,t){"use strict";t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return p}));var n=t(0),r=t.n(n),l=t(169),c=t(35),o=t(17),m=t(56),s=t(23),i=t(14);function d(e){var a,t=e.title,n=e.filter,l=e.baseUrl,c=e.listClass,o=e.resource.read().data,m=Object(s.a)(o.taxonomy.items).filter(n)[0];return Array.isArray(null===m||void 0===m||null===(a=m.items)||void 0===a?void 0:a.item)&&m.items.item.length>0&&r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},t),r.a.createElement(i.b,{component:"ul",model:m,className:"".concat(c," clearfix")},null===m||void 0===m?void 0:m.items.item.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:"".concat(l,"/").concat(e.key)},e.value))}))))}function u(e){var a=Object(c.g)();return r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,{screenHeight:!1})},r.a.createElement(d,Object.assign({},e,{resource:a})))}function f(){return r.a.createElement(u,{title:r.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(o.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function p(){return r.a.createElement(u,{title:r.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(o.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},165:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(141),c=t(168),o=t(81),m=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(c.a)().formatMessage;return r.a.createElement("div",{className:"sidebar-box search-form-wrap"},r.a.createElement(o.a,{id:"s",placeholder:e(m.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},166:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(170),c=t.n(l);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return r.a.createElement(c.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:r.a.createElement("span",null,"<"),nextLabel:r.a.createElement("span",null,">")})}},167:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(142),c=t(14);function o(e){var a=e.model,t=e.fieldId;return r.a.createElement(c.d,{model:a,fieldId:t,className:"bio-zone",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,n){return r.a.createElement(c.b,{key:"".concat(e.craftercms.id,"_").concat(n),model:a,fieldId:t,index:n,className:"sidebar-box"},r.a.createElement(l.default,{model:e}))}))}})}}}]);
//# sourceMappingURL=6.b498e2e8.chunk.js.map