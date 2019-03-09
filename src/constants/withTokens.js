const URL_SERVER = 'http://localhost:8000/'
const CLIENT_ID_DJANGO = 'JbpXuIIJmrCloSD9mqhsEcbBrjhG3ZdAdIGgG91D'
const CLIENT_SECRET_DJANGO = 'YpUzcRj2LRnRKgiPl9NmPjFe0JQtUsJVHekWgX9YB4dacwIWsfBro8YTYTLjgSU32X5GcJJX4Z9ea5s1XZ7goJ0VaFN0YvEiovtKpvbPTOqgOk3U1TEY3SeTaj73vIAn'
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