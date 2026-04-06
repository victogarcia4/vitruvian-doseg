'use client';

import { useState } from 'react';
import { CheckIcon, GlobeAltIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon, ClockIcon, SparklesIcon, FireIcon, ScaleIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { ContactForm } from "@/components/ui/contact-form";
import { GlowCard } from '@/components/ui/spotlight-card';
import { ShinyButton } from '@/components/ui/shiny-button';
import { GradientCard } from '@/components/ui/gradient-card';
import { FAQAccordion } from '@/components/ui/faq-accordion';

type Language = 'en' | 'es';

interface Translation {
  nav: {
    features: string;
    testimonials: string;
    calculators: string;
    pricing: string;
    contact: string;
    faq: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: Array<{
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }>;
  };
  calculators: {
    title: string;
    subtitle: string;
    temperature: { title: string; celsius: string; fahrenheit: string; kelvin: string; };
    weight: { title: string; kg: string; lbs: string; g: string; mg: string; oz: string; };
    height: { title: string; cm: string; m: string; };
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string; }>;
  };
}

const translations: Record<Language, Translation> = {
  en: {
    nav: {
      features: 'Features',
      testimonials: 'Testimonials',
      calculators: 'Calculators',
      pricing: 'Pricing',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      badge: '🎓 AI-Powered Math Education for Nurses',
      headline: 'Master Math for Nurses with Confidence',
      subheadline: 'DoseGennie uses AI to help nurses conquer dosage calculations, drug conversions, and IV drip rates with personalized learning paths.',
      cta: 'Enroll in Math for Nurses Course',
      secondaryCta: 'Watch Course Demo'
    },
    features: {
      title: 'Everything You Need to Excel',
      subtitle: 'Comprehensive AI-powered tools designed specifically for nursing math',
      items: [
        {
          title: 'AI-Personalized Learning',
          description: 'Adaptive lessons that adjust to your pace and learning style, ensuring you master each concept before moving forward.'
        },
        {
          title: 'Real-World Scenarios',
          description: 'Practice with actual clinical situations you\'ll encounter on the job, from pediatric dosing to critical care calculations.'
        },
        {
          title: 'Instant Feedback',
          description: 'Get immediate explanations for every answer, helping you understand not just what\'s correct, but why.'
        },
        {
          title: 'Progress Tracking',
          description: 'Visualize your improvement with detailed analytics and identify areas that need more practice.'
        },
        {
          title: 'Mobile Learning',
          description: 'Study anytime, anywhere with our responsive platform that works seamlessly on all devices.'
        },
        {
          title: 'Expert Support',
          description: 'Access to nursing educators and pharmacology experts when you need extra help.'
        }
      ]
    },
    testimonials: {
      title: 'Trusted by Nurses Worldwide',
      subtitle: 'Join thousands of nursing professionals who have improved their math confidence',
      items: [
        {
          name: 'Sarah Johnson, RN',
          role: 'ICU Nurse, 3 years',
          content: 'DoseGennie transformed how I approach medication calculations. The AI explanations helped me understand WHY formulas work, not just memorize them. I feel so much more confident on the floor now.',
          rating: 5
        },
        {
          name: 'Michael Chen, BSN',
          role: 'New Graduate Nurse',
          content: 'As a new grad, I was terrified of making dosage errors. This platform gave me the practice and confidence I needed. The real-world scenarios are exactly what I face in my ED shifts.',
          rating: 5
        },
        {
          name: 'Dr. Maria Rodriguez',
          role: 'Nursing Educator',
          content: 'I recommend DoseGennie to all my students. The adaptive learning technology ensures no one falls through the cracks, and the progress tracking helps me identify who needs extra support.',
          rating: 5
        }
      ]
    },
    pricing: {
      title: 'Choose Your Learning Path',
      subtitle: 'Flexible plans designed for every stage of your nursing career',
      plans: [
        {
          name: 'Student',
          price: '$9',
          period: '/month',
          description: 'Perfect for nursing students and new graduates',
          features: [
            'Access to all basic math modules',
            'AI-powered practice problems',
            'Mobile app access',
            'Progress tracking',
            'Community forum access'
          ],
          cta: 'Start Free Trial'
        },
        {
          name: 'Professional',
          price: '$29',
          period: '/month',
          description: 'For practicing nurses seeking to sharpen skills',
          features: [
            'Everything in Student plan',
            'Advanced clinical scenarios',
            'Specialty-specific modules (ICU, Peds, ER)',
            'Certificate of completion',
            'Priority email support',
            'Continuing education credits'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Institution',
          price: 'Custom',
          period: 'pricing',
          description: 'For hospitals, schools, and healthcare organizations',
          features: [
            'Everything in Professional plan',
            'Unlimited user licenses',
            'Custom learning paths',
            'Advanced analytics dashboard',
            'Dedicated account manager',
            'API integration support'
          ],
          cta: 'Contact Sales'
        }
      ]
    },
    calculators: {
      title: 'Free Unit Calculators',
      subtitle: 'Quick conversions for everyday clinical use — temperature, weight, and height',
      temperature: {
        title: 'Temperature',
        celsius: 'Celsius (°C)',
        fahrenheit: 'Fahrenheit (°F)',
        kelvin: 'Kelvin (K)',
      },
      weight: {
        title: 'Weight',
        kg: 'Kilograms (kg)',
        lbs: 'Pounds (lbs)',
        g: 'Grams (g)',
        mg: 'Milligrams (mg)',
        oz: 'Ounces (oz)',
      },
      height: {
        title: 'Height',
        cm: 'Centimeters (cm)',
        m: 'Meters (m)',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about DoseGennie plans and features',
      items: [
        { question: 'What are the plan prices?', answer: 'We offer several plans: Free trial (up to 10 conversions without credit card and lessons 0 and 1 of the course), Student ($9/month), Professional ($29/month) and Institutional (custom price, consult with sales).' },
        { question: 'What does the Student plan include?', answer: 'It costs $9/month and includes access to all basic math modules, AI-powered practice problems, access to the mobile app, progress tracking, and access to the community forum.' },
        { question: 'What does the Professional plan include?', answer: 'It costs $29/month and is for practicing nurses looking to enhance their skills. It includes everything in the Student plan, advanced clinical scenarios, specialty-specific modules (ICU, Pediatrics, ER), a certificate of completion, priority email support, and continuing education credits.' },
        { question: 'What does the Institutional plan include?', answer: 'Customized pricing available, please consult with the sales department.' },
        { question: 'How can I subscribe?', answer: 'Create a free account and then select the plan that best suits you.' },
        { question: 'What are the differences between the Student, Professional, and Institutional plans?', answer: 'Student ($9/month) offers basic modules and study tools. Professional ($29/month) adds advanced clinical scenarios, specialty modules, and certificates for nurses. Institutional offers customized pricing for organizations.' },
        { question: 'How do I contact customer support or service?', answer: 'You can contact us through our message form.' }
      ]
    }
  },
  es: {
    nav: {
      features: 'Características',
      testimonials: 'Testimonios',
      calculators: 'Calculadoras',
      pricing: 'Precios',
      contact: 'Contacto',
      faq: 'FAQ'
    },
    hero: {
      badge: '🎓 Educación Matemática con IA para Enfermeros',
      headline: 'Domina Matemáticas para Enfermeros con Confianza',
      subheadline: 'DoseGennie usa IA para ayudar a enfermeros a conquistar cálculos de dosificación, conversiones de medicamentos y velocidades de goteo IV con rutas de aprendizaje personalizadas.',
      cta: 'Inscríbete en el Curso de Matemáticas para Enfermeros',
      secondaryCta: 'Ver Demo del Curso'
    },
    features: {
      title: 'Todo lo que Necesitas para Sobresalir',
      subtitle: 'Herramientas completas con IA diseñadas específicamente para matemáticas de enfermería',
      items: [
        {
          title: 'Aprendizaje Personalizado con IA',
          description: 'Lecciones adaptativas que se ajustan a tu ritmo y estilo de aprendizaje, asegurando que domines cada concepto antes de avanzar.'
        },
        {
          title: 'Escenarios del Mundo Real',
          description: 'Practica con situaciones clínicas reales que encontrarás en el trabajo, desde dosificación pediátrica hasta cálculos de cuidados críticos.'
        },
        {
          title: 'Retroalimentación Instantánea',
          description: 'Obtén explicaciones inmediatas para cada respuesta, ayudándote a entender no solo qué es correcto, sino por qué.'
        },
        {
          title: 'Seguimiento de Progreso',
          description: 'Visualiza tu mejora con análisis detallados e identifica áreas que necesitan más práctica.'
        },
        {
          title: 'Aprendizaje Móvil',
          description: 'Estudia en cualquier momento y lugar con nuestra plataforma responsive que funciona perfectamente en todos los dispositivos.'
        },
        {
          title: 'Soporte Experto',
          description: 'Acceso a educadores de enfermería y expertos en farmacología cuando necesites ayuda adicional.'
        }
      ]
    },
    testimonials: {
      title: 'Confiado por Enfermeros en Todo el Mundo',
      subtitle: 'Únete a miles de profesionales de enfermería que han mejorado su confianza en matemáticas',
      items: [
        {
          name: 'Sarah Johnson, RN',
          role: 'Enfermera UCI, 3 años',
          content: 'DoseGennie transformó cómo abordo los cálculos de medicamentos. Las explicaciones de IA me ayudaron a entender POR QUÉ funcionan las fórmulas, no solo memorizarlas. Ahora me siento mucho más segura.',
          rating: 5
        },
        {
          name: 'Michael Chen, BSN',
          role: 'Enfermero Recién Graduado',
          content: 'Como recién graduado, tenía terror de cometer errores de dosificación. Esta plataforma me dio la práctica y confianza que necesitaba. Los escenarios del mundo real son exactamente lo que enfrento en mis turnos de urgencias.',
          rating: 5
        },
        {
          name: 'Dra. Maria Rodriguez',
          role: 'Educadora de Enfermería',
          content: 'Recomiendo DoseGennie a todos mis estudiantes. La tecnología de aprendizaje adaptativo asegura que nadie quede atrás, y el seguimiento del progreso me ayuda a identificar quién necesita apoyo adicional.',
          rating: 5
        }
      ]
    },
    pricing: {
      title: 'Elige tu Camino de Aprendizaje',
      subtitle: 'Planes flexibles diseñados para cada etapa de tu carrera de enfermería',
      plans: [
        {
          name: 'Estudiante',
          price: '$9',
          period: '/mes',
          description: 'Perfecto para estudiantes de enfermería y recién graduados',
          features: [
            'Acceso a todos los módulos básicos de matemáticas',
            'Problemas de práctica con IA',
            'Acceso a app móvil',
            'Seguimiento de progreso',
            'Acceso al foro comunitario'
          ],
          cta: 'Comenzar Prueba Gratis'
        },
        {
          name: 'Profesional',
          price: '$29',
          period: '/mes',
          description: 'Para enfermeros en ejercicio que buscan mejorar habilidades',
          features: [
            'Todo en el plan Estudiante',
            'Escenarios clínicos avanzados',
            'Módulos específicos por especialidad (UCI, Pediatría, Urgencias)',
            'Certificado de finalización',
            'Soporte prioritario por email',
            'Créditos de educación continua'
          ],
          cta: 'Comenzar',
          popular: true
        },
        {
          name: 'Institución',
          price: 'Precio',
          period: 'personalizado',
          description: 'Para hospitales, escuelas y organizaciones de salud',
          features: [
            'Todo en el plan Profesional',
            'Licencias de usuario ilimitadas',
            'Rutas de aprendizaje personalizadas',
            'Panel de análisis avanzado',
            'Gerente de cuenta dedicado',
            'Soporte de integración API'
          ],
          cta: 'Contactar Ventas'
        }
      ]
    },
    calculators: {
      title: 'Calculadoras de Unidades Gratis',
      subtitle: 'Conversiones rápidas para uso clínico diario — temperatura, peso y altura',
      temperature: {
        title: 'Temperatura',
        celsius: 'Celsius (°C)',
        fahrenheit: 'Fahrenheit (°F)',
        kelvin: 'Kelvin (K)',
      },
      weight: {
        title: 'Peso',
        kg: 'Kilogramos (kg)',
        lbs: 'Libras (lbs)',
        g: 'Gramos (g)',
        mg: 'Miligramos (mg)',
        oz: 'Onzas (oz)',
      },
      height: {
        title: 'Altura',
        cm: 'Centímetros (cm)',
        m: 'Metros (m)',
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Encuentra respuestas a las dudas comunes sobre los planes y funciones de DoseGennie',
      items: [
        { question: '¿Cuáles son los precios de los planes?', answer: 'Ofrecemos varios planes: Prueba gratuita (hasta 10 conversiones sin tarjeta de crédito y lecciones 0 y 1 del curso), Estudiante ($9/mes), Profesional ($29/mes) e Institucional (precio personalizado, consultar con ventas).' },
        { question: '¿Qué incluye el plan de Estudiante?', answer: 'Cuesta $9/mes e incluye acceso a todos los módulos básicos de matemáticas, problemas de práctica impulsados por IA, acceso a la aplicación móvil, seguimiento del progreso y acceso al foro de la comunidad.' },
        { question: '¿Qué incluye el plan Profesional?', answer: 'Cuesta $29/mes y es para enfermeras en práctica que buscan mejorar sus habilidades. Incluye todo lo del plan de Estudiante, escenarios clínicos avanzados, módulos específicos por especialidad (UCI, Pediatría, Urgencias), certificado de finalización, soporte prioritario por correo electrónico y créditos de educación continua.' },
        { question: '¿Qué incluye el plan Institucional?', answer: 'Precios personalizados disponibles, por favor consulte con el departamento de ventas.' },
        { question: '¿Cómo puedo suscribirme?', answer: 'Crea una cuenta gratuita y luego selecciona el plan que mejor se adapte a ti.' },
        { question: '¿Cuáles son las diferencias entre los planes Estudiante, Profesional e Institucional?', answer: 'Estudiante ($9/mes) ofrece módulos básicos y herramientas de estudio. Profesional ($29/mes) añade escenarios clínicos avanzados, módulos de especialidad y certificados. Institucional ofrece precios personalizados para organizaciones.' },
        { question: '¿Cómo puedo contactar con el soporte o servicio al cliente?', answer: 'Puedes contactarnos a través de nuestro formulario de mensajes.' }
      ]
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const [temp, setTemp] = useState({ celsius: '', fahrenheit: '', kelvin: '' });
  const [weight, setWeight] = useState({ kg: '', lbs: '', g: '', mg: '', oz: '' });
  const [height, setHeight] = useState({ feet: '', inches: '', cm: '', m: '' });

  const formatNum = (n: number): string => parseFloat(n.toFixed(4)).toString();

  const handleTemp = (field: 'celsius' | 'fahrenheit' | 'kelvin', value: string) => {
    if (value === '') { setTemp({ celsius: '', fahrenheit: '', kelvin: '' }); return; }
    const n = parseFloat(value);
    if (isNaN(n)) { setTemp(prev => ({ ...prev, [field]: value })); return; }
    const c = field === 'celsius' ? n : field === 'fahrenheit' ? (n - 32) * 5 / 9 : n - 273.15;
    setTemp({
      celsius:    field === 'celsius'     ? value : formatNum(c),
      fahrenheit: field === 'fahrenheit'  ? value : formatNum(c * 9 / 5 + 32),
      kelvin:     field === 'kelvin'      ? value : formatNum(c + 273.15),
    });
  };

  const handleWeight = (field: 'kg' | 'lbs' | 'g' | 'mg' | 'oz', value: string) => {
    if (value === '') { setWeight({ kg: '', lbs: '', g: '', mg: '', oz: '' }); return; }
    const n = parseFloat(value);
    if (isNaN(n)) { setWeight(prev => ({ ...prev, [field]: value })); return; }
    const kg = field === 'kg' ? n : field === 'lbs' ? n / 2.20462 : field === 'g' ? n / 1000 : field === 'mg' ? n / 1000000 : n / 35.274;
    setWeight({
      kg:  field === 'kg'  ? value : formatNum(kg),
      lbs: field === 'lbs' ? value : formatNum(kg * 2.20462),
      g:   field === 'g'   ? value : formatNum(kg * 1000),
      mg:  field === 'mg'  ? value : formatNum(kg * 1000000),
      oz:  field === 'oz'  ? value : formatNum(kg * 35.274),
    });
  };

  const handleHeight = (field: 'feet' | 'inches' | 'cm' | 'm', value: string) => {
    if (value !== '' && isNaN(parseFloat(value)) && value !== '.' && value !== '-') {
      setHeight(prev => ({ ...prev, [field]: value }));
      return;
    }

    setHeight(prev => {
      const next = { ...prev, [field]: value };
      const n = (value === '' || value === '.' || value === '-') ? 0 : parseFloat(value);
      
      let totalInches: number;
      if (field === 'feet' || field === 'inches') {
        const ftInput = next.feet === '' || next.feet === '.' || next.feet === '-' ? 0 : parseFloat(next.feet);
        const incInput = next.inches === '' || next.inches === '.' || next.inches === '-' ? 0 : parseFloat(next.inches);
        totalInches = ftInput * 12 + incInput;
      } else if (field === 'cm') {
        totalInches = n / 2.54;
      } else {
        totalInches = n / 0.0254;
      }

      // Format results
      const cmVal = formatNum(totalInches * 2.54);
      const mVal = formatNum(totalInches * 0.0254);
      
      // Calculate normalized feet/inches for cases where we MUST change them (e.g. from metric)
      const normFeet = Math.floor(totalInches / 12);
      const normInches = totalInches % 12;

      let newFeet: string;
      let newInches: string;

      if (field === 'feet') {
        newFeet = value;
        newInches = prev.inches;
      } else if (field === 'inches') {
        newInches = value;
        newFeet = prev.feet;
      } else {
        // From Metric: Preserve feet if it "fits", otherwise normalize
        const currentFeet = parseFloat(prev.feet || '0');
        if (prev.feet !== '' && !isNaN(currentFeet) && currentFeet * 12 <= totalInches) {
          newFeet = prev.feet;
          newInches = formatNum(totalInches - currentFeet * 12);
        } else {
          newFeet = value === '' ? '' : normFeet.toString();
          newInches = value === '' ? '' : formatNum(normInches);
        }
      }

      return {
        feet: newFeet,
        inches: newInches,
        cm: field === 'cm' ? value : (value === '' && field === 'm' ? '' : cmVal),
        m: field === 'm' ? value : (value === '' && field === 'cm' ? '' : mVal),
      };
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-primary">DoseGennie</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.features}
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.testimonials}
              </a>
              <a href="#calculators" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.calculators}
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.pricing}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.contact}
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t.nav.faq}
              </a>
              <ShinyButton
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary"
                aria-label="Toggle language"
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span className="font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
              </ShinyButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <ShinyButton
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary"
                aria-label="Toggle language"
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span className="font-medium text-xs">{language === 'en' ? 'ES' : 'EN'}</span>
              </ShinyButton>
              <ShinyButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 px-2 bg-transparent hover:bg-primary/10 text-primary"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </ShinyButton>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary/10">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.features}</a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.testimonials}</a>
                <a href="#calculators" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.calculators}</a>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
                <a href="#faq" className="text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.faq}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
              <p className="text-sm sm:text-base text-primary font-medium">{t.hero.badge}</p>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
              <ShinyButton 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cta hover:bg-cta/90 text-white"
              >
                {t.hero.cta}
              </ShinyButton>
              <ShinyButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white border-none">
                {t.hero.secondaryCta}
              </ShinyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t.features.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              {t.features.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {t.features.items.slice(0, 4).map((feature, index) => {
              const gradients: Array<'orange' | 'gray' | 'purple' | 'green'> = ['orange', 'gray', 'purple', 'green'];
              const badgeColors = ['#F59E0B', '#4B5563', '#8B5CF6', '#10B981'];
              const images = [
                '/images/personalized_learning.png',
                '/images/clinical_prep.png',
                '/images/instant_feedback.png',
                '/images/progress_tracking.png'
              ];
              const badges = [t.hero.badge, "Clinical Prep", "Institutional", "Global"];
              
              return (
                <GradientCard
                  key={index}
                  gradient={gradients[index]}
                  badgeText={badges[index]}
                  badgeColor={badgeColors[index]}
                  title={feature.title}
                  description={feature.description}
                  ctaText={t.hero.cta}
                  ctaHref="#pricing"
                  imageUrl={images[index]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              {t.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {t.testimonials.items.map((testimonial, index) => {
              const glowColors: Array<'blue' | 'purple' | 'green'> = ['blue', 'purple', 'green'];
              return (
                <GlowCard
                  key={index}
                  customSize={true}
                  glowColor={glowColors[index]}
                  className="p-6 bg-white/80 h-auto w-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-cta fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-4 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section id="calculators" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t.calculators.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              {t.calculators.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

            {/* Temperature */}
            <GlowCard customSize={true} glowColor="blue" className="p-6 h-auto w-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FireIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{t.calculators.temperature.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {(['celsius', 'fahrenheit', 'kelvin'] as const).map(field => (
                    <label key={field} className={`flex flex-col gap-1 ${field === 'kelvin' ? 'col-span-2 max-w-[calc(50%-0.5rem)]' : ''}`}>
                      <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                        {t.calculators.temperature[field]}
                      </span>
                      <input
                        type="number"
                        value={temp[field]}
                        onChange={e => handleTemp(field, e.target.value)}
                        placeholder="—"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-primary/20 focus:border-primary/60 focus:outline-none text-foreground text-sm transition-colors"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Weight */}
            <GlowCard customSize={true} glowColor="green" className="p-6 h-auto w-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ScaleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{t.calculators.weight.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {(['kg', 'lbs', 'g', 'mg', 'oz'] as const).map(field => (
                    <label key={field} className={`flex flex-col gap-1 ${field === 'oz' ? 'col-span-2 max-w-[calc(50%-0.5rem)]' : ''}`}>
                      <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                        {t.calculators.weight[field]}
                      </span>
                      <input
                        type="number"
                        value={weight[field]}
                        onChange={e => handleWeight(field, e.target.value)}
                        placeholder="—"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-primary/20 focus:border-primary/60 focus:outline-none text-foreground text-sm transition-colors"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Height */}
            <GlowCard customSize={true} glowColor="purple" className="p-6 h-auto w-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowsUpDownIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{t.calculators.height.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {(['feet', 'inches', 'cm', 'm'] as const).map(field => (
                    <label key={field} className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                        {field === 'feet' ? "Feet (ft)" : field === 'inches' ? "Inches (in)" : t.calculators.height[field]}
                      </span>
                      <input
                        type="number"
                        value={height[field]}
                        onChange={e => handleHeight(field, e.target.value)}
                        placeholder="—"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-primary/20 focus:border-primary/60 focus:outline-none text-foreground text-sm transition-colors"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </GlowCard>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              {t.pricing.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {t.pricing.plans.map((plan, index) => {
              const glowColors: Array<'blue' | 'green' | 'purple'> = ['blue', 'green', 'purple'];
              return (
                <GlowCard
                  key={index}
                  customSize={true}
                  glowColor={glowColors[index]}
                  className={`p-6 sm:p-8 h-auto w-full relative ${
                    plan.popular
                      ? 'bg-primary/5 sm:scale-105'
                      : 'bg-background/50'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-foreground/60">{plan.period}</span>
                    </div>
                    <p className="text-foreground/70 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-cta mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <ShinyButton
                      className={`w-full py-3 text-white ${
                        plan.popular
                          ? 'bg-cta hover:bg-cta/90'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      {plan.cta}
                    </ShinyButton>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 tracking-tight">
              {t.faq.title}
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              {t.faq.subtitle}
            </p>
          </div>
          
          <FAQAccordion items={t.faq.items} />
        </div>
      </section>
      
      {/* Support Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">DoseGennie</h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4 px-4">
            Empowering nurses with AI-powered math education
          </p>
          <p className="text-xs sm:text-sm text-foreground/50">
            © 2026 DoseGennie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
