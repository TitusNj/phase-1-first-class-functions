// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

const receivesAFunction =  (callback) =>{
    return callback('This is a callback')

}

// function logNumber(num) {s
//     console.log(`The number is: ${num}`);

// The returnsANamedFunction function should:

// take no arguments
// return a named function

function returnsANamedFunction() {
    return receivesAFunction
}


// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function

function returnsAnAnonymousFunction (){
    return function() {
        return 4 + 3; // You can have any logic inside this anonymous function
    }
}