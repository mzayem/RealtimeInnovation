import styled from "styled-components";
import Logo from "../assets/navbar-logo.png";
import { useState } from "react";

const Navbar = styled.nav`
  padding: 1rem 5rem;
  img.logo {
    height: 48px;
    object-fit: cover;
  }
  .container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.125rem;
      position: relative;

      &:hover {
        color: #eafb27;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          height: 4px;
          width: 100%;
          background-color: #eafb27;
        }
      }
    }
  }

  button {
    all: unset;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  .mobile-dropdown-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .mobile-dropdown-button {
      display: block;
    }
    padding: 1rem;
  }
`;

const MobileDropdown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    all: unset;
    color: white;
    font-size: 1.25rem;
    padding: 2.5rem;
    text-align: center;
    background: #22252d;
  }
`;

const routes = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar>
        <div className="container">
          <img className="logo" src={Logo} />
          <div className="nav-links">
            {routes.map((route) => (
              <a href={route.href} key={route.href}>
                {route.label}
              </a>
            ))}
          </div>
          <button
            className="mobile-dropdown-button"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </button>
        </div>
      </Navbar>
      <MobileDropdown style={{ display: open ? "flex" : "none" }}>
        {routes.map((route) => (
          <a
            href={route.href}
            key={route.href}
            onClick={() => setOpen((prev) => !prev)}
          >
            {route.label}
          </a>
        ))}
      </MobileDropdown>
    </>
  );
}
