import React from 'react';
import { Row, Col, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';


const CustomModal = (props) => (
    <div className="modal-container">
        <Modal show={props.showModal} onHide={props.handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup  size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>Describtion</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleCloseModal}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
);

export default CustomModal;
