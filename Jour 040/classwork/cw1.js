// 1) კომენტარების სახით ახსენით განსხვავება function declaration, function expressions, arrow functions - შორის, თითოეულზე მოიყვანეთ მაგალითი


//  function declaration


// ფუნქციის შესაქმნელად ვიყენებთ function keyword-ს, მის შემდეგ ვწერთ უკვე ფუნქციის სახელს, ორ ფრჩხილს და { } - ფუგურულ ფრჩხილებს
// მაგალითად:


function greetWorld() {
    console.log('Hello, World!');
}



// function expressions

/* ჩვენ შეგვიძლია რომ ფუნქია შევინახოთ ცვლადში რის შედეგადაც ჩვენ აღარ გვიწევს რომ ფუნქცის კიდევ ცალკე დავარქვათ რაიმე სახელი. ასეთ ფუნქციებს Anonymous Functions ეწოდება, ანუ მას არ გააჩნია ფუნქციის სახელი. */


const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
        return true
    } else{
        return false
    }
}

console.log(plantNeedsWater('Tuesday'))


// Arrow Functions - ისრის ფუნქციები 

/* ისრის ფუნქციები იწარმოება ეგრედ წოდებული "მსუქანი ისრის" დახმარებით რომელიც ასე იწერება --> ( => ). 

ისრის ფუნქცია საშვალებას გვაძლევს რომ უფრო შემოკლებით დავწეროთ კოდი და ასევე საშვალბას გვაძლებს რომ function keyword აღარ გამოვიყენოთ. 

სინტაქსი: () => {
    
} */

const rectangleArea = (width, height) => {
  let area = width * height;
    return area;
};
