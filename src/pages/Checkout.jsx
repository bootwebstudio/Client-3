import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Message from "../components/Message";

const Checkout = () => {
  const navigate = useNavigate();
  const formContainerRef = useRef(null);
  const [RAZORPAY_LOADED, SET_RAZORPAY_LOADED] = useState(false);

  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const [STATUS, SET_STATUS] = useState("");
  const [PRICE, SET_PRICE] = useState(DISCOUNT_PRICE);
  const [COUPON_STATUS, SET_COUPON_STATUS] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    coupon: "",
  });

  const handleCHANGE = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Available Coupons
  const COUPONS = { CREATOR50: 200 };

  const APPLIED_COUPON = () => {
    const CODE = formData.coupon.toUpperCase();
    if (COUPONS[CODE]) {
      const NEW_PRICE = DISCOUNT_PRICE - COUPONS[CODE];
      SET_PRICE(NEW_PRICE > 0 ? NEW_PRICE : 0);
      SET_COUPON_STATUS("coupon-success");
      setTimeout(() => SET_COUPON_STATUS(""), 3000);
    } else {
      SET_PRICE(DISCOUNT_PRICE);
      SET_COUPON_STATUS("coupon-failed");
      setTimeout(() => SET_COUPON_STATUS(""), 3000);
    }
  };

  const handleFORM = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => SET_RAZORPAY_LOADED(true);
    document.body.appendChild(script);
  }, []);

  const handlePAYMENT = async () => {
    if (!RAZORPAY_LOADED) {
      SET_STATUS("failed");
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: PRICE * 100,
      currency: "INR",
      name: "Scaling Rs. 1K - 10K",
      description:
        "You're purchasing Scaling Rs. 1K - 10K in Just a Month ebook",
      // image: BrandLogo,
      handler: async function (response) {
        try {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          // ✅ send data to backend
          await axios.post("https://vaibhav-ebook.vercel.app/api/sendUserData", {
            ...formData,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            signature: razorpay_signature,
          });

          // ✅ generate invite link from backend
          const linkRes = await axios.post(
            "https://vaibhav-ebook.vercel.app/api/generateInviteLink",
            { email: formData.email }
          );

          const inviteLink = linkRes.data.inviteLink;

          if (!inviteLink) throw new Error("Failed to generate invite link");

          // ✅ save & navigate
          localStorage.setItem("inviteLink", inviteLink);
          SET_STATUS("success");
          navigate("/thanks", { state: { inviteLink } });
        } catch (err) {
          console.error("Post-payment error:", err.message);
          SET_STATUS("failed");
        }
      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.telephone,
      },
      theme: { color: "#E30A03" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div
      ref={formContainerRef}
      className="w-full h-full text-stone-800 bg-white font-['Space_Grotesk']"
    >
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

        <form
          onSubmit={handleFORM}
          className="w-full xl:w-1/2 flex flex-col gap-6"
        >
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

          {/* Coupon Code */}
          <div className="w-full flex gap-2 xl:gap-4">
            <input
              name="coupon"
              placeholder="Coupon Code (optional)"
              onChange={handleCHANGE}
              className="w-full p-4 border-2 rounded"
            />
            <button
              type="button"
              onClick={APPLIED_COUPON}
              className="px-4 md:px-8 text-lg rounded text-white bg-green-600"
            >
              Apply
            </button>
          </div>

          <button
            onClick={handlePAYMENT}
            className="p-4 text-xl font-semibold text-white bg-green-600 rounded"
          >
            Get Instant Access for ₹{PRICE}
          </button>
        </form>

        {/* COUPON STATUS */}
        {COUPON_STATUS === "coupon-failed" && <Message status="couponFailed" />}
        {COUPON_STATUS === "coupon-success" && (
          <Message status="couponSuccess" />
        )}

        {/* PAYMENT STATUS */}
        {STATUS === "failed" && <Message status="failed" />}
        {STATUS === "success" && <Message status="success" />}
        {STATUS === "loading" && <Message status="loading" />}
      </div>
    </div>
  );
};

export default Checkout;
