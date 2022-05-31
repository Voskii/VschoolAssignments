import React from "react"
import ReactDom from "react-dom"
import App from "./App"

const container = document.getElementById("root")
const root = ReactDom.createRoot(container)
root.render(<App />);