import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db, "items"), where("category", "==", id))

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) setItems("no results");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, [id]);


    return (
        <section className="box">
            <h1>
                <strong>{props.greeting}</strong>
            </h1>
            <ItemList items={items} />
        </section>
    );
};
