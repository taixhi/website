import React from 'react'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  font-size: 14px;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  font-color: #eee;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <i>Man is nothing else but that which he makes of himself. <br/> – Sartre</i>
        <SocialIcons />
      </Item>
    </List>
  </Wrapper>
)

export default Footer
