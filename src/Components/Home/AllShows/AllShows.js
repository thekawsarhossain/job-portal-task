import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";

const AllShows = () => {
  // react hooks here
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setShows(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      {/* navigation component here  */}
      <Navigation />
      {/* container start here  */}
      <Container sx={{ textAlign: "start", my: 2 }}>
        {/* title and sub title here  */}
        <Typography variant="button" sx={{ color: "#F71A2C" }}>
          Featured
        </Typography>
        <Typography variant="h4">
          {" "}
          <span style={{ fontWeight: "bold" }}>Now</span> Showing
        </Typography>
        {/* show ing all data here  */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shows?.data?.map((show) => (
            <Grid item xs={2} sm={4} md={4} key={show?.id}></Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllShows;
