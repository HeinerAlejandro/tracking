import React from 'react'
import { Tabs, Icon } from 'antd'
import SectionValueToMap from './SectionValueToMap'
import SectionTrackingView from './../../views/UserInterfacePage/OperationSectionView/SectionTrackingView'
import SectionValueInModule from './SectionValueInModule'

import './styles.css'

const TabPane  = Tabs.TabPane

const getDisabled = (default_activate, type_device) => (
    default_activate !== type_device? true : false
)

const tabs = [
    {
        title : 'Valor en mapa',
        type : 'M',
        icon : 'eye',
        Module : SectionValueToMap
    },
    {
        title : 'Seguimiento',
        type : 'S',
        icon : 'fall',
        Module : SectionTrackingView
    },
    {
        title : 'Valor en Modulo',
        type : 'G',
        icon : 'tablet',
        Module : SectionValueInModule
    }
]

const OperationSection = ({device_name, data_device}) => {

    const defaultTabPane = (data_device && data_device.status === 'ACTIVE' && data_device.type)
    console.log(defaultTabPane)
    return(
        <Tabs 
            className = 'operation-section'
            defaultActiveKey = { defaultTabPane } 
            activeKey = { defaultTabPane } 
        >                
            { tabs.map(({type, icon, Module, title}) => (
                <TabPane
                    key = { type } 
                    tab = {<span><Icon type = {icon} /> { title } </span>}
                    disabled = { getDisabled(defaultTabPane, type) } >
                    <Module />
                </TabPane>
            )) }
        </Tabs>
    )
}

export default OperationSection

