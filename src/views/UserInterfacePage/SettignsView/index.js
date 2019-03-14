import React, { Component } from 'react'
import Settings from '../../../components/Settings'
import { connect } from 'react-redux'
import { 
    getLinkShopFromServer,
    setLinkShopInServer
} from '../../../actions/PanelActions'

class SettingsView extends Component {

  constructor(props){
    super(props)

    this.setLinkInServer = this.setLinkInServer.bind(this)
  }

  componentDidMount = () => {
    this.props.getLinkShopFromServer()
  }

  setLinkInServer = evt => {
    evt.preventDefault()
    
    const value = document.getElementsByName('link')[0].value

    if(value)
        this.props.setLinkShopInServer(value)
  }

  render() {
    return (
      <Settings
            link = { this.props.link }
            setLink = { this.setLinkInServer }
       />
    )
  }
}

const mapStateToProps = state => ({
    link : state.link
}) 

const mapDispatchToProps = {
    getLinkShopFromServer,
    setLinkShopInServer
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)
