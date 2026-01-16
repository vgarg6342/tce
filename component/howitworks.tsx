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
                <p className="text-body p-10">Book a free tial session, no commitment just getting to know the targets, and pure passion</p>
            </div>

            <div className="flex bg-[#ddeafd] flex-col items-center border-2 border-black rounded-lg m-4 p-4">
                <Image src={meettutor} alt="meet tutor" className="mx-auto mb-4 " />
                <p className="text-body p-10">Meet your tutor and discuss your learning goals and challenges.</p>
            </div>

            <div className="flex bg-[#ddeafd] flex-col items-center border-2 border-black rounded-lg m-4 p-4">
                <Image src={startlearning} alt="start learning" className="mx-auto mb-4" />
                <p className="text-body p-10">Start learning with your personalized tutoring plan.</p>
            </div>

        </div>
        </div>
    )
}