import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import CategorySlider from "../components/CategorySlider/CategorySlider";
import HeadingComponent from "../components/Heading/HeadingComponent";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <CategorySlider />
      <HeadingComponent
        heading="What food you love to order"
        des= "Here order your favorite foods from different categories"
      />
    </>
  );
};

export default Home;
