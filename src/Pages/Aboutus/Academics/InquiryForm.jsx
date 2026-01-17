import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, CheckCircle, School, Phone, Mail, User, MapPin, BookOpen, ChevronRight, Star, Sparkles, Cloud, Sun, Heart } from "lucide-react";
import { elephantsticker } from "../../../assets";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    schoolName: "",
    studentClass: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        state: "",
        city: "",
        schoolName: "",
        studentClass: "",
        email: "",
        phone: "",
      });
    }, 3000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white to-navy-50/30" id="inquiry">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-navy-100/20 to-blue-100/10 rounded-full -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tl from-blue-100/10 to-navy-100/20 rounded-full translate-x-24 translate-y-24"></div>

      {/* Creative Doodles */}
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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= Section Header ================= */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
            <h2 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              Admission Enquiry Form
            </h2>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
          </div>

          <motion.div
            className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-navy-600 via-blue-600 to-navy-600 mx-auto mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            Fill out the form below and our admission team will contact you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-navy-100 p-4 sm:p-6 md:p-8 h-full">
              {/* Sticker Image - Responsive */}
              <div className="mb-6 sm:mb-8 flex justify-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <img
                    src={elephantsticker}
                    alt="School Mascot"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  {/* Decorative star */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800 mb-4 sm:mb-6 pb-4 border-b border-navy-100">
                Why Choose VPP CBSE?
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: "🏆", title: "Academic Excellence", description: "Consistent 100% board results with comprehensive learning approach" },
                  { icon: "🧠", title: "Holistic Development", description: "Balanced focus on academics, sports, arts, and personality development" },
                  { icon: "🏫", title: "Modern Infrastructure", description: "State-of-the-art facilities including smart classrooms and laboratories" },
                  { icon: "👨‍🏫", title: "Expert Faculty", description: "Qualified and experienced teachers with student-centric teaching methods" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-100/20 to-blue-100/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="text-lg sm:text-xl">{feature.icon}</div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{feature.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-navy-100">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Response Time:</span> Within 24 hours
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Office Hours:</span> 8:30 AM - 4:00 PM (Mon-Sat)
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Contact:</span> +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Mobile Quick Info */}
              {isMobile && (
                <div className="mt-6 pt-6 border-t border-navy-100">
                  <div className="flex items-center gap-2 text-navy-600">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-sm font-medium">Quick admission process</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <div className="lg:col-span-1">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center border border-navy-100"
              >
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 mb-6 sm:mb-8">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800 mb-3 sm:mb-4">
                  Thank You for Your Enquiry!
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  We have received your details. Our admission team will contact
                  you shortly at
                  <span className="font-semibold text-navy-600">
                    {" "}
                    {formData.email}
                  </span>
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-navy-600 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1 transform flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
                >
                  <span>Submit Another Enquiry</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-navy-100">
                <div className="p-4 sm:p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* First Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 lg:col-span-1"
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Student First Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-300 bg-white/50"
                            placeholder="Enter first name"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Last Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 lg:col-span-1"
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-300 bg-white/50"
                            placeholder="Enter last name"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* State */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          State *
                        </label>
                        <div className="relative">
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none appearance-none bg-white/50"
                          >
                            <option value="">Select State</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="delhi">Delhi</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="tamilnadu">Tamil Nadu</option>
                            <option value="gujarat">Gujarat</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* City */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <div className="relative">
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none appearance-none bg-white/50"
                          >
                            <option value="">Select City</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="chennai">Chennai</option>
                            <option value="ahmedabad">Ahmedabad</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* School Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Current School *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-300 bg-white/50"
                            placeholder="Enter school name"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <School className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Class */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Current Class *
                        </label>
                        <div className="relative">
                          <select
                            name="studentClass"
                            value={formData.studentClass}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none appearance-none bg-white/50"
                          >
                            <option value="">Select Class</option>
                            <option value="playgroup">Playgroup</option>
                            <option value="nursery">Nursery</option>
                            <option value="jr_kg">Junior KG</option>
                            <option value="sr_kg">Senior KG</option>
                            <option value="grade1">Grade 1</option>
                            <option value="grade2">Grade 2</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2"
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-300 bg-white/50"
                            placeholder="Enter email address"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2"
                      >
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="flex rounded-lg sm:rounded-xl shadow-sm">
                          <span className="inline-flex items-center rounded-l-lg sm:rounded-l-xl border border-r-0 border-gray-300 bg-gray-50/50 px-3 sm:px-4 text-gray-500 text-sm">
                            +91
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full rounded-r-lg sm:rounded-r-xl border border-gray-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition-all duration-300 bg-white/50"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 sm:pt-6">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-navy-600 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1 transform flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Submit Enquiry</span>
                      </motion.button>
                      <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">
                        Our team will contact you within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= Bottom decorative element ================= */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 sm:gap-4 text-navy-600">
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium">Secure & Confidential</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryForm;