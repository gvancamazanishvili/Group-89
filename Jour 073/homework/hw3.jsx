// 3) შექმენით ფუნქცია სახელად AboutMe რომელშიც დაარენდერებთ ელემენტებს, როგორიცაა p, h1, button, img და ასე შემდეგ, მოცემულ ფუნქციაში გამოიტანეთ ინფორმაცია თქვენს შესახებ, შემდეგ კი AboutMe ფუნქცია დააბრუნეთ თქვენს App კომპონენტში


function App() {

    const aboutMe = () => {
        return (
        <div>
            <h1>BonJour</h1>
            <p>my name is gvanca mazanishvili</p>
        </div>
        )

    } 

    return(
        <> 
        {aboutMe()}
        </> 
    )
    }
export default App;