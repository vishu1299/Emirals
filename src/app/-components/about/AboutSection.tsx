import Image from "next/image";
import { Check, Award, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import about from "@/../public/assets/img/Abstractnetworking.jpg";

export default function AboutSection() {
  const features = [
    "Continually engineer ethical partnership",
    "Seamlessly pursue orthogonal customer service",
    "Dynamically reconceptualize value",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* About Us Badge */}
            <Badge
              variant="secondary"
              className="bg-[#25C331]/10 text-[#25C331] hover:bg-[#25C331]/20 px-4 py-2 text-sm font-medium"
            >
              About Us
            </Badge>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Discover the Most Expertise
              <br />
              <span className="text-gray-600">of Our</span>{" "}
              <span className="text-[#25C331]">IT Agency</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Ullamcorper risus ultrices risus lorem. Mollis libero in
              pellentesque potenti. Vulputate ut aliquam, consectetur turpis
              odio.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-[#25C331] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Section */}
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center space-x-6 pt-6">
              {/* Profile Images */}
              <div className="flex -space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="Team member 1"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                  alt="Team member 2"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                  alt="Team member 3"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <div className="w-12 h-12 bg-gray-100 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                  <span className="text-gray-900 text-sm font-semibold">
                    +3M
                  </span>
                </div>
              </div>

              {/* Trust Text */}
              <div>
                <p className="text-gray-900 font-semibold text-lg">
                  AI Over 3M+ People Trusted
                </p>
                <p className="text-gray-600">around the World.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Completely Redesigned */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] order-1 lg:order-2">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              {/* Main gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25C331]/5 via-blue-500/5 to-purple-500/10 rounded-3xl"></div>

              {/* Geometric shapes */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#25C331]/20 to-[#25C331]/5 rounded-2xl transform rotate-12"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-full"></div>
              <div className="absolute top-1/3 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg transform -rotate-12"></div>
            </div>

            {/* Main Hero Image Container */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[420px]">
              <div className="relative w-full h-full group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#25C331]/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main image */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={about || "/placeholder.svg"}
                    alt="IT Expert with modern technology"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Floating elements on image */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-[#25C331] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-white/80 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Secondary Visual Elements */}

            {/* Team Collaboration Card */}
            <div className="absolute top-16 sm:top-24 left-2 sm:left-4 w-32 sm:w-40 md:w-48 lg:w-56 h-20 sm:h-24 md:h-28 lg:h-32">
              <Card className="w-full h-full p-1.5 sm:p-2 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
                    alt="Team collaboration"
                    width={200}
                    height={120}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#25C331]/10"></div>
                </div>
              </Card>
            </div>

            {/* Stats Cards with better positioning */}

            {/* Projects Card */}
            <Card className="absolute top-2 sm:top-4 left-6 sm:left-12 bg-white p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#25C331] mr-1" />
                  <div className="text-xl sm:text-2xl font-bold text-[#25C331]">
                    500+
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Projects Done
                </div>
              </div>
            </Card>

            {/* Success Rate Card */}
            <Card className="absolute bottom-12 sm:bottom-16 right-2 sm:right-4 bg-gradient-to-r from-[#25C331] to-[#1ea82a] p-3 sm:p-4 shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold">98%</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Success Rate
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience Badge */}
            <Card className="absolute bottom-2 sm:bottom-4 left-8 sm:left-12 bg-white p-2.5 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#25C331] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    10
                  </span>
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-gray-900">Years</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </div>
            </Card>

            {/* Client Satisfaction Card */}
            <Card className="absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-4 shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-1" />
                  <div className="text-lg sm:text-xl font-bold">250+</div>
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  Happy Clients
                </div>
              </div>
            </Card>

            {/* Animated Floating Elements */}
            <div
              className="absolute top-8 sm:top-12 right-2 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-[#25C331] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute bottom-20 sm:bottom-28 left-12 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500/40 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 right-12 sm:right-20 w-2 h-2 bg-purple-500/50 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-16 sm:left-24 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Additional Geometric Decorations */}
            <div
              className="absolute bottom-6 sm:bottom-8 right-16 sm:right-24 w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#25C331]/30 rounded-full animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div className="absolute top-12 sm:top-16 left-16 sm:left-24 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform rotate-45 animate-pulse"></div>

            {/* Connecting Lines (visible on larger screens) */}
            <div className="hidden lg:block absolute top-1/4 left-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#25C331]/30 to-transparent"></div>
            <div className="hidden lg:block absolute bottom-1/4 right-1/3 w-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#25C331]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}
