
import React from 'react';

export const metadata = {
  title: 'Refund & Rescheduling Policy | The Complete Equation',
  description: 'Policies regarding session cancellations, rescheduling limits, and refund processing.',
};

const RefundPolicy = () => {
  const lastUpdated = "March 5, 2026";

  const sections = [
    {
      id: "rescheduling",
      title: "1. Rescheduling Policy",
      content: (
        <div className="space-y-4">
          <p>
            To maintain a consistent learning schedule, we allow for a limited number of 
            rescheduling requests:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Monthly Limit:</strong> A maximum of 3 rescheduling requests are permitted per calendar month.</li>
            <li><strong>Notice Period:</strong> Requests must be submitted at least 24 hours prior to the scheduled session time.</li>
            <li><strong>Approval:</strong> Rescheduling is subject to the tutor's availability. If a mutually agreeable time cannot be found, the original session time stands.</li>
          </ul>
        </div>
      )
    },
    {
      id: "missed-sessions",
      title: "2. Missed Sessions & No-Shows",
      content: (
        <div className="space-y-4">
          <p>
            Our tutors dedicate specific time slots for each student. Therefore, the following 
            rules apply to absences:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Unannounced Absence:</strong> If a student fails to join a session without the required 24-hour notice, the session is forfeited and is not eligible for a refund or a makeup class.</li>
            <li><strong>Late Arrival:</strong> No compensation or extension is provided for time lost due to a student’s late arrival.</li>
            <li><strong>Technical Issues:</strong> The Complete Equation is not liable for learning time lost due to internet lag, power outages, or hardware failure on the student’s end. Such sessions are not eligible for refunds.</li>
          </ul>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "3. Refund Eligibility",
      content: (
        <div className="space-y-4">
          <p>Refunds or "Replacement" sessions are only issued under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tutor Absence:</strong> If a tutor is unable to conduct a session and a substitute cannot be provided, a full credit for that session or a reschedule will be offered.</li>
            <li><strong>Technical Failure (Provider Side):</strong> If a session is interrupted due to a confirmed technical failure on our platform or the tutor's hardware.</li>
            <li><strong>Emergencies:</strong> Exceptions for rescheduling (beyond the monthly limit) are only granted for genuine medical emergencies or sudden, widespread technical outages, subject to administrative approval.</li>
          </ul>
        </div>
      )
    },
    {
      id: "process",
      title: "4. Refund Processing",
      content: (
        <div className="space-y-4">
          <p>Refunds are returned via the original mode of payment used during the transaction:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Razorpay:</strong> Refunds for transactions made via Razorpay are initiated within 48 hours of approval. The funds typically reflect in your account within 5–7 business days, depending on your bank's policy.</li>
            <li><strong>Direct Bank Transfer:</strong> For payments made via IMPS/NEFT, refunds will be processed manually to the source bank account within 7 business days.</li>
          </ul>
        </div>
      )
    },
    {
      id: "non-refundable",
      title: "5. Non-Refundable Items",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Partially Used Bundles:</strong> Once a multi-session bundle has commenced, the individual sessions are non-refundable unless the remaining service is discontinued by the company.</li>
          <li><strong>Termination for Conduct:</strong> As per our Terms of Service, any session or service terminated due to disrespectful behavior or harassment is strictly non-refundable.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header */}
      <header className="bg-slate-50 border-b border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Refund & Replacement
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Our commitment to transparency regarding session scheduling, 
            cancellations, and financial returns.
          </p>
          <p className="mt-2 text-xs font-mono text-slate-400">LAST UPDATED: {lastUpdated}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-10 space-y-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Policy Guide
            </h3>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block py-2.5 px-4 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <div className="space-y-20">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  {section.title}
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-24 p-10 bg-blue-50 rounded-3xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Need Administrative Help?</h3>
            <p className="text-blue-800 mb-6">
              Tutors are not authorized to process refunds or modify billing. For all 
              payment-related inquiries or to request a refund, please email our 
              administration team directly.
            </p>
            <a
              href="mailto:billing@thecompleteequation.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md"
            >
              Contact Billing Dept.
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-slate-50 py-12 mt-20 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
          The Complete Equation &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default RefundPolicy;