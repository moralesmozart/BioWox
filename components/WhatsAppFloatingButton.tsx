'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const handleWhatsAppClick = () => {
    window.open('http://wa.me/+5548996927323', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
}
