import Image from "next/image";
import veena from '../../public/veena.png';

export default function Intro() {
    return (
        <div>
        <section className="h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className=" flex flex-col justify-center items-start space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full w-fit">
              IB Math Specialist
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IB Mathematics</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Expert guidance for Analysis & Approaches (AA) and Applications & Interpretation (AI). Target a 7 with personalized strategies.
            </p>
            <button className="sm:justify-item-stretch px-8 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-0.5">
              Start Learning Today
            </button>
          </div>
          <div className="flex  items-center w-full h-full">
            <Image src={veena} alt="veena" className="sm:w-1/1 md:w-3/4 h-auto object-contain" />
          </div>
        </section>
      </div>
          
        )
    }