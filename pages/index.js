import { Container } from "@mui/material";
import Section1 from "../src/containers/Section1";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 1 }}>
      <Section1 />
    </Container>
  );
}

export default Home;
