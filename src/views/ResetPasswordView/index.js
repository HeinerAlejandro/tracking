import React, { Component } from 'react'
import  ResetPassword  from './../../components/FormSession/resetPassword'
import { connect } from 'react-redux'
import { setStep,
        setVisibleResetPassword,
        sendUuidResetPassword,
        sendEmailResetPassword
         } from './../../actions/LoginRegisterAction'

class index extends Component {
    
    constructor(props){

        super(props)

        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)

        this.onCancel = this.onCancel.bind(this)

        this.fetchResetPasswordFirstStep = this.fetchResetPasswordFirstStep.bind(this)
        this.fetchResetPasswordSecondStep = this.fetchResetPasswordSecondStep.bind(this)
    }

    nextStep(){
        this.props.setStep(1)
    }

    prevStep(){
        this.props.setStep(-1)
    }

    onCancel(){
        this.props.setVisibleResetPassword(false)
    }

    fetchResetPasswordFirstStep(email){
        console.log(email)

        let object_email = ''

        if(typeof email === 'string')
            object_email = { email : email}
        else
            object_email = email

        this.props.sendEmailResetPassword(JSON.stringify(object_email))
    }
  
    fetchResetPasswordSecondStep(data){

        this.props.sendUuidResetPassword(JSON.stringify(data))
    }
  

    render() {
        return (
            <ResetPassword 
                onCancel = { this.onCancel }
                visible = { this.props.visible }
                loading_send_email = { this.props.sending_email }
                resetPasswordUrls = { this.props.resetPasswordUrls }
                setNextStep = { this.nextStep }
                setPrevStep = { this.prevStep }
                current = { this.props.current }
                sendingEmail = { this.props.current === 0 
                    ? this.fetchResetPasswordFirstStep
                    : this.fetchResetPasswordSecondStep }
            />
        )
    }
}

const mapStateToProps = state => (
    {
        current : state.current,
        sending_email : state.sending_email
    }    
)

const mapDispatchToProps = {
    setStep,
    setVisibleResetPassword,
    sendEmailResetPassword,
    sendUuidResetPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
