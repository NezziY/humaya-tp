import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import MyModal from './contactoModal';
import '../styles/footer.css';

function Footer() {
    
    return (
        <div className="py-2 text-white" style={{backgroundColor: '#721919' }}>
            <Container>
                <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={4} className="text-center p-1">
                    <img 
                    src='../images/HconDulce100x100.png' 
                    width="50" 
                    height="50"
                    alt="Logo Humaya" 
                    />
                    <span>Humaya</span> 
                </Col>
                <Col xs={12} sm={4} className="text-center">
                    <MyModal />
                </Col>
                <Col xs={12} sm={4} className="text-center p-1">
                    <FaFacebookSquare size={40} style={{ marginRight: '1em' }} />
                    <FaYoutube size={40} style={{ marginRight: '1em' }} />
                    <FaInstagramSquare size={40}/>
                </Col>
                </Row>
            </Container>
        </div>         

    );
}

export default Footer;

