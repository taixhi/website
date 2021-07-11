import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Merriweather',serif;
  font-weight: 800;
  text-transform: capitalize;
  text-align: left;
  margin-top: 1rem;
  color: black;
`
const Text = styled.p`
  font-weight: 300;
  text-align: left;
  padding-left: 1rem;
`
const Header = styled.div`
    margin: 0 auto auto;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
    padding: 1.5em 1.5em 1em;
`
const MetaWrapper = styled.div`
    display: float;
    margin-top: 1rem;
    flex-direction: row;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
`

const BlogHeader = props => {
  return(
      <Header>
        <Title>{props.title}</Title>
        <MetaWrapper>
          <Link to="/">Taichi Kato</Link>
          <Text>{props.description}</Text>
        </MetaWrapper>
        <hr/>
      </Header>
    )
}

export default BlogHeader
