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

        // This loops through the items in allFeeds and checks that they are
        // defined, and that they aren't blank
        function testURL(i, key) {
            it('should have a ' + key + ' defined', function() {
                expect(allFeeds[i][key]).toBeDefined();
                expect(allFeeds[i][key]).not.toBe('');
            });
        }
        // This loop checks the length of the URL property of the allFeeds object
        for (var i = 0; i < allFeeds.length; i++) {
            testURL(i, 'url');
        }

        // This loop checks the name property of the allFeeds object.
        for (var i = 0; i < allFeeds.length; i++) {
            testURL(i, 'name');
        }
    });

    // A test suite for the menu functionality
    describe('The menu', function() {
        var menuClassList = document.body.classList;
        // The menu should be hidden by default-check to see that it has class 'menu-hidden' 
        it('should have the menu-hidden class by default', function() {
            expect(menuClassList.contains('menu-hidden')).toBe(true);
        });

        //This test checks to see that the menu hides/shows based on icon click
        it('toggles visibility when the menu icon is clicked.', function() {
            var menuBtn = $('.menu-icon-link');
            $(menuBtn).click();
            expect(menuClassList.contains('menu-hidden')).toBe(false);
            $(menuBtn).click();
            expect(menuClassList.contains('menu-hidden')).toBe(true);
        });
    });

    // This test checks to see that there is at least 1 entry in the .feed container
    // after the loadFeed function is run
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Then length of .entry should not be 0
        it('Should have at least one entry in the feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });


    // This is a test to make sure that new feeds are being loaded after selection. 
    // It compares the first feed to the newly selected feed. They should be different.
    // Help with this from https://discussions.udacity.com/t/p6-new-feed-selection-test-question-problem/15562/4
    // and 
    describe('New Feed Selection', function() {

        // Variable to be used for the first feed
        var startFeed;

        // Async usage requires beforeEach
        beforeEach(function(done) {
            loadFeed(1, function() {
                // assign startFeed the value of the .feed element
                startFeed = $('.feed').html();
                done();
            });
        });

        it('should change content', function(done) {
            loadFeed(0, function() {
                // expect that the new feed will NOT be the same as startFeed
                expect($('.feed').html()).not.toEqual(startFeed);
                done();
            });
        });
    });
}());