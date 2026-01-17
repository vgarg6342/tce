import Image from "next/image"
import booktrial from "../public/howitworks/booktrial.png"
import meettutor from "../public/howitworks/meettutor.png"
import startlearning from "../public/howitworks/startlearning.png"

export default function HowItWorks() {
    // Shared class for the cards to reduce repetition and ensure consistency
    const cardClass = "flex flex-col bg-[#ddeafd] items-center border-2 border-black rounded-xl p-6 md:p-8 h-full transition-transform hover:-translate-y-1 duration-300";

    return (
        <section className="w-full py-12 md:py-20">
            {/* Main Container: Controls max width and horizontal centering */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                        How it Works
                    </h1>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Card 1 */}
                    <div className={cardClass}>
                        <div className="relative w-full h-48 mb-6 flex items-center justify-center">
                            <Image 
                                src={booktrial} 
                                alt="Book a trial" 
                                className="object-contain max-h-full w-auto"
                                // If using Next.js 13+ static imports, width/height are auto. 
                                // If external, add width={200} height={200}
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center">1. Book a Trial</h3>
                        <p className="text-base text-gray-700 text-center leading-relaxed">
                            Join us for an obligation-free initial meeting. We’ll discuss your academic goals to ensure we are the right fit, and demonstrate the dedication we bring to every student.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className={cardClass}>
                        <div className="relative w-full h-48 mb-6 flex items-center justify-center">
                            <Image 
                                src={meettutor} 
                                alt="Meet your tutor" 
                                className="object-contain max-h-full w-auto" 
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center">2. Meet Your Tutor</h3>
                        <p className="text-base text-gray-700 text-center leading-relaxed">
                            Connect with your dedicated mentor to define your academic objectives, identify areas for improvement, and ensure our teaching style aligns with your learning needs.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className={cardClass}>
                        <div className="relative w-full h-48 mb-6 flex items-center justify-center">
                            <Image 
                                src={startlearning} 
                                alt="Start learning" 
                                className="object-contain max-h-full w-auto" 
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center">3. Start Learning</h3>
                        <p className="text-base text-gray-700 text-center leading-relaxed">
                            Begin your journey to mastery with a fully customized tutoring plan, meticulously designed to target your weaknesses and accelerate your academic growth.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}