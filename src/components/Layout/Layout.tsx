import Head from "next/head"
import Image from "next/image"
import Navbar from "../Navbar"
import Footer from "../Footer"

import imgDestaque from '../../images/destaque.jpg'

import * as S from "./styled"
import { FigCap, FigCaption, FigCaptionMain, FigDate, FigDateFamily } from "../Movies/styled"

const Layout = ({ children, title}:{children:any, title:any}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<S.Wrapper>
				<Navbar />
				<S.Header>
					<S.imgStyled>
						<Image
							src={imgDestaque}
							alt="Banner de destaque do filme malévola"
							width={1440}
							height={500}
						/>
						<FigCaptionMain>
							<FigDateFamily>
                Família
              </FigDateFamily>
              <FigDate>
                Em Alta
              </FigDate>
							<h2>Malévola - Dona do Mal</h2>
							<FigCap>
								Aventura
							</FigCap>
							<FigCap>
								Fantasia
							</FigCap>
            </FigCaptionMain>
					</S.imgStyled>
				</S.Header>

				<S.Container>
					<S.Content>
					<main>
						{children}
					</main>
					</S.Content>
				</S.Container>

				<S.Footer>
					< Footer />
				</S.Footer>
			</S.Wrapper>
		</>
	)
}

export default Layout