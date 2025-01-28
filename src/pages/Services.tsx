import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Prolook Clothing & Textiles";
  }, []);

  const services = [
    {
      title: "School Uniforms",
      description: "Quality school uniforms for diligent pupils",
      image: "/Images/schoolwear.jpg"
    },
    
    {
      title: "Embroidery Services",
      description: "High-quality embroidery for logos and designs",
      image: "/Images/ties.jpg"
    },
    {
      title: "Corporate Apparel",
      description: "Professional attire for your business needs",
      image: "https://siranisfashion.com/cdn/shop/articles/Fatim-Sylla-Siranis-Fashion-Owner_800x.jpg?v=1685123203"
    },
    {
      title: "Sports Wear",
      description: "Performance wear for teams and athletes",
      image: "/Images/tracksuits.jpg"
    },
    {
      title: "African Attire",
      description: "Culture based attire for your events",
      image: "/Images/african.jpg"
    },
    {
      title: "Premium Textiles",
      description: "High-quality fabrics for various applications",
      image: "https://www.pashafabrics.pk/cdn/shop/files/WhatsApp_Image_2023-10-15_at_3.10.05_PM_2c4e2475-01f3-4d96-b7a7-75cbe46a557f.jpg?v=1719522065&width=493"
    },
    {
      title: "Quality Materials",
      description: "Premium materials for your garment manufacturing",
      image: "/Images/thread.jpg"
    },
    {
      title: "Garment Repair",
      description: "Quality garment repair services",
      image: "/Images/repair.jpg"
    },
    {
      title: "Custom Event Wear",
      description: "Custom event wear for your events",
      image: "https://laviye.com/cdn/shop/products/LV-V2-9_d8c983c9-339c-4a8d-82eb-27d54ee44e7b.jpg?v=1645520637&width=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-prolook-navy to-prolook-blue/90">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png"
              alt="Prolook Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-prolook-navy">Our Services</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-prolook-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
    </div>
    
  );
};

export default Services;