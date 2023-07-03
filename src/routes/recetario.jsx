import React, { useState } from 'react';
import { Container, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { dataRecetas } from '../data/recetas';
import Menu from "../components/menu";
import Footer from "../components/footer";
import "../styles/recetario.css"

function Recetario() {

  const [showModal, setShowModal] = React.useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const openModal = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

 
  return (
    <div className='recetario'>
      <header>
        <Menu />
      </header>
      <main>
        <Container className='justify-content-center'>

          <div className='text-center py-3'>
            <img 
              src="/images/recetas.png" 
              height="100px" 
              alt="recetas"
            />
          </div>
          
          <Row>
            {dataRecetas.map((item) => (
            <Col className="col-xs-12 col-sm-6 col-md-4 col-lg-3"  key={item.id}>

              <Card className="card text-white bg-info mb-3">
                <div className='c-overflow'>
                  <Card.Img variant="top" src={item.foto} />
                </div>
                
                <Card.Body className='text-center'>
                  <Card.Title><h3 style={{ height: '100px' }}className='text-dark'>{item.nombre}</h3></Card.Title>
                  <div className='mb-0'>
                    <Button variant="light" onClick={() => openModal(item.id)}>Receta</Button>
                  </div>
                </Card.Body>

              </Card>
              
              <Modal className='text-dark' show={showModal && selectedRecipeId === item.id} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title><h3>{item.nombre}</h3></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div className='text-center border border-solid rounded py-2'>
                    <img src={item.foto} width="370px" alt="..." />
                  </div>
                  <div>  
                    <ul>
                      {item.ingredientes.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                      ))}
                    </ul>
                    <p>{item.preparacion}</p>
                  </div>
                  
                </Modal.Body>

                <Modal.Footer>
                
                </Modal.Footer>
              </Modal>


            </Col>
          ))}
          </Row>
        </Container>
      </main>  
      
      <footer>
       <Footer /> 
      </footer>

    </div>
    
    
  );
}


export default Recetario;