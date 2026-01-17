import React from "react";
import circularsData from "../../constant/Infocorner/CircularsData";
import {
  FileText,
  Download,
  ExternalLink,
  Bell,
  AlertCircle,
  Calendar,
  Star,
  Sparkles,
  Cloud,
  Sun,
  Heart,
  Clock,
  ChevronRight,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Circulars = () => {
  // Function to handle CBSE Portal click
  const handleCbsePortalClick = () => {
    window.open(
      "https://cbse.gov.in/cbsenew/circulars.html",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Function to handle circular download
  const handleCircularDownload = (pdfFile, title) => {
    console.log(`Downloading circular: ${title}`);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return {
          bg: "from-red-50 to-rose-50",
          text: "text-red-600",
          badge: "bg-red-100 text-red-800",
          iconBg: "bg-red-500",
        };
      case "Medium":
        return {
          bg: "from-yellow-50 to-amber-50",
          text: "text-yellow-600",
          badge: "bg-yellow-100 text-yellow-800",
          iconBg: "bg-yellow-500",
        };
      default:
        return {
          bg: "from-blue-50 to-navy-50",
          text: "text-blue-600",
          badge: "bg-blue-100 text-blue-800",
          iconBg: "bg-blue-500",
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-navy-50/30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-navy-100/20 to-blue-100/10 rounded-full -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tl from-blue-100/10 to-navy-100/20 rounded-full translate-x-24 translate-y-24"></div>

      {/* Creative decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 opacity-20 animate-bounce">
          <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-navy-400" />
        </div>
        <div className="absolute top-20 right-8 sm:top-32 sm:right-16 opacity-20 animate-pulse">
          <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-10 sm:bottom-32 sm:left-20 opacity-20 animate-bounce">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-15">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-navy-300" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-15">
          <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADING ================= */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
            <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              Circulars & Notices
            </h1>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
          </div>

          <motion.div
            className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-navy-600 via-blue-600 to-navy-600 mx-auto mb-4 sm:mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-4">
            Official circulars, notices, and announcements from CBSE and our
            institution. Stay updated with the latest information.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Bell className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                {circularsData.length} Circulars
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Updated Daily
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Official Sources
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CBSE PORTAL SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div
            onClick={handleCbsePortalClick}
            className="bg-gradient-to-r from-navy-600 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-1 group overflow-hidden"
          >
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                      CBSE Official Circulars Portal
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Click to access all official circulars directly from CBSE website
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
                  <span>Visit Portal</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            {/* Hover Effect Line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* ================= CIRCULARS LIST ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                Latest Circulars
              </h2>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Updated: {new Date().toLocaleDateString("en-IN")}</span>
            </div>
          </div>

          {/* Circulars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {circularsData.map((circular) => {
              const priorityColors = getPriorityColor(circular.priority);

              return (
                <motion.div
                  key={circular.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden group"
                >
                  {/* Circular Header */}
                  <div className={`p-4 sm:p-5 bg-gradient-to-r ${priorityColors.bg} border-b border-navy-100`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${priorityColors.iconBg}`}>
                            {circular.priority === "High" ? (
                              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            ) : (
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            )}
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                            <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-navy-800 line-clamp-2">
                            {circular.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mt-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{circular.date}</span>
                          </div>
                        </div>
                      </div>
                      {circular.isNew && (
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                          New
                        </span>
                      )}
                    </div>

                    {/* Priority Badge */}
                    {circular.priority && (
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium rounded-full ${priorityColors.badge}`}>
                          {circular.priority} Priority
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Circular Details */}
                  <div className="p-4 sm:p-5 flex-grow">
                    {/* Description */}
                    {circular.description && (
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
                        {circular.description}
                      </p>
                    )}

                    {/* Details Grid */}
                    <div className="space-y-2 sm:space-y-3">
                      {circular.source && (
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-xs sm:text-sm">
                            <span className="font-medium">Source:</span>{" "}
                            <span className="text-navy-700 font-medium">{circular.source}</span>
                          </p>
                        </div>
                      )}

                      {circular.applicableTo && (
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-xs sm:text-sm">
                            <span className="font-medium">Applicable:</span>{" "}
                            <span className="text-navy-700 font-medium">{circular.applicableTo}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* File Size */}
                    {circular.fileSize && (
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{circular.fileSize}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Section */}
                  <div className="p-4 sm:p-5 pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-navy-100">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {circular.externalLink && (
                          <a
                            href={circular.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-700 text-xs sm:text-sm font-medium group/link"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>View Online</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {/* {circular.pdfFile && (
                          <a
                            href={circular.pdfFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-navy-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm group/download"
                            onClick={() =>
                              handleCircularDownload(circular.pdfFile, circular.title)
                            }
                          >
                            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Download</span>
                          </a>
                        )} */}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-navy-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= BOTTOM INFO SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8"
        >
          <div className="bg-gradient-to-br from-navy-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-navy-100 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 mb-2">
                  Stay Updated with Important Notices
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  All circulars and notices are official documents from CBSE and school administration. 
                  Parents and students are advised to regularly check for updates regarding examinations, 
                  holidays, syllabus changes, and other important announcements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= BOTTOM DECORATIVE ELEMENT ================= */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 sm:gap-4 text-navy-600">
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium">Stay Informed & Updated</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Circulars;