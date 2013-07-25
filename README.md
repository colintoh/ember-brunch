Ember-Brunch Bootstrap
============

Dependencies:
    
  - Install Node.js: http://nodejs.org/download/
  - Install Brunch: ``` npm install -g brunch```
  - Install command line tool from XCode
  - Install scaffolt if you want to use generator: *(Optional but highly recommended)* ``` npm install -g scaffolt```

Get Started
===========

Create a new app with the skeleton:
```brunch new https://github.com/colintoh/ember-brunch-2359 [appname] ```

Start the server and watch:
```cd [appname] && brunch watch -s```

File Structure
==============

The ```app``` folder stores all file that you will need to start the project. ```app/helper``` stores all your controller+view files. ```app/templates``` and ```app/styles``` stores your handlebars templates and css respectively.

```templates.js``` and ```helper.js``` contains all the files that you want your projects to import in when the server runs. And lastly, ```router.js``` is where you configure your routing.

Generate scaffold
==================
Without generators, you will have to manually type in alot of repetitive code. With the node module ```scaffolt```, you can easily generate controllers, views and template files and append them to the ```templates.js``` and ```helper.js``` files. 

Typing ```scaffolt class recipe``` in your terminal will generate:
    
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
    
In your ```router.js``` file, append your recipe route:

    App.Router.map(function(){
        this.route('index',{path:'/'});
        this.route('home');
        this.route('nextpage');
        this.route('recipe'); <--------- Insert this line
    });
    
Enter ```localhost:[port-number]/#/recipe``` and you will see your new changes.
