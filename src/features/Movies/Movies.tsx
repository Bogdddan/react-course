import { Movie, fetchMovies } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Moviecard } from "./MovieCard";

import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import { AuthContext, anonymusUser } from "../../AuthContext";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: MoviesProps) {
  const dispatch = useAppDispatch();
  // const movies = useAppSelector((state) => state.movies.top);
  // const loading = useAppSelector((state) => state.movies.loading);

  const { user } = useContext(AuthContext);
  const loggedIn = user != anonymusUser;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>Now playing</Typography>

      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Grid container spacing={4}>
          {movies.map((m) => (
            <Grid item key={m.id} xs={12} sm={6} md={4}>
              <Moviecard
                key={m.id}
                id={m.id}
                title={m.title}
                overview={m.overview}
                popularity={m.popularity}
                image={m.image}
                enableUserActions={loggedIn}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

const mapStateYoProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading
});

const connector = connect(mapStateYoProps);

export default connector(Movies);