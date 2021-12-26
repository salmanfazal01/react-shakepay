import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomContainer from "../../components/CustomContainer";
import { Reddit, Twitter, Facebook } from "../../utils/images";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const testimonials = [
  {
    icon: Reddit,
    title: "/u/jert3",
    subtitle:
      "I've been in bitcoin since the gpu mining days and never found an easier way to purchase than Shakepay. And you can use it as a wallet as well. Excellent service, recommended",
  },
  {
    icon: Twitter,
    title: "@tremblay96",
    subtitle:
      "@shakepay 🇨🇦🇨🇦🇨🇦🇨🇦 Give it a try and you won't regret it! Great customer service as well! A must-have for all Canadians!",
  },
  {
    icon: Reddit,
    title: "/u/radiuju",
    subtitle:
      "bought my first part of a bitcoin ever in canada using shakepay. was really easy. user friendly.",
  },
  {
    icon: Facebook,
    title: "Miguel Levesque",
    subtitle:
      "I created an account, e-transferred money and was owning ETH in minutes. It removes alot of headaches compared to what i'm used to. Other than being crazy fast and simple...it's cheap! I could not believe it.",
  },
  {
    icon: Twitter,
    title: "@cryptobubbleman",
    subtitle:
      "Can confirm, just had great user experience. I registered, sent funds from my bank account to website to my cold storage in ~1 hour. 👍🙏👌",
  },
  {
    icon: Facebook,
    title: "thewumbles",
    subtitle:
      "Shakepay is unreal. Great app. Great services. Great support. Low fees.\n\nCan't believe it. I'd buy diapers and cars from Shakepay if they sold them. I wish they'd start a dating app as ''m sure I'd meet my wife in no time.\n\nThanks guys!",
  },
  {
    icon: Reddit,
    title: "/u/caramelpies",
    subtitle:
      "Shakepay is amazing - no, I don't work for them, and no, I'm not providing an affiliate link. E-Transfer is super convenient and my funds have always hit my Shakepay account within 5 minutes.",
  },
  {
    icon: Reddit,
    title: "/u/Hooftly",
    subtitle:
      "Shakepay is also the easiest on-ramp IMO as well. Usually E-transfers take minutes to appear in your account. The whole process from Bank > Shakepay > Wallet the last time was literally 30 Minutes from the time I sent the E-Transfer. 10 / 10 would use Shakepay again.",
  },
  {
    icon: Reddit,
    title: "/u/jvarv11",
    subtitle:
      "Shakepay!!! Been using them since September. I get my btc and eth almost instantly. They accept interact e-transfer with automatic bot system.",
  },
];

const Section4 = () => {
  const theme = useTheme();

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        sx={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <NavigateNextIcon sx={{ color: theme.palette.primary.darkblue }} />
      </IconButton>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        sx={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <NavigateBeforeIcon sx={{ color: theme.palette.primary.darkblue }} />
      </IconButton>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CustomContainer maxWidth="xl" sx={{ pt: 6, pb: { xs: 5, md: 10 } }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 8 }}>
        Community love 😍
      </Typography>

      <Slider {...settings}>
        {testimonials.map((testimonial, i) => (
          <Box key={i} sx={{ p: 2 }}>
            <Card
              elevation={0}
              sx={{
                height: 320,
                cursor: "pointer",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 6px 24px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                "&:hover": {
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                },
              }}
            >
              <CardContent>
                <Stack
                  spacing={1.5}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center", py: 1 }}
                >
                  <Avatar
                    src={testimonial.icon}
                    alt={testimonial.title}
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  />
                  <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                    {testimonial.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.primary.grey,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {testimonial.subtitle.length > 200
                      ? testimonial.subtitle.slice(0, 200).concat("...")
                      : testimonial.subtitle}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </CustomContainer>
  );
};

export default Section4;
