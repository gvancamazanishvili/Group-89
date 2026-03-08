// 3) შექმენით მასივი სადაც ინახავთ 5 ობიექტს, რომელთაც გააჩნიათ ერთი და იგივე სტრუქტურა, ობიექტებში უნდა იყოს firstname, lastname და age, შემდეგ შექმენით ფუნქცია სახელად filter, რომელსაც გადაეცემა ორი პარამეტრი, პირველი არის მასივი, ხოლო მეორე არის ფუნქცია, გადაუარეთ ციკლით მასივს და თითოეულ;ი მნიშვნელობისთვის გამოიძახეთ ფუნქცია რომელიც გადმოგეცათ, თუ მაგ ფუნქციამ დააბრუნა true დაამატეთ result მასივში რომელიც შექმნილია filter ფუნქციაში, საბოლოოდ დააბრუნეთ result

// შემდეგ გამოიძახეთ ფუნქცია filter და გადაეცით მასივი და  arrow ფუნქცია რომელიც ამოწმებს ობიექტის ასაკს არის ტუ არა მეტი ან ტოლი 18


const people = [
    {
        firstName: 'gvanca',
        lastname: 'mazanishvili',
        age: 18
    },

    {
        firstName: 'io',
        lastname: 'chachua',
        age: 10
    },
    
    {
        firstName: 'dea',
        lastname: 'petenava',
        age: 15
    },

        {
        firstName: 'vero',
        lastname: 'queen',
        age: 16
    },

    {
        firstName: 'ancho',
        lastname: 'kipa',
        age: 15
    }
];

const filter = (array, cb) => {
    const result = [];

    for(let i = 0; i < array.length; i++){
        if(cb(array[i])){
            result.push(array[i]);
        };
    };

    return result;
};

console.log(filter(people, (person) => {
    return person.age >= 18 
}));
