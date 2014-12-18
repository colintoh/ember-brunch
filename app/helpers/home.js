var App = require('app');

App.HomeController = Em.Controller.extend({
  title: 'This is a home view',

  updateTitle: function(){
    this.set('title', this.get('title').toUpperCase());
  }
});


App.HomeView = Em.View.extend({
	didInsertElement:function(){
		
	}
});