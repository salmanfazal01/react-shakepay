import { Box } from "@mui/material";
import Head from "next/head";
import Section1 from "../src/containers/Section1";
import Section2 from "../src/containers/Section2";
import Section3 from "../src/containers/Section3";
import Section4 from "../src/containers/Section4";

function Home() {
  return (
    <Box sx={{ py: 1 }}>
      <Head>
        <title>Shakepay - Buy/Sell Bitcoin in Canada</title>
        <meta
          name="image"
          property="og:image"
          content="https://shakepay.com/images/og.png"
        />
        <meta name="url" property="og:url" content="https://shakepay.com" />
        <meta
          name="description"
          property="og:description"
          content="Shakepay allows Canadians to buy/sell bitcoin and pay their friends. We're on a mission to create open access to building wealth."
        />
      </Head>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  );
}

export default Home;
