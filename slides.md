%title: Latino/a developer of Atlanta - Angular 1 & 2 Workshop
%author: Eduardo Gonzalez y Roman Sanchez
%date: 01-19-2017

-> Angular 1 & 2 Workshop
-> Lead by Eduardo Gonzalez and Roman Sanchez <-
=========


-> *Latino/a* Developers of *Atlanta*. <-


-> ▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜ <-
-> ▌ *Bienvenidos amigos y amigas!* ▐ <-
-> ▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟ <-

-------------------------------------------------

-> # Topics <-

\# 1. *Sample project*
\# 2. Intro
\# 3. *AngularJS*
\# 4. MVC (Model-View-Controller)
\# 5. *Data Binding*
\# 6. TDD (Test-driven Development)
\# 7. *Questions*

-------------------------------------------------

-> # Sample project <-

Here is the project -> https://github.com/eduardogch/Angular-ATLatino-Workshop

Ensure *Git, Node.js and NPM* are installed prior to setup.

In *terminal* run the following *commands*:

\    git clone https://github.com/eduardogch/Angular-ATLatino-Workshop
\    npm install
\    npm start

-------------------------------------------------

-> # Intro <-

Please introduce yourself.

\# Where are you from?
\# Are you a *developer*?
    \- What are yours IT skills?
\# Do you speak *Spanish*?

-------------------------------------------------

-> # AngularJS <-

*AngularJS* is framework for dynamic web apps. It lets you use *HTML* as your template language and lets you extend HTML's syntax to express your application's components clearly.

-> *JavaScript Technologies* <-
\- JavaScript -> ES5, ES6, typescript, babel
\- NodeJS & NPM
\- Gulp, Bower, Express
\- Karma, Jasmine, Mocha, Chai, PhantomJS
\- Browserify, Commons.js, Watchify

-------------------------------------------------

-> # MVC - Model-View-Controller <-

*Model-View-Controller* (MVC) is a design pattern who assigns three roles in an application.

\- *Model*: It is *responsible* to get and maintaining *data*.
\- *View*: It is *responsible* for *displaying* data to the *user*.
\- *Controller*: It is *responsible* to controls the *interactions* between the *Model and View*.

-------------------------------------------------

-> # Data Binding <-

*Data binding* in AngularJS is the *synchronization* between the *model* and the *view*.

\   <html ng-app>
\       <head>
\           <script src='angular.js'></script>
\           <script src='holaMundo.controller.js'></script>
\       </head>
\       <body ng-controller='UserController'>
\           <div>Hi {{user.name}}</div>
\       </body>
\   </html>

*Angular holaMundo.controller.js*
\   function holaMundo($scope) {
\     $scope.user = { name:'Eduardo' };
\   }

-------------------------------------------------

-> # TDD <-

*Test-driven Development* (TDD) is a development technique where you must first write a test that
*fails* before you write new functional code.


\    describe('Users factory', function() {
\        it('has a dummy spec to test 2 + 2', function() {
\            expect(5).toEqual(4);
\        });
\    });

-------------------------------------------------

-> # Questions <-

I hope you like this presentation!!!

▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜
▌  *Muchas Gracias!*  *Hay Preguntas?* ▐
▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟

[Email](eduardo.gch@gmail.com).
[Twitter](https://twitter.com/eduardochavira_).
[GitHub](https://github.com/eduardogch).
