// 1) App ფუნქციაში, შექმენით მასივი სადაც გექნებათ მოცემული ობიექტები პროდუქტების შესახებ, თითოეულ პროდუქტს უნდა ჰქონდეს სახელი, ფასი, აღწერა, ფოტო და id (დაუწერეთ AI ბრძანება რომ შექმნას თქვენთვის 10 ელემენტიანი მასივი), შემდეგ ეს 10 პროდუქტი უნდა დაარენდეროთ ეკრანზე map მეთოდის დახმარებით.



function App() {
    const products = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 999,
            description: "Apple-ის უახლესი სმარტფონი",
            image: "https://example.com/iphone.jpg"
        },
        {
            id: 2,
            name: "MacBook Air",
            price: 1299,
            description: "მსუბუქი და სწრაფი ლეპტოპი",
            image: "https://example.com/macbook.jpg"
        },
        {
            id: 3,
            name: "AirPods Pro",
            price: 249,
            description: "უსადენო ყურსასმენი ხმაურის გამორთვით",
            image: "https://example.com/airpods.jpg"
        },
        {
            id: 4,
            name: "iPad Mini",
            price: 499,
            description: "კომპაქტური და მძლავრი პლანშეტი",
            image: "https://example.com/ipad.jpg"
        },
        {
            id: 5,
            name: "Samsung Galaxy S24",
            price: 849,
            description: "Samsung-ის flagship სმარტფონი",
            image: "https://example.com/samsung.jpg"
        },
        {
            id: 6,
            name: "Sony WH-1000XM5",
            price: 349,
            description: "პრემიუმ ყურსასმენი ხმაურის გაუქმებით",
            image: "https://example.com/sony.jpg"
        },
        {
            id: 7,
            name: "Dell XPS 15",
            price: 1599,
            description: "მძლავრი ლეპტოპი პროფესიონალებისთვის",
            image: "https://example.com/dell.jpg"
        },
        {
            id: 8,
            name: "Apple Watch Series 9",
            price: 399,
            description: "სმარტ საათი ჯანმრთელობის მონიტორინგით",
            image: "https://example.com/applewatch.jpg"
        },
        {
            id: 9,
            name: "GoPro Hero 12",
            price: 399,
            description: "მოქმედების კამერა 5K ვიდეოთი",
            image: "https://example.com/gopro.jpg"
        },
        {
            id: 10,
            name: "PlayStation 5",
            price: 499,
            description: "Sony-ის უახლესი სათამაშო კონსოლი",
            image: "https://example.com/ps5.jpg"
        }
    ]
    return (
        products.map(product =>  {
            return(
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <h3>{product.price}</h3>
                        <img src={product.image}/>
                    </div>
                    )
                    
        })
    )
}
export default App;       