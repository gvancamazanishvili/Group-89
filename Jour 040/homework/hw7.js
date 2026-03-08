// 7) შეასრულეთ codewars - ები

// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name){
    return `Hello, ${name} how are you doing today?`  
}

// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array) {
    let mostDigs = array[0];
    for (let i = 1; i < array.length; i++) {
        if (String(array[i]).length > String(mostDigs).length) {
        mostDigs = array[i];
        }
    }
    return mostDigs;
    }