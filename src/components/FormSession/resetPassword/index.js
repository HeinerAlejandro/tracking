import React, { Component } from 'react'
import { Modal, Form, Input, Icon, Button, Steps } from 'antd'
import  requestUidForm  from './formRequestUid'

const steps = [{
  title : 'Solicitud de clave de reseteo' ,
  description : 'Se enviara un codigo uuid a su correo electronico',
  node : requestUidForm
},{
  title : 'Reseteo de contraseña' ,
  description : 'Use el codigo uuid enviado a su correo',
  node : requestUidForm
}]


const Step = Steps.Step

const styleButtonsSteps = {
  marginTop : '30px'
}

class index extends Component {

  render() {

    var StepForm = steps[ this.props.current ].node

    const next = <Button 
                    style = { styleButtonsSteps }
                    onClick = { this.props.setNextStep }>siguiente
                  </Button> 

    const prev = <Button
                    style = { styleButtonsSteps }
                    onClick = { this.props.setPrevStep }>anterior
                  </Button> 

    return (
      <Modal 
        style = {{ textAlign : 'center' }}
        onCancel = { this.props.onCancel }
        footer = { null }
        visible = { this.props.visible }
        centered
        
        >
      
        <div className = 'content-step'>
          <StepForm
            key = { this.props.current === 0?'mail':'lock'  + 'form' }
            style = {{marginTop : '40px'}}
            type = { this.props.current === 0?'mail':'lock' }  
            handleFetch = { this.props.sendingEmail }
            loading_send_email = { this.props.loading_send_email }
          />
        </div>

        <Steps current = { this.props.current }>

          {steps.map(step => (
            <Step 
              key = { step.title }
              title = { step.title } 
              description = { step.description }
            />
          ))}  
          
        </Steps>

        { this.props.current < 1 && next}
        { this.props.current > 0 && prev }
       

      </Modal>
    )
  }
}

const WrappedResetPasswordForm = Form.create()(index);

export default WrappedResetPasswordForm