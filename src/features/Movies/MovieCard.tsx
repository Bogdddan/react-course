import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import FavorieIcon from '@mui/icons-material/Favorite';

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  image?: string;
  enableUserActions?: boolean;
}

export function Moviecard({
  id,
  title,
  overview,
  popularity,
  enableUserActions,
  image = "/logo512.png",

}: MovieCardProps) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="div" image={image} sx={{ pt: "56.25%" }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">{overview} </Typography>
        <Typography variant="button" display="block" mt={2}>{popularity} </Typography>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
          Details
        </Button>
        {enableUserActions && (
          <Tooltip title="Add to favorites">
            <IconButton>
              <FavorieIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}