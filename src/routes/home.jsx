import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from "../components/menu";
import Footer from "../components/footer";
import '../styles/home.css';
import 'animate.css';

function AutoLayoutExample() {
  return (
    <div>
        <Menu />
        <Container fluid className="cabecera">
            <div className="img-fondo">
                <img src="/images/frasco-portada.png" alt="Humaya" />
            </div>

            <div className="texto-frente">
                <Row>
                    <Col className="titulo-portada" md={{ span: 6, offset: 3 }}><h1 className='animate__animated animate__pulse'>HUMAYA</h1></Col>
                </Row>
                <Row className="py-5">    
                    <Col></Col>

                    <Col className="calidad flex m-3 p-4">
                        <div className="text-center">
                            <p>Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, acompañánote en los momentos más dulces e importantes de tu vida</p>
                        </div>
                    
                        <div className="text-center icons">
                            <h2>LA MEJOR CALIDAD PARA VOS</h2>
                            <div className="q-icons">
                                <img
                                src="images/organic.png"
                                width="100"
                                height="100"
                                alt="Orgánico"/>
                                <img
                                src="images/tacc.png"
                                width="100"
                                height="100"
                                alt="Orgánico"/>
                                <img
                                src="images/preservant.png"
                                width="100"
                                height="100"
                                alt="Orgánico"/>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <div>
                            <Link to="/recetas">
                                <img 
                                src="/images/recetario.png" 
                                width="60%" 
                                alt="recetas"
                                />
                            </Link>  
                        </div>
                        
                    </Col>
                </Row>
            </div>
            
            
        </Container>
        
        <footer>
            <Footer />
        </footer>
        
    </div>
    
  );
}

export default AutoLayoutExample;
