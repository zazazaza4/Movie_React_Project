import { useParams } from "react-router-dom";
import { category as categoryTmdb } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
import PageHeader from "../components/page-header/PageHeader";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === categoryTmdb.movie ? "Movie" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section md-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
