import React from "react";
import Layout from "./Layout/layout";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Statisctics from "./components/Statistics/index";
import Courses from "./components/Courses";
import GetStartedLabel from "./components/GetStartedLabel";

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Statisctics />
      <Courses />
      <GetStartedLabel />
    </Layout>
  );
};

export default App;
