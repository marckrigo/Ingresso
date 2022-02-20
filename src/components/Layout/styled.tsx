import styled from "styled-components";

export const imgStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
`

export const Wrapper = styled.div`
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
  }

  @media only screen and (min-width: 1024px) {
    width: 1250px;
  }
`

export const Header = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
`

export const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 30px;
  }
`

export const Footer = styled.div`
  background-color: ${props => props.theme.colors.primary};
`