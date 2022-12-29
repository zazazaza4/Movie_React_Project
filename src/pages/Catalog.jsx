import { useParams } from "react-router-dom";
import { category as categoryTmdb } from "../api/tmdbApi";
import PageHeader from "../components/page-header/PageHeader";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === categoryTmdb ? "Movie" : "TV Series"}
      </PageHeader>
    </>
  );
};

export default Catalog;
