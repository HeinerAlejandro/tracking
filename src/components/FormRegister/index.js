import React from 'react'
import SocialButtons from './SocialButtons'
import {Button} from 'antd'

const FormRegister = (props) => {
	return(
		<form  class = 'form'>
			<label for = 'name'>names</label><input type = 'text' class = 'field' name = 'name' id = 'name'/>
			<label for = 'surname'>surnames</label><input type = 'text' class = 'field' name = 'surname' id = 'surname'/>
			<label for = 'email'>email</label><input type = 'text' class = 'field' name = 'email' id = 'email'/>
			<p><button style = {{background:'none', border:'none'}}>¿tienes una cuenta?</button></p>
			<p>o registrate con</p>
			<SocialButtons 
				successProvider = {props.succesProvider}
				successFailure = {props.succesFailure}/>
			<button type = 'primary' loading = {props.registering} onSubmit = {props.handleSubmit}/>
		</form>
	)
}

export default FormRegister