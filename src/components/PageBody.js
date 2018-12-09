import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:900|Open+Sans:400,700');
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  color: #666;
  font: 400 18px/32px Open Sans,San Francisco,sans-serif;
  h1,
  h2,
  h3 {
    font-weight: 900;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    font-family: 'Merriweather', serif;
  }

  h1 {
    font-size: 3em;
    margin: 0 0 3rem 0;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p{
    line-height: 1.4;
    margin: 0 0 1em 0;
  }

  a:not(.anchor){
    transition: 0.2s;
    color: ${props => props.theme.colors.grey};
    border-bottom: 2px solid ${props => props.theme.colors.superhighlight};
    &:hover {
      color: ${props => props.theme.colors.superhighlight};
      border-bottom: 2px solid ${props => props.theme.colors.superhighlight};
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

  ul,
  ol {
    margin: 0 0 2em 1em;
  }

  ul {
    li {
      list-style: disc;
      line-height: 1.4;
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
