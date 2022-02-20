import axios from "axios";
import Image from "next/image"

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import * as S from "./styled";
import Link from "next/link";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get(`https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home`);

      setMovies(data);
    };

    fetchMovies();

  }, []);
  
  return (
    <>
      <S.SectionHeader>
        <S.SectionTitle>Em Cartaz</S.SectionTitle>
        <S.SectionSubTitle>Ver todos</S.SectionSubTitle>
      </S.SectionHeader>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
            <Link href={movie.event.trailers[0].url} passHref>
              <a target="_blannk">
                <Image
                  src={movie.event.images[0].url}
                  alt={movie.event.title}
                  width={320}
                  height={450}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )

}

export default Movies