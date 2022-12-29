import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./movie.card.scss";

const MovieCard = ({ item }, props) => {
  const link = "/" + category[props.category] + "/" + item?.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieCard;
