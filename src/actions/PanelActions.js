import { 
    URL_LINK_SHOP,
    URL_RESET_PASSWORD,
    URL_RESET_NAMES } from './../constants/withPanel'
import { message } from 'antd';
import Cookies from 'js-cookie'
const csrftoken = Cookies.get('csrftoken')
const token = localStorage.getItem('token')
const type = localStorage.getItem('type')
const backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

const SET_LINK_SHOP = 'SET_LINK_SHOP'

message.config({
    top: 100
})

const getLinkShopFromServer = () => async dispatch => {

    try{
        
        let headers = new Headers()

        

        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', `${type} ${backend} ${token}`)
        headers.append('X-CSRFToken', csrftoken)
        console.log("antes de fetch en link")
        const options = {
            method : 'get',
            mode : 'cors',
            headers : headers,            
        }
        
        const response = await fetch(URL_LINK_SHOP, options)
        console.log(response)
        if(!response.ok)
            throw response
            console.log(response)
        const { link } = await response.json()


        dispatch(setLinkShop(link))

    }catch(error){
        message.error("Error al cargar el link de la tienda virtual")
    }

}

const setLinkShopInServer = (link) => async dispatch => {

    let headers = new Headers()
    
    headers.append('Authorization', `${type} ${backend} ${token}`)
    headers.append('Content-Type', 'application/json')
    headers.append('X-CSRFToken', csrftoken)

    let body = { link }

    const options = {
        method : 'POST',
        headers : headers,
        body : JSON.stringify(body)
    }
   
    try{
        const response = await fetch(URL_LINK_SHOP, options)

        message.config({
            top : 100
        })

        if(!response.ok)
            throw response

       
        message.success("Link establecido con exito")

        dispatch(setLinkShop({link : link}))

    }catch(error){
        const m = await error.json()
        console.log(m)
        message.error("Error al establecer el link de la tienda")
    }
}

const resetNames = data_names => async dispatch => {

    let headers = new Headers()

    headers.append('Authorization', `${type} ${backend} ${token}`)
    headers.append('Content-Type', `application/json`)
    headers.append('X-CSRFToken', csrftoken)

    let body = data_names

    console.log(body)
    const options = {
        mode : 'cors',
        method : 'POST',
        headers : headers,
        body : body
    }

    try{
        const response = await fetch(URL_RESET_NAMES, options)

        if(!response.ok)
            throw response
       
        message.success("Nombres cambiados con exito")

        return true

    }catch(error){
        message.error("Error al cambiar los nombres")
        return false
    }

}

const resetPassword = data_reset => async dispatch => {

    let headers = new Headers()

    headers.append('Authorization', `${type} ${backend} ${token}`)
    headers.append('Content-Type', `application/json`)
    headers.append('X-CSRFToken', csrftoken)
    
    let body = data_reset

    const options = {
        method : 'POST',
        headers : headers,
        body : body
    }

    try{
        const response = await fetch(URL_RESET_PASSWORD, options)

        const json =  await response.json()

        if(!response.ok)
            throw json

        message.success(json.detail)

        return true

    }catch(error){
        message.error(error.detail)
        return false
    }

}

const setLinkShop = (payload) => ({
    type : SET_LINK_SHOP,
    payload
})

export {
    SET_LINK_SHOP,
    setLinkShop,
    setLinkShopInServer,
    getLinkShopFromServer,
    resetPassword,
    resetNames
}
