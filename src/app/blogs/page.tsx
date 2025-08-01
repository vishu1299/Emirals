"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Shadcn Pagination Components
interface PaginationRootProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationContentProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationItemProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  size?: "default" | "icon";
  className?: string;
}

interface PaginationNavigationProps {
  onClick: () => void;
  disabled: boolean;
}

const PaginationRoot = ({ children, className = "" }: PaginationRootProps) => (
  <nav
    className={`mx-auto flex w-full justify-center ${className}`}
    aria-label="pagination"
  >
    {children}
  </nav>
);

const PaginationContent = ({
  children,
  className = "",
}: PaginationContentProps) => (
  <ul className={`flex flex-row items-center gap-1 ${className}`}>
    {children}
  </ul>
);

const PaginationItem = ({ children, className = "" }: PaginationItemProps) => (
  <li className={className}>{children}</li>
);

const PaginationLink = ({
  children,
  onClick,
  isActive = false,
  disabled = false,
  size = "default",
  className = "",
}: PaginationLinkProps) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const sizeStyles = size === "icon" ? "h-9 w-9" : "h-9 px-3";
  const variantStyles = isActive
    ? "bg-[#25c331] text-white shadow hover:bg-[#1ea528]"
    : disabled
    ? "text-muted-foreground"
    : "hover:bg-accent hover:text-accent-foreground";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

const PaginationPrevious = ({
  onClick,
  disabled,
}: PaginationNavigationProps) => (
  <PaginationItem>
    <PaginationLink
      onClick={onClick}
      disabled={disabled}
      size="default"
      className="gap-1 pl-2.5"
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="hidden sm:inline">Previous</span>
    </PaginationLink>
  </PaginationItem>
);

const PaginationNext = ({ onClick, disabled }: PaginationNavigationProps) => (
  <PaginationItem>
    <PaginationLink
      onClick={onClick}
      disabled={disabled}
      size="default"
      className="gap-1 pr-2.5"
    >
      <span className="hidden sm:inline">Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  </PaginationItem>
);

const PaginationEllipsis = () => (
  <PaginationItem>
    <span className="flex h-9 w-9 items-center justify-center">
      <span className="sr-only">More pages</span>
      <span>…</span>
    </span>
  </PaginationItem>
);

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title:
        "Driving Success Through The Technological Expertise Tech For Tomorrow",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 30, 2024",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      id: 2,
      title:
        "Pioneering Technology For IT That Transforms Expertise Tech For Tomorrow",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 28, 2024",
      category: "Business",
      readTime: "7 min read",
    },
    {
      id: 3,
      title:
        "Through The Technological Not Just Informs Expertise Tech For Tomorrow",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 25, 2024",
      category: "Innovation",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Empowering Innovation Through Digital Transformation",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 22, 2024",
      category: "Digital",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Building Tomorrow's Tech Solutions Today",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 20, 2024",
      category: "Technology",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Future of Business Intelligence and Analytics",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 18, 2024",
      category: "Analytics",
      readTime: "9 min read",
    },
    {
      id: 7,
      title: "Advanced Machine Learning Applications in Business",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 15, 2024",
      category: "AI",
      readTime: "10 min read",
    },
    {
      id: 8,
      title: "Cloud Computing: The Future of Data Storage",
      excerpt:
        "Global focus on agility of information within the team cultivates. Phasellus leo risus at ultrices tellus pharetra augue. Dapibus leo nec fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      author: "Admin",
      date: "May 12, 2024",
      category: "Cloud",
      readTime: "6 min read",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "How Yoga Tutorial Is Right For You",
      date: "17 May 2024",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop",
    },
    {
      id: 2,
      title: "Keep Your Business Safe Remote-first Exclusively",
      date: "17 May 2024",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=80&fit=crop",
    },
    {
      id: 3,
      title: "Significant Changes Of Retail Industry",
      date: "17 May 2024",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=80&fit=crop",
    },
  ];

  const categories = [
    { name: "Digital Agency", count: 7 },
    { name: "Business", count: 6 },
    { name: "Digital Market", count: 5 },
    { name: "Social Marketing", count: 4 },
    { name: "Branding", count: 8 },
  ];

  const tags = [
    "Security",
    "Business",
    "Digital",
    "Technology",
    "Change",
    "Video",
    "Marketing",
    "Branding",
    "Service",
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mt-8 mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-slide-up">
              <span className="text-white relative">
                Our Blog
                <div className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-[#25c331] to-transparent rounded-full"></div>
              </span>
            </h1>

            {/* Breadcrumb */}
            <div
              className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-slide-down"
              style={{ animationDelay: "200ms" }}
            >
              <Link href="/" className="hover:text-[#25c331] transition-colors">
                Home
              </Link>
              <span className="text-[#25c331]">›</span>
              <span className="text-white">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 ">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-6 sm:space-y-8">
                {currentPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-48 sm:h-56 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#25c331] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3 p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>By {post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{post.date}</span>
                          </div>
                          <span className="hidden sm:inline">
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-[#25c331] transition-colors duration-300">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center bg-[#25c331] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#1ea528] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group/btn"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div
                  className="mt-8 sm:mt-12 animate-fade-in-up"
                  style={{ animationDelay: "800ms" }}
                >
                  <PaginationRoot>
                    <PaginationContent>
                      <PaginationPrevious
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                      />

                      {getPageNumbers().map((pageNum, index) =>
                        pageNum === "ellipsis" ? (
                          <PaginationEllipsis key={`ellipsis-${index}`} />
                        ) : (
                          <PaginationItem key={pageNum}>
                            <PaginationLink
                              onClick={() =>
                                handlePageChange(pageNum as number)
                              }
                              isActive={currentPage === pageNum}
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}

                      <PaginationNext
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                      />
                    </PaginationContent>
                  </PaginationRoot>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="space-y-6 sm:space-y-8 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                {/* Search */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 animate-slide-down">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Search
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25c331] focus:border-transparent"
                    />
                    <button className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-[#25c331] text-white p-1.5 sm:p-2 rounded-lg hover:bg-[#1ea528] transition-colors">
                      <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 animate-slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    All Services
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-sm sm:text-base text-gray-700 hover:text-[#25c331] cursor-pointer transition-colors">
                          {category.name}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          ({category.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Recent Post
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {recentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex gap-2 sm:gap-3 group cursor-pointer"
                      >
                        <div className="w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={64}
                            height={48}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#25c331] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 animate-slide-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full hover:bg-[#25c331] hover:text-white cursor-pointer transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
