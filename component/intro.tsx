'use client';
import Image from "next/image";
import intro from '../public/intro.gif';
import line from "../public/line.svg";

export default function Intro() {
  const scrollToPricing = () => {
        const section = document.getElementById( 'contact' );
        if( section ) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
        <section className=" grid grid-cols-1 md:grid-cols-2 items-center pb-10">
          <div className=" flex flex-col justify-center items-start space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full w-fit">
              
              Math Specialist
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              1:1 Tutoring That Helps Your Child Excel at School </h1>
            <ul className=" flex-col text-xl text-slate-600  max-w-lg list-none">
              <li className="flex"> <Image src={line} width={50} height={20} alt="Hero Illustration" className="flex"/> Personalized lesson plans tailored to your child's needs </li>
              <li className="flex"> <Image src={line} width={50} height={20} alt="Hero Illustration" className="flex"/> Experienced tutors who make learning fun and engaging </li>
              <li className="flex"> <Image src={line} width={50} height={20} alt="Hero Illustration" className="flex"/> Flexible scheduling to fit your busy lifestyle </li>
            </ul>
            <button onClick={scrollToPricing} className="sm:justify-item-stretch px-8 py-3 text-white font-semibold bg-purple-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors border-2 border-black">
              Start Learning Today
            </button>
          </div>
          <div className="  flex items-center justify-center">
            <Image src={intro} alt="struggling with math" className="sm:w-1/1 align-center justify-center md:w-3/4" />
          </div>
        </section>
      </div>
          
        )
    }