/* eslint-disable @next/next/no-img-element */
import { Avatar, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomContainer from "../../components/CustomContainer";
import {
  Lightning,
  DollarSign,
  Users,
  Lock,
  CreditCard,
  Regulated,
} from "../../utils/images";

const stats = [
  { title: "10 minutes", subtitle: "to own your first bitcoin" },
  { title: "$5B+", subtitle: "in digital currency bought & sold" },
  { title: "800,000+", subtitle: "Canadians served" },
];

const services = [
  {
    icon: Lightning,
    title: "Lightning fast",
    subtitle:
      "Get your personal or business account setup instantly and you'll be owning your first bitcoin within minutes",
  },
  {
    icon: DollarSign,
    title: "Commission-free",
    subtitle:
      "Buy & sell bitcoin and ethereum commission-free at market-leading prices",
  },
  {
    icon: Users,
    title: "Responsive support",
    subtitle: "We'll get your issues resolved within hours any day of the week",
  },
  {
    icon: Lock,
    title: "Bitcoins stored securely",
    subtitle:
      "The majority of all digital currencies are stored securely offline and are backed by an insurance policy issued for Shakepay",
  },
  {
    icon: CreditCard,
    title: "Your money in your control",
    subtitle:
      "Send out your bitcoin to a wallet in your control. Send out your Canadian Dollars to your bank. In seconds.",
  },
  {
    icon: Regulated,
    title: "Regulated",
    subtitle:
      "Shakepay is licensed as a Money Service Business by FINTRAC and the AMF to operate in all Canadian provinces and territories",
  },
];

const Section3 = () => {
  const theme = useTheme();

  return (
    <CustomContainer
      sx={{
        py: 5,
        [theme.breakpoints.up("md")]: {
          py: 8,
        },
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="space-around"
        sx={{ mb: { xs: 7, md: 10, lg: 13 } }}
      >
        {stats.map((text) => (
          <Grid item xs={12} md={4} key={text.title}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center" }}
            >
              <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
                {text.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: theme.palette.primary.grey,
                }}
              >
                {text.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={5}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Stack
              spacing={1.5}
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center" }}
            >
              <Avatar
                sx={{
                  backgroundColor: theme.palette.background.lightblue,
                  height: 75,
                  width: 75,
                  p: 3,
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Avatar>
              <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: theme.palette.primary.grey,
                }}
              >
                {service.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Section3;
