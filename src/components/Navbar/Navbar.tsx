/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"

import { HiOutlineLocationMarker, HiOutlineUser, HiOutlineQuestionMarkCircle } from 'react-icons/hi'

import * as S from "./styled"

const Navbar = () => {
  return (
    <>
      <S.NavbarTop>
        <S.NavbarContent>
          <S.NavbarLeft>
            <a href = "./">
              <img 
                width="20" 
                height="20" 
                src="/logo.png" 
                alt="Logo da ingresso.com">
              </img>
              <S.NavbarTitle>ingresso.com</S.NavbarTitle>
            </a>
          </S.NavbarLeft>
          <S.NavbarRight>
            <S.SearchBox>
              <input type="text" placeholder="Pesquise por filmes, cinemas…" />
            </S.SearchBox>

            <S.NavbarControler>
              Cidade
              <S.NavbarIcon>
                <HiOutlineLocationMarker className="icon-navbar" />
              </S.NavbarIcon>
            </S.NavbarControler>

            <S.NavbarControler >
              Login
              <S.NavbarIcon>
                <HiOutlineUser className="icon-navbar" />
              </S.NavbarIcon>
            </S.NavbarControler>

            <S.NavbarControler>
              <a 
                href="https://atendimento.ingresso.com/" 
                target="_blank" 
                rel="noreferrer">
                Atendimento
                <S.NavbarIcon>
                  <HiOutlineQuestionMarkCircle className="icon-navbar" />
                </S.NavbarIcon>
              </a>
            </S.NavbarControler>
          </S.NavbarRight>
        </S.NavbarContent>
      </S.NavbarTop>

      <S.NavbarBottom>
        <S.NavbarContent>
          <S.NavbarLeft></S.NavbarLeft>
          <S.NavbarBottomRight>
            <ul>
              <li>
                <Link href="/filmes" >
                  Filmes
                </Link>
              </li>
              <a href="#">
                <li>Cinemas</li>
              </a>
              <a href="#">
                <li>Eventos</li>
              </a>
              <a href="#">
                <li>Rock in Rio</li>
              </a>
          </ul>
          </S.NavbarBottomRight>
          </S.NavbarContent>
      </S.NavbarBottom>
    </>
  )
}
 
export default Navbar
