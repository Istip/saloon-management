import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import UserIcon from '../icons/UserIcon';
import ListIcon from '../icons/ListIcon';
import CalendarIcon from '../icons/CalendarIcon';
import { tokens } from '../UI/tokens';

const Navigation = () => {
  const { pathname } = useLocation();

  const { primary, darkGrey } = tokens.colors;

  const navItems = [
    {
      to: '/clients',
      title: 'Clients',
      icon: <UserIcon color={pathname === '/clients' ? primary : darkGrey} />,
    },
    {
      to: '/dashboard',
      title: 'Schedule',
      icon: <ListIcon color={pathname === '/dashboard' ? primary : darkGrey} />,
    },
    {
      to: '/calendar',
      title: 'Calendar',
      icon: (
        <CalendarIcon color={pathname === '/calendar' ? primary : darkGrey} />
      ),
    },
  ];

  return (
    <Navbar>
      <Nav>
        {navItems.map((item, i) => (
          <NavItem key={i}>
            <Link to={item.to}>
              <IconWrapper active={item.to === pathname}>
                {item.icon}
                <IconText active={item.to === pathname}>{item.title}</IconText>
              </IconWrapper>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

// styled components
const lightGrey = tokens.colors.lightGrey;
const darkGrey = tokens.colors.darkGrey;
const primary = tokens.colors.primary;

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  border-top: 1px solid ${lightGrey};
  background: #fff;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 60px;
`;

const NavItem = styled.li`
  list-style-type: none;
  margin-top: -2px;

  a {
    text-decoration: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  border-top: ${({ active }) => (active ? `1px solid ${primary}` : '')};
`;

const IconText = styled.small`
  color: ${({ active }) => (active ? `${primary}` : `${darkGrey}`)};
  font-weight: 500;
  font-size: 10px;
  margin-top: 4px;
`;

export default Navigation;