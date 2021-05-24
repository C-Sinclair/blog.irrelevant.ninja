import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Sidebar, Tags } from '.'
import { TagContext } from '../hooks'
import { Global } from '@emotion/react'
import { globalStyles, theme } from '../styles'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

export const Layout = ({ children, tags = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [selectedTags, setSelectedTags] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <TagContext.Provider value={{ selectedTags, setSelectedTags }}>
        <Global styles={globalStyles} />
        <Root>
          <Sidebar title={data.site.siteMetadata.title}>{tags && <Tags />}</Sidebar>
          <main>{children}</main>
        </Root>
      </TagContext.Provider>
    </ThemeProvider>
  )
}

const Root = styled.div`
  display: flex;
`
