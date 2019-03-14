import React, { Component } from 'react'
import SectionTracking from './../../../../components/OperationSection/SectionTracking'
import { connect } from 'react-redux'
import toPairs from 'lodash.topairs'
import { POSITIONS } from './../../../../constants/withPanel'
import { 
  selectDevice,
  getLastPosition,
  getIntervalPosition
} from './../../../../actions/DeviceActions'

class SectionTrackingView extends Component {

  constructor(props){
    super(props)

    this.firstDateTime = null
    this.secondDateTime = null
    this.getArrayDevices = this.getArrayDevices.bind(this)

    this.handleChangeDateTime.bind(this)
    this.validateRangeDate = this.validateRangeDate.bind(this)
    this.selectDevice = this.selectDevice.bind(this)

    this.validInput = this.validInput.bind(this)

    this.positions = null
  }

  componentWillMount = (prevProps, nextProps) => {
   console.log(prevProps)
   console.log(nextProps)
  }

  componentDidMount = () => {
    this.props.getLastPosition(this.props.device_selected)
  }

  validateRangeDate = () => {

    const regex = new RegExp("^([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/(2[0-9]{3}) ([0-1][0-9]|2[0-3]):([0-5][0-9])$")
    
    if(regex.test(this.firstDateTime) && regex.test(this.secondDateTime)){
       
      this.setDeviceRanges()

      return true
    }else
      return false
    
  }

  obtainDate = date => (
    new Date(date[0], date[1], date[2], date[3], date[4])
  )
  obtainSplitDate = (date, regex) => (
    date.split(regex)
  )

  setDeviceRanges = () => {

    const regex = new RegExp('[/ :]')

      this.positions = this.props.positions.filter(position => {
      
      let a = this.obtainSplitDate(position.datetime, regex)
      
      let datePosition = this.obtainDate(a)

      a = this.obtainSplitDate(this.firstDateTime, regex)

      let first = this.obtainDate(a)

      a = this.obtainSplitDate(this.secondDateTime, regex)

      let final = this.obtainDate(a)
  
      return (first <= datePosition && final >= datePosition)
    })

    this.forceUpdate()
  }

  validInput = () => (
    this.firstDateTime && this.secondDateTime
  )

  handleChangeDateTime = (evt) => {
    
    evt.target.name === 'fi'
      ? this.firstDateTime = evt.target.value
      : this.secondDateTime = evt.target.value
  
    let isFullInputsDate = this.validInput()
    let isValidRangeDates = this.validateRangeDate()
    
    if(isFullInputsDate)
      this.positions = null

    if(isFullInputsDate && isValidRangeDates)
      this.setDeviceRanges()
  }

  getArrayDevices = () => (
    toPairs(this.props.devices)
  )

  selectDevice = value => {
    this.props.selectDevice(value)
    this.positions = null
    this.forceUpdate()
  }

  addRanges = (evt) => {

  }

  render() {
   
    let positions = this.positions || this.props.positions[this.props.positions.length - 1]
  
    return (
      <SectionTracking
        devices = { this.getArrayDevices() }
        positions = { positions }
        selectDevice = { this.selectDevice }
        selected = { this.props.selected }
        handleChangeDateTime = { this.handleChangeDateTime }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  devices : state.devices,
  selected : state.device_selected,
  positions : state.positions[state.device_selected],
})

const mapDispatchToProps = {
  selectDevice,
  getLastPosition,
  getIntervalPosition
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionTrackingView)
