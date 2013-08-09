Ember-Brunch
============

Ember-Brunch embodies [modern web development flow](http://www.youtube.com/watch?v=vDbbz-BdyYc) with the help of brunch.io and the ember.js framework. With Ember-Brunch, you can:

- Organize your javascript files into modules. 
- Import modules into local scope and prevent them from polluting the global scope.
- Ember provides a MVC structure for your front-end development
- Automatically JS-hint your files when you save them.
- Brunch provides all sort of preprocessors: LESS, STYLUS, JADE, TYPESCRIPT etc...
- Build a production-ready app with just a single command and be ready to deploy.


Dependencies:
    
  - Install Node.js: http://nodejs.org/download/
  - Install the latest Brunch(>=1.7.0): ``` npm install -g brunch```
  - Install command line tool from XCode
  - Install scaffolt if you want to use generator: *(Optional but highly recommended)* ``` npm install -g scaffolt```

Getting Started
===========

Create a new app with the skeleton:
```brunch new https://github.com/colintoh/ember-brunch.git [appname] ```

Start the server and watch:
```cd [appname] && brunch watch -s```

Deployment
===========
Build a production folder:
```brunch build -o```

Your app will be compiled and minified into the  ```public``` folder. Upload that folder to any host(S3 etc) and you are done!

File Structure
==============

The ```app``` folder stores all file that you will need to start the project. ```app/helper``` stores all your controller+view files. ```app/templates``` and ```app/styles``` stores your handlebars templates and css respectively.

```templates.js``` and ```helper.js``` contains all the files that you want your projects to import in when the server runs. And lastly, ```router.js``` is where you configure your routing.

Generate scaffold
==================
Without generators, you will have to manually type in alot of repetitive code. With the node module ```scaffolt```, you can easily generate controllers, views and template files and append them to the ```templates.js``` and ```helper.js``` files. 

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
