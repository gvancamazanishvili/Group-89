// 3) codesandbox - ში index.jsx ის ფაილიდან შექმენით section - ელემენტი სადაც ჩააშენებთ თქვენთვის სასურველ ელემენტებს შესაბამისი ტექსტებით ან შიგთავსით

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const section = (
    <div>
        <h1>Bonjour</h1>
        <p>Je m'appele Gvanca</p>
    </div>    
);

root.render(section);
