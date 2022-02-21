import { createContext } from "use-context-selector"

export const CityContext = createContext(null)

export const CityProvider = ({ children, city, setCity})  => {
  return (
    <CityContext.Provider value={{ city, setCity }}>
      { children }
    </CityContext.Provider>
  )
}