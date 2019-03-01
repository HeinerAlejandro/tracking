import { SET_STEP } from './../../actions/LoginRegisterAction'

const StepReducer = (state = 0, action) => {
    switch(action.type){
        case SET_STEP:
            return (state + action.payload)
        default:
            return state
    }
}

export default StepReducer