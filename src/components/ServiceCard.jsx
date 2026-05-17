"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-base-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-base-200">

        {/* IMAGE */}
        <div className="relative w-full h-48 overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">

          {/* TOP CONTENT */}
          <div className="space-y-3 flex-grow">

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-semibold line-clamp-2"
            >
              {service.title}
            </motion.h2>

            {/* INSTRUCTOR */}
            <p className="text-sm text-gray-500">
              By {service.instructor}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2">

              <motion.span
                whileHover={{ scale: 1.08 }}
                className="badge badge-primary badge-outline"
              >
                Popular
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.08 }}
                className="badge badge-accent badge-outline"
              >
                Updated
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.08 }}
                className="badge badge-success badge-outline"
              >
                Certified
              </motion.span>

            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-4">

            <Link href={`/courses/${service.id}`}>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="btn btn-primary w-full rounded-xl"
              >
                View Course
              </motion.button>

            </Link>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;