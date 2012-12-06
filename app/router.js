var App = require('app');

App.Router = Em.Router.extend({
    
    enableLogging: true,

    root: Em.Route.extend({
        
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'home'
        }),

        home: Em.Route.extend({
            route: '/home',
            goNext : function(router,event){
				router.transitionTo('nextPage');
            },
            connectOutlets: function(router, context){
                router.get('applicationController').connectOutlet('home');
            }
        }),

        nextPage: Em.Route.extend({
			route: '/nextPage',
			goHome :function(router,event){
				router.transitionTo('home');
			},
			connectOutlets:function(router,context){
				router.get('applicationController').connectOutlet('nextpage');
			}
        })
    })
});