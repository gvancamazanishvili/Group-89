// 3) შექმენით map, filter, forEach მეთოდების clone - ი


// map
const numbers = [1, 2, 3, 4, 5];

const map = (array, cb) => {
    const result = [];
    for(let i = 0; i < array.length; i++){
        result.push(cb(array[i]));
    };
    return result;
};

console.log(map(numbers, (number) => {
    return number + 10
}));

// filter
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


// forEach 

const Numbers = [1, 2, 3, 4, 5];

const forEach = (array, cb) => {
    for(let i = 0; i < array.length; i++){
        cb(array[i]);
    };
};

forEach(Numbers, (num) => {
    console.log(num);
});