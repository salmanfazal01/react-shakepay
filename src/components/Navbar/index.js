import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Hidden, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCryptoPrices } from "../../utils/cryptoPrices";
import { BTC, ETH, Logo } from "../../utils/images";
import CustomContainer from "../CustomContainer";

const menuItems = [
  { name: "Card" },
  { name: "Careers" },
  { name: "Security" },
  { name: "Fees" },
  { name: "Help" },
  { name: "Sign in" },
  { name: "Get Started", variant: "contained" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [prices, setPrices] = useState([]);

  const btc = prices.find((i) => i.id === "bitcoin");
  const eth = prices.find((i) => i.id === "ethereum");

  useEffect(() => {
    getCryptoPrices(setPrices);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const PriceButton = ({ image, price }) => (
    <Button
      size="large"
      sx={{
        textTransform: "inherit",
        color: "black",
        gap: 1,
      }}
    >
      <Image src={image} alt="Ethereum" width={30} height={30} />
      <Typography sx={{ fontWeight: 500 }}>
        $
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <CustomContainer sx={{ py: 1 }}>
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo */}
            <Button sx={{ textTransform: "inherit", color: "#000" }}>
              <Image
                src={Logo}
                alt="Shakepay Logo"
                height={50}
                width={45}
                objectFit="contain"
              />
              <Hidden smDown>
                <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                  Shakepay
                </Typography>
              </Hidden>
            </Button>

            {/* Crypto Prices */}
            <Hidden lgDown>
              <Stack spacing={2} direction="row">
                {btc && <PriceButton image={BTC} price={btc.current_price} />}
                {eth && <PriceButton image={ETH} price={eth.current_price} />}
              </Stack>
            </Hidden>

            {/* Menu Items */}
            <Box>
              {/* Desktop Menu */}
              <Hidden mdDown>
                <Stack direction="row" spacing={2}>
                  {menuItems.map((item) => (
                    <Button
                      disableElevation
                      key={item.name}
                      variant={item.variant || "text"}
                      size="large"
                      sx={{
                        textTransform: "inherit",
                        color: item.variant ? "white" : "black",
                        fontWeight: 500,
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                    </Button>
                  ))}
                </Stack>
              </Hidden>

              {/* Mobile Menu */}
              <Hidden mdUp>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={handleMenu}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={item.name}>{item.name}</MenuItem>
                  ))}
                </Menu>
              </Hidden>
            </Box>
          </Stack>
        </CustomContainer>
      </AppBar>
    </Box>
  );
}
