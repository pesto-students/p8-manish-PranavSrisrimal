import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Body from "/components/Body";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </StrictMode>
);
