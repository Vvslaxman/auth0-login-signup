import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
    
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black}
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .navbar-list {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            font-size: 4.2rem;

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon.menu-outline {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
        
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      
      }
    }
  `;

  const Button = styled.button`
    text-decoration: none;
    background-color: rgb(98 84 243);
  color: rgb(255 255 255);
    padding: 1.2rem 2.2rem;
    border-radius: 30px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
      box-shadow: 0 2rem 2rem 0 rgba(132, 144, 255, 0.3);
      transform: scale(0.86);
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.9rem;
    }
  `;

  const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.helper};
`;

return (
  <Nav>
    <div className={openMenu ? "menuIcon active" : "menuIcon"}>
      <ul className="navbar-list">
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/service"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <UserName>{user.name}</UserName>
          </li>
        )}
        <li>
          {isAuthenticated ? (
            <Button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </Button>
          ) : (
            <Button onClick={() => loginWithRedirect()}>Log In</Button>
          )}
        </li>
      </ul>
      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className={`mobile-nav-icon ${openMenu ? "" : "menu-outline"}`}
          onClick={() => setOpenMenu(!openMenu)}
        />
        <CgCloseR
          name="close-outline"
          className={`close-outline mobile-nav-icon ${
            openMenu ? "menu-outline" : ""
          }`}
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </div>
  </Nav>
);
};

export default Navbar;