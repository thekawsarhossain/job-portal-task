import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";

const AllShows = () => {
  // react router hook here
  const navigate = useNavigate();

  // react hooks here
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setShows(res));
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
          sx={{ mt: 4 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shows?.data?.map((show) => (
            <Grid item xs={12} sm={6} md={3} key={show?.show?.id}>
              <Card sx={{ boxShadow: 0 }}>
                <CardMedia
                  component="img"
                  height="360"
                  image={show?.show?.image?.original}
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" sx={{ mb: 0 }}>
                    {show?.show?.name}
                  </Typography>

                  <Typography>language: {show?.show?.language}</Typography>
                  <Rating
                    name="read-only"
                    value={show?.show?.rating?.average}
                    readOnly
                  />
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#F71A2C",
                      color: "#000",
                      display: "block",
                    }}
                    onClick={() => navigate(`/show/${show?.show?.id}`)}
                  >
                    More Info
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllShows;
