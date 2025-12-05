// AutoRotatingTestimonials.tsx
'use client';

import React, { useEffect, useState, useCallback } from "react";

interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Student A",
        role: "IB HL Math",
        quote: "The Complete Equation helped me finally understand calculus and boosted my exam confidence.",
    },
    {
        name: "Student B",
        role: "SAT Prep",
        quote: "Clear explanations and targeted practice made a huge difference in my SAT math score.",
    },
    {
        name: "Student C",
        role: "AP Calculus",
        quote: "The structured approach and past-paper strategy were game changers for my exam.",
    },
    {
        name: "Student D",
        role: "University Linear Algebra",
        quote: "Concept-first teaching plus visualization made abstract topics much easier to grasp.",
    },
    {
        name: "Student E",
        role: "ACT Math",
        quote: "Short, focused lessons fit perfectly into my busy schedule and improved my speed.",
    },
];

const AUTOPLAY_DELAY = 6000;

const AutoRotatingTestimonials: React.FC<{ initialIndex?: number; className?: string }> = ({
    initialIndex = 0,
    className = ""
}) => {
    const [current, setCurrent] = useState(initialIndex);
    const [isClient, setIsClient] = useState(false);
    const total = testimonials.length;

    // SSR-safe client detection
    useEffect(() => {
        setIsClient(true);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrent((index + total) % total);
    }, [total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-rotate (only on client)
    useEffect(() => {
        if (!isClient) return;

        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, AUTOPLAY_DELAY);

        return () => clearInterval(id);
    }, [total, isClient]);

    // Pause on hover (improved UX)
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleMouseEnter = () => {
            clearTimeout(timeoutId);
        };

        const handleMouseLeave = () => {
            timeoutId = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % total);
            }, AUTOPLAY_DELAY / 2);
        };

        if (isClient) {
            document.addEventListener('mouseenter', handleMouseEnter);
            document.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            clearTimeout(timeoutId);
            if (isClient) {
                document.removeEventListener('mouseenter', handleMouseEnter);
                document.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isClient]);

    return (
        <section className={`bg-white px-18 ${className}`}>
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Student Feedback
                </h2>
                <p className="mt-2 text-3xl font-semibold md:text-4xl">
                    Many voices, one clear result
                </p>

                <div className="relative mt-12 overflow-hidden rounded-2xl">
                    {/* SSR-safe slider - renders first slide on server */}
                    <div
                        className="flex h-64 transition-transform duration-700 ease-out md:h-72"
                        style={{
                            transform: isClient
                                ? `translateX(-${current * 100}%)`
                                : 'translateX(0%)'
                        }}
                        role="region"
                        aria-label="Testimonials carousel"
                    >
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={`${testimonial.name}-${index}`}
                                className="w-full flex-shrink-0 px-4"
                                aria-hidden={!isClient || current === index}
                                aria-label={`Testimonial ${index + 1}: ${testimonial.name}, ${testimonial.role}`}
                            >
                                <div className="flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
                                    <blockquote className="text-lg leading-relaxed text-slate-100 md:text-xl">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    <footer className="mt-8 flex flex-col items-center gap-2 pt-4 sm:flex-row sm:justify-center sm:pt-0">
                                        <div className="text-sm text-slate-300">
                                            <span className="font-semibold text-white">
                                                {testimonial.name}
                                            </span>
                                            <span className="mx-2 text-slate-500">•</span>
                                            <span className="font-medium">{testimonial.role}</span>
                                        </div>

                                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                            {index + 1} / {total}
                                        </div>
                                    </footer>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Navigation - hidden during SSR hydration */}
                    {isClient && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 p-3 text-slate-100 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-800/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                                aria-label="Previous testimonial"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 p-3 text-slate-100 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-800/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                                aria-label="Next testimonial"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Dots - SSR safe */}
                <div className="mt-8 flex justify-center gap-2" role="tablist">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent ${current === index
                                ? "w-8 bg-sky-400 shadow-lg"
                                : "bg-slate-600 hover:bg-slate-500"
                                }`}
                            role="tab"
                            aria-selected={current === index}
                            aria-label={`Go to testimonial ${index + 1}`}
                            tabIndex={current === index ? 0 : -1}
                        />
                    ))}
                </div>

                {isClient && (
                    <div className="mt-4 text-xs text-slate-500">
                        Auto-rotating every 6 seconds • Hover to pause
                    </div>
                )}
            </div>
        </section>
    );
};

AutoRotatingTestimonials.displayName = 'AutoRotatingTestimonials';

export default AutoRotatingTestimonials;
