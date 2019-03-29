import React, { PureComponent } from 'react'
import DeviceItemTable from './DeviceItemTable'
import TableLayout from './layouts/TableLayout'
import { Select } from 'antd'
import DropdownLayout from './layouts/DropdownLayout'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

class DeviceList extends PureComponent {

  constructor(props){

    super(props)

    this.getColumnsDevices = this.getColumnsDevices.bind(this)
    this.columnOperation = this.columnOperation.bind(this)

    this.getDevices = this.getDevices.bind(this)
    this.deviceOperation = this.deviceOperation.bind(this)

    this.getTable = this.getTable.bind(this)
    this.getSelect = this.getSelect.bind(this)

    this.getItem = this.getItem.bind(this)

    this.handleClick = this.handleClick.bind(this)
    
    this.state = {
      pageCount : 0,
      currentPage : 0
    }
  }

  componentDidUpdate = () => {
    this.setState({
      pageCount : Math.ceil(this.props.devices.length/10)
    })
  }

  getColumnsDevices = () => (
    this.props.columns_header && this.props.columns_header.map(this.columnOperation)
  )

  columnOperation = column => (<th key = {column}>{ column }</th>)

  getDevices = () => (
    this.props.devices && this.props.devices.slice(this.state.currentPage*10, (this.state.currentPage + 1) * 10).map(this.deviceOperation)
  )

  getSimpleList = (devices_name) => (
    <Select.Option value = { devices_name }>{ devices_name }</Select.Option>
  )

  getItem = device => {
    return(
      this.props.type === 'table' ?<DeviceItemTable
          selectDevice = { this.props.selectDevice } 
          key = { device[0] } 
          name = { device[0] }
          data = { device[1] }
          type = { 'row-' + this.props.type }  
        />: this.getSimpleList(device[0])
    )
  }

  deviceOperation = device => {
    let Item = null
   
    if(!this.props.filter || (device[0][0] === this.props.filter))
      Item = this.getItem(device)

    return this.props.type  === 'table'
      ? <tr key = {device[0]}>{ Item }</tr>
      : Item
  }

  getTable = TableLayout => (
    <TableLayout>
      <TableLayout.Header>
        { this.getColumnsDevices() }
      </TableLayout.Header>
      <TableLayout.Body>
        { this.getDevices() }
      </TableLayout.Body>
    </TableLayout>
  )

  getSelect = DropdownLayout => (
    <DropdownLayout
      selectDevice = { this.props.selectDevice }
      selected = { this.props.selected }
      >
      { this.getDevices() }
    </DropdownLayout>
  )

  handleClick(e, index) {
    
    e.preventDefault();

    this.setState({
      currentPage: index
    });
    
  }

  render() {
    
    let Data = null
  
    if(this.props.type === 'table')

      Data = this.getTable(TableLayout)

    else if(this.props.type === 'select')
  
      Data = this.getSelect(DropdownLayout)
    
    const { currentPage } = this.state

    return (  
      <>
        { Data }
        <Pagination aria-label="Page navigation example">
            
            <PaginationItem disabled={currentPage <= 0}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              
            </PaginationItem>
            
            {[...Array(this.state.pageCount)].map((page, i) => 
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                  {console.log(this.state.pageCount)}
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
            
          </Pagination>
      </>
    )
  }
}

export default DeviceList
