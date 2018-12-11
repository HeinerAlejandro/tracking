import React from 'react'
import {Modal, Button} from 'antd'

const FormSession = (props) => {
	return(
		<Modal visible = {props.visible_login}>
			<form>
				<input type = 'text' name = 'username' id='username'/>
				<input type = 'password' name = 'password' id = 'password'/>
				<Button type = 'primary' loading = {props.authenticating}/>
			</form>
		</Modal>
	)
}

export default FormSession