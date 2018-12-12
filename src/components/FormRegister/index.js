import React from 'react'
import SocialButtons from './SocialButtons'
import {Button, Row, Col} from 'antd'
import './styles.css'

const FormRegister = (props) => {

	return(
		
		<div class="contenedor-formulario">
			<div class="wrap">
				<form action="" class="formulario" name="formulario_registro" method="get">
					<div>
						<div class="input-group">
							<input type="text" id="nombre" name="nombre" />
							<label class="label" for="nombre">Nombre:</label>
						</div>
						<div class="input-group">
							<input type="email" id="correo" name="correo" />
							<label class="label" for="correo">Correo:</label>
						</div>
						<div class="input-group">
							<input type="password" id="pass" name="pass"/>
							<label class="label" for="pass">Contraseña:</label>
						</div>
						<div class="input-group">
							<input type="password" id="pass2" name="pass2"/>
							<label class="label" for="pass2">Repetir Contraseña:</label>
						</div>
						<SocialButtons 
							successProvider = {props.succesProvider}
							successFailure = {props.succesFailure}/>

						<div class="input-group checkbox">
							<input type="checkbox" name="terminos" id="terminos" value="true" />
							<label for="terminos">Acepto los Terminos y Condiciones</label>
						</div>
							
						<input type="submit" id="btn-submit" value="Enviar"/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default FormRegister