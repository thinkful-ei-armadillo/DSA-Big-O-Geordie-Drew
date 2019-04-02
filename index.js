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