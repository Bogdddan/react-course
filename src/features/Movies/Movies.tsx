import { Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Moviecard } from "./MovieCard";

import styles from './Movies.module.scss'
import { useEffect, useState } from "react";

async function getNowPlaying() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGM4Nzg1NTViMWFkMTgxMGE4OGIzZTAzYjQ4YTIwMyIsInN1YiI6IjY2MTdmNGUwN2UxMmYwMDE3Y2YyMjczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp79u5VOH2I7lGq0Wgs152lUm3YiiILiHbsOEdaynD0'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options)
  const json = response.json();

  return json;
}

export function MoviesFetch(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await getNowPlaying();
      setMovies(response.results);
    }

    loadData();

  }, [])

  return <Movies movies={movies}/>
}

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className={styles.list}>
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