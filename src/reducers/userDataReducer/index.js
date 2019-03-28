import { SET_USER_LOG, SET_IMG_USER } from './../../actions/LoginRegisterAction'


const userDataReducer = (state = {}, action) => {
    switch(action.type){

        case SET_USER_LOG:
            return { ...state, ...action.payload }
        default : 
            return state

    }
}

export default userDataReducer