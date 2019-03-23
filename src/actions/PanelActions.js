import { URL_LINK_SHOP } from './../constants/withPanel'
import { message } from 'antd';


const SET_LINK_SHOP = 'SET_LINK_SHOP'

const getLinkShopFromServer = () => async dispatch => {

    try{
        let headers = new Headers()

        let token = localStorage.getItem('token')
        let type = localStorage.getItem('type')
        let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', `${type} ${backend} ${token}`)

        const options = {
            method : 'get',
            mode : 'cors',
            headers : headers,            
        }

        const response = await fetch(URL_LINK_SHOP, options)

        if(!response.ok)
            throw response

        const { link } = await response.json()


        dispatch(setLinkShop(link))

    }catch(error){
        message.error("Error al cargar el link de la tienda virtual")
    }

}

const setLinkShopInServer = (link) => async dispatch => {

    let headers = new Headers()

    let token = localStorage.getItem('token')
    let type = localStorage.getItem('type')
    let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

    
    headers.append('Authorization', `${type} ${backend} ${token}`)
    headers.append('Content-Type', 'application/json')
    

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

const setLinkShop = (payload) => ({
    type : SET_LINK_SHOP,
    payload
})

export {
    SET_LINK_SHOP,
    setLinkShop,
    setLinkShopInServer,
    getLinkShopFromServer
}