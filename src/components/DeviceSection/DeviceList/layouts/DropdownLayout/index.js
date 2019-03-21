import React from 'react'
import { Select } from 'antd'


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