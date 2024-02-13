"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "1. AGREEMENT TO TERMS",
    answer:
      'These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Speciality Drinks Limited, doing business as The Whisky Exchange ("The Whisky Exchange", "we", "us", or"our"), concerning your access to and use of the https://thewhiskyexchange.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").  We are registered in England & Wales and have our registered office at Elixir House, Whitby Avenue, Park Royal, London NW10 7SF. Our company registration number is 4449145. Our VAT number is GB364951176. Our EORI number is GB364951176000. We are licensed to sell alcohol.You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the "Last updated" date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply.You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.',
  },
  {
    question: "2. INTELLECTUAL PROPERTY RIGHTS",
    answer:
      'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the UK, United States, international copyright laws, and international conventions.The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.',
  },
  {
    question: "3. USER REPRESENTATIONS",
    answer:
      "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorised purpose; and (7) your use of the Site will not violate any applicable law or regulation.If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).",
  },
  {
    question: "4. USER REGISTRATION",
    answer:
      "You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.",
  },
  {
    question: "5.PRODUCT",
    answer:
      "We make every effort to display as accurately as possible the colours, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colours, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colours and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change. Where applicable, presentation boxes will only be supplied with a bottle where they are depicted in the product photograph, please note that presentation boxes may be packed separately to protect them in transit.",
  },
  {
    question: "6. PURCHASES AND PAYMENT",
    answer:
      "You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. VAT and any relevant sales tax and duties will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in British Pounds unless another currency is selected. You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.",
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
  return (
    <>
      <div className="mt-28 mb-10" data-aos="fade-up">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px]   m-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-24  nav" >
          <h1 className="font-semibold text-[25px] sm:text-[30px] lg:text-2xl my-10 ">
            TERMS & CONDITIONS
          </h1>
          <div className=" ">
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
