'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('http://wa.me/+5548996927323', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/biowox-logo.png"
                    alt="BioWox Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <span className="text-2xl font-bold">
                  Bio<span className="text-biowox-400">Wox</span>
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Laboratório médico especialista em exames laboratoriais voltado para área de saúde ocupacional. 
                Com foco em empresas dos setores de alimentos, suplementos e manipulação.
              </p>
            </motion.div>
          </div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-biowox-400" />
                <span className="text-gray-300">(48) 9 9692-7323</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-biowox-400" />
                <span className="text-gray-300">laboratoriomedicobiowox@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-biowox-400 mt-1" />
                <div className="text-gray-300">
                  <p>Rua 13 de Maio, 167, Sala 4</p>
                  <p>Tijucas - SC, 88200-180</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#para-quem" className="block text-gray-300 hover:text-biowox-400 transition-colors">
                Para quem é a BioWox
              </a>
              <a href="#diferenciais" className="block text-gray-300 hover:text-biowox-400 transition-colors">
                Nossos Diferenciais
              </a>
              <a href="#compromisso" className="block text-gray-300 hover:text-biowox-400 transition-colors">
                Nosso Compromisso
              </a>
              <a href="#contato" className="block text-gray-300 hover:text-biowox-400 transition-colors">
                Contato
              </a>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 BioWox. Todos os direitos reservados.
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale conosco no WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
