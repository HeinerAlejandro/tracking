import React, { Component } from 'react'
import { Button, Select } from 'antd'
import authorizationHook from '../../../../hooks/authorizationHook'
import { Item } from './Item'

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

    const selectOperation = (status) => (
      <td>
          <Select
            style = {{ width : 120 }}
            defaultValue = {data.status === 'H'?"ACTIVE":"INACTIVE"}
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
    )

    const SelectOp = authorizationHook(Item)
    const ItemUser = authorizationHook(Item)
    
    return(

      <>
        <Item
          type = 'simple' 
          values = { name }  
        />
        <Item
          type = 'simple' 
          values = { data.typee }  
        />
        <Item
          type = 'simple' 
          values = { data.date_register }  
        />

        <SelectOp 
          type = 'select'
          forDefault = {data.status}
          optionStyle = {{ width : '100px' }}
          values = { ['ACTIVO', 'INACTIVO'] }
        />
        
        <ItemUser 
          type = 'simple'
          values = { data.user || 'No asignado' }
        />

        <td>
          <Button 
            disabled = { data.status === 'ACTIVO' ? false : true}
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
    const data_render = this.getItemChildrenLayoutRenderDevice() 
 
    return (
      <>{ data_render }</>
    )
  }
}

export default DeviceItemTable
