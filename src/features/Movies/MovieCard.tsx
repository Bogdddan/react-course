import { Link } from "react-router-dom";

import "./Movies.css";

interface MovieCardProps {
  id: number,
  title: string,
  overview: string,
  popularity: number,
}

export function Moviecard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className="Movies-card">
      <Link to={`/movies/${id}`}>{title} </Link>
      <div className="Movies-card-overview">{overview} </div>
      <div className="Movies-card-pop">{popularity} </div>
    </div>
  );
}