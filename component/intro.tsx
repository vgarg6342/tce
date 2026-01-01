import Image from "next/image";
import veena from '../public/veena.png';
import Logo from "../public/logo.png";
export default function Intro() {
    return (
        <div>
        <section className=" grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className=" flex flex-col justify-center items-start space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full w-fit">
              
              Math Specialist
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Concure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mathematics</span>
            </h1>
            <div className="text-2xl w-full text-left md:text-right md:text-4xl font-bold md:pr-40 text-slate-900">
              With Veena Sri
            </div>
            <p className="text-lg text-slate-600 text-balance max-w-lg">
              Hello learners, looking for help in math? You are in the right place. 
              Whether you feel stuck while solving homework or preparing for an important exam,
               I tailor my lessons to your needs and learning style.
            </p>
            <button className="sm:justify-item-stretch px-8 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-0.5">
              Start Learning Today
            </button>
          </div>
          <div className="  flex items-center justify-center w-full h-full">
            <Image src={veena} alt="veena" className="sm:w-1/1 align-center justify-center md:w-3/4 h-auto object-contain" />
          </div>
        </section>
      </div>
          
        )
    }