/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import RubberBand from "react-reveal/RubberBand";
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
          <RubberBand>
            <HolidaysBanner sx={{ mb: { xs: 3, md: 5 } }} />
          </RubberBand>

          <Fade left>
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
          </Fade>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mt: { xs: 2, md: 3, lg: 4 } }}
            justifyContent="flex-start"
          >
            <Fade bottom delay={100}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                disableElevation
                sx={{
                  color: "#fff",
                  textTransform: "inherit",
                  height: 57,
                  minWidth: 140,
                  [theme.breakpoints.down("sm")]: {
                    height: 45,
                  },
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
            </Fade>

            <Fade bottom delay={300}>
              <Button
                fullWidth
                size="large"
                sx={{
                  border: "0.1rem solid #E7ECF2",
                  height: 57,
                  minWidth: 140,
                  [theme.breakpoints.down("sm")]: {
                    height: 45,
                  },
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
            </Fade>

            <Fade bottom delay={500}>
              <Button
                fullWidth
                size="large"
                sx={{
                  border: "0.1rem solid #E7ECF2",
                  height: 57,
                  minWidth: 140,
                  [theme.breakpoints.down("sm")]: {
                    height: 45,
                  },
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
            </Fade>
          </Stack>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={4} lg={5}>
          <Flip right>
            <Image
              src={Phone}
              alt="IPhone"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </Flip>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Section1;
