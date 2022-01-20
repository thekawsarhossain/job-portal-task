import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import AuthProvider from "./Context/AuthProvider";
import Signup from "./Components/Authentication/Signup";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      {/*  wrapped with auth provider to access the data */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* public || normal routes here  */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* private routes start here  */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
