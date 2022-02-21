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

export const FigCaptionMain = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${props => props.theme.colors.text};
  padding: 10px;
  box-sizing: border-box;
  font-size:14px;
  font-weight: bold;
  width: 270px;
  display:none;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

export const FigCap = styled.div`
  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 1.21;
  padding: 0.188rem 0.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem !important;
  width: 70px;
  border: 1px solid #fff;
  margin-top: 10px;
  margin-right: 5px;
`

export const FigDate = styled.div`
  color: #333;
  background-color: #f90;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 1.21;
  padding: 0.188rem 0.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem !important;
  width: 60px;
`
export const FigDateFamily = styled.div`
  color: #333;
  background-color: #00ff62;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 1.21;
  padding: 0.188rem 0.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem !important;
  width: 60px;
  margin-right: 20px;
`