import React, { useState, useEffect, useRef } from 'react';
import { WORK_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, BookOpen, User, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Project } from '../types';

interface ProjectSlideProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectSlide({ project, index, total }: ProjectSlideProps) {
  // Alternate layout depending on index for visual rhythm
  const isEven = index % 2 === 0;
  
  const [imageUrl, setImageUrl] = useState<string>(() => {
    return localStorage.getItem(`project_image_${project.id}`) || project.image;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImageUrl(localStorage.getItem(`project_image_${project.id}`) || project.image);
  }, [project.image, project.id]);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem(`project_image_${project.id}`, base64String);
          setImageUrl(base64String);
        } catch (error) {
          console.error('Error saving image to localStorage (likely exceeds quota), falling back to transient URL', error);
          const objectUrl = URL.createObjectURL(file);
          setImageUrl(objectUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Visual Thumbnail (with gold offset frame) */}
      <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="absolute -inset-3 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-xl pointer-events-none" />
        <div 
          onClick={handleContainerClick}
          className={`bg-white/5 relative overflow-hidden border border-white/10 rounded-2xl shadow-lg cursor-pointer group/upload transition-all duration-300 hover:border-[#C9A664]/50 ${
            project.type === 'character'
              ? 'aspect-[2/3] max-h-[550px] md:max-h-[600px] mx-auto w-full max-w-sm'
              : 'aspect-video md:aspect-[4/3]'
          }`}
          title="Click to replace this project image"
        >
          <img
            src={imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[30%] group-hover/upload:grayscale-0 transition-all duration-700 ease-in-out transform group-hover/upload:scale-105"
            loading="lazy"
          />
          
          {/* Sleek Golden Camera Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#C9A664]">
            <Camera className="h-8 w-8 mb-2 transform scale-90 group-hover/upload:scale-100 transition-transform duration-300" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#FAF7F2]">
              Replace Image
            </span>
            <span className="font-sans text-[9px] text-[#E8E6E1]/60 mt-1">
              Supports JPEG, PNG, WEBP
            </span>
          </div>

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 flex items-center border border-white/10 rounded-full group-hover/upload:opacity-0 transition-opacity duration-200">
            {project.type === 'publishing' ? (
              <BookOpen className="h-3 w-3 mr-1.5 text-[#C9A664]" />
            ) : (
              <User className="h-3 w-3 mr-1.5 text-[#C9A664]" />
            )}
            {project.type === 'publishing' ? 'eBook Publishing' : 'AI Character Dev'}
          </div>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
            aria-label={`Upload image for ${project.title}`}
          />
        </div>
      </div>

      {/* Case Study Details */}
      <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="font-mono text-xs font-semibold text-[#C9A664] tracking-widest uppercase mb-2">
          Case Study {total > 1 ? `${index + 1} of ${total}` : 'Showcase'}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#FAF7F2] leading-tight mb-4">
          {project.title}
        </h3>
        
        {/* Overview Block */}
        <div className="bg-white/5 p-5 border-l-2 border-[#C9A664] mb-6 rounded-r-xl border border-y-white/5 border-r-white/5 backdrop-blur-md">
          <h4 className="font-mono text-[10px] uppercase font-extrabold tracking-wider text-[#C9A664] mb-1">
            Context & Scope
          </h4>
          <p className="font-sans text-sm text-[#E8E6E1]/80 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Client Needs & Deliverables */}
        <div className="space-y-4 mb-8">
          <div>
            <h5 className="font-sans text-xs font-bold text-[#FAF7F2] uppercase tracking-wider mb-1.5">
              The Challenge
            </h5>
            <p className="font-sans text-sm text-[#E8E6E1]/70 leading-relaxed">
              {project.clientNeeds}
            </p>
          </div>

          <div>
            <h5 className="font-sans text-xs font-bold text-[#FAF7F2] uppercase tracking-wider mb-2">
              What We Delivered
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.delivered.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start text-xs text-[#E8E6E1]/80 leading-normal">
                  <CheckCircle2 className="h-4 w-4 mr-2 shrink-0 text-[#C9A664] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial Quote Panel */}
        {project.quote && (
          <div className="relative glass-card p-6 md:p-8 mt-4">
            <Quote className="absolute top-4 right-4 h-12 w-12 text-[#C9A664]/10 pointer-events-none" />
            <p className="font-serif text-base italic text-[#FAF7F2]/90 leading-relaxed mb-4 relative z-10">
              "{project.quote}"
            </p>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-serif text-sm text-[#C9A664] font-bold">
                {project.author?.charAt(0)}
              </div>
              <div>
                <h6 className="font-sans text-xs font-bold text-[#FAF7F2]">
                  {project.author}
                </h6>
                <p className="font-sans text-[10px] text-[#E8E6E1]/50 uppercase tracking-widest font-semibold">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Start project query */}
        <div className="mt-8">
          <a
            href="#start-project"
            className="inline-flex items-center text-xs font-extrabold uppercase tracking-widest text-[#FAF7F2] hover:text-[#C9A664] transition-colors group cursor-pointer"
          >
            Inquire on similar projects
            <ArrowUpRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}

interface CategoryCarouselProps {
  projects: Project[];
}

function CategoryCarousel({ projects }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (projects.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    if (projects.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-advance logic (6-8 seconds, e.g., 7 seconds)
  useEffect(() => {
    if (projects.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [projects.length, isHovered, currentIndex]);

  if (projects.length === 0) return null;

  // Single card mode: show as single static card (no arrows, dots, or sliding)
  if (projects.length === 1) {
    return (
      <div className="relative">
        <ProjectSlide project={projects[0]} index={0} total={1} />
      </div>
    );
  }

  return (
    <div 
      className="relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden relative min-h-[400px] py-4">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <ProjectSlide project={projects[currentIndex]} index={currentIndex} total={projects.length} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation Controls & Dots */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-white/5 gap-4">
        <span className="hidden sm:inline font-mono text-[10px] text-[#E8E6E1]/40 uppercase tracking-widest">
          Swipe or use arrows to explore
        </span>

        <div className="flex items-center space-x-6 mx-auto sm:mx-0">
          <button 
            onClick={prevSlide}
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#FAF7F2] hover:text-[#C9A664] hover:border-[#C9A664]/50 rounded-xl transition-all cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-[#C9A664]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#FAF7F2] hover:text-[#C9A664] hover:border-[#C9A664]/50 rounded-xl transition-all cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WorkProof() {
  const publishingProjects = WORK_DATA.filter((p) => p.type === 'publishing');
  const characterProjects = WORK_DATA.filter((p) => p.type === 'character');

  return (
    <section id="work" className="bg-transparent py-24 md:py-32 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C9A664] uppercase font-bold block mb-4">
            Our Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight font-black leading-tight">
            Real Projects, <br />
            <span className="text-[#C9A664] italic font-medium">Real Results</span>
          </h2>
          <p className="font-sans text-sm text-[#E8E6E1]/70 mt-4 leading-relaxed">
            We don't deal in empty metrics or unearned hype. Our focus is on meticulous craft and measurable commercial outputs. Here are our projects categorized by specializations.
          </p>
        </div>

        {/* Structured Groups & Independent Carousels */}
        <div className="space-y-24">
          {/* Category 1: Publishing Projects */}
          <div className="relative">
            <div className="border-b border-white/10 pb-4 mb-12 flex items-center justify-between">
              <h3 className="font-serif text-2xl md:text-3xl font-black text-[#FAF7F2] tracking-tight">
                Publishing Projects
              </h3>
              <span className="font-mono text-[10px] tracking-widest text-[#C9A664] uppercase font-bold">
                Category 01
              </span>
            </div>
            <CategoryCarousel projects={publishingProjects} />
          </div>

          {/* Category 2: AI Character Development */}
          <div className="relative">
            <div className="border-b border-white/10 pb-4 mb-12 flex items-center justify-between">
              <h3 className="font-serif text-2xl md:text-3xl font-black text-[#FAF7F2] tracking-tight">
                AI Character Development
              </h3>
              <span className="font-mono text-[10px] tracking-widest text-[#C9A664] uppercase font-bold">
                Category 02
              </span>
            </div>
            <CategoryCarousel projects={characterProjects} />
          </div>
        </div>

      </div>
    </section>
  );
}
