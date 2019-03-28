import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../../components/Profile'
import { setUser } from './../../../actions/LoginRegisterAction'
import { resetPassword } from './../../../actions/PanelActions'

class ProfileView extends Component {
  render() {
    return (
      <Profile
        image = { this.props.ImageUrl }
        setUser = { this.props.setUser }
        reset = { resetPassword }
      />
    )
  }
}

const mapStateToProps = state => ({
  ImageProfile : state.ImageUrl,
})

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
