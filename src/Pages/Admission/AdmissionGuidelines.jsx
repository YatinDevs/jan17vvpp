// components/Admission/AdmissionGuidelines.jsx
import React from "react";
import { admissionGuidelinesData } from "../../constant/Admission/admissionGuidelinesData";
import { 
  ExternalLink, 
  FileText, 
  Calendar, 
  UserCheck, 
  CheckCircle,
  Star,
  Sparkles,
  Cloud,
  Sun,
  Heart,
  BookOpen,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const AdmissionGuidelines = () => {
  const iconMap = {
    process: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
    "age-criteria": <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
    registration: <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
    documents: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    criteria: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
    contact: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              {admissionGuidelinesData.title}
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
            Admission Guidelines & Process
          </p>
        </motion.div>

        {/* ================= SECTIONS ================= */}
        <div className="space-y-6 sm:space-y-8">
          {admissionGuidelinesData.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden"
            >
              {/* Section Header */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-navy-50 to-blue-50 border-b border-navy-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                      {iconMap[section.id] || <FileText className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                      {section.title}
                    </h2>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="h-1 w-4 sm:w-6 bg-navy-500 rounded-full"></div>
                      <div className="h-1 w-2 sm:w-3 bg-blue-500 rounded-full"></div>
                      <div className="h-1 w-1 sm:w-2 bg-navy-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                {/* Content Paragraph */}
                {section.content && (
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-navy-50/30 to-blue-50/30 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Items List */}
                {section.items && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 text-navy-700 mb-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-semibold">Key Points</span>
                    </div>
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group hover:bg-navy-50/30 p-2 sm:p-3 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-2 h-2 mt-2.5 sm:mt-3 rounded-full bg-navy-500 group-hover:bg-blue-500 transition-colors"></div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {item}
                          </p>
                          {/* Decorative line on hover */}
                          <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-navy-300 to-transparent transition-all duration-300 mt-1"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CONTACT INFORMATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden">
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-navy-50 to-blue-50 border-b border-navy-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                  For More Information
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-xl p-4 border border-navy-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Admission Office Hours</p>
                      <p className="text-navy-800 font-medium text-base">
                        8:30 AM - 12:00 PM (Mon-Fri)
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-navy-200 to-transparent"></div>
                </motion.div>

                {/* Academic Year */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-xl p-4 border border-navy-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Academic Year</p>
                      <p className="text-navy-800 font-medium text-base">
                        2026-2027
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-navy-200 to-transparent"></div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-white/90 rounded-xl p-4 border border-navy-100 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contact Admissions</p>
                      <p className="text-navy-800 font-medium text-base">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-navy-200 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= IMPORTANT NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8"
        >
          <div className="bg-gradient-to-br from-yellow-50/80 to-amber-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-yellow-100 p-4 sm:p-5 md:p-6 shadow-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-800 mb-2">
                  Important Notice
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-yellow-700 leading-relaxed">
                  <span className="font-semibold">Note:</span> All admissions are
                  subject to seat availability and compliance with CBSE
                  guidelines. Parents are advised to verify all information with
                  the school admission office before proceeding with the admission process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="/admissions/admission"
            className="inline-flex items-center gap-2 sm:gap-3 group bg-gradient-to-r from-navy-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base md:text-lg">Download Admission Forms</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-gray-600 text-xs sm:text-sm mt-3">
            Access all required documents and forms for the admission process
          </p>
        </motion.div>

        {/* ================= Bottom decorative element ================= */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 sm:gap-4 text-navy-600">
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium">Follow Guidelines Carefully</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionGuidelines;