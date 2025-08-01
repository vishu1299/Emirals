"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Star, Heart, Eye, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

// Import product images
import calendarImg from "@/../public/assets/img/product/envato-labs-image-edit.png";
import notebookImg from "@/../public/assets/img/product/e1.png";
import stickerImg from "@/../public/assets/img/product/e2.png";
import businessCardImg from "@/../public/assets/img/product/envato-labs-image-edit (1).png";
import brochureImg from "@/../public/assets/img/product/envato-labs-image-edit.png";
import logoImg from "@/../public/assets/img/product/e2.png";
import posterImg from "@/../public/assets/img/product/envato-labs-image-edit (1).png";
import packagingImg from "@/../public/assets/img/product/e1.png";

export default function ShopPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Calendar Printing Design",
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
      name: "Notebook Design",
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
      name: "Sticker Printing",
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
      name: "Business Card Design",
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
      name: "Flyers Printing",
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
      name: "Custom Logo Design",
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
      name: "Brochure Design",
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
      name: "Custom T-shirt Design",
      price: 120.0,
      originalPrice: 160.0,
      rating: 5,
      image: packagingImg,
      category: "Apparel",
      discount: "25%",
      featured: false,
    },
    {
      id: 9,
      name: "Custom Tote Design",
      price: 85.0,
      originalPrice: 110.0,
      rating: 4,
      image: calendarImg,
      category: "Accessories",
      discount: "23%",
      featured: false,
    },
    {
      id: 10,
      name: "Wall Art Printing",
      price: 95.0,
      originalPrice: 125.0,
      rating: 5,
      image: notebookImg,
      category: "Art",
      discount: "24%",
      featured: false,
    },
    {
      id: 11,
      name: "Business Tote Bag",
      price: 55.0,
      originalPrice: 75.0,
      rating: 4,
      image: stickerImg,
      category: "Business",
      discount: "27%",
      featured: false,
    },
    {
      id: 12,
      name: "Custom Hoodie Design",
      price: 180.0,
      originalPrice: 240.0,
      rating: 5,
      image: businessCardImg,
      category: "Apparel",
      discount: "25%",
      featured: true,
    },
    {
      id: 13,
      name: "Custom Cup Design",
      price: 35.0,
      originalPrice: 50.0,
      rating: 4,
      image: brochureImg,
      category: "Accessories",
      discount: "30%",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Print Design",
    "Stationery",
    "Business",
    "Marketing",
    "Branding",
    "Apparel",
    "Accessories",
    "Art",
  ];
  const ratings = [5, 4, 3, 2, 1];

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRating = !selectedRating || product.rating >= selectedRating;
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      product.category === selectedCategory;
    return matchesSearch && matchesRating && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRating, selectedCategory]);

  const handleProductClick = (productId: number) => {
    router.push(`/shop/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mt-8 flex justify-center items-center h-full md:h-[60vh] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 sm:mb-8 lg:mb-10">
              <div className="bg-[#25c331]/20 backdrop-blur-sm border border-[#25c331]/30 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-[#25c331] font-semibold text-xs sm:text-sm tracking-wider">
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25c331] rounded-full mr-2 animate-pulse"></span>
                PREMIUM PRODUCTS
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Our{" "}
              <span className="text-[#25c331] relative">
                Shop
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#25c331] to-transparent rounded-full"></div>
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-xl  text-gray-300 max-w-4xl mx-auto px-4 mb-8 sm:mb-12 lg:mb-16">
              Discover our premium collection of design services and products
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
        <div className="w-[95%] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4 space-y-6">
              {/* Search */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Search Here</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-[#25c331] focus:ring-[#25c331]"
                  />
                </div>
              </div>

              {/* Filter by Rating */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">
                  Filter By Rating
                </h3>
                <div className="space-y-3">
                  {ratings.map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() =>
                          setSelectedRating(
                            selectedRating === rating ? null : rating
                          )
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 transition-all ${
                          selectedRating === rating
                            ? "border-[#25c331] bg-[#25c331]"
                            : "border-gray-300 group-hover:border-[#25c331]"
                        }`}
                      >
                        {selectedRating === rating && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        {renderStars(rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          ({rating} Star)
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter by Category */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Filter By Tag</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(
                          category === "All" ? null : category
                        )
                      }
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedCategory === category ||
                        (!selectedCategory && category === "All")
                          ? "bg-[#25c331] text-white border-[#25c331] shadow-md"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-[#25c331]/10 hover:border-[#25c331]/30 hover:text-[#25c331]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* View Controls */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} results
                </p>
              </div>

              {/* Products */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6`}
              >
                {currentProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <Card className="bg-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 relative group border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white via-white to-gray-50/30 py-0">
                      {/* Card Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#25C331]/10 via-transparent to-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold shadow-lg border-0">
                            -{product.discount}
                          </Badge>
                        </div>
                      )}

                      {/* Featured Badge */}
                      {product.featured && (
                        <div className="absolute top-3 sm:top-4 left-16 sm:left-20 z-10">
                          <Badge className="bg-gradient-to-r from-[#25C331] to-[#1ea82a] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold shadow-lg border-0">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover Actions */}
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
                        </div>
                      </div>

                      {/* Product Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100/50 to-gray-200/30">
                        <Image
                          src={product.image}
                          width={500}
                          height={500}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          priority={index < 6}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>

                        {/* Hover Cart */}
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
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 sm:p-6 relative z-10">
                        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                          {renderStars(product.rating)}
                          <span className="text-xs sm:text-sm text-gray-500 ml-1">
                            ({product.rating})
                          </span>
                        </div>

                        <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#25C331] transition-colors duration-300">
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#25C331]">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm sm:text-base text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-gray-100 text-gray-600"
                          >
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1)
                              setCurrentPage(currentPage - 1);
                          }}
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>

                      {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(page);
                                }}
                                isActive={currentPage === page}
                                className={
                                  currentPage === page
                                    ? "bg-[#25c331] text-white border-[#25c331]"
                                    : ""
                                }
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages)
                              setCurrentPage(currentPage + 1);
                          }}
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
