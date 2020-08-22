
module("About Regular Expressions (topics/about_regular_expressions.js)");

test("exec", function() {
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    console.log(results);
    ok(results.equalTo([FILL IN]), 'what is the value of results?');
});

test("test", function() {
    var containsSelect = /select/.test("  select * from users ");
    equals(containsSelect, [FILL IN], 'does the string provided contain "select"?');
});

test("match", function() {
    var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    ok(matches.equalTo([FILL IN]), 'what is the value of matches?');
});

test("replace", function() {
    var pie = "apple pie".replace("apple", "strawberry");
    equals(pie, [FILL IN], 'what is the value of pie?');

    pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
        var map = {'6': 'six','9': 'nine'};
        return map[number];
    });
    equals(pie, [FILL IN], 'what is the value of pie?');
});

// THE END