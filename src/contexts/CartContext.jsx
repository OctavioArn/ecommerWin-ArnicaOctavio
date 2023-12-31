import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = (item, quantity) => {
        const exist = items.some((i) => i.id === item.id);

        if (exist) {
            const updateItems = items.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                } else {
                    return i;
                }
            });
            setItems(updateItems);
        } else {
            setItems((prev) => {
                return [...prev, { ...item, quantity }];
            });
        }
    };

    const onRemove = (id) => {
        const filterItems = items.filter((item) => item.id !== id);
        setItems(filterItems);
    };

    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    return (
        <CartContext.Provider value={{ items, clear, onAdd, onRemove, total }}>
            {children}
        </CartContext.Provider>
    );
};
