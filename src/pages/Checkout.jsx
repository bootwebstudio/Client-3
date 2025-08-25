import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Message from "../components/Message";

const Checkout = () => {
  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    coupon: "",
  });

  const [status, setStatus] = useState("");

  const handleCHANGE = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Checkout Form */}
      <div className="w-full h-full p-6 xl:p-12 flex flex-col xl:flex-row gap-6 xl:gap-12 items-stretch">
        <div className="w-full xl:w-1/2 h-[25vh] xl:h-auto rounded bg-stone-200"></div>

        <form className="w-full xl:w-1/2 flex flex-col gap-6">
          <input
            name="name"
            required
            placeholder="Full Name"
            onChange={handleCHANGE}
            className="p-4 border-2 rounded"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email Address"
            onChange={handleCHANGE}
            className="p-4 border-2 rounded"
          />
          <input
            name="telephone"
            required
            type="tel"
            placeholder="WhatsApp Number"
            onChange={handleCHANGE}
            className="p-4 border-2 rounded"
          />
          <input
            name="coupon"
            placeholder="Coupon Code (optional)"
            onChange={handleCHANGE}
            className="p-4 border-2 rounded"
          />
          <button className="p-4 text-xl font-semibold text-white bg-green-600 rounded">
            Get Instant Access for ₹{DISCOUNT_PRICE}
          </button>
        </form>

        {status === "failed" && <Message status="failed" />}
        {status === "success" && <Message status="success" />}
        {status === "loading" && <Message status="loading" />}
      </div>
    </div>
  );
};

export default Checkout;
