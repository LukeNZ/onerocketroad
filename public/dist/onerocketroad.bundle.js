webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../typings/index.d.ts"/>
	// Angular provided-dependencies
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(203);
	var http_1 = __webpack_require__(337);
	var forms_1 = __webpack_require__(359);
	var routes_1 = __webpack_require__(397);
	// Root component
	var components_1 = __webpack_require__(459);
	var guards_1 = __webpack_require__(669);
	var services_1 = __webpack_require__(462);
	platform_browser_dynamic_1.bootstrap(components_1.OneRocketRoadComponent, [
	    routes_1.APP_ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms(),
	    platform_browser_1.Title,
	    guards_1.AuthenticatedGuard,
	    services_1.AuthenticationService
	]).catch(function (err) { return console.error(err); });


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(398);
	var components_1 = __webpack_require__(459);
	var guards_1 = __webpack_require__(669);
	// At a future release, we should hopefully be able to specify routes
	exports.routes = [
	    //  Public routes
	    { path: '', component: components_1.HomeComponent },
	    { path: 'articles', component: components_1.ArticlesComponent },
	    { path: 'article/:year/:month/:day/:slug', component: components_1.ArticleComponent },
	    { path: 'about', component: components_1.AboutComponent },
	    // Private routes
	    { path: 'drafts', component: components_1.DraftsComponent, canActivate: [guards_1.AuthenticatedGuard] },
	    { path: 'draft/:id', component: components_1.DraftComponent, canActivate: [guards_1.AuthenticatedGuard] },
	    { path: 'images', component: components_1.ImagesComponent, canActivate: [guards_1.AuthenticatedGuard] },
	    { path: 'auth/signup', component: components_1.SignUpComponent },
	    { path: 'auth/login', component: components_1.LoginComponent },
	    { path: 'styleguide', component: components_1.StyleGuideComponent, canActivate: [guards_1.AuthenticatedGuard] }
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(460));
	__export(__webpack_require__(461));
	__export(__webpack_require__(644));
	__export(__webpack_require__(652));
	__export(__webpack_require__(656));
	__export(__webpack_require__(658));
	__export(__webpack_require__(663));
	__export(__webpack_require__(664));
	__export(__webpack_require__(665));
	__export(__webpack_require__(666));
	__export(__webpack_require__(667));
	__export(__webpack_require__(668));


/***/ },

/***/ 460:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
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

/***/ 461:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var router_1 = __webpack_require__(398);
	var services_1 = __webpack_require__(462);
	var pipes_1 = __webpack_require__(581);
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

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(463));
	__export(__webpack_require__(464));
	__export(__webpack_require__(575));
	__export(__webpack_require__(576));
	__export(__webpack_require__(577));
	__export(__webpack_require__(578));
	__export(__webpack_require__(579));
	__export(__webpack_require__(580));


/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(70);
	var http_1 = __webpack_require__(337);
	var AbstractService = (function () {
	    function AbstractService() {
	    }
	    /**
	     * We will always want to parse the reponse body from the server, but response.json()
	     * will return an error if no content (204) is present. In this case, just return an empty object.
	     *
	     * @param response
	     * @returns any
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
	    /**
	     * Fetches the auth token and stores it in a header.
	     *
	     * @returns {{headers: Headers}}
	     */
	    AbstractService.prototype.authToken = function () {
	        var headers = new http_1.Headers();
	        var authToken = localStorage.getItem('authtoken');
	        if (authToken != null) {
	            headers.append('Authorization', "bearer " + authToken);
	            return { headers: headers };
	        }
	        return null;
	    };
	    return AbstractService;
	}());
	exports.AbstractService = AbstractService;


/***/ },

/***/ 464:
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
	var core_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(337);
	var services_1 = __webpack_require__(462);
	var classes_1 = __webpack_require__(465);
	var Observable_1 = __webpack_require__(70);
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
	        return this.http.put('/api/articles/create', article, this.authToken())
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
	        return classes_1.Article.create(model);
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(466));
	__export(__webpack_require__(570));
	__export(__webpack_require__(571));
	__export(__webpack_require__(572));
	__export(__webpack_require__(573));
	__export(__webpack_require__(574));


/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var moment = __webpack_require__(467);
	var Article = (function () {
	    /**
	     * Article constructor.
	     *
	     * @param id
	     * @param title
	     * @param body
	     * @param authorName
	     * @param createdAt
	     * @param updatedAt
	     */
	    function Article(id, title, body, authorName, createdAt, updatedAt) {
	        this.id = id;
	        this.title = title;
	        this.body = body;
	        this.authorName = authorName;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    /**
	     * Static helper method to create an article instance from a draft object.
	     *
	     * @param draft
	     * @returns {Article}
	     */
	    Article.createFromDraft = function (draft) {
	        var now = moment().utc().toDate();
	        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now);
	    };
	    /**
	     * Static helper method to create an article instance from a plain object.
	     *
	     * @param model
	     * @returns {Article}
	     */
	    Article.create = function (model) {
	        return new Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
	    };
	    /**
	     * Returns the publication year of the article in UTC, formatted as a string.
	     *
	     * @returns {string}
	     */
	    Article.prototype.publicationYear = function () {
	        return moment.utc(this.createdAt).format("YYYY");
	    };
	    /**
	     * Returns the publication month of the article in UTC, formatted as a number with a leading
	     * zero if required.
	     *
	     * @returns {string}
	     */
	    Article.prototype.publicationMonth = function () {
	        return moment.utc(this.createdAt).format("MM");
	    };
	    /**
	     * Returns the publication day of the article in UTC, formatted as a date with a leading
	     * zero if required.
	     *
	     * @returns {string}
	     */
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

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var classes_1 = __webpack_require__(465);
	var Draft = (function () {
	    /**
	     * Draft constructor
	     *
	     * @param id
	     * @param title
	     * @param body
	     * @param author
	     * @param authorName
	     * @param heroId
	     * @param hero
	     * @param tags
	     * @param dueAt
	     * @param createdAt
	     * @param updatedAt
	     */
	    function Draft(id, title, body, author, authorName, heroId, hero, tags, dueAt, createdAt, updatedAt) {
	        this.id = id;
	        this.title = title;
	        this.body = body;
	        this.author = author;
	        this.authorName = authorName;
	        this.heroId = heroId;
	        this.hero = hero;
	        this.tags = tags == null ? [] : tags;
	        this.dueAt = dueAt;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    /**
	     * Static helper method to create a draft instance from a plain object.
	     *
	     * @param model
	     * @returns {Draft}
	     */
	    Draft.create = function (model) {
	        if (model != null) {
	            return new Draft(model.id, model.title, model.body, model.author, model.authorName, model.heroId, classes_1.Image.create(model.hero), model.tags, model.dueAt, model.createdAt, model.updatedAt);
	        }
	        return new Draft();
	    };
	    /**
	     * Calculates and returns number of words present within the draft.
	     *
	     * @returns {number}
	     */
	    Draft.prototype.wordCount = function () {
	        var matches = this.body.match(/[\w\d]+/gi);
	        return matches ? matches.length : 0;
	    };
	    /**
	     * Determines if the draft is in a publishable state for it to be converted into an Article.
	     *
	     * @returns {boolean}
	     */
	    Draft.prototype.isPublishable = function () {
	        return this.title != null && this.body != null
	            && this.title.length > 0 && this.body.length > 0
	            && this.hero != null;
	    };
	    return Draft;
	}());
	exports.Draft = Draft;


/***/ },

/***/ 571:
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

/***/ 572:
/***/ function(module, exports) {

	"use strict";
	var Image = (function () {
	    /**
	     * Image constructor.
	     *
	     * @param id
	     * @param filename
	     * @param thumbname
	     * @param summary
	     * @param attribution
	     * @param size
	     * @param color
	     * @param createdAt
	     * @param updatedAt
	     */
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
	    /**
	     * Static helper method to create an image instance from a plain object.
	     *
	     * @param model
	     * @returns {Image}
	     */
	    Image.create = function (model) {
	        if (model != null) {
	            return new Image(model.id, model.filename, model.thumbname, model.summary, model.attribution, model.size, model.color, model.createdAt, model.updatedAt);
	        }
	        return new Image();
	    };
	    /**
	     * Returns the filename as a URL pointing to an accessible location.
	     *
	     * @returns {string}
	     */
	    Image.prototype.getUrl = function () {
	        return '/uploads/' + this.filename;
	    };
	    /**
	     * Returns the thumbnail as a URL pointing to an accessible location.
	     *
	     * @returns {string}
	     */
	    Image.prototype.getThumbUrl = function () {
	        return '/uploads/' + this.thumbname;
	    };
	    Image.prototype.humanReadableFileSize = function () {
	        return "";
	    };
	    Image.prototype.colorAsHex = function () {
	        return "";
	    };
	    return Image;
	}());
	exports.Image = Image;


/***/ },

/***/ 573:
/***/ function(module, exports) {

	"use strict";
	var Tag = (function () {
	    function Tag(id, key, value, description, createdAt, updatedAt) {
	        this.id = id;
	        this.key = key;
	        this.value = value;
	        this.description = description;
	        this.createdAt = createdAt;
	        this.updatedAt = updatedAt;
	    }
	    Tag.create = function (model) {
	        if (model != null) {
	            return new Tag(model.id, model.key, model.value, model.description, model.createdAt, model.updatedAt);
	        }
	        return new Tag();
	    };
	    return Tag;
	}());
	exports.Tag = Tag;


/***/ },

/***/ 574:
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User() {
	    }
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 575:
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
	var core_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(337);
	var services_1 = __webpack_require__(462);
	var AuthenticationService = (function (_super) {
	    __extends(AuthenticationService, _super);
	    /**
	     * Construct the ser
	     *
	     * @param http
	     */
	    function AuthenticationService(http) {
	        _super.call(this);
	        this.http = http;
	        this._isLoggedIn = false;
	        this._isLoggedIn = !!localStorage.getItem('authtoken');
	    }
	    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
	        /**
	         * Retrieves whether the user is logged in or not.
	         *
	         * @returns {boolean}   Is the user logged in or not?
	         */
	        get: function () {
	            return this._isLoggedIn;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Attempts to log the claimed identity of a user in. If successful, sets a token in the client,
	     * if not; allows another attempt.
	     *
	     * @param email     The email address the user is attempting to login with.
	     * @param password  The password the user is attempting to login with.
	     *
	     * @returns {Observable<boolean>}
	     */
	    AuthenticationService.prototype.login = function (email, password) {
	        var _this = this;
	        return this.http.post('/api/auth/login', { email: email, password: password })
	            .map(function (response) {
	            _this._isLoggedIn = true;
	            var authorizationHeader = response.headers.get('Authorization');
	            var authToken = authorizationHeader.split(" ").pop();
	            localStorage.setItem('authtoken', authToken); // TODO: Figure out why PHPStorm does not like model.authtoken ("unresolved variable")
	            return true;
	        })
	            .catch(this.handleError);
	    };
	    /**
	     * Log the user out of the application. Remove their localstorage token, and set the
	     * application state isLoggedIn property to false.
	     */
	    AuthenticationService.prototype.logout = function () {
	        localStorage.removeItem('authtoken');
	        this._isLoggedIn = false;
	    };
	    /**
	     * Sign a user into the application. Sends their provided email and password to the server for
	     * account creation.
	     *
	     * @param email     The email address the user is attempting to signup with.
	     * @param fullname  The fullname the user is attempting to signup with.
	     * @param password  The password the user is attempting to signup with.
	     *
	     * @returns {Observable<boolean>}
	     */
	    AuthenticationService.prototype.signUp = function (email, fullname, password) {
	        return this.http.post('/api/auth/signup', {
	            email: email,
	            fullname: fullname,
	            password: password
	        })
	            .map(this.parseJson)
	            .map(function (model) {
	            return true;
	        })
	            .catch(this.handleError);
	    };
	    AuthenticationService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], AuthenticationService);
	    return AuthenticationService;
	    var _a;
	}(services_1.AbstractService));
	exports.AuthenticationService = AuthenticationService;


/***/ },

/***/ 576:
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
	var core_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(337);
	var services_1 = __webpack_require__(462);
	var classes_1 = __webpack_require__(465);
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
	        return this.http.get('/api/drafts/all', this.authToken())
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
	        return this.http.get('/api/drafts/get/' + draftId, this.authToken())
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
	        return this.http.put('/api/drafts/create', draft, this.authToken())
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
	        return this.http.patch('/api/drafts/update', draft, this.authToken())
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
	        return this.http.delete('/api/drafts/delete/' + draft.id, this.authToken())
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
	        return classes_1.Draft.create(model);
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

/***/ 577:
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
	var core_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(337);
	var services_1 = __webpack_require__(462);
	var classes_1 = __webpack_require__(465);
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

/***/ 578:
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
	var core_1 = __webpack_require__(11);
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

/***/ 579:
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
	var core_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(337);
	var services_1 = __webpack_require__(462);
	var classes_1 = __webpack_require__(465);
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
	        return this.http.get('/api/images/all', this.authToken())
	            .map(this.parseJson)
	            .map(function (models) {
	            return models.map(function (model) {
	                return classes_1.Image.create(model);
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
	        return this.http.get('/api/images/get/' + id, this.authToken())
	            .map(this.parseJson)
	            .map(function (model) {
	            return classes_1.Image.create(model);
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

/***/ 580:
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
	var http_1 = __webpack_require__(337);
	var core_1 = __webpack_require__(11);
	var services_1 = __webpack_require__(462);
	var TaggableService = (function (_super) {
	    __extends(TaggableService, _super);
	    function TaggableService(http) {
	        _super.call(this);
	        this.http = http;
	    }
	    TaggableService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], TaggableService);
	    return TaggableService;
	    var _a;
	}(services_1.AbstractService));
	exports.TaggableService = TaggableService;


/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(582));


/***/ },

/***/ 582:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var Remarkable = __webpack_require__(583); // No typings yet
	var MediaType;
	(function (MediaType) {
	    MediaType[MediaType["RichImage"] = 1] = "RichImage";
	    MediaType[MediaType["Video"] = 2] = "Video";
	    MediaType[MediaType["Tweet"] = 3] = "Tweet";
	})(MediaType || (MediaType = {}));
	var MarkdownPipe = (function () {
	    function MarkdownPipe(sanitizer) {
	        var _this = this;
	        this.sanitizer = sanitizer;
	        // Typegrpaher enables quotes beautification
	        this.remarkable = new Remarkable({
	            typographer: true
	        });
	        // Enable parsing of rich media
	        //this.remarkable.use(this.parseRichImages);
	        this.remarkable.use(function (md) { return _this.parseVideos(md); });
	        this.remarkable.use(function (md) { return _this.parseTweets(md); });
	        this.remarkable.use(function (md) { return _this.parseRichImages(md); });
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
	            // Force tweets to reload after Markdown rendering. This is bad. Create a window
	            // service wrapper and DI.
	            setTimeout(function () {
	                if (window['twttr']) {
	                    window['twttr'].widgets.load();
	                }
	            }, 0);
	            return this.sanitizer.bypassSecurityTrustHtml(this.remarkable.render(value));
	        }
	        return null;
	    };
	    /**
	     * A function that provides rich text image viewing that matches a syntax of:
	     * ![caption](image-link "Attribution" left|right|wide), rendering it into an image
	     * with
	     *
	     * @param md    The instance of Remarkable.
	     */
	    MarkdownPipe.prototype.parseRichImages = function (md) {
	        var _this = this;
	        md.inline.ruler.before('links', 'image', function (state) {
	            return _this.parseMedia(state, '!', 'image', function (state, pos) {
	                // Setup local environment, including acceptable formatting keywords; and an acceptable final keyword.
	                var acceptableFormattingKeywords = ['left', 'right', 'wide'];
	                var finalWord = null;
	                var localPos = pos;
	                // For each acceptable keyword (left, right, wide)...
	                keywordsLoop: for (var _i = 0, acceptableFormattingKeywords_1 = acceptableFormattingKeywords; _i < acceptableFormattingKeywords_1.length; _i++) {
	                    var formattingKeyword = acceptableFormattingKeywords_1[_i];
	                    var formattingKeywordPos = 0;
	                    localPos = pos;
	                    // While the position in the keyword is less than the keyword length, grab the market from the localPosit
	                    keywordLoop: while (formattingKeywordPos < formattingKeyword.length) {
	                        var marker = state.src.charCodeAt(localPos);
	                        var keywordChar = formattingKeyword.charCodeAt(formattingKeywordPos);
	                        if (marker === keywordChar) {
	                            localPos++;
	                            formattingKeywordPos++;
	                            if (formattingKeywordPos === formattingKeyword.length) {
	                                finalWord = formattingKeyword;
	                                break keywordsLoop;
	                            }
	                        }
	                        else {
	                            break keywordLoop;
	                        }
	                    }
	                }
	                if (finalWord != null) {
	                    return { key: 'formatting', value: finalWord, pos: localPos };
	                }
	                return false;
	            });
	        });
	        md.renderer.rules.image = function (tokens, idx, options) {
	            var link = tokens[idx].link;
	            var caption = tokens[idx].caption;
	            var formatting = tokens[idx].formatting;
	            return '<img class="' + formatting + '" src="' + link + '" />' +
	                '<p>' + caption + '</p>';
	        };
	    };
	    /**
	     * A function that provides an inline YouTube video player that matches a syntax of:
	     * @[caption](video-link), rendering it into an iframe of a YouTube video embed.
	     *
	     * @param md    The instance of Remarkable.
	     */
	    MarkdownPipe.prototype.parseVideos = function (md) {
	        var _this = this;
	        md.inline.ruler.push('video', function (state) {
	            return _this.parseMedia(state, '@', 'video');
	        });
	        // Render our video in an iframe.
	        md.renderer.rules.video = function (tokens, idx, options) {
	            var link = tokens[idx].link;
	            var caption = tokens[idx].caption;
	            return '<iframe width="1280" height="720" src="' + link
	                + '?rel=0" frameborder="0" allowfullscreen></iframe><p>' + caption + '</p>';
	        };
	    };
	    /**
	     * A function that provides a block level Tweet display that matches a syntax of:
	     * #[caption](tweet-link), rendering it into a tweet.
	     *
	     * @param md    The instance of Remarkable.
	     */
	    MarkdownPipe.prototype.parseTweets = function (md) {
	        var _this = this;
	        md.inline.ruler.before('text', 'tweet', function (state) {
	            return _this.parseMedia(state, '#', 'tweet');
	        });
	        // Render our tweet. This is not an easy task to accomplish, as the markdown pipe is called on
	        // [innerHTML], which lacks an onload event.
	        md.renderer.rules.tweet = function (tokens, idx, options) {
	            var link = tokens[idx].link;
	            var caption = tokens[idx].caption;
	            return '<blockquote class="twitter-tweet" data-lang="en">' +
	                '<a href="' + link + '"></a>' +
	                '</blockquote><p>' + caption + '</p>';
	        };
	    };
	    /**
	     * @internal
	     *
	     * @param state
	     * @param startingMarker
	     * @param tokenName
	     * @param postUrlFn
	     * @returns {boolean}
	     */
	    MarkdownPipe.prototype.parseMedia = function (state, startingMarker, tokenName, postUrlFn) {
	        if (postUrlFn === void 0) { postUrlFn = null; }
	        // Store local copy of position so we don't overwrite it if we need to revert.
	        var pos = state.pos;
	        var marker = state.src.charCodeAt(pos++);
	        // Expect a series of tokens that matches the substring "[](" (prefixed by a
	        // starting marker, `!` for images, `@` for videos, `#` for tweets).
	        // This defines the beginning of our pattern.
	        if (marker !== startingMarker.charCodeAt()) {
	            return false;
	        }
	        marker = state.src.charCodeAt(pos++);
	        if (marker !== 0x5B /* [ */) {
	            return false;
	        }
	        // Interpret a caption between the brackets.
	        var captionStart = pos;
	        while (pos < state.posMax) {
	            marker = state.src.charCodeAt(pos++);
	            // We have reached the end of the caption
	            if (marker === 0x5D /* ] */) {
	                // TODO: Allow for escaped brackets to appear in captions
	                break;
	            }
	        }
	        var captionEnd = pos - 1;
	        marker = state.src.charCodeAt(pos++);
	        // Being pattern matching the contents of the URL
	        if (marker !== 0x28 /* ( */) {
	            return false;
	        }
	        // Begin URL. While the current position is less than the length of the string,
	        // increment until we find a closing tag ")". Everything in between is the URL.
	        var urlStart = pos;
	        while (pos < state.posMax) {
	            marker = state.src.charCodeAt(pos++);
	            if (postUrlFn != null) {
	                if (marker === 0x20 /* Space */) {
	                    break;
	                }
	            }
	            else {
	                if (marker === 0x29 /* ) */) {
	                    break;
	                }
	            }
	        }
	        var urlEnd = pos - 1;
	        // Generate our token to be added to the markdown tree
	        var token = {
	            type: tokenName,
	            level: state.level,
	            link: state.src.slice(urlStart, urlEnd),
	            caption: state.src.slice(captionStart, captionEnd),
	            content: marker
	        };
	        // Ability to specify additional content, and append to our token before pushing our token and position
	        // back onto the state
	        if (postUrlFn != null) {
	            var result = postUrlFn(state, pos);
	            if (result === false) {
	                return false;
	            }
	            token[result.key] = result.value;
	            pos = result.pos;
	            marker = state.src.charCodeAt(pos++);
	            if (marker !== 0x29 /* ) */) {
	                return false;
	            }
	        }
	        // Update the state position as the token successfully completed, push the token
	        // onto the tokens array, and return true.
	        state.pos = pos;
	        state.push(token);
	        return true;
	    };
	    MarkdownPipe.prototype.parseCaption = function () { };
	    MarkdownPipe = __decorate([
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

/***/ 644:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var router_1 = __webpack_require__(398);
	var services_1 = __webpack_require__(462);
	var pipes_1 = __webpack_require__(581);
	var directives_1 = __webpack_require__(645);
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

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(646));
	__export(__webpack_require__(647));
	__export(__webpack_require__(648));
	__export(__webpack_require__(649));
	__export(__webpack_require__(650));
	__export(__webpack_require__(651));


/***/ },

/***/ 646:
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
	var core_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(398);
	var common_1 = __webpack_require__(205);
	var classes_1 = __webpack_require__(465);
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

/***/ 647:
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
	var core_1 = __webpack_require__(11);
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

/***/ 648:
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
	var core_1 = __webpack_require__(11);
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

/***/ 649:
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
	var core_1 = __webpack_require__(11);
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

/***/ 650:
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
	var core_1 = __webpack_require__(11);
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

/***/ 651:
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
	var core_1 = __webpack_require__(11);
	var HeroDirective = (function () {
	    function HeroDirective(el) {
	        this.el = el;
	    }
	    HeroDirective.prototype.ngOnInit = function () {
	        this.el.nativeElement.style.backgroundImage = "url(" + this.data + ")";
	    };
	    __decorate([
	        core_1.Input('image'), 
	        __metadata('design:type', Object)
	    ], HeroDirective.prototype, "data", void 0);
	    HeroDirective = __decorate([
	        core_1.Directive({
	            selector: 'hero[image]'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], HeroDirective);
	    return HeroDirective;
	    var _a;
	}());
	exports.HeroDirective = HeroDirective;


/***/ },

/***/ 652:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var router_1 = __webpack_require__(398);
	var forms_1 = __webpack_require__(359);
	var services_1 = __webpack_require__(462);
	var classes_1 = __webpack_require__(465);
	var directives_1 = __webpack_require__(645);
	var enums_1 = __webpack_require__(653);
	var pipes_1 = __webpack_require__(581);
	var Subject_1 = __webpack_require__(69);
	var DraftComponent = (function () {
	    /**
	     * Constructor to instantiate a DraftComponent.
	     *
	     * @param draftService
	     * @param articleService
	     * @param titleService
	     * @param route
	     * @param router
	     */
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
	    /**
	     *
	     */
	    DraftComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
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
	    DraftComponent.prototype.addTag = function (event) {
	        if (event.key === "Enter") {
	            var tag = classes_1.Tag.create();
	            tag.value = this.transientTagValue;
	        }
	        // push a tag onto the draft
	        // TaggableService.addTagToDraft
	        // replace tag
	    };
	    DraftComponent.prototype.deleteTag = function (value) {
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
	     *  When called, with autosave the article, and toggle the state of the `isSaving` property.
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
	        var newDraft = classes_1.Draft.create(this.draft);
	        newDraft.body = body;
	        this.draft = newDraft;
	    };
	    /**
	     * Called on ngModelChange of the draft title.
	     *
	     * @param title
	     */
	    DraftComponent.prototype.autosaveDraftTitle = function (title) {
	        var newDraft = classes_1.Draft.create(this.draft);
	        newDraft.title = title;
	        this.draft = newDraft;
	    };
	    DraftComponent = __decorate([
	        core_1.Component({
	            selector: 'draft',
	            templateUrl: '/angular/views/draft.template.html',
	            directives: [directives_1.ContentEditableDirective, directives_1.DraggableDirective, directives_1.DroppableDirective, directives_1.HeroDirective,
	                router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
	            providers: [services_1.DraftService, services_1.ArticleService, services_1.TaggableService],
	            pipes: [pipes_1.MarkdownPipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.DraftService !== 'undefined' && services_1.DraftService) === 'function' && _a) || Object, (typeof (_b = typeof services_1.ArticleService !== 'undefined' && services_1.ArticleService) === 'function' && _b) || Object, (typeof (_c = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object, (typeof (_e = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _e) || Object])
	    ], DraftComponent);
	    return DraftComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.DraftComponent = DraftComponent;


/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(654));
	__export(__webpack_require__(655));


/***/ },

/***/ 654:
/***/ function(module, exports) {

	"use strict";
	(function (DraftViewState) {
	    DraftViewState[DraftViewState["Edit"] = 1] = "Edit";
	    DraftViewState[DraftViewState["Preview"] = 2] = "Preview";
	})(exports.DraftViewState || (exports.DraftViewState = {}));
	var DraftViewState = exports.DraftViewState;


/***/ },

/***/ 655:
/***/ function(module, exports) {

	"use strict";
	(function (DraftStatus) {
	    DraftStatus[DraftStatus["Draft"] = 1] = "Draft";
	    DraftStatus[DraftStatus["AwaitingReview"] = 2] = "AwaitingReview";
	    DraftStatus[DraftStatus["Reviewed"] = 3] = "Reviewed";
	})(exports.DraftStatus || (exports.DraftStatus = {}));
	var DraftStatus = exports.DraftStatus;


/***/ },

/***/ 656:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var router_1 = __webpack_require__(398);
	var classes_1 = __webpack_require__(465);
	var services_1 = __webpack_require__(462);
	var directives_1 = __webpack_require__(645);
	var Observable_1 = __webpack_require__(70);
	__webpack_require__(657);
	var DraftsComponent = (function () {
	    function DraftsComponent(draftService, articleService, route, router, titleService) {
	        this.draftService = draftService;
	        this.articleService = articleService;
	        this.route = route;
	        this.router = router;
	        this.titleService = titleService;
	        this.newDraftModel = classes_1.Draft.create();
	        this.isCreatingDraft = false;
	        this.drafts = [];
	        this.articles = [];
	        this.titleService.setTitle("One Rocket Road | Drafts");
	    }
	    /**
	     * On DraftsComponent angular initialization, fetch recent articles and all drafts
	     * from the backing store and assign them to their respective component properties.
	     */
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
	     * @param draft The draft to delete.
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

/***/ 658:
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
	var core_1 = __webpack_require__(11);
	var Dropzone = __webpack_require__(659);
	var Observable_1 = __webpack_require__(70);
	__webpack_require__(660);
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
	                "X-XSRF-TOKEN": this.getXSRFToken(),
	                "Authorization": this.getAuthToken()
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
	    DropzoneComponent.prototype.getAuthToken = function () {
	        var authToken = localStorage.getItem('authtoken');
	        return "bearer " + authToken;
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

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(70);
	var fromEvent_1 = __webpack_require__(661);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(662);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(70);
	var tryCatch_1 = __webpack_require__(80);
	var errorObject_1 = __webpack_require__(81);
	var Subscription_1 = __webpack_require__(77);
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

/***/ 663:
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
	var core_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(398);
	var platform_browser_1 = __webpack_require__(203);
	var services_1 = __webpack_require__(462);
	var directives_1 = __webpack_require__(645);
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

/***/ 664:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var classes_1 = __webpack_require__(465);
	var components_1 = __webpack_require__(459);
	var services_1 = __webpack_require__(462);
	var directives_1 = __webpack_require__(645);
	var ImagesComponent = (function () {
	    function ImagesComponent(imageService, titleService) {
	        this.imageService = imageService;
	        this.titleService = titleService;
	        this.imageToUpload = classes_1.Image.create();
	        this.images = [];
	        this.isSubmitting = false;
	        this.titleService.setTitle("One Rocket Road | Images");
	    }
	    ImagesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.imageService.getImages().subscribe(function (images) {
	            _this.images = images;
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
	            _this.imageToUpload = classes_1.Image.create();
	            _this.isSubmitting = false;
	            // push the newly created image onto the images array.
	            _this.images.push(classes_1.Image.create(image));
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

/***/ 665:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var services_1 = __webpack_require__(462);
	var router_1 = __webpack_require__(398);
	var LoginComponent = (function () {
	    function LoginComponent(authenticationService, titleService, router) {
	        this.authenticationService = authenticationService;
	        this.titleService = titleService;
	        this.router = router;
	        this.isLoggingIn = false;
	        this.titleService.setTitle("One Rocket Road | Login");
	    }
	    /**
	     * Attempt to log a user in via their email and password. If successful, navigate them away
	     * to the home page. If unsuccessful, let them reattempt to login.
	     *
	     * @param email
	     * @param password
	     */
	    LoginComponent.prototype.login = function (email, password) {
	        var _this = this;
	        this.isLoggingIn = true;
	        this.authenticationService.login(email, password)
	            .subscribe(function (outcome) {
	            _this.router.navigate(['']);
	        }, function (error) {
	            _this.isLoggingIn = false;
	        });
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            templateUrl: '/angular/views/login.template.html'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.AuthenticationService !== 'undefined' && services_1.AuthenticationService) === 'function' && _a) || Object, (typeof (_b = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a, _b, _c;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },

/***/ 666:
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
	var core_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(398);
	var services_1 = __webpack_require__(462);
	var OneRocketRoadComponent = (function () {
	    function OneRocketRoadComponent(authenticationService) {
	        this.authenticationService = authenticationService;
	        this.isArticle = false;
	    }
	    OneRocketRoadComponent.prototype.onActivate = function (event) {
	        this.isArticle = event.route && (event.route.component.name == "DraftComponent" || event.route.component.name == "ArticleComponent");
	    };
	    OneRocketRoadComponent = __decorate([
	        core_1.Component({
	            selector: 'body',
	            templateUrl: '/angular/views/onerocketroad.template.html',
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.AuthenticationService !== 'undefined' && services_1.AuthenticationService) === 'function' && _a) || Object])
	    ], OneRocketRoadComponent);
	    return OneRocketRoadComponent;
	    var _a;
	}());
	exports.OneRocketRoadComponent = OneRocketRoadComponent;


/***/ },

/***/ 667:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var services_1 = __webpack_require__(462);
	var router_1 = __webpack_require__(398);
	var SignUpComponent = (function () {
	    function SignUpComponent(titleService, authenticationService, router) {
	        this.titleService = titleService;
	        this.authenticationService = authenticationService;
	        this.router = router;
	        this.isSigningUp = false;
	        this.titleService.setTitle("One Rocket Road | Sign Up");
	    }
	    SignUpComponent.prototype.signUp = function (email, fullname, password) {
	        var _this = this;
	        this.isSigningUp = true;
	        this.authenticationService.signUp(email, fullname, password)
	            .subscribe(function (outcome) {
	            _this.router.navigate(['auth', 'login']);
	        }, function (error) {
	            _this.isSigningUp = false;
	        });
	    };
	    SignUpComponent = __decorate([
	        core_1.Component({
	            selector: 'signup',
	            templateUrl: '/angular/views/signup.template.html'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object, (typeof (_b = typeof services_1.AuthenticationService !== 'undefined' && services_1.AuthenticationService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], SignUpComponent);
	    return SignUpComponent;
	    var _a, _b, _c;
	}());
	exports.SignUpComponent = SignUpComponent;


/***/ },

/***/ 668:
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
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	var StyleGuideComponent = (function () {
	    function StyleGuideComponent(titleService) {
	        this.titleService = titleService;
	        this.titleService.setTitle("One Rocket Road | Style Guide");
	    }
	    StyleGuideComponent.prototype.ngOnInit = function () {
	    };
	    StyleGuideComponent = __decorate([
	        core_1.Component({
	            selector: 'style-guide',
	            templateUrl: '/angular/views/styleguide.template.html',
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object])
	    ], StyleGuideComponent);
	    return StyleGuideComponent;
	    var _a;
	}());
	exports.StyleGuideComponent = StyleGuideComponent;


/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(670));


/***/ },

/***/ 670:
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
	var core_1 = __webpack_require__(11);
	var services_1 = __webpack_require__(462);
	var AuthenticatedGuard = (function () {
	    function AuthenticatedGuard(authenticationService) {
	        this.authenticationService = authenticationService;
	    }
	    AuthenticatedGuard.prototype.canActivate = function () {
	        return this.authenticationService.isLoggedIn;
	    };
	    AuthenticatedGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.AuthenticationService !== 'undefined' && services_1.AuthenticationService) === 'function' && _a) || Object])
	    ], AuthenticatedGuard);
	    return AuthenticatedGuard;
	    var _a;
	}());
	exports.AuthenticatedGuard = AuthenticatedGuard;


/***/ }

});