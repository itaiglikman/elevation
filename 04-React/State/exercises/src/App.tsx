import { useState } from "react";
import "./App.css";
import { Home } from "./Components/StoreArea/Home/Home";
import { Landing } from "./Components/StoreArea/Landing/Landing";

function App() {
    const data = {
        user: "Robyn",
        store: [
            { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
            { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
            {
                item: "Surround Sound Pelican",
                price: 3099,
                discount: 0.05,
                hottest: true,
            },
        ],
        shouldDiscount: true,
        currentPage: "Landing",
    };

    const [page, setPage] = useState<string>("Landing");

    return (
        <div className="App">
            {/* <Hudini /> */}
            <button onClick={() => setPage("Home")}>Home</button>
            <button onClick={() => setPage("Landing")}>Landing</button>
            {page === "Home"
                ? <Home store={data.store} shouldDiscount={data.shouldDiscount} />
                : <Landing user={data.user} store={data.store} />
            }
        </div>
    );
}

export default App;
