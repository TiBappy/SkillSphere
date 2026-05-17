"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PopularCard = ({ popular }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
      }}
      className="w-full h-full"
    >
      <div className="card h-full bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-200 rounded-2xl overflow-hidden group">

        {/* IMAGE */}
        <figure className="relative w-full h-52 overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={popular.image}
              alt={popular.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* FLOATING BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-3 right-3"
          >
            <span className="badge badge-warning text-white font-medium px-3 py-3">
              Popular
            </span>
          </motion.div>

        </figure>

        {/* CONTENT */}
        <div className="card-body px-5 py-4 text-center flex flex-col">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-semibold line-clamp-2"
          >
            {popular.title}
          </motion.h2>

          {/* INSTRUCTOR */}
          <p className="text-sm text-gray-500 mt-1">
            {popular.instructor}
          </p>

          {/* RATING */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center gap-1 mt-2"
          >
            <span className="text-yellow-500 text-lg">★</span>

            <span className="text-sm font-medium">
              {popular.rating}
            </span>
          </motion.div>

          {/* BUTTON */}
          <div className="mt-5">

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="btn btn-primary w-full rounded-xl"
            >
              View Details
            </motion.button>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default PopularCard;