/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Grid, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomContainer from "../../components/CustomContainer";
import HolidaysBanner from "../../components/HolidaysBanner";
import ResponsiveText from "../../components/ResponsiveText";
import { AppleStore, GoogleStore, Phone, RightArrow } from "../../utils/images";

const Section1 = () => {
  const theme = useTheme();

  return (
    <CustomContainer
      sx={{
        p: 3,
        [theme.breakpoints.up("md")]: {
          py: 10,
          paddingTop: theme.spacing(7),
        },
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 2 }}
        alignItems="center"
        sx={{ height: "100%" }}
      >
        {/* Left Side */}
        <Grid item xs={12} md={8} lg={7}>
          <HolidaysBanner sx={{ mb: { xs: 3, md: 5 } }} />

          <ResponsiveText variant="h3" sx={{ fontWeight: 600 }}>
            The{" "}
            <Box component="span" color={theme.palette.primary.main}>
              easiest way
            </Box>{" "}
            for Canadians to buy and sell bitcoin.
          </ResponsiveText>

          <ResponsiveText
            variant="h5"
            sx={{
              mt: { xs: 2, md: 3 },
              color: theme.palette.primary.grey,
            }}
          >
            Buy bitcoin in minutes with Interac e-Transfer®. Cash out to your
            bank account instantly. Customer service that cares.
          </ResponsiveText>

          <Stack
            container
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mt: { xs: 2, md: 3, lg: 4 } }}
            justifyContent="flex-start"
          >
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{
                color: "#fff",
                textTransform: "inherit",
                height: 57,
                minWidth: 140,
              }}
            >
              Get started{" "}
              <Box
                sx={{
                  backgroundColor: theme.palette.background.darkblue,
                  height: 25,
                  width: 25,
                  ml: 1,
                  borderRadius: 1,
                }}
              >
                <img
                  src={RightArrow}
                  alt="Right Arrow"
                  style={{
                    padding: 5,
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Button>

            <Button
              size="large"
              sx={{
                border: "0.1rem solid #E7ECF2",
                height: 57,
                minWidth: 140,
              }}
            >
              <img
                src={GoogleStore}
                alt="Google Store"
                style={{
                  maxWidth: "110px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Button>

            <Button
              size="large"
              sx={{
                border: "0.1rem solid #E7ECF2",
                height: 57,
                minWidth: 140,
              }}
            >
              <img
                src={AppleStore}
                alt="Apple Store"
                style={{
                  maxWidth: "110px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Button>
          </Stack>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={4} lg={5}>
          <Image
            src={Phone}
            alt="IPhone"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Section1;
