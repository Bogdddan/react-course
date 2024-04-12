import { Movie, fetchMovies } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Moviecard } from "./MovieCard";

import styles from './Movies.module.scss'
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: MoviesProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          movies.map((m) => (
            <Moviecard
              key={m.id}
              id={m.id}
              title={m.title}
              overview={m.overview}
              popularity={m.popularity}
              image={m.image}
            />
          ))
        )}
      </div>
    </section>
  )
}

const mapStateYoProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading
});

const connector = connect(mapStateYoProps);

export default connector(Movies);