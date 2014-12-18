test('title can be updated in home controller', function(){
  var home = App.HomeController.create({
    title: 'This is a home view'
  });
  home.updateTitle();
  equal(home.get('title'), 'THIS IS A HOME VIEW', '');
});