import { SET_USER_LOG } from './../../actions/LoginRegisterAction'


const userDataReducer = (state = {}, action) => {
    switch(action.type){

        case SET_USER_LOG:
            return { ...state, ...action.payload }
        default : 
            return state

    }
}

export default userDataReducer