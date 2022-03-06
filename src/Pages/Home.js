import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import CategorySlider from "../components/CategorySlider/CategorySlider";
import HeadingComponent from "../components/Heading/HeadingComponent";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";


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
      <ProductSlider />
      <HeadingComponent
        heading="Best seller grocery near you"
        des= "We provide best quality & fresh grocery items near your location"
      />
      <Products />
      <Banner />
      <HeadingComponent
        heading="Popular product that we sold"
        des= "We provide best quality & fresh grocery items near your location"
      />
      <Products />
      <Support />
      <Footer />
    </>
  );
};

export default Home;
