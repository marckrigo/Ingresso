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
`

export const SectionSubTitle = styled.div`
  margin: 0 5%;
  color: ${props => props.theme.colors.link};
`