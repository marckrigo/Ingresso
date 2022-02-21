import axios from "axios"
import Image from "next/image"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import * as S from "./styled"
import { FigCaption, FigDate } from "../Movies/styled"

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get(`https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home`)

      setMovies(data)
    };

    fetchMovies()

  }, []);
  
  return (
    <>
      <S.SectionHeader>
        <S.SectionTitle>
          Filmes
        </S.SectionTitle>
      </S.SectionHeader>
      
      <Swiper
        slidesPerView={5}
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
                width={420}
                height={650}
              />
            </a>
            <FigCaption>
              <FigDate>
                {movie.event.premiereDate.dayAndMonth + "/" + movie.event.premiereDate.year} 
              </FigDate>
              {movie.event.title}
            </FigCaption>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Movies