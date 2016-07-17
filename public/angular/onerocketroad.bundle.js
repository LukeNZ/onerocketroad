webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../typings/index.d.ts"/>
	// Angular provided-dependencies
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(259);
	var http_1 = __webpack_require__(328);
	var forms_1 = __webpack_require__(349);
	var routes_1 = __webpack_require__(386);
	// Root component
	var components_1 = __webpack_require__(439);
	platform_browser_dynamic_1.bootstrap(components_1.OneRocketRoadComponent, [
	    routes_1.APP_ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms(),
	    platform_browser_1.Title,
	]).catch(function (err) { return console.error(err); });


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(387);
	var components_1 = __webpack_require__(439);
	// At a future release, we should hopefully be able to specify routes
	exports.routes = [
	    { path: '', component: components_1.HomeComponent },
	    { path: 'drafts', component: components_1.DraftsComponent },
	    { path: 'draft/:id', component: components_1.DraftComponent },
	    { path: 'articles', component: components_1.ArticlesComponent },
	    { path: 'article/:year/:month/:day/:slug', component: components_1.ArticleComponent },
	    { path: 'images', component: components_1.ImagesComponent },
	    { path: 'about', component: components_1.AboutComponent },
	    { path: 'signup', component: components_1.SignUpComponent },
	    { path: 'login', component: components_1.LoginComponent }
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(440));
	__export(__webpack_require__(441));
	__export(__webpack_require__(622));
	__export(__webpack_require__(629));
	__export(__webpack_require__(633));
	__export(__webpack_require__(634));
	__export(__webpack_require__(639));
	__export(__webpack_require__(640));
	__export(__webpack_require__(641));
	__export(__webpack_require__(642));
	__export(__webpack_require__(643));


/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var AboutComponent = (function () {
	    function AboutComponent(titleService) {
	        this.titleService = titleService;
	        this.titleService.setTitle("One Rocket Road | About");
	    }
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'about',
	            templateUrl: '/angular/views/about.template.html'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object])
	    ], AboutComponent);
	    return AboutComponent;
	    var _a;
	}());
	exports.AboutComponent = AboutComponent;


/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var router_1 = __webpack_require__(387);
	var services_1 = __webpack_require__(442);
	var pipes_1 = __webpack_require__(559);
	var ArticleComponent = (function () {
	    function ArticleComponent(articleService, titleService, route, router) {
	        this.articleService = articleService;
	        this.titleService = titleService;
	        this.route = route;
	        this.router = router;
	    }
	    ArticleComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // Grab router params
	        var year = this.route.snapshot.params['year'];
	        var month = this.route.snapshot.params['month'];
	        var day = this.route.snapshot.params['day'];
	        var slug = this.route.snapshot.params['slug'];
	        // Make server request
	        this.articleService.getArticle(year, month, day, slug)
	            .subscribe(function (article) {
	            // Fetch the article and set the title
	            _this.article = article;
	            _this.titleService.setTitle("One Rocket Road | " + article.title);
	        }, function (error) {
	            _this.router.navigate(['/articles']);
	        });
	    };
	    ArticleComponent = __decorate([
	        core_1.Component({
	            selector: 'article',
	            templateUrl: '/angular/views/article.template.html',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [services_1.ArticleService],
	            pipes: [pipes_1.MarkdownPipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.ArticleService !== 'undefined' && services_1.ArticleService) === 'function' && _a) || Object, (typeof (_b = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
	    ], ArticleComponent);
	    return ArticleComponent;
	    var _a, _b, _c, _d;
	}());
	exports.ArticleComponent = ArticleComponent;


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(443));
	__export(__webpack_require__(444));
	__export(__webpack_require__(555));
	__export(__webpack_require__(556));
	__export(__webpack_require__(557));
	__export(__webpack_require__(558));


/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	var AbstractService = (function () {
	    function AbstractService() {
	    }
	    /**
	     * We will always want to parse the reponse body from the server, but response.json()
	     * will return an error if no content (204) is present. In this case, just return an empty object.
	     *
	     * @param response
	     * @returns {Observable<any>}
	     */
	    AbstractService.prototype.parseJson = function (response) {
	        if (response.status != 204) {
	            return response.json();
	        }
	        return null;
	    };
	    /**
	     * Handles any 400 or 500-level server responses by logging their details to the console.
	     *
	     * @param error
	     * @returns {ErrorObservable}
	     */
	    AbstractService.prototype.handleError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - " + error.statusText : 'Server error';
	        console.error(errMsg); // log to console instead
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return AbstractService;
	}());
	exports.AbstractService = AbstractService;


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var services_1 = __webpack_require__(442);
	var classes_1 = __webpack_require__(445);
	var Observable_1 = __webpack_require__(38);
	var ArticleService = (function (_super) {
	    __extends(ArticleService, _super);
	    function ArticleService(http) {
	        _super.call(this);
	        this.http = http;
	    }
	    ArticleService.prototype.getArticles = function () {
	        return null;
	    };
	    /**
	     * Get the next 10 articles from a predefined offset cursor, sorted in descending
	     * order by publication date.
	     *
	     * @param cursor    An optional parameter defining the offset for where to start
	     *  retrieving articles from. If optional, cursor will default to 0.
	     * @returns {Observable<Article[]>}
	     */
	    ArticleService.prototype.getRecentArticles = function (cursor) {
	        var _this = this;
	        cursor = cursor == null ? 0 : cursor;
	        return this.http.get('/api/articles/getrecent/' + cursor)
	            .map(this.parseJson)
	            .map(function (models) {
	            if (models != null) {
	                return models.map(_this.createArticleModel);
	            }
	            return [];
	        })
	            .catch(this.handleError);
	    };
	    /**
	     * Get an article by its year, month, & day of publication, as well as its slug. All three are
	     * needed to correctly fetch the article.
	     * GET: /api/articles/get/:year/:month/:day/:slug
	     *
	     * @param year      The year of article publication.
	     * @param month     The month of article publication.
	     * @param day       The day of article publication.
	     * @param slug      The slugged title of the article.
	     * @returns {Observable<Article>}   The article specified by the above parameters.
	     */
	    ArticleService.prototype.getArticle = function (year, month, day, slug) {
	        var _this = this;
	        return this.http.get('/api/articles/get/' + year + '/' + month + '/' + day + "/" + slug)
	            .map(this.parseJson)
	            .map(this.createArticleModel)
	            .catch(function (response) {
	            if (response.status == 404) {
	                return Observable_1.Observable.throw("Article not found");
	            }
	            return _this.handleError(response);
	        });
	    };
	    ArticleService.prototype.getNeighbourArticles = function () {
	        return null;
	    };
	    /**
	     * Creates (and therefore publishes) an article on the server.
	     * PUT: /api/articles/create.
	     *
	     * @param article   The article to be created on the server.
	     * @returns {Observable<Article>}   The article returned from the server.
	     */
	    ArticleService.prototype.createArticle = function (article) {
	        return this.http.put('/api/articles/create', article)
	            .map(this.parseJson)
	            .map(this.createArticleModel)
	            .catch(this.handleError);
	    };
	    ArticleService.prototype.updateArticle = function (article) {
	        return null;
	    };
	    ArticleService.prototype.deleteArticle = function (article) {
	        return null;
	    };
	    /**
	     * Creates an article model from data on the server.
	     *
	     * @private
	     * @param model
	     * @returns {Article}
	     */
	    ArticleService.prototype.createArticleModel = function (model) {
	        return new classes_1.Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
	    };
	    ArticleService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ArticleService);
	    return ArticleService;
	    var _a;
	}(services_1.AbstractService));
	exports.ArticleService = ArticleService;


/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(446));
	__export(__webpack_require__(550));
	__export(__webpack_require__(551));
	__export(__webpack_require__(552));
	__export(__webpack_require__(553));
	__export(__webpack_require__(554));


/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var moment = __webpack_require__(447);
	var Article = (function () {
	    function Article(id, title, body, authorName, createdAt, updatedAt) {
	        this.id = id;
	        this.title = title;
	        this.body = body;
	        this.authorName = authorName;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    Article.createFromDraft = function (draft) {
	        var now = moment().utc().toDate();
	        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now);
	    };
	    Article.prototype.publicationYear = function () {
	        return moment.utc(this.createdAt).format("YYYY");
	    };
	    Article.prototype.publicationMonth = function () {
	        return moment.utc(this.createdAt).format("MM");
	    };
	    Article.prototype.publicationDay = function () {
	        return moment.utc(this.createdAt).format("DD");
	    };
	    /**
	     * Produces a snippet of the article from the first 25 words of the article's body;
	     * then depending on whether the snippet ends with a period, may append an ellipsis to
	     * the snippet.
	     *
	     * @returns {string}
	     */
	    Article.prototype.snippet = function () {
	        var wordsToTake = 25;
	        var snippet = this.body.split(" ").slice(0, wordsToTake).join(" ");
	        if (snippet.slice(-1) == ".") {
	            return snippet;
	        }
	        return snippet + "...";
	    };
	    /**
	     * Calculates and returns the number of acronyms present within the article.
	     *
	     * @returns {number}
	     */
	    Article.prototype.acronymCount = function () {
	        var matches = this.body.match(/[A-Z]{2,}/g);
	        return matches ? matches.length : 0;
	    };
	    /**
	     * Calculates and returns number of words present within the article.
	     *
	     * @returns {number}
	     */
	    Article.prototype.wordCount = function () {
	        var matches = this.body.match(/[\w\d]+/gi);
	        return matches ? matches.length : 0;
	    };
	    /**
	     * Estimates the average time it will take to read this article.
	     *
	     * @returns {string}
	     */
	    Article.prototype.readingLength = function () {
	        var lowerBoundedWordsPerMinute = 200;
	        var higherBoundedWordsPerMinute = 250;
	        var wordCount = this.wordCount();
	        if (wordCount / higherBoundedWordsPerMinute < 2) {
	            return "Less than 2 minutes";
	        }
	        else {
	            var lowerBoundedLength = Math.floor(wordCount / lowerBoundedWordsPerMinute);
	            var higherBoundedLength = Math.ceil(wordCount / higherBoundedWordsPerMinute);
	            return "About " + lowerBoundedLength + " to " + higherBoundedLength + " minutes";
	        }
	    };
	    Article.prototype.slug = function () {
	        return this.title.toLowerCase()
	            .replace(/\s+/g, '-') // Replace spaces with -
	            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
	            .replace(/\-\-+/g, '-') // Replace multiple - with single -
	            .replace(/^-+/, '') // Trim - from start of text
	            .replace(/-+$/, ''); // Trim - from end of text
	    };
	    return Article;
	}());
	exports.Article = Article;


/***/ },

/***/ 550:
/***/ function(module, exports) {

	"use strict";
	var Draft = (function () {
	    function Draft(id, title, body, author, authorName, heroId, hero, dueAt, createdAt, updatedAt) {
	        this.id = id;
	        this.title = title;
	        this.body = body;
	        this.author = author;
	        this.authorName = authorName;
	        this.heroId = heroId;
	        this.hero = hero;
	        this.dueAt = dueAt;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    /**
	     * Calculates and returns number of words present within the draft.
	     *
	     * @returns {number}
	     */
	    Draft.prototype.wordCount = function () {
	        var matches = this.body.match(/[\w\d]+/gi);
	        return matches ? matches.length : 0;
	    };
	    Draft.prototype.isPublishable = function () {
	        return this.title != null && this.body != null
	            && this.title.length > 0 && this.body.length > 0
	            && this.hero != null;
	    };
	    return Draft;
	}());
	exports.Draft = Draft;


/***/ },

/***/ 551:
/***/ function(module, exports) {

	"use strict";
	var Home = (function () {
	    function Home(articles) {
	        this.articles = articles;
	        if (articles.length >= 1) {
	            this.leadArticle = articles[0];
	        }
	        if (articles.length >= 3) {
	            this.midTierArticles = { first: articles[1], second: articles[2] };
	        }
	        if (articles.length >= 6) {
	            this.moreArticles = {
	                first: articles[3],
	                second: articles[4],
	                third: articles[5]
	            };
	        }
	    }
	    return Home;
	}());
	exports.Home = Home;


/***/ },

/***/ 552:
/***/ function(module, exports) {

	"use strict";
	var Image = (function () {
	    function Image(id, filename, thumbname, summary, attribution, size, color, createdAt, updatedAt) {
	        this.id = id;
	        this.filename = filename;
	        this.thumbname = thumbname;
	        this.summary = summary;
	        this.attribution = attribution;
	        this.size = size;
	        this.color = color;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    Image.prototype.getUrl = function () {
	        return '/uploads/' + this.filename;
	    };
	    Image.prototype.getThumbUrl = function () {
	        return '/uploads/' + this.thumbname;
	    };
	    Image.prototype.humanReadableSize = function () {
	        return "";
	    };
	    Image.prototype.colorAsHex = function () {
	        return "";
	    };
	    return Image;
	}());
	exports.Image = Image;


/***/ },

/***/ 553:
/***/ function(module, exports) {

	"use strict";
	var Tag = (function () {
	    function Tag() {
	    }
	    return Tag;
	}());
	exports.Tag = Tag;


/***/ },

/***/ 554:
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User() {
	    }
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var services_1 = __webpack_require__(442);
	var classes_1 = __webpack_require__(445);
	var DraftService = (function (_super) {
	    __extends(DraftService, _super);
	    function DraftService(http) {
	        _super.call(this);
	        this.http = http;
	    }
	    /**
	     * Get all drafts from the server.
	     * GET: /api/drafts/all
	     *
	     * @returns {Observable<Draft[]>}  All drafts from the server.
	     */
	    DraftService.prototype.getAllDrafts = function () {
	        var _this = this;
	        return this.http.get('/api/drafts/all')
	            .map(this.parseJson)
	            .map(function (models) {
	            if (models != null) {
	                return models.map(function (model) { return _this.createDraftModel(model); });
	            }
	            return [];
	        })
	            .catch(this.handleError);
	    };
	    /**
	     * Get a draft by its id from the server.
	     * GET: /api/drafts/get/:id
	     *
	     * @param draftId   The id of the draft to be fetched.
	     * @returns {Observable<Draft>}    The draft specified by the id.
	     */
	    DraftService.prototype.getDraft = function (draftId) {
	        return this.http.get('/api/drafts/get/' + draftId)
	            .map(this.parseJson)
	            .map(this.createDraftModel)
	            .catch(this.handleError);
	    };
	    /**
	     * Create an initial draft on the server.
	     * PUT: /api/drafts/create
	     *
	     * @param draft The draft to be created on the server.
	     * @returns {Observable<Draft>}    The draft returned from the server.
	     */
	    DraftService.prototype.createDraft = function (draft) {
	        return this.http.put('/api/drafts/create', draft)
	            .map(this.parseJson)
	            .map(this.createDraftModel)
	            .catch(this.handleError);
	    };
	    /**
	     * Update an existing draft with new information.
	     * PATCH: /api/drafts/update
	     *
	     * @param draft The draft to update.
	     * @returns {Observable<Draft>}   The draft returned from the server.
	     */
	    DraftService.prototype.updateDraft = function (draft) {
	        return this.http.patch('/api/drafts/update', draft)
	            .map(this.parseJson)
	            .map(this.createDraftModel)
	            .catch(this.handleError);
	    };
	    /**
	     * Delete a draft from the server with the given id.
	     * DELETE: /api/drafts/delete/:id
	     *
	     * @param draft The draft to delete.
	     * @returns {Observable<number>}   A status code indicating the outcome of the operation.
	     */
	    DraftService.prototype.deleteDraft = function (draft) {
	        return this.http.delete('/api/drafts/delete/' + draft.id)
	            .map(function (response) { return response.status; })
	            .catch(this.handleError);
	    };
	    /**
	     * Creates a draft model from data on the server.
	     *
	     * @private
	     * @param model
	     * @returns {Draft}
	     */
	    DraftService.prototype.createDraftModel = function (model) {
	        return new classes_1.Draft(model.id, model.title, model.body, null, model.authorName, model.heroId, model.hero, model.dueAt, model.createdAt, model.updatedAt);
	    };
	    DraftService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], DraftService);
	    return DraftService;
	    var _a;
	}(services_1.AbstractService));
	exports.DraftService = DraftService;


/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var services_1 = __webpack_require__(442);
	var classes_1 = __webpack_require__(445);
	var HomeService = (function (_super) {
	    __extends(HomeService, _super);
	    function HomeService(http) {
	        _super.call(this);
	        this.http = http;
	    }
	    /**
	     * Fetches homepage data from the server before constructing and returning a Home object.
	     * GET: /api/home/get
	     *
	     * @returns {Observable<Home>}
	     */
	    HomeService.prototype.getHome = function () {
	        return this.http.get('/api/home/get')
	            .map(function (response) { return response.json(); })
	            .map(function (models) {
	            if (models != null) {
	                var articles = models.map(function (model) {
	                    return new classes_1.Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
	                });
	                return new classes_1.Home(articles);
	            }
	            return new classes_1.Home([]);
	        })
	            .catch(this.handleError);
	    };
	    HomeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], HomeService);
	    return HomeService;
	    var _a;
	}(services_1.AbstractService));
	exports.HomeService = HomeService;


/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var UserService = (function () {
	    function UserService() {
	    }
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], UserService);
	    return UserService;
	}());
	exports.UserService = UserService;


/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var services_1 = __webpack_require__(442);
	var classes_1 = __webpack_require__(445);
	var ImageService = (function (_super) {
	    __extends(ImageService, _super);
	    function ImageService(http) {
	        _super.call(this);
	        this.http = http;
	    }
	    /**
	     * Get all images from the server.
	     * GET: /api/images/all
	     *
	     * @returns {Observable<Image[]>}   All images from the server.
	     */
	    ImageService.prototype.getImages = function () {
	        return this.http.get('/api/images/all')
	            .map(function (response) { return response.json(); })
	            .map(function (models) {
	            return models.map(function (model) {
	                return new classes_1.Image(model.id, model.filename, model.thumbname, model.summary, model.attribution, model.size, model.color, model.createdAt, model.updatedAt);
	            });
	        })
	            .catch(this.handleError);
	    };
	    /**
	     * Get an image by its id from the server.
	     * GET: /api/images/get/:id
	     *
	     * @param id    The id of the image to be fetched
	     * @returns {Observable<Image>}     The image specified by the id.
	     */
	    ImageService.prototype.getImage = function (id) {
	        return this.http.get('/api/images/get/' + id)
	            .map(function (response) { return response.json(); })
	            .map(function (model) {
	            return new classes_1.Image(model.id, model.filename, model.thumbname, model.summary, model.attribution, model.size, model.color, model.createdAt, model.updatedAt);
	        })
	            .catch(this.handleError);
	    };
	    ImageService.prototype.deleteImage = function () {
	        return null;
	    };
	    ImageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ImageService);
	    return ImageService;
	    var _a;
	}(services_1.AbstractService));
	exports.ImageService = ImageService;


/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(560));


/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var Remarkable = __webpack_require__(561); // No typings yet
	var MarkdownPipe = (function () {
	    function MarkdownPipe(sanitizer) {
	        this.sanitizer = sanitizer;
	        // Typegrpaher enables quotes beautification
	        this.remarkable = new Remarkable({
	            typographer: true
	        });
	        // Enable parsing of YouTube videos
	        this.remarkable.use(this.parseVideos);
	        // Enable support for subscript and superscript formatting via
	        // the ^ (19^th^) and ~ (H~2~O) operators.
	        this.remarkable.inline.ruler.enable(['sub', 'sup']);
	    }
	    /***
	     * Transforms a markdown-enabled string into rendered markdown.
	     *
	     * @param value
	     * @returns {SafeHtml}  A known safe string of HTML.
	     */
	    MarkdownPipe.prototype.transform = function (value) {
	        if (value != null) {
	            return this.sanitizer.bypassSecurityTrustHtml(this.remarkable.render(value));
	        }
	        return null;
	    };
	    /**
	     * A function that provides an inline video parser that matches a syntax of:
	     * @[](video-link), rendering it into an iframe of a YouTube video embed.
	     *
	     * @param md    The instance of Remarkable.
	     */
	    MarkdownPipe.prototype.parseVideos = function (md) {
	        md.inline.ruler.push('video', function (state) {
	            // Store local copy of position so we don't overwrite it if we need to revert.
	            var pos = state.pos;
	            var marker = state.src.charCodeAt(pos++);
	            // Expect a series of tokens that matches the substring "@[](". This defines
	            // the start of a video.
	            if (marker !== 0x40 /* @ */) {
	                return false;
	            }
	            marker = state.src.charCodeAt(pos++);
	            if (marker !== 0x5B /* [ */) {
	                return false;
	            }
	            marker = state.src.charCodeAt(pos++);
	            if (marker !== 0x5D /* ] */) {
	                return false;
	            }
	            marker = state.src.charCodeAt(pos++);
	            if (marker !== 0x28 /* ( */) {
	                return false;
	            }
	            // Begin URL. While the current position is less than the length of the string,
	            // increment until we find a closing tag ")". Everything in between is the URL.
	            var urlStart = pos;
	            while (pos < state.posMax) {
	                marker = state.src.charCodeAt(pos++);
	                if (marker === 0x29 /* ) */) {
	                    break;
	                }
	            }
	            // Generate our token
	            var token = {
	                type: "video",
	                level: state.level,
	                src: state.src.slice(urlStart, pos - 1),
	                content: marker
	            };
	            // Update the state position as the token successfully completed, push the token
	            // onto the tokens array, and return true.
	            state.pos = pos;
	            state.push(token);
	            return true;
	        });
	        // Render our video in an iframe.
	        md.renderer.rules.video = function (tokens, idx, options) {
	            var src = tokens[idx].src;
	            return '<iframe width="1280" height="720" src="' + src
	                + '?rel=0" frameborder="0" allowfullscreen></iframe>';
	        };
	    };
	    MarkdownPipe = __decorate([
	        // No typings yet
	        core_1.Pipe({
	            name: 'markdown'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizationService !== 'undefined' && platform_browser_1.DomSanitizationService) === 'function' && _a) || Object])
	    ], MarkdownPipe);
	    return MarkdownPipe;
	    var _a;
	}());
	exports.MarkdownPipe = MarkdownPipe;


/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var router_1 = __webpack_require__(387);
	var services_1 = __webpack_require__(442);
	var pipes_1 = __webpack_require__(559);
	var directives_1 = __webpack_require__(623);
	var ArticlesComponent = (function () {
	    function ArticlesComponent(articleService, titleService, route, router) {
	        this.articleService = articleService;
	        this.titleService = titleService;
	        this.route = route;
	        this.router = router;
	        this.cursor = 0;
	        this.hasMoreArticles = true;
	        this.articles = [];
	        this.titleService.setTitle("One Rocket Road | Articles");
	    }
	    ArticlesComponent.prototype.ngOnInit = function () {
	        this.getMoreArticles();
	    };
	    /**
	     * Get more recent articles from the article service, and add them to the component
	     * article array, and increment the component cursor value. If the number of returned
	     * articles is less than 10, we can safely assume the server is out of articles, and hide
	     * the button to load more articles.
	     */
	    ArticlesComponent.prototype.getMoreArticles = function () {
	        var _this = this;
	        this.articleService.getRecentArticles(this.cursor).subscribe(function (articles) {
	            _this.cursor += articles.length;
	            _this.articles.push.apply(_this.articles, articles);
	            if (articles.length < 10) {
	                _this.hasMoreArticles = false;
	            }
	        });
	    };
	    ArticlesComponent = __decorate([
	        core_1.Component({
	            selector: 'articles',
	            templateUrl: '/angular/views/articles.template.html',
	            pipes: [pipes_1.MarkdownPipe],
	            directives: [router_1.ROUTER_DIRECTIVES, directives_1.ArticleRouterLinkDirective],
	            providers: [services_1.ArticleService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.ArticleService !== 'undefined' && services_1.ArticleService) === 'function' && _a) || Object, (typeof (_b = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
	    ], ArticlesComponent);
	    return ArticlesComponent;
	    var _a, _b, _c, _d;
	}());
	exports.ArticlesComponent = ArticlesComponent;


/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(624));
	__export(__webpack_require__(625));
	__export(__webpack_require__(626));
	__export(__webpack_require__(627));
	__export(__webpack_require__(628));


/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(387);
	var common_1 = __webpack_require__(2);
	var classes_1 = __webpack_require__(445);
	var ArticleRouterLinkDirective = (function () {
	    function ArticleRouterLinkDirective(router, route, locationStrategy) {
	        var _this = this;
	        this.router = router;
	        this.route = route;
	        this.locationStrategy = locationStrategy;
	        this.commands = [];
	        this.subscription = router.events.subscribe(function (s) {
	            if (s instanceof router_1.NavigationEnd) {
	                _this.updateTargetUrlAndHref();
	            }
	        });
	    }
	    Object.defineProperty(ArticleRouterLinkDirective.prototype, "articleRouterLink", {
	        set: function (article) {
	            if (article != null) {
	                this.commands = ['/article', article.publicationYear(), article.publicationMonth(), article.publicationDay(), article.slug()];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ArticleRouterLinkDirective.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
	    ArticleRouterLinkDirective.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	    ArticleRouterLinkDirective.prototype.onClick = function (button, ctrlKey, metaKey) {
	        if (button !== 0 || ctrlKey || metaKey) {
	            return true;
	        }
	        if (this.model instanceof classes_1.Article === false) {
	            return true;
	        }
	        this.router.navigateByUrl(this.urlTree);
	        return false;
	    };
	    ArticleRouterLinkDirective.prototype.updateTargetUrlAndHref = function () {
	        this.urlTree = this.router.createUrlTree(this.commands);
	        if (this.urlTree) {
	            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
	        }
	    };
	    __decorate([
	        core_1.Input('articleRouterLink'), 
	        __metadata('design:type', (typeof (_a = typeof classes_1.Article !== 'undefined' && classes_1.Article) === 'function' && _a) || Object)
	    ], ArticleRouterLinkDirective.prototype, "model", void 0);
	    __decorate([
	        core_1.HostBinding(), 
	        __metadata('design:type', String)
	    ], ArticleRouterLinkDirective.prototype, "href", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_b = typeof classes_1.Article !== 'undefined' && classes_1.Article) === 'function' && _b) || Object), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof classes_1.Article !== 'undefined' && classes_1.Article) === 'function' && _c) || Object])
	    ], ArticleRouterLinkDirective.prototype, "articleRouterLink", null);
	    __decorate([
	        core_1.HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Number, Boolean, Boolean]), 
	        __metadata('design:returntype', Boolean)
	    ], ArticleRouterLinkDirective.prototype, "onClick", null);
	    ArticleRouterLinkDirective = __decorate([
	        core_1.Directive({
	            selector: 'a[articleRouterLink]',
	            host: {
	                'click': 'onClick()'
	            }
	        }), 
	        __metadata('design:paramtypes', [(typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _e) || Object, (typeof (_f = typeof common_1.LocationStrategy !== 'undefined' && common_1.LocationStrategy) === 'function' && _f) || Object])
	    ], ArticleRouterLinkDirective);
	    return ArticleRouterLinkDirective;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.ArticleRouterLinkDirective = ArticleRouterLinkDirective;


/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var ContentEditableDirective = (function () {
	    function ContentEditableDirective(el) {
	        this.el = el;
	        this.update = new core_1.EventEmitter();
	        el.nativeElement.setAttribute("contenteditable", "");
	        el.nativeElement.textContent = this.model;
	    }
	    ContentEditableDirective.prototype.ngOnChanges = function (changes) {
	        this.el.nativeElement.textContent = this.model;
	        this.lastModel = this.model;
	    };
	    ContentEditableDirective.prototype.onBlur = function () {
	        var value = this.el.nativeElement.textContent;
	        this.lastModel = value;
	        this.update.emit(value);
	    };
	    __decorate([
	        core_1.Input('contentEditableModel'), 
	        __metadata('design:type', Object)
	    ], ContentEditableDirective.prototype, "model", void 0);
	    __decorate([
	        core_1.Output('contentEditableModelChange'), 
	        __metadata('design:type', Object)
	    ], ContentEditableDirective.prototype, "update", void 0);
	    __decorate([
	        core_1.HostListener('onblur'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], ContentEditableDirective.prototype, "onBlur", null);
	    ContentEditableDirective = __decorate([
	        core_1.Directive({
	            selector: '[contentEditableModel]',
	            host: {
	                '(blur)': 'onBlur()'
	            }
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], ContentEditableDirective);
	    return ContentEditableDirective;
	    var _a;
	}());
	exports.ContentEditableDirective = ContentEditableDirective;


/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var DraggableDirective = (function () {
	    function DraggableDirective(el) {
	        this.el = el;
	        this.el.nativeElement.setAttribute('draggable', 'true');
	    }
	    DraggableDirective.prototype.onDragStart = function (event) {
	        this.el.nativeElement.classList.add("being-dragged");
	        event.dataTransfer.effectAllowed = "move";
	        event.dataTransfer.setData("text", JSON.stringify(this.data));
	    };
	    DraggableDirective.prototype.onDragEnd = function (event) {
	        this.el.nativeElement.classList.remove("being-dragged");
	    };
	    __decorate([
	        core_1.Input('isDraggable'), 
	        __metadata('design:type', Object)
	    ], DraggableDirective.prototype, "data", void 0);
	    __decorate([
	        core_1.HostListener('dragstart', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DraggableDirective.prototype, "onDragStart", null);
	    __decorate([
	        core_1.HostListener('dragend', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DraggableDirective.prototype, "onDragEnd", null);
	    DraggableDirective = __decorate([
	        core_1.Directive({
	            selector: '[isDraggable]',
	            host: {
	                '(dragstart)': 'onDragStart()',
	                '(dragend)': 'onDragEnd()'
	            }
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], DraggableDirective);
	    return DraggableDirective;
	    var _a;
	}());
	exports.DraggableDirective = DraggableDirective;


/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var DroppableDirective = (function () {
	    function DroppableDirective(el) {
	        this.el = el;
	        this.dropped = new core_1.EventEmitter();
	    }
	    DroppableDirective.prototype.onDragEnter = function (event) {
	        this.el.nativeElement.classList.add("being-dropped");
	    };
	    DroppableDirective.prototype.onDragLeave = function (event) {
	        this.el.nativeElement.classList.remove("being-dropped");
	    };
	    DroppableDirective.prototype.onDragOver = function (event) {
	        if (event.preventDefault) {
	            event.preventDefault();
	        }
	    };
	    DroppableDirective.prototype.onDrop = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.el.nativeElement.classList.remove("being-dropped");
	        var data = JSON.parse(event.dataTransfer.getData("text"));
	        console.log(data);
	        this.dropped.emit(data);
	        return false;
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], DroppableDirective.prototype, "dropped", void 0);
	    __decorate([
	        core_1.HostListener('dragenter', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DroppableDirective.prototype, "onDragEnter", null);
	    __decorate([
	        core_1.HostListener('dragleave', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DroppableDirective.prototype, "onDragLeave", null);
	    __decorate([
	        core_1.HostListener('dragover', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DroppableDirective.prototype, "onDragOver", null);
	    __decorate([
	        core_1.HostListener('drop', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], DroppableDirective.prototype, "onDrop", null);
	    DroppableDirective = __decorate([
	        core_1.Directive({
	            selector: '[isDroppable]',
	            host: {
	                '(dragenter)': 'onDragEnter()',
	                '(dragleave)': 'onDragLeave()',
	                '(dragover)': 'onDragOver()',
	                '(drop)': 'onDrop()'
	            }
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], DroppableDirective);
	    return DroppableDirective;
	    var _a, _b;
	}());
	exports.DroppableDirective = DroppableDirective;


/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var HighlightOnClickDirective = (function () {
	    function HighlightOnClickDirective(el) {
	        this.el = el;
	    }
	    HighlightOnClickDirective.prototype.onClick = function () {
	        this.el.nativeElement.select();
	    };
	    __decorate([
	        core_1.Input('highlightOnClick'), 
	        __metadata('design:type', Object)
	    ], HighlightOnClickDirective.prototype, "model", void 0);
	    __decorate([
	        core_1.HostListener('onclick'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], HighlightOnClickDirective.prototype, "onClick", null);
	    HighlightOnClickDirective = __decorate([
	        core_1.Directive({
	            selector: '[highlightOnClick]',
	            host: {
	                '(click)': 'onClick()'
	            }
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], HighlightOnClickDirective);
	    return HighlightOnClickDirective;
	    var _a;
	}());
	exports.HighlightOnClickDirective = HighlightOnClickDirective;


/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var router_1 = __webpack_require__(387);
	var forms_1 = __webpack_require__(349);
	var services_1 = __webpack_require__(442);
	var classes_1 = __webpack_require__(445);
	var directives_1 = __webpack_require__(623);
	var enums_1 = __webpack_require__(630);
	var pipes_1 = __webpack_require__(559);
	var Subject_1 = __webpack_require__(37);
	var DraftComponent = (function () {
	    function DraftComponent(draftService, articleService, titleService, route, router) {
	        this.draftService = draftService;
	        this.articleService = articleService;
	        this.titleService = titleService;
	        this.route = route;
	        this.router = router;
	        this.isSaving = false;
	        this.isPublishing = false;
	        this.draftViewState = enums_1.DraftViewState;
	        this.viewState = enums_1.DraftViewState.Edit;
	        this.bodyFormControl = new forms_1.FormControl();
	        this.draftSubject = new Subject_1.Subject();
	        this.draftStream = this.draftSubject.asObservable();
	    }
	    Object.defineProperty(DraftComponent.prototype, "draft", {
	        /**
	         * Getter for the private variable draft. Used to enable draft entity autosaving.
	         *
	         * @returns {Draft}
	         */
	        get: function () {
	            return this._draft;
	        },
	        /**
	         * Setter for the private field draft. Used as a hook to enable debounced draft entity autosaving.
	         *
	         * @param draft
	         */
	        set: function (draft) {
	            this._draft = draft;
	            this.draftSubject.next(draft);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DraftComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // Could either fetch data from the server again or simply pass data from the parent component?
	        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
	        // No way in router 3.0.0-beta.2 to pass data across components. Possibly best to refetch as data passed through
	        // may be outdated by the time it is used.
	        var id = +this.route.snapshot.params['id'];
	        this.draftService.getDraft(id).subscribe(function (draft) {
	            _this.draft = draft;
	            _this.titleService.setTitle("One Rocket Road | Draft: " + draft.title);
	            // Subscribe to changes and autosave when changes are detected after debouncing
	            _this.draftSubscription = _this.draftStream
	                .debounceTime(1000)
	                .subscribe(function () { return _this.autosave(); });
	        }, function (error) { return console.log(error); });
	    };
	    /**
	     * Sets the view state on the draft component. Is either one of DraftViewState.Edit or
	     * DraftViewState.View.
	     *
	     * @param state The state to set.
	     */
	    DraftComponent.prototype.setViewState = function (state) {
	        this.viewState = state;
	    };
	    /**
	     * Sets the draft hero image. Immediately sets it for responsiveness, then sends a request to
	     * store the change. If the image id is acceptable, return a new draft; if not, restore the hero
	     * and hero id's to their defauls.
	     *
	     * @param value     The id of the image to set as the hero image for the draft.
	     */
	    DraftComponent.prototype.setDraftHero = function (value) {
	        var _this = this;
	        var originalHeroId = this.draft.heroId;
	        var originalHero = this.draft.hero;
	        // Validate
	        if (value != Number.NaN && value > 0) {
	            // Set temporary new value
	            this.draft.heroId = value;
	            // Update draft
	            this.draftService.updateDraft(this.draft).subscribe(function (draft) {
	                // Value was acceptable, permanently store the change.
	                _this.draft = draft;
	            }, function (error) {
	                // Values were not acceptable, restore to original - no changes made.
	                _this.draft.heroId = originalHeroId;
	                _this.draft.hero = originalHero;
	            });
	        }
	    };
	    /**
	     * If the body of the draft is less than 200 words, highlight the word count tracker in
	     * red to represent an extremely short draft (less than approximately 3 paragraphs).
	     *
	     * @returns {string} The color the word count should be highlighted in.
	     */
	    DraftComponent.prototype.showWordCountWarning = function () {
	        return this.draft.wordCount() > 200 ? "black" : "red";
	    };
	    /**
	     * A human-readable statement representing the current wordcount of the draft body. Mainly
	     * used to enable pluralization when dealing with not one word.
	     *
	     * @returns {string}
	     */
	    DraftComponent.prototype.wordCountStatement = function () {
	        var wordCount = this.draft.wordCount();
	        if (wordCount == 1) {
	            return "1 word";
	        }
	        return wordCount + " words";
	    };
	    /**
	     *
	     */
	    DraftComponent.prototype.autosave = function () {
	        var _this = this;
	        this.isSaving = true;
	        this.draftService.updateDraft(this.draft).subscribe(function () { return _this.isSaving = false; });
	    };
	    /**
	     * Publishes a draft as an article. This creates an article from the draft, puts the article on the server,
	     * then once complete, deletes the original draft and redirects to the newly created article.
	     */
	    DraftComponent.prototype.publishDraft = function () {
	        var _this = this;
	        this.isPublishing = true;
	        var article = classes_1.Article.createFromDraft(this.draft);
	        // In turn, create the article, then delete the draft.
	        this.articleService.createArticle(article)
	            .subscribe(function (articleFromServer) {
	            // Only attempt to delete the draft once we are sure the article was created successfully.
	            _this.draftSubscription.unsubscribe();
	            _this.draftService.deleteDraft(_this.draft).subscribe(function () {
	                // Everything succeeded. Navigate away to the newly created article.
	                article = articleFromServer;
	                _this.router.navigate(['article', article.publicationYear(),
	                    article.publicationMonth(), article.publicationDay(), article.slug()]);
	            });
	        });
	    };
	    /**
	     * Deletes a draft on the server, and navigates back to the drafts listing page.
	     */
	    DraftComponent.prototype.deleteDraft = function () {
	        var _this = this;
	        // Unsubscribe before we delete the draft because there may be debounced changes waiting to
	        // take place, causing a race condition. If we are deleting we don't care about those changes anyway.
	        this.draftSubscription.unsubscribe();
	        this.draftService.deleteDraft(this.draft).subscribe(function (response) {
	            _this.router.navigate(['drafts']);
	        });
	    };
	    /**
	     * Called on ngModelChange of the draft body.
	     *
	     * @param body
	     */
	    DraftComponent.prototype.autosaveDraftBody = function (body) {
	        this.draft = new classes_1.Draft(this.draft.id, this.draft.title, body, this.draft.author, this.draft.authorName, this.draft.heroId, this.draft.hero, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
	    };
	    DraftComponent.prototype.autosaveDraftTitle = function (title) {
	        this.draft = new classes_1.Draft(this.draft.id, title, this.draft.body, this.draft.author, this.draft.authorName, this.draft.heroId, this.draft.hero, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
	    };
	    DraftComponent = __decorate([
	        core_1.Component({
	            selector: 'draft',
	            templateUrl: '/angular/views/draft.template.html',
	            directives: [directives_1.ContentEditableDirective, router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
	            providers: [services_1.DraftService, services_1.ArticleService],
	            pipes: [pipes_1.MarkdownPipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.DraftService !== 'undefined' && services_1.DraftService) === 'function' && _a) || Object, (typeof (_b = typeof services_1.ArticleService !== 'undefined' && services_1.ArticleService) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object, (typeof (_e = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _e) || Object])
	    ], DraftComponent);
	    return DraftComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.DraftComponent = DraftComponent;


/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(631));
	__export(__webpack_require__(632));


/***/ },

/***/ 631:
/***/ function(module, exports) {

	"use strict";
	(function (DraftViewState) {
	    DraftViewState[DraftViewState["Edit"] = 1] = "Edit";
	    DraftViewState[DraftViewState["Preview"] = 2] = "Preview";
	})(exports.DraftViewState || (exports.DraftViewState = {}));
	var DraftViewState = exports.DraftViewState;


/***/ },

/***/ 632:
/***/ function(module, exports) {

	"use strict";
	(function (DraftStatus) {
	    DraftStatus[DraftStatus["Draft"] = 1] = "Draft";
	    DraftStatus[DraftStatus["AwaitingReview"] = 2] = "AwaitingReview";
	    DraftStatus[DraftStatus["Reviewed"] = 3] = "Reviewed";
	})(exports.DraftStatus || (exports.DraftStatus = {}));
	var DraftStatus = exports.DraftStatus;


/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var router_1 = __webpack_require__(387);
	var classes_1 = __webpack_require__(445);
	var services_1 = __webpack_require__(442);
	var directives_1 = __webpack_require__(623);
	var Observable_1 = __webpack_require__(38);
	__webpack_require__(416);
	var DraftsComponent = (function () {
	    function DraftsComponent(draftService, articleService, route, router, titleService) {
	        this.draftService = draftService;
	        this.articleService = articleService;
	        this.route = route;
	        this.router = router;
	        this.titleService = titleService;
	        this.newDraftModel = new classes_1.Draft(null, "", "", null, null, null, null, null, null, null);
	        this.isCreatingDraft = false;
	        this.drafts = [];
	        this.articles = [];
	        this.titleService.setTitle("One Rocket Road | Drafts");
	    }
	    DraftsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        Observable_1.Observable.forkJoin(this.draftService.getAllDrafts(), this.articleService.getRecentArticles()).subscribe(function (data) {
	            _this.drafts = data[0];
	            _this.articles = data[1];
	        }, function (err) { return console.log(err); });
	    };
	    /**
	     * Creates a draft for an article, rendering only the title and the author.
	     */
	    DraftsComponent.prototype.createDraft = function () {
	        var _this = this;
	        this.isCreatingDraft = true;
	        this.draftService.createDraft(this.newDraftModel).subscribe(function (draft) {
	            _this.router.navigate(['draft', draft.id]);
	        }, function (error) { return console.log(error); });
	    };
	    /**
	     * Deletes a draft permanently.
	     *
	     * @param draft
	     */
	    DraftsComponent.prototype.deleteDraft = function (draft) {
	        var _this = this;
	        this.draftService.deleteDraft(draft).subscribe(function () {
	            _this.drafts.splice(_this.drafts.indexOf(draft), 1);
	        });
	    };
	    DraftsComponent = __decorate([
	        core_1.Component({
	            selector: 'drafts',
	            templateUrl: '/angular/views/drafts.template.html',
	            directives: [router_1.ROUTER_DIRECTIVES, directives_1.DraggableDirective, directives_1.DroppableDirective],
	            providers: [services_1.DraftService, services_1.ArticleService],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.DraftService !== 'undefined' && services_1.DraftService) === 'function' && _a) || Object, (typeof (_b = typeof services_1.ArticleService !== 'undefined' && services_1.ArticleService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _e) || Object])
	    ], DraftsComponent);
	    return DraftsComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.DraftsComponent = DraftsComponent;


/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Dropzone = __webpack_require__(635);
	var Observable_1 = __webpack_require__(38);
	__webpack_require__(636);
	var DropzoneComponent = (function () {
	    function DropzoneComponent(el) {
	        this.el = el;
	    }
	    /**
	     * On component initializtion, apply an ID of "ng2-dropzone" and style the element as a block.
	     * Create a new Dropzone out of the element, specifying various parameters about how entities
	     * should be uploaded.
	     */
	    DropzoneComponent.prototype.ngOnInit = function () {
	        this.el.nativeElement.id = "ng2-dropzone";
	        this.el.nativeElement.style.display = "block";
	        this.dropzone = new Dropzone(this.el.nativeElement, {
	            url: '/api/images/create',
	            method: "post",
	            maxFilesize: 32,
	            uploadMultiple: false,
	            acceptedFiles: '.jpg,.jpeg,.png,.gif',
	            autoProcessQueue: false,
	            headers: {
	                "X-XSRF-TOKEN": this.getXSRFToken()
	            }
	        });
	    };
	    /**
	     * Uploads a file using formdata, appending any extra details that are specified. Returns an observable
	     * of the XMLHttpRequest which resolves when upload is completed.
	     *
	     * @param detailsToAdd  Any additional details that could be appended with this request. Each key on the
	     * object is sent through as an extra form data entry.
	     *
	     * @returns Observable<any>
	     */
	    DropzoneComponent.prototype.upload = function (detailsToAdd) {
	        this.dropzone.on("sending", function (file, xhr, formData) {
	            Object.keys(detailsToAdd).forEach(function (key) {
	                formData.append(key, detailsToAdd[key]);
	            });
	        });
	        this.dropzone.processQueue();
	        return Observable_1.Observable.fromEvent(this.dropzone, "complete").map(function (response) {
	            return response.xhr;
	        });
	    };
	    DropzoneComponent.prototype.clear = function () {
	        this.dropzone.removeAllFiles();
	    };
	    /**
	     * Although Angular 2 automatically handles resending an X-XSRF-TOKEN header to the server,
	     * Dropzone does not; so we must grab the cookie with the XSRF token outselves.
	     *
	     * @returns string  The XSRF token retrieved from the cookie.
	     */
	    DropzoneComponent.prototype.getXSRFToken = function () {
	        var value = "; " + document.cookie;
	        var parts = value.split("; " + "XSRF-TOKEN" + "=");
	        if (parts.length == 2) {
	            return decodeURIComponent(parts.pop().split(";").shift());
	        }
	        return null;
	    };
	    DropzoneComponent = __decorate([
	        core_1.Component({
	            selector: 'dropzone',
	            template: ''
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], DropzoneComponent);
	    return DropzoneComponent;
	    var _a;
	}());
	exports.DropzoneComponent = DropzoneComponent;


/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	var fromEvent_1 = __webpack_require__(637);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(638);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(38);
	var tryCatch_1 = __webpack_require__(48);
	var errorObject_1 = __webpack_require__(49);
	var Subscription_1 = __webpack_require__(45);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    /**
	     * @param sourceObj
	     * @param eventName
	     * @param selector
	     * @return {FromEventObservable}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(387);
	var platform_browser_1 = __webpack_require__(259);
	var services_1 = __webpack_require__(442);
	var directives_1 = __webpack_require__(623);
	var HomeComponent = (function () {
	    function HomeComponent(homeService, route, router, titleService) {
	        this.homeService = homeService;
	        this.route = route;
	        this.router = router;
	        this.titleService = titleService;
	        this.titleService.setTitle("One Rocket Road");
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.homeService.getHome().subscribe(function (home) {
	            _this.home = home;
	        });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: '/angular/views/home.template.html',
	            directives: [router_1.ROUTER_DIRECTIVES, directives_1.ArticleRouterLinkDirective],
	            providers: [services_1.HomeService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.HomeService !== 'undefined' && services_1.HomeService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _d) || Object])
	    ], HomeComponent);
	    return HomeComponent;
	    var _a, _b, _c, _d;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var classes_1 = __webpack_require__(445);
	var components_1 = __webpack_require__(439);
	var services_1 = __webpack_require__(442);
	var directives_1 = __webpack_require__(623);
	var ImagesComponent = (function () {
	    function ImagesComponent(imageService, titleService) {
	        this.imageService = imageService;
	        this.titleService = titleService;
	        this.imageToUpload = new classes_1.Image(null, null, null, null, null, null, null, null, null);
	        this.images = [];
	        this.isSubmitting = false;
	        this.titleService.setTitle("One Rocket Road | Images");
	    }
	    ImagesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.imageService.getImages().subscribe(function (images) {
	            _this.images = images;
	            console.log(_this.images);
	        });
	    };
	    /**
	     * Uploads a new image, storing it on the server, before clearing the upload form and
	     * adding the newly-created image to the images array.
	     */
	    ImagesComponent.prototype.uploadNewImage = function () {
	        var _this = this;
	        this.isSubmitting = true;
	        this.dropzoneComponent.upload(this.imageToUpload).subscribe(function (xmlHttpRequest) {
	            // Allow easier access to the image from the xhr.
	            var image = JSON.parse(xmlHttpRequest.response);
	            // Reset the upload form.
	            _this.imageToUpload = new classes_1.Image(null, null, null, null, null, null, null, null, null);
	            _this.isSubmitting = false;
	            // push the newly created image onto the images array.
	            _this.images.push(new classes_1.Image(image.id, image.filename, image.thumbname, image.summary, image.attribution, image.size, image.color, image.createdAt, image.updatedAt));
	            // Clear the Dropzone.
	            _this.dropzoneComponent.clear();
	        });
	    };
	    __decorate([
	        core_1.ViewChild(components_1.DropzoneComponent), 
	        __metadata('design:type', (typeof (_a = typeof components_1.DropzoneComponent !== 'undefined' && components_1.DropzoneComponent) === 'function' && _a) || Object)
	    ], ImagesComponent.prototype, "dropzoneComponent", void 0);
	    ImagesComponent = __decorate([
	        core_1.Component({
	            selector: 'images',
	            templateUrl: '/angular/views/images.template.html',
	            providers: [services_1.ImageService],
	            directives: [components_1.DropzoneComponent, directives_1.HighlightOnClickDirective]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof services_1.ImageService !== 'undefined' && services_1.ImageService) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _c) || Object])
	    ], ImagesComponent);
	    return ImagesComponent;
	    var _a, _b, _c;
	}());
	exports.ImagesComponent = ImagesComponent;


/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var LoginComponent = (function () {
	    function LoginComponent(titleService) {
	        this.titleService = titleService;
	        this.titleService.setTitle("One Rocket Road | Login");
	    }
	    LoginComponent.prototype.ngOnInit = function () {
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            templateUrl: '/angular/views/login.template.html',
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(387);
	var OneRocketRoadComponent = (function (_super) {
	    __extends(OneRocketRoadComponent, _super);
	    function OneRocketRoadComponent() {
	        _super.apply(this, arguments);
	    }
	    OneRocketRoadComponent = __decorate([
	        core_1.Component({
	            selector: 'one-rocket-road',
	            templateUrl: '/angular/views/onerocketroad.template.html',
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OneRocketRoadComponent);
	    return OneRocketRoadComponent;
	}(core_1.Type));
	exports.OneRocketRoadComponent = OneRocketRoadComponent;


/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var SignUpComponent = (function () {
	    function SignUpComponent(titleService) {
	        this.titleService = titleService;
	        this.titleService.setTitle("One Rocket Road | Sign Up");
	    }
	    SignUpComponent.prototype.ngOnInit = function () {
	    };
	    SignUpComponent = __decorate([
	        core_1.Component({
	            selector: 'sign-up',
	            templateUrl: '/angular/views/sign-up.template.html',
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object])
	    ], SignUpComponent);
	    return SignUpComponent;
	    var _a;
	}());
	exports.SignUpComponent = SignUpComponent;


/***/ }

});