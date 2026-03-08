// 2) შექმენით მასივი, სადაც გექნებათ მოცემული რიცხვები, შექმენით ფუნქცია სახელად returnMax რომელიც დააბრუნებს ამ მასივიდან ყველაზე დიდ რიცხვს





function returnMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;

}

let numbers = [2, 3, 4, 5, 6, 7, 100]

console.log(returnMax(numbers));