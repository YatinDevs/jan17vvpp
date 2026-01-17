import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Calendar, MapPin, BookOpen } from "lucide-react";
import { heroImg } from "../../assets";

const AboutHero = () => {
  const stats = [
    { icon: <Calendar size={20} />, value: "1937", label: "Established", suffix: "" },
    { icon: <Users size={20} />, value: "2000+", label: "Students", suffix: "" },
    { icon: <Award size={20} />, value: "150+", label: "Faculty", suffix: "" },
    {
      icon: <BookOpen size={20} />,
      value: "85+",
      label: "Years of Excellence",
      suffix: "",
    },
    { icon: <MapPin size={20} />, value: "15", label: "Acres Campus", suffix: "" },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt="Campus Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Optimized Overlay for different screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/75 to-navy-900/90 
                       md:from-navy-900/85 md:via-navy-800/65 md:to-navy-900/85
                       lg:from-navy-900/80 lg:via-navy-800/70 lg:to-navy-900/80"></div>
        {/* Additional gradient for depth - responsive opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-navy-800/40 
                       md:from-navy-900/40 md:via-transparent md:to-navy-800/30"></div>
      </div>

      {/* Background Pattern - responsive sizes and positioning */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="absolute top-4 left-4 w-40 h-40 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl 
                       md:top-10 md:left-10 md:w-60 md:h-60
                       lg:w-72 lg:h-72"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-300 rounded-full mix-blend-soft-light filter blur-3xl
                       md:bottom-10 md:right-10 md:w-60 md:h-60
                       lg:w-72 lg:h-72"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white w-full lg:w-1/2 mb-10 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full backdrop-blur-sm mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold-400 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-secondary font-medium">
                About Our Institution
              </span>
            </div>

            <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
              Shaping Futures Since{" "}
              <span className="text-gold-400 relative inline-block">
                1937
                <span className="absolute -bottom-1 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed backdrop-blur-sm bg-white/5 p-3 md:p-4 rounded-lg md:rounded-xl">
              Vidya Prabodhini Prashala has been a beacon of academic
              excellence, nurturing young minds with values-based education and
              holistic development for over eight decades.
            </p>

            {/* Button Group - responsive layout */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
  <button className="px-4 py-3 md:px-6 lg:px-8 md:py-3.5 text-xs sm:text-sm gradient-navy text-white rounded-lg font-secondary font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-navy-600/30 active:scale-95">
    Discover Our Legacy
  </button>
  <button className="px-4 py-3 md:px-6 lg:px-8 md:py-3.5 bg-white/10 backdrop-blur-sm text-xs sm:text-sm text-white rounded-lg font-secondary font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 active:scale-95">
    Virtual Campus Tour
  </button>
</div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="p-2 md:p-3 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg md:rounded-xl shadow-lg">
                      <div className="text-white w-4 h-1 md:w-5 md:h-5 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">
                    {stat.value}
                    <span className="text-gold-400">{stat.suffix}</span>
                  </div>
                  <div className="text-white/90 text-xs sm:text-sm font-secondary font-medium leading-tight md:leading-normal">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile, visible on larger screens */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;