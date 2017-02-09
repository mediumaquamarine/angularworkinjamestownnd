"use strict";!function(){angular.module("work",["auth0.lock","angular-jwt","ui.router","ngSanitize"])}();
"use strict";!function(){angular.module("work").config(["$stateProvider","lockProvider","$urlRouterProvider","jwtOptionsProvider",function(e,t,r,i){r.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main"}).state("reviews",{url:"/reviews",templateUrl:"../../templates/reviews/reviews.html",controller:"ReviewController as review"}).state("writereview",{url:"/writereview",templateUrl:"../../templates/writereview/writereview.html",controller:"WriteReviewController as write"}).state("terms",{url:"/terms",templateUrl:"../../templates/terms.html"}),t.init({clientID:"Q7K0Q6Ip5I4zprAqHBCtfA5EMUbkxJce",domain:"easyismath.auth0.com",options:{theme:{logo:"../../content/easyismathsmall.png"},languageDictionary:{title:"Ready for adventure?"}}}),i.config({tokenGetter:function(){return localStorage.getItem("id_token")}})}])}();
"use strict";!function(){angular.module("work").controller("MainController",["$rootScope","authService","userdata","$state","$window","companydata","mainfac",function(e,t,i,r,o,a,n){e.isAuthenticated||o.localStorage.clear();var g=this;g.latestReviews,g.profile,g.cavendish=n.goWrite,g.utc=n.goWrite,g.newmansigns=n.goWrite,g.realtruck=n.goWrite,g.gavillon=n.goWrite,g.cargill=n.goWrite,g.walmart=n.goWrite,g.menards=n.goWrite,g.newmansigns=n.goWrite,g.hugos=n.goWrite,g.cashwise=n.goWrite,g.napa=n.goWrite,g.loaded=!1,t.getProfileDeferred().then(function(e){g.profile=e}).then(function(){i.getData(g.profile.user_id)}),a.getLatestReviews()}])}();
"use strict";!function(){angular.module("work").factory("mainfac",["$state","$window",function(o,n){function t(t){n.localStorage.company=t,o.go("reviews")}return{goWrite:t}}])}();
"use strict";!function(){angular.module("work").controller("NavbarController",["$rootScope","authService","$state","$window",function(o,r,t,e){var a=this;a.authService=r}])}();
"use strict";!function(){angular.module("work").controller("ReviewController",["$rootScope","authService","userdata","$state","$window","companydata","$http","$sce",function(e,t,r,o,a,i,s,n){var c=this;c.company=a.localStorage.company,c.reviews=c.reviews||"Be the first to review",c.authors,c.rating,c.trustAsHtml=n.trustAsHtml,c.writeAReview=i.signInOrWrite,c.loaded=!1,s.post("api/reviews",{companyName:c.company}).then(function(e){c.reviews=e.data.reviews.reverse(),c.loaded=!0})}])}();
"use strict";!function(){angular.module("work").controller("WriteReviewController",["$rootScope","authService","userdata","$state","$window","companydata","writefac",function(t,e,o,a,i,r,n){t.isAuthenticated||a.go("home");var c=this;c.company=i.localStorage.company,c.review,c.rating,c.submit=n.submitReview}])}();
"use strict";!function(){angular.module("work").factory("writefac",["$rootScope","authService","userdata","$state","$window","companydata","$http","$timeout",function(e,t,a,r,i,o,n,s){function c(){var e=JSON.parse(i.localStorage.userProfile).userid,t=i.localStorage.company,a=JSON.parse(i.localStorage.profile).name;n.post("api/writereview",{userid:e,companyName:t,review:this.review,author:a,rating:this.rating}).then(function(e){"success"===e.data&&r.go("reviews")}),this.review="",this.rating=""}return{submitReview:c}}])}();
"use strict";!function(){angular.module("work").run(["$rootScope","authService","lock","authManager",function(e,t,r,n){e.authService=t,t.registerAuthenticationListener(),n.checkAuthOnRefresh(),r.interceptHash()}])}();
"use strict";!function(){function e(e,t,o,r){function n(){return c.promise}function i(){t.show()}function l(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),localStorage.removeItem("userProfile"),r.userStuff="",o.unauthenticate()}function a(){t.on("authenticated",function(e){t.getProfile(e.idToken,function(e,t){return e?console.log(e):(localStorage.setItem("profile",JSON.stringify(t)),void c.resolve(t))}),localStorage.setItem("id_token",e.idToken),o.authenticate()})}var u=JSON.parse(localStorage.getItem("profile"))||null,c=e.defer();return u&&c.resolve(u),{login:i,logout:l,registerAuthenticationListener:a,getProfileDeferred:n}}angular.module("work").service("authService",e),e.$inject=["$q","lock","authManager","$rootScope"]}();
"use strict";!function(){angular.module("work").factory("companydata",["$http","$rootScope","$window","authService","$state",function(t,e,i,n,a){var r=function(){t.get("api/lastreviews",{}).then(function(t){var i=t.data[0];for(var n in i)i[n]=i[n].slice(0,20)+"...";e.latestReviews=i})},o=function(){e.isAuthenticated?a.go("writereview"):n.login()};return{getLatestReviews:r,signInOrWrite:o}}])}();
"use strict";!function(){angular.module("work").factory("userdata",["$http","$rootScope","$window",function(t,a,e){var o=function(o){t.post("api/data",{id:o}).then(function(t){a.userStuff=t.data,a.isAuthenticated&&e.localStorage.setItem("userProfile",JSON.stringify(t.data))})};return{getData:o}}])}();