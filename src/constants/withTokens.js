const URL_SERVER = 'http://localhost:8000/'
const CLIENT_ID_DJANGO = '8IjeeJoakCQF4G8tWh7gJCKZBxejpJSsapREbTgs'
const CLIENT_SECRET_DJANGO = 'BKg1iSZ7Fcg29IoApfE0VMWAxzDXQ0pqQ65iRlTaxm4J9hAoaQgoUkfUIbGu9Lc1erDaY66B0JHf5UXxd1kkrnm4ggsEKivhZYCTKs0DH1ucOfKV3KJynU0RwI6CoKvQ'
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