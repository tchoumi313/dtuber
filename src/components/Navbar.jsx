import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constants";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      background: "rgba(41, 43, 41, 0.623)",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={30} />
      <Typography variant="h5" color="white">
        DTuber
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
