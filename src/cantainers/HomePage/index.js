import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
import CustomModal from '../../components/CustomModal'
import { FaPlus } from "react-icons/fa";

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleShowModal(){
    this.setState({
      showModal: true
    })
  }

  handleCloseModal(){
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className='home-page-container'>
        <NavBar/>
        <div className='add-container'>
          <Button variant="outline-primary" size="lg" block onClick={() => this.handleShowModal()}>
            <FaPlus className='center'/>
          </Button>
        </div>
        <CustomModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal.bind(this)}/>
      </div>
    )
  }

}

export default HomePage;
