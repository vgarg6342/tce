import React from 'react';
import { Quote } from 'lucide-react';

// 1. Sample Data (Removed date and rating properties)
const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Math Student",
    content: "This platform completely changed how I approach calculus. The step-by-step breakdown of complex problems is exactly what I needed to pass my finals.",
    avatar: "S",
    className: "md:col-span-2 md:row-span-2", 
  },
  {
    id: 2,
    name: "David Chen",
    role: "Engineering Major",
    content: "Incredible resource for circuit analysis. The visual aids for signal integrity are top-notch.",
    avatar: "D",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "High School Senior",
    content: "I finally understand quadratic equations! The tutoring sessions are super chill and effective.",
    avatar: "E",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    name: "Michael Ross",
    role: "Parent",
    content: "My son's grades improved from a C to an A in just two months. Worth every penny for the personalized attention.",
    avatar: "M",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    name: "Jessica T.",
    role: "Physics Enthusiast",
    content: "The physics modules are just as good as the math ones. Love the deep dive into analog electronics concepts.",
    avatar: "J",
    className: "md:col-span-1 md:row-span-1",
  },
];

const ReviewCard = ({ review, className }: { review: typeof reviews[0]; className: string }) => {
  return (
    <div className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow duration-300 ${className}`}>
      
      {/* Header: Avatar & Name Only */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg shrink-0">
          {review.avatar}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">{review.name}</h3>
          <p className="text-xs text-slate-500 font-medium">{review.role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-grow">
        <Quote className="absolute -top-1 -left-1 text-indigo-50 w-8 h-8 -z-10 transform -scale-x-100" />
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          "{review.content}"
        </p>
      </div>
    </div>
  );
};

const BentoReviews = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Student Stories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See what our community has to say about their learning journey.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {reviews.map((review) => (
            <ReviewCard 
              key={review.id} 
              review={review} 
              className={review.className} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoReviews;
