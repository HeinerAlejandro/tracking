import React, { Component, Fragment } from 'react'
import { message } from 'antd'

const showMessage = alert =>{

    switch(alert.type){
        case 'error':
            message.error(alert.message)
            break;
        case 'sucess':
            message.success(alert.message)
    }
}

const MessageOperation = ({alert}) => {

    return(
        <>
            {alert && showMessage(alert)}
        </>
    )
}

export default MessageOperation