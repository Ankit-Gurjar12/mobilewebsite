import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-6 z-50">
      <a
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} className="md:size-28" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
