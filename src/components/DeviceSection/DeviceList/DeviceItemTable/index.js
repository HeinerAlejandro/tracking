import React, { Component } from 'react'
import { Button, Select } from 'antd'

const Option = Select.Option

const optionStyle = {
  width : '100px'
}

class DeviceItemTable extends Component {

  constructor(props){
    super(props)

    this.getItemChildrenLayoutRenderDevice = this.getItemChildrenLayoutRenderDevice.bind(this)

    this.getDataOptionDevice = this.getDataOptionDevice.bind(this)
    this.getDataColumnsDevice = this.getDataColumnsDevice.bind(this)

    this.handleClick = this.handleClick.bind(this)
  }

  getDataOptionDevice(){
    
    const { name } = this.props 

    return (
      <Option 
        key = { name }
        value = { name }
        >
        { name }
      </Option>
    )
  }

  handleClick = () => {
    const { name, selectDevice } = this.props
    
    selectDevice(name)
  }

  getDataColumnsDevice(){

    const { data, name } = this.props 

    return(
      <>
        <td>{ name }</td>
        <td>{ data.type }</td>
        <td>{ data.date }</td>

        <td>
          <Select
            style = {{ width : 120 }}
            defaultValue = {data.status}
            name="status"       
            id="status">

              <Option
                style = { optionStyle }
                value="ACTIVE">ACTIVO
              </Option>

              <Option
                style = { optionStyle }
                value="INACTIVE">INACTIVO
              </Option>
          </Select>
        </td>
        <td>
          <Button 
            disabled = { data.status === 'ACTIVE' ? false : true}
            onClick = { this.handleClick }
            style = {{ background : 'none', border: 'none'}}
            icon = 'eye' />
        </td>
      </>
    )
  }

  getItemChildrenLayoutRenderDevice(){
   
    return this.props.type === 'row-table'
      ? this.getDataColumnsDevice()
      : this.getDataOptionDevice()
  }

  render() {
    console.log(this.props.type)
    const data_render = this.getItemChildrenLayoutRenderDevice() 
 
    return (
      <>{ data_render }</>
    )
  }
}

export default DeviceItemTable
