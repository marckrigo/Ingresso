import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import Movies from '../components/Movies';
import {  defaultTheme, GlobalStyles } from "../styles/theme";

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

export default Home;