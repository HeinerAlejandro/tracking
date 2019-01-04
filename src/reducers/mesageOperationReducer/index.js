import { SET_MESSAGE } from './../../actions/LoginRegisterAction'

const messageOperationReducer = (state = null, action) => {
    switch(action.type){
        case SET_MESSAGE:
            return { ...action.payload}
        default:
            return state
    }
}

export default messageOperationReducer