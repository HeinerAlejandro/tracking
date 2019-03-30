import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../resources/location.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import './styles.css'
import { callbackify } from 'util';
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'logo' }}
        />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to ="/account/dashboard">Inicio</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/account/settings">Ajustes</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/account/profile">Perfil</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={ this.props.data_user.imageUrl ? this.props.data_user.imageUrl : '/media/user-not-found.png'} className=  "img-avatar" alt = { this.props.data_user.name } />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem onClick = {e => this.props.redirectProfile(e) } ><i className="fa fa-user"></i>Perfil</DropdownItem>
              <DropdownItem onClick = {e => this.props.redirectSettigns(e) }><i className="fa fa-wrench"></i>Ajustes</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i>cerrar sesion</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
