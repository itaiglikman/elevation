import "./Item.css";

export type TypeItem = {
    item: string;
    price: number;
    discount: number;
    hottest: Boolean;
};

type ItemProps = {
    item: TypeItem,
    shouldDiscount: Boolean
}

export function Item(props: ItemProps) {
    const item = {...props.item};
    const shouldDiscount = props.shouldDiscount;
    console.log(shouldDiscount);
    
    const displayedPrice =
        shouldDiscount
            ? Math.floor(item.price * (1 - item.discount))
            : item.price;
    return (
        <div className="Item">
            <div>{item.item}: ${displayedPrice}</div>
        </div>
    );
}
