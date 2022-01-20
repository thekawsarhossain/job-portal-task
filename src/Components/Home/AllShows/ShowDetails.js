import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navigation from "../../Shared/Navigation/Navigation";

// modal style here
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "1px solid #F71A2C",
  borderRadius: "5px",
  boxShadow: 20,
  p: 4,
};

const ShowDetails = () => {
  // react router dom hook
  const { id } = useParams();

  //   modal states here
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   getting single show data here
  const [show, setShow] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => setShow(res.data));
  }, [id]);

  // react hook form functions here
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.movieName = show?.name;
    const updatedData = JSON.stringify(data);
    localStorage.setItem("orderDetails", updatedData);
    alert("order placed");
    setOpen(false);
    reset();
  };

  return (
    <Box>
      {/* navigation component here  */}
      <Navigation />
      {/*   container start here  */}
      <Container sx={{ my: 4 }}>
        <Card
          sx={{
            boxShadow: 0,
            display: { xs: "block", md: "flex" },
            textAlign: "start",
            p: 4,
          }}
        >
          <CardMedia
            sx={{ width: { xs: "100%", md: "30%" } }}
            component="img"
            image={show?.image?.original}
            alt="image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: "bold", mb: 0 }}
            >
              Name: {show?.name}
            </Typography>
            <Typography variant="h6">
              Type: {show?.genres?.[0]}, {show?.genres?.[1]}
            </Typography>
            <Typography variant="h6">premiered: {show?.premiered}</Typography>
            <Typography variant="h6">language: {show?.language}</Typography>
            <Typography variant="p">summary: {show?.summary}</Typography>
            <Button
              size="large"
              variant="outlined"
              sx={{
                borderColor: "#F71A2C",
                color: "#000",
                display: "block",
                my: 2,
              }}
              onClick={handleOpen}
            >
              Buy Ticket
            </Button>
          </CardContent>
        </Card>
        {/* modal and its content here  */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* form input section start here  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ width: "100%", my: 1 }}
                label="Show Name"
                value={show?.name}
                variant="outlined"
                required
                aria-readonly
              />
              <TextField
                sx={{ width: "100%", my: 1 }}
                label="Name"
                type="text"
                variant="outlined"
                {...register("name")}
                required
              />
              <TextField
                sx={{ width: "100%", my: 1 }}
                label="Number"
                type="number"
                variant="outlined"
                {...register("number")}
                required
              />
              <TextField
                sx={{ width: "100%", my: 1 }}
                label="Email"
                type="email"
                variant="outlined"
                {...register("email")}
                required
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  borderColor: "#F71A2C",
                  color: "#000",
                  display: "block",
                  my: 2,
                }}
              >
                Purchase
              </Button>
            </form>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default ShowDetails;
