import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import landingPageImg from "../../../Images/landingPageImg.webp";
import { useForm } from "react-hook-form";

const LandingPage = () => {
  // use hook from function here
  // react hook form functions here
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${landingPageImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        textAlign: "start",
        py: 20,
        px: 6,
      }}
    >
      {/* content start here  */}
      <Typography variant="h1" sx={{ fontWeight: "bold", color: "#FFF" }}>
        Find your dream job <br /> with us!
      </Typography>
      {/* form start here  */}
      <Box sx={{ py: 4 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "45%", mr: 2, bgcolor: "#FFF", borderRadius: "5px" }}
            label="language"
            type="text"
            variant="filled"
            {...register("language")}
            required
          />
          <Button variant="contained" size="large" sx={{ py: 2 }} type="submit">
            Search jobs
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LandingPage;
