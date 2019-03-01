import { SENDING_EMAIL_RESET_PASSWORD } from './../../actions/LoginRegisterAction'

const SendingEmailResetPassword = (state = false, action) => {
    switch(action.type){
        case SENDING_EMAIL_RESET_PASSWORD:
            return action.payload
        default:
            return state
    }
}

export default SendingEmailResetPassword