import React from "react";
import Layout from "./Layout/layout";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Statisctics from "./components/Statistics/index";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Statisctics />
      <Courses />
      <Feedback />
    </Layout>
  );
};

export default App;
