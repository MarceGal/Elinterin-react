import { styled, connect, Global } from "frontity";
import {  HamburgerIcon } from "./hamburger-icon";
import { CloseIcon } from "./close-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  
  const { isMobileMenuOpen } = state.theme;

  return (
    <>

      <MenuToggle onClick={actions.theme.toggleMobileMenu}>

        {isMobileMenuOpen ? (

          <>
            
            {/* Add some style to the body when menu is open, to prevent body scroll */}

            <Global styles={{ body: { overflowY: "hidden" } }} />

            <CloseIcon color="#fff" size="1.5rem" />

          </>
        ) : (

            <HamburgerIcon color="#666" size="2rem" />

        )}

      </MenuToggle>

      {/* If the menu is open, render the menu modal */}

      {isMobileMenuOpen && <MenuModal />}

    </>

  );

}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
