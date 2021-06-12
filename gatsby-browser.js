import React from "react"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./src/styles"
import { SidebarProvider } from "./src/hooks/useSidebar"
import { Global } from '@emotion/react'
import { globalStyles } from './src/styles'

export const wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {element}
    </ThemeProvider>
  </SidebarProvider>
)