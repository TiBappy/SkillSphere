import React from "react";
import Image from "next/image";
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src={PanaImage}
            alt="Learning tips"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
            Learning Tips
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn Smarter, Not Harder
          </h2>

          <div className="space-y-5">
            {tipsData.map((tip) => (
              <div
                key={tip.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition duration-300"
              >
                {/* ICON WRAPPER (fixed size) */}
                <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl shrink-0">
                  <Image
                    src={tip.icon}
                    alt="tip icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningTips;