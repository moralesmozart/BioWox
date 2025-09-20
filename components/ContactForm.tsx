'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { contactFormSchema, sanitizeInput } from '@/lib/security';
import { formatPhoneNumber } from '@/lib/utils';
import type { ContactFormData } from '@/types';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const phoneValue = watch('phone');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sanitizar dados
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email).toLowerCase(),
        phone: sanitizeInput(data.phone),
        message: data.message ? sanitizeInput(data.message) : undefined,
      };

      // Simular envio (em produção, seria uma chamada para API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simular sucesso/erro aleatório para demonstração
      const success = Math.random() > 0.3;
      
      if (success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+55 11 99999-9999',
      href: 'https://wa.me/5511999999999',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contato@biowox.com.br',
      href: 'mailto:contato@biowox.com.br',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Endereço',
      value: 'São Paulo, SP, Brasil',
      href: '#',
    },
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Estamos prontos para atender suas necessidades em microbiologia. 
              Entre em contato conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {info.label}
                  </div>
                  <div className="text-gray-600">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Solicite uma Proposta
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(11) 99999-9999"
                value={phoneValue ? formatPhoneNumber(phoneValue) : ''}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  e.target.value = formatted;
                }}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem (opcional)
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors resize-none"
                placeholder="Conte-nos mais sobre suas necessidades..."
              />
            </div>

            {/* Status de envio */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-800">
                  Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                </span>
              </motion.div>
            )}

            {/* Botão de envio */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
