import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useCartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const { items } = useCartContext();

    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);

    return (
        <>
            <Link to="/cart">
                <img src={cart} alt="Changuito" width={35} />
                <span>{total}</span>
            </Link>
        </>
    );
};
