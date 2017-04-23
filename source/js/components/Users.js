import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
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
          const { id, firstName, lastName, userName } = user
          return (
            <tr key={shortid.generate()}>
              <td>{index + 1}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{userName}</td>
              <td className='text-center'
                style={{ width: '50px' }}
              >
                <Button bsStyle='danger'
                  onClick={() => this.props.deleteUser(id)}
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
