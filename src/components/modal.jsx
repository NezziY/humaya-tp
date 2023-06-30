import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { dataRecetas } from '../data/recetas';

function ModalRecetas(props) {

  const { selectedRecipeIndex, onHide } = props;
  const selectedRecipe = dataRecetas[selectedRecipeIndex];

   return (
    
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {selectedRecipe.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>{selectedRecipe.receta}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
   
  );
}

export default ModalRecetas;