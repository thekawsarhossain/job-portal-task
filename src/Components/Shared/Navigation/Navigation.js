import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../Hooks/Hooks/useAuth";

const Navigation = () => {
  // react router dom hook
  const navigate = useNavigate();
  // use auth custom hook
  const { user, logoutUser } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            sx={{ flexGrow: 1 }}
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          {/* logout button */}
          {user?.email && (
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
