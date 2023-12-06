import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

const initialValues = {
    email: "",
    name: "",
    phone: ""
}

export const CartForm = () => {
    const { buyer, setBuyer, clear } = useState(initialValues);

    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            }
        })
    }

    const sendOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada!");
                setBuyer (initialValues);
                clear ();
            }
        });
    };



return (
    <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={buyer.email} onChange={handleChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={buyer.name} onChange={handleChange} name="name" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={buyer.phone} onChange={handleChange} name="phone" />
        </Form.Group>
        <button className="bodyButton p-1" onClick={sendOrder ()} href="#">
            Enviar
        </button>
    </Form>
);
    
}

