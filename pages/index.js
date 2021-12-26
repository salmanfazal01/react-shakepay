import { Box } from "@mui/material";
import Section1 from "../src/containers/Section1";
import Section2 from "../src/containers/Section2";
import Section3 from "../src/containers/Section3";
import Section4 from "../src/containers/Section4";

function Home() {
  return (
    <Box sx={{ py: 1 }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  );
}

export default Home;
