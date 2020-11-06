function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar-bios/sidebar-bios.component */
    "./src/app/sidebar-bios/sidebar-bios.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../content-type/content-type.component */
    "./src/app/content-type/content-type.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");

    function AboutComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content-type", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var component_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", component_r3);
      }
    }

    function AboutComponent_app_post_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 15);
      }

      if (rf & 2) {
        var post_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", "landscape")("model", post_r4);
      }
    }

    function AboutComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pagination", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx_r2.paginationData.currentPage)("itemsPerPage", ctx_r2.paginationData.itemsPerPage)("pageCount", ctx_r2.paginationData.pageCount)("onPageChange", ctx_r2.onPageChange.bind(ctx_r2));
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(contentService) {
        _classCallCheck(this, AboutComponent);

        this.contentService = contentService;
        this.paginationData = _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["defaultData"];
      }

      _createClass(AboutComponent, [{
        key: "getPosts",
        value: function getPosts() {
          var _this = this;

          this.contentService.getPosts(null, null, null, this.paginationData).subscribe(function (response) {
            _this.paginationData.pageCount = Math.ceil(response.total / _this.paginationData.itemsPerPage);
            _this.posts_o = response.items;
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.paginationData.currentPage = page;
          this.getPosts();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headline_s = this.state.model.headline_s;
          this.bios_o = this.state.model.bios_o;
          this.content_o = this.state.model.content_o;
          this.paginationData.itemsPerPage = this.state.meta.posts.limit;
          this.getPosts();
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      inputs: {
        state: "state"
      },
      decls: 22,
      vars: 5,
      consts: [[1, "site-section", "pt-5"], [1, "container"], [1, "row", "blog-entries"], [1, "col-md-12", "col-lg-8", "main-content"], [1, "row"], [1, "col-md-12"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "row", "mb-5", "mt-5"], [1, "col-md-12", "mb-5"], [3, "format", "model", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-12", "col-lg-4", "sidebar"], [3, "bios"], [1, "mb-5"], [3, "model"], [3, "format", "model"], [1, "col-md-12", "text-center"], ["aria-label", "Page navigation", 1, "text-center"], [3, "currentPage", "itemsPerPage", "pageCount", "onPageChange"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_div_8_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Latest Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AboutComponent_app_post_card_14_Template, 1, 2, "app-post-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutComponent_div_15_Template, 4, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-sidebar-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-sidebar-bios", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline_s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginationData.pageCount > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bios", ctx.bios_o);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__["SidebarSearchComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__["SidebarBiosComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTagsComponent"], _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_9__["ContentTypeComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__["PostCardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dynamic-route/dynamic-route.component */
    "./src/app/dynamic-route/dynamic-route.component.ts");

    var routes = [{
      path: 'category/:id',
      component: _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_2__["DynamicRouteComponent"]
    }, {
      path: 'tag/:id',
      component: _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_2__["DynamicRouteComponent"]
    }, {
      path: '',
      component: _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_2__["DynamicRouteComponent"]
    }, {
      path: '**',
      component: _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_2__["DynamicRouteComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "wrap", "theme-light"], [1, "wrap"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sort-by.pipe */
    "./src/app/sort-by.pipe.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/slider/slider.component.ts");
    /* harmony import */


    var _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dynamic-route/dynamic-route.component */
    "./src/app/dynamic-route/dynamic-route.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./search-form/search-form.component */
    "./src/app/search-form/search-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./sidebar-bios/sidebar-bios.component */
    "./src/app/sidebar-bios/sidebar-bios.component.ts");
    /* harmony import */


    var _bio_bio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./bio/bio.component */
    "./src/app/bio/bio.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sidebar-taxonomies/sidebar-taxonomies.component */
    "./src/app/sidebar-taxonomies/sidebar-taxonomies.component.ts");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");
    /* harmony import */


    var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./category-card/category-card.component */
    "./src/app/category-card/category-card.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./content-type/content-type.component */
    "./src/app/content-type/content-type.component.ts");
    /* harmony import */


    var _image_image_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./image/image.component */
    "./src/app/image/image.component.ts");
    /* harmony import */


    var _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./responsive-columns/responsive-columns.component */
    "./src/app/responsive-columns/responsive-columns.component.ts");
    /* harmony import */


    var _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./rich-text/rich-text.component */
    "./src/app/rich-text/rich-text.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _toast_toast_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./toast/toast.component */
    "./src/app/toast/toast.component.ts");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./comments/comments.component */
    "./src/app/comments/comments.component.ts");
    /* harmony import */


    var _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./comments-count/comments-count.component */
    "./src/app/comments-count/comments-count.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SortByPipe"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"], _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_10__["DynamicRouteComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_11__["PostCardComponent"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSearchComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__["SearchFormComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_15__["SidebarBiosComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_16__["BioComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_17__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_18__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_19__["SidebarTagsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"], _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_24__["SidebarTaxonomiesComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__["PaginationComponent"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_26__["CategoryCard"], _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"], _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_28__["ContentTypeComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_29__["ImageComponent"], _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_30__["ResponsiveColumnsComponent"], _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_31__["RichTextComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_33__["ToastComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_34__["CommentsComponent"], _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_35__["CommentsCountComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SortByPipe"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"], _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_10__["DynamicRouteComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_11__["PostCardComponent"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSearchComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__["SearchFormComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_15__["SidebarBiosComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_16__["BioComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_17__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_18__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_19__["SidebarTagsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"], _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_24__["SidebarTaxonomiesComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__["PaginationComponent"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_26__["CategoryCard"], _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"], _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_28__["ContentTypeComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_29__["ImageComponent"], _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_30__["ResponsiveColumnsComponent"], _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_31__["RichTextComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_33__["ToastComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_34__["CommentsComponent"], _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_35__["CommentsCountComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_30__["ResponsiveColumnsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_36__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"], _dynamic_route_dynamic_route_component__WEBPACK_IMPORTED_MODULE_10__["DynamicRouteComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_11__["PostCardComponent"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_12__["SidebarSearchComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__["SearchFormComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_15__["SidebarBiosComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_16__["BioComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_17__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_18__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_19__["SidebarTagsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"], _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_24__["SidebarTaxonomiesComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_25__["PaginationComponent"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_26__["CategoryCard"], _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"], _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_28__["ContentTypeComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_29__["ImageComponent"], _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_30__["ResponsiveColumnsComponent"], _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_31__["RichTextComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_33__["ToastComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_34__["CommentsComponent"], _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_35__["CommentsCountComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_36__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["KeyValuePipe"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SortByPipe"]]);
    /***/

  },

  /***/
  "./src/app/bio/bio.component.ts":
  /*!**************************************!*\
    !*** ./src/app/bio/bio.component.ts ***!
    \**************************************/

  /*! exports provided: BioComponent */

  /***/
  function srcAppBioBioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BioComponent", function () {
      return BioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BioComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.linkButtonUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.linkButtonText);
      }
    }

    function BioComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BioComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.twitterLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BioComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.instagramLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BioComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.youTubeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var BioComponent = /*#__PURE__*/function () {
      function BioComponent() {
        _classCallCheck(this, BioComponent);
      }

      _createClass(BioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // TODO: can be used directly from bio. ???
          this.name = this.bio.name_s;
          this.profilePic = this.bio.profilePic_s;
          this.linkButtonUrl = this.bio.linkButtonUrl_s;
          this.showLinkButton = this.bio.showLinkButton_b;
          this.linkButtonText = this.bio.linkButtonText_s;
          this.bioText = this.bio.bio_t;
          this.facebookLink = this.bio.facebookLink_s;
          this.twitterLink = this.bio.twitterLink_s;
          this.instagramLink = this.bio.instagramLink_s;
          this.youTubeLink = this.bio.youTubeLink_s;
        }
      }]);

      return BioComponent;
    }();

    BioComponent.ɵfac = function BioComponent_Factory(t) {
      return new (t || BioComponent)();
    };

    BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BioComponent,
      selectors: [["app-bio"]],
      inputs: {
        bio: "bio"
      },
      decls: 13,
      vars: 8,
      consts: [[1, "bio", "text-center"], [1, "img-fluid", 3, "src"], [1, "bio-body"], [4, "ngIf"], [1, "social"], ["class", "p-2", 3, "href", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", "rounded", 3, "href"], [1, "p-2", 3, "href"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-youtube-play"]],
      template: function BioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BioComponent_p_5_Template, 3, 2, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BioComponent_a_9_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BioComponent_a_10_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BioComponent_a_11_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BioComponent_a_12_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLinkButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bioText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facebookLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.twitterLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instagramLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.youTubeLink);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bio',
          templateUrl: './bio.component.html',
          styleUrls: ['./bio.component.scss']
        }]
      }], function () {
        return [];
      }, {
        bio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/category-card/category-card.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/category-card/category-card.component.ts ***!
    \**********************************************************/

  /*! exports provided: CategoryCard */

  /***/
  function srcAppCategoryCardCategoryCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryCard", function () {
      return CategoryCard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /*
     * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License version 3 as published by
     * the Free Software Foundation.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */


    function CategoryCard_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.category.image_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.category.value);
      }
    }

    var CategoryCard = /*#__PURE__*/function () {
      function CategoryCard() {
        _classCallCheck(this, CategoryCard);
      }

      _createClass(CategoryCard, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.link = "/".concat(this.isTag ? 'tag' : 'category', "/").concat(this.category.key);
        }
      }]);

      return CategoryCard;
    }();

    CategoryCard.ɵfac = function CategoryCard_Factory(t) {
      return new (t || CategoryCard)();
    };

    CategoryCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryCard,
      selectors: [["app-category-card"]],
      inputs: {
        category: "category",
        isTag: "isTag"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "blog-entry", "category-card", 3, "routerLink"], ["class", "background", 3, "src", "alt", 4, "ngIf"], [1, "title"], [1, "background", 3, "src", "alt"]],
      template: function CategoryCard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryCard_img_1_Template, 1, 2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category.image_s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.value);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWNhcmQvY2F0ZWdvcnktY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-card',
          templateUrl: './category-card.component.html',
          styleUrls: ['./category-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/category/category.component.ts":
  /*!************************************************!*\
    !*** ./src/app/category/category.component.ts ***!
    \************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../category-card/category-card.component */
    "./src/app/category-card/category-card.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");

    function CategoryComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-category-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r3)("isTag", ctx_r2.isTag);
      }
    }

    function CategoryComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_div_3_div_4_Template, 2, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.isTag ? "Tags" : "Categories", ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
      }
    }

    function CategoryComponent_div_4_app_post_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 15);
      }

      if (rf & 2) {
        var post_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", "landscape")("model", post_r6);
      }
    }

    function CategoryComponent_div_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pagination", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx_r5.paginationData.currentPage)("itemsPerPage", ctx_r5.paginationData.itemsPerPage)("pageCount", ctx_r5.paginationData.pageCount)("onPageChange", ctx_r5.onPageChange.bind(ctx_r5));
      }
    }

    function CategoryComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoryComponent_div_4_app_post_card_5_Template, 1, 2, "app-post-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryComponent_div_4_div_6_Template, 4, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.isTag ? "Tag" : "Category", ": ", ctx_r1.item == null ? null : ctx_r1.item.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.posts_o);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paginationData.pageCount > 1);
      }
    }

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(router, actRoute, contentService) {
        _classCallCheck(this, CategoryComponent);

        this.router = router;
        this.actRoute = actRoute;
        this.contentService = contentService;
        this.items = []; // list of categories/tags

        this.posts_o = [];
        this.paginationData = {
          currentPage: 0,
          itemsPerPage: 0,
          pageCount: 0
        };
      }

      _createClass(CategoryComponent, [{
        key: "getPosts",
        value: function getPosts() {
          var _this2 = this;

          this.contentService.getPosts(this.isTag ? null : this.item, this.isTag ? this.item : null, null, this.paginationData).subscribe(function (response) {
            _this2.paginationData.pageCount = Math.ceil(response.total / _this2.paginationData.itemsPerPage);
            _this2.posts_o = response.items;
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.paginationData.currentPage = page;
          this.getPosts();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.isTag = this.router.url.startsWith('/tag');
          this.itemId = this.actRoute.snapshot.params.id;
          this.paginationData.itemsPerPage = this.state.meta.posts.limit;

          var filter = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTaxonomyFilter("".concat(this.isTag ? 'tags' : 'categories', ".xml"));

          this.contentService.getTaxonomies().subscribe(function (response) {
            var _a;

            _this3.items = response.filter(filter)[0].items.item;

            if (_this3.itemId) {
              _this3.item = (_a = _this3.items) === null || _a === void 0 ? void 0 : _a.filter(function (category) {
                return category.key === _this3.itemId;
              })[0];

              _this3.getPosts();
            }
          });
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      inputs: {
        state: "state"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "site-section", "pt-5"], [1, "container"], [1, "row", "blog-entries"], ["class", "col-md-12 col-lg-8 main-content", 4, "ngIf"], [1, "col-md-12", "col-lg-4", "sidebar"], [1, "col-md-12", "col-lg-8", "main-content"], [1, "mb-4"], [1, "row"], ["class", "col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-4"], [3, "category", "isTag"], [1, "row", "mb-5", "mt-5"], [1, "col-md-12"], [3, "format", "model", 4, "ngFor", "ngForOf"], ["class", "row mt-5", 4, "ngIf"], [3, "format", "model"], [1, "row", "mt-5"], [1, "col-md-12", "text-center"], ["aria-label", "Page navigation", 1, "text-center"], [3, "currentPage", "itemsPerPage", "pageCount", "onPageChange"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_div_3_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_div_4_Template, 7, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sidebar-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.itemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_5__["SidebarSearchComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTagsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_9__["CategoryCard"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__["PostCardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comments-count/comments-count.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/comments-count/comments-count.component.ts ***!
    \************************************************************/

  /*! exports provided: CommentsCountComponent */

  /***/
  function srcAppCommentsCountCommentsCountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsCountComponent", function () {
      return CommentsCountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommentsCountComponent = /*#__PURE__*/function () {
      function CommentsCountComponent() {
        _classCallCheck(this, CommentsCountComponent);

        this.origin = window.location.origin;
      }

      _createClass(CommentsCountComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _a;

          var DISQUS_COUNT_SCRIPT = 'dsq-count-scr';
          var disqusCountEl = document.getElementById(DISQUS_COUNT_SCRIPT);

          if (!disqusCountEl) {
            var d = document;
            var s = d.createElement('script');
            s.src = "https://".concat((_a = this.websiteShortname) !== null && _a !== void 0 ? _a : 'DISQUS', ".disqus.com/count.js");
            s.id = DISQUS_COUNT_SCRIPT;
            s.async = true;
            d.body.appendChild(s);
          }
        }
      }]);

      return CommentsCountComponent;
    }();

    CommentsCountComponent.ɵfac = function CommentsCountComponent_Factory(t) {
      return new (t || CommentsCountComponent)();
    };

    CommentsCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsCountComponent,
      selectors: [["app-comments-count"]],
      inputs: {
        id: "id",
        websiteShortname: "websiteShortname"
      },
      decls: 1,
      vars: 2,
      consts: [[1, "disqus-comment-count", "ml-2"]],
      template: function CommentsCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-disqus-identifier", ctx.id)("data-disqus-url", ctx.origin);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzLWNvdW50L2NvbW1lbnRzLWNvdW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comments-count',
          templateUrl: './comments-count.component.html',
          styleUrls: ['./comments-count.component.scss']
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        websiteShortname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comments/comments.component.ts":
  /*!************************************************!*\
    !*** ./src/app/comments/comments.component.ts ***!
    \************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent() {
        _classCallCheck(this, CommentsComponent);
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a;

          var DISQUS_SCRIPT = 'disq_script';
          var sd = document.getElementById(DISQUS_SCRIPT);

          if (!sd) {
            var disqus_config = function disqus_config() {
              this.page.url = window.location.origin;
              this.page.identifier = this.id;
            };

            var d = document;
            var s = d.createElement('script');
            s.src = "https://".concat((_a = this.websiteShortname) !== null && _a !== void 0 ? _a : 'DISQUS', ".disqus.com/embed.js");
            s.id = DISQUS_SCRIPT;
            s.async = true; // @ts-ignore

            s.setAttribute('data-timestamp', +new Date());
            d.body.appendChild(s);
          } else {
            // @ts-ignore
            window.DISQUS.reset({
              reload: true,
              config: disqus_config
            });
          }
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ɵfac = function CommentsComponent_Factory(t) {
      return new (t || CommentsComponent)();
    };

    CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsComponent,
      selectors: [["app-comments"]],
      inputs: {
        id: "id",
        websiteShortname: "websiteShortname"
      },
      decls: 1,
      vars: 0,
      consts: [["id", "disqus_thread", "className", "mt-5"]],
      template: function CommentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comments',
          templateUrl: './comments.component.html',
          styleUrls: ['./comments.component.scss']
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        websiteShortname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../toast/toast.component */
    "./src/app/toast/toast.component.ts");

    var initialFormData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
    var initialToastData = {
      display: false,
      type: '',
      text: ''
    };

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(contentService) {
        _classCallCheck(this, ContactComponent);

        this.contentService = contentService;
        this.formData = Object.assign({}, initialFormData);
        this.toastData = Object.assign({}, initialToastData);
      }

      _createClass(ContactComponent, [{
        key: "showToast",
        value: function showToast(text, type) {
          var _this4 = this;

          this.toastData = {
            display: true,
            text: text,
            type: type
          };
          setTimeout(function () {
            _this4.toastData = Object.assign({}, initialToastData);
          }, 3000);
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit() {
          var _this5 = this;

          this.contentService.submitContactData(this.formData).subscribe(function (response) {
            if (response.success) {
              _this5.formData = Object.assign({}, initialFormData);

              _this5.showToast('Message successfully sent!', 'success');
            } else {
              _this5.showToast('There was an error sending the message', 'danger');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.posts_o = this.state.posts;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      inputs: {
        state: "state"
      },
      decls: 40,
      vars: 7,
      consts: [[1, "site-section"], [1, "container"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "row", "blog-entries"], [1, "col-md-12", "col-lg-8", "main-content"], [3, "ngSubmit"], [1, "row"], [1, "col-md-12", "form-group"], ["htmlFor", "name"], ["id", "name", "name", "name", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["htmlFor", "phone"], ["id", "phone", "name", "phone", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["htmlFor", "email"], ["id", "email", "name", "email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["htmlFor", "message"], ["cols", "30", "id", "message", "name", "message", "rows", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-6", "form-group"], ["type", "submit", "value", "Send Message", 1, "btn", "btn-primary"], [1, "col-md-12", "col-lg-4", "sidebar"], [1, "sidebar-box", "search-form-wrap"], ["action", "#", 1, "search-form"], [1, "form-group"], [1, "icon", "fa", "fa-search"], ["id", "s", "placeholder", "Type a keyword and hit enter", "type", "text", 1, "form-control"], [3, "display", "type", "text"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_8_listener() {
            return ctx.handleSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.formData.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.formData.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.formData.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Write Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_26_listener($event) {
            return ctx.formData.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-toast", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.toastData.display)("type", ctx.toastData.type)("text", ctx.toastData.text);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_3__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_4__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_5__["SidebarTagsComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/content-type/content-type.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/content-type/content-type.component.ts ***!
    \********************************************************/

  /*! exports provided: ContentTypeComponent */

  /***/
  function srcAppContentTypeContentTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentTypeComponent", function () {
      return ContentTypeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../image/image.component */
    "./src/app/image/image.component.ts");
    /* harmony import */


    var _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rich-text/rich-text.component */
    "./src/app/rich-text/rich-text.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../responsive-columns/responsive-columns.component */
    "./src/app/responsive-columns/responsive-columns.component.ts");

    var contentTypeMap = {
      '/component/rich_text': _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_2__["RichTextComponent"],
      '/component/image': _image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"],
      '/component/responsive_columns': _responsive_columns_responsive_columns_component__WEBPACK_IMPORTED_MODULE_4__["ResponsiveColumnsComponent"]
    };

    var ContentTypeComponent = /*#__PURE__*/function () {
      function ContentTypeComponent(viewContainerRef, componentFactoryResolver) {
        _classCallCheck(this, ContentTypeComponent);

        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(ContentTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.component = this.model === null ? _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] : contentTypeMap[this.model.craftercms.contentTypeId] || _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"];
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
          this.viewContainerRef.clear();
          var componentRef = this.viewContainerRef.createComponent(componentFactory); // @ts-ignore

          componentRef.instance.model = this.model;
        }
      }]);

      return ContentTypeComponent;
    }();

    ContentTypeComponent.ɵfac = function ContentTypeComponent_Factory(t) {
      return new (t || ContentTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    ContentTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentTypeComponent,
      selectors: [["app-content-type"]],
      inputs: {
        model: "model"
      },
      decls: 1,
      vars: 0,
      template: function ContentTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtdHlwZS9jb250ZW50LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content-type',
          template: "<div></div>",
          styleUrls: ['./content-type.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/content.service.ts":
  /*!************************************!*\
    !*** ./src/app/content.service.ts ***!
    \************************************/

  /*! exports provided: ContentService */

  /***/
  function srcAppContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentService", function () {
      return ContentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _queries_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./queries.graphql */
    "./src/app/queries.graphql.js");
    /* harmony import */


    var _craftercms_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @craftercms/search */
    "./node_modules/@craftercms/search/esm2015/search.js");
    /* harmony import */


    var _craftercms_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @craftercms/content */
    "./node_modules/@craftercms/content/esm2015/content.js");
    /* harmony import */


    var _craftercms_classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @craftercms/classes */
    "./node_modules/@craftercms/classes/esm2015/classes.js");

    var ContentService = /*#__PURE__*/function () {
      function ContentService(httpClient) {
        _classCallCheck(this, ContentService);

        this.httpClient = httpClient;
        this.graphqlServer = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].graphqlServer;

        if (!this.graphqlServer.includes(_utils__WEBPACK_IMPORTED_MODULE_4__["default"].siteName())) {
          this.graphqlServer += "?crafterSite=".concat(_utils__WEBPACK_IMPORTED_MODULE_4__["default"].siteName());
        }
      }

      _createClass(ContentService, [{
        key: "fetchQuery",
        value: function fetchQuery(operation, variables) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var options = {
            headers: headers
          };
          return this.httpClient.post(this.graphqlServer, JSON.stringify({
            query: operation.text,
            variables: variables
          }), options);
        }
      }, {
        key: "getNav",
        value: function getNav() {
          return this.fetchQuery({
            text: "\n          query Nav {\n            pages {\n              total\n              items {\n                navLabel\n                contentTypeId: content__type\n                url: localId(transform: \"storeUrlToRenderUrl\")\n                placeInNav(filter: { equals: true }) @skip(if: true)\n                orderDefault_f\n              }\n            }\n          }\n        "
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data.pages.items;
          }));
        }
      }, {
        key: "getPageData",
        value: function getPageData(url, options) {
          return this.fetchQuery({
            text: _queries_graphql__WEBPACK_IMPORTED_MODULE_5__["default"]
          }, Object.assign({
            url: ".*".concat(url === '/' ? 'website/index' : url, ".*")
          }, options));
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.fetchQuery({
            text: "query Footer {\n        component_footer {\n          items {\n            guid: objectId\n            path: localId\n            contentTypeId: content__type\n            dateCreated: createdDate_dt\n            dateModified: lastModifiedDate_dt\n            label: internal__name\n            aboutTitle_s\n            about_t\n            aboutImage_s\n            quickLinksTitle_s\n            socialLinksTitle_s\n            file__name(filter: {matches: \"site-footer.xml\"})\n            internal__name\n            localId\n            quickLinks_o {\n              item {\n                label_s\n                url_s\n              }\n            }\n            copyright_html_raw\n          }\n        }\n      }"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_7__["parseDescriptor"])(response.data.component_footer.items)[0];
          }));
        }
      }, {
        key: "getPosts",
        value: function getPosts(categories, tags, exclude, paginationData) {
          var categoriesFilter = categories ? Array.isArray(categories) ? categories.map(function (category) {
            return {
              matches: category.key
            };
          }) : [{
            matches: categories.key
          }] : [];
          var tagsFilter = tags ? Array.isArray(tags) ? tags.map(function (tag) {
            return {
              matches: tag.key
            };
          }) : [{
            matches: tags.key
          }] : [];
          var queryVariables = Object.assign({
            categoriesFilter: categoriesFilter,
            tagsFilter: tagsFilter,
            exclude: exclude !== null && exclude !== void 0 ? exclude : ''
          }, paginationData ? {
            limit: paginationData.itemsPerPage,
            offset: paginationData.currentPage * paginationData.itemsPerPage
          } : {});
          return this.fetchQuery({
            text: _queries_graphql__WEBPACK_IMPORTED_MODULE_5__["postsQuery"]
          }, queryVariables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Object.assign({
              items: Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_7__["parseDescriptor"])(response.data.posts.items),
              total: response.data.posts.total
            }, paginationData ? {
              pageCount: Math.ceil(response.data.posts.total / paginationData.itemsPerPage)
            } : {});
          }));
        }
      }, {
        key: "getTaxonomies",
        value: function getTaxonomies() {
          return this.fetchQuery({
            text: "query Taxonomies {\n        taxonomy {\n          total\n          items {\n            guid: objectId\n            path: localId\n            contentTypeId: content__type\n            dateCreated: createdDate_dt\n            dateModified: lastModifiedDate_dt\n            label: internal__name\n            items {\n              item {\n                key\n                value\n                image_s\n              }\n            }\n          }\n        }\n      }"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_7__["parseDescriptor"])(response.data.taxonomy.items);
          }));
        }
      }, {
        key: "searchPosts",
        value: function searchPosts(query) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var contentTypes = ['/component/post'];
          return Object(_craftercms_search__WEBPACK_IMPORTED_MODULE_6__["search"])(Object(_craftercms_search__WEBPACK_IMPORTED_MODULE_6__["createQuery"])('elasticsearch', {
            query: {
              'bool': {
                'filter': [{
                  'bool': {
                    'should': contentTypes.map(function (id) {
                      return {
                        'match': {
                          'content-type': id
                        }
                      };
                    })
                  }
                }, {
                  'multi_match': {
                    'query': query,
                    'type': 'phrase_prefix'
                  }
                }]
              }
            },
            size: size,
            from: from
          }), _utils__WEBPACK_IMPORTED_MODULE_4__["default"].crafterConfig());
        }
      }, {
        key: "getLevelDescriptor",
        value: function getLevelDescriptor() {
          return this.fetchQuery({
            text: "query LevelDescriptor {\n        component_level__descriptor {\n          items {\n            siteTitle_s\n            file__name\n            websiteShortname_s\n            socialLinks_o {\n              item {\n                socialNetwork_s\n                label_s\n                url_s\n              }\n            }\n          }\n        }\n      }"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_7__["parseDescriptor"])(response.data.component_level__descriptor.items[0]);
          }));
        }
      }, {
        key: "submitContactData",
        value: function submitContactData(data) {
          return _craftercms_classes__WEBPACK_IMPORTED_MODULE_8__["SDKService"].httpPost('/api/contactus.json', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return [error];
          }));
        }
      }]);

      return ContentService;
    }();

    ContentService.ɵfac = function ContentService_Factory(t) {
      return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentService,
      factory: ContentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dynamic-route/dynamic-route.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dynamic-route/dynamic-route.component.ts ***!
    \**********************************************************/

  /*! exports provided: DynamicRouteComponent */

  /***/
  function srcAppDynamicRouteDynamicRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicRouteComponent", function () {
      return DynamicRouteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _craftercms_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @craftercms/content */
    "./node_modules/@craftercms/content/esm2015/content.js");
    /* harmony import */


    var _craftercms_ice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @craftercms/ice */
    "./node_modules/@craftercms/ice/esm2015/ice.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/search/search.component.ts");

    function DynamicRouteComponent_app_home_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.state);
      }
    }

    function DynamicRouteComponent_app_category_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r1.state);
      }
    }

    function DynamicRouteComponent_app_contact_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact", 3);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r2.state);
      }
    }

    function DynamicRouteComponent_app_about_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 3);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r3.state);
      }
    }

    function DynamicRouteComponent_app_post_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 3);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r4.state);
      }
    }

    function DynamicRouteComponent_app_search_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 3);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r5.state);
      }
    }

    function DynamicRouteComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DynamicRouteComponent = /*#__PURE__*/function () {
      function DynamicRouteComponent(router, contentService, actRoute) {
        _classCallCheck(this, DynamicRouteComponent);

        this.router = router;
        this.contentService = contentService;
        this.actRoute = actRoute;
        this.url = this.getUrlWithoutParams(); // since router path is `**`, router doesn't load view changes
        // this disables route reuse for the views to load properly

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }

      _createClass(DynamicRouteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          Object(_craftercms_ice__WEBPACK_IMPORTED_MODULE_2__["reportNavigation"])(this.url); // TODO: won't work because there is no guest loaded

          this.contentService.getPageData(this.url, {
            includePosts: true,
            postsLimit: 3,
            postsOffset: 0
          }).subscribe(function (_ref) {
            var data = _ref.data;

            var _a, _b, _c;

            var model = Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_1__["parseDescriptor"])((_a = data.content.items) === null || _a === void 0 ? void 0 : _a[0]);
            var posts = Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_1__["parseDescriptor"])(data.posts.items);
            var taxonomies = Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_1__["parseDescriptor"])(data.taxonomies.items);
            var levelDescriptor = data.levelDescriptors.items.filter(function (levelDescriptor) {
              return levelDescriptor.file__name === 'crafter-level-descriptor.level.xml';
            }).map(function (levelDescriptor) {
              return levelDescriptor;
            })[0];
            _this6.contentTypeId = model.craftercms.contentTypeId;
            _this6.state = {
              model: model,
              posts: posts,
              taxonomies: taxonomies,
              meta: {
                siteTitle: levelDescriptor.siteTitle_s,
                socialLinks: levelDescriptor.socialLinks_o.item,
                disqus: {
                  websiteShortname: levelDescriptor.websiteShortname_s
                },
                posts: {
                  total: data.posts.total,
                  limit: 3,
                  offset: 0
                }
              }
            };

            if (model) {
              document.title = (_b = model.pageTitle_s) !== null && _b !== void 0 ? _b : 'Wordify Crafter CMS';

              if (model.pageDescription_s) {
                var description = document.head.querySelector('meta[name="description"]');
                description && description.setAttribute('content', (_c = model.pageDescription_s) !== null && _c !== void 0 ? _c : '');
              }
            }
          });
        }
      }, {
        key: "getUrlWithoutParams",
        value: function getUrlWithoutParams() {
          var urlTree = this.router.parseUrl(this.router.url);
          urlTree.queryParams = {};
          var routePath = this.actRoute.routeConfig.path;
          var url = routePath.includes(':') ? routePath.substring(0, routePath.indexOf(':') - 1) : urlTree.toString();
          return url;
        }
      }]);

      return DynamicRouteComponent;
    }();

    DynamicRouteComponent.ɵfac = function DynamicRouteComponent_Factory(t) {
      return new (t || DynamicRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    DynamicRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicRouteComponent,
      selectors: [["app-dynamic-route"]],
      decls: 8,
      vars: 7,
      consts: [[3, "ngSwitch"], [3, "state", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "state"]],
      template: function DynamicRouteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicRouteComponent_app_home_1_Template, 1, 1, "app-home", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicRouteComponent_app_category_2_Template, 1, 1, "app-category", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicRouteComponent_app_contact_3_Template, 1, 1, "app-contact", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicRouteComponent_app_about_4_Template, 1, 1, "app-about", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicRouteComponent_app_post_5_Template, 1, 1, "app-post", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicRouteComponent_app_search_6_Template, 1, 1, "app-search", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicRouteComponent_div_7_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.contentTypeId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/page/entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/page/category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/page/contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/page/about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/component/post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "/page/search");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtcm91dGUvZHluYW1pYy1yb3V0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-route',
          templateUrl: './dynamic-route.component.html',
          styleUrls: ['./dynamic-route.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sort-by.pipe */
    "./src/app/sort-by.pipe.ts");

    function FooterComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r2.url_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.label_s);
      }
    }

    function FooterComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r3.url_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", link_r3.socialNetwork_s, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.label_s, " ");
      }
    }

    ;

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(contentService) {
        _classCallCheck(this, FooterComponent);

        this.contentService = contentService;
        this.socialLinks = [];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.contentService.getFooter().subscribe(function (response) {
            _this7.footer = response;
          });
          this.contentService.getLevelDescriptor().subscribe(function (levelDescriptor) {
            _this7.socialLinks = levelDescriptor.socialLinks_o;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 28,
      vars: 10,
      consts: [[1, "site-footer"], [1, "container"], [1, "row", "mb-5"], [1, "col-md-4"], [1, "mb-4"], ["alt", "Image placeholder", 1, "img-fluid", 3, "src"], [1, "col-md-6", "ml-auto"], [1, "row"], [1, "col-md-6"], [1, "list-unstyled"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-md-1"], [1, "col-md-5"], [1, "mb-5"], [1, "list-unstyled", "footer-social"], [1, "col-md-12", "text-center"], [1, "small", 3, "innerHTML"], [1, "nav-item"], [3, "href"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FooterComponent_li_16_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "sortBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FooterComponent_li_24_Template, 4, 5, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.footer == null ? null : ctx.footer.aboutTitle_s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.footer == null ? null : ctx.footer.aboutImage_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.footer == null ? null : ctx.footer.about_t);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.footer == null ? null : ctx.footer.quickLinksTitle_s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 7, ctx.footer == null ? null : ctx.footer.quickLinks_o, "orderDefault_f"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.footer == null ? null : ctx.footer.copyright_html_raw, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_sort_by_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search-form/search-form.component */
    "./src/app/search-form/search-form.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sort-by.pipe */
    "./src/app/sort-by.pipe.ts");

    function HeaderComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r2.url_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", link_r2.socialNetwork_s, "");
      }
    }

    function HeaderComponent_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r3.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.navLabel);
      }
    }

    var _c0 = function _c0() {
      return {
        form: "search-top-form"
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(contentService) {
        _classCallCheck(this, HeaderComponent);

        this.contentService = contentService;
        this.nav = [];
        this.socialLinks = [];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.contentService.getNav().subscribe(function (response) {
            _this8.nav = response;
          });
          this.contentService.getLevelDescriptor().subscribe(function (levelDescriptor) {
            _this8.siteTitle = levelDescriptor.siteTitle_s;
            _this8.socialLinks = levelDescriptor.socialLinks_o;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 22,
      vars: 10,
      consts: [["role", "banner"], [1, "top-bar"], [1, "container"], [1, "row"], [1, "col-9", "social"], [3, "href", 4, "ngFor", "ngForOf"], [1, "col-3", "search-top"], [3, "classes", "id", "placeholder"], [1, "container", "logo-wrap"], [1, "row", "pt-5"], [1, "col-12", "text-center"], ["data-toggle", "collapse", "href", "#navbarMenu", "role", "button", "aria-expanded", "false", "aria-controls", "navbarMenu", 1, "absolute-toggle", "d-block", "d-md-none"], [1, "burger-lines"], [1, "site-logo"], ["routerLink", "/", "routerLinkActive", "active"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], ["id", "navbarMenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [3, "href"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 4, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-search-form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_li_20_Template, 3, 2, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "sortBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("id", "st")("placeholder", "Type a keyword and hit enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.siteTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 6, ctx.nav, "orderDefault_f"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__["SearchFormComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      pipes: [_sort_by_pipe__WEBPACK_IMPORTED_MODULE_5__["SortByPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar-bios/sidebar-bios.component */
    "./src/app/sidebar-bios/sidebar-bios.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../slider/slider.component */
    "./src/app/slider/slider.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");

    function HomeComponent_app_slider_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider", 14);
      }

      if (rf & 2) {
        var slider_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slider", slider_r3);
      }
    }

    function HomeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", post_r4);
      }
    }

    function HomeComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pagination", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx_r2.paginationData.currentPage)("itemsPerPage", ctx_r2.paginationData.itemsPerPage)("pageCount", ctx_r2.paginationData.pageCount)("onPageChange", ctx_r2.onPageChange.bind(ctx_r2));
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(contentService) {
        _classCallCheck(this, HomeComponent);

        this.contentService = contentService;
        this.posts_o = [];
        this.paginationData = _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["defaultData"];
      }

      _createClass(HomeComponent, [{
        key: "getPosts",
        value: function getPosts() {
          var _this9 = this;

          this.contentService.getPosts(null, null, null, this.paginationData).subscribe(function (response) {
            _this9.paginationData.pageCount = Math.ceil(response.total / _this9.paginationData.itemsPerPage);
            _this9.posts_o = response.items;
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.paginationData.currentPage = page;
          this.getPosts();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paginationData.itemsPerPage = this.state.meta.posts.limit;
          this.slider_o = this.state.model.slider_o;
          this.bios_o = this.state.model.bios_o;
          this.getPosts();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      inputs: {
        state: "state"
      },
      decls: 22,
      vars: 4,
      consts: [[1, "site-section", "pt-5", "pb-5"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "slider", 4, "ngFor", "ngForOf"], [1, "site-section", "py-sm"], [1, "col-md-6"], [1, "mb-4"], [1, "row", "blog-entries"], [1, "col-md-12", "col-lg-8", "main-content"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "row mt-5", 4, "ngIf"], [1, "col-md-12", "col-lg-4", "sidebar"], [3, "bios"], [3, "slider"], [3, "model"], [1, "row", "mt-5"], [1, "col-md-12", "text-center"], ["aria-label", "Page navigation", 1, "text-center"], [3, "currentPage", "itemsPerPage", "pageCount", "onPageChange"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_app_slider_4_Template, 1, 1, "app-slider", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Latest Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 4, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-sidebar-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-sidebar-bios", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slider_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginationData.pageCount > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bios", ctx.bios_o);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__["SidebarSearchComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__["SidebarBiosComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTagsComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_10__["PostCardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/image/image.component.ts":
  /*!******************************************!*\
    !*** ./src/app/image/image.component.ts ***!
    \******************************************/

  /*! exports provided: ImageComponent */

  /***/
  function srcAppImageImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageComponent", function () {
      return ImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImageComponent = /*#__PURE__*/function () {
      function ImageComponent() {
        _classCallCheck(this, ImageComponent);
      }

      _createClass(ImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.image_s = this.model.image_s;
          this.alternativeText_s = this.model.alternativeText_s;
        }
      }]);

      return ImageComponent;
    }();

    ImageComponent.ɵfac = function ImageComponent_Factory(t) {
      return new (t || ImageComponent)();
    };

    ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageComponent,
      selectors: [["app-image"]],
      inputs: {
        model: "model"
      },
      decls: 1,
      vars: 2,
      consts: [[1, "img-fluid", 3, "src", "alt"]],
      template: function ImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.alternativeText_s || "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image',
          template: "<img src=\"{{image_s}}\" alt=\"{{alternativeText_s || ''}}\" class=\"img-fluid\" />",
          styleUrls: ['./image.component.scss']
        }]
      }], function () {
        return [];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The page you've selected needs to be created by the site developers.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pagination/pagination.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pagination/pagination.component.ts ***!
    \****************************************************/

  /*! exports provided: defaultData, PaginationComponent */

  /***/
  function srcAppPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultData", function () {
      return defaultData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /*
     * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License version 3 as published by
     * the Free Software Foundation.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */


    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function PaginationComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r1 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageChange(i_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r1 === ctx_r0.paginationData.currentPage));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1 + 1, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "disabled": a0
      };
    };

    var _c2 = function _c2() {
      return [];
    };

    var defaultData = {
      currentPage: 0,
      itemsPerPage: 1,
      pageCount: 1
    };

    var PaginationComponent = /*#__PURE__*/function () {
      function PaginationComponent() {
        _classCallCheck(this, PaginationComponent);

        this.paginationData = defaultData;
      }

      _createClass(PaginationComponent, [{
        key: "pageChange",
        value: function pageChange(page) {
          this.paginationData.currentPage = page;
          this.onPageChange(page);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paginationData = Object.assign(Object.assign({}, this.paginationData), {
            currentPage: this.currentPage,
            itemsPerPage: this.itemsPerPage,
            pageCount: this.pageCount
          });
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)();
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["app-pagination"]],
      inputs: {
        currentPage: "currentPage",
        itemsPerPage: "itemsPerPage",
        pageCount: "pageCount",
        onPageChange: "onPageChange"
      },
      decls: 9,
      vars: 8,
      consts: [["aria-label", "Page navigation", 1, "text-center"], [1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_3_listener() {
            return ctx.pageChange(ctx.paginationData.currentPage - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_7_listener() {
            return ctx.pageChange(ctx.paginationData.currentPage + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.paginationData.currentPage === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2).constructor(ctx.paginationData.pageCount || 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.paginationData.currentPage === ctx.paginationData.pageCount - 1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagination',
          templateUrl: './pagination.component.html',
          styleUrls: ['./pagination.component.scss']
        }]
      }], function () {
        return [];
      }, {
        currentPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onPageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/popular-posts-aside/recent-posts-aside.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/popular-posts-aside/recent-posts-aside.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RecentPostsAsideComponent */

  /***/
  function srcAppPopularPostsAsideRecentPostsAsideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentPostsAsideComponent", function () {
      return RecentPostsAsideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");

    function RecentPostsAsideComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", "landscapeCompressed")("model", post_r1);
      }
    }

    var RecentPostsAsideComponent = /*#__PURE__*/function () {
      function RecentPostsAsideComponent(contentService) {
        _classCallCheck(this, RecentPostsAsideComponent);

        this.contentService = contentService;
        this.posts = [];
      }

      _createClass(RecentPostsAsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.contentService.getPosts().subscribe(function (response) {
            _this10.posts = response.items;
          });
        }
      }]);

      return RecentPostsAsideComponent;
    }();

    RecentPostsAsideComponent.ɵfac = function RecentPostsAsideComponent_Factory(t) {
      return new (t || RecentPostsAsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    RecentPostsAsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecentPostsAsideComponent,
      selectors: [["app-recent-posts-aside"]],
      decls: 6,
      vars: 1,
      consts: [[1, "sidebar-box"], [1, "heading"], [1, "post-entry-sidebar"], [4, "ngFor", "ngForOf"], [3, "format", "model"]],
      template: function RecentPostsAsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Recent Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecentPostsAsideComponent_li_5_Template, 2, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__["PostCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXItcG9zdHMtYXNpZGUvcmVjZW50LXBvc3RzLWFzaWRlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentPostsAsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recent-posts-aside',
          templateUrl: './recent-posts-aside.component.html',
          styleUrls: ['./recent-posts-aside.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-card/post-card.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/post-card/post-card.component.ts ***!
    \**************************************************/

  /*! exports provided: PORTRAIT, LANDSCAPE, LANDSCAPE_COMPRESSED, IMAGE_BACKGROUND, PostCardComponent */

  /***/
  function srcAppPostCardPostCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PORTRAIT", function () {
      return PORTRAIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANDSCAPE", function () {
      return LANDSCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANDSCAPE_COMPRESSED", function () {
      return LANDSCAPE_COMPRESSED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMAGE_BACKGROUND", function () {
      return IMAGE_BACKGROUND;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCardComponent", function () {
      return PostCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PostCardComponent_div_1_div_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r10.value_smv);
      }
    }

    function PostCardComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostCardComponent_div_1_div_3_span_1_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
      }
    }

    function PostCardComponent_div_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostCardComponent_div_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.numOfComments, " ");
      }
    }

    function PostCardComponent_div_1_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.blurb_t);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function PostCardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostCardComponent_div_1_div_3_Template, 4, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostCardComponent_div_1_span_6_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostCardComponent_div_1_span_7_Template, 3, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostCardComponent_div_1_p_10_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("a-block d-flex align-items-center ", ctx_r0.classes == null ? null : ctx_r0.classes.root, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, "url(" + ctx_r0.mainImage_s + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text ", ctx_r0.classes == null ? null : ctx_r0.classes.innerWrapper, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dateModified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.headline_s);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBlurb);
      }
    }

    function PostCardComponent_a_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostCardComponent_a_2_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.numOfComments, " ");
      }
    }

    function PostCardComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostCardComponent_a_2_span_11_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostCardComponent_a_2_span_12_Template, 3, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("blog-entry ", ctx_r1.classes == null ? null : ctx_r1.classes.root, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.mainImage_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.authorAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.authorName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dateModified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.headline_s);
      }
    }

    function PostCardComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.classes == null ? null : ctx_r2.classes.root);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r2.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.mainImage_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.headline_s);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.dateModified);
      }
    }

    function PostCardComponent_div_4_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostCardComponent_div_4_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.numOfComments, " ");
      }
    }

    function PostCardComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostCardComponent_div_4_span_12_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostCardComponent_div_4_span_13_Template, 3, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.classes == null ? null : ctx_r3.classes.root);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, "url(" + ctx_r3.mainImage_s + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.authorAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.authorName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.dateModified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.numOfComments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.headline_s);
      }
    }

    function PostCardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PORTRAIT = 'portrait',
        LANDSCAPE = 'landscape',
        LANDSCAPE_COMPRESSED = 'landscapeCompressed',
        IMAGE_BACKGROUND = 'imageBackground';

    var PostCardComponent = /*#__PURE__*/function () {
      function PostCardComponent() {
        _classCallCheck(this, PostCardComponent);

        this.tags = '';
        this.showBlurb = false;
        this.format = PORTRAIT;
      }

      _createClass(PostCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.type = this.format;
          this.mainImage_s = this.model.mainImage_s;
          this.headline_s = this.model.headline_s;
          this.dateModified = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.model.craftercms.dateModified);
          this.blurb_t = this.model.blurb_t;
          this.authorAvatarUrl = this.model.authorBio_o[0].profilePic_s;
          this.authorName = this.model.authorBio_o[0].name_s;
          this.slug = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].computeSlug(this.model.craftercms.path);
          this.categories = this.model.categories_o;
        }
      }]);

      return PostCardComponent;
    }();

    PostCardComponent.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)();
    };

    PostCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      inputs: {
        tags: "tags",
        model: "model",
        showBlurb: "showBlurb",
        format: "format",
        classes: "classes",
        numOfComments: "numOfComments"
      },
      decls: 6,
      vars: 5,
      consts: [[3, "ngSwitch"], [3, "ngStyle", "class", 4, "ngSwitchCase"], [3, "class", "routerLink", 4, "ngSwitchCase"], ["class", "post-entry-horizontal", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngStyle"], [3, "routerLink"], [1, "post-meta"], [4, "ngIf"], [1, "mr-2"], ["class", "ml-2", 4, "ngIf"], ["class", "category", 4, "ngFor", "ngForOf"], [1, "category"], [1, "ml-2"], [1, "fa", "fa-comments"], [3, "src"], [1, "blog-content-body"], [1, "author", "mr-2"], [1, "mr-4", 3, "src"], [1, "text"], [1, "post-entry-horizontal"], [1, "image", 3, "ngStyle"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostCardComponent_div_1_Template, 11, 16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostCardComponent_a_2_Template, 15, 11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostCardComponent_a_3_Template, 8, 7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostCardComponent_div_4_Template, 16, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostCardComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "imageBackground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "portrait");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "landscapeCompressed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "landscape");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-card',
          templateUrl: './post-card.component.html',
          styleUrls: ['./post-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBlurb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numOfComments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar-bios/sidebar-bios.component */
    "./src/app/sidebar-bios/sidebar-bios.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../comments-count/comments-count.component */
    "./src/app/comments-count/comments-count.component.ts");
    /* harmony import */


    var _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../content-type/content-type.component */
    "./src/app/content-type/content-type.component.ts");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../comments/comments.component */
    "./src/app/comments/comments.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");

    function PostComponent_app_comments_count_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comments-count", 26);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.postId)("websiteShortname", ctx_r0.websiteShortname);
      }
    }

    function PostComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/category/", category_r8.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r8.value_smv, " ");
      }
    }

    function PostComponent_app_content_type_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-type", 28);
      }

      if (rf & 2) {
        var component_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", component_r9);
      }
    }

    function PostComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/category/", category_r10.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", category_r10.value_smv, "", i_r11 < ctx_r3.categories_o.length - 1 ? "," : "", " ");
      }
    }

    function PostComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r12 = ctx.$implicit;
        var i_r13 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/tag/", tag_r12.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" #", tag_r12.value_smv, "", i_r13 < ctx_r4.tags_o.length - 1 ? "," : "", " ");
      }
    }

    function PostComponent_app_comments_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comments", 26);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5.postId)("websiteShortname", ctx_r5.websiteShortname);
      }
    }

    var _c0 = function _c0() {
      return {
        root: "sm height-md"
      };
    };

    function PostComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-card", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("format", "imageBackground")("model", post_r14);
      }
    }

    function PostComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pagination", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx_r7.paginationData.currentPage)("itemsPerPage", ctx_r7.paginationData.itemsPerPage)("pageCount", ctx_r7.paginationData.pageCount)("onPageChange", ctx_r7.onPageChange.bind(ctx_r7));
      }
    }

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent(contentService) {
        _classCallCheck(this, PostComponent);

        this.contentService = contentService;
        this.posts_o = [];
        this.categories_o = [];
        this.tags_o = [];
      }

      _createClass(PostComponent, [{
        key: "getPosts",
        value: function getPosts() {
          var _this11 = this;

          this.contentService.getPosts(this.categories_o, this.tags_o, this.path, this.paginationData).subscribe(function (response) {
            _this11.posts_o = response.items;
            _this11.paginationData.pageCount = response.pageCount;
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.paginationData.currentPage = page;
          this.getPosts();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var _a, _b, _c, _d;

          this.postId = this.state.model.craftercms.id;
          this.mainImage_s = this.state.model.mainImage_s;
          this.headline_s = this.state.model.headline_s;
          this.dateCreated = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.state.model.craftercms.dateCreated);
          this.bios_o = this.state.model.authorBio_o;
          this.profilePic_s = (_b = (_a = this.state.model.authorBio_o) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.profilePic_s;
          this.name_s = (_d = (_c = this.state.model.authorBio_o) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name_s;
          this.path = this.state.model.craftercms.path;
          this.categories_o = this.state.model.categories_o;
          this.tags_o = this.state.model.tags_o;
          this.content_o = this.state.model.content_o;
          this.paginationData = {
            currentPage: 0,
            itemsPerPage: this.state.meta.posts.limit,
            numOfPages: Math.ceil(this.state.meta.posts.total / this.state.meta.posts.limit)
          };
          this.getPosts();
          this.contentService.getLevelDescriptor().subscribe(function (levelDescriptor) {
            var _a;

            _this12.websiteShortname = (_a = levelDescriptor.websiteShortname_s) !== null && _a !== void 0 ? _a : 'DISQUS';
          });
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]));
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      inputs: {
        state: "state"
      },
      decls: 45,
      vars: 14,
      consts: [[1, "site-section", "py-lg"], [1, "container"], [1, "row", "blog-entries", "element-animate-disabled"], [1, "col-md-12", "col-lg-8", "main-content"], [1, "img-fluid", "mb-5", 3, "src"], [1, "post-meta"], [1, "author", "mr-2"], [1, "mr-2", 3, "src"], [1, "mr-2"], [1, "ml-2"], [1, "fa", "fa-comments"], [3, "id", "websiteShortname", 4, "ngIf"], ["class", "category mb-5", 3, "href", 4, "ngFor", "ngForOf"], [1, "post-content-body"], [3, "model", 4, "ngFor", "ngForOf"], [1, "pt-5"], [3, "href", 4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "col-md-12", "col-lg-4", "sidebar"], [3, "bios"], [1, "py-5"], [1, "row"], [1, "col-md-12"], [1, "mb-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], ["class", "row mt-5", 4, "ngIf"], [3, "id", "websiteShortname"], [1, "category", "mb-5", 3, "href"], [3, "model"], [3, "href"], [1, "col-md-6", "col-lg-4"], [3, "classes", "format", "model"], [1, "row", "mt-5"], [1, "col-md-12", "text-center"], ["aria-label", "Page navigation", 1, "text-center"], [3, "currentPage", "itemsPerPage", "pageCount", "onPageChange"]],
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostComponent_app_comments_count_15_Template, 1, 2, "app-comments-count", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostComponent_a_18_Template, 2, 2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostComponent_app_content_type_20_Template, 1, 1, "app-content-type", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Categories: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PostComponent_a_24_Template, 2, 3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Tags: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PostComponent_a_27_Template, 2, 3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PostComponent_app_comments_29_Template, 1, 2, "app-comments", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-sidebar-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-sidebar-bios", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Related Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PostComponent_div_43_Template, 2, 4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PostComponent_div_44_Template, 4, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.mainImage_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePic_s, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name_s, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateCreated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.websiteShortname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline_s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.websiteShortname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bios", ctx.bios_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts_o);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginationData.pageCount > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_4__["SidebarSearchComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_5__["SidebarBiosComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_6__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_7__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTagsComponent"], _comments_count_comments_count_component__WEBPACK_IMPORTED_MODULE_9__["CommentsCountComponent"], _content_type_content_type_component__WEBPACK_IMPORTED_MODULE_10__["ContentTypeComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_12__["PostCardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/queries.graphql.js":
  /*!************************************!*\
    !*** ./src/app/queries.graphql.js ***!
    \************************************/

  /*! exports provided: default, postsQuery */

  /***/
  function srcAppQueriesGraphqlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postsQuery", function () {
      return postsQuery;
    });
    /*
     * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License version 3 as published by
     * the Free Software Foundation.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */
    // language=GraphQL


    var commonFragments = "\n  fragment byUrlQueryPost on component_post {\n    ...byUrlQueryContentItemFields\n    slug: localId(transform: \"storeUrlToRenderUrl\")\n    pageTitle_s\n    pageDescription_s\n    blurb_t\n    headline_s\n    mainImage_s\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n    authorBio_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    categories_o {\n      item {\n        key(filter: {or: $categoriesFilter})\n        value_smv\n      }\n    }\n    tags_o {\n      item {\n        value_smv\n        key(filter: {or: $tagsFilter})\n      }\n    }\n  }\n\n  fragment byUrlQueryContentItemFields on ContentItem {\n    guid: objectId\n    path: localId(filter: {not: [{equals: $exclude}]})\n    contentTypeId: content__type\n    dateCreated: createdDate_dt\n    dateModified: lastModifiedDate_dt\n    label: internal__name\n  }\n\n  fragment byUrlQueryBioFragment on component_bio {\n    guid: objectId\n    contentTypeId: content__type\n    label: internal__name\n    path: localId\n    bio_t\n    name_s\n    profilePic_s\n    linkButtonText_s\n    linkButtonUrl_s\n    showLinkButton_b\n    facebookLink_s\n    twitterLink_s\n    instagramLink_s\n    youTubeLink_s\n  }\n\n  fragment byUrlQueryRichText on component_rich_text {\n    ...byUrlQueryContentItemFields\n    content_html: content_html_raw\n  }\n\n  fragment byUrlQueryImage on component_image {\n    ...byUrlQueryContentItemFields\n    image_s\n    alternativeText_s\n  }\n\n  fragment byUrlQueryResponsiveColumns on component_responsive_columns {\n    ...byUrlQueryContentItemFields\n    columns_o {\n      item {\n        columnSize_s\n        content_o {\n          item {\n            key\n            component {\n              ...on component_rich_text {\n                ...byUrlQueryRichText\n              }\n              ...on component_image {\n                ...byUrlQueryImage\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"; // language=GraphQL

    /* harmony default export */

    __webpack_exports__["default"] = "\n  ".concat(commonFragments, "\n\n  fragment byUrlQueryHomepage on page_entry  {\n    pageTitle_s\n    pageDescription_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    slider_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          ...on component_slider {\n            ...byUrlQuerySlider\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryAboutPage on page_about {\n    pageTitle_s\n    pageDescription_s\n    headline_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryContactPage on page_contact {\n    pageTitle_s\n    pageDescription_s\n    message_t\n    headline_s\n  }\n\n  fragment byUrlQueryCategoryPage on page_category {\n    pageTitle_s\n    pageDescription_s\n  }\n\n  fragment byUrlQuerySlider on component_slider {\n    ...byUrlQueryContentItemFields\n    posts_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          slug: localId(transform: \"storeUrlToRenderUrl\")\n          pageTitle_s\n          pageDescription_s\n          blurb_t\n          headline_s\n          mainImage_s\n          authorBio_o {\n            item {\n              key,\n              component {\n                ...byUrlQueryBioFragment\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  query byUrlQuery(\n    $url: String\n    $skipContentType: Boolean = true\n    $includePosts: Boolean = true\n    $postsLimit: Int = 8\n    $postsOffset: Int = 0\n    $exclude: String = \"\"\n    $categoriesFilter: [TextFilters!] = []\n    $tagsFilter: [TextFilters!] = []\n  ) {\n    content: contentItems {\n      total\n      items {\n        ...byUrlQueryContentItemFields\n        url: localId(\n          transform: \"storeUrlToRenderUrl\",\n          filter:{ regex: $url }\n        )\n        content__type(\n          filter:{\n            regex: \".*(bio|post|entry|category|contact|about|search).*\"\n          }\n        ) @skip (if: $skipContentType)\n        ...on page_entry {\n          ...byUrlQueryHomepage\n        }\n        ...on page_about {\n          ...byUrlQueryAboutPage\n        }\n        ...on page_contact {\n          ...byUrlQueryContactPage\n        }\n        ...on page_category {\n          ...byUrlQueryCategoryPage\n        }\n        ...on component_post {\n          ...byUrlQueryPost\n        }\n      }\n    }\n    levelDescriptors: component_level__descriptor {\n      items {\n        siteTitle_s\n        file__name\n        websiteShortname_s\n        socialLinks_o {\n          item {\n            socialNetwork_s\n            label_s\n            url_s\n          }\n        }\n      }\n    }\n    posts: component_post(\n      limit: $postsLimit,\n      offset: $postsOffset,\n      sortOrder: DESC,\n      sortBy: \"lastModifiedDate_dt\"\n    ) @include(if: $includePosts) {\n      total\n      items {\n        ...byUrlQueryPost\n      }\n    }\n    taxonomies: taxonomy {\n      total\n      items {\n        guid: objectId\n        path: localId\n        contentTypeId: content__type\n        dateCreated: createdDate_dt\n        dateModified: lastModifiedDate_dt\n        label: internal__name\n        items {\n          item {\n            key\n            value\n            image_s\n          }\n        }\n      }\n    }\n  }\n"); //language=GraphQL

    var postsQuery = "\n  ".concat(commonFragments, "\n\n  query postsQuery(\n    $postsLimit: Int = 8\n    $postsOffset: Int = 0\n    $exclude: String = \"\"\n    $categoriesFilter: [TextFilters!] = []\n    $tagsFilter: [TextFilters!] = []\n  ) {\n    posts: component_post(\n      limit: $postsLimit,\n      offset: $postsOffset,\n      sortOrder: DESC,\n      sortBy: \"lastModifiedDate_dt\"\n    ) {\n      total\n      items {\n        ...byUrlQueryPost\n      }\n    }\n  }\n");
    /***/
  },

  /***/
  "./src/app/responsive-columns/responsive-columns.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/responsive-columns/responsive-columns.component.ts ***!
    \********************************************************************/

  /*! exports provided: ResponsiveColumnsComponent */

  /***/
  function srcAppResponsiveColumnsResponsiveColumnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsiveColumnsComponent", function () {
      return ResponsiveColumnsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function ResponsiveColumnsComponent_div_1_app_content_type_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-type", 4);
      }

      if (rf & 2) {
        var component_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", component_r3);
      }
    }

    function ResponsiveColumnsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResponsiveColumnsComponent_div_1_app_content_type_1_Template, 1, 1, "app-content-type", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", column_r1.columnSize_s, " mb-4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r1.content_o);
      }
    }

    var ResponsiveColumnsComponent = /*#__PURE__*/function () {
      function ResponsiveColumnsComponent() {
        _classCallCheck(this, ResponsiveColumnsComponent);
      }

      _createClass(ResponsiveColumnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResponsiveColumnsComponent;
    }();

    ResponsiveColumnsComponent.ɵfac = function ResponsiveColumnsComponent_Factory(t) {
      return new (t || ResponsiveColumnsComponent)();
    };

    ResponsiveColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResponsiveColumnsComponent,
      selectors: [["app-responsive-columns"]],
      inputs: {
        model: "model"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "row", "mb-5"], ["class", "mb-5", 3, "class", 4, "ngFor", "ngForOf"], [1, "mb-5"], [3, "model", 4, "ngFor", "ngForOf"], [3, "model"]],
      template: function ResponsiveColumnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResponsiveColumnsComponent_div_1_Template, 2, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model.columns_o);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3BvbnNpdmUtY29sdW1ucy9yZXNwb25zaXZlLWNvbHVtbnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsiveColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-responsive-columns',
          templateUrl: './responsive-columns.component.html',
          styleUrls: ['./responsive-columns.component.scss']
        }]
      }], function () {
        return [];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/rich-text/rich-text.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/rich-text/rich-text.component.ts ***!
    \**************************************************/

  /*! exports provided: RichTextComponent */

  /***/
  function srcAppRichTextRichTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RichTextComponent", function () {
      return RichTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RichTextComponent = /*#__PURE__*/function () {
      function RichTextComponent() {
        _classCallCheck(this, RichTextComponent);
      }

      _createClass(RichTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content_html = this.model.content_html;
        }
      }]);

      return RichTextComponent;
    }();

    RichTextComponent.ɵfac = function RichTextComponent_Factory(t) {
      return new (t || RichTextComponent)();
    };

    RichTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RichTextComponent,
      selectors: [["app-rich-text"]],
      inputs: {
        model: "model"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "innerHTML"]],
      template: function RichTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.content_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpY2gtdGV4dC9yaWNoLXRleHQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RichTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rich-text',
          template: "<div [innerHTML]=\"content_html\"></div>",
          styleUrls: ['./rich-text.component.scss']
        }]
      }], function () {
        return [];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search-form/search-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/search-form/search-form.component.ts ***!
    \******************************************************/

  /*! exports provided: SearchFormComponent */

  /***/
  function srcAppSearchFormSearchFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function () {
      return SearchFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchFormComponent = /*#__PURE__*/function () {
      function SearchFormComponent(actRoute, router) {
        _classCallCheck(this, SearchFormComponent);

        this.actRoute = actRoute;
        this.router = router;
        this.keyword = '';
        this.keyword = this.getKeyword();
      }

      _createClass(SearchFormComponent, [{
        key: "getKeyword",
        value: function getKeyword() {
          var _a;

          var urlParams = new URLSearchParams(window.location.search);
          return (_a = urlParams.get('q')) !== null && _a !== void 0 ? _a : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this13.keyword = _this13.getKeyword();
            }
          });
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          this.router.navigate(['/search'], {
            queryParams: {
              q: this.keyword
            }
          });
        }
      }]);

      return SearchFormComponent;
    }();

    SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) {
      return new (t || SearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchFormComponent,
      selectors: [["app-search-form"]],
      inputs: {
        classes: "classes",
        placeholder: "placeholder",
        id: "id"
      },
      decls: 4,
      vars: 12,
      consts: [[1, "icon", "fa", "fa-search"], ["name", "keyword", 3, "ngModel", "id", "placeholder", "keyup.enter", "ngModelChange"]],
      template: function SearchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchFormComponent_Template_input_keyup_enter_3_listener() {
            return ctx.onEnter();
          })("ngModelChange", function SearchFormComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.keyword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes == null ? null : ctx.classes.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes == null ? null : ctx.classes.inputWrapper);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes.input);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-form',
          templateUrl: './search-form.component.html',
          styleUrls: ['./search-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pagination/pagination.component */
    "./src/app/pagination/pagination.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _craftercms_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @craftercms/content */
    "./node_modules/@craftercms/content/esm2015/content.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidebar-search/sidebar-search.component */
    "./src/app/sidebar-search/sidebar-search.component.ts");
    /* harmony import */


    var _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../sidebar-bios/sidebar-bios.component */
    "./src/app/sidebar-bios/sidebar-bios.component.ts");
    /* harmony import */


    var _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../popular-posts-aside/recent-posts-aside.component */
    "./src/app/popular-posts-aside/recent-posts-aside.component.ts");
    /* harmony import */


    var _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../sidebar-categories/sidebar-categories.component */
    "./src/app/sidebar-categories/sidebar-categories.component.ts");
    /* harmony import */


    var _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../sidebar-tags/sidebar-tags.component */
    "./src/app/sidebar-tags/sidebar-tags.component.ts");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");
    /*
     * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License version 3 as published by
     * the Free Software Foundation.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */


    function SearchComponent_app_post_card_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-card", 12);
      }

      if (rf & 2) {
        var result_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("format", "landscape")("model", result_r2);
      }
    }

    function SearchComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-pagination", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentPage", ctx_r1.paginationData.currentPage)("itemsPerPage", ctx_r1.paginationData.itemsPerPage)("pageCount", ctx_r1.paginationData.pageCount)("onPageChange", ctx_r1.onPageChange.bind(ctx_r1));
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(contentService, actRoute) {
        _classCallCheck(this, SearchComponent);

        this.contentService = contentService;
        this.actRoute = actRoute;
        this.results = [];
        this.paginationData = _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["defaultData"];
        this.keyword = '';
        this.totalResults = 0;
      }

      _createClass(SearchComponent, [{
        key: "getResults",
        value: function getResults() {
          var _this14 = this;

          this.contentService.searchPosts(this.keyword, this.paginationData.itemsPerPage, this.paginationData.currentPage * this.paginationData.itemsPerPage).pipe( // TODO: move this to service, error in service
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b;

            var hits = _a.hits,
                total = _a.total,
                rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["hits", "total"]);
            var parsedHits = hits.map(function (_ref2) {
              var _source = _ref2._source;
              return Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_4__["parseDescriptor"])(Object(_craftercms_content__WEBPACK_IMPORTED_MODULE_4__["preParseSearchResults"])(_source));
            });
            return Object.assign(Object.assign({}, rest), {
              hits: parsedHits,
              total: (_b = total.value) !== null && _b !== void 0 ? _b : total
            });
          })).subscribe(function (response) {
            _this14.paginationData.pageCount = Math.ceil(response.total / _this14.paginationData.itemsPerPage);
            _this14.results = response.hits;
            _this14.totalResults = response.total;
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.paginationData.currentPage = page;
          this.getResults();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.bios_o = this.state.model.bios_o;
          this.paginationData.itemsPerPage = this.state.meta.posts.limit;
          this.actRoute.queryParams.subscribe(function (parameters) {
            _this15.keyword = parameters.q;

            _this15.getResults();
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      inputs: {
        state: "state"
      },
      decls: 20,
      vars: 5,
      consts: [[1, "site-section", "pt-5"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "mb-4"], [1, "row", "blog-entries"], [1, "col-md-12", "col-lg-8", "main-content"], [1, "row", "mb-5", "mt-5"], [3, "format", "model", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-12", "col-lg-4", "sidebar"], [3, "bios"], [3, "format", "model"], [1, "col-md-12", "text-center"], ["aria-label", "Page navigation", 1, "text-center"], [3, "currentPage", "itemsPerPage", "pageCount", "onPageChange"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Search Results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchComponent_app_post_card_12_Template, 1, 2, "app-post-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 4, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-sidebar-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-sidebar-bios", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-recent-posts-aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-sidebar-categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-sidebar-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.totalResults, " result", ctx.totalResults === 0 || ctx.totalResults > 1 ? "s" : "", " found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paginationData.pageCount > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bios", ctx.bios_o);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_8__["SidebarSearchComponent"], _sidebar_bios_sidebar_bios_component__WEBPACK_IMPORTED_MODULE_9__["SidebarBiosComponent"], _popular_posts_aside_recent_posts_aside_component__WEBPACK_IMPORTED_MODULE_10__["RecentPostsAsideComponent"], _sidebar_categories_sidebar_categories_component__WEBPACK_IMPORTED_MODULE_11__["SidebarCategoriesComponent"], _sidebar_tags_sidebar_tags_component__WEBPACK_IMPORTED_MODULE_12__["SidebarTagsComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_13__["PostCardComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-bios/sidebar-bios.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/sidebar-bios/sidebar-bios.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarBiosComponent */

  /***/
  function srcAppSidebarBiosSidebarBiosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarBiosComponent", function () {
      return SidebarBiosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bio/bio.component */
    "./src/app/bio/bio.component.ts");

    function SidebarBiosComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bio", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bio_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bio", bio_r1);
      }
    }

    var SidebarBiosComponent = /*#__PURE__*/function () {
      function SidebarBiosComponent() {
        _classCallCheck(this, SidebarBiosComponent);
      }

      _createClass(SidebarBiosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarBiosComponent;
    }();

    SidebarBiosComponent.ɵfac = function SidebarBiosComponent_Factory(t) {
      return new (t || SidebarBiosComponent)();
    };

    SidebarBiosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarBiosComponent,
      selectors: [["app-sidebar-bios"]],
      inputs: {
        bios: "bios"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "sidebar-box", 4, "ngFor", "ngForOf"], [1, "sidebar-box"], [3, "bio"]],
      template: function SidebarBiosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarBiosComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bios);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItYmlvcy9zaWRlYmFyLWJpb3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarBiosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-bios',
          templateUrl: './sidebar-bios.component.html',
          styleUrls: ['./sidebar-bios.component.scss']
        }]
      }], function () {
        return [];
      }, {
        bios: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-categories/sidebar-categories.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/sidebar-categories/sidebar-categories.component.ts ***!
    \********************************************************************/

  /*! exports provided: SidebarCategoriesComponent */

  /***/
  function srcAppSidebarCategoriesSidebarCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarCategoriesComponent", function () {
      return SidebarCategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sidebar-taxonomies/sidebar-taxonomies.component */
    "./src/app/sidebar-taxonomies/sidebar-taxonomies.component.ts");

    var SidebarCategoriesComponent = /*#__PURE__*/function () {
      function SidebarCategoriesComponent() {
        _classCallCheck(this, SidebarCategoriesComponent);
      }

      _createClass(SidebarCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTaxonomyFilter('categories.xml');
        }
      }]);

      return SidebarCategoriesComponent;
    }();

    SidebarCategoriesComponent.ɵfac = function SidebarCategoriesComponent_Factory(t) {
      return new (t || SidebarCategoriesComponent)();
    };

    SidebarCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarCategoriesComponent,
      selectors: [["app-sidebar-categories"]],
      decls: 1,
      vars: 4,
      consts: [[3, "title", "baseUrl", "listClass", "filter"]],
      template: function SidebarCategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-taxonomies", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Categories")("baseUrl", "/category")("listClass", "categories")("filter", ctx.filter);
        }
      },
      directives: [_sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_2__["SidebarTaxonomiesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItY2F0ZWdvcmllcy9zaWRlYmFyLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-categories',
          templateUrl: './sidebar-categories.component.html',
          styleUrls: ['./sidebar-categories.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-search/sidebar-search.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/sidebar-search/sidebar-search.component.ts ***!
    \************************************************************/

  /*! exports provided: SidebarSearchComponent */

  /***/
  function srcAppSidebarSearchSidebarSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarSearchComponent", function () {
      return SidebarSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../search-form/search-form.component */
    "./src/app/search-form/search-form.component.ts");

    var _c0 = function _c0() {
      return {
        form: "search-form",
        input: "form-control",
        inputWrapper: "form-group"
      };
    };

    var SidebarSearchComponent = /*#__PURE__*/function () {
      function SidebarSearchComponent() {
        _classCallCheck(this, SidebarSearchComponent);
      }

      _createClass(SidebarSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarSearchComponent;
    }();

    SidebarSearchComponent.ɵfac = function SidebarSearchComponent_Factory(t) {
      return new (t || SidebarSearchComponent)();
    };

    SidebarSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarSearchComponent,
      selectors: [["app-sidebar-search"]],
      decls: 2,
      vars: 4,
      consts: [[1, "sidebar-box", "search-form-wrap"], [3, "classes", "id", "placeholder"]],
      template: function SidebarSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("id", "s")("placeholder", "Type a keyword and hit enter");
        }
      },
      directives: [_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__["SearchFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItc2VhcmNoL3NpZGViYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-search',
          templateUrl: './sidebar-search.component.html',
          styleUrls: ['./sidebar-search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-tags/sidebar-tags.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/sidebar-tags/sidebar-tags.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarTagsComponent */

  /***/
  function srcAppSidebarTagsSidebarTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarTagsComponent", function () {
      return SidebarTagsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sidebar-taxonomies/sidebar-taxonomies.component */
    "./src/app/sidebar-taxonomies/sidebar-taxonomies.component.ts");

    var SidebarTagsComponent = /*#__PURE__*/function () {
      function SidebarTagsComponent() {
        _classCallCheck(this, SidebarTagsComponent);
      }

      _createClass(SidebarTagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTaxonomyFilter('tags.xml');
        }
      }]);

      return SidebarTagsComponent;
    }();

    SidebarTagsComponent.ɵfac = function SidebarTagsComponent_Factory(t) {
      return new (t || SidebarTagsComponent)();
    };

    SidebarTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarTagsComponent,
      selectors: [["app-sidebar-tags"]],
      decls: 1,
      vars: 4,
      consts: [[3, "title", "baseUrl", "listClass", "filter"]],
      template: function SidebarTagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-taxonomies", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Tags")("baseUrl", "/tag")("listClass", "tags")("filter", ctx.filter);
        }
      },
      directives: [_sidebar_taxonomies_sidebar_taxonomies_component__WEBPACK_IMPORTED_MODULE_2__["SidebarTaxonomiesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItdGFncy9zaWRlYmFyLXRhZ3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-tags',
          templateUrl: './sidebar-tags.component.html',
          styleUrls: ['./sidebar-tags.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-taxonomies/sidebar-taxonomies.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/sidebar-taxonomies/sidebar-taxonomies.component.ts ***!
    \********************************************************************/

  /*! exports provided: SidebarTaxonomiesComponent */

  /***/
  function srcAppSidebarTaxonomiesSidebarTaxonomiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarTaxonomiesComponent", function () {
      return SidebarTaxonomiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../content.service */
    "./src/app/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SidebarTaxonomiesComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var taxonomy_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", ctx_r0.baseUrl, "/", taxonomy_r1.key, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](taxonomy_r1.value);
      }
    }

    var SidebarTaxonomiesComponent = /*#__PURE__*/function () {
      function SidebarTaxonomiesComponent(contentService) {
        _classCallCheck(this, SidebarTaxonomiesComponent);

        this.contentService = contentService;
      }

      _createClass(SidebarTaxonomiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.contentService.getTaxonomies().subscribe(function (response) {
            _this16.filteredTaxonomies = response.filter(_this16.filter)[0].items.item;
          });
        }
      }]);

      return SidebarTaxonomiesComponent;
    }();

    SidebarTaxonomiesComponent.ɵfac = function SidebarTaxonomiesComponent_Factory(t) {
      return new (t || SidebarTaxonomiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    SidebarTaxonomiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarTaxonomiesComponent,
      selectors: [["app-sidebar-taxonomies"]],
      inputs: {
        title: "title",
        filter: "filter",
        baseUrl: "baseUrl",
        listClass: "listClass"
      },
      decls: 5,
      vars: 5,
      consts: [[1, "sidebar-box"], [1, "heading"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function SidebarTaxonomiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarTaxonomiesComponent_li_4_Template, 3, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.listClass, " clearfix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTaxonomies);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItdGF4b25vbWllcy9zaWRlYmFyLXRheG9ub21pZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTaxonomiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-taxonomies',
          templateUrl: './sidebar-taxonomies.component.html',
          styleUrls: ['./sidebar-taxonomies.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/slider/slider.component.ts":
  /*!********************************************!*\
    !*** ./src/app/slider/slider.component.ts ***!
    \********************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../post-card/post-card.component */
    "./src/app/post-card/post-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        root: "height-lg",
        innerWrapper: "half-to-full"
      };
    };

    function SliderComponent_app_post_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 2);
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", "food")("model", post_r1)("showBlurb", true)("format", ctx_r0.format)("classes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      }
    }

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.posts_o = this.slider.posts_o;
          this.format = _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__["IMAGE_BACKGROUND"];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // @ts-ignore
          $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            autoplayHoverPause: true,
            items: 1,
            navText: ['<span class=\'ion-chevron-left\'></span>', '<span class=\'ion-chevron-right\'></span>'],
            responsive: {
              0: {
                items: 1,
                nav: false
              },
              600: {
                items: 1,
                nav: false
              },
              1000: {
                items: 1,
                nav: true
              }
            }
          });
        }
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      inputs: {
        slider: "slider"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "owl-carousel", "owl-theme", "home-slider"], [3, "tags", "model", "showBlurb", "format", "classes", 4, "ngFor", "ngForOf"], [3, "tags", "model", "showBlurb", "format", "classes"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SliderComponent_app_post_card_1_Template, 1, 6, "app-post-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts_o);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__["PostCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.scss']
        }]
      }], function () {
        return [];
      }, {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sort-by.pipe.ts":
  /*!*********************************!*\
    !*** ./src/app/sort-by.pipe.ts ***!
    \*********************************/

  /*! exports provided: SortByPipe */

  /***/
  function srcAppSortByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByPipe", function () {
      return SortByPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortByPipe = /*#__PURE__*/function () {
      function SortByPipe() {
        _classCallCheck(this, SortByPipe);
      }

      _createClass(SortByPipe, [{
        key: "transform",
        value: function transform(array) {
          var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!Array.isArray(array)) {
            return;
          }

          array.sort(function (a, b) {
            if (a[field] < b[field]) {
              return -1;
            } else if (a[field] > b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return array;
        }
      }]);

      return SortByPipe;
    }();

    SortByPipe.ɵfac = function SortByPipe_Factory(t) {
      return new (t || SortByPipe)();
    };

    SortByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sortBy",
      type: SortByPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sortBy'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/toast/toast.component.ts":
  /*!******************************************!*\
    !*** ./src/app/toast/toast.component.ts ***!
    \******************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent() {
        _classCallCheck(this, ToastComponent);
      }

      _createClass(ToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)();
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toast"]],
      inputs: {
        display: "display",
        text: "text",
        type: "type"
      },
      decls: 2,
      vars: 2,
      consts: [["role", "alert", 3, "ngClass"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "alert alert-" + ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".alert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p2ZWdhL2NyYWZ0ZXIvY3JhZnRlcjMyeC9jcmFmdGVyLWF1dGhvcmluZy9kYXRhL3JlcG9zL3NpdGVzL3dvcmRpZnktYW5ndWxhci9zYW5kYm94L3NvdXJjZXMvYW5ndWxhci1hcHAvc3JjL2FwcC90b2FzdC90b2FzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuIiwiLmFsZXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toast',
          templateUrl: './toast.component.html',
          styleUrls: ['./toast.component.scss']
        }]
      }], function () {
        return [];
      }, {
        display: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils.ts":
  /*!**************************!*\
    !*** ./src/app/utils.ts ***!
    \**************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Utils;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
    /*
     * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
     *
     * This program is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License version 3 as published by
     * the Free Software Foundation.
     *
     * This program is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */


    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "siteName",
        value: function siteName() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].crafterSiteId || js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('crafterSite');
        }
      }, {
        key: "computeSlug",
        value: function computeSlug(path) {
          return path.replace(/(\/site\/components)|(index\.xml)/g, '').replace(/(\/site\/website)|(index\.xml)/g, '').replace(/(\/\/)/g, '/').replace('.xml', '');
        }
      }, {
        key: "crafterConfig",
        value: function crafterConfig() {
          return {
            baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl,
            site: this.siteName()
          };
        }
      }, {
        key: "createTaxonomyFilter",
        value: function createTaxonomyFilter(name) {
          return function (taxonomy) {
            return taxonomy.craftercms.path.includes(name);
          };
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return new Date(date).toLocaleDateString();
        }
      }]);

      return Utils;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:8080',
      graphqlServer: '//localhost:8080/api/1/site/graphql',
      crafterSiteId: null
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/jvega/crafter/crafter32x/crafter-authoring/data/repos/sites/wordify-angular/sandbox/sources/angular-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map