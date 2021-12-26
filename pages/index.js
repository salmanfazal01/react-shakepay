import { Box } from "@mui/material";
import Section1 from "../src/containers/Section1";
import Section2 from "../src/containers/Section2";

function Home() {
  return (
    <Box sx={{ py: 1 }}>
      <Section1 />
      <Section2 />
    </Box>
  );
}

export default Home;
