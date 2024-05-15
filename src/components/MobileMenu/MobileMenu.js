import React from 'react';
import styled from 'styled-components/macro';
import * as Dialog from '@radix-ui/react-dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { QUERIES } from '../../constants';

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  // <button onClick={() => setShowMobileMenu(true)}>
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} >
      <Dialog.Trigger asChild>
        <UnstyledButton>
          <Icon id="menu" size="24"></Icon>
        </UnstyledButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <Close asChild>
              <UnstyledButton>
                <Icon id="close" size="24"></Icon>
              </UnstyledButton>
            </Close>
            {/*<button onClick={onDismiss}>Dismiss menu</button>*/}
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--color-overlay);
`

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0px;
  bottom: 0%;
  right: 0%;
  overflow-y: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 44px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  @media ${QUERIES.md} {
    padding: 0px 0px 32px 32px;
  }
`

const Close = styled(Dialog.Close)`
  align-self: flex-end;
  top: 0;
  right: 0;
  padding: 20px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const NavLink = styled.a`
  white-space: nowrap;
  font-size: calc(18 / 16)rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const FooterLink = styled.a`
  white-space: nowrap;
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-500);
  font-weight: var(--weight-normal);
`

export default MobileMenu;
