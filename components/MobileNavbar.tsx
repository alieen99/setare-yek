import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SetareLogo } from './Icons';
import ToggleDarkMode from './ToggleDarkMode';
import { useRouter } from 'next/router';

interface ContainerProps {
  isShown:boolean;
}
const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 12.5px 15px;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background: ${(props) => (props.isShown ? 'var(--bg-color)' : 'transparent')};
  box-shadow: ${(props) =>
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

const NavbarContainerOuter = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NavbarContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavbarBrand = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: auto;
  }
`;

const NavbarItem = styled.div`
  margin: 0 10px;

  .navbar-item {
    text-align: right;
    font-size: 16px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    padding: 8px;

    &:hover {
      background: rgb(239, 239, 239);
      border-radius: 234px;
      ${NavLink} {
        color: rgb(52, 42, 82);
      }
    }
  }
`;

const NavbarSocial = styled.div`
  display: flex;
  width:90%;
  flex-direction: column;
  align-items: center;
  border-top:1px solid #797979a6;
  padding-top:10px;
  box-sizing:border-box;
  a {
    text-decoration: none;
  }
`;

const NavbarSocialBtn = styled.button`
  font-family:"IranYekanWeb";
  min-width:200px;
  min-height:40px;
  font-weight:100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color:var(--text-color);
  border: none;
  border-radius:25px;
  color:var(--bg-color-secondary);
  font-weight: bold;

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    filter:var(--invert)
  }
`;

interface NavbarToggleProps {
  isOpen: boolean;
}

const NavbarToggle = styled.div<NavbarToggleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  span {
    width: 100%;
    height: 3px;
    border-radius:10px;
    background-color: var(--text-color);
    transition: transform 0.3s ease-in-out;
    transform-origin: center;

    &:first-child {
      transform: translateY(${(props) => (props.isOpen ? '7px' : '0')})
        rotate(${(props) => (props.isOpen ? '45deg' : '0')});
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? '0' : '1')};
    }

    &:last-child {
      transform: translateY(${(props) => (props.isOpen ? '-7px' : '0')})
        rotate(${(props) => (props.isOpen ? '-45deg' : '0')});
    }
  }
`;

const NavbarContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  transition: max-height 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
  margin-top: 10px;
  ${NavbarItem} {
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: opacity 0.3s ease-in-out;
    transition-delay: ${(props) => (props.isOpen ? '0.1s' : '0s')};
  }
`;

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
    <NavbarContainerOuter isShown={show}>
      <NavbarContainerInner>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <NavbarToggle isOpen={isOpen} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </NavbarToggle>
        <ToggleDarkMode/>
        <Online>
        {locale==="fa"?"نسخه آنلاین":"Online Version"}
          </Online>
        </div>
        <NavbarBrand>
            <SetareLogo/>
        </NavbarBrand>

      </NavbarContainerInner>
      <NavbarContent isOpen={isOpen}>
        <NavbarItem>
          <NavLink href="/about-us">
          {locale==="fa"?"درباره ما":"About Us"}
            </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/contact-us">
          {locale==="fa"?"تماس با ما":"Contact"}
            </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/services">
          {locale==="fa"?"خدمات":"Services"}
            </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/guide-rules">
          {locale==="fa"?"راهنما و قوانین":"Guide and Rules"}
            </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/prices-winners">
          {locale==="fa"?"جوایز و برندگان":"Online Version"}
            </NavLink>
        </NavbarItem>
        <NavbarSocial>
          <a href="https://www.instagram.com/setare_yek/">
            <NavbarSocialBtn>
              اینستاگرام ستاره یک
              <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__dark__Instagram-icon-dark.svg" alt="" />
            </NavbarSocialBtn>
          </a>
          <a href="https://t.me/setare_yek">
            <NavbarSocialBtn>
              تلگرام ستاره یک
              <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__dark__telegram-icon-dark.svg" alt="" />
            </NavbarSocialBtn>
          </a>
        </NavbarSocial>
      </NavbarContent>
    </NavbarContainerOuter>
  );
};

export default MobileNavbar;
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