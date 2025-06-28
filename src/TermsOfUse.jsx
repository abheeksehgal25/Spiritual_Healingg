import React from 'react';
import { motion } from 'framer-motion';

const termsSections = [
  {
    title: 'Introduction',
    content: (
      <>
        The domain name spiritualhealing.mk is a site operated by Spiritual Healing with Meenal, a spiritual consultancy service based in Mathura, Uttar Pradesh, India ("Service Provider").
      </>
    )
  },
  {
    title: 'Services',
    content: (
      <>
        Spiritual Healing with Meenal provides online and offline spiritual healing consultancy services including tarot reading, numerology, yoga sessions, and astrological consultations. Upon booking a service, our team will get in touch with you to explain the further process and schedule your session.
      </>
    )
  },
  {
    title: 'Third Party Websites and Content',
    content: (
      <>
        Our website provides links for sharing our content on Facebook, Instagram, YouTube and other such third party websites. These are only for sharing and/or listing purposes and we take no responsibility of the third party websites and/or their contents listed on our website and disclaim all our liabilities arising out of any or all third party websites.
        <br /><br />
        We disclaim all liabilities and take no responsibility for the content that may be posted on such third party websites by the users of such websites in their personal capacity on any of the above mentioned links for sharing and/or listing purposes as well as any content and/or comments that may be posted by such user in their personal capacity on any official webpage of Spiritual Healing with Meenal on any social networking platform.
      </>
    )
  },
  {
    title: 'Privacy',
    content: (
      <>
        Our Privacy Policy, incorporated by reference in these Terms of Service, sets out how we will use personal information you provide to us. By using this Website, you agree to be bound by the Privacy Policy, and warrant that all data provided by you is accurate and up to date.
      </>
    )
  },
  {
    title: 'Pricing',
    content: (
      <>
        We ensure that all details of prices appearing on the website are accurate, however errors may occur. If we discover an error in the price of any service which you have ordered, we will inform you of this as soon as possible. If we are unable to contact you we will treat the booking as cancelled and the amount will be refunded to you.
        <br /><br />
        Additionally, prices for services may change from time to time without notice. However, these changes will not affect bookings that have already been done and are in process. The price of a service includes GST (or similar sales tax) at the prevailing rate for which we are responsible as a service provider. Please note that the prices listed on the website are only applicable for the services booked on the website and not through any other source.
      </>
    )
  },
  {
    title: 'Payment',
    content: (
      <>
        Upon receiving your booking we carry out a standard pre-authorization check on your payment card to ensure there are sufficient funds to fulfil the transaction. Services will not be rendered until this pre-authorization check has been completed. Your card will be debited once the booking has been accepted. For any further payment related queries, please email us at meenalkhandelwal55@gmail.com.
      </>
    )
  },
  {
    title: 'Intellectual Property Rights',
    content: (
      <>
        All and any intellectual property rights in connection with the services, content, and materials on this website shall be owned absolutely by Spiritual Healing with Meenal.
      </>
    )
  },
  {
    title: 'Law and Jurisdiction',
    content: (
      <>
        These terms shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts at Mathura, Uttar Pradesh.
      </>
    )
  },
  {
    title: 'Indemnification',
    content: (
      <>
        You agree to indemnify, defend and hold harmless Spiritual Healing with Meenal, its representatives, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages or costs arising from your use of this website, your breach of these Terms of Service, or infringement of any intellectual property right.
      </>
    )
  },
  {
    title: 'Violation & Termination',
    content: (
      <>
        You agree that Spiritual Healing with Meenal may, in its sole discretion and without prior notice, terminate your access to the website and block your future access if we determine that you have violated these Terms of Service or any other policies. If you or we terminate your use of any service, you shall still be liable to pay for any service that you have already ordered till the time of such termination.
      </>
    )
  },
  {
    title: 'Disclaimer',
    content: (
      <>
        IN NO EVENT WILL SPIRITUAL HEALING WITH MEENAL OR ITS REPRESENTATIVES BE LIABLE FOR ANY DAMAGES, ARISING OUT OF OR RELATED TO MISUSE OF PERSONAL INFORMATION OF THE CUSTOMER AND THE CUSTOMER IS SOLELY LIABLE FOR SUCH ACTS AND THEY ARE ADVISED NOT TO SHARE THEIR CONFIDENTIAL INFORMATION LIKE PASSWORDS, OTP, CREDIT/DEBIT CARD EXPIRY AND CVV WITH ANYONE EVEN THOUGH THEY CLAIM TO BE A SPIRITUAL HEALING WITH MEENAL EMPLOYEE. NONE OF OUR EMPLOYEES WILL ASK FOR SUCH CONFIDENTIAL INFORMATION.
        <br /><br />
        Spiritual healing services are provided for guidance and entertainment purposes only. We do not guarantee specific outcomes and recommend consulting qualified professionals for medical, legal, or financial advice.
      </>
    )
  },
  {
    title: 'Refund Policy',
    content: (
      <>
        No refunds will be provided once the consultation/session is booked and confirmed. In case of technical issues or unavoidable circumstances preventing the session, we will work with you to reschedule at a mutually convenient time.
      </>
    )
  },
  {
    title: 'Contact Information',
    content: (
      <>
        If you have any questions, comments or requests regarding our Terms of Service or the website please contact us at:
        <br /><br />
        <b>Email:</b> <a href="mailto:meenalkhandelwal55@gmail.com" className="text-purple-700 underline">meenalkhandelwal55@gmail.com</a><br />
        <b>Phone:</b> <a href="tel:+917017094225" className="text-purple-700 underline">+91 7017094225</a><br />
        <b>Location:</b> Mathura, Uttar Pradesh, India<br /><br />
        You can also reach us through our social media handles on Instagram and YouTube.
      </>
    )
  }
];

export default function TermsOfUse() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="font-philosopher text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            Terms of Use
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <motion.div
            variants={sectionVariants}
            className="mb-8"
          >
            <p className="text-gray-700 leading-relaxed">
              Spiritual Healing with Meenal reserves the right to review and withdraw or amend the services without notice. We will not be liable if for any reason this Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts or this entire Website.
            </p>
          </motion.div>

          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="mb-8"
            >
              <h2 className="font-philosopher text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={sectionVariants}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 