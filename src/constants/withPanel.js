
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

export const DEVICES = [{
  serial : 'G123',
  type : 'G',
  date: '2012/02/01',
  status : 'ACTIVE'
},
{
  serial : 'M112',
  type : 'M',
  date: '2012/03/01',
  status : 'ACTIVE'
},
{
  serial : 'S111',
  type : 'S',
  date: '2013/02/01',
  status : 'ACTIVE'
},{
  serial : 'S112',
  type : 'S',
  date: '2013/02/01',
  status : 'ACTIVE'
}]

export const URL_DEVICES = 'http://127.0.0.1:8000/devices'
export const URL_LINK_SHOP = 'http://127.0.0.1:8000/link_shop'

export const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
 
export const POSITIONS = {
  S111 : [{
    lat : 51.505,
    lon : -0.09,
    datetime : '13/09/2018 02:12',
  },{
    lat : 51.5008,
    lon : -0.01,
    datetime : '13/09/2018 03:12',
  },{
    lat : 51.5007,
    lon : -0.08,
    datetime : '15/09/2018 01:32',
  }],
}
