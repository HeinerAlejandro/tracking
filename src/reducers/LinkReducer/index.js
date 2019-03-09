import { SET_LINK_SHOP } from './../../actions/PanelActions'

const LinkReducer = (state = null, action) => {

    switch(action.type){
        case SET_LINK_SHOP:
            return ( action.payload )
        default:
            return state
    }
}

export default LinkReducer