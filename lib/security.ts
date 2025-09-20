// Configuración de seguridad para BioWox
import { z } from 'zod';

// Esquemas de validación con Zod
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  
  email: z.string()
    .email('Email inválido')
    .max(100, 'Email deve ter no máximo 100 caracteres')
    .toLowerCase(),
  
  phone: z.string()
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(15, 'Telefone deve ter no máximo 15 dígitos')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Telefone deve conter apenas números e símbolos válidos'),
  
  message: z.string()
    .max(500, 'Mensagem deve ter no máximo 500 caracteres')
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Función para sanitizar inputs
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover caracteres potencialmente perigosos
    .replace(/\s+/g, ' '); // Normalizar espaços
}

// Función para validar rate limiting (simulada)
export function checkRateLimit(ip: string): boolean {
  // Em produção, isso seria implementado com Redis ou similar
  // Por agora, retornamos sempre true
  return true;
}

// Configurações de segurança
export const SECURITY_CONFIG = {
  MAX_FORM_SUBMISSIONS_PER_HOUR: 5,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutos
  CSRF_TOKEN_LENGTH: 32,
  PASSWORD_MIN_LENGTH: 8,
} as const;

// Headers de segurança
export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';",
} as const;
