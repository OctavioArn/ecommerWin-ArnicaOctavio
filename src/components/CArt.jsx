import { useCartContext } from "../contexts/CartContext";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const Cart = () => {
    const { items, clear, onRemove, onAdd } = useCartContext();
    const navigate = useNavigate();

    const total = items.reduce((acumulador, valorActual) => acumulador + (valorActual.quantity * valorActual.price), 0);
    
    if (!items.length) {
        return (
            <section className='box-item'>
                <h2>Sin elementos</h2>
                <button className="bodyButton" onClick={() => navigate("/")}>Volver al Home</button>
            </section>
        )
    }

    return (
        <section className='changuito'>
            <div>
                {items?.map((item) => (
                    <Card className='p-2 m-2 cardChanguito' key={item.id} style={{ width: '16rem', padding: '5px' }}>
                        <Card.Img variant="top" src={item.pictureUrl} />
                        <Card.Body>
                            <Card.Title><strong>{item.title}</strong></Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush cardBody">
                            <ListGroup.Item>${item.price}</ListGroup.Item>
                            <ListGroup.Item>Cantidad: {item.quantity}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <button className="bodyButton p-1" onClick={() => onRemove(item.id)} href="#">
                                Eliminar producto
                            </button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div>
                <p>Total: ${total}</p>
                <div>
						<button onClick={clear} className='bodyButton'>
							Vaciar Carrito
						</button>
						<Link to={'/checkout'} className='bodyButton'>
							Finalizar Compra
						</Link>
					</div>
            </div>
        </section>
    );
}

