import { AppBar, Box, Toolbar, Typography, Link, Button } from "@mui/material";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext, anonymusUser } from "./AuthContext";

interface AuthHeaderProps {
  onLogin(): void,
  onLogout(): void,
}

export function AppHeader({ onLogin, onLogout }: AuthHeaderProps) {

  return (
    <AppBar position="static">
      <Toolbar>
        <LiveTvOutlinedIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit">The Movies DB</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <nav>
            <HeaderLink to='/'>Home</HeaderLink>
            <HeaderLink to='/movies'>Movies</HeaderLink>
            <HeaderLink to='/about'>About</HeaderLink>
          </nav>
        </Box>
        <AuthSection onLogin={onLogin} onLogout={onLogout} />
      </Toolbar>
    </AppBar>
  )
}

interface AuthSectioProps {
  onLogin(): void,
  onLogout(): void,
}

function AuthSection({ onLogin, onLogout }: AuthSectioProps) {
  const auth = useContext(AuthContext);
  const loggedIn = auth.user != anonymusUser;
  const username = auth.user.name

  if (loggedIn) {
    return (
      <>
        <Typography>Hello, {username}!</Typography>
        <Button color="inherit" variant="outlined" sx={{ ml: 1.5 }} onClick={onLogout}>Log out</Button>
      </>
    )
  }

  return (
    <Button color="inherit" variant="outlined" onClick={onLogin}>Log in</Button>
  )
}

function HeaderLink({ children, to }: { to: string, children: React.ReactNode }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5 }}>
      {children}
    </Link>
  )
}