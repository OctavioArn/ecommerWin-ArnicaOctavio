import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    return (
        <section className='box'>
            {item ? <ItemDetail item={item} /> : <>Loading... </>}
        </section>);
}