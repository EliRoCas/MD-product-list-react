import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Form = (props) => {
  return (
    <div>Form</div>
  )
}

Form.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Form)