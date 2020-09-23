import React from "react";
import Layout from "./Layout/layout";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Statisctics from "./components/Statistics/index";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Blog from "./components/Blog";

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Statisctics />
      <Courses />
      <Feedback />
      <Blog />
    </Layout>
  );
};

export default App;
