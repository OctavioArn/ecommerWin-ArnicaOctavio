import { ItemCounter } from "./ItemCounter"
import { useCartContext } from "../contexts/CartContext"

export const ItemDetail = ({ item }) => {
    const { onAdd } = useCartContext()

    const add = (quantity) => {
        onAdd(item, quantity);
    }

    return (
        <section className="box-item">
            <h1>{item.title}</h1><br />
            <img src={item.pictureUrl} width={200} /><br />
            <p>Price ${item.price}</p>
            <p>{item.description}</p>
            <p>Stock: {item.stock}</p>
            <ItemCounter onAdd={add} stock={item.stock} initial={1} />
        </section>
    )
}