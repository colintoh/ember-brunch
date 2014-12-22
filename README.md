Ember-Brunch
============

Ember-Brunch embodies [modern web development workflow](http://www.youtube.com/watch?v=vDbbz-BdyYc) with the help of brunch.io and the ember.js framework. Having an awesome development workflow is important because you wants to:

- ***Reduce*** development time.
- ***Reduce*** bugs.
- ***Reduce*** unneccessary premature hairloss.

What ***Ember-Brunch*** can do for you:

- Organizes your javascript files into modules.
- Prevents pollution of the global scope.
- Front-end MVC framework.
- Auto-detects and prompts JS errors after you save the files.
- Auto-reload the browser.
- A buffet selection of preprocessors to save development time: LESS, STYLUS, JADE, TYPESCRIPT etc...
- Build a production-ready app with just a single command and be ready to deploy.


Dependencies:

  - Install Node.js: http://nodejs.org/download/
  - Install Brunch: ``` npm install -g brunch```
  - Install Bower:  ``` npm install -g bower```
  - Install command line tool from XCode
  - Install scaffolt if you want to use generator: *(Optional but highly recommended)* ``` npm install -g scaffolt```
  - Run ```npm start``` to install all dependencies

Getting Started
===========

Create a new app with the skeleton:
```brunch new https://github.com/colintoh/ember-brunch.git [appname] ```

Start the server and watch:
```cd [appname] && brunch watch -s```

Building
========
Build a non-optimized version:
```brunch b```

Build and optimized(minify):
```brunch b -P```

Clean + Build + optimized:
```grunt production```


Static Deployment
===========
Build a production folder:
```brunch b -P```

Your app will be compiled and minified into the  ```public``` folder. Upload that folder to any host(S3 etc) and you are done!

Heroku Deployment
===========

```server.js`` runs a express server with clustering that gzip your static files. Just push to heroku and it's done.

Heroku version: [http://ancient-atoll-5869.herokuapp.com](http://ancient-atoll-5869.herokuapp.com/home)

<!-- #Autolocation

Autolocation is switched on by default in ```app > router.js```. Ember.Autolocation will detect your browser support and switch your URL appearance.

Modern browser will render ```localhost:3333/home``` instead of ```localhost:3333/#/home```.

The only problem with this pretty url is that once user bookmark and visit this page again, the page will not exist because there is no actual ```Home``` resource. To solve this, you will need to run a server and redirect them to the root path. Read ```server.js``` to find out more.

More Info here: [Ember.Autolocation](http://emberjs.com/api/classes/Ember.AutoLocation.html) -->


File Structure
==============

The ```app``` folder stores all file that you will need to start the project. ```app/helper``` stores all your controller+view files. ```app/templates``` and ```app/styles``` stores your handlebars templates and css respectively.

```initialize.js``` is where you import the templates, helpers, router and application modules. ```router.js``` is where you configure your routing.

Generate scaffold
==================
Without generators, you will have to manually type in alot of repetitive code. With the node module ```scaffolt```, you can easily generate controllers, views and template files.

Let's create a **recipe** controller, view and template with the **class** generator.
Inside your application root directory, type ```scaffolt class recipe``` in your terminal. This will generate:

    // Inside helper/recipe.js

    var App = require('app');

    App.RecipeController = Em.Controller.extend({

    });


    App.RecipeView = Em.View.extend({
        didInsertElement: function(){
      }
    });

and a template call *recipe.hbs* in the ```template``` folder:

    The name of the template: recipe

In your ```router.js``` file, manually append your recipe route:

    App.Router.map(function(){
        this.route('index',{path:'/'});
        this.route('home');
        this.route('nextpage');
        this.route('recipe'); <--------- Insert this line
    });

Enter ```localhost:[port-number]/#/recipe``` and you will see your new changes.


Testing
===========

- You may want to install ```karma-cli``` for convenience

Write unit test in `test/unit`

Write integration test in `test/integration`

Run unit/integration test:

`npm run-script unit/integration`

For more resources on testing,

- [Ember Testing](http://emberjs.com/guides/testing/)
- [QUnit](http://qunitjs.com/)

Want to know more about Brunch and Ember?
=================================

[Brunch.io](http://brunch.io/)

Brunch is an assembler for HTML5 applications. It is a simple but powerful build process and pipeline. It’s agnostic to frameworks, libraries, programming, stylesheet & templating languages and backend technology.

[Ember JS](http://emberjs.com/)

A framework for creating ambitious web applications.
