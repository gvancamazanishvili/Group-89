// BONUS
// 8) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს წინადადებას, თქვენმა ფუნქციამ უნდა დაითვალოს წინადადებაში არსებული სიტყვების რაოდენობა და დააბრუნოს შედეგი

const countWords = (sentence = "") =>{
    let splitSent = sentence.split(" ")

    return splitSent.length
}

console.log(countWords("Gvanca mazanishvili"))