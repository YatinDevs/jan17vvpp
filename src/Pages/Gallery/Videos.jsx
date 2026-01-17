import React, { useState } from "react";
import videoData from "../../constant/GalleryData/videoData";
import { PlayCircle, X } from "lucide-react";

// Swiper (MOBILE ONLY)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const getThumbnail = (video) =>
    video.type === "youtube"
      ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
      : video.thumbnail;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-10">
        <h1 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#800000] mb-4">
          {videoData.title}
        </h1>
        <div className="w-24 h-1 bg-[#800000] mx-auto mb-6"></div>
        <p className="font-primary max-w-2xl mx-auto mt-4 text-gray-600 text-sm sm:text-base">
          {videoData.description}
        </p>
      </div>

      {/* ================= MOBILE: SWIPER ================= */}
      <div className="block md:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.1}>
          {videoData.videos.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoCard
                video={video}
                thumbnail={getThumbnail(video)}
                onClick={() => setActiveVideo(video)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP: GRID ================= */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
        {videoData.videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            thumbnail={getThumbnail(video)}
            onClick={() => setActiveVideo(video)}
          />
        ))}
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X size={26} />
          </button>

          <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-lg overflow-hidden">
            {activeVideo.type === "youtube" ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;

/* ================= VIDEO CARD ================= */
const VideoCard = ({ video, thumbnail, onClick }) => (
  <div
    onClick={onClick}
    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl transition-shadow duration-300"
  >
    <img
      src={thumbnail}
      alt={video.title}
      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
      <PlayCircle className="w-14 h-14 text-white mb-2" />
      <p className="font-primary text-white font-medium text-center px-3">{video.title}</p>
    </div>
  </div>
);