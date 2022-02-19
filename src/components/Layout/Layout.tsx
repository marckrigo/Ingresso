import Head from "next/head"
import Image from "next/image"
import Navbar from "../Navbar"
import Footer from "../Footer";

import imgDestaque from '../../images/destaque.jpg';

import * as S from "./styled";

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
							alt="Destque"
							width={1440}
							height={500}
						/>
					</S.imgStyled>
				</S.Header>

				<S.Container>
				<main>
					{children}
				</main>
				</S.Container>

				<S.Footer>
					< Footer />
				</S.Footer>
			</S.Wrapper>

		</>
	)
}

export default Layout