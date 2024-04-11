import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

interface MovieState {
  top: Movie[]
}

const initialState: MovieState = {
  top: [
    {id: 1, title: 'inception', popularity: 98, overview: "Dreams..."},
    {id: 2, title: 'the godfather', popularity: 97, overview: "Godfather..."},
    {id: 3, title: 'inception', popularity: 96.5, overview: "Batman..."},
    {id: 4, title: 'inception', popularity: 96, overview: "Part II..."}
  ]
}

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
}

export default moviesReducer;