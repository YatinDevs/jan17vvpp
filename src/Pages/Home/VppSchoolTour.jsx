import React, { useState } from "react";
import { vppSchoolTourData } from "../../constant/Home/vppSchoolTourData";
import { ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function VppSchoolTour() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const images = vppSchoolTourData.images;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements - responsive sizes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/5 to-navy-500/5 rounded-full -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-40 md:-translate-y-40 lg:-translate-x-48 lg:-translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-navy-500/5 to-blue-500/5 rounded-full translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 md:translate-x-40 md:translate-y-40 lg:translate-x-48 lg:translate-y-48"></div>

      {/* Grid pattern - responsive opacity */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #194369 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header - responsive typography */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/20 to-navy-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-navy-600" />
            </div>
            <h2 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              {vppSchoolTourData.title}
            </h2>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-navy-500/20 to-blue-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-navy-600" />
            </div>
          </div>

          <motion.div
            className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 gradient-navy mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            Take a virtual tour of our state-of-the-art campus facilities and
            infrastructure
          </p>
        </motion.div>

        {/* Mobile Image Gallery */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {/* Main Image */}
          <motion.div
            className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl"
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-60 sm:h-72 object-cover"
            />

            {/* Navigation Arrows - responsive sizes */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl gradient-navy text-white shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl gradient-navy text-white shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Overlay - responsive padding */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                {images[activeIndex].alt}
              </h3>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="px-2 py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
                  {activeIndex + 1} / {images.length}
                </div>
                <button className="ml-auto px-3 py-1.5 sm:px-4 sm:py-2 gradient-navy text-white rounded-lg text-xs sm:text-sm font-semibold">
                  View Full Screen
                </button>
              </div>
            </div>
          </motion.div>

          {/* Thumbnails - responsive sizes */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 sm:pb-4 no-scrollbar px-1 sm:px-2">
            {images.map((img, index) => (
              <motion.button
                key={img.id}
                onClick={() => setActiveIndex(index)}
                className={`relative min-w-[80px] h-20 sm:min-w-[100px] sm:h-24 md:min-w-[120px] md:h-28 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 border ${
                  activeIndex === index
                    ? "border-navy-500 scale-105 shadow-md"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
                whileHover={{ y: -8 }}
              >
                {/* Image - responsive height */}
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2">
                        {img.alt}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button - responsive */}
          {images.length > 4 && (
            <motion.div
              className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="group px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 gradient-navy text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl lg:hover:shadow-3xl hover:-translate-y-1 transform flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
              >
                <span>{showAll ? "Show Less" : "View All Images"}</span>
                <ChevronRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                    showAll ? "rotate-90" : "group-hover:translate-x-1 sm:group-hover:translate-x-2"
                  }`}
                />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VppSchoolTour;