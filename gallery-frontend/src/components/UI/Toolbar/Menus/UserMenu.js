import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Hello, {user.username}!
      </DropdownToggle>
      <DropdownMenu right>
        <NavLink
          tag={RouterNavLink}
          to={/images/ + 'author/' + user._id}
          exact
        >
          My images
        </NavLink>
        <NavLink
          tag={RouterNavLink}
          to='/images/new'
          exact
        >
          Create image
        </NavLink>
        <DropdownItem divider />
        <DropdownItem onClick={logout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
};

export default UserMenu;