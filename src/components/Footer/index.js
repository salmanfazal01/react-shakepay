import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Logo } from "../../utils/images";
import CustomContainer from "../CustomContainer";
import LanguageIcon from "@mui/icons-material/Language";

const footerItems = [
  { title: "PRODUCT", items: ["Fees", "Charts", "Blog", "Feedback"] },
  {
    title: "COMPANY",
    items: [
      "About us",
      "Help",
      "Wall of champions",
      "Careers",
      "Terms of use",
      "Privacy policy",
      "Production orders",
    ],
  },
  {
    title: "SOCIAL",
    items: ["Discord", "Twitter", "Reddit", "Facebook", "YouTube", "Instagram"],
  },
];

const Footer = () => {
  const theme = useTheme();

  const BusinessCard = () => (
    <Grid item xs={12} md={3}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
        <Image
          src={Logo}
          alt="Shakepay Logo"
          height={45}
          width={45}
          objectFit="contain"
        />
        <Typography variant="h6">Shakepay Inc.</Typography>
      </Stack>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: theme.palette.primary.grey,
          mb: 3,
        }}
      >
        Montreal, Canada 🍁
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          cursor: "pointer",
          mb: 3,
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }}
      >
        <LanguageIcon sx={{ color: theme.palette.primary.grey }} />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Français
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: theme.palette.primary.grey,
          mb: 1,
        }}
      >
        REGULATED
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: theme.palette.primary.grey,
        }}
      >
        FINTRAC #M17065696
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: theme.palette.primary.grey,
        }}
      >
        AMF #904007
      </Typography>
    </Grid>
  );

  return (
    <Box>
      <Divider />
      <CustomContainer sx={{ py: 8, px: 4 }}>
        <Grid container spacing={2} justifyContent="space-evenly">
          <BusinessCard />

          {footerItems.map((items) => (
            <Grid item xs={12} md={3} key={items.title}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.grey,
                  mb: 1,
                }}
              >
                {items.title}
              </Typography>

              {items.items.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontWeight: 500,
                    mb: 0.3,
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
