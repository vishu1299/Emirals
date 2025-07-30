"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
  Heart,
  ShoppingCart,
  ArrowUpDown,
  Plus,
  Zap,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import product images
import calendarImg from "@/../public/assets/img/product/01.jpg";
import notebookImg from "@/../public/assets/img/product/02.jpg";
import stickerImg from "@/../public/assets/img/product/03.jpg";
import businessCardImg from "@/../public/assets/img/product/04.jpg";
import brochureImg from "@/../public/assets/img/product/05.jpg";
import logoImg from "@/../public/assets/img/product/06.jpg";
import posterImg from "@/../public/assets/img/product/07.jpg";
import packagingImg from "@/../public/assets/img/product/08.jpg";

export default function ShopSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      id: 1,
      name: "Professional Calendar Design",
      price: 112.0,
      originalPrice: 150.0,
      rating: 4,
      image: calendarImg,
      category: "Print Design",
      discount: "25%",
      featured: true,
    },
    {
      id: 2,
      name: "Premium Notebook Design",
      price: 89.0,
      originalPrice: 120.0,
      rating: 4,
      image: notebookImg,
      category: "Stationery",
      discount: "26%",
      featured: false,
    },
    {
      id: 3,
      name: "Custom Sticker Printing",
      price: 45.0,
      originalPrice: 65.0,
      rating: 4,
      image: stickerImg,
      category: "Print Design",
      discount: "31%",
      featured: false,
    },
    {
      id: 4,
      name: "Professional Business Card",
      price: 75.0,
      originalPrice: 100.0,
      rating: 5,
      image: businessCardImg,
      category: "Business",
      discount: "25%",
      featured: true,
    },
    {
      id: 5,
      name: "Marketing Brochure Design",
      price: 95.0,
      originalPrice: 130.0,
      rating: 4,
      image: brochureImg,
      category: "Marketing",
      discount: "27%",
      featured: false,
    },
    {
      id: 6,
      name: "Complete Logo Design Package",
      price: 150.0,
      originalPrice: 200.0,
      rating: 5,
      image: logoImg,
      category: "Branding",
      discount: "25%",
      featured: true,
    },
    {
      id: 7,
      name: "Creative Poster Design",
      price: 65.0,
      originalPrice: 90.0,
      rating: 4,
      image: posterImg,
      category: "Print Design",
      discount: "28%",
      featured: false,
    },
    {
      id: 8,
      name: "Product Packaging Design",
      price: 120.0,
      originalPrice: 160.0,
      rating: 5,
      image: packagingImg,
      category: "Packaging",
      discount: "25%",
      featured: false,
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = Math.max(0, products.length - cardsPerView);
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, cardsPerView, products.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle responsive cards per view with better breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#25C331]/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        {/* Enhanced Section Header with Animations */}
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Animated Badge - Made Bigger */}
          <div className="relative inline-block mb-6 sm:mb-8">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[#25C331]/10 to-[#25C331]/5 text-[#25C331] hover:from-[#25C331]/20 hover:to-[#25C331]/10 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold border border-[#25C331]/20 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-12 h-12 mr-2 sm:mr-3 " />
              Our Shop
            </Badge>
            {/* Floating decoration */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#25C331] rounded-full animate-ping"></div>
          </div>

          {/* Enhanced Heading with Gradient Text */}
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Premium Emiral
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#25C331] via-[#1ea82a] to-[#25C331] bg-clip-text text-transparent relative">
                Products
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-[#25C331] to-[#1ea82a] rounded-full "></div>
              </span>
            </h2>

            {/* Floating icons */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-[#25C331]/20 animate-bounce">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-blue-500/20 animate-bounce delay-300">
              <Star className="w-3 h-3 sm:w-5 sm:h-5" />
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
            Discover our carefully curated collection of professional design
            services and products, crafted to elevate your brand and business
            presence.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Navigation Buttons */}
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-[#25C331] hover:text-white hover:border-[#25C331] disabled:opacity-30 disabled:cursor-not-allowed bg-white/95 backdrop-blur-sm border-2 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </Button>

          <Button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            variant="outline"
            size="icon"
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-[#25C331] hover:text-white hover:border-[#25C331] disabled:opacity-30 disabled:cursor-not-allowed bg-white/95 backdrop-blur-sm border-2 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl p-5">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-none px-2 sm:px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Enhanced Card Design */}
                  <Card
                    className={`bg-white rounded-xl py-0 sm:rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 relative group border-0 shadow-lg hover:shadow-2xl
                    ${isVisible ? `animate-fade-in-up` : "opacity-0"}
                    bg-gradient-to-br from-white via-white to-gray-50/30
                  `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Enhanced Card Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#25C331]/10 via-transparent to-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                        <Badge className="bg-gradient-to-r from-[#25C331] to-[#1ea82a] text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded-full shadow-lg border-0 animate-pulse">
                          <Zap className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {product.discount && !product.featured && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                        <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
                          New
                        </Badge>
                      </div>
                    )}

                    {/* Modern Hover Actions - Keep as is */}
                    <div
                      className={`absolute top-3 sm:top-4 right-3 sm:right-4 z-10 transition-all duration-700 ease-out ${
                        hoveredCard === product.id
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-8 scale-75"
                      }`}
                    >
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md border-gray-200/50 hover:bg-[#25C331] hover:text-white hover:border-[#25C331] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => toggleFavorite(product.id)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full backdrop-blur-md border-gray-200/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
                            favorites.has(product.id)
                              ? "bg-red-500 text-white border-red-500"
                              : "bg-white/95 hover:bg-red-500 hover:text-white hover:border-red-500"
                          }`}
                        >
                          <Heart
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              favorites.has(product.id) ? "fill-current" : ""
                            }`}
                          />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md border-gray-200/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        >
                          <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Product Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100/50 to-gray-200/30">
                      <Image
                        src={product.image}
                        width={500}
                        height={500}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        priority={index < 3}
                      />
                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>

                      {/* Keep hover cart section as is */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 transition-all duration-500 ${
                          hoveredCard === product.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <div className="space-y-2 sm:space-y-3">
                          <Button className="w-full bg-gradient-to-r from-[#25C331] to-[#1ea82a] hover:from-[#1ea82a] hover:to-[#25C331] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-0 text-sm sm:text-base">
                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                            Add To Cart
                          </Button>
                          <div className="flex gap-1 sm:gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 bg-white/95 backdrop-blur-md border-gray-200/50 hover:bg-white hover:border-[#25C331]/50 text-gray-700 text-xs sm:text-sm py-1 sm:py-2"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Quick Buy
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 bg-white/95 backdrop-blur-md border-gray-200/50 hover:bg-white hover:border-[#25C331]/50 text-gray-700 text-xs sm:text-sm py-1 sm:py-2"
                            >
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Product Info */}
                    <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-white to-gray-50/50">
                      {/* Category Badge */}
                      <Badge
                        variant="outline"
                        className="text-[#25C331] border-[#25C331]/30 hover:bg-[#25C331]/10 text-xs font-medium bg-[#25C331]/5"
                      >
                        {product.category}
                      </Badge>

                      {/* Rating Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating)}
                          <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2 font-medium">
                            ({product.rating}.0)
                          </span>
                        </div>
                        {product.featured && (
                          <Badge
                            variant="outline"
                            className="text-xs text-[#25C331] border-[#25C331]/30 bg-[#25C331]/5"
                          >
                            Bestseller
                          </Badge>
                        )}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#25C331] transition-colors leading-tight line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Enhanced Price Section */}
                      <div className="flex items-center justify-between pt-1 sm:pt-2">
                        <div className="flex items-baseline gap-2 sm:gap-3">
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#25C331] to-[#1ea82a] bg-clip-text text-transparent">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through font-medium">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {product.discount && (
                          <Badge
                            variant="outline"
                            className="text-xs text-red-500 border-red-500/30 bg-red-50"
                          >
                            Save {product.discount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Carousel Indicators */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-[#25C331] to-[#1ea82a] w-6 sm:w-8 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced View All Products Button */}
        <div
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button className="bg-gradient-to-r from-[#25C331] to-[#1ea82a] hover:from-[#1ea82a] hover:to-[#25C331] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden group">
            <span className="relative z-10">View All Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
