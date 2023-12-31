import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact.jsx";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="feature" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
