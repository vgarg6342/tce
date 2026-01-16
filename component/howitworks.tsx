import Image from "next/image"
import booktrial from "../public/howitworks/booktrial.png"
import meettutor from "../public/howitworks/meettutor.png"
import startlearning from "../public/howitworks/startlearning.png"

export default function HowItWorks() {
    return (
        <div>
            <h1 className="text-6xl justify-center text-center md:py-20 font-bold">How it Works</h1>
        <div className="  md:grid md:grid-cols-3 gap-4 justify-center sm:mx-10  md:mx-auto px-40">
            
            <div className="flex bg-[#ddeafd] flex-col items-center border-2 border-black rounded-lg m-4 p-4">
                <Image 
                src={booktrial} 
                alt="book trial" 
                className="mx-auto mb-4 "
                
                />
                <p className="text-body p-10">Join us for an obligation-free initial meeting. We’ll discuss your academic goals to ensure we are the right fit, and demonstrate the dedication we bring to every student.</p>
            </div>

            <div className="flex bg-[#ddeafd] flex-col items-center border-2 border-black rounded-lg m-4 p-4">
                <Image src={meettutor} alt="meet tutor" className="mx-auto mb-4 " />
                <p className="text-body p-10">Connect with your dedicated mentor to define your academic objectives, identify areas for improvement, and ensure our teaching style aligns with your learning needs.</p>
            </div>

            <div className="flex bg-[#ddeafd] flex-col items-center border-2 border-black rounded-lg m-4 p-4">
                <Image src={startlearning} alt="start learning" className="mx-auto mb-4" />
                <p className="text-body p-10">Begin your journey to mastery with a fully customized tutoring plan, meticulously designed to target your weaknesses and accelerate your academic growth.</p>
            </div>

        </div>
        </div>
    )
}