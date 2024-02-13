"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const faqData = [
  {
    question: "1.  WHAT INFORMATION DO WE COLLECT?",
    answer:
      'We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Personal Information Provided by You. We collect names; phone numbers; email addresses; mailing addresses; contact preferences; contact or authentication data; billing addresses; debit/credit card numbers; passwords; and other similar information. Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Worldpay, PayPal and AmazonPay. You may find their privacy notice link(s) here: https://online.worldpay.com/terms/privacy, https://www.paypal.com/uk/webapps/mpp/ua/privacy-full and https://pay.amazon.co.uk/help/201751600.',
  },
  {
    question: "2. HOW DO WE USE YOUR INFORMATION?",
    answer:
      'In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.',
  },
  {
    question: "3.  WILL YOUR INFORMATION BE SHARED WITH ANYONE?",
    answer:
      "In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose. Legitimate Interests:We may process your data when it is reasonably necessary to achieve our legitimate business interests. Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract. Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements). Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.",
  },
  {
    question: "4. WHO WILL YOUR INFORMATION BE SHARED WITH?",
    answer:
      "In Short: We only share information with the following categories of third parties. We only share and disclose your information with the following categories of third parties. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled HOW CAN YOU CONTACT US ABOUT THIS POLICY? Payment Processors Identity Verification Service Providers Order Fulfillment Service Providers Finance & Accounting Tools",
  },
  {
    question: "5.DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    answer:
      "In Short: We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.",
  },
  {
    question: "6. IDENTITY VERIFICATION",
    answer:
      "To ensure that your credit, debit or charge card is not being used without your consent and you are over the age of 18, we will validate name, address and other personal information supplied by you during the order process against appropriate third-party databases. By accepting these Terms and Conditions, you consent to such checks being made. In performing these checks, personal information provided by you may be disclosed to a registered Credit Reference Agency which may keep a record of that information. You can rest assured that this is done only to confirm your identity, that a credit check is not performed and that your credit rating will be unaffected. All information provided by you will be treated securely and strictly in accordance with the Data Protection Act 1998.",
  },
  {
    question: "7. RETURN/REFUNDS POLICY",
    answer:
      "Please review our Return Policy posted on the Site prior to making any purchases.",
  },
];
const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return (
    <>
      <div className="mt-28 mb-10" data-aos="fade-up">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px]   m-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-24  nav" >
          <h1 className="font-semibold text-[25px] sm:text-[30px] lg:text-2xl my-10 ">
            PRIVACY POLICY
          </h1>
          <div className=" ">
            <p>
              Last updated 13 January 2024
              <br />
              <br />
              At Speciality Drinks Ltd – here doing business as The Whisky
              Exchange (The Whisky Exchange we us or our) – we are are committed
              to protecting your personal information and your right to privacy.
              If you have any questions or concerns about this privacy notice or
              our practices with regard to your personal information, please
              contact us at dataprotection@thewhiskyexchange.com. <br />
              <br />
              This privacy notice describes how we might use your information if
              you: <br />
              <br />
              - Visit our website at https://www.thewhiskyexchange.com <br/>
              <br/> - Engage with
              us in other related ways ― including any sales, marketing, or
              events<br/>
              <br/> In this privacy notice, if we refer to: <br/>
              <br/>- Website we are
              referring to any website of ours that references or links to this
              policy<br/>
              <br/>- Services we are referring to our Website, and other related
              services, including any sales, marketing, or events<br/>
              <br/> The purpose of
              this privacy notice is to explain to you in the clearest way
              possible what information we collect, how we use it, and what
              rights you have in relation to it. If there are any terms in this
              privacy notice that you do not agree with, please discontinue use
              of our Services immediately.
            </p>
            {faqData.map((faq, index) => (
              <div key={index} className="mt-4 border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-[#6d6c6c] font-medium text-[16px] 2xl:text-[18px] py-3">
                    {faq.question}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`panel ${
                    activeIndex === index ? "show" : "hidden"
                  } text-gray-700 2xl:text-[18px] 2xl:leading-8 my-2 leading-7`}
                >
                  <p className="text-[16px] 2xl:text-[18px]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
