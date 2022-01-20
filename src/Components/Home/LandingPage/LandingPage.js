import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import tvImg from "../../../Images/tv.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // react router dom hook here
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${tvImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        textAlign: "start",
        py: { xs: 18, md: 25 },
      }}
    >
      <Container>
        {/* content start here  */}
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "#FFF" }}>
          Start watching your <br /> favourite shows !
        </Typography>
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/shows")}
          sx={{ bgcolor: "text.primary", my: 2 }}
        >
          See all shows
        </Button>
      </Container>
    </Box>
  );
};

export default LandingPage;
