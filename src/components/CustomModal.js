import React, { Component } from "react";
import { Row, Col, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

class CustomModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
    }
    render() {
        return(
            <div className="modal-container">
                <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={(event) => this.setState({title: event.target.value})} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup  size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>Describtion</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={(event) => this.setState({description: event.target.value})} as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.props.createTask(this.state.title, this.state.description)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default CustomModal;
