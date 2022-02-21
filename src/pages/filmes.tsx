import { ThemeProvider } from 'styled-components'
import {  defaultTheme, GlobalStyles } from "../styles/theme"

import Filmes from '../components/Filmes'
import Layout from '../components/Layout'

const Movies = () => {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Layout title={`Ingresso.com - Fãs de cinema`}>
        <Filmes />
      </Layout>
    </ThemeProvider>
  )
}

export default Movies