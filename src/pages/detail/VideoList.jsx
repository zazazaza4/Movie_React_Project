import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import tmdbApi from "../../api/tmdbApi";

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((video, index) => (
        <Video item={video} key={index} />
      ))}
    </>
  );
};

const Video = ({ item }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title={"trailer"}
      ></iframe>
    </div>
  );
};

Video.propTypes = {
  item: PropTypes.object.isRequired,
};

VideoList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default VideoList;
