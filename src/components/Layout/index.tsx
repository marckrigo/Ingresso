import Head from "next/head"
import Image from "next/image"
import Navbar from "../Navbar"
import Footer from "../Footer";
import Movies from "../Movies";

import imgDestaque from '../../images/destaque.jpg';

import * as S from "./styled";

const Layout = ({ children, title}:{children:any, title:any}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<S.Wrapper>
				<S.Header>
					<S.imgStyled>
						<Image
							src={imgDestaque}
							alt="Destque"
							width={1440}
							height={500}
						/>
					</S.imgStyled>

					<Navbar/>
				</S.Header>

				<S.Container>
					<Movies />
				</S.Container>

				<S.Footer>
					< Footer />
				</S.Footer>
			</S.Wrapper>

			<main>
					{children}
			</main>
		</>
	)
}

export default Layout