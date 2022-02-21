/* eslint-disable @next/next/no-img-element */

import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import * as S from "./styled"

const Footer = () => {
  return (
    <>
      <S.FooterContainer>
       <S.FooterContent>
         <S.FooterTop>
          <li>
            <span role="button">Baixe Nosso APP</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://www.ingresso.com/filmes" 
                    target="_blank" 
                    rel="noreferrer">
                      <img 
                        width="130" 
                        height="45" 
                        src="https://ingresso-a.akamaihd.net/catalog/Content/img/apple-9a270c319c.svg" 
                        alt="Icone Apple">
                      </img>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/filmes" 
                    target="_blank" 
                    rel="noreferrer">
                      <img 
                        className="google-icon" 
                        width="130" 
                        height="45" 
                        src="https://ingresso-a.akamaihd.net/catalog/Content/img/google-play-530d88bac6.png" 
                        alt="Icone Google">
                      </img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          <li className='li-social-media'>
            <span role="button">Siga-nos nas Redes</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://www.facebook.com/ingressocom/" 
                    target="_blank" 
                    rel="noreferrer">
                      <S.SocialIcon className='facebook'>
                        <FaFacebookF />
                      </S.SocialIcon>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/user/Ingressocom" 
                    target="_blank" 
                    rel="noreferrer">
                      <S.SocialIcon className='youtube'>
                        <FaYoutube />
                      </S.SocialIcon>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/ingressocom/" 
                    target="_blank" 
                    rel="noreferrer">
                      <S.SocialIcon className='instagram'>
                        <FaInstagram />
                      </S.SocialIcon>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/ingressocom/" 
                    target="_blank" 
                    rel="noreferrer">
                      <S.SocialIcon className='linkedin'>
                        <FaLinkedinIn />
                      </S.SocialIcon>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='li-help'>
            <span role="button">Preicsa de Ajuda?</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/" 
                    target="_blank" 
                    rel="noreferrer">
                      <S.BtnHelp>
                        Atendimento
                      </S.BtnHelp>
                  </a>
                </li>
              </ul>
            </div>
          </li>
         </S.FooterTop>
         <S.SiteMap>
          <li>
            <span role="button">Menu</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://www.ingresso.com/filmes" 
                    target="_blank" 
                    rel="noreferrer">Filmes
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/cinemas"
                    target="_blank"
                    rel="noreferrer">Cinemas
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/eventos"
                    target="_blank"
                    rel="noreferrer">Eventos
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span role="button">Institucional</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://www.ingresso.com/intitucional" 
                    target="_blank" 
                    rel="noreferrer">Quem Somos
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/sao-paulo/home/institucional/assessoria-imprensa" 
                    target="_blank" 
                    rel="noreferrer">Acessoria de Impresa
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ingresso.github.io/ingresso-bootstrap/" 
                    target="_blank" 
                    rel="noreferrer">Bootstrap Ingresso.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://b2b.ingresso.com/?utm_source=site&utm_medium=link&utm_campaign=footer-site-ingresso" 
                    target="_blank" 
                    rel="noreferrer">Vale-Presente Corporativo
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/sao-paulo/home/cidades" 
                    target="_blank" 
                    rel="noreferrer">Ingresso.com atende
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.movieid.com/?utm_source=site&utm_medium=link&utm_campaign=footer-site-ingresso" 
                    target="_blank" 
                    rel="noreferrer">movieID.com
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span role="button">Políticas</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br/sections/360000077411-Pol%C3%ADticas-de-Privacidade-e-Seguran%C3%A7a%7C" 
                    target="_blank" 
                    rel="noreferrer">Privacidade e Segurança
                  </a>
                </li>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br/sections/360000071011-Pol%C3%ADticas-de-Meia-Entrada" 
                    target="_blank" 
                    rel="noreferrer">Meia-entrada
                  </a>
                </li>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br/sections/360000067652-Pol%C3%ADticas-de-Troca-e-Cancelamento" 
                    target="_blank" 
                    rel="noreferrer">Trocas e Cancelamentos
                  </a>
                </li>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br/sections/360000070991-Leis-Estaduais-e-Municipais" 
                    target="_blank" 
                    rel="noreferrer">Leis Estaduais e Municipais
                  </a>
                </li>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br/sections/360000244526-Termos-de-Uso" 
                    target="_blank" 
                    rel="noreferrer">Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <span role="button">Dúvidas</span>
            <div>
              <ul>
                <li>
                  <a 
                    href="https://atendimento.ingresso.com/hc/pt-br" 
                    target="_blank" 
                    rel="noreferrer">Atendimento
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ingresso.com/sao-paulo/home/institucional/alerta-emails-sites-falsos" 
                    target="_blank" 
                    rel="noreferrer">Site ou e-mails falsos
                  </a>
                </li>
                <li>
                  <a 
                    href="http://www.procon.rj.gov.br/" 
                    target="_blank" 
                    rel="noreferrer">Procon-RJ
                  </a>
                </li>
              </ul>
            </div>
          </li>
         </S.SiteMap>
         <S.Copyright>
          <p>Ingresso.com Ltda / CNPJ: 00.860.640/0001-71 <strong>Endereço</strong>: Rua da Quitanda, 86 - 9º andar - Centro - RJ - 20091-005</p>
          <a href="https://atendimento.ingresso.com/hc/pt-br" target="_blank" rel="noreferrer">Atendimento ao cliente</a> © 2022 - Copyright Ingresso.com - todos os direitos reservados
         </S.Copyright>
       </S.FooterContent>
      </S.FooterContainer>
    </>
  )
}

export default Footer