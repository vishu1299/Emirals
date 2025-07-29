import Link from "next/link";
import Image from "next/image";
import leftShape from "@/../public/assets/img/hero/left-shape2.png";
import AboutSection from "../about/AboutSection";
import ShopSection from "../shop/page";
import FAQSection from "../faq/faq";
import TestimonialSlider from "../testimonials/testimonial";
import BlogSection from "../blog/blog";
import Footer from "../footer/footer";

export default function HeroSection() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden pt-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/img/hero/hero-3.jpg')`,
          }}
        ></div>

        {/* Left Shape */}
        <div className="absolute top-0 left-0 z-20">
          <Image
            src={leftShape || "/placeholder.svg"}
            alt="Left shape decoration"
            priority
          />
        </div>

        {/* Main Content Container */}
        <main className="relative z-30 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto" style={{ width: "80%" }}>
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] lg:min-h-[65vh] gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-2/3 xl:w-4/5 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
                <div className="space-y-6 sm:space-y-8">
                  <span className=" text-white text-xs sm:text-sm font-semibold tracking-wide">
                    IT Technology
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[88px] font-extrabold text-white leading-tight">
                    Tech Solutions
                    <br />
                    <span className="text-white font-medium">
                      For Every Need
                    </span>
                    <br />
                    <span className="text-[#25C331]">Potential</span>
                  </h1>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#25C331] hover:border-[#25C331] hover:text-white transition-all duration-300 font-semibold tracking-wide text-center"
                  >
                    Contact US
                  </Link>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25C331] rounded-full flex items-center justify-center hover:bg-[#1ea82a] transition-colors duration-300 cursor-pointer hover:scale-110 transform">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="w-full lg:w-1/3 xl:w-2/5 flex lg:justify-end">
                <div className="flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-6">
                  <a
                    href="#"
                    className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f text-base sm:text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-base sm:text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-base sm:text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-base sm:text-lg group-hover:scale-110 transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <AboutSection />
      <ShopSection />
      <FAQSection />
      <TestimonialSlider />
      <BlogSection />
      <Footer />
    </>
  );
}
