import axios from "axios"
import Image from "next/image"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import * as S from "./styled"
import { CityContext } from "../../context/City"
import { useContext } from "use-context-selector"

const Movies = () => {
  const { city } = useContext(CityContext)

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get(`https://api-content.ingresso.com/v0/templates/highlights/${city}/partnership/home`)

      setMovies(data)
    };

    fetchMovies()

  }, [city]);
  
  return (
    <>
      <S.SectionHeader>
        <S.SectionTitle>
          Em Cartaz
        </S.SectionTitle>
        <S.SectionSubTitle>
          <a 
            href="https://www.ingresso.com/filmes" 
            target="_blank" 
            rel="noreferrer">Ver todos
          </a>
        </S.SectionSubTitle>
      </S.SectionHeader>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map((movie:any) => (
          <SwiperSlide key={movie.event.id}>
            <a 
              href={movie.event.trailers[0].url} 
              target="_blannk">

              <Image
                src={movie.event.images[0].url}
                alt={movie.event.title}
                data-city={movie.event.city}
                width={320}
                height={450}
              />
            </a>
            <S.FigCaption>
              <S.FigDate>
                {/* {movie.event.premiereDate.dayAndMonth + "/" + movie.event.premiereDate.year}  */}
                Em alta
              </S.FigDate>
              {movie.event.title}
            </S.FigCaption>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Movies

function BaseContext(BaseContext: any, arg1: (context: unknown) => any) {
  throw new Error("Function not implemented.")
}
