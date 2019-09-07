import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
import CustomModal from '../../components/CustomModal'
import Task from '../../components/Task'
import { FaPlus } from "react-icons/fa";
const basUrl = 'http://localhost:8081/api/task'

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      tasks: [],
      loader: true
    }
  }

  componentDidMount() {
    this.fetchTasks()
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

  fetchTasks() {
    fetch(basUrl)
      .then(response => response.json())
      .then(tasks => this.setState({ tasks, loader: false }));
  }

  createTask(title, description) {
    this.setState({
      loader: true
    })
    fetch(basUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "title": title,
      "description": description,
    })
    })
    .then(res => {
      if(res.status == 200){
        this.fetchTasks()
        this.handleCloseModal()
      } else {
        alert("Please Fill All fields")
        this.setState({loader: false})
      }
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
        {
          this.state.loader ?
          <div>
            loading
          </div>
          :
          <div className='tasks-container'>
            <Row>
              {
                this.state.tasks.map((task) => {
                  return(
                    <Col lg={3}><Task task={task} bg={'primary'}/></Col>
                  )
                })
              }
            </Row>
        </div>
        }
        
        {/* <div className='footer-container'>
        </div> */}
        <CustomModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal.bind(this)} createTask={this.createTask.bind(this)}/>
      </div>
    )
  }

}

export default HomePage;
