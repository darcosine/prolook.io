import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://www.entireimage.com/wp-content/uploads/2024/09/7-2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-8"
          >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            backgroundColor: "rgba(255, 255, 255, 0.6)", /* White with opacity */
            border: "2px solid blue", /* Blue outline */
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", /* Diamond shape */
            margin: "0 auto"
          }}
        >
          <img
            src="/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png"
            alt="Prolook Logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
          />
        </div>

            <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Premium Clothing & Textiles
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Excellence in Apparel
              <br />
              <span className="text-prolook-gray">Tailored for You</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Discover our premium collection of custom uniforms, embroidery services,
              and professional attire designed to elevate your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="px-8 py-3 bg-white text-prolook-navy rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;