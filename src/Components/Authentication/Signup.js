import React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { Alert, Container, Paper, TextField, Typography } from "@mui/material";
import useAuth from "../../Hooks/Hooks/useAuth";
import signupImage from "../../Images/signup.svg";
import "./Authentication.css";

const Signup = () => {
  // useAuth custom hook here
  const { createUser, error, signInWithGoogle } = useAuth();
  // react hook here
  const navigate = useNavigate();

  // react hook form functions here
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Password isn't matched ");
      return;
    } else {
      createUser(data.email, data.password, data.name, navigate);
    }
    reset();
  };

  // handle signup btn function here
  const handleLogin = () => {
    navigate("/login");
  };

  // main function here
  return (
    <Container sx={{ mt: 6 }}>
      <Paper
        variant="outlined"
        sx={{
          width: { md: "90%", sm: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
          p: 2,
          mb: 1,
        }}
      >
        {/* image section here  */}
        <Box>
          <img src={signupImage} alt="signupImage" style={{ width: "70%" }} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            <span className="title">SignUp</span>
          </Typography>
          {/* form input section start here  */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              label="Email"
              type="email"
              variant="outlined"
              {...register("email")}
              required
            />
            <TextField
              sx={{ width: "100%", my: 1 }}
              label="Password"
              type="password"
              variant="outlined"
              {...register("password")}
              required
            />
            <TextField
              sx={{ width: "100%", my: 1 }}
              label="Confirm Password"
              type="password"
              variant="outlined"
              {...register("password2")}
              required
            />
            <Button
              sx={{ width: "100%", my: 1 }}
              variant="outlined"
              type="submit"
            >
              Signup
            </Button>

            {/* login with other section here  */}
            <span className="or">OR</span>
            <Box>
              <Button onClick={() => signInWithGoogle(navigate)} variant="text">
                <GoogleIcon /> <span> Google</span>{" "}
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{
          width: { md: "80%", sm: "100%", lg: "40%" },
          m: "auto",
          p: 2,
          mb: 1,
        }}
      >
        <span>Already have an account?</span>
        <Button onClick={handleLogin} variant="text" sx={{ px: 0 }}>
          Login
        </Button>
      </Paper>

      {/* showing the error when neede */}
      {error && (
        <Alert
          sx={{ width: { md: "80%", sm: "100%", lg: "40%" }, m: "auto" }}
          severity="error"
        >
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default Signup;
