import React from "react";
import Image from "next/image"

import * as S from "./styled";
import logo from '../../images/logo.png';

import { HiOutlineLocationMarker, HiUser, HiOutlineQuestionMarkCircle, HiOutlineSearch } from 'react-icons/hi';

const Navbar = () => {

  return (
    <S.NavbarTop>
      <S.NavbarLeft>
        <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
          />
      </S.NavbarLeft>
      <S.NavbarRight>
        <S.SearchBox>
          <input type="text" placeholder="Pesquise por filmes, cinemas…" />
        </S.SearchBox>

        <S.NavBarControler>
          Cidade
          <S.NavBarIcon>
            <HiOutlineLocationMarker className="icon-navbar" />
          </S.NavBarIcon>
        </S.NavBarControler>

        <S.NavBarControler >
          Login
          <S.NavBarIcon>
            <HiUser className="icon-navbar" />
          </S.NavBarIcon>
        </S.NavBarControler>

        <S.NavBarControler>
          Atendimento
          <S.NavBarIcon>
            <HiOutlineQuestionMarkCircle className="icon-navbar" />
          </S.NavBarIcon>
        </S.NavBarControler>

      </S.NavbarRight>
    </S.NavbarTop>
  );
}
 
export default Navbar;
