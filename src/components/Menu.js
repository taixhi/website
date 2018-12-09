import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  ${'' /* background: ${props => props.theme.colors.base}; */}
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: auto;
  }

  li {
    display: inline-block;
    margin-left: 4em;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-weight: 300;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.superhighlight};
      border-bottom: 2px solid ${props => props.theme.colors.superhighlight};
    }
  }
`

const activeLinkStyle = {
  color: '#d60054',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          {/* <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/photography/" activeStyle={activeLinkStyle}>
              Photography
            </Link>
          </li>
          <li>
            <a href="mailto:tkato.main@gmail.com" activeStyle={activeLinkStyle}>
              E-mail
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
