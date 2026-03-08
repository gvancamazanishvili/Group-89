// 3) მომხმარებელს შემოატანინეთ password, დაწერეთ ფუნქცია, რომელიც შეამოწმებს პაროლის სიძლიერეს, თუ პაროლი შეიცავს punctuation character - ს და მოცემული პაროლის სიგრძე მეტია 6 - ზე ან პაროლი შეიცავს რიცხვს გამოიტანეთ message - 'Your password is strong' სხვა შემთხვევაში კი 'Your password is weak' 



const checkPass = (pass) => {
    let hasPunctuantion = false;
    let hasNumber = false 
    let punctuation = '!@#$%&*()?.'

    for (let i = 0; i < pass.length; i++){
        let char = pass[i];
        if(char >= '0' && char <= '9'){
            hasNumber = 'true';
        }else if(char == punctuation[i]){
            hasPunctuantion = true;
        }
    }

    if ((hasPunctuantion && pass.length > 6) || hasNumber){
        return 'Your password is strong'
    }else{
        return 'your password is weak'
    }
}

console.log(checkPass("hello$231213"))

