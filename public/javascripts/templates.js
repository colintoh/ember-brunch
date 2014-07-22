(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("templates/_nav", function(exports, require, module) {
Ember.TEMPLATES["_nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      		<a href=\"#\"> Home</a>\n      	");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      		<a href=\"#\"> NextPage</a>\n      	");
  }

  data.buffer.push("<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n    <ul class=\"nav\">\n      	");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "linkTo", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      	");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "nextpage", options) : helperMissing.call(depth0, "linkTo", "nextpage", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n</div>");
  return buffer;
  
});
module.exports = module.id;
});

require.register("templates/application", function(exports, require, module) {
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n\n	");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "nav", options) : helperMissing.call(depth0, "partial", "nav", options))));
  data.buffer.push("\n\n	 <div class=\"well\">\n    <h1>Parent view: Application</h1>\n    	\n    	<div class=\"well\">\n    		<p class=\"muted\">Child view:</p>\n	        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    </div>\n    </div>\n\n</div>");
  return buffer;
  
});
module.exports = module.id;
});

require.register("templates/home", function(exports, require, module) {
Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Go to next page");
  }

  data.buffer.push("<h2> This is a home view </h2>\n");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{
    'classNames': ("btn btn-success")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "nextpage", options) : helperMissing.call(depth0, "linkTo", "nextpage", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
module.exports = module.id;
});

require.register("templates/nextpage", function(exports, require, module) {
Ember.TEMPLATES["nextpage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Go back to home page");
  }

  data.buffer.push("<h2> This is the next page.</h2>\n");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{
    'classNames': ("btn btn-success")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "linkTo", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
module.exports = module.id;
});


//# sourceMappingURL=templates.js.map