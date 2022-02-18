import * as S from "./styled";

import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const {data} = await axios.get(`https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home`);

       console.log(data);

      // setImages(data);
    };

    fetchImages();

  }, []);

  return (
    <>
      <S.moviesContainer>
        Cartaz
      </S.moviesContainer>
    </>
  )

}

export default Movies