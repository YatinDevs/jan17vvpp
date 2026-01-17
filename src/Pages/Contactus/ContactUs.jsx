import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Navigation,
  Globe,
  Building,
  Users,
  MessageSquare,
  Heart,
  Star,
  Sparkles,
  Cloud,
  Send,
  ChevronRight
} from "lucide-react";
import { contactUsData } from "../../constant/Contactus/contactUsData";

const ContactUs = () => {
  // Map icons to contact types
  const getIcon = (label) => {
    switch(label.toLowerCase()) {
      case 'address':
        return <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'phone':
        return <Phone className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'email':
        return <Mail className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'website':
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'working hours':
        return <Clock className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-navy-50/30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-navy-100/20 to-blue-100/10 rounded-full -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tl from-blue-100/10 to-navy-100/20 rounded-full translate-x-24 translate-y-24"></div>

      {/* Creative decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 opacity-20 animate-bounce">
          <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-navy-400" />
        </div>
        <div className="absolute top-20 right-8 sm:top-32 sm:right-16 opacity-20 animate-pulse">
          <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-10 sm:bottom-32 sm:left-20 opacity-20 animate-bounce">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-15">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-navy-300" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-15">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
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
              Contact Us
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
            Get in touch with us. We're here to help and answer any questions you might have.
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
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                24/7 Support
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Quick Response
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Friendly Staff
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* ================= CONTACT DETAILS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden">
              {/* Header */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-navy-50 to-blue-50 border-b border-navy-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                      Contact Information
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Reach out to us through any of these channels
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
                  {contactUsData.details.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: item.id * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      className="group bg-gradient-to-br from-white to-gray-50/80 rounded-xl border border-navy-100 p-4 sm:p-5 hover:shadow-lg hover:border-navy-200 transition-all duration-300 cursor-pointer"
                    >
                      <a
                        href={item.link}
                        target={item.label === "Address" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:from-navy-100 group-hover:to-blue-100 transition-all border border-navy-100">
                            <div className="text-navy-600">
                              {getIcon(item.label)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-navy-700 transition-colors">
                                {item.label}
                              </h3>
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-navy-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 group-hover:text-navy-600 transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info Section */}
                <div className="bg-gradient-to-br from-navy-50/50 to-blue-50/50 rounded-xl border border-navy-100 p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy-800">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-navy-100/50">
                      <span className="text-sm text-gray-700">Monday - Friday</span>
                      <span className="text-sm font-medium text-navy-700">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-navy-100/50">
                      <span className="text-sm text-gray-700">Saturday</span>
                      <span className="text-sm font-medium text-navy-700">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-700">Sunday</span>
                      <span className="text-sm font-medium text-navy-700">Closed</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href={`mailto:${contactUsData.details.find(d => d.label === "Email")?.value || "contact@school.edu"}`}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-navy-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base group"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send us an Email
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= GOOGLE MAP ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-navy-100 overflow-hidden h-full">
              {/* Header */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-navy-50 to-blue-50 border-b border-navy-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                      Our Location
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Find us easily with directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-navy-200 bg-gray-100 h-[400px] sm:h-[450px] md:h-[500px]">
                  {/* Map Loading State */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-navy-50/50">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading map...</p>
                    </div>
                  </div>

                  <iframe
                    src={contactUsData.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location - Google Maps"
                  />
                </div>

                {/* Map Actions */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contactUsData.details.find(d => d.label === "Address")?.value || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-navy-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get Directions
                  </a>
                  <a
                    href={contactUsData.mapEmbedUrl.replace("/embed", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded-lg hover:bg-navy-50 transition-all duration-300 text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    Open in Maps
                  </a>
                </div>

                {/* Location Info */}
                <div className="mt-4 p-3 bg-gradient-to-br from-navy-50/50 to-blue-50/50 rounded-lg border border-navy-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">
                        {contactUsData.details.find(d => d.label === "Address")?.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Landmark: Near {contactUsData.details.find(d => d.label === "Address")?.value?.split(',')[0] || "School Premises"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-br from-navy-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-navy-100 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 mb-3">
                  Why Choose Us?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  At our school, we believe in open communication and building strong relationships 
                  with our students and parents. Our dedicated staff is always ready to assist you 
                  with any inquiries or concerns you may have.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 rounded-lg p-3 text-center border border-navy-100">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center border border-navy-100">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">&lt; 2h</div>
                    <div className="text-xs sm:text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center border border-navy-100">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">100%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
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
              <span className="text-xs sm:text-sm font-medium">We're Here to Help</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;