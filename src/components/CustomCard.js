import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {IMG_URL} from "../api/api";

export default function CustomCard({item}) {
    return (<Card key={item.id} style={{ width: '15rem', margin: '1rem', padding: '1rem',
        display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card.Img style={{ width: '80px' }} src={IMG_URL+item.Foto.formats.thumbnail.url} />
        </div>
        <Card.Body>
            <Card.Title>{item.Titulo}</Card.Title>
            <Card.Text>
                {item.Descricao}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>);
}