/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

      //This loops through the items in allFeeds and checks that they are
      //defined, and that they aren't blank. 
         function testURL(i, key){
         it('should have a ' + key + ' defined', function(){
            expect(allFeeds[i][key]).toBeDefined();
            expect(allFeeds[i][key]).not.toBe('');
         });
     }
        //This loop checks the length of the URL property of the allFeeds object
        for (var i = 0; i < allFeeds.length; i++){
            testURL(i, 'url');
        }

        //This loop checks the name property of the allFeeds object.
        for (var i = 0; i < allFeeds.length; i++){
            testURL(i, 'name')
        };
});

    //A test suite for the menu
    describe('The menu', function(){
        var menuClassList = document.body.classList;
        //The menu should be hidden by default-check to see that it has class 'menu-hidden' 
        it('should have the menu-hidden class by default', function(){
            expect(menuClassList.contains('menu-hidden')).toBe(true);
        });
    });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          // it('should change visibility when the icon is clicked', function(){
          //   expect()
          // });



    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
