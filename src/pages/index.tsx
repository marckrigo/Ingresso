import { useState } from 'react'
import { CityProvider } from '../context/City'

import { ThemeProvider } from 'styled-components'
import {  defaultTheme, GlobalStyles } from "../styles/theme"

import Layout from '../components/Layout'
import Movies from '../components/Movies'

const Home: React.FC = () => {

  const [city, setCity] = useState('1')

  const onSetCity = () => {
    const newCity = city === '1' ? '2' : '1'
    setCity(newCity)
  }

  return (
    <CityProvider city={city} setCity={onSetCity}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Layout title={`Ingresso.com - Fãs de cinema`}>
          <Movies />
        </Layout>
      </ThemeProvider>
    </CityProvider>
  )
}

export default Home