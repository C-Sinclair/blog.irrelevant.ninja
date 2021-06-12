import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import format from 'date-fns/format'
import { Layout, SEO } from '../components'
import styled from '@emotion/styled'
import { VscCalendar } from 'react-icons/vsc'

export default function Template({ data }) {
  const article = data.markdownRemark
  const { frontmatter: {
    title,
    date,
    featuredImage,
    emoji
  } } = article

  
  const formattedDate = useMemo(() => format(new Date(date), "do MMMM yyyy"), [date])

  return (
    <Layout>
      <SEO title="Articles" />
      <article>
        <header>
          <Emoji>{emoji}</Emoji>
          <h1>{title}</h1>
          <DateContainer title={formattedDate}>
            <VscCalendar />
          </DateContainer>
        </header>
        <BannerImage fullWidth fluid={featuredImage.childImageSharp.fluid}
        />
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>
    </Layout>
  )
}

const Emoji = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 1.5em;
`

const DateContainer = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  cursor: help; 
`

const BannerImage = styled(Img)(({ fullWidth }) => `
  ${fullWidth && `
    margin-left: -20px;
    width: calc(100% + 40px);
  `}
`)

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date
        emoji
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
