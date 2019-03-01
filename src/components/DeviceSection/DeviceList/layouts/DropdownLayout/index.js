import React from 'react'
import { Select } from 'antd'
import { DEVICES as devices} from './../../../../../constants/withPanel'
const Option = Select.Option

const getDevice = () => (
    devices.map((device) => (<Option 
        key =  { device.code}
        value = { device.code}
        style = {{ width : '300px' }}
        >
        { device.code}
      </Option>))
)
const DropdownLayout = (props) => {

    return(
        <Select
            onChange = { props.selectDevice }
            name = 'select-device'
            id = 'select-device'
            defaultValue = { props.selected }>
            { props.children }
        </Select>
    )
}

export default DropdownLayout