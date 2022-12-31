import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import MovieList from "../../components/movie-list/MovieList";
import CastList from "./CastList";

import "./detail.scss";
import VideoList from "./VideoList";

const Detail = () => {
  const [item, setItem] = useState(null);

  const { category, id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  let bannerBg = useMemo(() => {
    if (item) {
      return apiConfig.originalImage(item.backdrop_path || item.poster_path);
    }
    return null;
  }, [item]);
  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${bannerBg})` }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{ backgroundImage: `url(${bannerBg})` }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h2 className="title">{item.title || item.name}</h2>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, index) => (
                    <span className="genres__item" key={index}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
