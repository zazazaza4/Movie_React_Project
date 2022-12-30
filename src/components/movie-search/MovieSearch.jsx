import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Input from "../input/Input";
import { category } from "../../api/tmdbApi";
import Button from "../button/Button";

import "./movie-search.scss";

const MovieSearch = (props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`, {
        replace: true,
      });
    }
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="search"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => {
          setKeyword(e);
        }}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

MovieSearch.propTypes = {
  category: PropTypes.oneOf([...Object.keys(category)]),
  keyword: PropTypes.string,
};

export default MovieSearch;
