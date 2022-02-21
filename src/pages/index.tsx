import { ThemeProvider } from 'styled-components'
import {  defaultTheme, GlobalStyles } from "../styles/theme"

import Layout from '../components/Layout'
import Movies from '../components/Movies'

const Home: React.FC = () => {

  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Layout title={`Ingresso.com - Fãs de cinema`}>
          <Movies />
        </Layout>
      </ThemeProvider>
  )
}

export default Home