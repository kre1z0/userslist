import React, { Component } from 'react'
import { Col, Table } from 'react-bootstrap'
import Form from '../components/Form'
import Users from '../components/Users'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          firstName: 'Mark',
          lastName: 'Otto',
          userName: 'mdo',
        },
        {
          firstName: 'Jacob',
          lastName: 'Thornton',
          userName: 'fat',
        },
        {
          firstName: 'John',
          lastName: 'Weber',
          userName: 'tavor',
        },
      ],
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount() {

  }

  addUser(e, user) {
    e.preventDefault()
    const copyUsers = this.state.users.slice()
    const concatUsers = copyUsers.concat(user)
    this.setState({
      users: concatUsers,
    })
  }

  deleteUser(index) {
    console.log('deleteUser', index)
    const copyUsers = this.state.users.slice()
    // this.setState({
    //   users: [],
    // })
  }

  render() {
    return (
      <div className='container' >
        <Col md={12} >
          <h1>Todo list</h1>
          <Form {...this.state} addUser={this.addUser} />
          <Table striped bordered condensed hover >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Delete</th>
              </tr>
            </thead>
            <Users {...this.state} deleteUser={this.deleteUser} />
          </Table>
        </Col>
      </div>
    )
  }
}

export default App
