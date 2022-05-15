import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Browse, Signup, Signin } from "./pages";
import * as ROUTES from "./constants/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/browse" element={<Browse />} />

        <Route path="/signin" element={<Signin />} />

        <Route path={ROUTES.SIGN_UP} element={<Signup />} />

        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
