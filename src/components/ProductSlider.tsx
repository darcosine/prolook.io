import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProductSlider = () => {
  
  const products = [
    {
      id: 2,
      image: "/Images/schoolwear.jpg",
      title: "School Uniforms",
    },    
    {
      id: 1,
      image: "https://www.pashafabrics.pk/cdn/shop/files/WhatsApp_Image_2023-10-15_at_3.10.05_PM_2c4e2475-01f3-4d96-b7a7-75cbe46a557f.jpg?v=1719522065&width=493",
      title: "Premium Textiles",
    },

    {
      id: 3,
      image: "/Images/ties.jpg",
      title: "Embroidery Services",
    },
    {
      id: 4,
      image: "https://siranisfashion.com/cdn/shop/articles/Fatim-Sylla-Siranis-Fashion-Owner_800x.jpg?v=1685123203",
      title: "Professional Attire",
    },
    {
      id: 5,
      image: "https://laviye.com/cdn/shop/products/LV-V2-9_d8c983c9-339c-4a8d-82eb-27d54ee44e7b.jpg?v=1645520637&width=1200",
      title: "Event Wear",
    },
    {
      id: 6,
      image: "https://static.wixstatic.com/media/1faf44_7c9f17b66b774c999f324d8c79d07e5b~mv2.jpg/v1/fill/w_540,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dominion%20Industrial%20Suppliers%20Africa%20-%20D.jpg",
      title: "Safety Wear",
    },
    {
      id: 7,
      image: "/Images/African.jpg", 
      title: "African Attire",
    },
    {
      id: 8,
      image: "/Images/tracksuits.jpg",
      title: "Sports Wear", 
    }, 
    {
      id: 9,
      image: "/Images/thread.jpg",
      title: "Premium Materials",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-prolook-navy mb-8 text-center">
        Our Products
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-2">
                  <div className="overflow-hidden rounded-lg aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-prolook-navy mt-4 text-center">
                    {product.title}
                  </h3>

                </CardContent>
              </Card>

            </CarouselItem>
             
          ))}

        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.div>
    
  );
};

export default ProductSlider;