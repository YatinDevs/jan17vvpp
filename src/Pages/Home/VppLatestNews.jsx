import {
  ChevronLeft,
  ChevronRight,
  Newspaper,
  Clock,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { vppLatestNewsData } from "../../constant/Home/vppLatestNewsData";
import { useRef } from "react";

function VppLatestNews() {
  const cardsRef = useRef(null);

  const scrollLeft = () => {
    if (cardsRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 400;
      cardsRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 400;
      cardsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements - responsive sizes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-navy-500/10 to-blue-500/10 rounded-full -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-40 md:-translate-y-40 lg:-translate-x-48 lg:-translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-blue-500/10 to-navy-500/10 rounded-full translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 md:translate-x-40 md:translate-y-40 lg:translate-x-48 lg:translate-y-48"></div>

      {/* Newspaper icons - responsive sizes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <Newspaper
            key={i}
            className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-navy-400/10"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
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
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-navy-500/20 to-blue-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
              <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-navy-600" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 bg-clip-text text-transparent">
              {vppLatestNewsData.title}
            </h2>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/20 to-navy-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-navy-600" />
            </div>
          </div>

          <motion.div
            className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 gradient-navy mx-auto mb-6 sm:mb-7 md:mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            Stay updated with the latest news, events, and announcements from
            our school
          </p>
        </motion.div>

        {/* News Cards Container */}
        <div className="relative">
          {/* Desktop Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className="hidden lg:flex absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full gradient-navy text-white shadow-xl md:shadow-2xl items-center justify-center transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>

          {/* News Cards - responsive layout */}
          <div
            ref={cardsRef}
            className="
              flex lg:grid
              lg:grid-cols-3
              gap-4 sm:gap-5 md:gap-6 lg:gap-8
              overflow-x-auto lg:overflow-visible
              snap-x snap-mandatory
              pb-6 sm:pb-8 lg:pb-0
              no-scrollbar
              px-1 sm:px-2
            "
          >
            {vppLatestNewsData.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="
                  flex-shrink-0 w-[85%] xs:w-[75%] sm:w-[48%] md:w-[45%] lg:w-auto
                  bg-gradient-to-br from-white to-white/90 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden
                  shadow-lg sm:shadow-xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500
                  snap-center
                  border border-navy-100/50 backdrop-blur-sm
                  group
                "
              >
                {/* Image - responsive height */}
                <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-navy-500/10 to-blue-500/10">
                  <img
                    src={item.image}
                    alt="Latest News"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lg:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Content - responsive padding */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Meta info - responsive typography */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{item.readTime || "3 min read"}</span>
                    </div>
                    <div className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-navy-100 to-blue-100 text-navy-700 text-xs font-semibold rounded-full">
                      {item.category || "Announcement"}
                    </div>
                  </div>

                  {/* Title - responsive typography */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-navy-700 transition-colors duration-300 line-clamp-2">
                    {item.title || "Latest Update"}
                  </h3>

                  {/* Description - responsive typography */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Read more link - responsive typography */}
                  <a
                    href={item.link}
                    className="inline-flex items-center text-navy-600 hover:text-navy-800 font-semibold text-xs sm:text-sm group/link"
                  >
                    <span>Read Full Story</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/link:translate-x-1 sm:group-hover/link:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className="hidden lg:flex absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full gradient-navy text-white shadow-xl md:shadow-2xl items-center justify-center transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>
        </div>

        {/* Mobile scroll indicator */}
        <div className="block lg:hidden text-center mt-6">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            <span>Swipe to see more</span>
            <ChevronRight className="w-4 h-4" />
          </p>
        </div>

        {/* View All News Button - responsive */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/"
            className="group px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 gradient-navy text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl lg:hover:shadow-3xl hover:-translate-y-1 transform flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <span>View All News & Updates</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default VppLatestNews;