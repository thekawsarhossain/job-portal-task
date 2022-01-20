import { Box } from "@mui/material";
import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import LandingPage from "./LandingPage/LandingPage";

const Home = () => {
  return (
    <Box>
      <Navigation />
      <LandingPage />
    </Box>
  );
};

export default Home;
