import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { Col, Button } from 'react-bootstrap'
import { FieldGroup } from './FieldGroup'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

  }

  getValidationState(value) {
    const length = value.length
    if (length > 2) return 'success'
    else if (length > 0) return 'error'
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value })
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = this.state
    user.id = shortid.generate()
    if (
      user.firstName.length
      && user.lastName.length
      && user.userName.length
      > 2
    ) {
      this.props.addUser(user)
      this.setState({
        firstName: '',
        lastName: '',
        userName: '',
      })
    }
  }

  render() {
    console.log('FORM', this.props)
    const { firstName, lastName, userName } = this.state
    return (
      <form className='form-wrapper'
        onSubmit={this.handleSubmit}
      >
        <div className='row' >
          <Col md={4} >
            <FieldGroup
              type='text'
              label='First name'
              placeholder='Enter first name'
              value={firstName}
              validationState={this.getValidationState(firstName)}
              onChange={this.handleFirstNameChange}
            />
          </Col>
          <Col md={4} >
            <FieldGroup
              type='text'
              label='Last name'
              placeholder='Enter last name'
              value={lastName}
              validationState={this.getValidationState(lastName)}
              onChange={this.handleLastNameChange}
            />
          </Col>
          <Col md={4} >
            <FieldGroup
              label='Username'
              placeholder='Enter username'
              type='text'
              value={userName}
              validationState={this.getValidationState(userName)}
              onChange={this.handleUserNameChange}
            />
          </Col>
        </div>
        <Button bsStyle='success' type='submit' >
          Submit
        </Button>
      </form>
    )
  }
}

Form.propTypes = {
  addUser: PropTypes.func,
}

export default Form
