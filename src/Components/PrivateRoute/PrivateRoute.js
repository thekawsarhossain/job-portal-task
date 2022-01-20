import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // useAuth custom hook here
  const { user, loading } = useAuth();
  // react router hook here
  const location = useLocation();

  // loading statement here
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // main private route setup here
  if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
