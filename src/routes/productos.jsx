import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import Menu from "../components/menu";
import Footer from "../components/footer";
import '../styles/productos.css';
import 'animate.css';

export default function Productos(){
    return (
        <div>
            <Menu />
            <section>
                <div className="title p-3">
                    <h1 className="text-center">NUESTROS PRODUCTOS</h1>
                </div>

                <Container className="productos mb-5 animate__animated animate__bounceInRight">

                    <Row>

                        <Col className='d-flex'>
                            <CardGroup>
                            <Card>
                                <div className="c-overflow">
                                    <Card.Img variant="top" src="images/tradicional.jpg" />
                                </div>
                                
                                <Card.Body className="tradicional text-center">
                                    <Card.Title><h5 className="card-title">Dulce de Leche Tradiconal</h5></Card.Title>
                                    <Card.Text>
                                    Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.
                                    Presentación en frasco de vidrio de 580 gr.
                                    </Card.Text>
                                    <Button variant="light">+ INFO</Button>
                                </Card.Body>
                            </Card>
                        
                            <Card >
                                <div className="c-overflow">
                                    <Card.Img variant="top" src="images/dieta.jpg" />
                                </div>    
                                <Card.Body className="light text-center">
                                    <Card.Title><h5>Dulce de Leche sin Azúcar</h5></Card.Title>
                                    <Card.Text>
                                    Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con Stevia. Presentación en frasco de vidrio de 580 y 280 gr.
                                    </Card.Text>
                                    <Button variant="light">+ INFO</Button>
                                </Card.Body>
                            </Card> 
                       
                           <Card >
                            <div className="c-overflow">
                                <Card.Img variant="top" src="images/choconut.jpg" />
                            </div>    
                                <Card.Body className="choco text-center">
                                    <Card.Title><h5>Dulce Choconut</h5></Card.Title>
                                    <Card.Text>
                                    Combinación de dulce de leche, chocolate y pasta de avellanas. Es una delicia única.
                                    Presentación en frasco de vidrio de  280 gr.
                                    </Card.Text>
                                    <Button variant="light">+ INFO</Button>
                                </Card.Body>
                            </Card>

                            </CardGroup> 
                        </Col>

                    </Row>


                </Container>
   
            </section>

            <Footer />
         
            
        </div>
    );
}