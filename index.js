function towerOfHanoi(disc, src, aux, dst, move = 0){
    if(disc > 0){
        towerOfHanoi(disc - 1, src, dst, aux, move);
        console.log("Move #: " +move+ " disc " + disc + " from " + src + " to " + dst);
        move++;
        towerOfHanoi(disc - 1, aux, src, dst, move);
    }
}

// towerOfHanoi(3, "src", "aux", "dst");

//#12-1 Counting Sheep drill
function countingSheep(n) {
    for (let i = 0; i < n+1; i++) {
        if (i < n) {
            console.log(`${n-i}: Another sheep jumps over the fence`);
        } else {
            console.log('All sheep have jumped over the fence!')
        }
    }
}

// countingSheep(3);

//#12-2 Power Calc drill
function powerCalculator(base, exp) {
    let product = 1;
    for(let i = 0; i < exp; i++) {
        product *= base;
    }
    return product;
}

// console.log(powerCalculator(2, 4));
// console.log(powerCalculator(10, 2));

function reverseString(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str.slice(i, i + 1)
    }
    return reversedStr;
}
// console.log(reverseString('hello'));

function triangularNumber(n){
    let sum = 0;
    for(let i = 1; i < n + 1; i++){
        sum += i;
    }
    return sum;
}
// console.log(triangularNumber(3))

function stringSplitter(str, separator){
    let splitString = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== separator){
            splitString += str.slice(i, i + 1);
        }
    }
    return splitString;
}

// console.log(stringSplitter('02/20/2020', '/'))

function fib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result.pop();
}

// console.log(fib(7))

function factorial(num){
    let result = 1;
    for(let i = 1; i < num + 1; i++){
        result *= i;
    }
    return result;
}

// console.log(factorial(5))