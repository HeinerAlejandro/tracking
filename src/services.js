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

const readObjectResponseOperation = (object, dispatch, type) => {
    var message = ""
    for(let key in object){
        for(let key2 in object[key]){
            message = key + ':' + object[key][key2]
            showMessage({type, message : message})
        }
    }
}

export { 
    readObjectResponseOperation,
    showMessage
}