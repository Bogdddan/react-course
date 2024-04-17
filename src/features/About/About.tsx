import { Container } from "@mui/material";
import CountdownText from "./CountdownText";
import { CountdownVideo } from "./CountdownVideo";
// import MapView from "./MapView";

export function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownVideo />
      <CountdownText />
      {/* <MapView/> */}
    </Container>
  )
}