import styled from "styled-components";

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