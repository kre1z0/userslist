import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Button, FormControl, ControlLabel, FormGroup } from 'react-bootstrap'

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id} >
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  )
}

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

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
  }

  componentDidMount() {

  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value })
  }

  render() {
    console.log('FORM', this.props)
    const { firstName, lastName, userName } = this.state
    return (
      <form className='form-wrapper'
        onSubmit={e => this.props.addUser(e, this.state)}
      >
        <div className='row' >
          <Col md={4} >
            <FieldGroup
              id='formControlsText'
              type='text'
              label='First name'
              placeholder='Enter first name'
              value={firstName}
              onChange={this.handleFirstNameChange}
            />
          </Col>
          <Col md={4} >
            <FieldGroup
              id='formControlsEmail'
              type='text'
              label='Last name'
              placeholder='Enter last name'
              value={lastName}
              onChange={this.handleLastNameChange}
            />
          </Col>
          <Col md={4} >
            <FieldGroup
              id='formControlsPassword'
              label='Username'
              placeholder='Enter username'
              type='text'
              value={userName}
              onChange={this.handleUserNameChange}
            />
          </Col>
        </div>
        <Button type='submit' >
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
