

import Contactus from "../component/contactus";
import { Video } from "../component/video";
import HowItWorks from "../component/howitworks";
import BentoReviews from "../component/testimony";
import Stats from "../component/stats";
import Features from "../component/features";
import Intro from "../component/intro";
import Subjects from "../component/subjects";

import Image from "next/image";
import student from '../public/student.jpg';

export default function Home() {
  return (
  <div className="pt-24">
    <div className="container block mx-auto ">
      <Intro /> 
      </div>
      <Subjects />
      
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
      <Features/>
      </div>
      <div className="hidden md:block md:col-span-1">
        <Image src={student} alt="veena" className="w-3/4 sticky top-0 mb-10" />
        </div>
      </div>
      <Stats />
      <Video />
      <div className="align-center mx-auto">
        <HowItWorks />
      </div>
      <BentoReviews />
      
      <div className="bg-gray-100">
      <div className=" sm:block md:grid md:grid-cols-3  md:mx-40">
        <div className="col-span-3 md:col-span-2">
        <div className="text-4xl sm:text-center md:text-right md:mt-80 md:mx-20"> Hi Veena here, the only thing I hate more than spam emails are flat earth theorist. I guarentee, there will be no spam or 
          promo emails from me, just quality tutoring content and occasional updates about my services. It is just me and my passion 
          for teaching here at The Complete Equation.
        </div>
      </div>
      <div className=" sm:block md:col-span-1">
        <Contactus />
        </div>
      </div>
      </div>
      
      
  </div>




  )
}
