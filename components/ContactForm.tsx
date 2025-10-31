'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Search, FileText, MessageCircle } from 'lucide-react';
import { contactFormSchema, sanitizeInput } from '@/lib/security';
import { formatPhoneNumber } from '@/lib/utils';
import { GOOGLE_FORMS_CONFIG } from '@/lib/google-forms-config';
import type { ContactFormData } from '@/types';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'contact' | 'results'>('contact');

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

  // Check URL parameters to open results tab and listen for custom event from header
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tab') === 'results') {
      setActiveTab('results');
    }

    // Listen for custom event from header navigation
    const handleOpenResultsTab = () => {
      setActiveTab('results');
    };

    window.addEventListener('openResultsTab', handleOpenResultsTab);

    return () => {
      window.removeEventListener('openResultsTab', handleOpenResultsTab);
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sanitizar dados
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email).toLowerCase(),
        phone: sanitizeInput(data.phone),
        message: data.message ? sanitizeInput(data.message) : '',
      };

      // Submit to Google Form
      const formData = new FormData();
      
      // Use configuration for field IDs
      formData.append(GOOGLE_FORMS_CONFIG.FIELDS.NAME, sanitizedData.name);
      formData.append(GOOGLE_FORMS_CONFIG.FIELDS.EMAIL, sanitizedData.email);
      formData.append(GOOGLE_FORMS_CONFIG.FIELDS.PHONE, sanitizedData.phone);
      formData.append(GOOGLE_FORMS_CONFIG.FIELDS.MESSAGE, sanitizedData.message);
      
      // Submit to Google Form
      const response = await fetch(`https://docs.google.com/forms/d/${GOOGLE_FORMS_CONFIG.FORM_ID}/formResponse`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Google Forms
      });

      // Since we use no-cors, we can't check response status
      // But if no error is thrown, assume success
      setSubmitStatus('success');
      reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Tabs */}
      <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
            activeTab === 'contact'
              ? 'bg-white text-biowox-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span className="font-medium">Entre em Contato</span>
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
            activeTab === 'results'
              ? 'bg-white text-biowox-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Search className="w-4 h-4" />
          <span className="font-medium">Consultar Resultados</span>
        </button>
      </div>

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors"
                    placeholder="(48) 9 9692-7323"
                    value={phoneValue ? formatPhoneNumber(phoneValue) : ''}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-biowox-500 hover:bg-biowox-600 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                  
                  {/* WhatsApp CTA Button */}
                  <button
                    type="button"
                    onClick={() => window.open('http://wa.me/+5548996927323', '_blank')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Fale conosco no WhatsApp</span>
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Erro ao enviar mensagem. Tente novamente.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-biowox-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <p className="text-gray-600">(48) 9 9692-7323</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-biowox-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-gray-600">laboratoriomedicobiowox@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-biowox-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Endereço</p>
                      <p className="text-gray-600">
                        Rua 13 de Maio, 167, Sala 4<br />
                        Tijucas - SC, 88200-180
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-biowox-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-biowox-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Consultar Resultados
                </h3>
                
                <p className="text-gray-600">
                  Acesse seus resultados de exames ocupacionais de forma rápida e segura.
                </p>
              </div>
              
              {/* Iframe Container */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-2xl">
                    <iframe
                      src="https://portal.worklabweb.com.br/resultados-on-line/3752"
                      name="I1"
                      width="100%"
                      height="135"
                      className="border-0 rounded-lg bg-white shadow-sm"
                      style={{ minHeight: '135px' }}
                      title="Consulta de Resultados - BioWox"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
