import React from 'react';

export const metadata = {
  title: 'Terms of Service | The Complete Equation',
  description: 'Commercial terms and service conditions for The Complete Equation math tutoring.',
};

const TermsOfService = () => {
  const lastUpdated = "March 5, 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By enrolling in any tutoring program or utilizing the services provided by 
          <strong> The Complete Equation</strong>, you agree to comply with and be bound by 
          these Terms of Service. These terms constitute a legally binding agreement 
          between you (the "Client") and the company. If you do not agree with any 
          part of these terms, you must not proceed with our services.
        </p>
      )
    },
    {
      id: "services",
      title: "2. Description of Service",
      content: (
        <p>
          The Complete Equation provides online 1-to-1 mathematical instruction. 
          The company reserves the right to modify, suspend, or discontinue 
          services at its discretion. Services are provided on a pre-paid basis 
          and are subject to the scheduling availability of our tutoring staff.
        </p>
      )
    },
    {
      id: "payments",
      title: "3. Payments and Billing",
      content: (
        <div className="space-y-4">
          <p>
            Payment must be received in full prior to the commencement of any 
            tutoring session. We support the following payment methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Razorpay:</strong> Secure online payments via Credit/Debit Cards, 
              UPI, and NetBanking.
            </li>
            <li>
              <strong>Direct Bank Transfer:</strong> Payments via NEFT/IMPS/RTGS. 
              Sessions will only be confirmed once funds have been successfully 
              credited to our bank account.
            </li>
          </ul>
          <p className="text-sm bg-slate-50 p-3 rounded border border-slate-200">
            <strong>Note:</strong> All transactions are subject to applicable 
            Indian tax regulations (GST). Valid tax invoices will be issued 
            for all payments.
          </p>
        </div>
      )
    },
    {
      id: "cancellation",
      title: "4. Rescheduling & Refunds",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Rescheduling:</strong> Clients are permitted a maximum of 3 
            rescheduling requests per month, provided notice is given at least 
            24 hours in advance.
          </li>
          <li>
            <strong>Missed Sessions:</strong> Sessions missed without 24-hour notice 
            are non-refundable and will be charged at the full rate.
          </li>
          <li>
            <strong>Refunds:</strong> Refund requests for unused session bundles 
            are processed via Razorpay or bank transfer and may take 5–7 
            business days to reflect in your account.
          </li>
        </ul>
      )
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: (
        <p>
          All educational materials, including worksheets, specialized math 
          problems, curriculum designs, and digital assets provided by 
          The Complete Equation are the proprietary intellectual property 
          of the company. Users are granted a limited, personal-use license. 
          Redistribution, recording for external use, or commercial 
          exploitation of these materials is strictly prohibited.
        </p>
      )
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      content: (
        <p>
          The Complete Equation provides educational support and guidance. 
          While we strive for excellence, the company does not guarantee 
          specific academic results, exam grades, or test scores. The 
          company is not liable for any indirect or consequential loss 
          arising from the use of its services or technical outages 
          on the client's end.
        </p>
      )
    },
    {
      id: "termination",
      title: "7. Termination",
      content: (
        <p>
          We reserve the right to terminate or suspend access to our 
          services immediately, without prior notice or liability, for 
          any reason whatsoever, including but not limited to a breach 
          of these Terms or the non-payment of service fees.
        </p>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-blue-100">
      {/* Hero Header */}
      <header className="bg-slate-50 border-b border-slate-200 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
          Clear, professional guidelines for our commercial partnership. 
          Last updated on {lastUpdated}.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Navigation (Hidden on Mobile) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-12 space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Contents
            </p>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-all"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 max-w-3xl">
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Footer */}
          {/* <div className="mt-24 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Questions regarding these Terms?
            </h3>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please reach out 
              to our administrative office.
            </p>
            <a
              href="contactus"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Contact Administration
            </a>
          </div> */}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 mt-20 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} The Complete Equation. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TermsOfService;