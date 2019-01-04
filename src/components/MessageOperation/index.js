import React, { Fragment } from 'react'
import { message } from 'antd'

const showMessage = alert =>{

    switch(alert.type){
        case 'error':
            message.error(alert.message, 5)
            break
        default:
            message.success(alert.message, 5)
            break
        
    }   
}

const MessageOperation = ({alert, setMessageOperation}) => {

    return(
        <>
            {alert && showMessage(alert)}
        </>
    )
}

export default MessageOperation