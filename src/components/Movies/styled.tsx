import styled from "styled-components"

export const SectionHeader = styled.div`
  display: flex;
  font-size: 8px;
  padding: 0 0 10px 0;

  @media only screen and (min-width: 768px) {
    font-size:12px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`

export const SectionTitle = styled.div`
  text-transform: uppercase;
  padding: 10px 0 5px;

  @media only screen and (min-width: 768px) {
    padding: 50px 0 10px;
  }
`

export const SectionSubTitle = styled.div`
  margin: 0 5%;
  padding: 10px 0 10px;
  color: ${props => props.theme.colors.link};

  & a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    padding: 50px 0 10px;
  }
`

export const FigCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${props => props.theme.colors.text};
  padding: 10px;
  box-sizing: border-box;
  font-size:14px;
  font-weight: bold;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

export const FigDate = styled.div`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.21;
  padding: 0.188rem 0.5rem;
  font-weight: bold;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  -o-transform: skew(-10deg);
  transform: skew(-10deg);
  margin-bottom: 0.5rem !important;
  width: 90px;
`