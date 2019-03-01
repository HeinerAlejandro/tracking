import React from 'react'
import './../index.sass'
import { Input, Select } from 'antd'

const Search = Input.Search
const Option = Select.Option


const TypesDevice = (
    <Select 
        defaultValue = 'G'>
        <Option value = 'G'>
            G
        </Option>
        <Option value = 'P'>
            P
        </Option>
        <Option value = 'M'>
            M
        </Option>
    </Select>
)

const SearchField = props => (    
        <Search 
            id = 'SearchFieldDevice'
            style = {{width: 500, marginBottom: 20}}
            size = 'large'
            onChange = { props.handleFilter }
            placeholder = 'Introduce el serial de dipositivo'
        />
)

export default SearchField