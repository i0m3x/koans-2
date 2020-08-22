# koans-2
don't forget to 'OPEN IN FILE EXPLORER'

the html file in the main

and the html is linked to a tryMe.js, so pls change that to tryMe...

thanks for tunin' in! Here's some food for thought

  ;)( ;
 :----:     o8Oo./
C|====| ._o8o8o8Oo_.
 |    |  \========/
 `----'   `------'      Javascript tips — Apply vs. Call vs. Bind
https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1


let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting(text) {
   console.log(`${text} ${this.name}`);
}
let helloLeo = greeting.bind(customer1);
let helloNat = greeting.bind(customer2);
helloLeo('Hello'); // Hello Leo
helloNat('Hello'); // Hello Nat
The Bind implementation would be like this:
Function.prototype.bind = function(context) {
    var fn = this;
    return function() {
        fn.apply(context, arguments);
    };
};
