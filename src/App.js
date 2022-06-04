import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home, Browse, Signup, Signin } from "./pages";
import * as ROUTES from "./constants/routes";

const App = () => {
  const user = {};
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.BROWSE} element={user ? <Browse /> : <Home />} />

        <Route path={ROUTES.SIGN_IN} element={<Signin />} />

        <Route path={ROUTES.SIGN_UP} element={<Signup />} />

        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
