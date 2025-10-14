import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import slide1 from "@/assets/image-1.jpeg";
import slide2 from "@/assets/image-2.jpeg";
import slide3 from "@/assets/image-3.jpeg";
import slide4 from "@/assets/image-4.jpeg";
import slide5 from "@/assets/image-5.jpeg";
import slide6 from "@/assets/image-6.jpeg";

const slides = [
  {
    image: slide1,
    title: "Welcome to Kispang",
    subtitle: "Empowering Minds, Shaping Futures.",
  },
  {
    image: slide2,
    title: "Learn with the Best",
    subtitle: "World-Class Faculty, Modern Learning Spaces, and Global Vision.",
  },
  {
    image: slide3,
    title: "Your Success Story Starts Here",
    subtitle: "Join Our Community of Achievers and Innovators.",
  },
  {
    image: slide4,
    title: "Explore. Discover. Grow.",
    subtitle: "Hands-on experiences that turn curiosity into knowledge.",
  },
  {
    image: slide5,
    title: "Innovation Meets Inspiration",
    subtitle: "Building the next generation of creative thinkers and leaders.",
  },
  {
    image: slide6,
    title: "Together for a Better Tomorrow",
    subtitle: "Strong values, shared purpose, and a commitment to excellence.",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-full transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
