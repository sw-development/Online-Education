import React from "react";
import Layout from "./Layout/layout";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  return (
    <Layout>
      <Navigation />
      <Hero />
    </Layout>
  );
}

export default App;
