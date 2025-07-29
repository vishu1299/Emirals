"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import testimonialImg04 from "@/../public/assets/img/testimonial/04.png";
import quoteImg01 from "@/../public/assets/img/testimonial/quote-01.png";
import testimonialImg01 from "@/../public/assets/img/testimonial/img-01.jpg";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSectionThree() {
  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-0 relative flex justify-center">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center  w-full">
              <div className="w-full xl:w-[50%] xl:top-10 xl:left-10 mb-6 xs:mb-8 sm:mb-10 xl:mb-0 relative z-20 ">
                <div className="swiper">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    speed={3000}
                    loop={true}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".array-prev",
                      prevEl: ".array-next",
                    }}
                    className="w-full"
                  >
                    <SwiperSlide>
                      <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-gray-100 rounded-2xl xs:rounded-3xl shadow-md">
                        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 xs:mb-3 md:mb-4 lg:mb-5">
                          What Our Clients Say
                        </h2>
                        <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-2 xs:mb-3 md:mb-4 lg:mb-5 leading-relaxed">
                          Information Technology is a rapidly evolving field
                          that is a encompasses the study and application
                          Information Technology is a rapidly evolving the for
                          the best for my choise is a rapidly
                        </p>
                        <div className="flex items-center">
                          <Image
                            src={testimonialImg04}
                            alt="img"
                            width={64}
                            height={64}
                            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mr-2 xs:mr-3 sm:mr-4 object-cover"
                          />
                          <div>
                            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                              Cody Fisher
                            </h3>
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-500">
                              Ceo
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 xs:mt-3 md:mt-4 lg:mt-5">
                          <Image
                            src={quoteImg01}
                            alt="icon"
                            width={32}
                            height={32}
                            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-gray-100 rounded-2xl xs:rounded-3xl shadow-md">
                        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 xs:mb-3 md:mb-4 lg:mb-5">
                          What Our Clients Say
                        </h2>
                        <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-2 xs:mb-3 md:mb-4 lg:mb-5 leading-relaxed">
                          Information Technology is a rapidly evolving field
                          that is a encompasses the study and application
                          Information Technology is a rapidly evolving the for
                          the best for my choise is a rapidly
                        </p>
                        <div className="flex items-center">
                          <Image
                            src={testimonialImg04}
                            alt="img"
                            width={64}
                            height={64}
                            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mr-2 xs:mr-3 sm:mr-4 object-cover"
                          />
                          <div>
                            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                              Cody Fisher
                            </h3>
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-500">
                              Ceo
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 xs:mt-3 md:mt-4 lg:mt-5">
                          <Image
                            src={quoteImg01}
                            alt="icon"
                            width={32}
                            height={32}
                            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex justify-center xl:justify-end mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 w-full xl:w-[70%]">
                  <button className="array-prev mr-1 xs:mr-2 bg-green-500 rounded-full p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-5">
                    <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                  <button className="array-next bg-green-500 rounded-full p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-5">
                    <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5  text-white" />
                  </button>
                </div>
              </div>
              <div className="w-full xl:w-[50%] mt-0 xl:mt-0">
                <div className="animate-slide-right relative xl:absolute xl:right-2 xl:top-0 flex justify-center xl:justify-start">
                  <Image
                    src={testimonialImg01}
                    alt="img"
                    width={800}
                    height={800}
                    className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-none xl:w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[40rem] 2xl:h-[45rem] rounded-2xl xs:rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
