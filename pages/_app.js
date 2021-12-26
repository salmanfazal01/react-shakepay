import Navbar from "../src/components/Navbar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "../src/components/Footer";

const colors = {
  main: "#009FFF",
  grey: "#657795",
  lightblue: "#ccecff",
  darkblue: "#0087D9",
  darkerblue: "#002237",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { ...colors },
    background: { ...colors },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
