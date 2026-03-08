// 4) შექმენით მასივი, შეინახეთ მასში სიტყვები, თქვენი დავალებაა, რომ გამოიტანოთ ამ მასივიდან ყველაზე გრძელი სიტყვა (გამოიყენეთ ფუნქცია)



const longestWord = (arr) => {
    let max = ""

    for(let i = 0; i < arr.length; i++){
        if( arr[i].length > max.length){
            max = arr[i]
        }
    }
    return max
}


let words = ["Gvanca", 'mamaia', 'wassap', 'potato', 'mamamiaaaaa']

console.log(longestWord(words))