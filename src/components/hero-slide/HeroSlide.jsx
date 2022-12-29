import { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

import "./hero-slide.scss";
import HeroSlideItem from "./HeroSlideItem";
import TrailerModal from "./TrailerModal";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        console.log(response);
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, index) => (
        <TrailerModal item={item} key={index}></TrailerModal>
      ))}
    </div>
  );
};

export default HeroSlide;
