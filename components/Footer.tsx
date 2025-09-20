'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    href: '#',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    href: '#',
    color: 'hover:text-pink-600',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: '#',
    color: 'hover:text-blue-700',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: '#',
    color: 'hover:text-blue-400',
  },
];

const quickLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Segurança', href: '#seguranca' },
  { name: 'Contato', href: '#contato' },
];

const services = [
  'Análise Microbiológica',
  'Identificação de Patógenos',
  'Testes de Sensibilidade',
  'Controle de Qualidade',
  'Consultoria Científica',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              {/* Logo molecular */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-12 h-12"
              >
                {/* Círculo principal con gradiente */}
                <div className="w-12 h-12 bg-gradient-to-b from-biowox-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  {/* Diseño molecular interno */}
                  <svg width="30" height="30" viewBox="0 0 50 50" className="text-white">
                    {/* Puntos centrales */}
                    <circle cx="25" cy="25" r="2" fill="white" opacity="0.9" />
                    <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="30" cy="20" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="20" cy="30" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.7" />
                    
                    {/* Puntos periféricos */}
                    <circle cx="25" cy="10" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="25" cy="40" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="10" cy="25" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="40" cy="25" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="15" cy="15" r="2" fill="white" opacity="0.6" />
                    <circle cx="35" cy="15" r="2" fill="white" opacity="0.6" />
                    <circle cx="15" cy="35" r="2" fill="white" opacity="0.6" />
                    <circle cx="35" cy="35" r="2" fill="white" opacity="0.6" />
                    
                    {/* Líneas conectoras */}
                    <line x1="25" y1="25" x2="25" y2="10" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="25" y2="40" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="10" y2="25" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="40" y2="25" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="15" y2="15" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="35" y2="15" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="15" y2="35" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="35" y2="35" stroke="white" strokeWidth="0.3" opacity="0.3" />
                  </svg>
                </div>
                
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-biowox-400/20 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
              <span className="text-2xl font-bold">
                Bio<span className="biowox-gradient-text">Wox</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              O futuro da microbiologia já chegou. Precisão, tecnologia e saúde em cada resultado.
            </p>
            
            {/* Certificações */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-biowox-500" />
                Certificado ANVISA
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-biowox-500" />
                ISO 15189
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-biowox-500" />
                Resultados em 24h
              </div>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-biowox-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <div className="font-medium">+55 11 99999-9999</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">contato@biowox.com.br</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Endereço</div>
                  <div className="font-medium">São Paulo, SP, Brasil</div>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-4">Siga-nos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} BioWox. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-biowox-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-biowox-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-biowox-400 transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
