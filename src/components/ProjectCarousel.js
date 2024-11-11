// src/components/ProjectCarousel.js
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProjectCarousel.css';
import ProjectPreview from './ProjectPreview';

function ProjectCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!swiperInstance) return;

      if (e.key === 'ArrowRight') {
        swiperInstance.slideNext();
      } else if (e.key === 'ArrowLeft') {
        swiperInstance.slidePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [swiperInstance]);

  return (
    <div className="project-carousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5} // Show 1.5 slides to focus on size
        centeredSlides={true}
        loop={true}
        onSwiper={setSwiperInstance}
      >
        <SwiperSlide>
          <ProjectPreview
            projectName="Sample Project A"
            previewImages={[
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40"
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPreview
            projectName="Sample Project B"
            previewImages={[
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40"
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPreview
            projectName="Sample Project C"
            previewImages={[
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40"
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPreview
            projectName="Sample Project D"
            previewImages={[
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40"
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPreview
            projectName="Sample Project E"
            previewImages={[
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40",
              "https://via.placeholder.com/60x40"
            ]}
          />
        </SwiperSlide>
      </Swiper>
      
      <div className="navigation-hint">
        // navigate with <span className="arrow-key">[left arrow]</span> <span className="arrow-key">[right arrow]</span>
      </div>
    </div>
  );
}

export default ProjectCarousel;
