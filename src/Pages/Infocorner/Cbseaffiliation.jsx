import React from "react";
import cbseAffiliationData from "../../constant/Infocorner/CbseAffiliationData";
import {
  FileText,
  Download,
  Calendar,
  Shield,
  Flame,
  School,
  CheckCircle,
  Star,
  Sparkles,
  Cloud,
  Sun,
  Heart,
  BookOpen,
  Award,
  Clock,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Cbseaffiliation = () => {
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <FileText className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 2:
        return <Flame className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 3:
        return <Shield className="h-5 w-5 sm:h-6 sm:w-6" />;
      default:
        return <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />;
    }
  };

  const getColorClasses = (id) => {
    switch (id) {
      case 1:
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          badge: "bg-green-100 text-green-800",
          iconBg: "from-green-50 to-emerald-50",
        };
      case 2:
        return {
          bg: "bg-red-50",
          text: "text-red-600",
          badge: "bg-red-100 text-red-800",
          iconBg: "from-red-50 to-rose-50",
        };
      case 3:
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          badge: "bg-blue-100 text-blue-800",
          iconBg: "from-blue-50 to-navy-50",
        };
      default:
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          badge: "bg-purple-100 text-purple-800",
          iconBg: "from-purple-50 to-indigo-50",
        };
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return {
          dot: "bg-green-500",
          text: "text-green-700",
          bg: "bg-green-50",
        };
      case "Expiring Soon":
        return {
          dot: "bg-yellow-500",
          text: "text-yellow-700",
          bg: "bg-yellow-50",
        };
      case "Expired":
        return {
          dot: "bg-red-500",
          text: "text-red-700",
          bg: "bg-red-50",
        };
      default:
        return {
          dot: "bg-gray-500",
          text: "text-gray-700",
          bg: "bg-gray-50",
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
              CBSE Affiliation Certificates
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
            Official CBSE affiliation certificates and mandatory documents
            required for maintaining our affiliation with the Central Board of
            Secondary Education.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                {cbseAffiliationData.length} Certificates
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Full Affiliation Status
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Updated Regularly
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CBSE AFFILIATION LIST ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cbseAffiliationData.map((certificate) => {
            const colors = getColorClasses(certificate.id);
            const statusColors = getStatusColor(certificate.status);

            return (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden group"
              >
                {/* Certificate Header with Icon */}
                <div className={`p-4 sm:p-5 md:p-6 bg-gradient-to-r ${colors.iconBg} border-b border-navy-100`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${colors.bg}`}>
                          {getIcon(certificate.id)}
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                          <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 truncate">
                          {certificate.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mt-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Valid: {certificate.validityPeriod}</span>
                        </div>
                      </div>
                    </div>
                    {certificate.isMandatory && (
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                        Mandatory
                      </span>
                    )}
                  </div>

                  {/* Type Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors.badge}`}>
                      {certificate.type}
                    </span>
                    {certificate.status && (
                      <div className="flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${statusColors.dot}`}></div>
                        <span className={`text-xs font-medium ${statusColors.text}`}>
                          {certificate.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-4 sm:p-5 md:p-6 flex-grow">
                  {/* Description */}
                  {certificate.description && (
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      {certificate.description}
                    </p>
                  )}

                  {/* Additional Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {certificate.affiliationNumber && (
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Affiliation No:</span>
                        <p className="text-sm font-medium text-navy-700 truncate">
                          {certificate.affiliationNumber}
                        </p>
                      </div>
                    )}
                    {certificate.issuedBy && (
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Issued By:</span>
                        <p className="text-sm font-medium text-navy-700 truncate">
                          {certificate.issuedBy}
                        </p>
                      </div>
                    )}
                    {certificate.renewalDate && (
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Next Renewal:</span>
                        <p className="text-sm font-medium text-navy-700 truncate">
                          {certificate.renewalDate}
                        </p>
                      </div>
                    )}
                    {certificate.fileSize && (
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">File Size:</span>
                        <p className="text-sm font-medium text-navy-700 truncate">
                          {certificate.fileSize}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Pages and Info */}
                  {certificate.pages && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-4">
                      <FileText className="w-3 h-3" />
                      <span>{certificate.pages}</span>
                    </div>
                  )}
                </div>

                {/* Action Section */}
                <div className="p-4 sm:p-5 md:p-6 pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-navy-100">
                    <div className="flex items-center gap-3">
                      {certificate.verificationLink && (
                        <a
                          href={certificate.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-navy-600 hover:text-navy-700 text-xs sm:text-sm font-medium group/verify"
                        >
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Verify Online</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/verify:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      {certificate.viewLink && (
                        <a
                          href={certificate.viewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 border border-navy-600 text-navy-600 font-semibold rounded-lg hover:bg-navy-50 transition-all duration-300 text-xs sm:text-sm group/view"
                        >
                          <span>Preview</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/view:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {/* <a
                        href={certificate.pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-navy-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm group/download"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Download</span>
                      </a> */}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-navy-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM INFO SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-br from-navy-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-navy-100 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 mb-2">
                  About CBSE Affiliation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Our school is affiliated with the Central Board of Secondary Education (CBSE), 
                  ensuring high-quality education standards, comprehensive curriculum, and national-level 
                  recognition. All certificates are regularly updated and verified as per CBSE guidelines.
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
              <span className="text-xs sm:text-sm font-medium">Officially Certified & Verified</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cbseaffiliation;