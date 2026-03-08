// 3) შეასრულეთ codewars - ები, Js - ით 


// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    let vowels = "AEIOUaeiou"
    res = []
    
    for (let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
        res.push(str[i])
        }
    }
    
    return res.join("")
}
// https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/javascript

function oddBall(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr.indexOf('odd')){
        return true
        }
    }
    return false
}
