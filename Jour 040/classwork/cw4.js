// 4) შექმენით მასივი რომელიც შედგება სიტყვებისგან, შექმენით function expression, რომელსაც გადეცემა ორი არგუმენტი array, word თქვენი დავალებაა, რომ დააბრუნოთ მასივიდან მოცემული სიტყვის index


const findIndex = function(word, arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === word){
            return i;
        }
    }
    return -1 
}

let words = ["Gvanca", "mamaia", 'hellouu', 'wassap']

console.log(findIndex('Gvanca', words))