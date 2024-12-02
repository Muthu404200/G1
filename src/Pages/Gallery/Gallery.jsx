import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1695763594594-31505b18b58a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724888861686-ad3f706ab067?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724884564497-f5024b7e2f93?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?q=80&w=600&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1695763594594-31505b18b58a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724888861686-ad3f706ab067?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724884564497-f5024b7e2f93?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?q=80&w=600&auto=format&fit=crop",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeImage = () => {
    setSelectedImage(null); // Close the zoomed image
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-10">Image Gallery</h2>
      
      {/* Zoomed Image Modal with Exit Animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="zoomedImage"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative w-3/4 h-3/4 bg-white rounded-lg overflow-hidden"
            >
              <img
                src={selectedImage}
                alt="Zoomed"
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 text-white text-3xl"
              >
                &times; {/* Close button */}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            onClick={() => setSelectedImage(image)} // Zoom on click
          >
            <img
              src={image}
              alt={`Gallery Image ${index}`}
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
