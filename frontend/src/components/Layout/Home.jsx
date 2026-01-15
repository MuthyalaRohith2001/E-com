import React from "react";
import Hero from "../Common/Hero";
import GenderCollectionSection from "../Products/GenderCollectionSection";
import NewArrivals from "../Products/NewArrivals";
import ProductDetails from "../Products/ProductDetails";
import ProductGrid from "../Products/ProductGrid";
import FeaturedCollection from "../Products/FeaturedCollection";
import FeaturesSection from "../Products/FeaturesSection";

const Home = () => {
  const placeholderProducts = [
    {
      _id: 5,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=33" }],
    },
    {
      _id: 6,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=215" }],
    },
    {
      _id: 7,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=266" }],
    },
    {
      _id: 8,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=299" }],
    },
    {
      _id: 9,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=38" }],
    },
    {
      _id: 10,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=259" }],
    },
    {
      _id: 11,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=260" }],
    },
    {
      _id: 12,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?/random=298" }],
    },
  ];
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/*Best Seller */}
      <h2 className="text-3xl text-center font-bold mt-10 -mb-5">
        Best Seller
      </h2>
      <ProductDetails />
      <div className="container mx-auto lg:px-2">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;

{
  /*Home.jsx (2)*/
}
/*Inserting In UserLaout.jsx */
