import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Glyphicon } from 'react-bootstrap'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    const { users } = this.props
    return (
      <tbody>
        {users.map((user, index) => {
          const { firstName, lastName, userName } = user
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{userName}</td>
              <td className='text-center'
                style={{ width: '50px' }}
              >
                <Button bsStyle='danger'
                  onClick={() => this.props.deleteUser(index)}
                >
                  <Glyphicon glyph='remove' />
                </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
}

export default Users
