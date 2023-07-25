import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar />
      <Routes />
    </>
  </React.StrictMode>,
);
