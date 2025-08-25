import React from "react";
import { useLocation } from "react-router-dom";

const Thanks = () => {
  const location = useLocation();
  const telegramLink = location.state?.telegramLink;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-white text-stone-800">
      <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h1>
      <p className="mb-6">
        Thank you for your purchase. Click below to join your private group:
      </p>
      {telegramLink ? (
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Join Telegram Group
        </a>
      ) : (
        <p className="text-red-500">No link found. Contact support.</p>
      )}
    </div>
  );
};

export default Thanks;
