import React from "react"
import BoxOButts from "./components/BoxOButts";
import BoxOFunzies from "./components/BoxOFunzies";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="okay">
      <Header />
      <BoxOFunzies />
      <BoxOButts />
    </div>
  );
}