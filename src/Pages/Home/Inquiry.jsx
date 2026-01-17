import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, MapPin, Phone, Mail } from "lucide-react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    grade: "",
    email: "",
    mobileNumber: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.grade) newErrors.grade = "Please select a grade";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      grade: "",
      email: "",
      mobileNumber: "",
      location: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const popularLocations = [
    // Metro Cities
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    // Maharashtra
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Kolhapur",
    "Amravati",
    // Gujarat
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    // Karnataka
    "Mysore",
    "Mangalore",
    "Hubli",
    "Belgaum",
    "Davangere",
    // Telangana
    "Warangal",
    "Karimnagar",
    "Nizamabad",
    // Tamil Nadu
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Erode",
    "Tirunelveli",
    // West Bengal
    "Howrah",
    "Durgapur",
    "Siliguri",
    "Asansol",
    // Rajasthan
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    // Uttar Pradesh
    "Lucknow",
    "Kanpur",
    "Agra",
    "Varanasi",
    "Prayagraj",
    "Meerut",
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    // Haryana
    "Gurgaon",
    "Faridabad",
    "Panipat",
    "Sonipat",
    "Karnal",
    // Punjab
    "Chandigarh",
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    // Uttarakhand
    "Dehradun",
    "Haridwar",
    "Roorkee",
    "Haldwani",
    // Madhya Pradesh
    "Bhopal",
    "Indore",
    "Gwalior",
    "Jabalpur",
    "Ujjain",
    // Bihar
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    // Jharkhand
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    // Odisha
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Sambalpur",
    // Chhattisgarh
    "Raipur",
    "Bilaspur",
    "Durg",
    "Bhilai",
    // Assam
    "Guwahati",
    "Dibrugarh",
    "Silchar",
    // Kerala
    "Kochi",
    "Trivandrum",
    "Kozhikode",
    "Thrissur",
    // Andhra Pradesh
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Tirupati",
    // Goa
    "Panaji",
    "Margao",
    // Himachal Pradesh
    "Shimla",
    "Solan",
    "Dharamshala",
    // Jammu & Kashmir
    "Srinagar",
    "Jammu",
    // North East
    "Imphal",
    "Shillong",
    "Aizawl",
    "Agartala",
    "Kohima",
    "Itanagar",
    // UTs
    "Puducherry",
    "Port Blair",
    "Daman",
    "Diu",
    "Silvassa",
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden gradient-light"
      id="inquiry-form"
    >
      {/* Background decorative elements - responsive sizes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-navy-100/30 to-blue-100/20 rounded-full -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-40 md:-translate-y-40 lg:-translate-x-48 lg:-translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-blue-100/20 to-navy-100/30 rounded-full translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 md:translate-x-40 md:translate-y-40 lg:translate-x-48 lg:translate-y-48"></div>

      {/* Floating elements - responsive sizes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-navy-400/5 to-blue-400/5 rounded-full"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
            <h2 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              Enquiry Form
            </h2>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-500"></div>
          </div>

          <motion.div
            className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 gradient-navy mx-auto mb-6 sm:mb-7 md:mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-navy-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            Fill out the form below and our admission team will contact you
            within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-7 md:p-8 h-full border border-navy-100">
              <h3 className="text-lg sm:text-xl font-bold text-navy-800 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-navy-100">
                Quick Contact
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-navy-600 mb-1">Call Us</p>
                    <p className="text-base sm:text-lg font-semibold text-navy-800">
                      7507546666
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-navy-600 mb-1">Email Us</p>
                    <p className="text-base sm:text-lg font-semibold text-navy-800 break-words">
                      info@vppcbse.bhonsala.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-navy-600 mb-1">Visit Us</p>
                    <p className="text-sm sm:text-base font-semibold text-navy-800">
                      Dr. B.S. Moonje Marg, Rambhoomi
                      <br />
                      Nashik, Maharashtra 422005
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 md:pt-8 border-t border-navy-100">
                <p className="text-xs sm:text-sm text-navy-600">
                  <span className="font-semibold">Response Time:</span> Within
                  24 hours
                </p>
                <p className="text-xs sm:text-sm text-navy-600 mt-2">
                  <span className="font-semibold">Office Hours:</span> 8:30 AM -
                  12:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border border-navy-100"
              >
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy-50 to-blue-50 mb-6 sm:mb-8">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-navy-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3 sm:mb-4">
                  Thank You for Your Enquiry!
                </h3>
                <p className="text-navy-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                  We have received your details. Our admission team will contact
                  you shortly at
                  <span className="font-semibold text-navy-600">
                    {" "}
                    {formData.email}
                  </span>{" "}
                  or
                  <span className="font-semibold text-navy-600">
                    {" "}
                    +91 {formData.mobileNumber}
                  </span>
                  .
                </p>
                <button
                  onClick={resetForm}
                  className="group px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 gradient-navy text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-md hover:-translate-y-1 transform flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
                >
                  <span>Submit Another Enquiry</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-navy-100">
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
                    {/* Row 1: Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      {["firstName", "lastName"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: field === "firstName" ? 0.1 : 0.2,
                          }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-xs sm:text-sm font-semibold text-navy-700 mb-2 sm:mb-3">
                            {field === "firstName"
                              ? "Student First Name *"
                              : "Last Name *"}
                          </label>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`block w-full rounded-lg sm:rounded-xl border ${
                              errors[field]
                                ? "border-red-500"
                                : "border-navy-200"
                            } px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base placeholder-navy-400 focus:border-navy-500 focus:outline-none focus:ring-3 focus:ring-navy-500/20 transition-all duration-300 bg-white`}
                            placeholder={`Enter student's ${
                              field === "firstName" ? "first" : "last"
                            } name`}
                          />
                          {errors[field] && (
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 2: Grade & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      {["grade", "location"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: field === "grade" ? 0.3 : 0.4 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-xs sm:text-sm font-semibold text-navy-700 mb-2 sm:mb-3">
                            {field === "grade"
                              ? "Grade Seeking Admission For *"
                              : "Your Location/City *"}
                          </label>
                          {field === "grade" ? (
                            <select
                              name="grade"
                              value={formData.grade}
                              onChange={handleChange}
                              className={`block w-full rounded-lg sm:rounded-xl border ${
                                errors.grade
                                  ? "border-red-500"
                                  : "border-navy-200"
                              } px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base focus:border-navy-500 focus:outline-none focus:ring-3 focus:ring-navy-500/20 transition-all duration-300 bg-white`}
                            >
                              <option value="">Select Grade</option>
                              {[
                                "nursery",
                                "lkg",
                                "ukg",
                                ...Array.from({ length: 10 }, (_, i) => i + 1),
                              ].map((grade) => (
                                <option key={grade} value={grade}>
                                  {typeof grade === "number"
                                    ? `Grade ${grade}`
                                    : grade.charAt(0).toUpperCase() +
                                      grade.slice(1)}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div className="relative">
                              <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                list="location-suggestions"
                                className={`block w-full rounded-lg sm:rounded-xl border ${
                                  errors.location
                                    ? "border-red-500"
                                    : "border-navy-200"
                                } px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base placeholder-navy-400 focus:border-navy-500 focus:outline-none focus:ring-3 focus:ring-navy-500/20 transition-all duration-300 bg-white`}
                                placeholder="Enter your city"
                              />
                              <datalist id="location-suggestions">
                                {popularLocations.map((city) => (
                                  <option key={city} value={city} />
                                ))}
                              </datalist>
                            </div>
                          )}
                          {errors[field] && (
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 3: Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      {["email", "mobileNumber"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: field === "email" ? 0.5 : 0.6 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-xs sm:text-sm font-semibold text-navy-700 mb-2 sm:mb-3">
                            {field === "email"
                              ? "Email Address *"
                              : "Mobile Number *"}
                          </label>
                          {field === "mobileNumber" ? (
                            <div className="flex rounded-lg sm:rounded-xl shadow-sm bg-white">
                              <span className="inline-flex items-center rounded-l-lg sm:rounded-l-xl border border-r-0 border-navy-200 bg-navy-50 px-3 sm:px-4 md:px-6 text-sm sm:text-base text-navy-500">
                                +91
                              </span>
                              <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                maxLength="10"
                                className={`block w-full rounded-none rounded-r-lg sm:rounded-r-xl border ${
                                  errors.mobileNumber
                                    ? "border-red-500"
                                    : "border-navy-200"
                                } px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base placeholder-navy-400 focus:border-navy-500 focus:outline-none focus:ring-3 focus:ring-navy-500/20 transition-all duration-300`}
                                placeholder="Enter parent's mobile number"
                              />
                            </div>
                          ) : (
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`block w-full rounded-lg sm:rounded-xl border ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-navy-200"
                              } px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base placeholder-navy-400 focus:border-navy-500 focus:outline-none focus:ring-3 focus:ring-navy-500/20 transition-all duration-300 bg-white`}
                              placeholder="Enter parent's email address"
                            />
                          )}
                          {errors[field] && (
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Terms & Submit */}
                    <div className="pt-6 sm:pt-8 md:pt-10 border-t border-navy-200">
                      <div className="flex items-start mb-6 sm:mb-8">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="h-4 w-4 sm:h-5 sm:w-5 text-navy-600 focus:ring-navy-500 border-navy-300 rounded mt-1"
                        />
                        <label
                          htmlFor="terms"
                          className="ml-3 block text-xs sm:text-sm text-navy-700"
                        >
                          I agree to receive communication from the school
                          regarding admission procedures, events, and updates. I
                          confirm that all information provided is accurate to
                          the best of my knowledge.
                        </label>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 group px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 gradient-navy text-white rounded-lg sm:rounded-xl font-semibold focus:outline-none focus:ring-3 focus:ring-navy-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 border-b-2 border-white"></div>
                              <span className="text-xs sm:text-sm md:text-base">Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Enquiry</span>
                              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 border border-navy-300 sm:border-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-navy-700 bg-white hover:bg-navy-50 focus:outline-none focus:ring-3 focus:ring-navy-200 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 transform"
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;