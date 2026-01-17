import React, { useState, useEffect } from "react";
import { Calendar, ExternalLink, Smartphone, Monitor, Tablet, Download, BookOpen, Star, Sparkles, Cloud, Sun, Heart, ChevronRight, ChevronLeft, Clock, FileText } from "lucide-react";
import Academiccalendar from "../../constant/Calendar/AcademicCalendarData";
import { motion } from "framer-motion"

const AcademicCalendar = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCalendarIndex, setCurrentCalendarIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Find initial index
    const initialIndex = Academiccalendar.findIndex(item => item.year === selectedYear);
    setCurrentCalendarIndex(initialIndex >= 0 ? initialIndex : 0);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [selectedYear]);

  const selectedCalendar = Academiccalendar.find(
    (item) => item.year === selectedYear
  );

  const getPdfUrl = () => {
    if (!selectedCalendar?.pdf) return '';
    
    if (isMobile) {
      return `${selectedCalendar.pdf}#view=FitW&toolbar=0&navpanes=0&scrollbar=0`;
    }
    
    return `${selectedCalendar.pdf}#view=FitH&toolbar=0&navpanes=0`;
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsLoading(true);
    const newIndex = Academiccalendar.findIndex(item => item.year === year);
    setCurrentCalendarIndex(newIndex);
  };

  const handlePreviousYear = () => {
    if (currentCalendarIndex > 0) {
      const newIndex = currentCalendarIndex - 1;
      setCurrentCalendarIndex(newIndex);
      setSelectedYear(Academiccalendar[newIndex].year);
      setIsLoading(true);
    }
  };

  const handleNextYear = () => {
    if (currentCalendarIndex < Academiccalendar.length - 1) {
      const newIndex = currentCalendarIndex + 1;
      setCurrentCalendarIndex(newIndex);
      setSelectedYear(Academiccalendar[newIndex].year);
      setIsLoading(true);
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
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-navy-300" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-10">
          <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
            <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-to-r from-navy-700 to-blue-700">
              Academic Calendar
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
            View and explore the academic calendar by year
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
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                {Academiccalendar.length} Academic Years
              </span>
            </div>
            {/* <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                PDF Download Available
              </span>
            </div> */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Updated Annually
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= YEAR SELECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 p-4 sm:p-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                Select Academic Year
              </h2>
            </div>

            {/* Year Selection with Navigation */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 sm:order-1">
                <button
                  onClick={handlePreviousYear}
                  disabled={currentCalendarIndex === 0}
                  className="p-2 rounded-lg border border-navy-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-navy-50 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-navy-600" />
                </button>

                {/* Year Indicators */}
                <div className="flex items-center gap-1.5">
                  {Academiccalendar.map((item, index) => (
                    <div
                      key={item.year}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        selectedYear === item.year
                          ? "bg-gradient-to-r from-navy-600 to-blue-600 w-3 sm:w-4"
                          : "bg-navy-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextYear}
                  disabled={currentCalendarIndex === Academiccalendar.length - 1}
                  className="p-2 rounded-lg border border-navy-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-navy-50 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-navy-600" />
                </button>
              </div>

              {/* Year Buttons */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 flex-1 sm:order-2">
                {Academiccalendar.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => handleYearSelect(item.year)}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-300 ${
                      selectedYear === item.year
                        ? "bg-gradient-to-r from-navy-600 to-blue-600 text-white shadow-lg"
                        : "bg-gradient-to-br from-white to-gray-50 text-gray-700 hover:bg-navy-50 border border-navy-100"
                    } text-sm sm:text-base`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CALENDAR VIEWER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden">
            {/* Viewer Header */}
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-navy-50 to-blue-50 border-b border-navy-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                      {selectedCalendar?.title || "Academic Calendar"}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      {selectedCalendar?.description || "School academic calendar"}
                    </p>
                  </div>
                </div>

                {/* Device Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-navy-100">
                  {isMobile ? (
                    <Smartphone className="h-4 w-4 text-navy-600" />
                  ) : window.innerWidth < 1024 ? (
                    <Tablet className="h-4 w-4 text-navy-600" />
                  ) : (
                    <Monitor className="h-4 w-4 text-navy-600" />
                  )}
                  <span className="text-xs sm:text-sm font-medium text-navy-700">
                    {isMobile ? 'Mobile' : window.innerWidth < 1024 ? 'Tablet' : 'Desktop'} View
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 sm:p-5 md:p-6">
              {/* <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={selectedCalendar?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-navy-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Open Full PDF
                </a>
                <a
                  href={selectedCalendar?.pdf}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded-lg hover:bg-navy-50 transition-all duration-300 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Calendar
                </a>
              </div> */}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-center mb-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-navy-600"></div>
                    <p className="text-gray-600 text-sm sm:text-base">Loading calendar...</p>
                  </div>
                </div>
              )}

              {/* PDF Viewer */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg border border-navy-200 bg-gray-100">
                {selectedCalendar?.pdf ? (
                  <>
                    {/* Mobile Warning */}
                    {isMobile && (
                      <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-yellow-200">
                        <p className="text-center text-yellow-800 text-xs sm:text-sm">
                          For best experience on mobile, use "Open Full PDF" or "Download Calendar"
                        </p>
                      </div>
                    )}

                    <div className="relative h-[60vh] sm:h-[70vh]">
                      <iframe
                        src={getPdfUrl()}
                        title={`Academic Calendar ${selectedYear}`}
                        className="w-full h-full"
                        style={{ border: 'none' }}
                        onLoad={handleIframeLoad}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-[60vh] sm:h-[70vh] flex flex-col items-center justify-center bg-gray-100 p-4">
                    <FileText className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                      No calendar available for this academic year
                    </p>
                  </div>
                )}
              </div>

              {/* Viewer Info */}
              <div className="mt-4 flex items-center justify-between text-gray-600 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Vidya Prabodhini Prashala CBSE</span>
                </div>
                <div className="text-right">
                  <span>Academic Year: {selectedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CALENDAR INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-br from-navy-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-navy-100 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 mb-3">
                  About Academic Calendar
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Our academic calendar includes important dates for examinations, holidays, 
                  parent-teacher meetings, cultural events, and other school activities. 
                  Regular updates ensure students and parents stay informed throughout the year.
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 rounded-lg p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">180+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Working Days</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">4+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Examinations</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Holidays</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>

        {/* ================= BOTTOM DECORATIVE ELEMENT ================= */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 sm:gap-4 text-navy-600">
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium">Plan Your Academic Year</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCalendar;