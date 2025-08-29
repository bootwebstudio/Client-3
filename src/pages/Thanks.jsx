import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Thanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inviteLink =
    location.state?.inviteLink || localStorage.getItem("inviteLink") || "";
  const DISCOUNT_PRICE = import.meta.env.VITE_DISCOUNT_PRICE;

  const handleDOWNLOAD = () => {
    if (inviteLink.trim()) {
      window.open(inviteLink, "_blank");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="w-full h-screen text-stone-800 bg-white font-['Space_Grotesk']">
      {inviteLink ? (
        <div className="w-full h-full p-6 xl:p-12 flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12">
          <h2 className="text-2xl md:text-4xl font-black text-center">
            🎉Wahoo! <br /> Puchase Successful.
          </h2>
          <p className="text-lg md:text-xl text-center">
            You have successfully purchased the ebook. Remember, it's a one-time
            link, so be careful. If you're facing any problem, contact us.
          </p>
          <button
            onClick={handleDOWNLOAD}
            className="w-full xl:w-fit mt-2 p-4 px-6 text-xl font-semibold text-center rounded text-white bg-green-600"
          >
            Get Instant Access
          </button>
        </div>
      ) : (
        <div className="w-full h-full p-6 xl:p-12 flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12">
          <h2 className="text-2xl md:text-4xl font-black text-center">
            Oops!
            <br />
          </h2>
          <p className="text-lg md:text-xl text-center">
            Looks like you didn't puschased the ebook. Click the link below to
            purchase the ebook, if you're facing any problem, contact us.
          </p>
          <button
            onClick={handleDOWNLOAD}
            className="w-full xl:w-fit mt-2 p-4 px-6 text-xl font-semibold text-center rounded text-white bg-green-600"
          >
            Get Instant Access for ₹{DISCOUNT_PRICE}
          </button>
        </div>
      )}
    </div>
  );
};

export default Thanks;
