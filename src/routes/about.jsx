import Menu from "../components/menu";
import '../styles/about.css';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import Footer from "../components/footer";

export default function About(){

  const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
      <div>
        <Menu />
          <section className="about-us">

            <Container className="text-center">
              <Row >
                <Col className="py-5">
                  <h1>Estamos Orgullosos de Nuestro Origen</h1>
                  <p className="card-text pt-3">Más de 2 mil familias de ganaderos bovinos en Buenos Aires, Córdoba, Entre Ríos y Santa Fe, crían con mucho amor a las vaquitas para proveernos leche de la mejor calidad con la que hacemos nuestras dulces.</p> 
                </Col>
                
              </Row>

              <Row className="text-center carrusel">
                <Col className="py-3">
                  <h2 className="pb-5">Nuestros Clientes</h2>
                  <div className="carousel-app">

                    <Carousel 
                    swipeable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    >
                      <div>
                        <img 
                        src='./images/1.png'
                        alt='Arcor' 
                        />
                      </div>
                      <div>
                        <img
                        src='./images/2.png'
                        alt='Holanda'
                        />
                      </div>
                      <div>
                        <img
                        src='./images/3.png'
                        alt='Nestlé'
                        />
                      </div>  
                      <div>
                        <img
                        src='./images/4.png'
                        alt='Fel Fort'
                        />
                      </div>
                      <div>
                        <img
                        src='./images/5.png'
                        alt='Bonafide'
                        />
                      </div>
                    </Carousel>

                  </div>
                </Col>
                
              </Row>
            </Container>  
          </section>

          <footer>
            <Footer /> 
          </footer>  
           
        </div>
    );
}