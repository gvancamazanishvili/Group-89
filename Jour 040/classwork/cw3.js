// 3) შექმენით arrow function, რომელიც მიიღებს ერთ პარამეტრს age, თქვენი დავალებაა, რომ შეამოწმოთ თუ age >= 18 მაშინ დააბრუნეთ 'The user is an adult' სხვა შემთხვევაში კი 'The user is a kid', გამოიყენეთ single block line 


const checkAge = (age) => {
    if(age > 18){
        return 'The user is an adult'
    } else {
        return 'the user is a kid'
    }
}