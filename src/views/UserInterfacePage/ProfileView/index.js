import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../../components/Profile'
import { setUser } from './../../../actions/LoginRegisterAction'
import { resetPassword } from './../../../actions/PanelActions'
import { resetNames } from './../../../actions/PanelActions'

class ProfileView extends Component {
  render() {
    return (
      <Profile
        image = { this.props.ImageUrl }
        setUser = { this.props.setUser }
        reset_pass = { this.props.resetPassword }
        reset_names = { this.props.resetNames }
        fn = { this.props.first_name }
        ln = { this.props.last_name }
      />
    )
  }
}

const mapStateToProps = state => ({
  ImageUrl : state.data_user.imageUrl,
  first_name : state.data_user.first_name,
  last_name : state.data_user.last_name,
})

const mapDispatchToProps = {
  setUser,
  resetPassword,
  resetNames
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
