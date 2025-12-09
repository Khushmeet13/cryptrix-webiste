import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            Our Vision
          </h2>
          <p className="mt-2 text-md text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A world where work feels effortless — where technology disappears into the background, 
            and people are free to think, create, and grow without friction.
          </p>
        </motion.div>

        {/* Vision Cards – Modern Floating Style */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Work Without Friction",
              desc: "No more context switching, manual updates, or scattered tools. Everything just flows.",
              gradient: "from-indigo-500 to-indigo-600",
              delay: 0.2
            },
            {
              title: "AI That Understands You",
              desc: "Intelligent automation that learns your team’s rhythm and removes repetitive work — silently and perfectly.",
              gradient: "from-indigo-500 to-indigo-600",
              delay: 0.4
            },
            {
              title: "Focus Over Busyness",
              desc: "We believe real productivity isn’t doing more — it’s doing what matters, with clarity and calm.",
              gradient: "from-indigo-500 to-indigo-600",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Gradient Background Blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-100 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-md mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xs font-bold">
                    {index === 0 && "Flow"}
                    {index === 1 && "Brain"}
                    {index === 2 && "Target"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement – Big & Bold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-4xl  font-semibold text-gray-900">
            The future of work isn’t louder tools.
          </h3>
          <p className="mt-4 text-2xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            It’s quieter thinking.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionSection;