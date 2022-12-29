import PropsTypes from "prop-types";
import { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category } from "../../api/tmdbApi";

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
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  id: PropsTypes.string.isRequired,
};

export default MovieList;
