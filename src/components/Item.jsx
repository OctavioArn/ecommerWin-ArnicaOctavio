import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
	return (
			<Card className="p-2 m-2 cardBody" style={{ width: '15rem' }}>
				<Card.Img variant="top" src={item.pictureUrl} style={{width: '90%'}} />
				<Card.Body className='cardBody'>
					<Card.Title><strong>{item.title}</strong></Card.Title>
					<Card.Text>
						{item.description}
					</Card.Text>
					<Card.Text>
						${item.price}
					</Card.Text>
					<Card.Text>
						Stock: {item.stock}
					</Card.Text>
					<Link to={`/items/${item.id}`}>
						<button className="bodyButton">Comprar</button>
					</Link>
				</Card.Body>
			</Card>
		);
	}