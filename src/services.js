import { setMessageOperation } from './actions/LoginRegisterAction'

const readObjectResponseOperation = (object, dispatch, type) => {
    var message = ""
    for(let key in object){
        for(let key2 in object[key]){
            message = key + ':' + object[key][key2]
            dispatch(setMessageOperation({type , message : message}))
        }
    }
}

export default readObjectResponseOperation