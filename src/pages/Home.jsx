import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Icons
import { RiAddLargeLine } from "react-icons/ri";

const problems = [
  "You've watched dozens of YouTube videos but still don't know where to start.",
  "You're scared of losing money because you've seen others blow up their accounts.",
  "Every expert makes things sound complicated on purpose — so you stay confused.",
  "You think you need ₹50,000 to even begin.",
];

const solutions = [
  "Step-by-step beginner's guide — from account setup to first profitable trade.",
  "Start with ₹1,000, low-risk strategies, and a full money-back guarantee.",
  "Simple eBook + 15-min QuickStart video — zero jargon, zero fluff.",
  "Built for complete beginners, tested successfully, or you pay nothing.",
];

const valueStack = [
  {
    name: "Main e-book (Value ₹499)",
    brief:
      "Scaling ₹1K - ₹10K in 30 Days — A step-by-step guide for absolute beginners.",
  },
  {
    name: "Quick Start Video (Value ₹299)",
    brief: "Set up your trading account & start in 1 day.",
  },
  {
    name: "Cheat Sheet PDF (Value ₹199)",
    brief: "3 low-risk strategies you can apply instantly.",
  },
  {
    name: "Exclusive Telegram Group (Value ₹299)",
    brief: "Ask questions, share progress, stay accountable.",
  },
  {
    name: "30-Day Profit Guarantee",
    brief: "Make at least ₹5,000 or get 100% of your money back.",
  },
];

const testimonials = [
  {
    name: "Arjun",
    review:
      "I always thought trading was risky. Tried this with just ₹1,000 and made ₹3,200 in 3 weeks. Super simple to follow!",
  },
  {
    name: "Neha",
    review:
      "I've tried so many finance courses. This one actually worked — easy to follow and no big jargon",
  },
  {
    name: "Harish",
    review:
      "The cheat sheet saved me from making stupid mistakes. Already doubled my money in 2 weeks.",
  },
  {
    name: "Sahil",
    review:
      "I was always scared of investing because I thought I'd lose money. I started with ₹1,500 and ended the month with ₹6,800.",
  },
];

const faqs = [
  {
    question: "Do I need any prior trading experience?",
    answer:
      "Nope. This is designed for total beginners. If you can use WhatsApp, you can follow this.",
  },
  {
    question: "What if I lose my money?",
    answer:
      "The methods focus on small, low-risk steps. Plus, if you don't make at least ₹5,000 in 30 days, we'll refund you in full.",
  },
  {
    question: "How do I get the eBook after payment?",
    answer:
      "Instantly. Once you pay, you'll receive the download link on the website.",
  },
  {
    question: "Do I need to sit in front of the screen all day?",
    answer: "Not at all! You'll spend 1 - 2 hours a day at most.",
  },
  {
    question: "Can I pay using UPI or PhonePe?",
    answer: "Yes. We accept all UPI, debit/credit cards via Razorpay.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "You can keep using the strategies forever. If you want more, you can join our advanced training (optional).",
  },
];

const Home = () => {
  const ORIGINAL_PRICE = import.meta.env.VITE_ORIGINAL_PRICE;
  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;
  const targetDate = new Date(import.meta.env.VITE_TARGET_DATE).getTime();

  const [openIndex, setOpenIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0)
      return { DAYS: 0, HOURS: 0, MINUTES: 0, secondsSECONDS: 0 };

    return {
      DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
      HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
      MINUTES: Math.floor((difference / 1000 / 60) % 60),
      SECONDS: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full text-stone-800 bg-white font-['Space_Grotesk']">
      {/* Infinite Text Scroll */}
      <div
        id="Infinite-Scroll"
        className="w-full p-2 overflow-hidden text-white bg-green-600"
      >
        <div className="space-x-6 flex whitespace-nowrap animate-scroll">
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
          <span>Scaling Rs. 1K - 10K in Just a Month</span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        id="Home"
        className="w-full h-full p-6 xl:p-12 flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch"
      >
        <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded bg-stone-200"></div>
        <div className="w-full xl:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-black text-center xl:text-left">
            Scaling Rs. 1K - 10K in Just a Month — Without Complex Trading or
            Experience
          </h2>
          <p className="text-lg md:text-xl text-center xl:text-left">
            This e-book shows you exactly how to turn Rs. 1K - 10K in Just a
            Month or less. No big words, no confusing charts — just simple,
            clear steps you can follow even if you've never invested before. If
            you've been stuck wondering where to start, this guide is your
            shortcut to growing your money the smart way.
          </p>
          <p className="text-lg md:text-xl text-center xl:text-left font-semibold">
            Teached over 1000+ students online.
          </p>
          <Link
            to="/checkout"
            className="w-full xl:w-fit p-4 px-6 text-xl font-semibold rounded text-white bg-green-600"
          >
            Get Instant Access for ₹{DISCOUNT_PRICE}
          </Link>
        </div>
      </div>

      {/* Problems Section */}
      <div
        id="Problems"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Why You're Still Not Making Money Online?
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          I know because I was where you are. And that's why I created a simple
          system for people like you — start small, learn fast, and see real
          results.
        </p>
        {/* Problems */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-stone-200"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <p className="text-lg md:text-xl">{problem}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div
        id="Solutions"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          What If You Could Start With Just ₹1K and Watch It Grow to ₹10K in
          Just a Month?
        </h2>
        {/* Solutions */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-stone-200"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <p className="text-lg md:text-xl">{solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Stack Section */}
      <div
        id="Value"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          You're Not Just Getting an eBook — You're Getting a Complete Starter
          Kit
        </h2>
        <div className="w-full h-full flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch">
          {/* Image */}
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded bg-stone-200"></div>
          {/* Value Stack */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6">
            {/* Values */}
            {valueStack.map((value, index) => (
              <div key={index} className="space-x-2">
                <span className="text-lg md:text-xl font-semibold">
                  {value.name}:
                </span>
                <span className="text-lg md:text-xl">{value.brief}</span>
              </div>
            ))}
            {/* Prices */}
            <div className="space-x-2">
              <span className="text-lg md:text-xl font-semibold">
                Total Starter Kit Price:
              </span>
              <span className="text-lg md:text-xl font-semibold line-through">
                ₹{ORIGINAL_PRICE}
              </span>
              <span className="text-lg md:text-xl font-semibold">
                ₹{DISCOUNT_PRICE}
              </span>
              <span className="text-lg md:text-xl font-semibold text-green-600">
                (
                {Math.round(((ORIGINAL_PRICE - DISCOUNT_PRICE) / ORIGINAL_PRICE) * 100)}
                % OFF)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        id="Testimonials"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          See What Beginners Like You Are Saying
        </h2>
        {/* Testimonials */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full p-6 flex gap-6 rounded bg-stone-200"
            >
              <h2 className="text-2xl md:text-4xl font-black">#{index + 1}</h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-xl">{testimonial.review}</p>
                <p className="text-lg md:text-xl font-semibold">
                  —{testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee Section */}
      <div
        id="Guarantee"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Either It Works, or You Pay Nothing
        </h2>
        <p className="w-full md:[75%] xl:w-1/2 text-lg md:text-xl text-center">
          Try this for 30 days. If you don't make at least ₹5,000 using the
          exact methods inside, email me and I'll refund you in full. No
          questions asked.
        </p>
        {/* CTA */}
        <div className="w-full h-full flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch">
          {/* Image */}
          <div className="w-full xl:w-1/2 h-[25vh] sm:h-[35vh] xl:h-auto rounded bg-stone-200"></div>
          {/* Offer */}
          <div className="w-full xl:w-1/2 p-6 flex flex-col gap-6 rounded bg-stone-200">
            <div className="w-full flex gap-6">
              {[
                { label: "DAY", value: timeLeft.DAYS },
                { label: "HOUR", value: timeLeft.HOURS },
                { label: "MIN", value: timeLeft.MINUTES },
                { label: "SEC", value: timeLeft.SECONDS },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 min-w-0 flex flex-col items-center gap-2 flex-1"
                >
                  <span className="w-full p-6 px-0 text-2xl md:text-4xl font-semibold text-center rounded bg-white">
                    {item.value}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/checkout"
              className="w-full p-4 px-6 text-xl font-semibold text-center rounded text-white bg-green-600"
            >
              Get Instant Access for ₹{DISCOUNT_PRICE}
            </Link>
            <p className="text-lg md:text-xl text-center font-semibold">
              This launch price of ₹{DISCOUNT_PRICE} is strictly for the first
              100 buyers after that, it goes to ₹499.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div
        id="FAQs"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Common Questions People Ask Before Starting
        </h2>
        {/* FAQs */}
        <div className="w-full xl:w-[60%] flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded border-2 border-stone-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg md:text-xl font-medium"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 225 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiAddLargeLine size="16px" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 pt-0 md:text-lg text-stone-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Free Trial Section */}
      <div
        id="Trial"
        className="w-full h-full p-6 xl:p-12 flex flex-col items-center gap-6 xl:gap-12"
      >
        <h2 className="w-full md:w-[80%] xl:w-[60%] text-2xl md:text-4xl font-black text-center">
          Still Not Sure? Download Chapter 1 Free
        </h2>
        <p className="w-full md:w-[80%] xl:w-1/2 text-lg md:text-xl text-center">
          Get the first chapter of Scaling Rs. 1K - 10K in Just a Month for
          absolutely FREE and see yourself how simple it is.
        </p>
        <button className="w-full md:w-1/2 xl:w-fit p-4 px-6 text-xl font-semibold space-x-2 rounded text-white bg-green-600">
          Download Chapter 1 Free
        </button>
      </div>

      {/* Footer Section */}
      <footer className="w-full h-full mt-12 text-stone-200 bg-black">
        <div className="w-full xl:w-[100%] mx-auto p-6 xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* About */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">
              Scaling Rs. 1K - 10K
            </h2>
            <p className="text-lg">
              Helping beginners grow their money the smart, simple way.
            </p>
          </div>

          {/* Useful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold mb-2 text-white">
                Quick Links
              </h4>
              <a href="#Problems" className="text-lg hover:underline">
                Why You're Struggling
              </a>
              <a href="#Solutions" className="text-lg hover:underline">
                How It Works
              </a>
              <a href="#Value" className="text-lg hover:underline">
                What's Inside
              </a>
              <a href="#FAQs" className="text-lg hover:underline">
                FAQs
              </a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold mb-2 text-white">Company</h4>
              <Link to="/help-support" className="text-lg hover:underline">
                Help & Support
              </Link>
              <Link to="/privacy-policies" className="text-lg hover:underline">
                Privacy Policies
              </Link>
              <Link to="/terms-conditions" className="text-lg hover:underline">
                Terms & Conditions
              </Link>
              <Link to="/refund-policies" className="text-lg hover:underline">
                Refund Policy
              </Link>
              <Link to="/shipping-policies" className="text-lg hover:underline">
                Shipping Policy
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold mb-2 text-white">Contact</h4>
              <a href="mailto:" className="text-lg hover:underline">
                Email Us
              </a>
              <a href="mailto:" className="text-lg hover:underline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="p-4 text-sm text-center border border-x-0 border-stone-200">
          © {new Date().getFullYear()} Scaling Rs. 1K - 10K. All rights
          reserved.
        </div>

        {/* MFP Promotion */}
        <div className="p-4 text-center bg-[#1a1a1a]">
          <p className="text-sm">
            This website is powered by{" "}
            <a
              href="https://www.instagram.com/magnetfunnelspro/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 hover:text-green-400 transition"
            >
              Magnet Funnels Pro
            </a>{" "}
            — client acquistions systems.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
