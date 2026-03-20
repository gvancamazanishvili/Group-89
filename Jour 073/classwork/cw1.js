// 1) შექმენით კონსტანტა myDiv სადაც შექმნით მრავალხაზიან div ბლოკს 3 ელემენტით, 
//  <h1> სათაურში ჩასმული გექნებათ ტექსტი Hello, name, შემდეგ პარაგრაფი რომლის  
// class ატრიბუტიც უნდა გქონდეთ ცვლადით მინიჭებული და საბოლოოდ ღილაკი რომელზეც 
// დაკლიკებისას უნდა გამოიტანოთ გამაფრთხილებელი მესიჯი Hello World.

import { toast, ToastContainer } from "react-toastify"

// კომენტარებით აუცილებლად ახსენით რატომ ვიყენებთ React ში className და {}.

// className --> არის იგივე რაც class html-ში თუმცა 
// რადგან javaScript-ში class უკვე არის რეზერვირებული სიტყვა ამიტომაც React-ში ვიყენებთ className-ს

// {} ---> იგივე რაც string literal ის ჩვენ საშვალებას გვაძლევს რომ ჩავსვათ გამოსახულებები. 
// მაგ: ფუნქცია, ცვლადები... 

function App() {

    const name = 'name'

    const handleClick = () => {
        toast.error("Hello world!!!")
    }
    const mydiv = 
    <div>
        <h1>hello Gvanca</h1>
        <p className={name}>Bonjourrr</p>
        <button onClick={handleClick}>Click</button>
    </div>
    return(
        <> 
        {mydiv}
        <ToastContainer/>
        </>
    )
    }
export default App;