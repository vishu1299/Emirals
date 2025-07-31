"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Import product images
import calendarImg from "@/../public/assets/img/product/envato-labs-image-edit.png";
import notebookImg from "@/../public/assets/img/product/02.jpg";
import stickerImg from "@/../public/assets/img/product/03.jpg";
import businessCardImg from "@/../public/assets/img/product/04.jpg";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 2,
      name: " Printing Design",
      price: 1120.0,
      originalPrice: 1050.0,
      rating: 4,
      reviews: 25,
      image: calendarImg,
      images: [calendarImg, notebookImg, stickerImg, businessCardImg],
      category: "Print Design",
      tags: ["Accessories", "Business"],
      discount: "25%",
      featured: true,
      sku: "124224",
      description:
        "In today's online world, a brand's success lies in combining technological planning and social strategies to draw customers in—and keep them coming back.",
      fullDescription: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio..`,
      specifications: {
        "Model Wears": "UK 10/ EU 38/ US 6",
        Occasion: "Lifestyle, Sport",
        Country: "Italy",
      },
    },
    {
      id: 1,
      name: "Calendar Printing Design",
      price: 112.0,
      originalPrice: 150.0,
      rating: 4,
      reviews: 25,
      image: calendarImg,
      images: [calendarImg, notebookImg, stickerImg, businessCardImg],
      category: "Print Design",
      tags: ["Accessories", "Business"],
      discount: "25%",
      featured: true,
      sku: "124224",
      description:
        "In today's online world, a brand's success lies in combining technological planning and social strategies to draw customers in—and keep them coming back.",
      fullDescription: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the art market.

When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the art market.`,
      specifications: {
        "Model Wears": "UK 10/ EU 38/ US 6",
        Occasion: "Lifestyle, Sport",
        Country: "Italy",
      },
    },
    // Add other products...
  ];

  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => router.push("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-colors ${
          index < rating ? "text-orange-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#25c331]/5"></div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-[#25c331]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-[#25c331]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl flex justify-center items-center h-full md:h-[60vh]  mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Shop{" "}
              <span className="text-[#25c331] relative">
                Details
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#25c331] to-transparent rounded-full"></div>
              </span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 lg:mb-16">
              <button
                onClick={() => router.push("/")}
                className="hover:text-[#25c331] transition-colors"
              >
                Shop
              </button>
              <span className="text-[#25c331]">›</span>
              <span className="text-white">Shop Details</span>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
              <button
                onClick={() => router.push("/shop")}
                className="flex items-center gap-2 hover:text-[#25c331] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Remove the old one */}

      {/* Product Detail */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {/* Main Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-gray-100 rounded-lg overflow-hidden aspect-square border-2 transition-all ${
                      selectedImage === index
                        ? "border-[#25c331]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews} Customer Review)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Quantity */}
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="p-3 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-lg font-semibold text-base">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add To Cart
                  </Button>

                  {/* Buy Now */}
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-lg font-semibold text-base">
                    Buy Now
                  </Button>
                </div>

                {/* Wishlist & Share */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`w-12 h-12 rounded-lg ${
                      isFavorite
                        ? "bg-red-50 border-red-200 text-red-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-lg"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Product Details */}
                <div className="space-y-3 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900 min-w-[80px]">
                      SKU:
                    </span>
                    <span className="text-gray-600">{product.sku}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900 min-w-[80px]">
                      Categories:
                    </span>
                    <span className="text-gray-600">{product.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900 min-w-[80px]">
                      Tags:
                    </span>
                    <div className="flex gap-2">
                      {product.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div
            className={`mt-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger
                  value="description"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger value="additional">
                  Additional Information
                </TabsTrigger>
                <TabsTrigger value="reviews">
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <Card className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Product Descriptions
                  </h3>
                  <div className="prose max-w-none text-gray-600 leading-relaxed">
                    {product.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="additional" className="mt-8">
                <Card className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-3 border-b border-gray-200"
                        >
                          <span className="font-medium text-gray-900">
                            {key}:
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <Card className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Customer Reviews
                  </h3>
                  <p className="text-gray-600">
                    No reviews yet. Be the first to review this product!
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
