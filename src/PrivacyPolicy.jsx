import React from 'react';
import { motion } from 'framer-motion';

const policySections = [
  {
    title: 'Information We Collect',
    content: (
      <>
        <b>a. Personal Information</b><br />
        We may collect personal details such as your name, email address, phone number, date and time of birth, location, and any information you provide when:
        <ul className="list-disc ml-6 my-2">
          <li>Booking a consultation or event</li>
          <li>Signing up for our newsletter or offers</li>
          <li>Contacting us for support or inquiries</li>
        </ul>
        <b>b. Payment Information</b><br />
        Payments are processed securely through trusted third-party providers. We do not store your payment card details.<br />
        <b>c. Usage Data</b><br />
        We collect non-personal data such as your IP address, browser type, device information, and pages visited to help us improve our website.<br />
        <b>d. Cookies</b><br />
        We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can manage cookies in your browser settings.
      </>
    )
  },
  {
    title: 'How We Use Your Information',
    content: (
      <ul className="list-disc ml-6 my-2">
        <li>Provide personalized spiritual services (tarot, numerology, yoga, etc.)</li>
        <li>Process bookings and payments</li>
        <li>Communicate with you about your appointments, updates, and offers</li>
        <li>Send newsletters and promotions (if you opt in)</li>
        <li>Improve our website and services</li>
      </ul>
    )
  },
  {
    title: 'Sharing Your Information',
    content: (
      <>
        We do <b>not</b> sell or rent your personal information. We may share your data with:
        <ul className="list-disc ml-6 my-2">
          <li>Trusted service providers (e.g., payment processors, email services) to deliver our services</li>
          <li>Legal authorities if required by law or to protect our rights and safety</li>
        </ul>
      </>
    )
  },
  {
    title: 'Data Retention',
    content: (
      <>
        We retain your information only as long as necessary to:
        <ul className="list-disc ml-6 my-2">
          <li>Provide our services</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
        When no longer needed, your data is securely deleted.
      </>
    )
  },
  {
    title: 'Your Rights',
    content: (
      <>
        You have the right to:
        <ul className="list-disc ml-6 my-2">
          <li>Access your personal data</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your data (subject to legal requirements)</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        To exercise these rights, contact us at: <a href="mailto:meenalkhandelwal55@gmail.com" className="text-purple-700 underline">meenalkhandelwal55@gmail.com</a>
      </>
    )
  },
  {
    title: 'Security',
    content: (
      <>
        We use industry-standard security measures (such as SSL encryption) to protect your information. However, no online system is 100% secure—please use caution when sharing information online.
      </>
    )
  },
  {
    title: 'Third-Party Links',
    content: (
      <>
        Our website may contain links to external sites. We are not responsible for their privacy practices. Please review their policies before providing any information.
      </>
    )
  },
  {
    title: 'Children’s Privacy',
    content: (
      <>
        Our services are intended for users aged 18 and above. We do not knowingly collect information from children. If you believe a child has provided us with personal data, please contact us for prompt removal.
      </>
    )
  },
  {
    title: 'Updates to This Policy',
    content: (
      <>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date. Please review this policy regularly.
      </>
    )
  },
  {
    title: 'Contact Us',
    content: (
      <>
        For any questions or concerns about this Privacy Policy, please contact:<br />
        <b>Email:</b> <a href="mailto:meenalkhandelwal55@gmail.com" className="text-purple-700 underline">meenalkhandelwal55@gmail.com</a><br />
        <b>Phone:</b> <a href="tel:+917017094225" className="text-purple-700 underline">+91 7017094225</a><br />
        <b>Location:</b> Mathura, Uttar Pradesh, India
      </>
    )
  }
];

const PrivacyPolicy = () => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-16 px-4 md:px-16 lg:px-24 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50"
  >
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h1 className="font-philosopher text-4xl md:text-5xl font-semibold mb-6 text-center text-gray-800">Privacy Policy</h1>
      
      <p className="text-gray-700 mb-8 text-center">Welcome to Spiritual Bliss. We are committed to respecting your privacy and protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our website and services.</p>
      <div className="space-y-8">
        {policySections.map((section, idx) => (
          <div key={section.title}>
            <h2 className="font-philosopher text-2xl font-semibold mb-2 text-purple-700">{idx + 1}. {section.title}</h2>
            <div className="text-gray-700 text-base leading-relaxed">{section.content}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-gray-600 text-sm">
        By using our website, you acknowledge that you have read and understood this Privacy Policy.
      </div>
    </div>
  </motion.section>
);

export default PrivacyPolicy; 