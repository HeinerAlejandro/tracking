import { SET_USER_LOG, SET_NULL_USER } from './../../actions/LoginRegisterAction'


const userDataReducer = (state = {}, action) => {
    switch(action.type){

        case SET_USER_LOG:
            return { ...state, ...action.payload }
        case SET_NULL_USER:
            
            return action.payload
        default : 
            return state

    }
}

export default userDataReducer