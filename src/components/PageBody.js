import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;900&family=Open+Sans&display=swap');
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  color: #000;
  font: 400 inherit 'Noto Serif SC','Georgia',sans-serif;
  h1,
  h2,
  h3 {
	color: #004;
    font-weight: 900;
    line-height: 1.25;
    margin: 0 0 1em 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 2.5em;
    margin: 0 0 2rem 0;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p{
    line-height: 1.5;
    margin: 0 0 1em 0;
  }

  a:not(.anchor){
	color: #000;
    transition: 0.2s;
    border-bottom: 1px solid ${props => props.theme.colors.superhighlight};
    &:hover {
      color: ${props => props.theme.colors.superhighlight};
      border-bottom: 1px solid ${props => props.theme.colors.superhighlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }
  img + em { 
    font-weight: 600;
    font-size: 0.8em;
    display: block;
    padding: 0.5em;
    font-family: 'Noto Serif SC', serif;
    font-style: normal;
    text-align: center !important
  }
  ul,
  ol {
    margin: 0 0 2em 1em;
  }

  ul {
    li {
      list-style: disc;
      line-height: 1.4;
	  margin: 1em 0;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  img {
    max-width: ${props => props.theme.sizes.maxWidthCentered};
  }
  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
