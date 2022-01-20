import React from "react";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/Hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";
import { Alert, Container, Paper, TextField, Typography } from "@mui/material";
import loginImage from "../../Images/login.svg";
import "./Authentication.css";

const Login = () => {
  // useAuth custom hook here
  const { signIn, error, signInWithGoogle } = useAuth();
  // react hook here
  const navigate = useNavigate();

  // react hook form functions here
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password, navigate);
    reset();
  };

  // handle signup btn function here
  const handleSignup = () => {
    navigate("/signup");
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
          <img src={loginImage} alt="loginImage" style={{ width: "70%" }} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            <span className="title">Login</span>
          </Typography>
          {/* form input section start here  */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              sx={{ width: "100%", my: 1 }}
              variant="outlined"
              type="submit"
            >
              Login
            </Button>

            {/* login with other section here  */}
            <span className="or">OR</span>
            <Box>
              <Button onClick={() => signInWithGoogle(navigate)} variant="text">
                <GoogleIcon /> <span>Google</span>
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
        <span>Don't have an account?</span>
        <Button onClick={handleSignup} variant="text" sx={{ px: 0 }}>
          Sign up
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

export default Login;
