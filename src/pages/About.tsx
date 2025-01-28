import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Prolook Clothing & Textiles";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-prolook-navy to-prolook-blue/90">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png"
              alt="Prolook Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-prolook-navy">About Us</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="text-2xl font-semibold text-prolook-navy mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Prolook Clothing & Textiles has been at the forefront of the textile industry,
              delivering excellence in apparel and custom designs. Our journey began with a
              simple mission: to provide high-quality, innovative textile solutions that meet
              the diverse needs of our clients.
            </p>

            <h2 className="text-2xl font-semibold text-prolook-navy mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To deliver exceptional quality in every thread, stitch, and design, while
              maintaining the highest standards of customer service and satisfaction. We
              strive to be the leading provider of textile solutions, known for our
              innovation, reliability, and commitment to excellence.
            </p>

            <h2 className="text-2xl font-semibold text-prolook-navy mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Quality Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Innovation in Design</li>
              <li>Sustainable Practices</li>
              <li>Professional Integrity</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;