import styled from "styled-components";

export const NavbarTop = styled.div`
  height: 20px;
  background: rgba(0,0,0,.8);
  padding: 20px;
  display: flex;

  @media only screen and (min-width: 768px) {
    height: 40px;
  }

  @media only screen and (min-width: 1024px) {
    height: 60px;
  }
`

// export const NavbarBottom = styled.div`
//   height: 50px;
//   display: flex;
//   background: rgba(0,0,0,.7);
// `

// export const NavbarTitle = styled.span`
//   color: ${props => props.theme.colors.link};
//   font-size: 20px;
// `

export const NavbarLeft = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  & img{
    height: 10px;
  }
`

export const NavbarRight = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

export const NavBarControler = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 8px;
  display: flex;
  padding: 0 5px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    padding: 0 5px;
  }
`

export const SearchBox = styled.div`
  display: none;
  padding: 0px 100px;
  height: 35px;;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
  & input{
    width: 300px;
    padding: 5px;
  }
`

export const NavBarIcon = styled.div`
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