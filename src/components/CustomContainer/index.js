import { Container } from "@mui/material";
import React from "react";

const CustomContainer = ({ children, sx = {}, ...props }) => {
  return (
    <Container sx={{ maxWidth: "1350px", ...sx }} maxWidth={false} {...props}>
      {children}
    </Container>
  );
};

export default CustomContainer;
