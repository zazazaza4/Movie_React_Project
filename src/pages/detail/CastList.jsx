import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const CastList = (props) => {
  const [casts, setCasts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((cast, index) => (
        <div key={index} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                cast.backdrop_path || cast.poster_path
              )})`,
            }}
          ></div>
          <p className="casts__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
};

CastList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CastList;
