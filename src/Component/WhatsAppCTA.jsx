import React from "react";

const WhatsAppCTA = ({ message, label }) => {
  const phoneNumber = "917017279562";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="mt-3.75 md:mt-5 cursor-pointer border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-bold transition duration-300"
    >
      {label}
    </button>
  );
};

export default WhatsAppCTA;