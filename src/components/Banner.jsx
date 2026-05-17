"use client";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </motion.h1>

        {/* SUBTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-6 space-y-3"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            with Online Design and Development Courses.
          </p>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Learn from industry experts and enhance your skills with hands-on
            projects and real-world experience.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          {/* EXPLORE BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="btn bg-[#FF9500] text-white border-none px-6 rounded-xl w-full sm:w-auto"
          >
            Explore Courses
          </motion.button>

          {/* PRICE BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="btn btn-outline px-6 rounded-xl w-full sm:w-auto"
          >
            View Prices
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default Banner;