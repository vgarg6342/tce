import Image from 'next/image';
import avatar from '../public/people/avatar.png';
import aajra from '../public/people/aajra.jpg';
import saurabh from '../public/people/saurabh.jpg';
import ugo from '../public/people/ugo.jpeg';
import { Quote } from 'lucide-react';

// 1. Sample Data (Removed date and rating properties)
const reviews = [
  {
    id: 1,
    name: "Saurabh",
    role: "Working Professional",
    content: "I am a financial services professional from Mumbai and I wanted to skill up my advanced math for quantitative finance. Searching for the right tutor in Mathematics is very difficult and i reached out to several tutors on Preply, but found nobody who would teach advanced and customized content. I found Veena and I have studied under her. Her approach is unique, she has a consultative process of choosing the right courses to suit the learner's levels and goals and then progressively advances through the right stages to deliver her classes. She engages and works very hard to explain complex mathematical formulae, equations and problems and many a times I felt she worked harder than me. She has excellent follow through on sharing course content in advance and after the class, she ensures the student has revised and tests the knowledge level and readjusts her teaching style. I was able to learn under her and felt comfortable with her pace and engagement, this despite having to balance my work and study. Veena is really good with advanced mathematics and I really loved it the way she explained and deduced complex theorems like Taylor series etc.",
    avatar: saurabh,
    className: "md:col-span-2 md:row-span-2", 
  },
  {
    id: 2,
    name: "Sasha",
    role: "Secondary Grades Student",
    content: "Veena is an excellent and incredibly patient math tutor. She explains every detail clearly and takes me through each topic step by step, always checking that I understand. If I’m unsure about something, she immediately finds a different way to explain it, which makes learning so much easier. Her supportive and thoughtful teaching style has really helped me improve and feel more confident in math",
    avatar: avatar,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    name: "Soham",
    role: "High School Senior",
    content: "Ms. Veena Sri N. is an exceptional Pre-Calculus teacher. Her clear explanations and structured lessons make even the toughest concepts understandable. She’s patient, approachable, and always encourages questions. Thanks to her guidance, I’ve gained confidence in math and truly enjoy learning. Her passion for teaching shines through every class.",
    avatar: avatar,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    name: "Aajra",
    role: "Parent",
    content: "I will start by saying Veena is an absolutely stellar instructor. She has been helping me prepare for my Calculus final exam for college, after I had missed quite a few classes due to injuries. She explains things thoroughly, and if you don't understand on the first try, she will try a different way to explain it until you understand. She puts so much time and effort into helping me, and for the first time this semester I feel absolutely ready to take my exam. If you are looking for a tutor in any math related subject I would recommend Veena as my first choice!",
    avatar: aajra,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    name: "Meera",
    role: "Working Professional",
    content: "Veena has been an incredible tutor during my summer multivariable calculus (MVC) course. Even though the course is fast-paced and intense, she’s made the material feel manageable and clear. What I really appreciate is how she tailors her teaching to fit how I learn best focusing on what’s actually required while helping me build confidence in tricky concepts. Thanks to her, I’ve done really well in all the quizzes she’s helped me prepare for. She made a difficult subject so much easier to grasp. Highly recommend her!",
    avatar: ugo,
    className: "md:col-span-1 md:row-span-1",
  },
];

const ReviewCard = ({ review, className }: { review: typeof reviews[0]; className: string }) => {
  return (
    <div className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow duration-300 ${className}`}>
      
      {/* Header: Avatar & Name Only */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg shrink-0">
          <Image
            src={ review.avatar}
            alt={review.name}
            className="h-full w-full rounded-full object-cover"
          />
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
