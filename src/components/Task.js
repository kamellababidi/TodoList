import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';


const Task = (props) => (
    <div className="task-container">
        <Card border={props.bg} className='task'>
            <Card.Header>{props.task.title}</Card.Header>
            <Card.Body>
            <Card.Text>
                {props.task.description}
            </Card.Text>
            
            </Card.Body>
            <Button variant="secondary" onClick={() => props.editTask(props.task.id)}>Edit</Button>
            <Button variant="danger" onClick={() => props.deleteTask(props.task.id)}>Delete</Button>
        </Card>
    </div>
);

export default Task;
