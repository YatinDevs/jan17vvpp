import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Images as ImagesIcon, X, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import kgGalleryData from "../../constant/GalleryData/kgGalleryData";
import primarySecondaryGalleryData from "../../constant/GalleryData/primarySecondaryGalleryData";

const Images = () => {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState({ categories: [] });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Show More/Less state
  const [visibleImagesCount, setVisibleImagesCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Lazy loading state
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [visibleImages, setVisibleImages] = useState(new Set());
  const observerRef = useRef(null);

  // Responsive initial count
  const getInitialCount = () => {
    if (window.innerWidth < 640) return 6;   // Mobile
    if (window.innerWidth < 768) return 9;   // Small tablet
    if (window.innerWidth < 1024) return 12; // Tablet
    return 15; // Desktop
  };

  // Memoized calculations
  const visibleItems = useMemo(() => {
    if (!selectedSubCategory || !selectedSubCategory.items) return [];
    return selectedSubCategory.items.slice(0, visibleImagesCount);
  }, [selectedSubCategory, visibleImagesCount]);

  const hasMoreItems = useMemo(() => {
    return selectedSubCategory && selectedSubCategory.items &&
      visibleImagesCount < selectedSubCategory.items.length;
  }, [selectedSubCategory, visibleImagesCount]);

  const isViewAllActive = useMemo(() => {
    return selectedSubCategory && selectedSubCategory.items &&
      visibleImagesCount >= (selectedSubCategory.items.length || 0);
  }, [selectedSubCategory, visibleImagesCount]);

  // Load gallery data
  useEffect(() => {
    const loadGalleryData = () => {
      try {
        const combinedData = {
          categories: []
        };

        if (kgGalleryData?.subcategories?.length > 0) {
          combinedData.categories.push(kgGalleryData);
        }

        if (primarySecondaryGalleryData?.subcategories?.length > 0) {
          combinedData.categories.push(primarySecondaryGalleryData);
        }

        setGalleryData(combinedData);

        if (combinedData.categories.length > 0) {
          const firstCategory = combinedData.categories[0];
          setSelectedCategory(firstCategory);

          if (firstCategory.subcategories?.length > 0) {
            const firstSubCategory = firstCategory.subcategories[0];
            setSelectedSubCategory(firstSubCategory);
          }
        }

        setVisibleImagesCount(getInitialCount());

      } catch (error) {
        console.error("Error loading gallery data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryData();
  }, []);

  // Handle resize for responsive initial count
  useEffect(() => {
    const handleResize = () => {
      if (!selectedSubCategory) return;
      const newInitialCount = getInitialCount();
      if (visibleImagesCount === newInitialCount ||
        visibleImagesCount < newInitialCount && !isViewAllActive) {
        setVisibleImagesCount(newInitialCount);
      }
    };

    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [visibleImagesCount, isViewAllActive, selectedSubCategory]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!selectedSubCategory || visibleItems.length === 0) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const imageId = entry.target.dataset.imageId;
            if (imageId) {
              setVisibleImages(prev => new Set(prev).add(imageId));

              setTimeout(() => {
                setLoadedImages(prev => {
                  const newSet = new Set(prev);
                  newSet.add(imageId);
                  return newSet;
                });
              }, Math.random() * 200);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.01
      }
    );

    const imageElements = document.querySelectorAll('[data-image-id]');
    imageElements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selectedSubCategory, visibleImagesCount]);

  // Auto-load more when scrolling near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (!hasMoreItems || isLoadingMore) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = 800; // Start loading 800px before bottom

      if (scrollPosition >= pageHeight - threshold) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMoreItems, isLoadingMore, selectedSubCategory]);

  // Load more images function
  const loadMoreImages = useCallback(() => {
    if (!selectedSubCategory || !hasMoreItems || isLoadingMore) return;

    setIsLoadingMore(true);

    const totalImages = selectedSubCategory.items.length;
    const increment = getInitialCount();
    const newCount = Math.min(visibleImagesCount + increment, totalImages);

    // Simulate network delay
    setTimeout(() => {
      setVisibleImagesCount(newCount);
      setIsLoadingMore(false);
    }, 300);
  }, [selectedSubCategory, hasMoreItems, visibleImagesCount, isLoadingMore]);

  // Show all images
  const showAllImages = useCallback(() => {
    if (!selectedSubCategory) return;

    setIsLoadingMore(true);
    const totalImages = selectedSubCategory.items.length;

    setTimeout(() => {
      setVisibleImagesCount(totalImages);
      setIsLoadingMore(false);
    }, 300);
  }, [selectedSubCategory]);

  // Show less images
  const showLessImages = useCallback(() => {
    setIsLoadingMore(true);

    setTimeout(() => {
      setVisibleImagesCount(getInitialCount());
      setIsLoadingMore(false);

      // Scroll to top when showing less
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, []);

  // Image loading handlers
  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  }, []);

  const handleImageError = useCallback((e, imageId) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' text-anchor='middle' fill='%23999'%3EImage%3C/text%3E%3C/svg%3E";
    handleImageLoad(imageId);
  }, [handleImageLoad]);

  // Category handlers
  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
    if (category.subcategories?.length > 0) {
      setSelectedSubCategory(category.subcategories[0]);
    }
    setVisibleImagesCount(getInitialCount());
    setLoadedImages(new Set());
    setVisibleImages(new Set());
  }, []);

  const handleSubCategoryClick = useCallback((subcategory) => {
    setSelectedSubCategory(subcategory);
    setVisibleImagesCount(getInitialCount());
    setLoadedImages(new Set());
    setVisibleImages(new Set());
  }, []);

  // Debounce utility
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Loading skeleton
  const ImageSkeleton = ({ count = 1 }) => (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative aspect-square bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      ))}
    </>
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-3 border-[#194369] border-t-transparent"></div>
          <p className="font-primary text-gray-600 mt-4">Loading gallery...</p>
        </div>
      </div>
    );
  }

  // No data state
  if (!galleryData.categories || galleryData.categories.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center py-12">
          <ImagesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="font-primary text-xl font-semibold text-gray-600 mb-2">
            No Gallery Data Available
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <div className="font-primary flex items-center gap-2 mb-6 text-sm text-gray-600">
        <button
          onClick={() => navigate("/")}
          className="text-gray-600 hover:text-[#800000] transition-colors font-medium"
        >
          ← Home
        </button>
        <span>/</span>
        <span className="font-medium text-[#800000]">Gallery</span>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-title text-3xl sm:text-4xl font-bold text-[#800000] mb-3">
          Gallery
        </h1>
        <div className="w-20 h-1 bg-[#800000] mb-4"></div>
        <p className="font-primary text-gray-600 max-w-2xl">
          Explore photos from our school events, activities, and celebrations.
        </p>
      </div>

      {/* Category Selection */}
      <div className="mb-8">
        <h2 className="font-primary text-lg font-semibold text-gray-700 mb-4">
          Select Category
        </h2>
        <div className="flex flex-wrap gap-2">
          {galleryData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`font-primary px-4 py-2 rounded-full font-medium transition-all ${selectedCategory?.id === category.id
                  ? "bg-gradient-to-r from-[#194369] to-[#194369] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Category Selection */}
      {selectedCategory?.subcategories?.length > 0 && (
        <div className="mb-8">
          <h2 className="font-primary text-lg font-semibold text-gray-700 mb-4">
            Select Sub Category
          </h2>
          <div className="flex flex-wrap gap-2">
            {selectedCategory.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => handleSubCategoryClick(subcategory)}
                className={`font-primary px-3 py-1.5 rounded-md text-sm font-medium transition-all ${selectedSubCategory?.id === subcategory.id
                    ? "bg-gradient-to-r from-[#194369] to-[#194369] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {subcategory.icon} {subcategory.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Content */}
      {selectedSubCategory ? (
        <>
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {selectedSubCategory.title}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="font-primary text-gray-600">
                Showing {Math.min(visibleImagesCount, visibleItems.length)} of {selectedSubCategory.items?.length || 0} photos
              </p>

              {/* Quick View Toggle (Mobile) */}
              <div className="sm:hidden">
                <button
                  onClick={isViewAllActive ? showLessImages : showAllImages}
                  className="font-primary inline-flex items-center gap-1 text-sm text-[#194369] font-medium hover:underline"
                >
                  {isViewAllActive ? "Show Less" : "View All"}
                  {isViewAllActive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {visibleItems.length === 0 ? (
              <ImageSkeleton count={getInitialCount()} />
            ) : (
              visibleItems.map((item, index) => {
                const imageId = `${selectedSubCategory.id}-${item.id}`;
                const isLoaded = loadedImages.has(imageId);
                const shouldLoad = isLoaded || index < 4;

                return (
                  <div
                    key={imageId}
                    data-image-id={imageId}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                        </div>
                      )}

                      <img
                        src={shouldLoad ? item.image : ""}
                        alt={item.alt || item.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isLoaded ? 'group-hover:scale-110 opacity-100' : 'opacity-0'
                          }`}
                        loading={index < 4 ? "eager" : "lazy"}
                        onLoad={() => handleImageLoad(imageId)}
                        onError={(e) => handleImageError(e, imageId)}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    <div className="p-4">
                      <h3 className="font-primary font-semibold text-gray-800 line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      {item.date && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Load More / Show Less Controls */}
          {selectedSubCategory.items && selectedSubCategory.items.length > getInitialCount() && (
            <div className="flex flex-col items-center gap-4">
              {/* Auto-load indicator */}
              {hasMoreItems && !isViewAllActive && (
                <div className="text-center">
                  <p className="font-primary text-gray-500 text-sm mb-2">
                    Scroll down to load more photos automatically
                  </p>
                  <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#194369] to-[#194369] transition-all duration-300"
                      style={{
                        width: `${(visibleImagesCount / selectedSubCategory.items.length) * 100}%`
                      }}
                    />
                  </div>
                  <p className="font-primary text-gray-600 text-sm mt-2">
                    {visibleImagesCount} of {selectedSubCategory.items.length} loaded
                  </p>
                </div>
              )}

              {/* Show More/Less Button */}
              <button
                onClick={isViewAllActive ? showLessImages : showAllImages}
                disabled={isLoadingMore}
                className={`font-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${isViewAllActive
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-gradient-to-r from-[#194369] to-[#194369] text-white"
                  }`}
              >
                {isLoadingMore ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                    Loading...
                  </>
                ) : (
                  <>
                    {isViewAllActive ? "Show Less Images" : `View All ${selectedSubCategory.items.length} Images`}
                    {isViewAllActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </>
                )}
              </button>

              {/* Incremental Load More Button (Alternative) */}
              {hasMoreItems && !isViewAllActive && (
                <button
                  onClick={loadMoreImages}
                  disabled={isLoadingMore}
                  className="font-primary text-sm text-[#194369] font-medium hover:underline flex items-center gap-1"
                >
                  Load {Math.min(getInitialCount(), selectedSubCategory.items.length - visibleImagesCount)} more
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {/* Loading More Indicator */}
          {isLoadingMore && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#194369] border-t-transparent"></div>
              <p className="font-primary text-gray-600 ml-3">Loading more photos...</p>
            </div>
          )}

          {/* Image Count Summary */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="font-primary text-gray-600 text-sm text-center">
              {isViewAllActive ? (
                <>
                  Showing all{" "}
                  <span className="font-semibold text-[#194369]">
                    {selectedSubCategory.items.length}
                  </span>{" "}
                  photos from {selectedSubCategory.title}
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-[#194369]">
                    {visibleImagesCount}
                  </span>{" "}
                  of {selectedSubCategory.items.length} photos
                  {" • "}
                  <button
                    onClick={showAllImages}
                    className="text-[#194369] hover:underline font-medium"
                  >
                    View all
                  </button>
                </>
              )}
            </p>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <ImagesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="font-primary text-xl font-semibold text-gray-600 mb-2">
            Select a category to view photos
          </h3>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt || selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="font-title text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="font-primary text-gray-600 mb-4">
                  {selectedImage.description}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
                {selectedImage.date && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-primary">
                      {new Date(selectedImage.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </div>
                )}

                <span className="font-primary px-3 py-1 bg-[#194369] text-white rounded-full text-sm">
                  {selectedSubCategory?.title || "Gallery"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Categories Overview */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="font-title text-2xl font-bold text-gray-800 mb-6 text-center">
          All Gallery Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
              onClick={() => {
                handleCategoryClick(category);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#194369]/10 to-[#194369]/5 flex items-center justify-center">
                  <span className="text-2xl text-[#194369]">{category.icon}</span>
                </div>
                <div>
                  <h3 className="font-title font-bold text-gray-800 text-lg">
                    {category.title}
                  </h3>
                  <p className="font-primary text-gray-600 text-sm">
                    {category.subcategories?.length || 0} albums
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-primary text-sm text-gray-500">
                  {(category.subcategories || []).reduce(
                    (total, sub) => total + (sub.items?.length || 0),
                    0
                  )} photos
                </span>
                <span className="text-[#194369] font-medium text-sm">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;