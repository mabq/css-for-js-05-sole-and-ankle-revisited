import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <SideLeft>
          <Logo />
        </SideLeft>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections and More</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" size="24"></Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" size="24"></Icon>
          </UnstyledButton>
          <MobileMenu />
        </MobileNav>
        <SideRight />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.md} {
    justify-content: space-between;
    padding-right: 32px;
    align-items: center;
  }

  @media ${QUERIES.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;


const SideLeft = styled.div`
  flex: 1;
  min-width: calc(180px + clamp(
    1rem,
    14vw - 7.5rem,
    3.3rem
  ));
`;

const SideRight = styled.div`
  flex: 1;

  @media ${QUERIES.md} {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  max-width: 1000px;
  flex: 4;
  display: flex;
  gap: clamp(
    1.5rem,
    14vw - 6.75rem,
    3rem
  );
  justify-content: space-between;

  @media ${QUERIES.md} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.md} {
    display: flex;
    gap: 32px;
  };

  @media ${QUERIES.sm} {
    display: flex;
    gap: 16px;
  }
`;

const NavLink = styled.a`
  white-space: nowrap;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:last-of-type {
    margin-right: 12px;
  }
`;

export default Header;
