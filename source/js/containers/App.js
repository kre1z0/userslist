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
          id: 1,
          firstName: 'Mark',
          lastName: 'Otto',
          userName: 'mdo',
        },
        {
          id: 2,
          firstName: 'Jacob',
          lastName: 'Thornton',
          userName: 'fat',
        },
        {
          id: 3,
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

  addUser(user) {
    const copyUsers = this.state.users.slice()
    const concatUsers = copyUsers.concat(user)
    this.setState({
      users: concatUsers,
    })
  }

  deleteUser(id) {
    const copyUsers = this.state.users.slice()
    const deleteUser = copyUsers.filter(item => item.id !== id)
    this.setState({
      users: deleteUser,
    })
  }

  render() {
    return (
      <div className='container' >
        <Col md={12} >
          <h1>Users list</h1>
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
