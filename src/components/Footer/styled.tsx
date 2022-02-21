import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 30px;
  }
`

export const FooterContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
  }

  @media only screen and (min-width: 1024px) {
    width: 1250px;
  }
`

export const FooterTop = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-size: 10px;
  flex-direction: column;

  & .li-social-media {
    
    @media only screen and (min-width: 1024px) {
      margin-left: -150px;
    }
  }

  & .li-help {
    @media only screen and (min-width: 1024px) {
      margin-right: 150px;
    }
  }

  & li {
    list-style-type: none;
    padding: 2px 0;

    & ul {
      display: flex;
      
      & li {
        padding-right: 10px;
      }
    }
    
    & div {
      margin: 5px 0;
    }

    & img {
      height: 24px;
      width: auto;

      @media only screen and (min-width: 768px) {
        height: 40px;
        width: auto;
      }
    }

    & span {
      color: ${props => props.theme.colors.text};
      margin-bottom: 20px;

      @media only screen and (min-width: 768px) {
        font-size:14px;
      }

      @media only screen and (min-width: 1024px) {
        flex-direction: row;
      }
    }

    & .google-icon {
      border: 1px solid #999;
      border-radius: 6px;
    }

    & .facebook {
      background-color: #1977f3;
    }

    & .youtube {
      background-color: #ff3300;
    }

    & .instagram {
      background-color: #f90;
    }

    & .linkedin {
      background-color: #0077b5;
    }
    
    @media only screen and (min-width: 768px) {
      padding: 6px 0;
    }
  }

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
    font-size: 14px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    width: 1000px;
    font-size: 16px;
  }
`

export const SiteMap = styled.ul`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & li {
    list-style-type: none;
    padding: 2px 0;
    
    & div {
      margin: 10px 0;
    }

    & span {
      color: ${props => props.theme.colors.text};
      margin-bottom: 20px;

      @media only screen and (min-width: 768px) {
        font-size:14px;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 14px;
        flex-direction: row;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 6px 0;
    }
  }

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
    flex-direction: row;
    font-size:10px;
  }

  @media only screen and (min-width: 1024px) {
    width: 1250px;
    font-size: 12px;
  }

  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`

export const SocialIcon = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px !important;
  color: ${props => props.theme.colors.text};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 12px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 10px;
  }

  & :hover {
    opacity: 0.5;
  }
`

export const BtnHelp = styled.div`
    font-size: 8px;
    padding: 0.563rem 1.062rem;
    border: 1px solid ${props => props.theme.colors.link};
    border-radius: 4px;
    text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size:10px;
  }

  @media only screen and (min-width: 1024px) {
    font-size:12px;
  }

  & :hover {
    opacity: 0.5;
  }
`

export const Copyright = styled.div`
  color: #979797;
  font-size: 10px;
  padding: 50px 0 0 0;
`