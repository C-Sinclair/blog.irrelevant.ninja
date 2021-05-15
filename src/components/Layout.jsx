import { useState } from 'preact/hooks'
import { Sidebar, Tags } from '.'
import { TagContext } from '../hooks'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../styles'

export const Layout = ({ children, title = '', tags = false }) => {
  const [selectedTags, setSelectedTags] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <TagContext.Provider value={{ selectedTags, setSelectedTags }}>
        <GlobalStyles />
        <Root>
          <Sidebar title={title}>{tags && <Tags />}</Sidebar>
          <main>{children}</main>
        </Root>
      </TagContext.Provider>
    </ThemeProvider>
  )
}

const Root = styled.div`
  display: flex;
`
