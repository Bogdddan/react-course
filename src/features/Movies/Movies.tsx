import { Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Moviecard } from "./MovieCard";

import "./Movies.css";

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className="Movies-list">
        {movies.map((m) => (
          <Moviecard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity} />
        ))}
      </div>
    </section>
  )
}

const mapStateYoProps = (state: RootState) => ({
  movies: state.movies.top
});

const connector = connect(mapStateYoProps);

export default connector(Movies);