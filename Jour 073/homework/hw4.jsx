// 4) შექმენით ცვლადი სახელად isLoggedIn სადაც შეინახავთ მნიშვნელობას 
// true ან false, ternary operator - ის გამოყენებით იმ შემთხვევაში თუ i
// sLoggedIn - ის მნიშვნელობა უდრის true - ს, მაშინ გამოიტანეთ ინფორმაცია 
// თქვენს შესახებ, აგრეთვე გამოიყენეთ {} - ფიგურული ფრჩხილებიც, სხვა შემთხვევაში კი გამოიტანეთ ტექსტი 'You are not logged in'

function App() {

    const isLoggedIn = false
    const message = 'You are not logged in'
    return (
        <>
        {
            isLoggedIn ?  <h1>Hello, my name is gvanca, i am 16 years old</h1> :
            <h1>{message}</h1>
        }
        </>
    )
    }
export default App;