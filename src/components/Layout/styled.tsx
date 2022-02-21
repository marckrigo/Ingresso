import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;
`

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: -20px;
  background-color: ${props => props.theme.colors.primary};

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
    margin-top: -100px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: -120px;
    width: 1250px;
  }
`

export const imgStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  position: relative;
  z-index: 1;
`

export const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    width: 1250px;
  }

  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 10px 50px;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
  }

  @media only screen and (min-width: 1024px) {
    width: 1250px;
  }
`

export const Footer = styled.div`
  background-color: ${props => props.theme.colors.primary};
`