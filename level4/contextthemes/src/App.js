import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { ThemeContextProvider } from "./components/themeContext"

export default function App(props) {
  return (
    <>
      
        <Navbar />
        <Main />
        <Footer />
      
    </>
  );
}