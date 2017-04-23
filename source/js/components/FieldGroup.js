import React from 'react'
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

export function FieldGroup({ label, validationState, ...props }) {
  return (
    <FormGroup
      validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      <FormControl.Feedback />
    </FormGroup>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string,
  validationState: PropTypes.string,
}
