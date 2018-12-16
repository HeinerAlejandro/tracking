import moment from 'moment'
import {
    CLIENT_ID_DJANGO,
    CLIENT_SECRET_DJANGO,
} from './../constants/withTokens'
import { setTokenConvertSuccess } from './../actions/LoginRegisterAction'

const obtainNewToken = body => {
    
    fetch('http://127.0.0.1:8000/auth/token', {
        method : 'POST',
        headers : {
            accept : 'application/json'
        },
        body : body})
        .then(response => response.json())
}



const refreshTokenServer = ({ dispatch, getStore }) => next => action => {

    if(typeof action == 'function'){

        const date_storage = localStorage.getItem('access_token_expires_in')

        if(date_storage){

            const date_expiration = moment(date_storage)
            const current_date = moment(Date.now())

            if( current_date - date_expiration <= 0){

                localStorage.removeItem('access_token_expires_in')
                localStorage.removeItem('access_token_converted')
                localStorage.removeItem('refresh_token_converted')

                
            }else if(current_date - date_expiration <= 2000){

                const refresh_token =  localStorage.getItem('refresh_token_converted')

                const body = new FormData()

                body.append('grant_type', 'refresh_token')
                body.append('client_id', CLIENT_ID_DJANGO)
                body.append('client_secret', CLIENT_SECRET_DJANGO)
                body.append('refresh_token', refresh_token)

                const response_with_new_token = obtainNewToken(body)

                dispatch(setTokenConvertSuccess(response_with_new_token)) 
            }
        }

        return next(action)
    }
}

export default refreshTokenServer