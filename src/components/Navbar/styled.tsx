import styled from "styled-components";

export const NavbarTop = styled.div`
  margin: 0 auto;
  height: 20px;
  background: rgba(0,0,0,.8);
  display: flex;
  position: relative;
  z-index: 9999;

  @media only screen and (min-width: 768px) {
    padding: 10px;
    height: 40px;

    & img {
      height: 30px;
      width: auto;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px;
    height: 60px;

    & img {
      height: 40px;
    }
  }
`

export const NavbarContent = styled.div`
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 20px);
  }

  @media only screen and (min-width: 1024px) {
    width: 1250px;
  }
`

export const NavbarBottom = styled.div`
  margin: 0 auto;
  background: rgba(0,0,0,.7);
  position: relative;
  z-index: 9999;
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    padding: 10px;
    height: 40px;

    & img {
      height: 30px;
      width: auto;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px;
    height: 50px;

    & img {
      height: 40px;
    }
  }
`

export const NavbarTitle = styled.span`
  color: ${props => props.theme.colors.link};
  font-size: 14px;
  padding: 0 10px;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`

export const NavbarLeft = styled.section`
  display: flex;
  flex: 1;
  align-items: center;

  & a {
    display: flex;
    align-items: center;
  }
`

export const NavbarBottomLeft = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
`

export const NavbarBottomRight = styled.section`
  font-size: 10px;
  display: flex;
  align-items: center;

  align-content: center;
  & ul {
    list-style-type: none;
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.theme.colors.link};

    & li {
      padding: 0 10px;

        & a:active {
        color: orange;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`

export const NavbarRight = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

export const NavbarControler = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 8px;
  display: flex;
  padding: 0 5px;
  align-items: center;

  & a {
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    padding: 0 5px;
  }
`

export const NavbarIcon = styled.div`
  color: ${props => props.theme.colors.link};
  padding: 0 2px;
  font-size: 10px;
  display: flex;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    padding: 0 6px;
    font-size: 20px;
  }
`

export const SearchBox = styled.div`
  display: none;
  padding: 0px 100px;
  height: 35px;;

  & input{
    width: 300px;
    padding: 5px;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`