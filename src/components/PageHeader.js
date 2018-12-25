import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Merriweather',serif;
  font-weight: 800;
  text-transform: capitalize;
  text-align: center;
  margin-top: 1rem;
  color: black;
`
const Text = styled.p`
  font-weight: 300;
  text-align: center;
  margin-top: 1rem;
`
const Header = styled.div`
    margin: 0 auto auto;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
    padding: 1.5em 1.5em 1em;
    flex-grow: 1;
`

const PageHeader = props => {
  return(
      <Header>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
      </Header>
    )
}

export default PageHeader
