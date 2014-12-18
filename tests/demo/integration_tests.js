test('clicking "Go to next page" button redirects to /nextpage', function(){
  App.reset();
  visit('/home').then(function(){
    ok(exists('h2.home-title'));
    return click("a#nextpage-btn");
  }).then(function() {
    equal(find("h2").text().trim(), 'This is the next page.', '');
  });
});