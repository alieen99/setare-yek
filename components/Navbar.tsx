import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SetareLogo } from './Icons';
import ToggleDarkMode from './ToggleDarkMode';
import { useRouter } from 'next/router'

interface ContainerProps {
  isShown: boolean;
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 12.5px 15px;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background: ${props => (props.isShown ? 'var(--bg-color)' : 'transparent')};
  box-shadow: ${props =>
    props.isShown ? 'rgb(156, 156, 156) 0px 0px 3px' : 'none'};
  transition: all 0.3s ease 0s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .navbar-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
  }

  .navbar-item {
    text-align: right;
    font-size: 16px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    padding: 8px;
  }

  .navbar-item:hover {
    background: rgb(239, 239, 239);
    border-radius: 234px;
    a {
      color: rgb(52, 42, 82);
    }
  }
`;

const NavLink = styled.a`
  color: var(--nav-text);
  text-decoration: none;
  position: relative;
  transform: translateZ(0px);
  backface-visibility: hidden;
  transition-duration: 0.3s;
  font-weight: 400;
  cursor: pointer !important;
`;

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, children }) => (
  <div className="navbar-item nav-item">
    <NavLink href={href}>{children}</NavLink>
  </div>
);

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < 10) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  const {locale,locales,} = useRouter()

  return (
    <Container isShown={show}>
      <div className="navbar-main align-items-center navbar-nav">
        <SetareLogo />
        <NavbarItem href="/about-us">
        {locale==="fa"?"درباره ما":"About Us"}
          </NavbarItem>
        <NavbarItem href="/contact-us">
        {locale==="fa"?"تماس با ما":"Contact"}
        </NavbarItem>
        <NavbarItem href="/services">
        {locale==="fa"?"خدمات":"Services"}
          </NavbarItem>
        <NavbarItem href="/guide-rules">
        {locale==="fa"?"راهنما و قوانین":"Guide and Rules"}
          </NavbarItem>
        <NavbarItem href="/prices-winners">
        {locale==="fa"?"جوایز و برندگان":"Online Version"}
        </NavbarItem>
        <Online>
          {locale==="fa"?"نسخه آنلاین":"Online Version"}
          </Online>
      </div>
      <ToggleDarkMode />
    </Container>
  );
};

export default Navbar;
const Online = styled.div`
  cursor: pointer;
  color:white;
  padding:10px;
  width: auto;
    text-align: center;
    background: rgb(57, 172, 101);
    border-radius: 17px;
    font-size: 12px;
    padding: 7.5px 15px;
`