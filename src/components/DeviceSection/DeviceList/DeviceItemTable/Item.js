import React from 'react'
import { Select } from 'antd';

const Option = Select.Option

const envolveTd = data => (
    <td>
        {data}
    </td>
)

const createOption = (data, styles) => (
    <Option
        key = { data }
        value = { data }
        style = { styles }    
    >
        {data}
    </Option>
)

const envolveSelect = (data, forDefault) => (
    <Select
        style = {{ width : 120 }}
        defaultValue = { forDefault }
        name="status"       
        className="status"
    >

    { data }

    </Select>
)

export const Item = ({type, values, forDefault = null, optionStyle = null}) => {
    var toRender = null
    
    if(type === 'simple' && typeof values === 'string')
        toRender = envolveTd(values)
        

    if(type === 'select' && Array.isArray(values) && forDefault){
        
        let valueToSelect = values.map(value => {
            let option = createOption(value, optionStyle)

            return option
        })

        let toSelect = envolveSelect(valueToSelect, forDefault)

        toRender = envolveTd(toSelect)
    }

    return toRender
}