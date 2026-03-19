import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ActiveSlider = ({ products, category }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideClick = (slideIndex) => {
    if (!swiperRef.current) return;

    const total = products.length;
    const diff = (slideIndex - activeIndex + total) % total;
    const normalizedIndex = activeIndex % total;

    if (diff > 0 && diff <= total / 2) {
      swiperRef.current.slideToLoop(activeIndex + diff);
    } else {
      swiperRef.current.slideToLoop(activeIndex - (total - diff));
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [products]);

  return (
    <>
      <Swiper
        key={products.length}
        centeredSlides={true}
        // loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        initialSlide={5}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        // onSwiper={(swiper) => setActiveIndex(swiper.realIndex)} // initial value
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {products.map((product, index) => {
          const total = products.length;
          const diff = (index - activeIndex + total) % total;
          const afterActive = diff > 0 && diff <= total / 2;
          const beforeActive = diff > total / 2;

          return (
            <SwiperSlide
              className="rounded-lg overflow-hidden"
              key={index}
              onClick={() => handleSlideClick(index)}
              style={{
                cursor: afterActive
                  ? 'url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEwIDZsNiA2LTYgNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=), auto'
                  : beforeActive
                    ? 'url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTAgMTJsNi02IDYgNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=), auto'
                    : 'auto',
              }}
            >
              <div
                className={`transition-all duration-300 ease-out ${
                  activeIndex === index ? 'scale-105' : 'opacity-50 scale-95'
                }`}
              >
                <div key={product.id} className="rounded-lg overflow-hidden">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-96 w-full rounded-lg object-cover sm:aspect-2/3 sm:h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full flex-col flex items-center justify-center text-center gap-4">
        <h3 className="mt-4 text-4xl font-medium text-gray-900">
          <span className="absolute inset-0" />
          {products[activeIndex].name}
        </h3>
        <a
          href={products[activeIndex].href}
          className="mt-3 inline-block rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white"
        >
          Shop Now
        </a>
        <a href={category ? category.href : '#'}>
          <span className="mt-4 text-4xl text-base text-black uppercase ">
            {`View ${category ? `All ${category.name}` : 'All'}`}
          </span>
        </a>
      </div>
    </>
  );
};

export default ActiveSlider;
