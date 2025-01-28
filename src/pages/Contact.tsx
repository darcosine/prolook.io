import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Prolook Clothing & Textiles";
  }, []);

  return (
    <div className="min-h-screen bg-blue-200">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <h1 className="text-4xl font-bold text-prolook-navy text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-prolook-navy mb-4">Get in Touch</h2>
            
            <div className="flex items-center gap-3">
              <Phone className="text-prolook-blue" />
              <span>+263 77 103 5397 | +263 77 103 9425 | +263 77 655 7259 | +263 71 146 4971</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="text-prolook-blue" />
              <span>prolook8078@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="text-prolook-blue" />
              <span>24 Rutendo Home Industry, Rutendo, Redcliff</span>
            </div>

            <div className="flex gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:bg-prolook-blue hover:text-white"
                onClick={() => window.open('https://www.facebook.com/josiasd.jengeta', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:bg-prolook-blue hover:text-white"
                onClick={() => window.open('https://wa.me/263771039425', '_blank')}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-prolook-navy mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-prolook-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-prolook-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-prolook-blue focus:border-transparent"
                />
              </div>
              <Button className="w-full bg-prolook-blue hover:bg-prolook-blue/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;