import { Item, type TypeItem } from "../Item/Item";
import "./Home.css";

type homeProps = {
    store: TypeItem[];
    shouldDiscount: Boolean;
};

export function Home(props: homeProps) {
    const store = [ ...props.store];
    return (
        <div className="Home">
            <h2>Store</h2>
            {store.map((item) => (
                <Item item={item} shouldDiscount={props.shouldDiscount} />
            ))}
        </div>
    );
}
