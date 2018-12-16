import React from 'react'
import './styles.css'
import {Col, Row } from 'antd'
import LoginRegisterUserContainer from './../../containers/LoginRegisterUserContainer'

const LoginPage = (props) => {
	return(
		
		<div className = 'principal'>
			<div  className = 'page-login'>
				<Row type = 'flex' justify = 'space-between'>
					<Col span = {14}
						className = 'col-content-slogan'>
						<div style = {{height: '100vh'}}>
							<h1>¡Sientete poderoso!</h1>
							<h2>Solo con nuestro excelente servicio de monitoreo</h2>
						</div>
					</Col>
					<Col><LoginRegisterUserContainer/></Col>
				</Row>
			</div>
		</div>
	)
}

export default LoginPage