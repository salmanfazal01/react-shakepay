import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Coins, Gift, Tree } from "../../utils/images";

const HolidaysBanner = ({ sx = {}, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        px: 1.5,
        py: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.background.darkerblue,
        color: "#fff",
        ...sx,
      }}
      {...props}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <Image src={Gift} alt="Christmas Gift" height={32} width={32} />
        </Box>

        <Box>
          <Image src={Tree} alt="Christmas Tree" height={32} width={32} />
        </Box>

        <Box>
          <Image src={Coins} alt="Christmas Coins" height={32} width={32} />
        </Box>

        <Stack alignItems="flex-start">
          <Typography sx={{ fontWeight: 500 }}>
            Happy holidays! The Shakepay Card&apos;s invite-only launch is
            happening
          </Typography>
          <Button sx={{ p: 0, textTransform: "inherit" }}>Learn More</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HolidaysBanner;
