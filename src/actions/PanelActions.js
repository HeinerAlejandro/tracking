import { URL_LINK_SHOP } from './../constants/withPanel'
import { message } from 'antd';


const SET_LINK_SHOP = 'SET_LINK_SHOP'

const getLinkShopFromServer = () => async dispatch => {

    try{
        let headers = new Headers()

        let token = localStorage.getItem('token')

        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', token)

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

}

const setLinkShop = (payload) => ({
    type : SET_LINK_SHOP,
    payload
})

export {
    SET_LINK_SHOP,
    setLinkShopInServer,
    getLinkShopFromServer
}
