import React from 'react'
import { motion } from "framer-motion";

function Review() {
    // Framer Motion Variants
    const animationVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
      };
    
      return (
        <motion.div
          className="elfsight-review-container"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          {/* Embed Elfsight Google Review Widget */}
          <div className="elfsight-app-db2fac33-ecce-4b5f-8ead-ca9d99b6d381"></div>
        </motion.div>
      );
}

export default Review