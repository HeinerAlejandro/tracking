const URL_SERVER = 'http://localhost:8000/'
const CLIENT_ID_DJANGO = 'jkMZV7VFMJgoL2dkAvBi6LeuPE6JAXKiehkggXSW'
const CLIENT_SECRET_DJANGO = 'NmY1obFurKkolS0re5mrEDKrF0ipgxbZxWs6Q77aMTxIJsLAw4EFrChHkSpFX6TeH2YZubQc0qf1GH2KLce0S33wSyYGRbx0R4jLFzzNCVnU1tLxvamTeJtu70Hlxxhr'
const BACKENDS_PROVIDER = {
	GOOGLE : 'google-oauth2',
	FACEBOOK : 'facebook-oauth2'
}

const CODES_OPERATIONS = {
	True : {
		LOGIN_OPERATION : "¡Su acceso se completo con exito!",
		REGISTER_OPERATION : "¡Sus datos se registraron con exito!, ahora verifique su cuenta a traves de su correo electronico"
	},
	False : {	
		LOGIN_OPERATION : "Error al iniciar sesion, compruebe su conexion, o intentelo mas tarde",
		REGISTER_OPERATION : "Error al registrar los datos suministrados,  compruebe su conexion, o intentelo mas tarde"
	}
}

export {
	URL_SERVER,
	CLIENT_ID_DJANGO,
	CLIENT_SECRET_DJANGO,
	BACKENDS_PROVIDER,
	CODES_OPERATIONS
}