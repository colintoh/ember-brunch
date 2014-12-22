App.IndexRoute = Em.Route.extend({
    redirect:function(){
        this.transitionTo('home');
    }
});

App.Router.map(function(){
    this.route('index',{path:'/'});
    this.route('home');
    this.route('nextpage');
    this.resource('posts', {path: '/posts'}, function(){
    	this.route('new');
    });
});

App.Router.reopen({
    init: function(){
        this.set('rootURL', window.location.pathname);
        this._super();
    }
});