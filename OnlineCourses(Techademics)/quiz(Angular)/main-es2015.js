(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-front></app-front> -->\n\n <router-outlet></router-outlet>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/array/array.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/array/array.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <!-- <link rel=\"stylesheet\" href=\"style.css\"> -->\n</head>\n<body>\n     <div id=\"main_div\">\n        <div id=\"divimg\">\n           <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n       </div> \n       <div class=\"child_div\" id=\"name\">\n           \n           Techademics\n       </div>\n   \n       <div class=\"child_div\" id=\"home\" routerLink=\"/home\">\n           <img src=\"../../assets/images/homepage (2).png\" id=\"homeimg\">\n       </div> \n    </div>  \n    <div class=\"hello\">\n<div class=\"quiz-container\">\n    <div class=\"question-number\">\n        <h3>Question <span class=\"question-num-value\"> </span> of \n            <span class=\"total-question\"></span> </h3>\n    </div>\n    <div class=\"question\">\n\n    </div>\n     <div class=\"options\">\n         <button id=\"0\" class=\"option1\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"1\" class=\"option2\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"2\" class=\"option3\" (click)='check($event)' [disabled]=\"value\" ></button><br>\n         <button id=\"3\" class=\"option4\" (click)='check($event)' [disabled]=\"value\"  ></button>\n     </div>\n     <div class=\"button\">\n         <button type=\"button\" class=\"btn\" (click)='next()'>Next</button>\n         <!-- <button type=\"button\" class=\"btn\" (click)='myfun()'>NEXT</button> -->\n\n     </div>\n     <div class=\"answer-tracker\">\n     \n    </div>\n</div>\n</div>\n\n<div class=\"quiz-over\">\n    <div class=\"box\">\n <h1>Good Try!<br>\n        You got <span class=\"correct-answers\"> </span> out of <span class=\"total-question2\"> </span> \n        answers correct!<br>\n        That's <span class=\"percentage\"> </span>\n            </h1>\n    <button type=\"button\" (click)=\"tryAgain()\">Try Again</button>\n</div>\n</div>\n\n    \n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <!-- <link rel=\"stylesheet\" href=\"style.css\"> -->\n</head>\n<body>\n    <div id=\"main_div\">\n        <div id=\"divimg\">\n           <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n       </div> \n       <div class=\"child_div\" id=\"name\">\n           \n           Techademics\n       </div>\n   \n       <div class=\"child_div\" id=\"home\" routerLink=\"/home\">\n           <img src=\"../../assets/images/homepage (2).png\" id=\"homeimg\">\n       </div> \n    </div>\n    <div class=\"hello\">\n<div class=\"quiz-container\">\n    <div class=\"question-number\">\n        <h3>Question <span class=\"question-num-value\"> </span> of \n            <span class=\"total-question\"></span> </h3>\n    </div>\n    <div class=\"question\">\n\n    </div>\n     <div class=\"options\">\n         <button id=\"0\" class=\"option1\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"1\" class=\"option2\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"2\" class=\"option3\" (click)='check($event)' [disabled]=\"value\" ></button><br>\n         <button id=\"3\" class=\"option4\" (click)='check($event)' [disabled]=\"value\"  ></button>\n     </div>\n     <div class=\"button\">\n         <button type=\"button\" class=\"btn\" (click)='next()'>Next</button>\n         <!-- <button type=\"button\" class=\"btn\" (click)='myfun()'>NEXT</button> -->\n\n     </div>\n     <div class=\"answer-tracker\">\n     \n    </div>\n</div>\n</div>\n\n<div class=\"quiz-over\">\n    <div class=\"box\">\n <h1>Good Try!<br>\n        You got <span class=\"correct-answers\"> </span> out of <span class=\"total-question2\"> </span> \n        answers correct!<br>\n        That's <span class=\"percentage\"> </span>\n            </h1>\n    <button type=\"button\" (click)=\"tryAgain()\">Try Again</button>\n</div>\n</div>\n\n    \n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/front/front.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/front/front.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n    <head>\n\n    </head>\n\n    <body>\n        \n        <section class=\"first\">\n            <!-- <p class=\"para\"><span id=\"spone\">Techa</span><span id=\"sptwo\"> demics</span></p> -->\n            <p class=\"pfirst\">For every student,<br><span id=\"one\">Real results.</span></p>\n            <button class=\"bfirst1\" ><a routerLink=\"/login\">Login</a></button>\n            <button class=\"bfirst2\"><a routerLink=\"/register\">Join for Free</a></button>\n        </section>\n\n        <section class=\"second\">\n            <p class=\"psecond\">Why Techademics?</p>\n            <div class=\"divsecond1\">\n                <img src=\"../../assets/images/learning.png\" class=\"imgsecond\">\n                <h1>Personalized Learning</h1>\n                <p id=\"pdiv\">Students practice at their own pace, first<br> filling in gaps in their understanding <br>and then accelerating their learning.</p>\n            </div>\n            <div class=\"divsecond2\">\n                <img src=\"../../assets/images/trust.png\" class=\"imgsecond\">\n                <h1>Trusted Content</h1>\n                <p id=\"pdiv\">Created by experts, Techademics’s library of <br>trusted, standards-aligned practice and lessons <br>covers all the main topics of data structure.<br></p>\n            </div>\n            <div class=\"divsecond3\">\n                <img src=\"../../assets/images/speed.png\" class=\"imgsecond\">\n                <h1>Go at your own pace</h1>\n                <p id=\"pdiv\">Enjoy lifetime access to the <br>content on Techademics’s website.<br> It’s all free for learners</p>\n            </div>\n        </section>\n\n        <section class=\"third\">\n            <p class=\"psecond\">Learners Review</p>\n            <div class=\"divthird1\">\n                <p id=\"#prev\">Techademics is a life saver. I don't have the money for a college education.My goal is to\n                    become a software developer, and thanks to Techademics</p><br>\n                    <h3>Avnish</h3><br>\n                    <h6>Delhi</h6>\n                    <img src=\"../../assets/images/a1.jpg\" class=\"imgthird\">\n                </div>\n                \n                <div class=\"divthird2\">\n                    <p id=\"#prev\">Techademics is a very good website to learn data structures.It's good for beginner. I love this website for learning in depth in java technology.</p><br>\n                        <h3>Samisha</h3><br>\n                        <h6>Mumbai</h6>\n                        <img src=\"../../assets/images/s.jpg\" class=\"imgthird\">\n                    </div>\n                    \n\n                    <div class=\"divthird3\">\n                        <p id=\"#prev\">It's an amazing website for those who are curious to learn programming and it's concept deeply. It not only teaches, but provides variety of questions.</p><br>\n                            <h3>Rudra</h3><br>\n                            <h6>Kolkata</h6>\n                            <img src=\"../../assets/images/r.jpg\" class=\"imgthird\">\n                        </div>\n                        \n        </section>\n        \n        <section class=\"fourth\">\n            <p id=pfour><span id=\"four\">You</span> can  learn  <br>anything.</p>\n            <img src=\"../../assets/images/learn.png\" class=\"imgfour1\">\n            <img src=\"../../assets/images/gip1.gif\" class=\"imgfour2\">\n            <button class=\"bfour\"><a routerLink=\"/register\">Learners Start Here</a></button>\n        </section>\n\n        <section class=\"five\">\n         <div class=\"divfive\">\n             <ul id=\"menu\">\n                 <li><a href=\"https://www.facebook.com/profile.php?id=100008559606252\"><img src=\"../../assets/images/facebook.png\" class=\"imgfive\"></a></li>\n \n                 <li><a href=\"https://www.instagram.com/deepanshu__goyal__/?hl=en\"><img src=\"../../assets/images/instagram (1).png\" class=\"imgfive\"></a></li>\n                 <li><a href=\"https://github.com/devanshigarg08\"><img src=\"../../assets/images/github-image.png\" class=\"imgfive\"></a></li>\n                 <li><a href=\"https://www.linkedin.com/in/diksha-kalra-1b6a07197/\"><img src=\"../../assets/images/linkedin.png\" class=\"imgfive\"></a></li>\n             </ul>\n         </div>\n        </section>\n        <section class=\"six\">\n            <div class=\"divsix\"> \n        <img src=\"../../assets/images/copyright.png\" class=\"imgsix\">\n       <p id=\"copy\"> 2020 Techademics</p>\n    </div>\n        </section>\n       \n    </body>\n</html>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"main_div\">\n     <div id=\"divimg\">\n        <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n    </div> \n    <div class=\"child_div\" id=\"name\">\n        \n        Techademics\n    </div>\n\n    <div class=\"child_div\" id=\"home\" routerLink=\"/home\">\n        <img src=\"../../assets/images/homepage (2).png\" id=\"homeimg\">\n    </div>\n\n    <!-- <div class=\"child_div\" id=\"user\">\n        <div class=\"container\">\n        UserName\n\n        <div class=\"logout\" routerLink=\"#\">\n            Logout\n        </div>\n    </div>\n    </div> -->\n    <!-- <div class=\"container\"> -->\n     <!-- <div class=\"child_div\" id=\"logout\" routerLink=\"/front\">\n        <img src=\"../../assets/images/logout.png\" id=\"logimg\">\n    </div> \n</div> -->\n<!-- <div class=\"child_div\" id=\"logout\">\n    hello\n</div>  -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div *ngFor=\"let topic of li\" routerLink=\"/sidenav\"  (click)=\"sendTopic(topic)\"  class=\"main\">\n    <h1>{{topic.topic}}</h1>\n    <ul *ngFor=\"let content of topic.topics\">\n        <li><h3>{{content.topic}}</h3></li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/linkedlist/linkedlist.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/linkedlist/linkedlist.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <!-- <link rel=\"stylesheet\" href=\"style.css\"> -->\n</head>\n<body>\n    <div id=\"main_div\">\n        <div id=\"divimg\">\n           <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n       </div> \n       <div class=\"child_div\" id=\"name\">\n           \n           Techademics\n       </div>\n   \n       <div class=\"child_div\" id=\"home\" routerLink=\"/home\">\n           <img src=\"../../assets/images/homepage (2).png\" id=\"homeimg\">\n       </div> \n    </div>\n    <div class=\"hello\">\n<div class=\"quiz-container\">\n    <div class=\"question-number\">\n        <h3>Question <span class=\"question-num-value\"> </span> of \n            <span class=\"total-question\"></span> </h3>\n    </div>\n    <div class=\"question\">\n\n    </div>\n     <div class=\"options\">\n         <button id=\"0\" class=\"option1\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"1\" class=\"option2\" (click)='check($event)' [disabled]=\"value\"  ></button><br>\n         <button id=\"2\" class=\"option3\" (click)='check($event)' [disabled]=\"value\" ></button><br>\n         <button id=\"3\" class=\"option4\" (click)='check($event)' [disabled]=\"value\"  ></button>\n     </div>\n     <div class=\"button\">\n         <button type=\"button\" class=\"btn\" (click)='next()'>Next</button>\n         <!-- <button type=\"button\" class=\"btn\" (click)='myfun()'>NEXT</button> -->\n\n     </div>\n     <div class=\"answer-tracker\">\n     \n    </div>\n</div>\n</div>\n\n<div class=\"quiz-over\">\n    <div class=\"box\">\n <h1>Good Try!<br>\n        You got <span class=\"correct-answers\"> </span> out of <span class=\"total-question2\"> </span> \n        answers correct!<br>\n        That's <span class=\"percentage\"> </span>\n            </h1>\n    <button type=\"button\" (click)=\"tryAgain()\">Try Again</button>\n</div>\n</div>\n\n    \n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body>\n    <div class=\"form\">\n        <!-- <mat-toolbar class=\"toolbarwidth\">\n            <span>Login</span>\n        </mat-toolbar> -->\n        <div id=\"main_div\">\n            <div id=\"divimg\">\n               <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n           </div> \n           <div class=\"child_div\" id=\"name\">\n               \n               Techademics\n           </div>\n       \n       </div>\n       \n       <div class=\"imgdiv\">\n           <img src=\"../../assets/images/login1.webp\" class=\"logimg\">\n       </div>\n        <mat-card class=\"card-container\" >\n            <mat-card-content>\n                <font size=\"5\"><b>Welcome Back :)</b></font>\n                <form class=\"my-form\" (ngSubmit)=\"LoginProcess(loginForm)\" #loginForm=\"ngForm\">\n                    <!-- EMAIL -->\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>E-mail</mat-label>\n                        <input type=\"email\" matInput placeholder=\"E-mail\" ngModel name=\"email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                        <mat-error *ngIf=\"email.invalid\">\n                            <mat-error *ngIf=\"email.errors.required\">Please enter E-mail</mat-error>\n                            <mat-error *ngIf=\"email.errors.pattern\">Please enter valid E-mail</mat-error>\n                        </mat-error>\n                    </mat-form-field><br>\n                    <!-- PASSWORD -->\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Password</mat-label>\n                        <input type=\"password\" matInput placeholder=\"Password\" minlength=\"8\" ngModel name=\"password\" #password=\"ngModel\" pattern=\"^(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput>\n                        <mat-error *ngIf=\"password.invalid\">\n                            <mat-error *ngIf=\"password.errors.required\">Please enter Password</mat-error>\n                            <mat-error *ngIf=\"password.errors.pattern\">Enter atleast  one UpperCase, one LowerCase, one Number/SpecialChar and min 8 Chars.\n                            </mat-error>\n                        </mat-error>\n                    </mat-form-field>\n                    <!-- BUTTON -->\n                    <mat-card-actions>\n                        <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!loginForm.valid\" (click) = \"onLogin(loginForm)\">Login</button>\n                        <a mat-raised-button routerLink=\"/register\">Register</a>\n                    </mat-card-actions>\n                     <!-- Login with GOOGLE -->\n                 <button mat-raised-button color=\"primary\" class=\"btn-social-icon btn-google google btnn \" (click)=\"signInWithGoogle()\">\n                    <i class=\"fa fa-google fa-fw\"></i> Login with Google\n                   </button>\n                     <br> \n                </form>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>register-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"form\">\n        <!-- <mat-toolbar class=\"toolbarwidth\">\n            <span>SignUp</span>\n        </mat-toolbar> -->\n        <div id=\"main_div\">\n            <div id=\"divimg\">\n               <img src=\"../../assets/images/gip3.gif\" id=\"divimg\">\n           </div> \n           <div class=\"child_div\" id=\"name\">\n               \n               Techademics\n           </div>\n       \n       </div>\n       \n       <div class=\"imgdiv\">\n           <img src=\"../../assets/images/register2.jpg\" class=\"logimg\">\n       </div>\n        <mat-card class=\"card-container\" >\n            <mat-card-content class=\"content\">\n                <font size=\"5\"><b>Register to join Techademics!</b></font>\n                <form class=\"my-form\" (ngSubmit)=\"onRegister(registerForm)\" #registerForm=\"ngForm\">\n                    <!-- FIRST NAME -->\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>First Name</mat-label>\n                        <input type=\"text\" matInput placeholders=\"First Name\" minlength=\"2\" name=\"firstName\" ngModel\n                            #firstName=\"ngModel\" required>\n                        <mat-error *ngIf=\"firstName.invalid\">\n                            <mat-error *ngIf=\"firstName.errors.required\">\n                                Please enter First Name\n                            </mat-error>\n                            <mat-error *ngIf=\"firstName.errors.minlength\">\n                                First Name should be of minimum length of {{firstName.errors.minlength.requiredLength}} .\n                            </mat-error>\n                        </mat-error>\n                    </mat-form-field><br>\n                    <!-- LAST NAME -->\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Last Name</mat-label>\n                        <input type=\"text\" matInput placeholders=\"Last Name\" minlength=\"2\" name=\"lastName\" ngModel\n                            #lastName=\"ngModel\" required>\n                        <mat-error *ngIf=\"lastName.invalid\">\n                            <mat-error *ngIf=\"lastName.errors.required\">\n                                Please enter Last Name\n                            </mat-error>\n                            <mat-error *ngIf=\"lastName.errors.minlength\">\n                                Last Name should be of minimum length of {{lastName.errors.minlength.requiredLength}} .\n                            </mat-error>\n                        </mat-error>\n                    </mat-form-field><br>\n                    <!-- EMAIL -->\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Email address</mat-label>\n                        <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" ngModel #email=\"ngModel\"\n                            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                        <mat-error *ngIf=\"email.invalid\">\n                            <mat-error *ngIf=\"email.errors.required\">\n                                Please enter the Email address\n                            </mat-error>\n                            <mat-error *ngIf=\"email.errors.pattern\">\n                                Please enter valid Email address\n                            </mat-error>\n                        </mat-error>\n                    </mat-form-field><br>\n                    <!-- PASSWORD -->\n                   <mat-form-field class=\"full-width\">\n                        <mat-label>Password</mat-label>\n                        <input type=\"password\" matInput placeholder=\"Password\" minlength=\"8\" ngModel name=\"password\" #password=\"ngModel\" pattern=\"^(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput>\n                        <mat-error *ngIf=\"password.invalid\">\n                            <mat-error *ngIf=\"password.errors.required\">Please enter Password</mat-error>\n                            <mat-error *ngIf=\"password.errors.pattern\">Enter atleast  one UpperCase, one LowerCase, one Number/SpecialChar and min 8 Chars.\n                            </mat-error>\n                        </mat-error>\n                    </mat-form-field><br><br><br>\n                    <button mat-raised-button \n                    type=\"submit\" color=\"primary\" [disabled] = \"!registerForm.valid\" (click) = \"registerProcess(registerForm)\">Sign Up</button> &nbsp;         \n                    <a mat-raised-button routerLink=\"/login\">Login</a>\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/content/content.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/content/content.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [innerHTML]=\"content\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"main\">\n<div id=\"left_div\">\n    <ul  *ngFor=\"let topic of topics.topics\"> \n        <li type=\"none\"  (click)=\"send_Content(topic.content)\">{{topic.topic}}</li>\n    </ul>\n    </div>\n    <div id=\"right_div\">\n    <app-content [content]=m_content></app-content>\n    </div>\n</div>\n    <div>\n        <button (click)=\"onClick()\" class=\"qbutton\">Take Quiz</button>\n    </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _front_front_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/front.component */ "./src/app/front/front.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _array_array_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/array.component */ "./src/app/array/array.component.ts");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collections/collections.component */ "./src/app/collections/collections.component.ts");
/* harmony import */ var _linkedlist_linkedlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./linkedlist/linkedlist.component */ "./src/app/linkedlist/linkedlist.component.ts");













const routes = [
    { path: 'front', component: _front_front_component__WEBPACK_IMPORTED_MODULE_3__["FrontComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'registerPage', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterPageComponent"] },
    { path: 'LoginPage', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: '', redirectTo: '/front', pathMatch: 'full' },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "sidenav", component: _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"] },
    { path: "Basics of JAVA", component: _array_array_component__WEBPACK_IMPORTED_MODULE_10__["ArrayComponent"] },
    { path: "Collections in Java", component: _collections_collections_component__WEBPACK_IMPORTED_MODULE_11__["CollectionsComponent"] },
    { path: "LinkedList", component: _linkedlist_linkedlist_component__WEBPACK_IMPORTED_MODULE_12__["LinkedlistComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'quiz';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _front_front_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front/front.component */ "./src/app/front/front.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_content_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidenav/content/content.component */ "./src/app/sidenav/content/content.component.ts");
/* harmony import */ var _array_array_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./array/array.component */ "./src/app/array/array.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./collections/collections.component */ "./src/app/collections/collections.component.ts");
/* harmony import */ var _linkedlist_linkedlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./linkedlist/linkedlist.component */ "./src/app/linkedlist/linkedlist.component.ts");























const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"]('235898655974-0foicf0nrkd3toui32n1v7co7rq29fr4.apps.googleusercontent.com')
    }
    // {
    //    id: FacebookLoginProvider.PROVIDER_ID,
    //    provider: new FacebookLoginProvider('864078104052651')
    // },
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _front_front_component__WEBPACK_IMPORTED_MODULE_5__["FrontComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
            _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__["SidenavComponent"],
            _sidenav_content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"],
            _array_array_component__WEBPACK_IMPORTED_MODULE_18__["ArrayComponent"],
            _collections_collections_component__WEBPACK_IMPORTED_MODULE_20__["CollectionsComponent"],
            _linkedlist_linkedlist_component__WEBPACK_IMPORTED_MODULE_21__["LinkedlistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]
            //MyMaterialModule,
            // RouterModule.forRoot([
            // ]),
        ],
        providers: [
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/array/array.component.css":
/*!*******************************************!*\
  !*** ./src/app/array/array.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body\r\n{\r\n    margin: 0;\r\n    /* background-color: #009688; */\r\n    font-family: sans-serif;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\n.hello{\r\n    background-color: #009688;\r\n    width: 100%;\r\n    height: 700px;\r\n    overflow: hidden;\r\n    -webkit-transform: translate(0px,-10px);\r\n            transform: translate(0px,-10px);\r\n}\r\n\r\n.quiz-container\r\n{\r\n    max-width: 700px;\r\n    max-height: 700px;\r\n    background-color: #eeebeb;\r\n    margin: 40px auto;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    -webkit-transform: translate(0px,-30px);\r\n            transform: translate(0px,-30px);\r\n}\r\n\r\n.quiz-container::after, .quiz-container::before{\r\n    content: '';\r\n    clear: both;\r\n    display:table;\r\n}\r\n\r\n.question-number,\r\n.question,\r\n.options,\r\n.button,\r\n.answer-tracker{\r\nfloat: left;\r\nwidth: 100%;\r\n}\r\n\r\n.question-number h3\r\n{\r\n    color: #009688;\r\n    border-bottom: 1px solid #ccc;\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.question{\r\n    font-size: 22px;\r\n    color: 000000;\r\n    padding: 20px 0;\r\n }\r\n\r\n.options div{\r\n    background-color: #cccccc;\r\n    font-size: 16px;\r\n    color: 000000;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    padding:15px; \r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.button .btn{\r\n    padding: 12px 50px;\r\n    border-radius: 20px;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    background-color: #009688;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: #ffffff;\r\n    border: none;\r\n    display: inline-block;\r\n    margin: 15px 0 20px;\r\n    -webkit-transform: translate(240px,0px);\r\n            transform: translate(240px,0px);\r\n}\r\n\r\n.button:hover{\r\n    color: white;\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n}\r\n\r\n.answer-tracker{\r\n    border-top: 1px solid #ccc;\r\n    padding-top: 20px ;\r\n}\r\n\r\n.quiz-over{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    z-index: 10;\r\n    display: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.quiz-over.show\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.quiz-over .box{\r\n    background-color: #009688;\r\n    padding: 30px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 700px;\r\n    flex-basis: 700px;\r\n    color: #ffffff;\r\n}\r\n\r\n.quiz-over .box h1{\r\n     font-size: 36px;\r\n     margin: 0 0 20px;\r\n}\r\n\r\n.quiz-over .box button\r\n{\r\n    padding: 15px 50px;\r\n    border-radius: 20px;\r\n    background-color: #FF9800;\r\n  \r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    margin: 15px 0 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.option1\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option2\r\n{background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option3\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option4\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n/* .child_div{\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: center;\r\n} */\r\n\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    width: 60px;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n\r\n#home{\r\n    -webkit-transform: translate(1390px,-150px);\r\n            transform: translate(1390px,-150px);\r\n    display: inline-block;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#home:hover{\r\n    background-color: white;\r\n    \r\n    \r\n   \r\n}\r\n\r\n#user{\r\n    /* right: 0px;\r\n    float: right; */\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n\r\n.logout{\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.container:hover .logout{\r\n    display: block;\r\n    width: 120px;\r\n    height: 30px;\r\n    background-color: white;\r\n    color: rgb(243, 146, 36);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n#homeimg\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-transform: translate(0px,-20px);\r\n            transform: translate(0px,-20px);\r\n}\r\n\r\n/* #logout\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJyYXkvYXJyYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUlBOzs7OztBQUtBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7O0FBQ0E7O0lBRUksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFDQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0tBQ0ssZUFBZTtLQUNmLGdCQUFnQjtBQUNyQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5Qjs7SUFFekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxtQ0FBbUM7SUFDbkMsV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7Q0FDQyxtQ0FBbUM7SUFDaEMsV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7O0lBRUksbUNBQW1DO0lBQ25DLFdBQVc7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUNBOztJQUVJLG1DQUFtQztJQUNuQyxXQUFXO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFDQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUM7SUFDRyx1QkFBdUI7Ozs7QUFJM0I7O0FBRUE7SUFDSTttQkFDZTtJQUNmLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpRUFBaUU7S0FDaEUsK0dBQXFFO0tBQXJFLHFFQUFxRTtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBOzs7SUFHSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtHQUNuQix3Q0FBZ0M7V0FBaEMsZ0NBQWdDO0FBQ25DOztBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFDQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvYXJyYXkvYXJyYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcclxue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmhlbGxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTEwcHgpO1xyXG59XHJcbi5xdWl6LWNvbnRhaW5lclxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlYmViO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtMzBweCk7XHJcbn1cclxuXHJcbi5xdWl6LWNvbnRhaW5lcjo6YWZ0ZXIsIC5xdWl6LWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbn1cclxuXHJcblxyXG5cclxuLnF1ZXN0aW9uLW51bWJlcixcclxuLnF1ZXN0aW9uLFxyXG4ub3B0aW9ucyxcclxuLmJ1dHRvbixcclxuLmFuc3dlci10cmFja2Vye1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDEwMCU7XHJcbn0gXHJcbi5xdWVzdGlvbi1udW1iZXIgaDNcclxue1xyXG4gICAgY29sb3I6ICMwMDk2ODg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogMDAwMDAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gfVxyXG5cclxuLm9wdGlvbnMgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzoxNXB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uYnV0dG9uIC5idG57XHJcbiAgICBwYWRkaW5nOiAxMnB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjQwcHgsMHB4KTtcclxufVxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcclxufVxyXG4uYW5zd2VyLXRyYWNrZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4IDtcclxufVxyXG5cclxuXHJcblxyXG4ucXVpei1vdmVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5xdWl6LW92ZXIuc2hvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5xdWl6LW92ZXIgLmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiA3MDBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucXVpei1vdmVyIC5ib3ggaDF7XHJcbiAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuLnF1aXotb3ZlciAuYm94IGJ1dHRvblxyXG57XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm9wdGlvbjFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTUyLCAyNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4ub3B0aW9uMlxyXG57YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTUyLCAyNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4ub3B0aW9uM1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNTIsIDI0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG59XHJcbi5vcHRpb240XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE1MiwgMjQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuLyogLmNoaWxkX2RpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbiNuYW1le1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwcHgsLTkwcHgpO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaG9tZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEzOTBweCwtMTUwcHgpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuICNob21lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIFxyXG4gICBcclxufSBcclxuXHJcbiN1c2Vye1xyXG4gICAgLyogcmlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbn1cclxuXHJcbiNtYWluX2RpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiKDI1MCwgMTU1LCAxNCkpOyAqL1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAsMC41KSwgcmdiKDI1MCwgMTU1LCAxNCwwLjUpKTsgXHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb250YWluZXI6aG92ZXIgLmxvZ291dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgMTQ2LCAzNik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0gXHJcbiNkaXZpbWdcclxue1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMThweCwtNXB4KTtcclxufVxyXG4jaG9tZWltZ1xyXG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtMjBweCk7XHJcbn1cclxuLyogI2xvZ291dFxyXG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/array/array.component.ts":
/*!******************************************!*\
  !*** ./src/app/array/array.component.ts ***!
  \******************************************/
/*! exports provided: ArrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayComponent", function() { return ArrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArrayComponent = class ArrayComponent {
    constructor() {
        this.title = 'quiz';
        this.count = 0;
        // i:number;
        this.value = false;
        this.index = 0;
        this.myArray = [];
        this.score = 0;
        this.a = [];
        //questions and answers
        this.questions = [
            {
                q: 'Which of these operators is used to allocate memory to array variable in Java?',
                options: [
                    'malloc',
                    'alloc',
                    'new',
                    'new malloc'
                ],
                answer: 2
            },
            {
                q: 'Which of these is an incorrect array declaration?',
                options: [
                    'int arr[] = new int[5]',
                    'int [] arr = new int[5]',
                    'int arr[] = new int[5]',
                    'int arr[] = int [5] new'
                ],
                answer: 3
            },
            {
                q: 'Which of these is an incorrect Statement?',
                options: [
                    'It is necessary to use new operator to initialize an array',
                    'It is necessary to use new operator to initialize an array',
                    'Array can be initialized when they are declared',
                    'None of the mentioned'
                ],
                answer: 0
            },
            {
                q: 'Which of these is necessary to specify at time of array initialization?',
                options: [
                    'Row',
                    'Column',
                    'Both Row and Column',
                    'None of the mentioned'
                ],
                answer: 0
            }, {
                q: 'When you pass an array to a method,the method receives ______',
                options: [
                    'A copy of the array.',
                    'A copy of the first element.',
                    'The refernce of the array.',
                    'The length of the array'
                ],
                answer: 2
            }, {
                q: 'Which will legally declare,construct,and initialize an array?',
                options: [
                    'int [] myList={}',
                    'int [] myList=(5,8,2)',
                    'int myList[] []={4,9,7,0}',
                    'int myList[]={4,3,7}'
                ],
                answer: 3
            }, {
                q: 'Which of the following is FALSE about arrays on Java',
                options: [
                    'A java array is always an object',
                    'Length of array can be changed after creation of array',
                    'Arrays in Java are always allocated on heap',
                    'None Of These'
                ],
                answer: 1
            },
            {
                q: 'Which of the following statements are incorrect?',
                options: [
                    'String is a class',
                    'Strings in java are mutable',
                    'Every string is an object of class String',
                    ' Java defines a peer class of String, called StringBuffer, which allows string to be altered'
                ],
                answer: 1
            }, {
                q: 'Which of these class is superclass of String and StringBuffer class?',
                options: [
                    'java.util',
                    'java.lang',
                    'ArrayList',
                    'none of the mentioned'
                ],
                answer: 1
            }, {
                q: 'Which of the following statement is correct?',
                options: [
                    'reverse() method reverses all characters.',
                    'reverseall() method reverses all characters.',
                    'replace() method replaces first occurrence of a character in invoking string with another character.',
                    'replace() method replaces last occurrence of a character in invoking string with another character'
                ],
                answer: 0
            }, {
                q: 'Which of these is an incorrect statement?',
                options: [
                    'String objects are immutable, they cannot be changed.',
                    'String object can point to some other reference of String variable.',
                    'StringBuffer class is used to store string in a buffer for later use.',
                    'none Of the mentioned'
                ],
                answer: 2
            }, {
                q: ' When does Exceptions in Java arises in code sequence?',
                options: [
                    'Run Time',
                    'Compilation Time',
                    'Can Occur Any Time',
                    'none Of the mentioned'
                ],
                answer: 0
            }, {
                q: 'Which of these keywords must be used to monitor for exceptions?',
                options: [
                    'try',
                    'finally',
                    'thrown',
                    'catch'
                ],
                answer: 0
            }, {
                q: 'Which of these keywords must be used to handle the exception thrown by try block in some rational manner?',
                options: [
                    'try',
                    'finally',
                    'thrown',
                    'catch'
                ],
                answer: 3
            }, {
                q: 'What is multithreaded programming?',
                options: [
                    'It’s a process in which two different processes run simultaneously',
                    'It’s a process in which two or more parts of same process run simultaneously',
                    ' It’s a process in which many different process are able to access same information',
                    'It’s a process in which a single process can access information from many sources'
                ],
                answer: 1
            }, {
                q: 'Which of these are types of multitasking?',
                options: [
                    'Process based',
                    'Thread based',
                    'Process and Thread based',
                    'None of the mentioned'
                ],
                answer: 2
            }
        ];
    }
    ngOnInit() {
        //this.options=document.querySelector(".options").children;  //disbale wala
        this.questionNumberSpan = document.querySelector(".question-num-value");
        this.totalQuestionSpan = document.querySelector(".total-question");
        this.question = document.querySelector(".question");
        this.answersTrackerContainer = document.querySelector(".answer-tracker");
        this.correctAnswerSpan = document.querySelector(".correct-answers");
        this.totalQuestionSpan2 = document.querySelector(".total-question2");
        this.percentage = document.querySelector(".percentage");
        this.op1 = document.querySelector(".option1");
        this.op2 = document.querySelector(".option2");
        this.op3 = document.querySelector(".option3");
        this.op4 = document.querySelector(".option4");
        this.randomQuestion();
        this.answerTracker();
    }
    //set question and answer number
    load() {
        this.totalQuestionSpan.innerHTML = this.questions.length;
        this.questionNumberSpan.innerHTML = this.index + 1;
        this.question.innerHTML = this.questions[this.Questionindex].q;
        this.op1.innerHTML = this.questions[this.Questionindex].options[0];
        this.op2.innerHTML = this.questions[this.Questionindex].options[1];
        this.op3.innerHTML = this.questions[this.Questionindex].options[2];
        this.op4.innerHTML = this.questions[this.Questionindex].options[3];
        this.index++;
    }
    check(event) {
        this.count = 1;
        //console.log("click id is "+event.target.id);
        //console.log("answer is "+this.questions[this.Questionindex].answer);
        this.a1 = event.target.id;
        //   console.log("a1 is "+this.a1);
        this.a2 = this.questions[this.Questionindex].answer;
        // console.log("a2 is "+this.a2);
        if (this.a1 == this.a2) {
            console.log("correct");
            // this.colorA='blue';
            //  this.flag=true;
            this.updateAnswerTracker("correct");
            this.score++;
            console.log("score is" + this.score);
        }
        else {
            // this.flag=false;
            console.log("wrong");
            this.updateAnswerTracker("wrong");
        }
        this.value = true;
    }
    next() {
        if (this.count == 0) {
            alert("select one");
        }
        else {
            this.myfun();
        }
    }
    answerTracker() {
        for (let j = 0; j < this.questions.length; j++) {
            const div = document.createElement("div");
            this.answersTrackerContainer.appendChild(div);
        }
    }
    updateAnswerTracker(name) {
        this.answersTrackerContainer.children[this.index - 1].classList.add(name);
    }
    randomQuestion() {
        let dup = 0;
        let randomNumber = Math.floor(Math.random() * this.questions.length);
        if (this.index == this.questions.length) {
            console.log("over");
            this.quizOver();
        }
        else {
            //console.log("index: "+this.index);
            if (this.myArray.length > 0) {
                for (let i = 0; i < this.myArray.length; i++) {
                    if (this.myArray[i] == randomNumber) {
                        dup = 1;
                        break;
                    }
                }
                if (dup == 1) {
                    this.randomQuestion();
                }
                else {
                    this.Questionindex = randomNumber;
                    this.load();
                    //  this.a.push(this.Questionindex);
                }
            }
            if (this.myArray.length == 0) {
                this.Questionindex = randomNumber;
                this.load();
                // this.a.push(this.Questionindex);
            }
            // console.log("random number is "+this.Questionindex);
            //console.log("a is "+this.a);
            this.myArray.push(this.Questionindex);
            console.log("myArray " + this.myArray);
        }
    }
    quizOver() {
        document.querySelector(".quiz-over").classList.add("show");
        this.correctAnswerSpan.innerHTML = this.score;
        this.totalQuestionSpan2.innerHTML = this.questions.length;
        this.percentage.innerHTML = ((this.score / this.questions.length) * 100).toPrecision(3) + "%";
    }
    tryAgain() {
        window.location.reload();
    }
    myfun() {
        this.value = false;
        this.count = 0;
        this.randomQuestion();
    }
};
ArrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-array',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./array.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/array/array.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./array.component.css */ "./src/app/array/array.component.css")).default]
    })
], ArrayComponent);



/***/ }),

/***/ "./src/app/collections/collections.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collections/collections.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body\r\n{\r\n    margin: 0;\r\n    /* background-color: #009688; */\r\n    font-family: sans-serif;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\n.hello{\r\n    background-color: #009688;\r\n    width: 100%;\r\n    height: 700px;\r\n    overflow: hidden;\r\n    -webkit-transform: translate(0px,-10px);\r\n            transform: translate(0px,-10px);\r\n}\r\n\r\n.quiz-container\r\n{\r\n    max-width: 700px;\r\n    max-height: 670px;\r\n    background-color: #eeebeb;\r\n    margin: 40px auto;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    -webkit-transform: translate(0px,-30px);\r\n            transform: translate(0px,-30px);\r\n}\r\n\r\n.quiz-container::after, .quiz-container::before{\r\n    content: '';\r\n    clear: both;\r\n    display:table;\r\n}\r\n\r\n.question-number,\r\n.question,\r\n.options,\r\n.button,\r\n.answer-tracker{\r\nfloat: left;\r\nwidth: 100%;\r\n}\r\n\r\n.question-number h3\r\n{\r\n    color: #009688;\r\n    border-bottom: 1px solid #ccc;\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.question{\r\n    font-size: 22px;\r\n    color: 000000;\r\n    padding: 20px 0;\r\n }\r\n\r\n.options div{\r\n    background-color: #cccccc;\r\n    font-size: 16px;\r\n    color: 000000;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    padding:15px; \r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.button .btn{\r\n    padding: 12px 50px;\r\n    border-radius: 20px;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    background-color: #009688;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: #ffffff;\r\n    border: none;\r\n    display: inline-block;\r\n    margin: 15px 0 20px;\r\n    -webkit-transform: translate(240px,0px);\r\n            transform: translate(240px,0px);\r\n}\r\n\r\n.button:hover{\r\n    color: white;\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n}\r\n\r\n.answer-tracker{\r\n    border-top: 1px solid #ccc;\r\n    padding-top: 20px ;\r\n}\r\n\r\n.answer-tracker div{\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: #cccccc;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.answer-tracker div.correct\r\n{\r\n    background-color: green;\r\n   background-image: url('tick.jpeg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n}\r\n\r\n.answer-tracker div.wrong\r\n{\r\n    background-color: rgb(186, 186, 190);\r\n     background-image: url('wrong.jpeg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n}\r\n\r\n.quiz-over{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    z-index: 10;\r\n    display: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.quiz-over.show\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.quiz-over .box{\r\n    background-color: #009688;\r\n    padding: 30px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 700px;\r\n    flex-basis: 700px;\r\n    color: #ffffff;\r\n}\r\n\r\n.quiz-over .box h1{\r\n     font-size: 36px;\r\n     margin: 0 0 20px;\r\n}\r\n\r\n.quiz-over .box button\r\n{\r\n    padding: 15px 50px;\r\n    border-radius: 20px;\r\n    background-color: #FF9800;\r\n  \r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    margin: 15px 0 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.option1\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option2\r\n{background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option3\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option4\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n/* .child_div{\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: center;\r\n} */\r\n\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    width: 60px;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n\r\n#home{\r\n    -webkit-transform: translate(1390px,-150px);\r\n            transform: translate(1390px,-150px);\r\n    display: inline-block;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#home:hover{\r\n    background-color: white;\r\n    \r\n    \r\n   \r\n}\r\n\r\n#user{\r\n    /* right: 0px;\r\n    float: right; */\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n\r\n.logout{\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.container:hover .logout{\r\n    display: block;\r\n    width: 120px;\r\n    height: 30px;\r\n    background-color: white;\r\n    color: rgb(243, 146, 36);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n#homeimg\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-transform: translate(0px,-20px);\r\n            transform: translate(0px,-20px);\r\n}\r\n\r\n/* #logout\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUlBOzs7OztBQUtBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7O0FBQ0E7O0lBRUksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx1QkFBdUI7R0FDeEIsa0NBQW9EO0lBQ25ELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG9DQUFvQztLQUNuQyxtQ0FBcUQ7SUFDdEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFDQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0tBQ0ssZUFBZTtLQUNmLGdCQUFnQjtBQUNyQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5Qjs7SUFFekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxtQ0FBbUM7SUFDbkMsV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7Q0FDQyxtQ0FBbUM7SUFDaEMsV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7O0lBRUksbUNBQW1DO0lBQ25DLFdBQVc7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUNBOztJQUVJLG1DQUFtQztJQUNuQyxXQUFXO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFDQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUM7SUFDRyx1QkFBdUI7Ozs7QUFJM0I7O0FBRUE7SUFDSTttQkFDZTtJQUNmLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpRUFBaUU7S0FDaEUsK0dBQXFFO0tBQXJFLHFFQUFxRTtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBOzs7SUFHSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtHQUNuQix3Q0FBZ0M7V0FBaEMsZ0NBQWdDO0FBQ25DOztBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFDQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcclxue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmhlbGxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTEwcHgpO1xyXG59XHJcbi5xdWl6LWNvbnRhaW5lclxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlYmViO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtMzBweCk7XHJcbn1cclxuXHJcbi5xdWl6LWNvbnRhaW5lcjo6YWZ0ZXIsIC5xdWl6LWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbn1cclxuXHJcblxyXG5cclxuLnF1ZXN0aW9uLW51bWJlcixcclxuLnF1ZXN0aW9uLFxyXG4ub3B0aW9ucyxcclxuLmJ1dHRvbixcclxuLmFuc3dlci10cmFja2Vye1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDEwMCU7XHJcbn0gXHJcbi5xdWVzdGlvbi1udW1iZXIgaDNcclxue1xyXG4gICAgY29sb3I6ICMwMDk2ODg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogMDAwMDAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gfVxyXG5cclxuLm9wdGlvbnMgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzoxNXB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uYnV0dG9uIC5idG57XHJcbiAgICBwYWRkaW5nOiAxMnB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjQwcHgsMHB4KTtcclxufVxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcclxufVxyXG4uYW5zd2VyLXRyYWNrZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4IDtcclxufVxyXG5cclxuLmFuc3dlci10cmFja2VyIGRpdntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmFuc3dlci10cmFja2VyIGRpdi5jb3JyZWN0XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy90aWNrLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4uYW5zd2VyLXRyYWNrZXIgZGl2Lndyb25nXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE4NiwgMTkwKTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy93cm9uZy5qcGVnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxufVxyXG5cclxuLnF1aXotb3ZlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucXVpei1vdmVyLnNob3dcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucXVpei1vdmVyIC5ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgZmxleC1iYXNpczogNzAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnF1aXotb3ZlciAuYm94IGgxe1xyXG4gICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG59XHJcbi5xdWl6LW92ZXIgLmJveCBidXR0b25cclxue1xyXG4gICAgcGFkZGluZzogMTVweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5vcHRpb24xXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE1MiwgMjQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuLm9wdGlvbjJcclxue2JhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE1MiwgMjQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuLm9wdGlvbjNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTUyLCAyNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4ub3B0aW9uNFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNTIsIDI0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG59XHJcbi8qIC5jaGlsZF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG4jbmFtZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MHB4LC05MHB4KTtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hvbWV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMzkwcHgsLTE1MHB4KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiAjaG9tZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBcclxuICAgXHJcbn0gXHJcblxyXG4jdXNlcntcclxuICAgIC8qIHJpZ2h0OiAwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG59XHJcblxyXG4jbWFpbl9kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNDYsIDM2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYigyNTAsIDE1NSwgMTQpKTsgKi9cclxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLDAuNSksIHJnYigyNTAsIDE1NSwgMTQsMC41KSk7IFxyXG59XHJcblxyXG4ubG9nb3V0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29udGFpbmVyOmhvdmVyIC5sb2dvdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59IFxyXG4jZGl2aW1nXHJcbntcclxuICAgIFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE4cHgsLTVweCk7XHJcbn1cclxuI2hvbWVpbWdcclxue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTIwcHgpO1xyXG59XHJcbi8qICNsb2dvdXRcclxue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/collections/collections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collections/collections.component.ts ***!
  \******************************************************/
/*! exports provided: CollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CollectionsComponent = class CollectionsComponent {
    constructor() {
        this.title = 'quiz';
        this.count = 0;
        // i:number;
        this.value = false;
        this.index = 0;
        this.myArray = [];
        this.score = 0;
        this.a = [];
        //questions and answers
        this.questions = [
            {
                q: 'Which of these standard collection classes implements a dynamic array?',
                options: [
                    'AbstractList',
                    'LinkedList',
                    'ArrayList',
                    'AbstractSet'
                ],
                answer: 2
            },
            {
                q: 'Which of these class can generate an array which can increase and decrease in size automatically?',
                options: [
                    'DynamicList()',
                    'ArrayList()',
                    'LinkedList()',
                    'MallocList()'
                ],
                answer: 1
            },
            {
                q: 'Which of these method can be used to increase the capacity of ArrayList object manually?',
                options: [
                    'ensureCapacity()',
                    'increasecapacity()',
                    'increaseCapacity()',
                    'Capacity()'
                ],
                answer: 0
            },
            {
                q: 'Which of these method of ArrayList class is used to obtain present size of an object?',
                options: [
                    'capacity()',
                    'inded()',
                    'length()',
                    'size()'
                ],
                answer: 3
            }, {
                q: 'Which of these methods can be used to obtain a static array from an ArrayList object?',
                options: [
                    'Array()',
                    'convertArray()',
                    'toArray()',
                    'covertoArray()'
                ],
                answer: 2
            }, {
                q: 'Which of these method is used to reduce the capacity of an ArrayList object?',
                options: [
                    'trim()',
                    'trimSize()',
                    'trimTosize()',
                    'trimToSize()'
                ],
                answer: 3
            }, {
                q: 'which of the following declarations would be appropriate for a list that is expected to contain integers?',
                options: [
                    'ArrayList<String> list = new ArrayList<String>()',
                    'ArrayList<int> list = new ArrayList<int>()',
                    'ArrayList<Integer> list = new ArrayList<Integer>()',
                    'ArrayList list = new ArrayList()'
                ],
                answer: 2
            }, {
                q: ' Declare and construct an ArrayList with an initial capacity of 20 references to Object.',
                options: [
                    'Object list(20) = new ArrayList()',
                    'ArrayList list[20] = new ArrayList()',
                    'ArrayList[Object] list = new ArrayList(20)',
                    'ArrayList<Object> list = new ArrayList<Object>(20)'
                ],
                answer: 3
            }, {
                q: 'Which of the following is a reason to use an ArrayList instead of an array?',
                options: [
                    'You can use a for-each loop on an ArrayList, but not in an array.',
                    'An ArrayList can grow or shrink as needed, while an array is always the same size.',
                    'You can store objects in an ArrayList, but not in an array.',
                    'None Of These'
                ],
                answer: 0
            }, {
                q: 'Which of the following is true about linked list implementation of stack?',
                options: [
                    'In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.',
                    'In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning',
                    'Both of the above',
                    'None Of These'
                ],
                answer: 3
            }, {
                q: 'Process of removing an element from stack is called __________',
                options: [
                    'Create',
                    'Push',
                    'Evaluation',
                    'Pop'
                ],
                answer: 3
            }, {
                q: 'In a stack, if a user tries to remove an element from empty stack it is called _________',
                options: [
                    'Underflow',
                    'Empty collection',
                    'Overflow',
                    'Garbage Collection'
                ],
                answer: 0
            }, {
                q: 'Pushing an element into stack already having five elements and stack size of 5, then stack becomes',
                options: [
                    'Overflow',
                    'Crash',
                    'Underflow',
                    'User flow'
                ],
                answer: 0
            }, {
                q: 'Which of the following applications may use a stack?',
                options: [
                    'A parentheses balancing program',
                    'Tracking of local variables at run timeush',
                    'Compiler Syntax Analyzer',
                    'Data Transfer between two asynchronous process'
                ],
                answer: 3
            }, {
                q: 'Which one of the following is an application of Queue Data Structure?',
                options: [
                    'When a resource is shared among multiple consumers',
                    'When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes',
                    'Load Balancing',
                    'All of the above'
                ],
                answer: 3
            }, {
                q: 'How many stacks are needed to implement a queue. Consider the situation where no other data structure like arrays, linked list is available to you.',
                options: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                answer: 1
            }, {
                q: 'Which of the following is true about linked list implementation of queue?',
                options: [
                    'In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.',
                    'In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.',
                    'In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning',
                    'None of the above'
                ],
                answer: 2
            }, {
                q: 'Which of the following is not the type of queue?',
                options: [
                    'Ordinary queue',
                    'Single ended queue',
                    'Circular queue',
                    'Priority queue'
                ],
                answer: 1
            }, {
                q: 'Queues serve major role in ______________',
                options: [
                    'Simulation of recursion',
                    'Simulation of arbitrary linked list',
                    'Simulation of limited resource allocation',
                    'Simulation of heap sort'
                ],
                answer: 2
            }, {
                q: ' A normal queue, if implemented using an array of size MAX_SIZE, gets full when',
                options: [
                    'Rear = MAX_SIZE – 1',
                    'Front = (rear + 1)mod MAX_SIZE',
                    'Front = rear + 1',
                    'Rear = front'
                ],
                answer: 0
            }
        ];
    }
    ngOnInit() {
        //this.options=document.querySelector(".options").children;  //disbale wala
        this.questionNumberSpan = document.querySelector(".question-num-value");
        this.totalQuestionSpan = document.querySelector(".total-question");
        this.question = document.querySelector(".question");
        this.answersTrackerContainer = document.querySelector(".answer-tracker");
        this.correctAnswerSpan = document.querySelector(".correct-answers");
        this.totalQuestionSpan2 = document.querySelector(".total-question2");
        this.percentage = document.querySelector(".percentage");
        this.op1 = document.querySelector(".option1");
        this.op2 = document.querySelector(".option2");
        this.op3 = document.querySelector(".option3");
        this.op4 = document.querySelector(".option4");
        this.randomQuestion();
        this.answerTracker();
    }
    //set question and answer number
    load() {
        this.totalQuestionSpan.innerHTML = this.questions.length;
        this.questionNumberSpan.innerHTML = this.index + 1;
        this.question.innerHTML = this.questions[this.Questionindex].q;
        this.op1.innerHTML = this.questions[this.Questionindex].options[0];
        this.op2.innerHTML = this.questions[this.Questionindex].options[1];
        this.op3.innerHTML = this.questions[this.Questionindex].options[2];
        this.op4.innerHTML = this.questions[this.Questionindex].options[3];
        this.index++;
    }
    check(event) {
        this.count = 1;
        //console.log("click id is "+event.target.id);
        //console.log("answer is "+this.questions[this.Questionindex].answer);
        this.a1 = event.target.id;
        //   console.log("a1 is "+this.a1);
        this.a2 = this.questions[this.Questionindex].answer;
        // console.log("a2 is "+this.a2);
        if (this.a1 == this.a2) {
            console.log("correct");
            // this.colorA='blue';
            //  this.flag=true;
            this.updateAnswerTracker("correct");
            this.score++;
            console.log("score is" + this.score);
        }
        else {
            // this.flag=false;
            console.log("wrong");
            this.updateAnswerTracker("wrong");
        }
        this.value = true;
    }
    next() {
        if (this.count == 0) {
            alert("select one");
        }
        else {
            this.myfun();
        }
    }
    answerTracker() {
        for (let j = 0; j < this.questions.length; j++) {
            const div = document.createElement("div");
            this.answersTrackerContainer.appendChild(div);
        }
    }
    updateAnswerTracker(name) {
        this.answersTrackerContainer.children[this.index - 1].classList.add(name);
    }
    randomQuestion() {
        let dup = 0;
        let randomNumber = Math.floor(Math.random() * this.questions.length);
        if (this.index == this.questions.length) {
            console.log("over");
            this.quizOver();
        }
        else {
            //console.log("index: "+this.index);
            if (this.myArray.length > 0) {
                for (let i = 0; i < this.myArray.length; i++) {
                    if (this.myArray[i] == randomNumber) {
                        dup = 1;
                        break;
                    }
                }
                if (dup == 1) {
                    this.randomQuestion();
                }
                else {
                    this.Questionindex = randomNumber;
                    this.load();
                    //  this.a.push(this.Questionindex);
                }
            }
            if (this.myArray.length == 0) {
                this.Questionindex = randomNumber;
                this.load();
                // this.a.push(this.Questionindex);
            }
            // console.log("random number is "+this.Questionindex);
            //console.log("a is "+this.a);
            this.myArray.push(this.Questionindex);
            console.log("myArray " + this.myArray);
        }
    }
    quizOver() {
        document.querySelector(".quiz-over").classList.add("show");
        this.correctAnswerSpan.innerHTML = this.score;
        this.totalQuestionSpan2.innerHTML = this.questions.length;
        this.percentage.innerHTML = ((this.score / this.questions.length) * 100).toPrecision(3) + "%";
        ;
    }
    tryAgain() {
        window.location.reload();
    }
    myfun() {
        this.value = false;
        this.count = 0;
        this.randomQuestion();
    }
};
CollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collections',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collections.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collections.component.css */ "./src/app/collections/collections.component.css")).default]
    })
], CollectionsComponent);



/***/ }),

/***/ "./src/app/front/front.component.css":
/*!*******************************************!*\
  !*** ./src/app/front/front.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\r\n{\r\n    margin: -5px;\r\n    padding: 0;\r\n    \r\n} \r\n\r\n.first\r\n{\r\n  width: 100%;\r\n  height: 700px;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(70, 68, 68, 0.2)),to(rgba(65, 62, 62, 0.2))),url('front1.png');\r\n  background-image: linear-gradient(rgba(70, 68, 68, 0.2),rgba(65, 62, 62, 0.2)),url('front1.png');\r\n} \r\n\r\n.pfirst\r\n{\r\n    text-align: right;\r\n    font-size: 45px;\r\n    font-weight: 500;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    letter-spacing: 3px;\r\n    color: black ;\r\n    padding-top: 220px;\r\n    -webkit-transform: translate(-70px,0px);\r\n            transform: translate(-70px,0px);\r\n} \r\n\r\n#one{\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: rgb(243, 146, 36);\r\n            text-decoration-color: rgb(243, 146, 36);\r\n} \r\n\r\n.bfirst1\r\n{\r\n    -webkit-transform: translate(1150px,-250px);\r\n            transform: translate(1150px,-250px);\r\n    background-color: rgb(238, 152, 24);\r\n    width: 150px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n} \r\n\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n} \r\n\r\n.bfirst2\r\n{\r\n    -webkit-transform: translate(1180px,-250px);\r\n            transform: translate(1180px,-250px);\r\n    background-color: rgb(19, 169, 196);\r\n    width: 150px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n} \r\n\r\n.second\r\n{\r\n    background-color: rgb(231, 236, 236);\r\n    width: 100%;\r\n  height: 500px;\r\n  /* background-size: cover;\r\n  background-position: center; */\r\n  overflow: hidden;\r\n} \r\n\r\n.psecond\r\n{\r\n    text-align: center;\r\n    font-size: 45px;\r\n    font-weight: 500;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    letter-spacing: 3px;\r\n    color: black ;\r\n    padding-top: 50px;\r\n} \r\n\r\n.divsecond1\r\n{\r\n    -webkit-transform: translate(150px,102px);\r\n            transform: translate(150px,102px);\r\n    height: 200px;\r\n    width: 400px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 10px;\r\n} \r\n\r\n#pdiv\r\n{\r\n    padding-top: 20px;\r\n    font-size: large;\r\n    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    font-weight: 100;\r\n    letter-spacing: 1px; */\r\n} \r\n\r\n.divsecond2\r\n{\r\n    -webkit-transform: translate(600px,-110px);\r\n            transform: translate(600px,-110px);\r\n    height: 200px;\r\n    width: 400px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 10px;\r\n} \r\n\r\n.divsecond3\r\n{\r\n    -webkit-transform: translate(1000px,-322px);\r\n            transform: translate(1000px,-322px);\r\n    height: 200px;\r\n    width: 400px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 10px;\r\n} \r\n\r\nh1{\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: rgb(243, 146, 36);\r\n            text-decoration-color: rgb(243, 146, 36);\r\n} \r\n\r\n.imgsecond\r\n{\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-bottom: 10px;\r\n} \r\n\r\n.third\r\n{\r\n    width: 100%;\r\n  height: 500px;\r\n  /* background-size: cover;\r\n  background-position: center; */\r\n  overflow: hidden;\r\n} \r\n\r\n.divthird1\r\n{\r\n    -webkit-transform: translate(110px,102px);\r\n            transform: translate(110px,102px);\r\n    background-color: white;\r\n    height: 200px;\r\n    width: 340px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 20px;\r\n    box-shadow:5px 10px 18px rgb(156, 154, 154);\r\n    word-spacing: 2px;\r\n} \r\n\r\n#prev\r\n{\r\n    margin-top: 40px;\r\n} \r\n\r\nh3{\r\n    color: rgb(248, 114, 25);\r\n} \r\n\r\nh6{\r\n    color: rgb(10, 125, 179);\r\n} \r\n\r\n.imgthird\r\n{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    -webkit-transform: translate(0px,-7px);\r\n            transform: translate(0px,-7px);\r\n} \r\n\r\n.divthird2\r\n{\r\n    -webkit-transform: translate(580px,-134px);\r\n            transform: translate(580px,-134px);\r\n    background-color: white;\r\n    height: 200px;\r\n    width: 340px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 20px;\r\n    box-shadow:5px 10px 18px rgb(156, 154, 154);\r\n    word-spacing: 2px;\r\n} \r\n\r\n.divthird3\r\n{\r\n    -webkit-transform: translate(1050px,-367px);\r\n            transform: translate(1050px,-367px);\r\n    background-color: white;\r\n    height: 200px;\r\n    width: 340px;\r\n    /* background-color: maroon; */\r\n    font-size: larger;\r\n    text-align: center;\r\n    padding: 20px;\r\n    box-shadow:5px 10px 18px rgb(156, 154, 154);\r\n    word-spacing: 2px;\r\n} \r\n\r\n.fourth\r\n{\r\n    width: 100%;\r\n    height: 900px;\r\n    background-size: cover;\r\n    /* background-position: center;\r\n    background-color: rgb(255, 255, 255); */\r\n    overflow: hidden;\r\n} \r\n\r\n#pfour\r\n{\r\n    text-align: left;\r\n    font-size: 55px;\r\n    font-weight: 500;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    letter-spacing: 4px;\r\n    color: black ;\r\n    padding-top: 180px;\r\n    padding-left: 40px;\r\n   -webkit-transform: translate(300px,100px);\r\n           transform: translate(300px,100px);\r\n   \r\n} \r\n\r\n#four\r\n{\r\n    background-color: rgb(28, 164, 255);\r\n} \r\n\r\n.imgfour1\r\n{\r\n    -webkit-transform: translate(800px,-140px);\r\n            transform: translate(800px,-140px);\r\n    width: 500px;\r\n    height: 500px;\r\n    \r\n} \r\n\r\n.imgfour2\r\n{\r\n    -webkit-transform: translate(-300px,20px);\r\n            transform: translate(-300px,20px);\r\n    width: 600px;\r\n    height: 400px;\r\n    \r\n} \r\n\r\n.bfour\r\n{\r\n    background-color: rgb(19, 169, 196);\r\n    width: 210px;\r\n  height: 80px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  -webkit-transform: translate(-80px,0px);\r\n          transform: translate(-80px,0px);\r\n} \r\n\r\n.five\r\n{\r\n    background-color: rgb(1, 16, 36);\r\n    width: 100%;\r\n  height: 100px;\r\n  padding: 20px,0px;\r\n  overflow: hidden;\r\n  \r\n} \r\n\r\nul#menu li {\r\n    display:inline;\r\n  } \r\n\r\n.imgfive\r\n{\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 50px;\r\n    padding-bottom: 0px;\r\n    padding-top: 25px;\r\n} \r\n\r\n.imgfive:hover{\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n} \r\n\r\n.divfive\r\n{\r\n    -webkit-transform: translate(520px,0px);\r\n            transform: translate(520px,0px);\r\n} \r\n\r\n.six\r\n{\r\n    background-color: rgb(247, 143, 25);\r\n    width: 100%;\r\n  height: 20px;\r\n  padding-bottom: 0px;\r\n  margin-bottom: 0px;\r\n  overflow: hidden;\r\n} \r\n\r\n.imgsix\r\n{\r\n    width: 15px;\r\n    height: 15px;\r\n    -webkit-transform: translate(700px,2px);\r\n            transform: translate(700px,2px);\r\n    padding-bottom: 0px;\r\n    padding-top: 5px;\r\n} \r\n\r\n#copy\r\n{\r\n    -webkit-transform: translate(730px,-8px);\r\n            transform: translate(730px,-8px); \r\n    padding-bottom: 0px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQvZnJvbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTs7QUFFZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHdJQUFrSDtFQUFsSCxnR0FBa0g7QUFDcEg7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0VBQXNFO0lBQ3RFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0RBQXdDO1lBQXhDLHdDQUF3QztBQUM1Qzs7QUFDQTs7SUFFSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxZQUFZO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxZQUFZO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLFdBQVc7RUFDYixhQUFhO0VBQ2I7Z0NBQzhCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzRUFBc0U7SUFDdEUsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUkseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjs7MEJBRXNCO0FBQzFCOztBQUNBOztJQUVJLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBOztJQUVJLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGdEQUF3QztZQUF4Qyx3Q0FBd0M7QUFDNUM7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7O0lBRUksV0FBVztFQUNiLGFBQWE7RUFDYjtnQ0FDOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUNBOztJQUVJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBQ0E7O0lBRUksMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsaUJBQWlCO0FBQ3JCOztBQUNBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCOzJDQUN1QztJQUN2QyxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0VBQXNFO0lBQ3RFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtHQUNuQix5Q0FBaUM7V0FBakMsaUNBQWlDOztBQUVwQzs7QUFDQTs7SUFFSSxtQ0FBbUM7QUFDdkM7O0FBQ0E7O0lBRUksMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBQ0E7O0lBRUkseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBQ0E7O0lBRUksbUNBQW1DO0lBQ25DLFlBQVk7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUNBOztJQUVJLGdDQUFnQztJQUNoQyxXQUFXO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOztBQUNBO0lBQ0ksY0FBYztFQUNoQjs7QUFDRjs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFDQTs7SUFFSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUNBOztJQUVJLG1DQUFtQztJQUNuQyxXQUFXO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2Zyb250L2Zyb250LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXHJcbntcclxuICAgIG1hcmdpbjogLTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufSBcclxuXHJcbi5maXJzdFxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDcwLCA2OCwgNjgsIDAuMikscmdiYSg2NSwgNjIsIDYyLCAwLjIpKSx1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9mcm9udDEucG5nKTtcclxufVxyXG4ucGZpcnN0XHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrIDtcclxuICAgIHBhZGRpbmctdG9wOiAyMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MHB4LDBweCk7XHJcbn1cclxuI29uZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjQzLCAxNDYsIDM2KTtcclxufVxyXG4uYmZpcnN0MVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTUwcHgsLTI1MHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE1MiwgMjQpO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJmaXJzdDJcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTE4MHB4LC0yNTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE2OSwgMTk2KTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2Vjb25kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzNiwgMjM2KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucHNlY29uZFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBjb2xvcjogYmxhY2sgO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLmRpdnNlY29uZDFcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwcHgsMTAycHgpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4jcGRpdlxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAvKiBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXHJcbn1cclxuLmRpdnNlY29uZDJcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAwcHgsLTExMHB4KTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247ICovXHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmRpdnNlY29uZDNcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwMHB4LC0zMjJweCk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbWFyb29uOyAqL1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG59XHJcbi5pbWdzZWNvbmRcclxue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRoaXJkXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZGl2dGhpcmQxXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHB4LDEwMnB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6NXB4IDEwcHggMThweCByZ2IoMTU2LCAxNTQsIDE1NCk7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxufVxyXG4jcHJldlxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDExNCwgMjUpO1xyXG59XHJcbmg2e1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTI1LCAxNzkpO1xyXG59XHJcbi5pbWd0aGlyZFxyXG57XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC03cHgpO1xyXG59XHJcbi5kaXZ0aGlyZDJcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTgwcHgsLTEzNHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6NXB4IDEwcHggMThweCByZ2IoMTU2LCAxNTQsIDE1NCk7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmRpdnRoaXJkM1xyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDUwcHgsLTM2N3B4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6NXB4IDEwcHggMThweCByZ2IoMTU2LCAxNTQsIDE1NCk7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxufVxyXG4uZm91cnRoXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNwZm91clxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgY29sb3I6IGJsYWNrIDtcclxuICAgIHBhZGRpbmctdG9wOiAxODBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwcHgsMTAwcHgpO1xyXG4gICBcclxufVxyXG4jZm91clxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2NCwgMjU1KTtcclxufVxyXG4uaW1nZm91cjFcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODAwcHgsLTE0MHB4KTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBcclxufVxyXG4uaW1nZm91cjJcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHB4LDIwcHgpO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG59XHJcbi5iZm91clxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE2OSwgMTk2KTtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODBweCwwcHgpO1xyXG59XHJcbi5maXZlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxNiwgMzYpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAyMHB4LDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG59XHJcbnVsI21lbnUgbGkge1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbiAgfVxyXG4uaW1nZml2ZVxyXG57XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuLmltZ2ZpdmU6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xyXG59XHJcbi5kaXZmaXZlXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUyMHB4LDBweCk7XHJcbn1cclxuLnNpeFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxNDMsIDI1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWdzaXhcclxue1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MDBweCwycHgpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuI2NvcHlcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzMwcHgsLThweCk7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/front/front.component.ts":
/*!******************************************!*\
  !*** ./src/app/front/front.component.ts ***!
  \******************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FrontComponent = class FrontComponent {
    constructor(router) {
        this.router = router;
    }
    onClickLogin() {
        this.router.navigateByUrl('/login');
    }
    ngOnInit() {
    }
};
FrontComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-front',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./front.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/front/front.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./front.component.css */ "./src/app/front/front.component.css")).default]
    })
], FrontComponent);



/***/ }),

/***/ "./src/app/get-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-data.service.ts ***!
  \*************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let GetDataService = class GetDataService {
    constructor(http) {
        this.http = http;
        this.topics_source = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.currentTopic = this.topics_source.asObservable();
    }
    getData() {
        return this.http.get("http://localhost:8081/getAll");
    }
    getTopic(topic) {
        this.http.get("http://localhost:8081/" + topic).subscribe((data) => {
            this.topic = data;
        });
    }
    changeTopic(topic) {
        this.topics_source.next(topic);
    }
};
GetDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetDataService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .child_div{\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: center;\r\n} */\r\n\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    width: 60px;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n\r\n#home{\r\n    -webkit-transform: translate(1390px,-150px);\r\n            transform: translate(1390px,-150px);\r\n    display: inline-block;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#home:hover{\r\n    background-color: white;\r\n    \r\n   \r\n}\r\n\r\n#user{\r\n    /* right: 0px;\r\n    float: right; */\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n\r\n.logout{\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.container:hover .logout{\r\n    display: block;\r\n    width: 120px;\r\n    height: 30px;\r\n    background-color: white;\r\n    color: rgb(243, 146, 36);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n#homeimg\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-transform: translate(0px,-20px);\r\n            transform: translate(0px,-20px);\r\n}\r\n\r\n/* #logout\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQztJQUNHLHVCQUF1Qjs7O0FBRzNCOztBQUVBO0lBQ0k7bUJBQ2U7SUFDZixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUVBQWlFO0tBQ2hFLCtHQUFxRTtLQUFyRSxxRUFBcUU7QUFDMUU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7O0lBR0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7R0FDbkIsd0NBQWdDO1dBQWhDLGdDQUFnQztBQUNuQzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jaGlsZF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG4jbmFtZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MHB4LC05MHB4KTtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hvbWV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMzkwcHgsLTE1MHB4KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiAjaG9tZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgIFxyXG59IFxyXG5cclxuI3VzZXJ7XHJcbiAgICAvKiByaWdodDogMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG5cclxufVxyXG5cclxuI21haW5fZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTQ2LCAzNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2IoMjUwLCAxNTUsIDE0KSk7ICovXHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCwwLjUpLCByZ2IoMjUwLCAxNTUsIDE0LDAuNSkpOyBcclxufVxyXG5cclxuLmxvZ291dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lcjpob3ZlciAubG9nb3V0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAxNDYsIDM2KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSBcclxuI2RpdmltZ1xyXG57XHJcbiAgICBcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOHB4LC01cHgpO1xyXG59XHJcbiNob21laW1nXHJcbntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC0yMHB4KTtcclxufVxyXG4vKiAjbG9nb3V0XHJcbntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main:hover{\r\n    background-color:   rgb(243, 146, 36);\r\n    color: white;\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n    \r\n}\r\n\r\n.main{\r\n    margin: 30px;\r\n    padding: 25px;\r\n    height: 400px;\r\n    width: 400px;\r\n    background-color: white;\r\n    color: rgb(243, 146, 36);\r\n    border-radius: 7px;\r\n    border: rgb(243, 146, 36) solid 1px;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    -webkit-transform: translate(0px,20px);\r\n            transform: translate(0px,20px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGlDQUF5QjtZQUF6Qix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICByZ2IoMjQzLCAxNDYsIDM2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSk7XHJcbiAgICBcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyOiByZ2IoMjQzLCAxNDYsIDM2KSBzb2xpZCAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMjBweCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");



let HomeComponent = class HomeComponent {
    constructor(service) {
        this.service = service;
        this.topic_Tosend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        let response = this.service.getData();
        response.subscribe((data) => { this.li = data; });
    }
    sendTopic(topic) {
        this.service.changeTopic(topic);
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "topic_Tosend", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/linkedlist/linkedlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/linkedlist/linkedlist.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body\r\n{\r\n    margin: 0;\r\n    /* background-color: #009688; */\r\n    font-family: sans-serif;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\n.hello{\r\n    background-color: #009688;\r\n    width: 100%;\r\n    height: 700px;\r\n    overflow: hidden;\r\n    -webkit-transform: translate(0px,-10px);\r\n            transform: translate(0px,-10px);\r\n}\r\n\r\n.quiz-container\r\n{\r\n    max-width: 700px;\r\n    max-height: 700px;\r\n    background-color: #eeebeb;\r\n    margin: 40px auto;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    -webkit-transform: translate(0px,-20px);\r\n            transform: translate(0px,-20px);\r\n}\r\n\r\n.quiz-container::after, .quiz-container::before{\r\n    content: '';\r\n    clear: both;\r\n    display:table;\r\n}\r\n\r\n.question-number,\r\n.question,\r\n.options,\r\n.button,\r\n.answer-tracker{\r\nfloat: left;\r\nwidth: 100%;\r\n}\r\n\r\n.question-number h3\r\n{\r\n    color: #009688;\r\n    border-bottom: 1px solid #ccc;\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.question{\r\n    font-size: 22px;\r\n    color: 000000;\r\n    padding: 20px 0;\r\n }\r\n\r\n.options div{\r\n    background-color: #cccccc;\r\n    font-size: 16px;\r\n    color: 000000;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    padding:15px; \r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.button .btn{\r\n    padding: 12px 50px;\r\n    border-radius: 20px;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    background-color: #009688;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: #ffffff;\r\n    border: none;\r\n    display: inline-block;\r\n    margin: 15px 0 20px;\r\n    -webkit-transform: translate(240px,0px);\r\n            transform: translate(240px,0px);\r\n}\r\n\r\n.button:hover{\r\n    color: white;\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n}\r\n\r\n.answer-tracker{\r\n    border-top: 1px solid #ccc;\r\n    padding-top: 20px ;\r\n}\r\n\r\n.answer-tracker div{\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: #cccccc;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.answer-tracker div.correct\r\n{\r\n    background-color: green;\r\n   background-image: url('tick.jpeg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n}\r\n\r\n.answer-tracker div.wrong\r\n{\r\n    background-color: rgb(186, 186, 190);\r\n     background-image: url('wrong.jpeg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n}\r\n\r\n.quiz-over{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    z-index: 10;\r\n    display: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.quiz-over.show\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.quiz-over .box{\r\n    background-color: #009688;\r\n    padding: 30px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    max-width: 700px;\r\n    flex-basis: 700px;\r\n    color: #ffffff;\r\n}\r\n\r\n.quiz-over .box h1{\r\n     font-size: 36px;\r\n     margin: 0 0 20px;\r\n}\r\n\r\n.quiz-over .box button\r\n{\r\n    padding: 15px 50px;\r\n    border-radius: 20px;\r\n    background-color: #FF9800;\r\n  \r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    margin: 15px 0 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.option1\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option2\r\n{background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option3\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.option4\r\n{\r\n    background-color: rgb(238, 152, 24);\r\n    width: 100%;\r\n  height: 60px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-bottom: 55px;\r\n}\r\n\r\n/* .child_div{\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: center;\r\n} */\r\n\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    width: 60px;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n\r\n#home{\r\n    -webkit-transform: translate(1390px,-150px);\r\n            transform: translate(1390px,-150px);\r\n    display: inline-block;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#home:hover{\r\n    background-color: white;\r\n    \r\n    \r\n   \r\n}\r\n\r\n#user{\r\n    /* right: 0px;\r\n    float: right; */\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n\r\n.logout{\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.container:hover .logout{\r\n    display: block;\r\n    width: 120px;\r\n    height: 30px;\r\n    background-color: white;\r\n    color: rgb(243, 146, 36);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n#homeimg\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-transform: translate(0px,-20px);\r\n            transform: translate(0px,-20px);\r\n}\r\n\r\n/* #logout\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua2VkbGlzdC9saW5rZWRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFJQTs7Ozs7QUFLQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUNBOztJQUVJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsU0FBUztJQUNULG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0dBQ3hCLGtDQUFvRDtJQUNuRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxvQ0FBb0M7S0FDbkMsbUNBQXFEO0lBQ3RELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBQ0E7O0lBRUksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtLQUNLLGVBQWU7S0FDZixnQkFBZ0I7QUFDckI7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7O0lBRXpCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBQ0E7O0lBRUksbUNBQW1DO0lBQ25DLFdBQVc7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUNBO0NBQ0MsbUNBQW1DO0lBQ2hDLFdBQVc7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUNBOztJQUVJLG1DQUFtQztJQUNuQyxXQUFXO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFDQTs7SUFFSSxtQ0FBbUM7SUFDbkMsV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7Ozs7O0dBS0c7O0FBRUg7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVDO0lBQ0csdUJBQXVCOzs7O0FBSTNCOztBQUVBO0lBQ0k7bUJBQ2U7SUFDZixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUVBQWlFO0tBQ2hFLCtHQUFxRTtLQUFyRSxxRUFBcUU7QUFDMUU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7O0lBR0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7R0FDbkIsd0NBQWdDO1dBQWhDLGdDQUFnQztBQUNuQzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBQ0E7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2xpbmtlZGxpc3QvbGlua2VkbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keVxyXG57XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaGVsbG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtMTBweCk7XHJcbn1cclxuLnF1aXotY29udGFpbmVyXHJcbntcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWViZWI7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC0yMHB4KTtcclxufVxyXG5cclxuLnF1aXotY29udGFpbmVyOjphZnRlciwgLnF1aXotY29udGFpbmVyOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxufVxyXG5cclxuXHJcblxyXG4ucXVlc3Rpb24tbnVtYmVyLFxyXG4ucXVlc3Rpb24sXHJcbi5vcHRpb25zLFxyXG4uYnV0dG9uLFxyXG4uYW5zd2VyLXRyYWNrZXJ7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogMTAwJTtcclxufSBcclxuLnF1ZXN0aW9uLW51bWJlciBoM1xyXG57XHJcbiAgICBjb2xvcjogIzAwOTY4ODtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiB9XHJcblxyXG4ub3B0aW9ucyBkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IDAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOjE1cHg7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b24gLmJ0bntcclxuICAgIHBhZGRpbmc6IDEycHggNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNDBweCwwcHgpO1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xyXG59XHJcbi5hbnN3ZXItdHJhY2tlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHggO1xyXG59XHJcblxyXG4uYW5zd2VyLXRyYWNrZXIgZGl2e1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYW5zd2VyLXRyYWNrZXIgZGl2LmNvcnJlY3Rcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RpY2suanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbn1cclxuXHJcbi5hbnN3ZXItdHJhY2tlciBkaXYud3Jvbmdcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg2LCAxOTApO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dyb25nLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4ucXVpei1vdmVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5xdWl6LW92ZXIuc2hvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5xdWl6LW92ZXIgLmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiA3MDBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucXVpei1vdmVyIC5ib3ggaDF7XHJcbiAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuLnF1aXotb3ZlciAuYm94IGJ1dHRvblxyXG57XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm9wdGlvbjFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTUyLCAyNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4ub3B0aW9uMlxyXG57YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTUyLCAyNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4ub3B0aW9uM1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNTIsIDI0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG59XHJcbi5vcHRpb240XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE1MiwgMjQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuLyogLmNoaWxkX2RpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbiNuYW1le1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwcHgsLTkwcHgpO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaG9tZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEzOTBweCwtMTUwcHgpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuICNob21lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIFxyXG4gICBcclxufSBcclxuXHJcbiN1c2Vye1xyXG4gICAgLyogcmlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbn1cclxuXHJcbiNtYWluX2RpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiKDI1MCwgMTU1LCAxNCkpOyAqL1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAsMC41KSwgcmdiKDI1MCwgMTU1LCAxNCwwLjUpKTsgXHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb250YWluZXI6aG92ZXIgLmxvZ291dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgMTQ2LCAzNik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0gXHJcbiNkaXZpbWdcclxue1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMThweCwtNXB4KTtcclxufVxyXG4jaG9tZWltZ1xyXG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwtMjBweCk7XHJcbn1cclxuLyogI2xvZ291dFxyXG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/linkedlist/linkedlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/linkedlist/linkedlist.component.ts ***!
  \****************************************************/
/*! exports provided: LinkedlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedlistComponent", function() { return LinkedlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkedlistComponent = class LinkedlistComponent {
    constructor() {
        this.title = 'quiz';
        this.count = 0;
        // i:number;
        this.value = false;
        this.index = 0;
        this.myArray = [];
        this.score = 0;
        this.a = [];
        //questions and answers
        this.questions = [
            {
                q: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
                options: [
                    'Insertion Sort',
                    'Quick Sort',
                    'Heap Sort',
                    'Merge Sort'
                ],
                answer: 3
            },
            {
                q: 'In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is',
                options: [
                    'log 2n',
                    'n/2',
                    'log 2n-1',
                    'n'
                ],
                answer: 3
            },
            {
                q: 'What is the space complexity for deleting a linked list?',
                options: [
                    'O(1)',
                    'O(n)',
                    'Either O(1) or O(n)',
                    'O(logn)'
                ],
                answer: 0
            },
            {
                q: 'In a circular linked list',
                options: [
                    'Components are all linked together in some sequential manner.',
                    'There is no beginning and no end.',
                    'Components are arranged hierarchically.',
                    'Forward and backward traversal within the list is permitted.'
                ],
                answer: 1
            }, {
                q: 'Which of the following operations is performed more efficiently by doubly linked list than by singly linked list?',
                options: [
                    'Deleting a node whose location in given',
                    'Searching of an unsorted list for a given item',
                    'Inverting a node after the node with given location',
                    'Traversing a list to process each node'
                ],
                answer: 0
            }, {
                q: 'In linked list each node contain minimum of two fields. One field is data field to store the data second field is?',
                options: [
                    'Pointer to character',
                    'Pointer to integer',
                    'Pointer to node',
                    'Node'
                ],
                answer: 2
            }, {
                q: 'What would be the asymptotic time complexity to add a node at the end of singly linked list, if the pointer is initially pointing to the head of the list?',
                options: [
                    'O(1)',
                    'O(n)',
                    'θ(n)',
                    'θ(1)'
                ],
                answer: 2
            }, {
                q: 'What would be the asymptotic time complexity to insert an element at the second position in the linked list?',
                options: [
                    'O(1)',
                    'O(n)',
                    'O(n2)',
                    'None Of These'
                ],
                answer: 0
            }, {
                q: 'The concatenation of two list can performed in O(1) time. Which of the following variation of linked list can be used?',
                options: [
                    'Singly linked list',
                    'Doubly linked list',
                    'Circular Doubly linked list',
                    'Array implementation of list'
                ],
                answer: 2
            }, {
                q: 'In doubly linked lists, traversal can be performed?',
                options: [
                    'Only in forward direction',
                    'Only in reverse direction',
                    'In both directions',
                    'None Of These'
                ],
                answer: 2
            }, {
                q: ' A variant of the linked list in which none of the node contains NULL pointer is?',
                options: [
                    'Singly linked list',
                    'Doubly linked list',
                    'Circular linked list',
                    'None Of These'
                ],
                answer: 3
            }
        ];
    }
    ngOnInit() {
        //this.options=document.querySelector(".options").children;  //disbale wala
        this.questionNumberSpan = document.querySelector(".question-num-value");
        this.totalQuestionSpan = document.querySelector(".total-question");
        this.question = document.querySelector(".question");
        this.answersTrackerContainer = document.querySelector(".answer-tracker");
        this.correctAnswerSpan = document.querySelector(".correct-answers");
        this.totalQuestionSpan2 = document.querySelector(".total-question2");
        this.percentage = document.querySelector(".percentage");
        this.op1 = document.querySelector(".option1");
        this.op2 = document.querySelector(".option2");
        this.op3 = document.querySelector(".option3");
        this.op4 = document.querySelector(".option4");
        this.randomQuestion();
        this.answerTracker();
    }
    //set question and answer number
    load() {
        this.totalQuestionSpan.innerHTML = this.questions.length;
        this.questionNumberSpan.innerHTML = this.index + 1;
        this.question.innerHTML = this.questions[this.Questionindex].q;
        this.op1.innerHTML = this.questions[this.Questionindex].options[0];
        this.op2.innerHTML = this.questions[this.Questionindex].options[1];
        this.op3.innerHTML = this.questions[this.Questionindex].options[2];
        this.op4.innerHTML = this.questions[this.Questionindex].options[3];
        this.index++;
    }
    check(event) {
        this.count = 1;
        //console.log("click id is "+event.target.id);
        //console.log("answer is "+this.questions[this.Questionindex].answer);
        this.a1 = event.target.id;
        //   console.log("a1 is "+this.a1);
        this.a2 = this.questions[this.Questionindex].answer;
        // console.log("a2 is "+this.a2);
        if (this.a1 == this.a2) {
            console.log("correct");
            // this.colorA='blue';
            //  this.flag=true;
            this.updateAnswerTracker("correct");
            this.score++;
            console.log("score is" + this.score);
        }
        else {
            // this.flag=false;
            console.log("wrong");
            this.updateAnswerTracker("wrong");
        }
        this.value = true;
    }
    next() {
        if (this.count == 0) {
            alert("select one");
        }
        else {
            this.myfun();
        }
    }
    answerTracker() {
        for (let j = 0; j < this.questions.length; j++) {
            const div = document.createElement("div");
            this.answersTrackerContainer.appendChild(div);
        }
    }
    updateAnswerTracker(name) {
        this.answersTrackerContainer.children[this.index - 1].classList.add(name);
    }
    randomQuestion() {
        let dup = 0;
        let randomNumber = Math.floor(Math.random() * this.questions.length);
        if (this.index == this.questions.length) {
            console.log("over");
            this.quizOver();
        }
        else {
            //console.log("index: "+this.index);
            if (this.myArray.length > 0) {
                for (let i = 0; i < this.myArray.length; i++) {
                    if (this.myArray[i] == randomNumber) {
                        dup = 1;
                        break;
                    }
                }
                if (dup == 1) {
                    this.randomQuestion();
                }
                else {
                    this.Questionindex = randomNumber;
                    this.load();
                    //  this.a.push(this.Questionindex);
                }
            }
            if (this.myArray.length == 0) {
                this.Questionindex = randomNumber;
                this.load();
                // this.a.push(this.Questionindex);
            }
            // console.log("random number is "+this.Questionindex);
            //console.log("a is "+this.a);
            this.myArray.push(this.Questionindex);
            console.log("myArray " + this.myArray);
        }
    }
    quizOver() {
        document.querySelector(".quiz-over").classList.add("show");
        this.correctAnswerSpan.innerHTML = this.score;
        this.totalQuestionSpan2.innerHTML = this.questions.length;
        this.percentage.innerHTML = ((this.score / this.questions.length) * 100).toPrecision(3) + "%";
        ;
    }
    tryAgain() {
        window.location.reload();
    }
    myfun() {
        this.value = false;
        this.count = 0;
        this.randomQuestion();
    }
};
LinkedlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-linkedlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./linkedlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/linkedlist/linkedlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./linkedlist.component.css */ "./src/app/linkedlist/linkedlist.component.css")).default]
    })
], LinkedlistComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginPageComponent = class LoginPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    background: white;\r\n    overflow: hidden;\r\n    /* background-size: cover; */\r\n}\r\n.imgdiv\r\n{\r\n    /* background-image: url(../../assets/images/login1.webp); */\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    display: inline;\r\n    overflow: hidden;\r\n}\r\n.logimg\r\n{\r\n    width: 800px;\r\n    height: 550px;\r\n    -webkit-transform: translate(0px,50px);\r\n            transform: translate(0px,50px);\r\n}\r\n.card-container\r\n{\r\nbox-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\npadding: 91px;\r\nbackground-color: #dbd5ceee;\r\nwidth: 16%;\r\nheight: 174px;\r\nmargin-left: 59%;\r\nmargin-top: 6%;\r\n/* background:; */\r\n/* background: rgba(255,255 , 255, 0.6); */\r\n/* needed styles below */\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n-webkit-box-pack: justify;\r\n        justify-content: space-between;\r\nopacity: 0.8;\r\n-webkit-transform: translate(50px,-550px);\r\n        transform: translate(50px,-550px);\r\n}\r\n.full-width\r\n{\r\ncolor: black;\r\n}\r\n.toolbarwidth\r\n{\r\ncolor: black;\r\nbackground-color: #ff8c1a;\r\nopacity: 0.8;\r\n}\r\nfont{\r\ncolor: rgb(240, 35, 35);\r\n}\r\n.mat-raised-button:hover {\r\nbackground-color: rgb(240, 232, 232);\r\n}\r\n.btn-social-icon\r\n  {\r\n      background-color: red;\r\n  }\r\n.btn-social-icon:hover\r\n  {\r\n      background-color:rgb(240, 232, 232);\r\n      color:red;\r\n  }\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    \r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSw0REFBNEQ7SUFDNUQsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7O0FBRUEsc0VBQXNFO0FBQ3RFLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGlCQUFpQjtBQUNqQiwwQ0FBMEM7QUFDMUMsd0JBQXdCO0FBQ3hCLG9CQUFhO0FBQWIsYUFBYTtBQUNiLHlCQUE4QjtRQUE5Qiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLHlDQUFpQztRQUFqQyxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7TUFFTSxxQkFBcUI7RUFDekI7QUFDQTs7TUFFSSxtQ0FBbUM7TUFDbkMsU0FBUztFQUNiO0FBRUY7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNENBQTRDOztJQUU1QyxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUlBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpRUFBaUU7S0FDaEUsK0dBQXFFO0tBQXJFLHFFQUFxRTtBQUMxRTtBQUVBOzs7SUFHSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtHQUNuQix3Q0FBZ0M7V0FBaEMsZ0NBQWdDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG59XHJcbi5pbWdkaXZcclxue1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4xLndlYnApOyAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9naW1nXHJcbntcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsNTBweCk7XHJcbn1cclxuLmNhcmQtY29udGFpbmVyXHJcbntcclxuYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcclxucGFkZGluZzogOTFweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RiZDVjZWVlO1xyXG53aWR0aDogMTYlO1xyXG5oZWlnaHQ6IDE3NHB4O1xyXG5tYXJnaW4tbGVmdDogNTklO1xyXG5tYXJnaW4tdG9wOiA2JTtcclxuLyogYmFja2dyb3VuZDo7ICovXHJcbi8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSAsIDI1NSwgMC42KTsgKi9cclxuLyogbmVlZGVkIHN0eWxlcyBiZWxvdyAqL1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbm9wYWNpdHk6IDAuODtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwtNTUwcHgpO1xyXG59XHJcbi5mdWxsLXdpZHRoXHJcbntcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbi50b29sYmFyd2lkdGhcclxue1xyXG5jb2xvcjogYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZjhjMWE7XHJcbm9wYWNpdHk6IDAuODtcclxufVxyXG5mb250e1xyXG5jb2xvcjogcmdiKDI0MCwgMzUsIDM1KTtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzIsIDIzMik7XHJcbn1cclxuLmJ0bi1zb2NpYWwtaWNvblxyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbC1pY29uOmhvdmVyXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDIzMiwgMjMyKTtcclxuICAgICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuI25hbWV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTBweCwtOTBweCk7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuI21haW5fZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTQ2LCAzNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2IoMjUwLCAxNTUsIDE0KSk7ICovXHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCwwLjUpLCByZ2IoMjUwLCAxNTUsIDE0LDAuNSkpOyBcclxufVxyXG5cclxuI2RpdmltZ1xyXG57XHJcbiAgICBcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOHB4LC01cHgpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");






let LoginComponent = class LoginComponent {
    constructor(router, service, authService) {
        this.router = router;
        this.service = service;
        this.authService = authService;
        let response = this.service.gettingCredentials();
        response.subscribe((data) => this.credentials = data);
    }
    LoginProcess(form) {
        let response = this.service.gettingCredentials();
        response.subscribe((data) => this.credentials = data);
        console.log("Login done");
    }
    onLogin(form) {
        let flag = true;
        let email = form.value.email;
        let password = form.value.password;
        for (let i in this.credentials) {
            if (email == this.credentials[i].email && password == this.credentials[i].password && form.valid == true) {
                // alert("Hi");
                flag = false;
                this.router.navigateByUrl('/home');
                break;
            }
            else {
            }
        }
        if (flag == true) {
            alert("Invalid Credentials!");
        }
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log(user);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID).then(x => console.log(x));
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID).then(x => console.log(x));
    }
    signOut() {
        this.authService.signOut();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register-page/register-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-page/register-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/register-page/register-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterPageComponent = class RegisterPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-page.component.css */ "./src/app/register-page/register-page.component.css")).default]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    background: rgb(255, 255, 255);\r\n   overflow: hidden;\r\n}\r\n.imgdiv\r\n{\r\n    /* background-image: url(../../assets/images/login1.webp); */\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    display: inline;\r\n    overflow: hidden;\r\n}\r\n.logimg\r\n{\r\n    width: 800px;\r\n    height: 600px;\r\n    -webkit-transform: translate(0px,50px);\r\n            transform: translate(0px,50px);\r\n}\r\n.card-container\r\n{\r\nbox-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\npadding: 91px;\r\n    background-color: #dbd5ceee;\r\n    width: 16%;\r\n    height: 303px;\r\nmargin-left: 59%;\r\nmargin-top: 3%;\r\n/* background:; */\r\n/* background: rgba(255,255 , 255, 0.6); */\r\n/* needed styles below */\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n-webkit-box-pack: justify;\r\n        justify-content: space-between;\r\nopacity: 0.8;\r\n-webkit-transform: translate(50px,-600px);\r\n        transform: translate(50px,-600px);\r\n}\r\n.content\r\n{\r\n    margin-top: 10%;\r\n}\r\n.full-width\r\n{\r\ncolor: black;\r\n}\r\n.toolbarwidth\r\n{\r\ncolor: black;\r\nbackground-color: #ff8c1a;\r\nopacity: 0.8;\r\n}\r\nfont{\r\ncolor: rgb(194, 21, 21);\r\n}\r\n.mat-raised-button:hover {\r\nbackground-color: rgb(240, 232, 232);\r\n}\r\n#name{\r\n    -webkit-transform: translate(150px,-90px);\r\n            transform: translate(150px,-90px);\r\n    font-size: 48px;\r\n    font-weight: bolder; \r\n    font-family: 'Times New Roman', Times, serif;\r\n    \r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n}\r\n#main_div{\r\n    background-color: rgb(243, 146, 36);\r\n    border-radius: 0px;\r\n    margin-bottom: 5px;\r\n    height: 90px;\r\n    overflow: hidden;\r\n    /* background: linear-gradient(transparent, rgb(250, 155, 14)); */\r\n     background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0,0.5)), to(rgb(250, 155, 14,0.5)));\r\n     background: linear-gradient(rgba(0,0,0,0,0.5), rgb(250, 155, 14,0.5)); \r\n}\r\n#divimg\r\n{\r\n    \r\n    width: 150px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n   -webkit-transform: translate(-18px,-5px);\r\n           transform: translate(-18px,-5px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGlEQUFpRDtJQUNqRCw4QkFBOEI7R0FDL0IsZ0JBQWdCO0FBQ25CO0FBQ0E7O0lBRUksNERBQTREO0lBQzVELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSxhQUFhO0lBQ1QsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixhQUFhO0FBQ2pCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLDBDQUEwQztBQUMxQyx3QkFBd0I7QUFDeEIsb0JBQWE7QUFBYixhQUFhO0FBQ2IseUJBQThCO1FBQTlCLDhCQUE4QjtBQUM5QixZQUFZO0FBQ1oseUNBQWlDO1FBQWpDLGlDQUFpQztBQUNqQztBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFFQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0Q0FBNEM7O0lBRTVDLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBSUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlFQUFpRTtLQUNoRSwrR0FBcUU7S0FBckUscUVBQXFFO0FBQzFFO0FBRUE7OztJQUdJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0dBQ25CLHdDQUFnQztXQUFoQyxnQ0FBZ0M7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWdkaXZcclxue1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4xLndlYnApOyAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9naW1nXHJcbntcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsNTBweCk7XHJcbn1cclxuLmNhcmQtY29udGFpbmVyXHJcbntcclxuYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcclxucGFkZGluZzogOTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQ1Y2VlZTtcclxuICAgIHdpZHRoOiAxNiU7XHJcbiAgICBoZWlnaHQ6IDMwM3B4O1xyXG5tYXJnaW4tbGVmdDogNTklO1xyXG5tYXJnaW4tdG9wOiAzJTtcclxuLyogYmFja2dyb3VuZDo7ICovXHJcbi8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSAsIDI1NSwgMC42KTsgKi9cclxuLyogbmVlZGVkIHN0eWxlcyBiZWxvdyAqL1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbm9wYWNpdHk6IDAuODtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwtNjAwcHgpO1xyXG59XHJcbi5jb250ZW50XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uZnVsbC13aWR0aFxyXG57XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG4udG9vbGJhcndpZHRoXHJcbntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YzFhO1xyXG5vcGFjaXR5OiAwLjg7XHJcbn1cclxuZm9udHtcclxuY29sb3I6IHJnYigxOTQsIDIxLCAyMSk7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjMyLCAyMzIpO1xyXG59XHJcbiAgXHJcbiNuYW1le1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwcHgsLTkwcHgpO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiNtYWluX2RpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiKDI1MCwgMTU1LCAxNCkpOyAqL1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAsMC41KSwgcmdiKDI1MCwgMTU1LCAxNCwwLjUpKTsgXHJcbn1cclxuXHJcbiNkaXZpbWdcclxue1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMThweCwtNXB4KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");





let RegistrationComponent = class RegistrationComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]("", "", "", "");
    }
    onRegister(form) {
        if (form.valid == true) {
            this.router.navigateByUrl('/home');
        }
    }
    registerProcess(form) {
        console.log(form.value);
        let response = this.service.doRegistration(form.value);
        response.subscribe((data) => this.message = data);
    }
    ngOnInit() {
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/sidenav/content/content.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sidenav/content/content.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("pre{\r\n    background-color: grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/sidenav/content/content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sidenav/content/content.component.ts ***!
  \******************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentComponent.prototype, "content", void 0);
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/app/sidenav/content/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#left_div{\r\n    float: left;\r\n    left: 0px;\r\n    height: 1200px;\r\n    margin-right: 30px;\r\n    font-size: 25px;\r\n    \r\n}\r\n\r\nli:hover{\r\n    background-color: rgb(243, 146, 36);\r\n    color: white;\r\n}\r\n\r\nli{\r\n    width: 200px;\r\n    height: 50px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    padding: 15px;\r\n    color: rgb(243, 146, 36);\r\n    border: rgb(243, 146, 36) solid 1px;\r\n    font-weight: bolder;\r\n}\r\n\r\n#right_div{\r\n    display: inline;\r\n    font-size: 20px;\r\n}\r\n\r\n.main\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.qbutton\r\n{\r\n    background-color: rgb(243, 146, 36);\r\n    width: 150px;\r\n  height: 50px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  -webkit-transform: translate(720px,-10px);\r\n          transform: translate(720px,-10px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBQ0E7O0lBRUksbUNBQW1DO0lBQ25DLFlBQVk7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZnRfZGl2e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIFxyXG59XHJcblxyXG5saTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5saXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDE0NiwgMzYpO1xyXG4gICAgYm9yZGVyOiByZ2IoMjQzLCAxNDYsIDM2KSBzb2xpZCAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4jcmlnaHRfZGl2e1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5tYWluXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnFidXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTQ2LCAzNik7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MjBweCwtMTBweCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SidenavComponent = class SidenavComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.currentTopic.subscribe(data => {
            this.topics = data;
            this.m_content = this.topics.intro;
        });
    }
    send_Content(content) {
        this.m_content = content;
    }
    onClick() {
        this.router.navigateByUrl("/" + this.topics.topic);
    }
};
SidenavComponent.ctorParameters = () => [
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/user-login.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-login.service.ts ***!
  \***************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// import { Observable, BehaviorSubject } from 'rxjs';
let UserLoginService = class UserLoginService {
    constructor(http) {
        this.http = http;
    }
    doRegistration(user) {
        return this.http.post("http://localhost:8082/create", user, { responseType: 'text' });
    }
    gettingCredentials() {
        return this.http.get("http://localhost:8082/getAll");
    }
};
UserLoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserLoginService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(firstName, lastname, email, password) {
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hp\Desktop\quiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map