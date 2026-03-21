// 2) შექმენით სახელების მასივი და თითოეული მათგანი ჩასვით პარაგრაფებში შემდეგ კი დაარენდერეთю

function App() {
const names = [
    "Gvanca",
    "Mariam",
    "Nino",
    "Tamar",
    "Salome",
    "Ana",
    "Luka",
    "Giorgi",
    "Davit",
    "Sandro",
    "Nika",
    "Irakli",
    "Tornike",
    "Lasha",
    "Beka",
    "Nutsa",
    "Tekla",
    "Elene",
    "Keti",
    "Mariami"
]

    return (
        names.map(name => {
            return(
                <h1>{name}</h1>
            )
        })
    )
}
export default App;       