"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PanaImage from "@/assets/pana.png";
import ImageOne from "@/assets/image-one.png";
import ImageTwo from "@/assets/Group 73.png";
import ImageThree from "@/assets/users 2.png";

const tipsData = [
  {
    id: 1,
    icon: ImageOne,
    text: "Focus on high-rated courses like React or DSA first—they usually offer better structured and more valuable content.",
  },
  {
    id: 2,
    icon: ImageTwo,
    text: "Don’t just watch—build small projects alongside courses (especially MERN or React) to actually retain what you learn.",
  },
  {
    id: 3,
    icon: ImageThree,
    text: "Learn consistently in short sessions (1–2 hours daily) instead of long irregular study bursts to improve retention and progress.",
  },
];

const LearningTips = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={PanaImage}
              alt="Learning tips"
              className="w-full max-w-md"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* SMALL TITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide"
          >
            Learning Tips
          </motion.p>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Learn Smarter, Not Harder
          </motion.h2>

          {/* TIPS */}
          <div className="space-y-5">

            {tipsData.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 border border-transparent hover:border-blue-100"
              >

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.1,
                  }}
                  className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl shrink-0"
                >
                  <Image
                    src={tip.icon}
                    alt="tip icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {tip.text}
                </p>

              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LearningTips;