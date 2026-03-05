import React from 'react';

export const metadata = {
  title: 'Privacy Policy | The Complete Equation',
  description: 'How we collect, use, and protect your data at The Complete Equation.',
};

const PrivacyPolicy = () => {
  const lastUpdated = "March 5, 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <p>
          At <strong>The Complete Equation</strong>, we are committed to protecting 
          the privacy and security of our users. This Privacy Policy explains how 
          we collect, use, disclose, and safeguard your information when you utilize 
          our online mathematics tutoring services. By using our platform, you 
          consent to the data practices described in this policy.
        </p>
      )
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <p>We collect information that identifies, relates to, or could reasonably be linked with you. This includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identifiers:</strong> Name, email address, and contact number.</li>
            <li><strong>Academic Data:</strong> Student grade level and learning objectives.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our website.</li>
          </ul>
        </div>
      )
    },
    {
      id: "processing",
      title: "3. How We Process Your Data",
      content: (
        <div className="space-y-4">
          <p>Your data is processed to provide a seamless educational experience through our primary partners:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Microsoft Teams:</strong> We use Microsoft Teams for delivering 
              live 1-to-1 sessions. Data transmitted during sessions (audio/video) 
              is processed by Microsoft in accordance with their privacy standards.
            </li>
            <li>
              <strong>Razorpay:</strong> Online financial transactions are handled 
              by Razorpay. We do not store credit card or bank login credentials 
              on our servers.
            </li>
            <li>
              <strong>Direct Bank Transfer:</strong> For manual transfers, we process 
              transaction IDs and billing details to issue valid tax invoices.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "usage",
      title: "4. Use of Information",
      content: (
        <p>
          We use the information we collect to manage your tutoring schedule, 
          process payments for GST compliance, and communicate administrative 
          updates. We also utilize session recordings exclusively for internal 
          quality control and as a revision resource for the student.
        </p>
      )
    },
    {
      id: "sharing",
      title: "5. Data Sharing & Disclosure",
      content: (
        <p>
          The Complete Equation does not sell or rent your personal data to third-party 
          advertisers. We only share information with service providers (like 
          Microsoft and Razorpay) necessary to facilitate our tutoring services 
          or when required by Indian law to comply with tax or legal obligations.
        </p>
      )
    },
    {
      id: "security",
      title: "6. Data Security",
      content: (
        <p>
          We implement a variety of security measures to maintain the safety of 
          your personal information. All academic records and session links are 
          restricted to authorized personnel and the specific student/parent 
          associated with the account.
        </p>
      )
    },
    {
      id: "rights",
      title: "7. Your Rights",
      content: (
        <p>
          You have the right to access, correct, or request the deletion of your 
          personal data. If you wish to exercise these rights or opt-out of 
          session recordings, please contact our privacy team at the email 
          provided below.
        </p>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Policy Header */}
      <header className="bg-slate-50 border-b border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            How we manage and protect the information shared with The Complete Equation. 
            Effective as of {lastUpdated}.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* Sticky Navigation Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-10 space-y-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
              Policy Sections
            </h3>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block py-2.5 px-4 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
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
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed antialiased">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-24 p-10 bg-slate-900 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Privacy Questions?</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              If you have any concerns regarding how your data is handled or would 
              like to request a copy of your stored records, our team is here to help.
            </p>
            <a
              href="mailto:privacy@thecompleteequation.com"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
            >
              Contact Data Protection Officer
            </a>
          </div>
        </main>
      </div>

      {/* Footer Branding */}
      <footer className="bg-slate-50 py-16 mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">
            &copy; {new Date().getFullYear()} The Complete Equation | Mathematics Excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;