import { useState } from "react";

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const handleSum = () => {
        if (stock > count) {
            setCount(prev => prev + 1);
        }
    };

    const handleRes = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count)
        setCount(initial)
    }

    return (
        <>
            <div className="counter">
                <br />
                <div className="p-2"onClick={handleRes}><strong>-</strong></div>
                <label className="p-2">{count}</label>
                <div className="p-2" onClick={handleSum}><strong>+</strong></div>
            </div>
            <br />
            <button className="bodyButton" onClick={handleAdd}>Agregar al carrito</button>
        </>
    )
}