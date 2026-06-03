let myName = 'Ryan';

function sayName() {
    console.log(myName);
}

sayName(); // Logs 'Ryan' to the console

function outer() {
    // This variable is private to the outer function and cannot be accessed from the global scope!
    let message = 'Whats up World?';
    function inner() {
        console.log(message);
    }

    inner();
}

outer();
