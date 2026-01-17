import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificatesData from "../../constant/Disclosure/CertificatesData";
import { 
  FileText, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  BookOpen,
  Star,
  Sparkles,
  Cloud,
  Heart,
  Search,
  Filter,
  Info,
  Shield,
  Lock,
  CheckCircle,
  ZoomIn,
  ZoomOut
} from "lucide-react";

const Disclosure = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleDocumentClick = (item, index) => {
    setSelectedDocument(item);
    setCurrentDocIndex(index);
    setZoomLevel(1);
    setIsLoading(true);
  };

  const closeDocumentViewer = () => {
    setSelectedDocument(null);
    setZoomLevel(1);
  };

  const nextDocument = () => {
    if (currentDocIndex < certificatesData.length - 1) {
      const newIndex = currentDocIndex + 1;
      setCurrentDocIndex(newIndex);
      setSelectedDocument(certificatesData[newIndex]);
      setZoomLevel(1);
      setIsLoading(true);
    }
  };

  const prevDocument = () => {
    if (currentDocIndex > 0) {
      const newIndex = currentDocIndex - 1;
      setCurrentDocIndex(newIndex);
      setSelectedDocument(certificatesData[newIndex]);
      setZoomLevel(1);
      setIsLoading(true);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(3, prev + 0.25));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(0.5, prev - 0.25));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Filter and search documents
  const filteredDocuments = certificatesData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ["all", ...new Set(certificatesData.map(item => item.category).filter(Boolean))];

  // Generate iframe URL with appropriate parameters
  const getIframeUrl = (fileUrl) => {
    if (!fileUrl) return '';
    
    let url = `${fileUrl}#toolbar=0&navpanes=0`;
    
    if (isMobile) {
      url += '&scrollbar=0&view=FitH';
    } else {
      url += '&view=FitW';
    }
    
    return url;
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
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
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-10">
          <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300" />
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
            <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-navy">
              Certificates & Documents
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
            Access and explore all official school certificates, affiliations, and important documents
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
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                {certificatesData.length} Documents
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Official & Verified
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full border border-navy-100">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-navy-600" />
              <span className="text-xs sm:text-sm font-medium text-navy-700">
                Updated Regularly
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= SEARCH & FILTER ================= */}
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
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-800">
                Find Documents
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents by name, category, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gradient-to-br from-white to-gray-50 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400 transition-all text-sm sm:text-base placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="w-full md:w-48">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gradient-to-br from-white to-gray-50 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400 transition-all text-sm sm:text-base appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-navy-700">
                  {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} found
                </span>
                {searchTerm && (
                  <span className="text-xs bg-navy-100 text-navy-700 px-2 py-1 rounded-full">
                    "{searchTerm}"
                  </span>
                )}
              </div>
              {filterCategory !== "all" && (
                <span className="text-xs bg-gradient-to-r from-navy-100 to-blue-100 text-navy-700 px-2 py-1 rounded-full border border-navy-200">
                  {filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* ================= DOCUMENTS GRID ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredDocuments.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-white to-white/90 rounded-xl shadow-lg hover:shadow-2xl border border-navy-100/50 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => handleDocumentClick(item, index)}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg flex items-center justify-center border border-navy-100">
                            <FileText className="w-5 h-5 text-navy-600" />
                          </div>
                          {item.verified && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center border border-white">
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="max-w-[calc(100%-4rem)]">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            {item.category && (
                              <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-navy-50 to-blue-50 text-navy-700 rounded-full border border-navy-100">
                                {item.category}
                              </span>
                            )}
                            {item.date && (
                              <span className="text-xs text-gray-500">
                                {item.date}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-navy-50 to-blue-50 p-2 rounded-lg border border-navy-100 group-hover:bg-gradient-to-br group-hover:from-navy-100 group-hover:to-blue-100 transition-all">
                        <Eye className="w-4 h-4 text-navy-600" />
                      </div>
                    </div>
                    
                    {item.description && (
                      <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3 h-3 text-navy-500" />
                        <span className="text-navy-600">Secure Document</span>
                      </div>
                      <span className="font-medium text-navy-700">ID: {item.id}</span>
                    </div>
                  </div>
                  
                  <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-50/80 to-white/80 border-t border-navy-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-medium">
                        Click to view
                      </span>
                      <div className="flex items-center gap-2">
                        {item.downloadable && (
                          <span className="text-xs bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-2 py-0.5 rounded-full border border-green-200">
                            Downloadable
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-navy-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gradient-to-br from-white to-navy-50/50 rounded-2xl border border-navy-100 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-navy-100">
                <FileText className="w-8 h-8 text-navy-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No documents found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for
              </p>
            </div>
          )}
        </motion.div>

        {/* ================= DOCUMENT VIEWER MODAL ================= */}
        <AnimatePresence>
          {selectedDocument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm pt-70"
              onClick={closeDocumentViewer}
            >
              {/* Top Controls Bar */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-sm border-b border-white/10 z-50 p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={closeDocumentViewer}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>

                    <div className="text-white">
                      <h3 className="font-semibold text-sm sm:text-base truncate max-w-[200px] sm:max-w-md">
                        {selectedDocument.name}
                      </h3>
                      <p className="text-xs text-white/70">
                        Document {currentDocIndex + 1} of {certificatesData.length}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Navigation Controls */}
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-1 border border-white/10">
                      <button
                        onClick={prevDocument}
                        disabled={currentDocIndex === 0}
                        className={`p-2 rounded transition-colors ${
                          currentDocIndex === 0 
                            ? 'opacity-40 cursor-not-allowed' 
                            : 'hover:bg-white/20 active:scale-95'
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                      
                      <div className="px-2 text-xs text-white/80 font-medium">
                        {currentDocIndex + 1}/{certificatesData.length}
                      </div>
                      
                      <button
                        onClick={nextDocument}
                        disabled={currentDocIndex === certificatesData.length - 1}
                        className={`p-2 rounded transition-colors ${
                          currentDocIndex === certificatesData.length - 1
                            ? 'opacity-40 cursor-not-allowed' 
                            : 'hover:bg-white/20 active:scale-95'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href={selectedDocument.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                      <a
                        href={selectedDocument.file}
                        download
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                        title="Download document"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors active:scale-95 disabled:opacity-40"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                
                <button
                  onClick={handleResetZoom}
                  className="px-4 py-2 hover:bg-white/20 transition-colors active:scale-95 min-w-[60px]"
                >
                  <span className="text-white font-medium text-sm">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </button>
                
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors active:scale-95 disabled:opacity-40"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>

              {/* Document Info Panel */}
              <div className="absolute top-16 left-4 z-50 hidden md:block">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 max-w-xs border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-white/80">Verified Document</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {selectedDocument.name}
                  </h4>
                  {selectedDocument.description && (
                    <p className="text-xs text-white/60 mb-2">
                      {selectedDocument.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs">
                    {selectedDocument.category && (
                      <span className="text-white/70">Category: {selectedDocument.category}</span>
                    )}
                    <span className="text-white/70">ID: {selectedDocument.id}</span>
                  </div>
                </div>
              </div>

              {/* PDF Viewer Container */}
              <div className="w-full h-full pt-16 pb-20 flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl overflow-hidden shadow-2xl border border-navy-200">
                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-navy-50/30 flex flex-col items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-600"></div>
                      <p className="mt-4 text-gray-600">Loading document...</p>
                    </div>
                  )}

                  {/* PDF Embed */}
                  <div 
                    className="w-full h-full overflow-auto"
                    style={{ 
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center center'
                    }}
                  >
                    <iframe
                      src={getIframeUrl(selectedDocument.file)}
                      title={selectedDocument.name}
                      className="w-full h-full border-0"
                      style={{ 
                        pointerEvents: zoomLevel === 1 ? 'auto' : 'none',
                        ...(isMobile && {
                          WebkitTouchCallout: 'none',
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        })
                      }}
                      onLoad={handleIframeLoad}
                      onContextMenu={(e) => isMobile && e.preventDefault()}
                      allow="fullscreen"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Mobile Info Message */}
                  {isMobile && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-center text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <Info className="w-4 h-4" />
                        <p>View-only mode on mobile devices</p>
                      </div>
                      <p className="text-xs opacity-80 mt-1">Download disabled for security</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= INFO SECTION ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-br from-navy-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-navy-100 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Info className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-800">
                    About School Documents
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  This section provides access to all official school certificates, affiliations, 
                  and important documents. Each document is verified and regularly updated to ensure 
                  compliance with educational standards and regulations.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-lg border border-navy-100">
                    <Shield className="w-4 h-4 text-navy-600" />
                    <span>Secured & Verified</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-lg border border-navy-100">
                    <Lock className="w-4 h-4 text-navy-600" />
                    <span>Protected Access</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-lg border border-navy-100">
                    <CheckCircle className="w-4 h-4 text-navy-600" />
                    <span>Digital Signatures</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/80 rounded-lg p-3 text-center border border-navy-100">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">
                      {certificatesData.length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Total Documents</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center border border-navy-100">
                    <div className="text-xl sm:text-2xl font-bold text-navy-700 mb-1">
                      {categories.length - 1}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

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
              <span className="text-xs sm:text-sm font-medium">Official School Documents</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-px sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-navy-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Disclosure;