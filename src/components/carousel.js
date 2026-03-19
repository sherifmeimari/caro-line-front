import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, autoSlide = true, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const isVideo = currentSlide?.type === 'video';
  const duration = isVideo ? 10000 : autoSlideInterval;

  // useEffect(() => {
  //   if (autoSlide) {
  //     const slideInterval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //     }, autoSlideInterval);
  //     return () => clearInterval(slideInterval);
  //   }
  // }, [autoSlide, autoSlideInterval, slides.length]);

  useEffect(() => {
    if (!autoSlide) return;

    // duration per slide: video = 10s, image = autoSlideInterval
    const currentDuration =
      currentSlide?.type === 'video' ? 10000 : autoSlideInterval;

    const slideInterval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, currentDuration);

    return () => clearTimeout(slideInterval);
  }, [autoSlide, autoSlideInterval, currentIndex, currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  return (
    // <div className="relative w-full max-w-3xl mx-auto">
    <div className="relative w-full h-full">
      <div className="overflow-hidden relative h-full">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide.type === 'video' ? (
                index === currentIndex && (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onEnded={nextSlide}
                    preload="none"
                  />
                )
              ) : (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-1">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative w-5 h-5 cursor-pointer"
          >
            {/* Center Dot */}
            <div
              className={`absolute inset-0 m-auto w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />

            {/* Animated Ring */}
            {index === currentIndex && (
              <svg
                className="absolute inset-0 w-full h-full rotate-[-90deg]"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 11}
                  strokeDashoffset={2 * Math.PI * 11}
                  className="animate-ring"
                  style={{ animationDuration: `${duration}ms` }}
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
