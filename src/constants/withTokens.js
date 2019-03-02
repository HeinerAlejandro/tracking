const URL_SERVER = 'http://localhost:8000/'
const CLIENT_ID_DJANGO = 'OZo7r942oG5jcgj9LHaRTyP5VwnnQr4tLX8tVz3B'
const CLIENT_SECRET_DJANGO = '8jxro8qj6zUVUUtOsQKlEsPw1V2EouZeTNjCsa5nP6Y6lIKJlvtm4PAxOa1AYoA9vLxvlU12HcmXGiOIJuxZtnI4NIkGmpLbUWTWLEchWcQTxNdALHtaZlwsSyXvwBtz'
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