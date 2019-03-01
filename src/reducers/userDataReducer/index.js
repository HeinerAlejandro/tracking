import { SET_USER_LOG } from './../../actions/LoginRegisterAction'


const userDataReducer = (state = {}, action) => {
    switch(action.type){

        case SET_USER_LOG:
            return { email : action.payload.email , name : action.payload.name, imageUrl : action.payload.imageUrl }
        default :
            return state

    }
}

export default userDataReducer