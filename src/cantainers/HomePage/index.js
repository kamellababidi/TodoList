import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
import { FaPlus } from "react-icons/fa";

const HomePage = () => (
    <div className='home-page-container'>
      <NavBar/>
      <div className='add-container'>
        <Button variant="primary" size="lg" block>
          <FaPlus className='center'/>
        </Button>
      </div>
    </div>
);

export default HomePage;
