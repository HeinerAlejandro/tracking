import React from 'react'
import { Button } from 'antd'


const ButtonsOperation = ({ icon, color, value, onClick, type, fontColor, disable }) => (
    <Button
        style = {{ backgroundColor : color, color : fontColor, borderColor: color }}
        size = 'large'
        type = { type }
        icon = { icon }
        onClick = { onClick }
        disable = { disable }
        >
    
        { value }
    </Button>
)

export default ButtonsOperation
