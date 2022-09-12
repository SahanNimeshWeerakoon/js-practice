
(function(global, name) {
    let greeting= 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + '' + name);
}(this, 'Sahan'));

console.log(greeting);