"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Who retains ownership of the character art?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You retain full ownership of the character art created using our
        service. We provide you with a commercial license, granting you the
        rights to use the art for any purpose.
      </div>
    ),
  },
  {
    question: "How can I obtain an invoice for my purchase?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        To receive an invoice for your purchase, simply navigate to the invoice
        page after completing your transaction. Enter your details and save the
        invoice as a PDF for your records.
      </div>
    ),
  },
  {
    question: "Is there a limit to the number of characters I can create?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        No, there are no restrictions on the number of characters you can create
        using our service. Feel free to create as many characters as you need.
      </div>
    ),
  },
  {
    question: "What art styles are available for character creation?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We offer a wide range of art styles to suit your preferences. From
        realistic to cartoonish, fantasy to sci-fi, you&apos;ll find various styles
        to bring your characters to life.
      </div>
    ),
  },
  {
    question: "Can I customize the appearance of my characters?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, our platform allows you to customize every aspect of your
        character&apos;s appearance. From their facial features to their clothing and
        accessories, you have full control over the design process.
      </div>
    ),
  },
  {
    question: "Do I need artistic skills to use your service?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        No artistic skills are required to use our service. Our user-friendly
        interface and intuitive tools make it easy for anyone to create stunning
        character art.
      </div>
    ),
  },
  {
    question: "What is the process to access fullbody images?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our free character creator allows you to generate preview portraits. To
        access and download fullbody images, you&apos;ll need to make a one-time
        payment.
      </div>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We accept a variety of payment methods, including credit/debit cards,
        PayPal, and bank transfers. Choose the option that is most convenient
        for you during the checkout process.
      </div>
    ),
  },
  {
    question: "Can I cancel my character art purchase?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        If you haven&apos;t downloaded the character art and it&apos;s within 14 days of
        purchase, you can request a refund. However, once the art is downloaded,
        the purchase becomes final and non-refundable.
      </div>
    ),
  },
  {
    question: "What is your refund policy?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We offer a full refund within 14 days of purchase if the character art
        has not been downloaded. After the 14-day period or if the art has been
        downloaded, refunds are not available.
      </div>
    ),
  },
  {
    question: "Are there any restrictions on the usage of the character art?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        There are no restrictions on how you can use the character art created
        using our service. You have the freedom to use the art in any way you
        see fit, without limitations.
      </div>
    ),
  },
  {
    question: "Is there a customer support team available for assistance?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, we have a dedicated customer support team available to assist you
        with any questions or concerns you may have. Feel free to reach out to
        us via email or live chat for prompt assistance.
      </div>
    ),
  },
  {
    question: "Can I request custom features or art styles?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        While we strive to offer a diverse range of features and art styles, we
        are always open to feedback and suggestions from our users. If you have
        specific requests or ideas, please don&apos;t hesitate to let us know, and
        we&apos;ll do our best to accommodate them.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
