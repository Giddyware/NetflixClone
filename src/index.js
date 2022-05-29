import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";

import App from "./App";

import { GlobalStyles } from "./globalStyles";
import { FirebaseContext } from "./context/firebase";
import { app } from "./lib/firebase.prod";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ app }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
  // </React.StrictMode>
);
