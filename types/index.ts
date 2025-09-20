// Tipos TypeScript para BioWox

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface DifferentialCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  step: number;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  certification?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  address: string;
  phone: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
  repeat: boolean;
}

export interface FloatingIcon {
  id: string;
  icon: string;
  position: {
    x: number;
    y: number;
  };
  animation: AnimationConfig;
  size: 'sm' | 'md' | 'lg';
}

// Props para componentes
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundGradient: string;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  hover?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}
