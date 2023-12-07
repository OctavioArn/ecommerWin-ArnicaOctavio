import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../contexts/CartContext";

const initialValues = {
  email: "",
  name: "",
  phone: "",
};

export const CartForm = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, clear, total } = useCartContext();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const checkFields = () => {
    if (buyer.email === "") {
      return false;
    }
    if (buyer.name === "") {
      return false;
    }
    if (buyer.phone === "") {
      return false;
    }

    return true;
  };

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const correct = checkFields();

    if (!correct) {
      alert("¡Debe completar todos los campos!");
      return;
    }

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert(
          "¡Gracias por su compra! Su orden: " + id + " ha sido completada!"
        );
        setBuyer(initialValues);
        clear();
        navigate("/");
      }
    });
  };

  return (
    <Form className="boxForm">
      <Form.Group className="mb-1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={buyer.email}
          onChange={handleChange}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={buyer.name}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={buyer.phone}
          onChange={handleChange}
          name="phone"
        />
      </Form.Group>
      <button
        type="button"
        className="bodyButton p-1"
        onClick={() => {
          sendOrder();
        }}
      >
        Enviar
      </button>
    </Form>
  );
};
