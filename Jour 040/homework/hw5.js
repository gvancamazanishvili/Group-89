// 5) მომხმარებელს შემოატანინეთ მისი სახელი და გვარი, შექმენით ისეთი ფუნქცია რომელიც სახელის და გვარის პირველ ასოს გამოიტანს მაღალ რეგისტრში, მაგალითად

// const name = 'NIno GVinJiLia' ---> 'Nino Gvinjilia'

const title = (name = "", surname = "") => {
    const Name = name.charAt(0).toUpperCase() +  name.slice(1).toLowerCase();
    const Surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
    
    return  `${Name} ${Surname}`
}

console.log(title("gvaNca", "mAzanIshviLi"))

