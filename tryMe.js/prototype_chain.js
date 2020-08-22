// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module("About Prototype Chain (topics/about_prototype_chain.js)");

var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("Is there an 'a' and 'b' own property on child?", function () {
  equals(child.hasOwnProperty('a'), [FILL IN], 'child.hasOwnProperty(\'a\')?');
  equals(child.hasOwnProperty('b'), [FILL IN], 'child.hasOwnProperty(\'b\')?');
});

test("Is there an 'a' and 'b' property on child?", function () {
  equals(child.a, [FILL IN], 'what is \'a\' value?');
  equals(child.b, [FILL IN], 'what is \'b\' value?');
});

test("If 'b' was removed, whats b value?", function () {
  delete child.b;
  equals(child.b, [FILL IN], 'what is \'b\' value now?');
});


test("Is there a 'c' own property on child?", function () {
  equals(child.hasOwnProperty('c'), [FILL IN], 'child.hasOwnProperty(\'c\')?');
});

// Is there a 'c' own property on child? No, check its prototype
// Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
test("Is there a 'c' property on child?", function () {
  equals(child.c, [FILL IN], 'what is the value of child.c?');
});


// Is there a 'd' own property on child? No, check its prototype
// Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' property on child?", function () {
  equals(child.d, [FILL IN], 'what is the value of child.d?');
  equals(child.d, [FILL IN], 'what is the value of child.d?');
});

