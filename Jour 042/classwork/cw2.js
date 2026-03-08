// 2) შექმენით ობიექტი სახელად math, დაამატეთ მათემატიკური კუთვნილებები(კონსტანტები) მაგ: Pi, შემდეგ დაამატეთ მატემატიკური ფუნქციები add, subtract, multiply, divide და ასშ რამდენიც მოგესურვებათ, ახსენით კომენტარებიტ რა არის მეთოდი და  this


let math = {
    pi: 3.14,

    add :  function(num1, num2){
        return num1  + num2
    }, 

    subtract: function(num1, num2){
        return num1 - num2 
    }, 

    multiply: function(num1, num2){
        return num1 + num2
    },

    devide:  function(num1, num2){
        return num1 / num2
    }
}


console.log(math.multiply(2, 4))


// მეთოდი არის დანამარი ჩვენს ობიქტში რომელსაც აქვს სახელი ხოლო vaule-დ მას აქვს ანონუმური ფუნქცია 

// this --> JavaScript-ში ეს არის სპეციალური საკვანძო სიტყვა, რომელიც ეხება შესრულების კონტექსტს - ობიექტს, რომელიც ამჟამად კოდის შესრულების ფოკუსია.