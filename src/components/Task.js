import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';


const Task = (props) => (
    <div className="task-container">
        <Card bg={props.bg} text="white" className='task'>
            <Card.Header>{props.task.title}</Card.Header>
            <Card.Body>
            <Card.Text>
                {props.task.description}
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Task;
