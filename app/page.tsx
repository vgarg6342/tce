

import Contactus from "../component/contactus";
import { Video } from "../component/video";
import HowItWorks from "../component/howitworks";
import BentoReviews from "../component/testimony";
import Stats from "../component/stats";
import Features from "../component/features";
import Intro from "../component/intro";
import Subjects from "../component/subjects";
import Grades from "../component/grades";
import ServiceSection from "../component/services";
import FAQ from '../component/faq';

const data = {
  "title": "What do we do?",
  "content": "Hi There, we are building a tutoring platform that connects students with experienced tutors for personalized learning experiences. Our mission is to make quality education accessible to everyone, everywhere. Whether you're looking for help with homework, exam preparation, or mastering a new subject, our platform offers a wide range of tutoring services tailored to your needs. Join us today and take the first step towards achieving your academic goals with the support of our dedicated tutors.",
  "images": [
    "/service/veena1.jpeg",
    "/service/kanishk.png",
    "/service/veena2.jpeg",
  ]
}

export default function Home() {
  return (
  <div className="pt-8">
    <div className="container block mx-auto px-10 ">
      <Intro /> 
    </div>
    
    <Subjects />
    {/* <ServiceSection service={data} /> */}
    <Features/>
      <Grades />
      <Video />
      
      <div className="align-center mx-auto">
        <HowItWorks />
      </div>
      
      <BentoReviews />
      <div id = "contact" className="bg-gray-100">
      <div className=" sm:block md:grid md:grid-cols-3  md:mx-40">
        <div className="col-span-3 md:col-span-2">
        <div  className="text-4xl sm:text-center md:text-right md:mt-80 md:mx-20"> Hi there, the only thing we hate more than spam emails is flat earth theorists. We guarantee there will be no spam or promo emails from us, just quality tutoring content and occasional updates about our services. 
          It is just us and our passion for teaching here at The Complete Equation.
          <p> Reach out to us on hello@thecompleteequation.com</p>
        </div>
      </div>
      <div className=" sm:block md:col-span-1">
        <Contactus />
        </div>
      </div>
      </div> 
      <FAQ />
  </div>
  )
}
