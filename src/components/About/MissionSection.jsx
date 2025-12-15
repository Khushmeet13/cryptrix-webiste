import React from "react";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    caption: "good-bye summer",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    caption: "#teambuilding",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    caption: "good food, good vibes.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    caption: "building the future",
  },
];

const MissionSection = () => {
  return (
    <section className="bg-gray-100 w-full flex items-center justify-center px-6 pt-236 pb-10 md:py-15">
      <div className="max-w-6xl w-full">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 text-gray-900 flex flex-col gap-2">
          Sapher is on a mission to improve {""}
          <span className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            digital productivity
          </span>
        </h2>

        {/* Horizontal Single Line Polaroid Gallery */}
        <div className="flex gap-2 justify-center overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex-shrink-0 snap-center"
            >
              <div
                className={`relative bg-white p-2 rounded-md border-4 border-white transform transition-all duration-500 hover:scale-105 hover:z-10
                  ${index % 2 === 0 ? "-rotate-3" : "rotate-3"}
                  hover:rotate-0`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-52 h-52 object-cover rounded-md shadow-md"
                />
                <p className="text-center mt-2 text-gray-800 font-handwriting text-xs tracking-wider">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2 Column Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-6">
          {/* LEFT TEXT SECTION */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-relaxed text-md">
              We aim to empower teams with tools that make work simpler, faster,
              and more collaborative. Sapher helps organizations streamline
              workflows, automate repetitive tasks, and stay focused on the work
              that truly makes an impact.
            </p>

            <p className="text-gray-500 leading-relaxed mt-4 text-md">
              By combining powerful automation with an intuitive experience, we
              bring clarity, speed, and productivity to every corner of your
              organization — helping teams operate smarter, not just harder.
            </p>

            {/* QUOTE SECTION */}
            <div className="mt-6 border-l-4 border-indigo-500 pl-4">
              <p className="italic text-gray-700 text-lg">
                “Great teams aren’t defined by effort alone — they’re defined by
                how smoothly they work together. Productivity is the outcome of
                clarity, alignment, and flow.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Premium Animated Illustration */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Floating Background Blob */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"
            />

            {/* Main Illustration Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

              <div className="bg-white/95 backdrop-blur-xl rounded-lg p-4 shadow-2xl border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1644148297708-575df53b1dca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzc2lvbiUyMGJsYWNrY2hhaW58ZW58MHx8MHx8fDA%3D"
                  alt="Sapher - Team collaborating with modern tools"
                  className="w-full max-w-xs rounded-lg shadow-xl"
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg text-sm font-semibold"
                >
                  +247% Faster
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-medium"
                >
                  Automation Active
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-2 -left-3 w-6 h-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full opacity-20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
