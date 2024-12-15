import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

function Video() {
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger animation only once
  const [showVideo, setShowVideo] = useState(false); // State to toggle between thumbnail and video

  return (
    <div className="bg-gray-50 flex flex-col items-center p-4">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-3xl font-bold text-gray-800 mt-6"
      >
        Welcome to Our YouTube!
      </motion.header>

      {/* Content Section */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-600 mt-4 md:text-lg max-w-2xl"
      >
        Watch our latest courses on our YouTube Shorts.
      </motion.p>

      {/* Video Section */}
      <div className="flex justify-center items-center mt-10 w-full">
        <motion.div
          ref={ref} // Attach the observer reference
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} // Only animate if inView is true
          transition={{ duration: 0.8 }}
          className="relative aspect-w-9 aspect-h-16 w-full max-w-lg"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-lg rounded-lg -z-10"></div>

          {/* Cover Thumbnail */}
          {!showVideo && (
            <div
              className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-lg cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="https://img.youtube.com/vi/UaQofQwzxHk/hqdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute flex justify-center items-center">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-12 h-12 text-primary"
                  >
                    <path d="M10.804 8 6.028 5.59v4.82L10.804 8z" />
                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* YouTube Video */}
          {showVideo && (
            <iframe
              src="https://www.youtube.com/embed/UaQofQwzxHk?autoplay=1"
              title="YouTube Short"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Video;
