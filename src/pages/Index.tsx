import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductSlider from "../components/ProductSlider";

const Index = () => {
  useEffect(() => {
    // Preload hero section images
    const preloadImages = () => {
      const images = [
        "/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png",
      ];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductSlider />
    </div>
  );
};

export default Index;