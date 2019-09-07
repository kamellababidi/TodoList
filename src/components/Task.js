import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';


const Task = (props) => (
    <div className="task-container">
        <Card bg={props.bg} text="white" className='task'>
            <Card.Header>Title</Card.Header>
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Task;
