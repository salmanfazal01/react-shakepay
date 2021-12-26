/* eslint-disable @next/next/no-img-element */
import { Stack, Box, Container } from "@mui/material";
import React from "react";
import CustomContainer from "../../components/CustomContainer";
import {
  BitcoinMagazine,
  TechVibes,
  Bloomberg,
  Forbes,
  FinancialPost,
} from "../../utils/images";

const Section2 = () => {
  const Image = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{
        maxHeight: "30px",
        height: "100%",
        width: "100%",
        objectFit: "contain",
        filter: "opacity(60%)",
      }}
    />
  );

  return (
    <Stack
      sx={{
        backgroundColor: "#F6F9FC",
        minHeight: 166,
        height: "100%",
        p: 2,
        py: { xs: 8 },
      }}
    >
      <CustomContainer>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          //   justifyContent="space-around"
          alignItems="center"
        >
          <Box sx={{ flexGrow: 1 }}>
            <Image src={BitcoinMagazine} alt="Bitcoin Magazine" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={TechVibes} alt="Tech Vibes" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={Bloomberg} alt="Bloomberg" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={Forbes} alt="Forbes" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={FinancialPost} alt="Financial Post" />
          </Box>
        </Stack>
      </CustomContainer>
    </Stack>
  );
};

export default Section2;
