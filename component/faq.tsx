import React from 'react';

// 1. Define the shape of your FAQ data
interface FAQItemProps {
  question: string;
  answer: string;
}

// Sample data typed with the interface
const faqData: FAQItemProps[] = [
  {
    question: "How do I sign up for tutoring?",
    answer: "You can register using the contact us form on our website. Once we receive your information, a member of our team will reach out to discuss your needs and set up your first session.",
  },
  {
    question: "What if I need to cancel a session?",
    answer: "Life happens! You can cancel or reschedule any session up to 12 hours in advance through your user dashboard without any penalty.",
  },
  {
    question: "Do you offer group discounts?",
    answer: "No, we are currently focused on providing personalized one-on-one tutoring to ensure the best learning experience for each student.",
  },
  {
    question: "Is the tutoring online or in-person?",
    answer: "Currently, all sessions are conducted online via Teams to ensure flexibility and safety for everyone.",
  },
  {
    question: "Can I choose my child’s tutor?",
    answer: "Yes. If the matched tutor isn’t the right fit, we’ll help you select another tutor better suited to your child’s learning needs.",
  },
  {
    question: "What is the duration of each tutoring session?",
    answer: "Each one-on-one tutoring session lasts 55 minutes, ",
  },
  {
    question: " How do I track my child’s progress?",
    answer: "You’ll receive monthly progress reports and optional parent-teacher meetings to discuss academic improvements and goals",
  },
];

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between py-6 text-lg font-medium text-gray-900 list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
          <span>{question}</span>
          <span className="transition-transform duration-300 group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </summary>
        <p className="pb-6 text-gray-600 leading-relaxed group-open:animate-fadeIn">
          {answer}
        </p>
      </details>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-gray-200 rounded-2xl bg-gray-50 p-6 sm:p-10 shadow-sm">
            {faqData.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;