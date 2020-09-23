import React from "react";
import Layout from "./Layout/layout";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Statisctics from "./components/Statistics/index";
import Courses from "./components/Courses";
import GetStartedLabel from "./components/GetStartedLabel";
import Feedback from "./components/Feedback";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer/index";

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Statisctics />
      <Courses />
      <GetStartedLabel />
      <Feedback />
      <Blog />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default App;
