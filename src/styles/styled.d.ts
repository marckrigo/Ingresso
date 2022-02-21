import styled from "styled-components"
import theme from "./theme"

export type Theme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      link: string;
    }
  }
}