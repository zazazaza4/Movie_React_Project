import PropsTypes from "prop-types";
import { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

import "./movie-list.scss";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
            break;
        }
      } else {
        response = await tmdbApi.similar(props.type, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  id: PropsTypes.string,
};

export default MovieList;
