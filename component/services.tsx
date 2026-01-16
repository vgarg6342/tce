"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";

// --- 1. Define Interfaces ---

// The structure of your data object
export interface ServiceItem {
  title: string;
  content: string;
  images: string[];
}

// Props for the Carousel sub-component
interface ServiceCarouselProps {
  images: string[];
  title: string;
}

// Props for the Main component
interface ServiceSectionProps {
  service: ServiceItem;
  isReversed?: boolean; // Optional prop
}

// --- 2. The Carousel Sub-Component ---

const ServiceCarousel = ({ images, title }: ServiceCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative container">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((slide, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative h-[500px] w-[600px] sm:h-[300px]">
                <Image
                  src={slide}
                  alt={`${title} image ${index + 1}`}
                  fill
                  className="object-cover"  
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// --- 3. Main Component ---

const ServiceSection = ({ service, isReversed = false }: ServiceSectionProps) => {
  // Guard clause: Return null if service data is missing to prevent crashes
  if (!service) return null;

  return (
    <section className="section ">
      <div className="container mx-10">
        <div className="grid items-center gap-8 md:grid-cols-2 ">
          
          {/* Column A: Carousel */}
          <div className={`service-carousel ${isReversed ? "md:order-2" : ""} justify-right md:text-right`}>
            <ServiceCarousel 
              images={service.images} 
              title={service.title} 
            />
          </div>

          {/* Column B: Content */}
          <div className={`service-content ${isReversed ? "md:order-1" : ""} text-align-center md:text-left`}>
            <h2 className="font-bold leading-tight text-3xl md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {service.content}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;