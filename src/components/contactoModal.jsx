import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/contacto.css';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { HiEnvelope } from "react-icons/hi2";

function MyModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    // Aquí puedes inicializar los valores de tus campos de formulario
    name: '',
    email: ''
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <Button className="btn-contacto" variant="dark" onClick={handleShow}>
        Contacto
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className='titulo'>
          <Modal.Title >Endulza tu vida con nosotros</Modal.Title>
        </Modal.Header>
        <Modal.Body className='contacto'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" className="text-area" rows={3} />
                    </Form.Group>   
                                            
                <Form.Check className="mb-3" type="checkbox" label="newsletter" />
                    <Button variant='light' type="submit">Enviar</Button>
                    <Button className="mx-3" variant='light' type="reset">Borrar</Button>
                                      
            </Form>
        </Modal.Body>
        <Modal.Footer className='contacto' >
          <div className='text-center'>
            <h3>Vanessa Sánchez</h3>
            <p>React Developer</p>
          </div>
          
          <div className='mx-5'>
            <a href='mailto:bvanesanchezp@gmail.com'>
              <HiEnvelope size={30} style={{color: '#fff'}}/>
            </a>
                
            <a href='https://twitter.com/QtieAlpaca'>
              <FaTwitterSquare size={30} style={{color: '#fff'}}/>
            </a>
                
            <a href='https://www.linkedin.com/in/bertha-vanessa-s%C3%A1nchez-posadas-5b05a9208/'>
              <FaLinkedin size={30} style={{color: '#fff'}}/>
            </a>
 
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
