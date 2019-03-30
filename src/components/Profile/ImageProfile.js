import React, { Component } from 'react'
import { 
    Form,
    Upload,
    Icon,
    message } from 'antd'

import { URL_PROFILE_IMAGE } from '../../constants/withPanel'

import { Card } from 'reactstrap';
import Cookies from 'js-cookie'
const csrftoken = Cookies.get('csrftoken')
const FormItem = Form.Item

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const token = localStorage.getItem('token')
const type = localStorage.getItem('type')
const backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

export default class ImageProfile extends Component {

  state = {
    loading : false
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.props.setUser({imageUrl})
        this.setState({
        loading: false,
      })});
    }
  }

  render() {

    const type_icon = (this.state.loading && 'loading') || ''
    return (
      <>
        <h3>Agregue una foto de perfil</h3>
            <Upload
                name = 'avatar'
                action = { URL_PROFILE_IMAGE }
                onChange = { this.handleChange }
                showUploadList = { false }
                listType = "picture-card"
                headers = {{
                  Authorization : `${type} ${backend} ${token}`,
                  'X-CSRFToken' : csrftoken
                }}
            >
              <div>
                <Icon type = { type_icon } />
                <img 
                  src = { this.props.image ? this.props.image : '/media/user-not-found.png' }
                  style = {{ width : '102px' }}
                />

              </div>
            </Upload>
      </>
    )
  }
}
