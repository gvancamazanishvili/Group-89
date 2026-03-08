// 2) შექმენით მასივი სადაც შენახავთ სიტყვებს, თქვენი დავალებაა, რომ გამოიტანოთ მხოლოდ ისეთი სიტყვები რომლის index - იც იყოფა 2 - ზე



const even =  (arr) => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            res.push(arr[i])
        }
    }   
    return res
}


let words = ["Gvanca", 'mamaia', 'wassap', 'potato', 'mamamiaaaaa']

console.log(even(words))