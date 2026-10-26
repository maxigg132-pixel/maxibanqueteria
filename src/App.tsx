import React, { useState, useMemo } from 'react'
import {
  Calculator,
  Clock,
  Users,
  CheckCircle2,
  Wine,
  Utensils,
  Music,
  Sparkles,
  Phone,
  MessageCircle,
  FileText,
  Truck,
  ShieldCheck,
  AlertCircle,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Layers,
  Plus,
  Minus,
  Check,
  User,
  PartyPopper,
  Copy,
  Info,
  CheckSquare,
  Square,
  Sliders,
  DollarSign,
  Menu,
  X,
  Eye,
  ZoomIn,
  ExternalLink,
  Heart,
  Camera
} from 'lucide-react'

// Official Instagram SVG icon
const Instagram: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

// Contact info - Dueño Maxibanquete
const WHATSAPP_PHONE = '56964587461'
const WHATSAPP_DISPLAY = '+569 6458 7461'
const CONTACT_NAME = 'Verónica L.'

// Redes Sociales Oficiales Maxibanquete
const INSTAGRAM_HANDLE = 'banqueteria.maxibanquete'
const INSTAGRAM_URL = 'https://www.instagram.com/banqueteria.maxibanquete/'
const FACEBOOK_URL = 'https://www.facebook.com/maxibanquete.1'

// Types
type ServiceType = 'cocktail_gourmet' | 'combos_personas' | 'almuerzo_mesa' | 'fiesta_bar_dj' | 'canapes_100'

const SERVICES = [
  {
    id: 'cocktail_gourmet' as ServiceType,
    name: 'Cocktail Gourmet',
    subtitle: 'Bocados de alta cocina, brochetas, hamburguesas y bebestible ilimitado',
    tag: 'Por Persona',
    priceNote: '$13.990 · $19.990 · $24.990 p/persona',
    isCombo: false,
    minPeople: 15,
    defaultPeople: 30,
    options: [
      {
        id: 'gourmet_13990',
        name: 'Cocktail Gourmet — $13.990 por persona (1 Hr Bebestible)',
        price: 13990,
        description: '5 canapés, 3 empanadas, 2 brochetas, 2 hamburguesas caseras, 3 dulces cocktail y 1 hora de bebestible ilimitado.',
        details: [
          '5 UNIDADES DE CANAPÉS: Jamón serrano con queso crema ciboulette · Camarón ecuatoriano a la mantequilla y finas hierbas · Salame ahumado con choclito al sésamo · Espárragos salteados con tomate cherry · Salmón con queso crema y salsa soya decorado con amapolas.',
          '3 VARIEDADES DE EMPANADAS: Empanadas de pino al horno · Empanada queso espinacas al horno · Empanadas de queso al horno.',
          '2 BROCHETAS DE CARNES: Brocheta cocktail lomo vetado · Brocheta de pollo teriyaki.',
          '2 HAMBURGUESAS COCKTAIL: Hamburguesa casera 5% grasa rellena con queso cheddar, tomates cherry, lechuga hidropónica y salsa inglesa.',
          '3 VARIEDADES DULCES COCKTAIL: Cachito mil hoja manjar nuez · Alfajor maicena coco · Pie de limón.',
          'SERVICIO 1 HORA BEBESTIBLE ILIMITADO: Jugos, bebidas, agua mineral, mojito con o sin alcohol, pisco sour, mango sour y espumante para brindis.',
          'INCLUYE: Coordinador de evento, garzones, mantelería, mesón decorado, horno para calentar productos, cristalería e implementación necesaria.'
        ]
      },
      {
        id: 'gourmet_19990',
        name: 'Cocktail Gourmet — $19.990 por persona (3 Hrs Bebestible)',
        price: 19990,
        description: 'Mismo menú completo pero con 3 Horas continuas de bebestible ilimitado (mojitos, pisco sour, mango sour, espumante, jugos y bebidas).',
        details: [
          '5 UNIDADES DE CANAPÉS: Jamón serrano queso crema ciboulette · Camarón ecuatoriano finas hierbas · Salame ahumado choclito al sésamo · Espárragos con tomate cherry · Salmón con queso crema y amapolas.',
          '3 VARIEDADES DE EMPANADAS: Empanadas de pino al horno · Empanada queso espinacas al horno · Empanadas de queso al horno.',
          '2 BROCHETAS DE CARNES: Brocheta cocktail lomo vetado · Brocheta de pollo teriyaki.',
          '2 HAMBURGUESAS COCKTAIL: Hamburguesa casera 5% grasa rellena con cheddar, cherry y lechuga hidropónica.',
          '3 VARIEDADES DULCES COCKTAIL: Cachito mil hoja manjar nuez · Alfajor maicena coco · Pie de limón.',
          'SERVICIO 3 HORAS BEBESTIBLE ILIMITADO: Jugos, bebidas, agua mineral, mojito con o sin alcohol, pisco sour, mango sour y espumante.',
          'INCLUYE: Coordinador de evento, garzones, mantelería, mesón decorado, horno para calentar productos, cristalería e implementación necesaria.'
        ]
      },
      {
        id: 'gourmet_24990',
        name: 'Cocktail Gourmet — $24.990 por persona (Doble Carnes & Dulces + 3 Hrs Bebestible)',
        price: 24990,
        description: '5 canapés, 5 empanadas, 4 brochetas de carne, 4 hamburguesas caseras, 6 dulces cocktail y 3 horas de bebestible ilimitado.',
        details: [
          '5 UNIDADES DE CANAPÉS: Jamón serrano queso crema · Camarón ecuatoriano finas hierbas · Salame ahumado con choclito al sésamo · Espárragos salteados · Salmón queso crema salsa soya.',
          '5 VARIEDADES DE EMPANADAS: Empanadas de pino al horno · Empanada queso espinacas al horno · Empanadas de queso al horno.',
          '4 BROCHETAS DE CARNES: Brocheta cocktail lomo vetado · Brocheta de pollo teriyaki.',
          '4 HAMBURGUESAS COCKTAIL: Hamburguesa casera 5% grasa rellena con queso cheddar, tomates cherry y salsa inglesa.',
          '6 VARIEDADES DULCES COCKTAIL: Cachito mil hoja manjar nuez · Alfajor maicena coco · Pie de limón y repostería artesanal.',
          'SERVICIO 3 HORAS BEBESTIBLE ILIMITADO: Jugos, bebidas, agua mineral, mojito con o sin alcohol, pisco sour, mango sour y espumante para brindis.',
          'INCLUYE: Coordinador de evento, garzones, mantelería, mesón decorado, horno para calentar productos, cristalería e implementación necesaria.'
        ]
      }
    ]
  },
  {
    id: 'combos_personas' as ServiceType,
    name: 'Cocktail por Personas (Combos)',
    subtitle: 'Combos cerrados listos para servir: 10, 15, 20, 30, 50 y 100 personas',
    tag: 'Packs Cerrados',
    basePrice: 75990,
    priceNote: 'Combos desde $75.990 hasta $550.000',
    isCombo: true,
    minPeople: 10,
    defaultPeople: 20,
    options: [
      {
        id: 'combo_10',
        name: 'Cocktail 10 Personas — $75.990 (150 Bocados Mixtos)',
        price: 75990,
        people: 10,
        description: '150 bocados mixtos listos para servir. Incluye despacho a domicilio.',
        details: [
          '150 bocados mixtos en total (50 canapés gourmet, 30 dulces mixtos, 10 empanadas pino/queso, 10 hamburguesas cocktail, 10 churrascos cocktail, 10 tapaditos pastas mixtas, 10 pizzetas napolitanas, 10 brochetas jamón/queso/aceitunas)',
          'Incluye despacho a domicilio'
        ]
      },
      {
        id: 'combo_15',
        name: 'Cocktail 15 Personas — $99.990 (195 Bocados Mixtos)',
        price: 99990,
        people: 15,
        description: '195 bocados mixtos en bandejas de presentación. Incluye despacho a domicilio.',
        details: [
          '195 bocados mixtos en total (60 canapés gourmet, 30 dulces mixtos, 15 empanadas pino/queso, 15 hamburguesas cocktail, 15 churrascos cocktail, 15 tapaditos, 15 pizzetas napolitanas, 15 brochetas)',
          'Incluye despacho a domicilio'
        ]
      },
      {
        id: 'combo_20',
        name: 'Cocktail 20 Personas — $129.990 (280 Bocados Mixtos)',
        price: 129990,
        people: 20,
        description: '280 bocados mixtos surtidos salados y dulces. Incluye despacho a domicilio.',
        details: [
          '280 bocados mixtos en total (100 canapés gourmet, 60 dulces mixtos, 20 empanadas pino/queso, 20 hamburguesas cocktail, 20 churrascos cocktail, 20 tapaditos, 20 pizzetas napolitanas, 20 brochetas)',
          'Incluye despacho a domicilio'
        ]
      },
      {
        id: 'combo_30',
        name: 'Cocktail 30 Personas — $185.990 (370 Bocados Mixtos)',
        price: 185990,
        people: 30,
        description: '370 bocados mixtos de alta variedad para 30 invitados. Incluye despacho a domicilio.',
        details: [
          '370 bocados mixtos en total (100 canapés gourmet, 60 dulces mixtos, 30 empanadas pino/queso, 30 hamburguesas cocktail, 30 churrascos cocktail, 30 tapaditos, 30 pizzetas napolitanas, 30 brochetas)',
          'Incluye despacho a domicilio'
        ]
      },
      {
        id: 'combo_50',
        name: 'Cocktail 50 Personas — $379.990 (550 Bocados + Montaje y 2 Mesones)',
        price: 379990,
        people: 50,
        description: '550 bocados mixtos + Incluye montaje, 2 mesones, mantelería y arreglos florales.',
        details: [
          '550 bocados mixtos en total (150 canapés gourmet, 100 dulces mixtos, 50 empanadas pino/queso, 50 hamburguesas cocktail, 50 churrascos cocktail, 50 tapaditos, 50 pizzetas, 50 brochetas)',
          'INCLUYE: Montaje, 2 mesones, mantelería y arreglos florales',
          'Incluye despacho a domicilio'
        ]
      },
      {
        id: 'combo_100_graduacion',
        name: 'Cocktail Graduación — $5.500 p/p (Desde 100 personas)',
        price: 550000,
        people: 100,
        description: 'Pack oficial para Graduaciones: $5.500 por persona. Barra deslizable para 100 o más invitados. Incluye tapaditos, churrascos, hamburguesas, empanadas, dulces, canapés, bebidas, montaje y garzones.',
        details: [
          'TARIFA GRADUACIONES: $5.500 por persona (desde 100 personas en adelante)',
          '100 TAPADITOS PASTA (ave pimiento, muss salame italiano, jamón almendrado)',
          '100 CHURRASCO QUESO CREMOSO (lechuga, cherry, mayonesa)',
          '100 HAMBURGUESA (casera 5% de grasa, lechuga hidropónica, queso cheddar, salsa inglesa)',
          '100 EMPANADAS MIXTA (pino, queso cibulet, napolitanas)',
          '100 DULCES COCKTAIL (cachitos mil hoja manjar casero, alfajor maicena, palmeritas corazón, chilenitos)',
          '200 CANAPÉS MIXTO (jamón serrano, salame, queso cremoso, espárragos, choclitos)',
          'Bebidas, jugos, agua mineral con gas (1 hr) · Copas y vasos · Personal a cargo del servicio y garzones · Montaje Cocktail (Mantelería + Arreglos florales)'
        ]
      }
    ]
  },
  {
    id: 'almuerzo_mesa' as ServiceType,
    name: 'Almuerzo Menú a la Mesa',
    subtitle: 'Servido a la mesa: Carnes finas, salmón, guarniciones, ensaladas y postres',
    tag: 'Servido a la Mesa',
    basePrice: 22990,
    priceNote: '$22.990 · $26.990 (con bebestible 3 hrs) p/persona',
    isCombo: false,
    minPeople: 15,
    defaultPeople: 30,
    options: [
      {
        id: 'almuerzo_base',
        name: 'Almuerzo Menú a la Mesa — $22.990 por persona',
        price: 22990,
        description: 'Plato principal de alta gastronomía a elección + Postre artesanal a elección + Servicio completo con Chef y garzones.',
        details: [
          '5 PLATOS DE FONDO A ELECCIÓN: Filete al vino tinto con papas rústicas · Ave rellena con jamón ahumado, arroz primavera y verduras · Costillar al horno con papas a las hierbas y ensalada · Carne 3 cocciones con pastelera o arroz y salsa agridulce · Salmón a la plancha con papas rústicas al romero.',
          '4 POSTRES A ELECCIÓN: Muss de manjar con chocolate y oro comestible · Trilogía muss, brownie con nuez y frutos rojos · Panqueques con manjar casero y frutos rojos · Trilogía mixta (muss frambuesa, waffles con manjar, frutillas y merengue).',
          'EQUIPAMIENTO & PERSONAL COMPLETO: Chef ejecutivo, ayudantes de cocina, garzones uniformados de gala, vajilla de loza, cristalería, cubiertos finos, mantelería completa, arreglos florales de mesa y traslado en Santiago.'
        ]
      },
      {
        id: 'almuerzo_bebestible',
        name: 'Almuerzo con Bebestible 3 Horas Ilimitados — $26.990 por persona',
        price: 26990,
        description: 'Todo el menú a la mesa servido con vajilla completa + Servicio de Bebestibles continuo durante 3 Horas Ilimitadas.',
        details: [
          '5 PLATOS DE FONDO A ELECCIÓN: Filete al vino tinto con papas rústicas · Ave rellena con jamón ahumado y queso, arroz y verduras · Costillar al horno con papas a las finas hierbas · Carne 3 cocciones con pastelera y salsa agridulce · Salmón a la plancha con papas rústicas y mix ensaladas.',
          '4 POSTRES A ELECCIÓN: Muss de manjar con chocolate y oro comestible · Trilogía muss, brownie y frutos rojos · Panqueques de manjar con frutos rojos · Trilogía mixta con waffles, frutillas y merengue.',
          'BEBESTIBLE DURANTE 3 HORAS ILIMITADOS: Jugos naturales recién preparados, bebidas gaseosas línea Coca-Cola y agua mineral con y sin gas servidas continuamente a las mesas.',
          'EQUIPAMIENTO & PERSONAL COMPLETO: Chef ejecutivo, ayudantes, garzones de gala uniformados, loza, cristalería, mantelería, flores y despacho incluido.'
        ]
      }
    ]
  },
  {
    id: 'fiesta_bar_dj' as ServiceType,
    name: 'Fiesta Evento Cocktail con Bar Abierto 5 hrs & DJ',
    subtitle: 'Cóctel abundante continuo, Bar abierto 5 horas e incluye DJ en vivo',
    tag: 'Fiesta & Barra Libre',
    basePrice: 29990,
    priceNote: '$29.990 por persona',
    isCombo: false,
    minPeople: 25,
    defaultPeople: 40,
    options: [
      {
        id: 'fiesta_completa',
        name: 'Fiesta Evento: Bar Abierto 5 hrs + DJ + Cóctel ($29.990 p/persona)',
        price: 29990,
        description: '4 dulces, 5 canapés, 4 tapaditos, 2 empanadas, 2 mini hamburguesas, 2 pizzetas napolitanas, 1 postre en vaso, 2 brochetas de vacuno, bar abierto 5 hrs y DJ.',
        details: [
          'GASTRONOMÍA: 4 Dulces cocktail · 5 Canapés surtidos · 4 Tapaditos gourmet · 2 Empanadas al horno · 2 Mini hamburguesas · 2 Pizzetas napolitanas · 1 Postre cocktail en vaso · 2 Brochetas de carne de vacuno.',
          'BAR ABIERTO 5 HORAS CONTINUO: Pisco 35° • 40°, Ron, Mojito Limón, Mojito Frutos Rojos, Pisco Sour, Mango Sour, Espumante, Jugos y Agua mineral con gas.',
          'INCLUYE DJ PROFESIONAL EN VIVO 🎧 con amplificación e iluminación de fiesta.'
        ]
      }
    ]
  },
  {
    id: 'canapes_100' as ServiceType,
    name: 'Canapés Cocktail (Venta por 100 de canapés)',
    subtitle: 'Venta por 100: Elige 4 variedades por cada 100 unidades de nuestra carta fina',
    tag: 'Venta por 100',
    basePrice: 0,
    priceNote: 'Tarifa a coordinar directamente con el dueño',
    isCombo: false,
    minPeople: 100,
    defaultPeople: 100,
    options: [
      {
        id: 'canapes_pack_100',
        name: 'Pack Canapés Cocktail (Venta por 100 de canapés)',
        price: 0,
        description: 'Venta por 100 de canapés gourmet artesanales. Incluye 4 variedades a tu libre elección por cada 100 unidades.',
        details: [
          '4 VARIEDADES A ESCOGER POR CADA 100 UNIDADES: Puedes combinar libremente tus bocados favoritos del catálogo de 14 variedades.',
          'Si pides 200 unidades escoges 8 variedades, si pides 300 escoges 12 variedades, etc.',
          'Elaboración artesanal fresca realizada el mismo día de tu entrega.',
          'PRESUPUESTO: El valor preferencial por 100 es informado de manera directa y cordial por la administración/dueño al recibir tu pedido en WhatsApp.'
        ]
      }
    ]
  }
]

// 14 Canapés exactos del flyer 9 (Cada 100 unidades: 4 variedades a escoger)
const CANAPES_CATALOG = [
  'Base de mayonesa, limón Palmitos',
  'Base mayonesa, limón choclo',
  'Choclo salame ahumado',
  'Base mayonesa limón, chorito salsa verde',
  'Base Camarón, queso crema ciboulette',
  'Queso crema, jamón serrano',
  'Queso crema, Mix de mariscos surtidos',
  'Queso crema, nuez jamón serrano',
  'Base mayonesa, limón Espárragos',
  'Base salsa, tomates cherry ají verde',
  'Base salsa, tomate cherry queso Camembert',
  'Camarón salteados a la mantequilla hierbas',
  'Pasta ave pimiento morones colores',
  'Huevos de codornices, con amapolas'
]

// 8 Fotos de la Puesta en Escena y Presentación para el Lightbox interactivo
const GALLERY_PHOTOS = [
  {
    src: '/assets/fotos/servicio4_67bbed4d.jpg',
    title: 'Bandeja Espejada de Oro con Hamburguesas Caseras 5% Grasa',
    alt: 'Mini hamburguesas gourmet en bandeja espejada dorada',
    desc: 'Presentación de gala con mini panes sésamo, carne de vacuno seleccionada, queso fundido y lechuga hidropónica sobre cristalería espejada.'
  },
  {
    src: '/assets/fotos/servicio2_696499b2.jpg',
    title: 'Barra de Sangría de Autor con Macarons & Brochetas',
    alt: 'Sangría de autor con frutas y macarons franceses',
    desc: 'Coctelería fresca de autor en dispenser de cristal labrado, macarons franceses artesanales y brochetas de fruta fresca.'
  },
  {
    src: '/assets/fotos/servicio_ce002b29.jpg',
    title: 'Buffet Masivo Corrido con Cristalería & Girasoles',
    alt: 'Buffet masivo de 10 metros para empresas',
    desc: 'Montaje de 10 metros para grandes aforos institucionales y empresas, con mantelería de gala, flores naturales y estaciones continuas.'
  },
  {
    src: '/assets/fotos/servicio_5_42bfe5e9.jpg',
    title: 'Mesón Dulce con Alfajorcitos, Cachitos y Decoración Floral',
    alt: 'Estación dulce de gala con flores y repostería artesanal',
    desc: 'Mesa de repostería chilena de alta factura con cachitos de mil hojas artesanales, alfajores de maicena y detalles botánicos.'
  },
  {
    src: '/assets/fotos/servicio.7_00ff5093.jpg',
    title: 'Estación Cocktail Variada con Mini Hamburguesas y Postres Shots',
    alt: 'Estación cocktail variada con hamburguesas y postres shots',
    desc: 'Mesa de degustación completa con variedad de bocados salados calientes y fríos más copitas shots dulces.'
  },
  {
    src: '/assets/fotos/servicio_8_3c8060b4.jpg',
    title: 'Buffet Escalonado con Wraps, Tapaditos y Degustación',
    alt: 'Montaje de buffet escalonado con wraps, tapaditos y degustación',
    desc: 'Diseño multinivel con gradas de madera noble que permite acceso visual y cómodo a cada variedad de bocado.'
  },
  {
    src: '/assets/fotos/servicio_9_15e228c9.jpg',
    title: 'Recepción al Aire Libre en Terraza con Repostería Fina & Flores',
    alt: 'Recepción al aire libre en terraza con repostería fina y flores',
    desc: 'Ambientación campestre chic para terrazas, jardines y parcelas en Santiago con luz natural y vajilla rústica.'
  },
  {
    src: '/assets/fotos/863455342_1880741139576249_7100281823697437149_n_32995618.jpg',
    title: 'Mesón Campestre con Gradas de Madera, Dulces & Flores',
    alt: 'Mesón campestre con gradas de madera, alfajorcitos y arreglos florales',
    desc: 'Estructuras de madera de pino cepillado artesanal, bandejas de repostería chilena y arreglos florales silvestres.'
  }
]

export interface MainDish {
  id: string
  title: string
  accompaniment: string
  salad: string
  fullDescription: string
  icon: string
  tag: string
}

export interface DessertItem {
  id: string
  title: string
  details: string
  decoration: string
  fullDescription: string
  icon: string
}

// Platos principales de Almuerzo a la Mesa con todo el detalle de carnes, guarniciones y ensaladas
const MAIN_DISHES_DATA: MainDish[] = [
  {
    id: 'filete_vino_tinto',
    title: 'Carne al Vino Tinto Filete',
    accompaniment: 'Papas rústicas doradas al horno con finas hierbas',
    salad: 'Ensalada mixta fresca de la estación',
    fullDescription: 'Carne al vino tinto filete, acompañado de papas rústicas, ensalada mixta',
    icon: '🥩',
    tag: 'Corte Premium'
  },
  {
    id: 'ave_rellena',
    title: 'Ave Rellena con Jamón Ahumado & Queso Cremoso',
    accompaniment: 'Arroz primavera y verduras salteadas de temporada',
    salad: 'Ensalada fresca a la mesa',
    fullDescription: 'Ave rellena jamón ahumado, queso cremoso, arroz primavera, verduras salteadas y ensalada',
    icon: '🍗',
    tag: 'Clásico & Sabroso'
  },
  {
    id: 'costillar_horno',
    title: 'Costillar al Horno Fino',
    accompaniment: 'Papas salteadas a las finas hierbas',
    salad: 'Ensalada de tomate, queso y palmitos',
    fullDescription: 'Costillar al horno con papas salteadas finas hierbas y ensalada tomate queso palmitos',
    icon: '🍖',
    tag: 'Tradición Chilena'
  },
  {
    id: 'carne_3_cocciones',
    title: 'Carne en sus 3 Cocciones con Salsa de Vino Agridulce',
    accompaniment: 'Pastelera de choclo tradicional o arroz primavera',
    salad: 'Mix de ensaladas de gala',
    fullDescription: 'Carne en sus 3 cocciones, pastelera o arroz primavera, salsa de vino agridulce y mix ensaladas',
    icon: '🥩',
    tag: 'Especialidad del Chef'
  },
  {
    id: 'salmon_plancha',
    title: 'Salmón a la Plancha a las Finas Hierbas',
    accompaniment: 'Papas rústicas al romero',
    salad: 'Mix de ensaladas personal de la estación',
    fullDescription: 'Salmón a la plancha finas hierbas, papas rústicas y mix ensaladas personal',
    icon: '🐟',
    tag: 'Mar & Frescura'
  }
]

const MAIN_DISHES = MAIN_DISHES_DATA.map((d) => d.fullDescription)

// Postres de Almuerzo a la Mesa con todo el detalle de coberturas, frutas y toques de gala
const DESSERTS_DATA: DessertItem[] = [
  {
    id: 'muss_manjar_oro',
    title: 'Muss de Manjar con Cobertura de Chocolate & Oro Comestible',
    details: 'Muss artesanal de manjar de campo con cobertura crocante de chocolate semi amargo',
    decoration: 'Decorado de gala con finas láminas de oro comestible',
    fullDescription: 'Muss manjar, cobertura chocolate semi amargo, decorado con oro comestible',
    icon: '✨'
  },
  {
    id: 'trilogia_brownie',
    title: 'Trilogía Muss de Manjar, Brownie con Nuez & Mix Frutos Rojos',
    details: 'Muss de manjar cremoso, trozo de brownie tibio con manjar y nuez picada',
    decoration: 'Mix de frutos rojos silvestres con crema chantillí fresca',
    fullDescription: 'Trilogía muss manjar, brownie manjar nuez, mix frutos rojos con chantillí',
    icon: '🍓'
  },
  {
    id: 'panqueques_manjar',
    title: 'Panqueques con Manjar Casero & Mix de Frutos Rojos',
    details: 'Panqueques suaves rellenos con manjar chileno artesanal',
    decoration: 'Frutillas y arándanos frescos con suave crema chantillí',
    fullDescription: 'Panqueques manjar, mix frutos rojos, chantillí',
    icon: '🥞'
  },
  {
    id: 'trilogia_mixta_waffles',
    title: 'Trilogía Mixta: Muss Frambuesa, Waffles con Manjar & Merengue',
    details: 'Muss fresco de frambuesa, mini waffles tostados con manjar y frutillas',
    decoration: 'Crema chantillí batida y toques de merengue suizo dorado',
    fullDescription: 'Triología mixta (muss frambuesa, waffles manjar, frutillas, crema chantillí, merengue)',
    icon: '🧇'
  }
]

const DESSERTS = DESSERTS_DATA.map((d) => d.fullDescription)

// Cócteles destacados del Bar Abierto (del flyer 3)
const BAR_COCKTAILS = [
  'Pisco Sour artesanal chileno',
  'Mango Sour',
  'Mojito Limón tradicional',
  'Mojito Frutos Rojos',
  'Pisco Mistral / Alto del Carmen (35° y 40°)',
  'Ron Havana / Pampero',
  'Espumante Brut para brindis',
  'Bebidas, jugos naturales y agua mineral'
]

export default function App() {
  // Cotizador state
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceType>('cocktail_gourmet')
  const [peopleCount, setPeoplePeopleCount] = useState<number>(30)
  const [selectedOptionId, setSelectedOptionId] = useState<string>('gourmet_13990')

  // Dynamic user customizations
  const [selectedCanapes, setSelectedCanapes] = useState<string[]>([
    'Base de mayonesa, limón Palmitos',
    'Base Camarón, queso crema ciboulette',
    'Queso crema, jamón serrano',
    'Camarón salteados a la mantequilla hierbas'
  ])

  // Almuerzo a la mesa: 1 plato de fondo y 1 postre a elección para el banquete
  const [selectedMainDish, setSelectedMainDish] = useState<string>(
    MAIN_DISHES_DATA[0].fullDescription
  )
  const [selectedDessert, setSelectedDessert] = useState<string>(
    DESSERTS_DATA[0].fullDescription
  )

  const [selectedBarDrinks, setSelectedBarDrinks] = useState<string[]>([
    'Pisco Sour artesanal chileno',
    'Mojito Limón tradicional',
    'Mojito Frutos Rojos',
    'Espumante Brut para brindis'
  ])

  // Customer contact fields
  const [clientName, setClientName] = useState<string>('')
  const [clientPhone, setClientPhone] = useState<string>('')
  const [eventDate, setEventDate] = useState<string>('')
  const [eventTime, setEventTime] = useState<string>('')
  const [eventCommune, setEventCommune] = useState<string>('')
  const [eventAddress, setEventAddress] = useState<string>('')
  const [eventType, setEventType] = useState<string>('Cumpleaños / Aniversario')
  const [invoiceType, setInvoiceType] = useState<string>('Boleta')
  const [specialNotes, setSpecialNotes] = useState<string>('')
  const [customGourmetCanapes, setCustomGourmetCanapes] = useState<boolean>(false)

  // Pack Canapés Cocktail (Venta por 100)
  const [canapesPackUnits, setCanapesPackUnits] = useState<number>(100)
  const [selectedPackVarieties, setSelectedPackVarieties] = useState<string[]>([
    'Base de mayonesa, limón Palmitos',
    'Base Camarón, queso crema ciboulette',
    'Queso crema, jamón serrano',
    'Camarón salteados a la mantequilla hierbas'
  ])

  // UI state
  const [activeMenuTab, setActiveMenuTab] = useState<ServiceType>('cocktail_gourmet')
  const [copiedLink, setCopiedLink] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)

  // Current service definition
  const currentService = useMemo(() => {
    return SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0]
  }, [selectedServiceId])

  // Current option
  const currentOption = useMemo(() => {
    return currentService.options.find((o) => o.id === selectedOptionId) || currentService.options[0]
  }, [currentService, selectedOptionId])

  const isCanapesPack = selectedServiceId === 'canapes_100'
  const isGraduation = selectedOptionId === 'combo_100_graduacion'

  // Max varieties allowed for the Canapés pack: 4 per 100 units (capped at 14 catalog length)
  const maxPackVarietiesAllowed = Math.min(CANAPES_CATALOG.length, Math.max(4, Math.floor(canapesPackUnits / 100) * 4))

  // Handle canapes count change (step of 100)
  const handleCanapesCountChange = (newCount: number) => {
    const clamped = Math.max(100, Math.min(1000, newCount))
    setCanapesPackUnits(clamped)
    const newMax = Math.min(CANAPES_CATALOG.length, Math.max(4, Math.floor(clamped / 100) * 4))
    if (selectedPackVarieties.length > newMax) {
      setSelectedPackVarieties((prev) => prev.slice(0, newMax))
    }
  }

  // Toggle pack variety
  const togglePackVariety = (item: string) => {
    if (selectedPackVarieties.includes(item)) {
      if (selectedPackVarieties.length > 1) {
        setSelectedPackVarieties((prev) => prev.filter((v) => v !== item))
      }
    } else {
      if (selectedPackVarieties.length < maxPackVarietiesAllowed) {
        setSelectedPackVarieties((prev) => [...prev, item])
      } else {
        // Replace oldest to keep frictionless UX
        setSelectedPackVarieties((prev) => [...prev.slice(1), item])
      }
    }
  }

  // Adicional de Canapés Extras (cuando el cliente contrata otro pack)
  const [includeExtraCanapes, setIncludeExtraCanapes] = useState<boolean>(false)
  const [extraCanapesUnits, setExtraCanapesUnits] = useState<number>(100) // 100, 200, 300...
  const [selectedExtraCanapesVarieties, setSelectedExtraCanapesVarieties] = useState<string[]>([
    'Base de mayonesa, limón Palmitos',
    'Base Camarón, queso crema ciboulette',
    'Queso crema, jamón serrano',
    'Camarón salteados a la mantequilla hierbas'
  ])

  // Max varieties allowed for extra canapés: 4 per 100 units
  const maxExtraVarietiesAllowed = Math.min(
    CANAPES_CATALOG.length,
    Math.max(4, Math.floor(extraCanapesUnits / 100) * 4)
  )

  const handleExtraCanapesUnitsChange = (newCount: number) => {
    const clamped = Math.max(100, Math.min(1000, newCount))
    setExtraCanapesUnits(clamped)
    const newMax = Math.min(CANAPES_CATALOG.length, Math.max(4, Math.floor(clamped / 100) * 4))
    if (selectedExtraCanapesVarieties.length > newMax) {
      setSelectedExtraCanapesVarieties((prev) => prev.slice(0, newMax))
    }
  }

  const toggleExtraCanapesVariety = (item: string) => {
    if (selectedExtraCanapesVarieties.includes(item)) {
      if (selectedExtraCanapesVarieties.length > 1) {
        setSelectedExtraCanapesVarieties((prev) => prev.filter((v) => v !== item))
      }
    } else {
      if (selectedExtraCanapesVarieties.length < maxExtraVarietiesAllowed) {
        setSelectedExtraCanapesVarieties((prev) => [...prev, item])
      } else {
        setSelectedExtraCanapesVarieties((prev) => [...prev.slice(1), item])
      }
    }
  }

  // Maximum canapes allowed to pick (default 4 varieties per 100 units from flyer)
  const maxCanapesAllowed = useMemo(() => {
    if (peopleCount >= 80) return 6
    return 4
  }, [peopleCount])

  // Toggle Canape choice
  const toggleCanape = (item: string) => {
    if (selectedCanapes.includes(item)) {
      setSelectedCanapes((prev) => prev.filter((c) => c !== item))
    } else {
      if (selectedCanapes.length < maxCanapesAllowed) {
        setSelectedCanapes((prev) => [...prev, item])
      } else {
        // Replace oldest
        setSelectedCanapes((prev) => [...prev.slice(1), item])
      }
    }
  }

  // Toggle Bar Drink choice
  const toggleBarDrink = (drink: string) => {
    if (selectedBarDrinks.includes(drink)) {
      if (selectedBarDrinks.length > 1) {
        setSelectedBarDrinks((prev) => prev.filter((d) => d !== drink))
      }
    } else {
      setSelectedBarDrinks((prev) => [...prev, drink])
    }
  }

  // Change Service
  const handleServiceChange = (id: ServiceType) => {
    setSelectedServiceId(id)
    const newService = SERVICES.find((s) => s.id === id) || SERVICES[0]
    setSelectedOptionId(newService.options[0].id)
    if (id === 'canapes_100') {
      setCanapesPackUnits((prev) => (prev >= 100 ? prev : 100))
    } else if (newService.isCombo) {
      const initialPeople = (newService.options[0] as any).people || 10
      setPeoplePeopleCount(initialPeople)
    } else {
      setPeoplePeopleCount((prev) => Math.max(newService.minPeople, prev || newService.defaultPeople))
    }
  }

  // Handle combo change
  const handleComboChange = (optionId: string) => {
    setSelectedOptionId(optionId)
    if (optionId === 'combo_100_graduacion') {
      setPeoplePeopleCount((prev) => (prev >= 100 ? prev : 100))
    } else {
      const opt = currentService.options.find((o) => o.id === optionId) as any
      if (opt && opt.people) {
        setPeoplePeopleCount(opt.people)
      }
    }
  }

  // Calculations
  const calculation = useMemo(() => {
    let baseTotal = 0
    let unitPrice = 0

    if (isCanapesPack) {
      unitPrice = 0
      baseTotal = 0
    } else if (isGraduation) {
      unitPrice = 5500
      baseTotal = 5500 * (peopleCount || 100)
    } else if (currentService.isCombo) {
      baseTotal = currentOption.price
      unitPrice = Math.round(baseTotal / (peopleCount || 1))
    } else {
      unitPrice = currentOption.price
      baseTotal = unitPrice * peopleCount
    }

    const grandTotal = baseTotal
    const suggestedAbono = isCanapesPack ? 0 : Math.round(grandTotal * 0.4) // 40% abono para congelar fecha
    const remainingBalance = isCanapesPack ? 0 : grandTotal - suggestedAbono
    const perPersonFinal = isCanapesPack ? 0 : isGraduation ? 5500 : Math.round(grandTotal / (peopleCount || 1))

    return {
      baseTotal,
      unitPrice,
      grandTotal,
      suggestedAbono,
      remainingBalance,
      perPersonFinal
    }
  }, [currentService, currentOption, peopleCount, isGraduation, isCanapesPack])

  // Format currency helper (CLP)
  const formatCLP = (amount: number) => {
    return `$${amount.toLocaleString('es-CL')}`
  }

  // WhatsApp prefilled message with neat clean breakdown (no strange characters or weird lines)
  const whatsappUrl = useMemo(() => {
    const lines = [
      `*BANQUETERÍA MAXIBANQUETE — SOLICITUD DE COTIZACIÓN*`,
      ``,
      `Hola Verónica, coticé en su página web y deseo consultar disponibilidad para mi evento:`,
      ``,
      `*DATOS DEL CLIENTE Y EVENTO*`,
      `- Nombre o Empresa: ${clientName.trim() || 'No especificado'}`,
      `- Teléfono / WhatsApp: ${clientPhone.trim() || 'No especificado'}`,
      `- Fecha del Evento: ${eventDate.trim() || 'Por coordinar'}`,
      `- Horario Estimado: ${eventTime.trim() || 'Por coordinar'}`,
      `- Comuna: ${eventCommune.trim() || 'Santiago (RM)'}`,
      `- Dirección o Recinto: ${eventAddress.trim() || 'Por coordinar'}`,
      `- Tipo de Celebración: ${eventType}`,
      `- Comprobante Requerido: ${invoiceType}`,
      ``,
      `*SERVICIO SELECCIONADO*`,
      `- Categoría: ${currentService.name}`,
      `- Opción: ${currentOption.name}`,
      `- Cantidad Solicitada: ${
        isCanapesPack
          ? `${canapesPackUnits} canapés`
          : `${peopleCount} personas`
      }`,
      `- Tarifa Base: ${
        isCanapesPack
          ? 'Precio informado directamente por el dueño de Maxibanquete'
          : isGraduation
          ? '$5.500 por persona'
          : currentService.isCombo
          ? `${formatCLP(currentOption.price)} (Pack cerrado)`
          : `${formatCLP(currentOption.price)} por persona`
      }`,
      ``,
      `*DETALLE DE GASTRONOMÍA*`
    ]

    // Service-specific custom choices
    if (isCanapesPack) {
      lines.push(`- Modalidad: Canapés Cocktail (Venta por 100 unidades)`)
      lines.push(`- Cantidad Total: ${canapesPackUnits} unidades`)
      lines.push(`- Variedades Escogidas (${selectedPackVarieties.length} de ${maxPackVarietiesAllowed}):`)
      selectedPackVarieties.forEach((v, idx) => {
        lines.push(`  ${idx + 1}. ${v}`)
      })
      lines.push(`- Precio Canapés: Lo informa directamente el dueño de Maxibanquete vía WhatsApp al recibir el pedido para garantizar elaboración fresca.`)
    } else if (isGraduation) {
      lines.push(`- Modalidad: Cocktail Graduación ($5.500 por persona)`)
      lines.push(`- Cantidad de Invitados: ${peopleCount} personas`)
      lines.push(`- Servicio Incluido: Tapaditos de pasta, churrascos queso cremoso, hamburguesas caseras 5% grasa cheddar, empanadas mixtas de horno, dulces finos cocktail, 200 canapés mixtos, bebidas y jugos 1 hr, copas/vasos, garzones y montaje protocolar completo.`)
    } else if (selectedServiceId === 'combos_personas') {
      lines.push(`- Modalidad: Combo Surtido Mixto de Fábrica (Listo para calentar y servir)`)
      lines.push(`- Composición: Bocados mixtos surtidos (empanadas pino/queso, tapaditos de pasta mixta, brochetas, hamburguesas cocktail, churrascos, pizzetas, dulces y canapés).`)
    } else if (selectedServiceId === 'almuerzo_mesa') {
      const dObj = MAIN_DISHES_DATA.find((d) => d.fullDescription === selectedMainDish)
      const dsObj = DESSERTS_DATA.find((d) => d.fullDescription === selectedDessert)

      lines.push(`- Modalidad Contratada: ${currentOption.name}`)
      lines.push(`- Cantidad de Comensales: ${peopleCount} personas`)
      lines.push(``)
      lines.push(`*PLATO DE FONDO ELEGIDO (1 a elección para el evento):*`)
      if (dObj) {
        lines.push(`  • *${dObj.title}*`)
        lines.push(`    - Guarnición: ${dObj.accompaniment}`)
        lines.push(`    - Ensalada: ${dObj.salad}`)
      } else {
        lines.push(`  • ${selectedMainDish}`)
      }
      lines.push(``)
      lines.push(`*POSTRE ELEGIDO (1 a elección para el evento):*`)
      if (dsObj) {
        lines.push(`  • *${dsObj.title}*`)
        lines.push(`    - Composición: ${dsObj.details}`)
        lines.push(`    - Decoración: ${dsObj.decoration}`)
      } else {
        lines.push(`  • ${selectedDessert}`)
      }
      lines.push(``)
      lines.push(`*SERVICIO DE BEBESTIBLES A LA MESA:*`)
      if (selectedOptionId === 'almuerzo_bebestible') {
        lines.push(`- Servicio de Bebestible: SÍ, INCLUIDO DURANTE 3 HORAS ILIMITADOS (Jugos naturales, bebidas línea Coca-Cola, agua mineral con y sin gas servidas continuamente a las mesas).`)
      } else {
        lines.push(`- Servicio de Bebestible: Menú base sin barra continua de 3 horas.`)
      }
      lines.push(``)
      lines.push(`*EQUIPAMIENTO & PERSONAL COMPLETO INCLUIDO:*`)
      lines.push(`- Chef ejecutivo y ayudantes de cocina dedicados`)
      lines.push(`- Garzones uniformados de gala`)
      lines.push(`- Vajilla completa de loza, cubertería fina y copas`)
      lines.push(`- Mantelería de gala y servilletas de género`)
      lines.push(`- Arreglos florales naturales en mesas`)
      lines.push(`- Montaje protocolar y traslado en Santiago`)
    } else if (selectedServiceId === 'fiesta_bar_dj') {
      lines.push(`- Modalidad: Fiesta Completa con Bar Abierto 5 Horas + DJ Profesional en Vivo`)
      lines.push(`- Incluye: Banquete cóctel 8 variedades, toda la coctelería ilimitada durante 5 horas, sonido, iluminación y DJ.`)
    } else if (selectedServiceId === 'cocktail_gourmet') {
      lines.push(`- Modalidad: Menú Cocktail Gourmet Oficial del Chef`)
      lines.push(`- Incluye: 5 canapés finos (jamón serrano con queso crema, camarón finas hierbas, salame ahumado con choclito al sésamo, espárragos salteados y salmón con queso crema y amapolas), empanadas de horno, brochetas de carne, hamburguesas caseras cheddar, dulces y bebestible.`)
    }

    // Extra canapes add-on
    if (includeExtraCanapes && !isCanapesPack) {
      lines.push(``)
      lines.push(`*CANAPÉS EXTRAS ADICIONALES*`)
      lines.push(`- Cantidad Extras: +${extraCanapesUnits} unidades`)
      lines.push(`- Variedades Extras (${selectedExtraCanapesVarieties.length} de ${maxExtraVarietiesAllowed}):`)
      selectedExtraCanapesVarieties.forEach((v, idx) => {
        lines.push(`  ${idx + 1}. ${v}`)
      })
      lines.push(`- Valor Canapés Extras: El valor preferencial de tus +${extraCanapesUnits} canapés adicionales lo confirma de forma directa el dueño de Maxibanquete vía WhatsApp.`)
    }

    if (specialNotes.trim()) {
      lines.push(``)
      lines.push(`- Indicaciones Especiales: ${specialNotes.trim()}`)
    }

    lines.push(``)
    lines.push(`*DESGLOSE DEL PRESUPUESTO*`)
    if (isCanapesPack) {
      lines.push(`- Cantidad: ${canapesPackUnits} unidades de Canapés Cocktail`)
      lines.push(`- Variedades: ${selectedPackVarieties.length} recetas artesanales`)
      lines.push(`- Presupuesto: Precio informado directamente por el dueño de Maxibanquete`)
      lines.push(`- Despacho en Santiago: Incluido`)
    } else {
      lines.push(`- Total Servicio Base: ${formatCLP(calculation.grandTotal)}`)
      if (includeExtraCanapes) {
        lines.push(`- Canapés Extras (+${extraCanapesUnits} un.): A confirmar por el dueño vía WhatsApp`)
      }
      lines.push(`- Abono Requerido para Reserva (40%): ${formatCLP(calculation.suggestedAbono)}`)
      lines.push(`- Saldo Restante (60% al evento): ${formatCLP(calculation.remainingBalance)}`)
      lines.push(`- Despacho en Santiago: Incluido`)
    }
    lines.push(``)
    lines.push(`¿Tienen disponibilidad en agenda para coordinar? ¡Quedo atento(a) a su confirmación!`)

    const encoded = encodeURIComponent(lines.join('\n'))
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
  }, [
    clientName,
    clientPhone,
    eventDate,
    eventTime,
    eventCommune,
    eventAddress,
    eventType,
    invoiceType,
    specialNotes,
    customGourmetCanapes,
    currentService,
    currentOption,
    peopleCount,
    calculation,
    selectedServiceId,
    selectedCanapes,
    selectedMainDish,
    selectedDessert,
    selectedBarDrinks,
    isGraduation,
    isCanapesPack,
    canapesPackUnits,
    selectedPackVarieties,
    maxPackVarietiesAllowed,
    includeExtraCanapes,
    extraCanapesUnits,
    selectedExtraCanapesVarieties,
    maxExtraVarietiesAllowed
  ])

  const copyCotizacionText = () => {
    let text = ''
    if (isCanapesPack) {
      text = `COTIZACIÓN MAXIBANQUETE\n\nCliente: ${clientName || 'Sin especificar'}\nTeléfono: ${clientPhone || 'Sin especificar'}\nFecha: ${eventDate || 'Por coordinar'} ${eventTime ? `(${eventTime})` : ''}\nLugar: ${eventCommune || 'Santiago'} ${eventAddress ? `- ${eventAddress}` : ''}\nServicio: Canapés Cocktail (Venta por 100 de canapés)\nCantidad: ${canapesPackUnits} unidades\nVariedades Elegidas (${selectedPackVarieties.length} de ${maxPackVarietiesAllowed}):\n${selectedPackVarieties.map((v, i) => `  ${i + 1}. ${v}`).join('\n')}\nPresupuesto: Precio informado directamente por el dueño de Maxibanquete\nContacto: ${WHATSAPP_DISPLAY}`
    } else if (selectedServiceId === 'almuerzo_mesa') {
      const dObj = MAIN_DISHES_DATA.find((x) => x.fullDescription === selectedMainDish)
      const dsObj = DESSERTS_DATA.find((x) => x.fullDescription === selectedDessert)
      text = `COTIZACIÓN MAXIBANQUETE — ALMUERZO MENÚ A LA MESA\n\nCliente: ${clientName || 'Sin especificar'}\nTeléfono: ${clientPhone || 'Sin especificar'}\nFecha: ${eventDate || 'Por coordinar'} ${eventTime ? `(${eventTime})` : ''}\nLugar: ${eventCommune || 'Santiago'} ${eventAddress ? `- ${eventAddress}` : ''}\nModalidad: ${currentOption.name}\nComensales: ${peopleCount} personas\n\nPLATO DE FONDO ELEGIDO (1 a elección):\n  • ${dObj ? `${dObj.title}\n    - Guarnición: ${dObj.accompaniment}\n    - Ensalada: ${dObj.salad}` : selectedMainDish}\n\nPOSTRE ELEGIDO (1 a elección):\n  • ${dsObj ? `${dsObj.title}\n    - Composición: ${dsObj.details}\n    - Decoración: ${dsObj.decoration}` : selectedDessert}\n\nBEBESTIBLE: ${selectedOptionId === 'almuerzo_bebestible' ? 'Servicio 3 Horas Ilimitados Incluido (Jugos, bebidas y agua mineral)' : 'Almuerzo base sin servicio de barra 3 hrs'}\nMONTAJE: Chef, ayudantes, garzones uniformados, vajilla de loza, cristalería, mantelería de gala, arreglos florales y despacho en Santiago.\n\nTotal Base: ${formatCLP(calculation.grandTotal)}${includeExtraCanapes ? `\nCanapés Extras: +${extraCanapesUnits} un. (${selectedExtraCanapesVarieties.join(', ')})` : ''}\nAbono reserva (40%): ${formatCLP(calculation.suggestedAbono)}\nSaldo evento (60%): ${formatCLP(calculation.remainingBalance)}\nContacto directo: ${WHATSAPP_DISPLAY}`
    } else {
      text = `COTIZACIÓN MAXIBANQUETE\n\nCliente: ${clientName || 'Sin especificar'}\nTeléfono: ${clientPhone || 'Sin especificar'}\nFecha: ${eventDate || 'Por coordinar'} ${eventTime ? `(${eventTime})` : ''}\nLugar: ${eventCommune || 'Santiago'} ${eventAddress ? `- ${eventAddress}` : ''}\nServicio: ${currentService.name} - ${currentOption.name}\nInvitados: ${peopleCount} personas\nTotal Base: ${formatCLP(calculation.grandTotal)}${includeExtraCanapes ? `\nCanapés Extras: +${extraCanapesUnits} un. (${selectedExtraCanapesVarieties.join(', ')}) - El valor preferencial de tus +${extraCanapesUnits} canapés adicionales lo confirma de forma directa el dueño de Maxibanquete vía WhatsApp.` : ''}\nAbono reserva (40%): ${formatCLP(calculation.suggestedAbono)}\nSaldo evento (60%): ${formatCLP(calculation.remainingBalance)}\nDespacho en Santiago: Incluido\nContacto: ${WHATSAPP_DISPLAY}`
    }
    navigator.clipboard?.writeText(text)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2500)
  }

  return (
    <div className="min-h-screen bg-white text-[#24211d] font-sans selection:bg-[#ebd7a7] selection:text-[#1c1a17]">
      {/* HEADER / NAVIGATION - BARRA NEGRA QUE COMBINA CON EL LOGO */}
      <header className="sticky top-0 z-40 bg-[#0e0d0b] text-white border-b border-[#24211b] shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 sm:gap-4 group">
            <img
              src="/assets/fotos/logo_maxibanquete_transparente.png"
              alt="Banquetería Maxibanquete"
              className="h-14 sm:h-18 w-auto max-w-[190px] sm:max-w-[240px] object-contain drop-shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="hidden md:block border-l border-white/20 pl-3.5">
              <span className="font-serif text-lg sm:text-xl font-black tracking-wider text-white block leading-none">
                MAXI<span className="text-[#eed182]">BANQUETE</span>
              </span>
              <p className="text-[10px] sm:text-[11px] text-[#caa44e] font-light tracking-wide italic mt-1 line-clamp-1">
                Sabor, calidad y distinción en cada detalle
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-300">
            <a href="#notas-importantes" className="text-[#eed182] hover:text-[#fae5a6] transition-colors flex items-center gap-1 font-semibold">
              <AlertCircle className="w-4 h-4" /> Notas Importantes
            </a>
            <a href="#institucionales" className="hover:text-[#eed182] transition-colors font-semibold text-stone-200">
              Grandes Clientes
            </a>
            <a href="#puesta-en-escena" className="hover:text-[#eed182] transition-colors">
              Puesta en Escena
            </a>
            <a href="#servicios" className="hover:text-[#eed182] transition-colors">
              Menús Oficiales
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#caa44e] via-[#dfba63] to-[#caa44e] hover:from-[#d8b259] hover:to-[#eed182] text-[#141210] font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#141210]" />
              <span>Cotizar Evento</span>
            </a>

            {/* BOTÓN 3 RAYITAS / MENÚ HAMBURGUESA PARA CELULAR (BARRAS BLANCAS) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 border border-white/10 active:scale-95 transition-all"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#eed182]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL (ORDENADO ESTRICTAMENTE SEGÚN LA SECUENCIA DE SECCIONES) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#14120e] border-t border-[#2e2920] px-4 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1.5 max-w-md mx-auto">
              {/* 1. INICIO */}
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/5 text-stone-200 font-medium text-sm transition"
              >
                <span className="text-[#eed182] font-serif text-sm">✦</span>
                Inicio
              </a>

              {/* 2. NOTAS IMPORTANTES */}
              <a
                href="#notas-importantes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/5 text-amber-300 font-medium text-sm transition"
              >
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Notas Importantes & Políticas de Reserva
              </a>

              {/* 3. GRANDES CLIENTES */}
              <a
                href="#institucionales"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/5 text-stone-200 font-medium text-sm transition"
              >
                <Award className="w-4 h-4 text-[#eed182]" />
                Grandes Clientes (Bomberos, Inacap, La Araucana)
              </a>

              {/* 4. PUESTA EN ESCENA */}
              <a
                href="#puesta-en-escena"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/5 text-stone-200 font-medium text-sm transition"
              >
                <Eye className="w-4 h-4 text-[#eed182]" />
                Puesta en Escena & Galería de Montajes
              </a>

              {/* 5. MENÚS OFICIALES */}
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-white/5 text-stone-200 font-medium text-sm transition"
              >
                <Utensils className="w-4 h-4 text-[#eed182]" />
                Menús Oficiales & Precios
              </a>

              {/* 6. COTIZADOR DE EVENTOS */}
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#caa44e]/25 to-transparent border border-[#caa44e]/50 text-[#eed182] font-bold text-sm"
              >
                <span className="flex items-center gap-2.5">
                  <Calculator className="w-4 h-4 text-[#eed182]" />
                  Cotizador Oficial de Eventos
                </span>
                <span className="text-[10px] bg-[#caa44e] text-black px-2 py-0.5 rounded-md font-extrabold uppercase">
                  Cotizar
                </span>
              </a>

              {/* REDES SOCIALES EN CELULAR */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 hover:from-[#f09433]/30 hover:to-[#bc1888]/30 border border-[#dc2743]/40 text-white font-medium text-xs transition"
                >
                  <Instagram className="w-3.5 h-3.5 text-rose-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/30 text-white font-medium text-xs transition"
                >
                  <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Hablar directo con {CONTACT_NAME} por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - FONDO BLANCO ELEGANTE, SIN LOGO AL MEDIO */}
      <section id="inicio" className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200 bg-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#eed182]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-[#d9af50]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1c1a17] leading-tight">
              Banquetería & Coctelería de Alta Gama para Eventos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#946e1c] via-[#bf9432] to-[#805e16]">Inolvidables</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#524d44] font-normal leading-relaxed max-w-2xl mx-auto">
              Servicio gastronómico integral con trayectoria demostrada ante instituciones de máxima exigencia protocolar, directivos y celebraciones familiares. Menús estandarizados de autor, barras abiertas de 5 horas y presupuesto inmediato online.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cotizador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#b38622] via-[#caa44e] to-[#99721a] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#b38622]/20 hover:scale-[1.02] transition"
              >
                <Calculator className="w-4 h-4 text-white" />
                Cotizar Evento
              </a>
              <a
                href="#institucionales"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#d6d0c4] bg-white hover:bg-[#faf7f2] text-[#2b2723] font-semibold text-sm transition shadow-xs"
              >
                Ver Eventos Reales & Clientes
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#615c54]">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#a87e22]" /> +13 años de trayectoria profesional</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#a87e22]" /> Despacho incluido en Santiago urbano</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#a87e22]" /> Boleta o Factura electrónica</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOTAS IMPORTANTES (AL INICIO) */}
      <section id="notas-importantes" className="py-16 bg-[#faf7f2] border-b border-[#e8e3d8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border-2 border-[#e3b858] rounded-3xl p-6 sm:p-8 shadow-sm text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#fdf5e2] border border-[#ecd295] text-[#b38622] mb-3">
              <AlertCircle className="w-8 h-8 stroke-[2.5]" />
            </div>

            <span className="block text-xs uppercase tracking-widest text-[#99701a] font-bold mb-1">
              Política Fundamental de Reserva
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1a17] tracking-wide">
              NO AGENDAMOS EVENTOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99701a] via-[#c2962f] to-[#805e16]">
                SIN ABONO PREVIO
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#4f4a42] font-medium max-w-2xl mx-auto leading-relaxed">
              Para garantizar la fecha exclusiva en agenda y la adquisición oportuna de insumos frescos de alta cocina, <b>toda reserva requiere de abono previo confirmado</b>.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#8f6918] font-serif italic">
              Agradecemos sinceramente su comprensión y preferencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-white border border-[#e8e2d8] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf3e3] border border-[#ebdcb8] flex items-center justify-center mx-auto mb-3">
                <Truck className="w-5 h-5 text-[#a87e22]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1c1a17] mb-1.5">
                Despacho Incluido a Domicilio
              </h3>
              <p className="text-xs text-[#5c564d] leading-relaxed">
                Nuestros combos y menús incluyen despacho dentro del radio urbano de la Región Metropolitana (Santiago).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e8e2d8] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf3e3] border border-[#ebdcb8] flex items-center justify-center mx-auto mb-3">
                <FileText className="w-5 h-5 text-[#a87e22]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1c1a17] mb-1.5">
                Entregamos Boleta o Factura
              </h3>
              <p className="text-xs text-[#5c564d] leading-relaxed">
                Disponibilidad de comprobante formal (Boleta o Factura electrónica) para empresas, colegios y particulares.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e8e2d8] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf3e3] border border-[#ebdcb8] flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5 text-[#a87e22]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1c1a17] mb-1.5">
                Prueba en Vivo por WhatsApp
              </h3>
              <p className="text-xs text-[#5c564d] leading-relaxed">
                El cotizador envía el mensaje directo y formateado a tu número de prueba: <b className="text-[#1c1a17]">{WHATSAPP_DISPLAY}</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTITUCIONES Y GRANDES EVENTOS (INACAP, BOMBEROS, LA ARAUCANA) */}
      <section id="institucionales" className="py-20 lg:py-24 bg-white border-b border-[#e8e3d8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#8f6918] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#faf3e3] border border-[#ebdcb8] inline-block mb-3 shadow-xs">
              🏛️ Respaldo & Trayectoria Comprobada
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1a17]">
              Grandes Instituciones y Empresas que Confían en Nuestro Servicio
            </h2>
          </div>

          {/* 3 CASOS EMBLEMÁTICOS CON FOTOGRAFÍA REAL */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            {/* INACAP */}
            <div className="group rounded-3xl bg-[#fbfaf7] border border-[#e8e2d8] hover:border-[#caa44e]/60 overflow-hidden shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="/assets/fotos/inacap_c7c9d7b0.jpg"
                  alt="Banquetería institucional en INACAP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-red-600/95 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  INACAP
                </div>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase font-bold text-[#8f6918] tracking-wider block mb-1">
                  Grandes Convocatorias Académicas
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1c1a17] mb-2">
                  Recepciones Académicas & Conferencias
                </h3>
                <p className="text-xs text-[#555047] leading-relaxed">
                  Banquete en el hall central de INACAP con mesones de más de 10 metros, arreglos de girasoles naturales, jugos recién preparados, pastelería artesanal y bocados de alta cocina para directivos y autoridades.
                </p>
              </div>
            </div>

            {/* BOMBEROS DE CHILE */}
            <div className="group rounded-3xl bg-[#fbfaf7] border border-[#e8e2d8] hover:border-[#caa44e]/60 overflow-hidden shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="/assets/fotos/bombero_cbf938d9.jpg"
                  alt="Gala oficial Cuerpo de Bomberos de Chile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-amber-600/95 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Bomberos de Chile
                </div>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase font-bold text-[#8f6918] tracking-wider block mb-1">
                  Ceremonias Solemnes & Protocolo
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1c1a17] mb-2">
                  Galas de Honor & Aniversarios
                </h3>
                <p className="text-xs text-[#555047] leading-relaxed">
                  Coctelería de gala para compañías de bomberos, desfiles y aniversarios solemnes. Montajes protocolares con mini hamburguesas caseras cheddar, canapés gourmet, alfajores chilenos y atención de excelencia.
                </p>
              </div>
            </div>

            {/* LA ARAUCANA */}
            <div className="group rounded-3xl bg-[#fbfaf7] border border-[#e8e2d8] hover:border-[#caa44e]/60 overflow-hidden shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="/assets/fotos/la_araucana_2d9f7e8b.jpg"
                  alt="Evento corporativo Caja La Araucana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-blue-600/95 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Caja La Araucana
                </div>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase font-bold text-[#8f6918] tracking-wider block mb-1">
                  Encuentros Corporativos & Bienestar
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1c1a17] mb-2">
                  Jornadas Ejecutivas & Coffee Breaks
                </h3>
                <p className="text-xs text-[#555047] leading-relaxed">
                  Servicio gastronómico para capacitaciones, ferias y asambleas institucionales. Estaciones en madera natural con flores frescas, medialunas rellenas, café de grano caliente y ambientación corporativa.
                </p>
              </div>
            </div>
          </div>

          {/* GALERÍA DE ALTA GASTRONOMÍA & DETALLES EN VIVO */}
          <div id="puesta-en-escena" className="bg-[#f8f5ee] border border-[#e8e2d8] rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#8f6918] tracking-wider block mb-1">
                  Calidad y Sabor en Cada Detalle
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1a17]">
                  Nuestra Puesta en Escena y Presentación
                </h3>
              </div>
              <p className="text-xs text-[#736c60] flex items-center gap-1.5 font-medium">
                <ZoomIn className="w-4 h-4 text-[#8f6918]" />
                <span>Haz clic o toca cualquier foto para ampliarla en alta resolución</span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY_PHOTOS.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setActivePhotoIndex(pIdx)}
                  className="group relative rounded-2xl overflow-hidden border border-[#ded9ce] aspect-square shadow-xs cursor-pointer active:scale-95 transition-all hover:shadow-lg hover:border-[#caa44e]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                    <p className="text-[11px] font-bold text-white leading-tight line-clamp-2">
                      {photo.title}
                    </p>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-[#eed182] font-semibold bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded self-start">
                      <ZoomIn className="w-3 h-3" /> Ampliar foto
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS Y MENÚS DETALLADOS */}
      <section id="servicios" className="py-20 bg-[#faf8f5] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#8f6918] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#faf3e3] border border-[#ebdcb8] inline-block mb-3 shadow-xs">
              Catálogo Oficial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1a17]">
              Nuestros Servicios & Menús Detallados
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveMenuTab(srv.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    activeMenuTab === srv.id
                      ? 'bg-[#1c1a17] text-white font-bold shadow-sm scale-105'
                      : 'bg-white text-[#4f4a42] hover:bg-[#f6f3ed] border border-[#ded8cd]'
                  }`}
                >
                  {srv.name}
                </button>
              ))}
            </div>
          </div>

          {SERVICES.filter((s) => s.id === activeMenuTab).map((service) => (
            <div key={service.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.options.map((opt) => (
                  <div
                    key={opt.id}
                    className="bg-white border border-[#e8e2d8] rounded-2xl p-6 flex flex-col justify-between hover:border-[#caa44e]/70 transition-all shadow-xs hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-serif text-lg font-bold text-[#1c1a17] leading-snug">
                          {opt.name.split('(')[0]}
                        </h4>
                        <span className="font-bold text-sm text-[#8f6918] bg-[#faf3e3] px-2.5 py-1 rounded-lg border border-[#ebdcb8] shrink-0">
                          {service.id === 'canapes_100' ? 'Tarifa a convenir' : `${formatCLP(opt.price)} ${service.isCombo ? '' : 'p/p'}`}
                        </span>
                      </div>

                      <p className="text-xs text-[#5c564d] mb-4 leading-relaxed">
                        {opt.description}
                      </p>

                      <div className="space-y-2.5 pt-3 border-t border-[#f0ece4]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f6918] block">
                          Detalle del servicio:
                        </span>
                        <ul className="space-y-2">
                          {opt.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs text-[#403c36] flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#a87e22] shrink-0 mt-0.5" />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[#f0ece4]">
                      <button
                        type="button"
                        onClick={() => {
                          handleServiceChange(service.id)
                          if (service.isCombo) {
                            handleComboChange(opt.id)
                          } else {
                            setSelectedOptionId(opt.id)
                          }
                          const el = document.getElementById('cotizador')
                          el?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="w-full py-2.5 rounded-xl border border-[#caa44e]/60 bg-[#faf5ea] hover:bg-[#1c1a17] hover:text-white text-[#8f6918] text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        Cotizar este Menú
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* DETALLE COMPLETO DE PLATOS Y POSTRES PARA ALMUERZO A LA MESA */}
              {service.id === 'almuerzo_mesa' && (
                <div className="mt-10 bg-white border-2 border-[#caa44e]/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8f6918] bg-[#faf3e3] px-3.5 py-1.5 rounded-full border border-[#ebdcb8] inline-block mb-2">
                      🍽️ Carta Completa Detallada
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1a17]">
                      Opciones de Platos de Fondo & Postres
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c564d] mt-2 leading-relaxed">
                      Cada comensal disfruta de un menú completo servido a la mesa. Revisa a continuación el detalle de cada corte, guarnición, ensalada fresca y postre de autor elaborado por nuestro Chef.
                    </p>
                  </div>

                  {/* 5 PLATOS DE FONDO DETALLADOS */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#8f6918] flex items-center gap-2">
                      <span>🥩</span> 5 Platos de Fondo a Elección con Guarniciones y Ensaladas:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {MAIN_DISHES_DATA.map((dish) => (
                        <div
                          key={dish.id}
                          className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d8] hover:border-[#caa44e]/70 transition-all space-y-2 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-lg">{dish.icon}</span>
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#faf3e3] text-[#8f6918] border border-[#ebdcb8]">
                                {dish.tag}
                              </span>
                            </div>
                            <h5 className="font-serif text-sm font-bold text-[#1c1a17] leading-snug">
                              {dish.title}
                            </h5>
                            <div className="mt-2 space-y-1 text-xs text-[#474239] pl-1 border-l-2 border-[#caa44e]/60">
                              <p className="leading-snug">
                                <b className="text-[#1c1a17]">Guarnición:</b> {dish.accompaniment}
                              </p>
                              <p className="leading-snug">
                                <b className="text-[#1c1a17]">Ensalada:</b> {dish.salad}
                              </p>
                            </div>
                          </div>
                          <p className="text-[11px] text-[#787163] italic pt-2 border-t border-[#eee9df]">
                            {dish.fullDescription}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4 POSTRES DETALLADOS */}
                  <div className="space-y-4 pt-4 border-t border-[#f0ece4]">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#8f6918] flex items-center gap-2">
                      <span>🍨</span> 4 Postres a Elección:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {DESSERTS_DATA.map((dessert) => (
                        <div
                          key={dessert.id}
                          className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d8] hover:border-[#caa44e]/70 transition-all space-y-2 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xl mb-1.5 block">{dessert.icon}</span>
                            <h5 className="font-serif text-sm font-bold text-[#1c1a17] leading-snug">
                              {dessert.title}
                            </h5>
                            <div className="mt-2 space-y-1 text-xs text-[#474239] pl-1 border-l-2 border-[#caa44e]/60">
                              <p className="leading-snug">
                                <b className="text-[#1c1a17]">Receta:</b> {dessert.details}
                              </p>
                              <p className="leading-snug">
                                <b className="text-[#1c1a17]">Toque Fino:</b> {dessert.decoration}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EQUIPAMIENTO Y BOTÓN */}
                  <div className="p-4 rounded-2xl bg-[#fdfaf3] border border-[#ebdcb8] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#4d473e] space-y-1">
                      <p className="font-bold text-[#1c1a17] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Incluye todo el equipamiento, vajilla de loza, cristalería, manteles de tela, Chef y garzones.
                      </p>
                      <p className="text-[11px] text-[#736c60]">
                        Puedes personalizar los platos exactos en el cotizador en línea y enviarlos directamente por WhatsApp al dueño.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        handleServiceChange('almuerzo_mesa')
                        const el = document.getElementById('cotizador')
                        el?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="shrink-0 px-5 py-2.5 rounded-xl bg-[#1c1a17] hover:bg-[#b88c28] text-[#eed182] hover:text-white font-bold text-xs transition flex items-center gap-2 shadow-xs cursor-pointer"
                    >
                      <Calculator className="w-4 h-4" />
                      Cotizar Almuerzo a la Mesa
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CATÁLOGO DE CANAPÉS COCKTAIL */}
      <section id="canapes" className="py-16 bg-white border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[#faf8f5] border border-[#e8e2d8] rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8f6918] bg-[#faf3e3] px-3 py-1 rounded-full border border-[#ebdcb8] inline-block mb-2">
                Pequeños bocados, grandes momentos
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1a17]">
                Canapés Cocktail (Venta por 100: 4 variedades a escoger)
              </h3>
              <p className="text-xs sm:text-sm text-[#5a554c] mt-2">
                Catálogo de bocados finos elaborados artesanalmente. En pedidos sobre 100 unidades puedes elegir 4 variedades por cada 100.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#38342e]">
              {CANAPES_CATALOG.map((canape, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 rounded-xl bg-white border border-[#e6e0d5] flex items-start gap-2.5 shadow-2xs"
                >
                  <span className="text-[#a87e22] font-serif text-sm">✦</span>
                  <span className="leading-snug">{canape}</span>
                </div>
              ))}
            </div>

            {/* CTA COTIZAR PACK DE CANAPÉS */}
            <div className="mt-8 pt-6 border-t border-[#e8e2d8] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#ded8cb] shadow-2xs">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1c1a17]">
                  ¿Deseas encargar canapés para tu evento?
                </h4>
                <p className="text-xs text-[#5a554c] mt-0.5">
                  Venta por 100 canapés: Elige 4 variedades por cada 100 unidades en nuestro cotizador.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleServiceChange('canapes_100')
                  const el = document.getElementById('cotizador')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1c1a17] hover:bg-[#2b2722] text-[#eed182] font-bold text-xs uppercase tracking-wider shrink-0 transition shadow-sm cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                Cotizar Pack Canapés (Venta por 100)
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO (AL PENÚLTIMO) */}
      <section id="cotizador" className="py-20 lg:py-24 bg-[#f6f3ec] border-b border-[#e2dcd0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <img
              src="/assets/fotos/logo_maxibanquete_transparente.png"
              alt="Banquetería Maxibanquete"
              className="h-14 sm:h-18 w-auto object-contain mx-auto mb-4 drop-shadow-sm"
            />
            <span className="text-[#8f6918] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#faf3e3] border border-[#ebdcb8] inline-block mb-3 shadow-xs">
              Presupuesto Oficial en Tiempo Real
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1a17]">
              Cotizar Evento
            </h2>
            <p className="mt-3 text-[#5a554c] text-sm sm:text-base">
              Selecciona tu tipo de servicio y calcula el total exacto con toda la información oficial antes de reservar por WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* CONTROLES DEL COTIZADOR (8 COLS) - ORDENADO SEGÚN LA TABLILLA DE AL LADO */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              
              {/* PASO 1: DATOS DEL CLIENTE & COORDINACIÓN DEL EVENTO */}
              <div className="bg-white border border-[#e6e0d5] rounded-2xl p-5 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                    Tus Datos y Coordinación del Evento
                  </h3>
                </div>
                <p className="text-xs text-[#666055] mb-5 ml-9">
                  Ingresa tus datos de contacto y la información del evento para calcular tu presupuesto en tiempo real.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Nombre Completo o Empresa:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Carolina Morales / Colegio San Agustín"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Teléfono / WhatsApp de Contacto:
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +56 9 1234 5678"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Fecha Tentativa del Evento:
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Horario Estimado:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 19:30 hrs (o de 13:00 a 17:00)"
                      value={eventTime}
                      onChange={(e) => setEventTime(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Comuna en Santiago (RM):
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Providencia, Las Condes, Maipú..."
                      value={eventCommune}
                      onChange={(e) => setEventCommune(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Dirección o Recinto del Evento:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Sede social, Parcela, Domicilio particular..."
                      value={eventAddress}
                      onChange={(e) => setEventAddress(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Tipo de Celebración:
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    >
                      <option value="Cumpleaños / Aniversario">Cumpleaños / Aniversario</option>
                      <option value="Fiesta de Graduación">Fiesta de Graduación</option>
                      <option value="Matrimonio / Boda">Matrimonio / Boda</option>
                      <option value="Evento de Empresa / Corporativo">Evento de Empresa / Corporativo</option>
                      <option value="Bautizo / Primera Comunión">Bautizo / Primera Comunión</option>
                      <option value="Gala Institucional">Gala Institucional</option>
                      <option value="Otro">Otro tipo de celebración</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#403c36] mb-1">
                      Comprobante Requerido:
                    </label>
                    <select
                      value={invoiceType}
                      onChange={(e) => setInvoiceType(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-[#ded8cd] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1a17] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                    >
                      <option value="Boleta Electrónica">Boleta Electrónica</option>
                      <option value="Factura Electrónica">Factura Electrónica</option>
                      <option value="Por coordinar">Por coordinar</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* PASO 2: SELECCION DE SERVICIO */}
              <div className="bg-white border border-[#e6e0d5] rounded-2xl p-5 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs">
                    2
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                    Selecciona el Tipo de Servicio
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {SERVICES.map((srv) => {
                    const isSelected = selectedServiceId === srv.id
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => handleServiceChange(srv.id)}
                        className={`text-left p-4 rounded-xl border transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#fcf8ee] border-[#b88c28] ring-1 ring-[#b88c28] shadow-xs'
                            : 'bg-[#faf8f5] border-[#e8e2d8] hover:border-[#caa44e]/50 hover:bg-white'
                        }`}
                      >
                        <div>
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#8f6918] px-2 py-0.5 rounded bg-[#faf3e3] border border-[#ebdcb8] mb-1.5">
                            {srv.tag}
                          </span>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#1c1a17] leading-snug">
                            {srv.name}
                          </h4>
                          <p className="text-xs text-[#666055] mt-1 line-clamp-2">
                            {srv.subtitle}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#ece7de] text-xs font-semibold text-[#8f6918]">
                          {srv.id === 'canapes_100' ? (
                            <span className="inline-block bg-[#eed182] text-black font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                              El precio lo informa el dueño
                            </span>
                          ) : (
                            srv.priceNote
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* PASO 3: VARIANTE / COMBO CERRADO */}
              <div className="bg-white border border-[#e6e0d5] rounded-2xl p-5 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs">
                    3
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                    {isCanapesPack
                      ? 'Modalidad del Pack de Canapés'
                      : currentService.isCombo
                      ? 'Selecciona el Combo Cerrado'
                      : 'Selecciona el Nivel de Menú'}
                  </h3>
                </div>

                <div className="space-y-3">
                  {currentService.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id
                    return (
                      <div
                        key={opt.id}
                        onClick={() => {
                          if (currentService.isCombo) {
                            handleComboChange(opt.id)
                          } else {
                            setSelectedOptionId(opt.id)
                          }
                        }}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#fcf8ee] border-[#b88c28] ring-1 ring-[#b88c28]/60 shadow-2xs'
                            : 'bg-[#faf8f5] border-[#e8e2d8] hover:border-[#caa44e]/50 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-[#b88c28] bg-[#b88c28]' : 'border-stone-400'
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span className="font-semibold text-sm sm:text-base text-[#1c1a17]">
                              {opt.name}
                            </span>
                          </div>
                          <span className="font-bold text-sm text-[#8f6918] shrink-0">
                            {isCanapesPack ? (
                              <span className="bg-[#eed182] text-black font-extrabold px-2.5 py-1 rounded text-xs uppercase tracking-wide">
                                Precio por el dueño
                              </span>
                            ) : (
                              `${formatCLP(opt.price)} ${currentService.isCombo ? '' : 'p/pers.'}`
                            )}
                          </span>
                        </div>
                        <p className="text-xs text-[#666055] mt-1.5 ml-7">
                          {opt.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* PASO 4: CANTIDAD DE INVITADOS O CANAPÉS */}
              <div className="bg-white border-2 border-[#caa44e]/70 rounded-2xl p-5 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs">
                      4
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                      {isCanapesPack
                        ? 'Cantidad de Canapés Solicitados (Venta por 100)'
                        : isGraduation
                        ? 'Cantidad de Invitados para Graduación'
                        : currentService.isCombo
                        ? 'Capacidad del Combo Seleccionado'
                        : 'Cantidad de Invitados'}
                    </h3>
                  </div>
                  {isCanapesPack ? (
                    <span className="inline-flex items-center text-xs font-bold text-[#8f6918] bg-[#faf3e3] border border-[#ebdcb8] px-2.5 py-1 rounded-full">
                      🍱 {canapesPackUnits} unidades (Venta por 100) · {maxPackVarietiesAllowed} variedades
                    </span>
                  ) : isGraduation ? (
                    <span className="inline-flex items-center text-xs font-bold text-[#8f6918] bg-[#faf3e3] border border-[#ebdcb8] px-2.5 py-1 rounded-full">
                      🎓 Tarifa oficial: $5.500 por persona (Mín. 100)
                    </span>
                  ) : currentService.isCombo ? (
                    <span className="inline-flex items-center text-xs font-bold text-[#8f6918] bg-[#faf3e3] border border-[#ebdcb8] px-2.5 py-1 rounded-full">
                      📦 Pack Cerrado para {peopleCount} personas
                    </span>
                  ) : (
                    <span className="text-xs text-[#736d63]">
                      Mínimo: {currentService.minPeople} personas
                    </span>
                  )}
                </div>

                {isCanapesPack ? (
                  <>
                    {/* AVISO DESTACADO EN LETRA NEGRA: EL PRECIO LO DICE EL DUEÑO */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#eed182] border-2 border-[#b38622] text-black shadow-sm mb-4 space-y-1">
                      <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                        <Info className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                        <span>PRECIO DE LOS CANAPÉS: LO DICE EL DUEÑO</span>
                      </div>
                      <p className="text-xs text-black font-bold leading-snug">
                        El valor preferencial de tus {canapesPackUnits} canapés lo confirma de forma directa el dueño de Maxibanquete vía WhatsApp al recibir tu pedido.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center bg-[#f6f3ec] border border-[#e2ded5] rounded-xl p-1.5 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleCanapesCountChange(canapesPackUnits - 100)}
                          className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                          aria-label="Restar 100 canapés"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <div className="px-6 text-center min-w-[120px]">
                          <span className="font-serif text-2xl font-bold text-[#8f6918]">
                            {canapesPackUnits}
                          </span>
                          <span className="block text-[10px] uppercase font-bold text-[#736d63]">
                            Canapés (Venta por 100)
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCanapesCountChange(canapesPackUnits + 100)}
                          className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                          aria-label="Sumar 100 canapés"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 w-full sm:flex-1 justify-center sm:justify-start">
                        {[100, 200, 300, 400, 500, 600].map((preset) => {
                          const isPresetActive = canapesPackUnits === preset
                          const varCount = Math.min(CANAPES_CATALOG.length, (preset / 100) * 4)
                          return (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => handleCanapesCountChange(preset)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                isPresetActive
                                  ? 'bg-[#1c1a17] text-white shadow-xs'
                                  : 'bg-[#faf8f5] text-[#4f4a42] hover:bg-white border border-[#ded8cd]'
                              }`}
                            >
                              {preset} un. ({varCount} var.)
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* BARRA DESLIZABLE POR 100 */}
                    <div className="mt-5 pt-3">
                      <input
                        type="range"
                        min={100}
                        max={600}
                        step={100}
                        value={canapesPackUnits}
                        onChange={(e) => handleCanapesCountChange(Number(e.target.value))}
                        className="w-full h-2.5 bg-[#e2ded5] rounded-lg appearance-none cursor-pointer accent-[#b88c28]"
                      />
                      <div className="flex justify-between text-[10px] text-[#8a8377] mt-1.5 font-medium">
                        <span>100 un. (4 var.)</span>
                        <span>200 un. (8 var.)</span>
                        <span>300 un. (12 var.)</span>
                        <span>400 un. (14 var.)</span>
                        <span>500 un. (14 var.)</span>
                        <span>600 un.</span>
                      </div>
                    </div>
                  </>
                ) : (!currentService.isCombo || isGraduation) ? (
                  <>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center bg-[#f6f3ec] border border-[#e2ded5] rounded-xl p-1.5 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => {
                            const stepVal = isGraduation ? 10 : 5
                            const minVal = isGraduation ? 100 : currentService.minPeople
                            setPeoplePeopleCount((prev) => Math.max(minVal, prev - stepVal))
                          }}
                          className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                          aria-label="Restar personas"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <div className="px-6 text-center min-w-[90px]">
                          <span className="font-serif text-2xl font-bold text-[#8f6918]">
                            {peopleCount}
                          </span>
                          <span className="block text-[10px] uppercase text-[#736d63]">
                            Personas
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            const stepVal = isGraduation ? 10 : 5
                            const maxVal = isGraduation ? 500 : 300
                            setPeoplePeopleCount((prev) => Math.min(maxVal, prev + stepVal))
                          }}
                          className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                          aria-label="Sumar personas"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 w-full sm:flex-1 justify-center sm:justify-start">
                        {(isGraduation
                          ? [100, 120, 150, 180, 200, 250, 300]
                          : [20, 30, 50, 75, 100, 150]
                        ).map((preset) => {
                          const isPresetActive = peopleCount === preset
                          return (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => setPeoplePeopleCount(preset)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                isPresetActive
                                  ? 'bg-[#1c1a17] text-white shadow-xs'
                                  : 'bg-[#faf8f5] text-[#4f4a42] hover:bg-white border border-[#ded8cd]'
                              }`}
                            >
                              {preset} pers.
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* BARRA DESLIZABLE / SLIDER */}
                    <div className="mt-5 pt-3">
                      <input
                        type="range"
                        min={isGraduation ? 100 : currentService.minPeople}
                        max={isGraduation ? 400 : 250}
                        step={isGraduation ? 10 : 5}
                        value={peopleCount}
                        onChange={(e) => setPeoplePeopleCount(Number(e.target.value))}
                        className="w-full h-2.5 bg-[#e2ded5] rounded-lg appearance-none cursor-pointer accent-[#b88c28]"
                      />
                      <div className="flex justify-between text-[10px] text-[#8a8377] mt-1.5 font-medium">
                        {isGraduation ? (
                          <>
                            <span>100 pers. ($550.000)</span>
                            <span>150 pers.</span>
                            <span>200 pers. ($1.100.000)</span>
                            <span>300 pers.</span>
                            <span>400 pers. ($2.200.000)</span>
                          </>
                        ) : (
                          <>
                            <span>{currentService.minPeople}</span>
                            <span>50</span>
                            <span>100</span>
                            <span>150</span>
                            <span>200</span>
                            <span>250+ pers.</span>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#faf8f5] border border-[#e8e2d8] rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-[#1c1a17] block">
                        Combo Pack fijado para {peopleCount} invitados
                      </span>
                      <span className="text-xs text-[#666055]">
                        Para cambiar la cantidad de personas en esta modalidad, selecciona otro combo en el Paso 3 (10, 15, 20, 30, 50 o 100 personas).
                      </span>
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#8f6918] px-4 shrink-0">
                      {peopleCount} pers.
                    </span>
                  </div>
                )}
              </div>

              {/* PASO 5: COMPOSICIÓN DEL SERVICIO Y REQUERIMIENTOS */}
              <div className="bg-white border-2 border-[#d4b05b]/70 rounded-2xl p-5 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs">
                      5
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                      {isCanapesPack
                        ? `Selección de Variedades de Canapés (${selectedPackVarieties.length} de ${maxPackVarietiesAllowed} escogidas)`
                        : isGraduation
                        ? 'Servicio Incluido en el Pack Graduación ($5.500 p/p)'
                        : selectedServiceId === 'combos_personas'
                        ? 'Composición del Combo Mixto (Todo Incluido)'
                        : selectedServiceId === 'almuerzo_mesa'
                        ? 'Selección de Plato Principal y Postre'
                        : selectedServiceId === 'fiesta_bar_dj'
                        ? 'Detalles de la Fiesta, Bar 5 hrs & DJ'
                        : 'Composición del Menú Cocktail Gourmet (Pack Cerrado)'}
                    </h3>
                  </div>
                </div>

                {/* CASO 0: PACK DE CANAPÉS (VENTA POR 100) */}
                {isCanapesPack ? (
                  <div className="mt-4 space-y-5">
                    <div className="p-4 rounded-xl bg-[#faf5ea] border-2 border-[#caa44e]/70">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="text-[#8f6918] font-bold text-sm flex items-center gap-2">
                          <span>🍱</span> Venta por 100 de canapés: 4 Variedades por cada 100 Canapés
                        </span>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold self-start ${
                          selectedPackVarieties.length === maxPackVarietiesAllowed
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-[#1c1a17] text-[#eed182]'
                        }`}>
                          {selectedPackVarieties.length} de {maxPackVarietiesAllowed} variedades escogidas
                        </span>
                      </div>
                      <p className="text-xs text-[#524d44] leading-relaxed">
                        Para tu pedido de <b>{canapesPackUnits} canapés</b> (Venta por 100), puedes escoger hasta <b>{maxPackVarietiesAllowed} variedades</b> de nuestra carta de 14 recetas finas. {canapesPackUnits < 400 && `Si agregas 100 canapés más en el Paso 4, podrás sumar 4 variedades adicionales.`}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase text-[#8f6918] tracking-wider">
                          Escoge tus {maxPackVarietiesAllowed} variedades ({selectedPackVarieties.length}/{maxPackVarietiesAllowed}):
                        </span>
                        {selectedPackVarieties.length < maxPackVarietiesAllowed ? (
                          <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Puedes elegir {maxPackVarietiesAllowed - selectedPackVarieties.length} más
                          </span>
                        ) : (
                          <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ✓ Selección completa
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {CANAPES_CATALOG.map((canape, cIdx) => {
                          const isSelected = selectedPackVarieties.includes(canape)
                          return (
                            <div
                              key={cIdx}
                              onClick={() => togglePackVariety(canape)}
                              className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition select-none ${
                                isSelected
                                  ? 'bg-[#fcf8ee] border-[#b88c28] ring-1 ring-[#b88c28] shadow-xs'
                                  : 'bg-white border-[#e6e0d5] hover:border-[#caa44e]/60 hover:bg-[#fdfbf7]'
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                                  isSelected
                                    ? 'border-[#b88c28] bg-[#b88c28] text-white'
                                    : 'border-stone-300 bg-stone-50'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </div>
                              <div className="flex-1">
                                <span className={`text-xs leading-snug font-medium block ${
                                  isSelected ? 'text-[#1c1a17] font-semibold' : 'text-[#423e38]'
                                }`}>
                                  {canape}
                                </span>
                                <span className="text-[10px] text-[#8a8377] block mt-0.5">
                                  Variedad #{cIdx + 1}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* AVISO DESTACADO EN LETRA NEGRA: EL PRECIO LO DICE EL DUEÑO */}
                    <div className="p-4 rounded-2xl bg-[#eed182] border-2 border-[#b38622] text-black shadow-md space-y-1.5">
                      <div className="flex items-center gap-2 text-black font-black text-xs sm:text-sm uppercase tracking-wide">
                        <Info className="w-5 h-5 text-black shrink-0 stroke-[2.5]" />
                        <span>EL PRECIO DE LOS 100 CANAPÉS LO DICE EL DUEÑO</span>
                      </div>
                      <p className="text-xs text-black font-bold leading-relaxed">
                        El dueño de Maxibanquete te entregará el valor exacto y disponibilidad preferencial por WhatsApp al recibir las {selectedPackVarieties.length} variedades que escogiste, garantizando la frescura y elaboración artesanal del día.
                      </p>
                    </div>

                    <div className="pt-1">
                      <label className="block text-xs font-semibold text-[#403c36] mb-1.5">
                        ¿Alguna indicación o preferencia especial para tus canapés? (Opcional):
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Empaque especial para transporte, hora exacta de entrega..."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-[#dcd6ca] rounded-xl px-3.5 py-2.5 text-xs text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                      />
                    </div>
                  </div>
                ) : selectedServiceId === 'combos_personas' ? (
                  <div className="mt-4 space-y-4">
                    {isGraduation ? (
                      <div className="p-4 rounded-xl bg-[#faf5ea] border-2 border-[#caa44e]/70">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <span className="text-[#8f6918] font-bold text-sm">🎓 Pack Oficial Cocktail Graduación ($5.500 por persona)</span>
                          <span className="text-[10px] bg-[#1c1a17] text-[#eed182] px-2.5 py-0.5 rounded-full font-bold self-start">
                            Servicio Completo con Garzones & Montaje
                          </span>
                        </div>
                        <p className="text-xs text-[#524d44] leading-relaxed mb-3">
                          Diseñado especialmente para recepciones solemnes de egreso escolar y universitario. Cada asistente cuenta con porciones abundantes y servicio protocolar completo:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🥪 <b>Tapaditos pasta:</b> ave pimiento, salame, jamón almendrado</div>
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🥩 <b>Churrascos:</b> queso cremoso, lechuga, cherry, mayonesa</div>
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🍔 <b>Hamburguesas:</b> caseras 5% grasa, cheddar y salsa inglesa</div>
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🥟 <b>Empanadas mixtas:</b> pino, queso cibulet, napolitana</div>
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🧁 <b>Dulces cocktail:</b> cachitos manjar, alfajores, palmeritas</div>
                          <div className="p-2 rounded-lg bg-white border border-[#ebdcb8]">🥖 <b>Canapés mixtos:</b> jamón serrano, salame, queso cremoso</div>
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-[#ebdcb8] text-[11px] text-[#8f6918] font-medium flex items-center gap-1.5">
                          <Wine className="w-4 h-4 shrink-0" />
                          <span><b>Incluye:</b> Bebidas, jugos y agua mineral (1 hr) + Cristalería y vasos + Personal a cargo del servicio y garzones + Montaje Cocktail completo (Mantelería y Arreglos florales).</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-[#faf5ea] border border-[#ebdcb8]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#8f6918] font-bold text-sm">✨ Pack Surtido Mixto de Fábrica</span>
                          <span className="text-[10px] bg-[#faf3e3] text-[#8f6918] border border-[#ebdcb8] px-2 py-0.5 rounded-full font-semibold">
                            Listo para calentar y servir
                          </span>
                        </div>
                        <p className="text-xs text-[#524d44] leading-relaxed">
                          Según la cartilla oficial, los combos vienen con una selección balanceada de <b>bocados mixtos</b> preparados por nuestro equipo gastronómico. Recibirás la proporción ideal de dulces, salados, empanadas y tapaditos para tu cantidad de invitados.
                        </p>
                      </div>
                    )}

                    <div>
                      <span className="block text-xs uppercase font-bold text-[#8f6918] mb-2 tracking-wide">
                        Bocados incluidos en tu selección:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🥟 <b className="text-[#1c1a17] block mt-0.5">Empanadas</b> Pino y Queso
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🥪 <b className="text-[#1c1a17] block mt-0.5">Tapaditos</b> Pastas mixtas
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🍢 <b className="text-[#1c1a17] block mt-0.5">Brochetas</b> Jamón, queso, aceituna
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🍔 <b className="text-[#1c1a17] block mt-0.5">Hamburguesas</b> Cocktail caseras
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🥩 <b className="text-[#1c1a17] block mt-0.5">Churrascos</b> Queso cremoso
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🍕 <b className="text-[#1c1a17] block mt-0.5">Pizzetas</b> Napolitanas
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🧁 <b className="text-[#1c1a17] block mt-0.5">Dulces</b> Surtidos cocktail
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#f8f6f1] border border-[#eae4da] text-[#403c36]">
                          🥖 <b className="text-[#1c1a17] block mt-0.5">Canapés</b> Surtido gourmet
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-[#403c36] mb-1.5">
                        ¿Tienes alguna solicitud o restricción alimentaria? (Opcional):
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Tenemos 2 invitados vegetarianos, sin mariscos..."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-[#dcd6ca] rounded-xl px-3.5 py-2.5 text-xs text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                      />
                    </div>
                  </div>
                ) : selectedServiceId === 'almuerzo_mesa' ? (
                  /* CASO 2: ALMUERZO MENÚ A LA MESA */
                  <div className="space-y-6 mt-4">
                    <div className="p-4 rounded-2xl bg-[#faf5ea] border-2 border-[#caa44e]/70 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-[#8f6918] font-bold text-sm flex items-center gap-2">
                          <Utensils className="w-4 h-4 text-[#a87e22]" />
                          Menú Almuerzo Servido a la Mesa con Personal Completo
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-[#1c1a17] text-[#eed182] self-start">
                          1 Plato de Fondo & 1 Postre a elección
                        </span>
                      </div>
                      <p className="text-xs text-[#524d44] leading-relaxed">
                        Selecciona a continuación el <b>Plato de Fondo</b> (1 a elección) y el <b>Postre</b> (1 a elección) para tu banquete. Se incluye el servicio completo a la mesa con garzones, vajilla de loza y Chef.
                      </p>
                    </div>

                    {/* SELECTOR DE PLATO DE FONDO (1 A ELECCIÓN) */}
                    <div>
                      <div className="mb-2.5">
                        <span className="block text-xs uppercase font-extrabold text-[#8f6918] tracking-wide">
                          1. Selecciona el Plato de Fondo (1 a elección para el evento):
                        </span>
                      </div>

                      <div className="space-y-3">
                        {MAIN_DISHES_DATA.map((dish) => {
                          const isSelected = selectedMainDish === dish.fullDescription
                          return (
                            <div
                              key={dish.id}
                              onClick={() => setSelectedMainDish(dish.fullDescription)}
                              className={`p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-[#fcf8ee] border-[#b88c28] shadow-sm ring-1 ring-[#b88c28]'
                                  : 'bg-[#faf8f5] border-[#e8e2d8] hover:border-[#caa44e]/60 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1 shrink-0">
                                  <input
                                    type="radio"
                                    name="mainDishSelection"
                                    checked={isSelected}
                                    onChange={() => setSelectedMainDish(dish.fullDescription)}
                                    className="w-4 h-4 text-[#b88c28] border-stone-300 focus:ring-[#b88c28] cursor-pointer"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                    <h4 className="text-sm font-bold text-[#1c1a17] flex items-center gap-1.5">
                                      <span>{dish.icon}</span>
                                      <span>{dish.title}</span>
                                    </h4>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#faf3e3] text-[#8f6918] border border-[#ebdcb8]">
                                      {dish.tag}
                                    </span>
                                  </div>
                                  <div className="space-y-1 text-xs text-[#4a453c] mt-1.5 pl-1 border-l-2 border-[#caa44e]/50">
                                    <p className="leading-snug">
                                      <b className="text-[#1c1a17]">Guarnición:</b> {dish.accompaniment}
                                    </p>
                                    <p className="leading-snug">
                                      <b className="text-[#1c1a17]">Ensalada:</b> {dish.salad}
                                    </p>
                                  </div>
                                  <p className="text-[11px] text-[#7a7366] mt-1.5 italic">
                                    Presentación completa: {dish.fullDescription}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* SELECTOR DE POSTRE (1 A ELECCIÓN) */}
                    <div>
                      <div className="mb-2.5">
                        <span className="block text-xs uppercase font-extrabold text-[#8f6918] tracking-wide">
                          2. Selecciona el Postre (1 a elección para el evento):
                        </span>
                      </div>

                      <div className="space-y-3">
                        {DESSERTS_DATA.map((dessert) => {
                          const isSelected = selectedDessert === dessert.fullDescription
                          return (
                            <div
                              key={dessert.id}
                              onClick={() => setSelectedDessert(dessert.fullDescription)}
                              className={`p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-[#fcf8ee] border-[#b88c28] shadow-sm ring-1 ring-[#b88c28]'
                                  : 'bg-[#faf8f5] border-[#e8e2d8] hover:border-[#caa44e]/60 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1 shrink-0">
                                  <input
                                    type="radio"
                                    name="dessertSelection"
                                    checked={isSelected}
                                    onChange={() => setSelectedDessert(dessert.fullDescription)}
                                    className="w-4 h-4 text-[#b88c28] border-stone-300 focus:ring-[#b88c28] cursor-pointer"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-[#1c1a17] flex items-center gap-1.5 mb-1">
                                    <span>{dessert.icon}</span>
                                    <span>{dessert.title}</span>
                                  </h4>
                                  <div className="space-y-1 text-xs text-[#4a453c] mt-1.5 pl-1 border-l-2 border-[#caa44e]/50">
                                    <p className="leading-snug">
                                      <b className="text-[#1c1a17]">Composición:</b> {dessert.details}
                                    </p>
                                    <p className="leading-snug">
                                      <b className="text-[#1c1a17]">Presentación:</b> {dessert.decoration}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* MODALIDAD DE BEBESTIBLES Y SERVICIO */}
                    <div className="p-4 rounded-2xl bg-white border border-[#ded8cc] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#8f6918] flex items-center gap-1.5">
                          <span>🥂</span> Modalidad de Bebestible:
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          selectedOptionId === 'almuerzo_bebestible'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-stone-100 text-stone-700 border border-stone-300'
                        }`}>
                          {selectedOptionId === 'almuerzo_bebestible' ? '3 Horas Ilimitados Incluido' : 'Almuerzo Base'}
                        </span>
                      </div>
                      {selectedOptionId === 'almuerzo_bebestible' ? (
                        <p className="text-xs text-emerald-800 leading-relaxed bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                          ✓ Tu cotización <b>incluye servicio continuo de Bebestibles durante 3 Horas Ilimitados</b>: Jugos naturales recién preparados, bebidas gaseosas línea Coca-Cola y agua mineral con y sin gas servidas continuamente a las mesas.
                        </p>
                      ) : (
                        <div className="bg-[#fcf8ee] p-3 rounded-xl border border-[#ebdcb8] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                          <p className="text-xs text-[#524d44] leading-snug">
                            ¿Deseas agregar <b>Bebestibles durante 3 Horas Ilimitados</b> servidos de forma continua a las mesas (+ $4.000 p/p)?
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedOptionId('almuerzo_bebestible')}
                            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#b88c28] hover:bg-[#99721a] text-white font-bold text-xs transition"
                          >
                            Activar Bebestibles 3 hrs
                          </button>
                        </div>
                      )}
                    </div>

                    {/* EQUIPAMIENTO Y PERSONAL INCLUIDO */}
                    <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d8]">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8f6918] block mb-2">
                        ⭐ Equipamiento & Personal Completo Incluido en este Menú:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38332a]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Chef Ejecutivo y ayudantes de cocina</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Garzones uniformados de gala</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Vajilla de loza, cristalería y cubertería fina</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Mantelería completa y servilletas de género</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Arreglos florales naturales en mesas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Montaje protocolar y despacho en Santiago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedServiceId === 'fiesta_bar_dj' ? (
                  /* CASO 3: FIESTA BAR ABIERTO 5 HRS & DJ */
                  <div className="space-y-5 mt-4">
                    <div className="p-4 rounded-xl bg-[#f5faf7] border border-emerald-300/80 text-xs text-[#2b4c3b]">
                      <b className="text-emerald-800 text-sm block mb-1">🎧 Todo Incluido para tu Celebración:</b>
                      <p className="leading-relaxed">
                        Este servicio incluye el menú completo de cóctel de 8 variedades (brochetas de carne vacuno, pizzetas napolitanas, mini hamburguesas, tapaditos, canapés, empanadas, postre vaso y dulces), <b>Bar Abierto durante 5 horas</b> con toda la coctelería y <b>DJ en vivo</b>.
                      </p>
                    </div>

                    <div>
                      <span className="block text-xs uppercase font-bold text-[#8f6918] mb-2 tracking-wide">
                        Barra Abierta durante 5 horas (Todos incluidos en el evento):
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {BAR_COCKTAILS.map((drink, drIdx) => (
                          <div
                            key={drIdx}
                            className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#e8e2d8] text-xs text-[#38342e] flex items-center gap-2"
                          >
                            <span className="text-[#a87e22]">🍸</span>
                            <span>{drink}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* CASO 4: COCKTAIL GOURMET */
                  <div className="mt-4 space-y-4">
                    <div className="p-4 rounded-xl bg-[#faf5ea] border border-[#ebdcb8] text-xs text-[#524d44]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#8f6918] font-bold text-sm">👨‍🍳 Receta de Autor del Chef (Pack Cerrado)</span>
                        <span className="text-[10px] bg-[#faf3e3] text-[#8f6918] border border-[#ebdcb8] px-2 py-0.5 rounded-full font-semibold">
                          Servicio Gourmet Completo
                        </span>
                      </div>
                      <p className="leading-relaxed">
                        Este menú viene estandarizado con la alta cocina del chef. No requiere selección bocado a bocado: incluye los <b>5 canapés finos oficiales</b>, empanadas de horno, brochetas, hamburguesas caseras, dulces finos y bebestible ilimitado.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f8f6f1] border border-[#e8e2d8] space-y-3">
                      <span className="text-xs font-bold uppercase text-[#8f6918] tracking-wider block">
                        5 Canapés Gourmet de Autor Incluidos:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38342e]">
                        <div className="p-2.5 rounded-lg bg-white border border-[#eae4da]">
                          ✦ <b className="text-[#1c1a17]">Jamón Serrano</b> con queso crema y ciboulette
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#eae4da]">
                          ✦ <b className="text-[#1c1a17]">Camarón Ecuatoriano</b> a la mantequilla finas hierbas
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#eae4da]">
                          ✦ <b className="text-[#1c1a17]">Salame Ahumado</b> con choclito al sésamo
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#eae4da]">
                          ✦ <b className="text-[#1c1a17]">Espárragos Salteados</b> con tomate cherry
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#eae4da] sm:col-span-2">
                          ✦ <b className="text-[#1c1a17]">Salmón Ahumado</b> con queso crema, soya y semillas de amapolas
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-[#555047]">
                        <div className="p-2 rounded bg-white border border-[#eae4da]">🥟 Empanadas horno mixtas</div>
                        <div className="p-2 rounded bg-white border border-[#eae4da]">🍢 Brochetas lomo y teriyaki</div>
                        <div className="p-2 rounded bg-white border border-[#eae4da]">🍔 Hamburguesas cheddar</div>
                        <div className="p-2 rounded bg-white border border-[#eae4da]">🧁 Dulces finos y bebestible</div>
                      </div>
                    </div>

                    <div className="pt-1">
                      <label className="block text-xs font-semibold text-[#403c36] mb-1.5">
                        ¿Alguna preferencia o restricción para el evento? (Opcional):
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Tenemos 2 personas vegetarianas, sin mariscos..."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-[#dcd6ca] rounded-xl px-3.5 py-2.5 text-xs text-[#1c1a17] placeholder-[#8c8578] focus:border-[#b88c28] focus:ring-1 focus:ring-[#b88c28] outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ADICIONAL OPCIONAL: AGREGAR CANAPÉS EXTRAS (+100 o +200) */}
              {!isCanapesPack && (
                <div className="bg-white border-2 border-[#caa44e]/70 rounded-2xl p-5 sm:p-7 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e8e2d8]">
                    <div className="flex items-start gap-2.5">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1a17] text-[#eed182] font-bold text-xs shrink-0 mt-0.5">
                        +
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17]">
                            ¿Deseas agregar Canapés Cocktail Extras?
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f6918] bg-[#faf3e3] border border-[#ebdcb8] px-2 py-0.5 rounded-full">
                            Venta por 100
                          </span>
                        </div>
                        <p className="text-xs text-[#666055] mt-1">
                          Suma 100, 200 o más canapés finos a tu banquete y escoge 4 variedades por cada 100 unidades.
                        </p>
                      </div>
                    </div>

                    <label className="flex items-center gap-2.5 cursor-pointer select-none bg-[#faf8f5] hover:bg-[#f6f1e5] border border-[#d6cfc1] px-4 py-2.5 rounded-xl transition self-start sm:self-auto shrink-0 shadow-2xs">
                      <input
                        type="checkbox"
                        checked={includeExtraCanapes}
                        onChange={(e) => setIncludeExtraCanapes(e.target.checked)}
                        className="w-4 h-4 rounded text-[#b88c28] focus:ring-[#b88c28] cursor-pointer"
                      />
                      <span className="text-xs font-bold text-[#1c1a17]">
                        {includeExtraCanapes ? '✓ Canapés Extras Activados' : 'Agregar Canapés Extras'}
                      </span>
                    </label>
                  </div>

                  {includeExtraCanapes && (
                    <div className="mt-5 space-y-5">
                      {/* SELECTOR DE CANTIDAD DE CANAPÉS EXTRAS */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-bold uppercase text-[#8f6918] tracking-wider">
                            1. Cantidad de Canapés Extras:
                          </span>
                          <span className="text-xs font-bold text-[#8f6918] bg-[#faf3e3] border border-[#ebdcb8] px-2.5 py-0.5 rounded-full self-start">
                            +{extraCanapesUnits} canapés (Venta por 100) · {maxExtraVarietiesAllowed} variedades permitidas
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="flex items-center bg-[#f6f3ec] border border-[#e2ded5] rounded-xl p-1.5 w-full sm:w-auto">
                            <button
                              type="button"
                              onClick={() => handleExtraCanapesUnitsChange(extraCanapesUnits - 100)}
                              className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                              aria-label="Restar 100 canapés extras"
                            >
                              <Minus className="w-4 h-4" />
                            </button>

                            <div className="px-5 text-center min-w-[130px]">
                              <span className="font-serif text-2xl font-bold text-[#8f6918]">
                                +{extraCanapesUnits}
                              </span>
                              <span className="block text-[10px] uppercase font-bold text-[#736d63]">
                                Canapés Extras
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleExtraCanapesUnitsChange(extraCanapesUnits + 100)}
                              className="w-10 h-10 rounded-lg bg-white hover:bg-[#ede8df] text-[#1c1a17] flex items-center justify-center font-bold shadow-2xs"
                              aria-label="Sumar 100 canapés extras"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2 w-full sm:flex-1 justify-center sm:justify-start">
                            {[100, 200, 300, 400].map((preset) => {
                              const isPresetActive = extraCanapesUnits === preset
                              const varCount = Math.min(CANAPES_CATALOG.length, (preset / 100) * 4)
                              return (
                                <button
                                  key={preset}
                                  type="button"
                                  onClick={() => handleExtraCanapesUnitsChange(preset)}
                                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                                    isPresetActive
                                      ? 'bg-[#1c1a17] text-white shadow-xs'
                                      : 'bg-[#faf8f5] text-[#4f4a42] hover:bg-white border border-[#ded8cd]'
                                  }`}
                                >
                                  +{preset} un. ({varCount} var.)
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      {/* SELECTOR DE VARIEDADES PARA LOS CANAPÉS EXTRAS */}
                      <div className="pt-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                          <span className="text-xs font-bold uppercase text-[#8f6918] tracking-wider">
                            2. Elige tus {maxExtraVarietiesAllowed} variedades ({selectedExtraCanapesVarieties.length}/{maxExtraVarietiesAllowed}):
                          </span>
                          {selectedExtraCanapesVarieties.length < maxExtraVarietiesAllowed ? (
                            <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 self-start">
                              Puedes elegir {maxExtraVarietiesAllowed - selectedExtraCanapesVarieties.length} más (4 por cada 100)
                            </span>
                          ) : (
                            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start">
                              ✓ {maxExtraVarietiesAllowed} variedades completadas
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {CANAPES_CATALOG.map((canape, cIdx) => {
                            const isSelected = selectedExtraCanapesVarieties.includes(canape)
                            return (
                              <div
                                key={cIdx}
                                onClick={() => toggleExtraCanapesVariety(canape)}
                                className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition select-none min-h-[48px] ${
                                  isSelected
                                    ? 'bg-[#fcf8ee] border-[#b88c28] ring-1 ring-[#b88c28] shadow-xs'
                                    : 'bg-white border-[#e6e0d5] hover:border-[#caa44e]/60 hover:bg-[#fdfbf7]'
                                }`}
                              >
                                <div
                                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition ${
                                    isSelected
                                      ? 'border-[#b88c28] bg-[#b88c28] text-white'
                                      : 'border-stone-300 bg-stone-50'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3.5 h-3.5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className={`text-xs leading-snug font-medium block truncate sm:whitespace-normal ${
                                    isSelected ? 'text-[#1c1a17] font-semibold' : 'text-[#423e38]'
                                  }`}>
                                    {canape}
                                  </span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* AVISO DESTACADO EN LETRA NEGRA: PRECIO INFORMADO POR EL DUEÑO */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-[#eed182] border-2 border-[#b38622] text-black shadow-sm space-y-1">
                        <div className="flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                          <Info className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                          <span>VALOR CANAPÉS EXTRAS: LO INFORMA DIRECTAMENTE EL DUEÑO</span>
                        </div>
                        <p className="text-xs text-black font-bold leading-relaxed">
                          El valor preferencial de tus +{extraCanapesUnits} canapés adicionales lo confirma de forma directa el dueño de Maxibanquete vía WhatsApp.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* TARJETA RESUMEN EN TIEMPO REAL (4 COLS) CON LOGO TRANSPARENTE Y TODA LA INFORMACIÓN */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-4">
              <div id="resumen-cotizacion" className="bg-[#1b1916] border-2 border-[#caa44e]/80 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-stone-200 scroll-mt-24">
                {/* ENCABEZADO CON LOGO TRANSPARENTE SIN CUADRO */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/fotos/logo_maxibanquete_transparente.png"
                      alt="Banquetería Maxibanquete"
                      className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#eed182] bg-[#332c1c] border border-[#caa44e]/50 px-2 py-0.5 rounded inline-block">
                        Presupuesto Oficial
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                        Resumen del Evento
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-300/80 bg-white/5 border border-white/10 px-2 py-1 rounded">
                    En Vivo
                  </span>
                </div>

                {/* BLOQUE 1: DATOS DEL CLIENTE Y COORDINACIÓN */}
                <div className="space-y-2 text-xs border-b border-white/10 pb-4 text-stone-300">
                  <span className="text-[10px] uppercase font-bold text-[#eed182] tracking-wider block mb-1">
                    Ficha del Cliente & Lugar:
                  </span>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-stone-400">Cliente / Empresa:</span>
                    <span className="font-semibold text-white text-right truncate max-w-[190px]">
                      {clientName.trim() || <span className="text-stone-400 italic">Por ingresar</span>}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-stone-400">Teléfono / WhatsApp:</span>
                    <span className="font-medium text-[#eed182] text-right">
                      {clientPhone.trim() || <span className="text-stone-400 italic">Por ingresar</span>}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-stone-400">Fecha & Hora:</span>
                    <span className="font-semibold text-white text-right">
                      {eventDate ? `${eventDate} ${eventTime ? `(${eventTime})` : ''}` : <span className="text-stone-400 italic">Por coordinar</span>}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-stone-400">Lugar / Comuna:</span>
                    <span className="font-medium text-stone-200 text-right max-w-[190px] leading-tight">
                      {eventCommune || eventAddress ? `${eventCommune || ''} ${eventAddress ? `(${eventAddress})` : ''}` : <span className="text-stone-400 italic">Santiago (RM)</span>}
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-stone-400">Tipo de Celebración:</span>
                    <span className="text-white text-right font-medium">{eventType}</span>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-stone-400">Documento:</span>
                    <span className="text-[#eed182] text-right font-semibold">{invoiceType}</span>
                  </div>
                </div>

                {/* BLOQUE 2: SERVICIO Y VARIEDADES */}
                <div className="space-y-3 text-xs border-b border-white/10 py-4 text-stone-300">
                  <span className="text-[10px] uppercase font-bold text-[#eed182] tracking-wider block">
                    Menú y Servicio Seleccionado:
                  </span>

                  <div className="flex justify-between items-start">
                    <span className="text-stone-400">Categoría:</span>
                    <span className="font-semibold text-white text-right max-w-[190px]">
                      {currentService.name}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-stone-400">Opción Elegida:</span>
                    <span className="font-semibold text-white text-right max-w-[190px]">
                      {currentOption.name.split('(')[0]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-400">
                      {isCanapesPack ? 'Cantidad Canapés:' : 'Invitados:'}
                    </span>
                    <span className="font-bold text-[#eed182] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                      {isCanapesPack
                        ? `${canapesPackUnits} unidades (Venta por 100)`
                        : `${peopleCount} personas`}
                    </span>
                  </div>

                  {/* Detalle de variedades seleccionadas */}
                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">
                      Bocados y Gastronomía:
                    </span>
                    {isCanapesPack ? (
                      <div className="text-[11px] text-stone-300 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-[#332c1c] text-[#eed182] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#caa44e]/40">
                            🍱 Pack {canapesPackUnits} Canapés (Venta por 100)
                          </span>
                          <span className="text-[10px] text-[#caa44e]">
                            {selectedPackVarieties.length} de {maxPackVarietiesAllowed} variedades
                          </span>
                        </div>
                        <div className="space-y-1 pl-1">
                          {selectedPackVarieties.map((v, i) => (
                            <p key={i} className="text-stone-300 leading-snug flex items-start gap-1.5">
                              <span className="text-[#eed182]">✦</span>
                              <span>{v}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : isGraduation ? (
                      <div className="text-[11px] text-stone-300 space-y-1">
                        <span className="inline-block bg-[#332c1c] text-[#eed182] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#caa44e]/40">
                          🎓 Cocktail Graduación ($5.500 p/p)
                        </span>
                        <p className="text-stone-300 leading-snug">
                          Tapaditos de pasta, churrascos queso cremoso, hamburguesas caseras cheddar, empanadas mixtas de horno, dulces finos, 200 canapés, bebidas/jugos 1 hr, garzones y montaje completo.
                        </p>
                      </div>
                    ) : selectedServiceId === 'combos_personas' ? (
                      <div className="text-[11px] text-stone-300 space-y-1">
                        <span className="inline-block bg-[#332c1c] text-[#eed182] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#caa44e]/40">
                          ✨ Combo Surtido Mixto
                        </span>
                        <p className="text-stone-300 leading-snug">
                          Bocados mixtos preparados: empanadas, tapaditos, brochetas, hamburguesas, pizzetas, dulces y canapés.
                        </p>
                      </div>
                    ) : selectedServiceId === 'almuerzo_mesa' ? (
                      <div className="space-y-2.5 text-[11px] text-stone-300">
                        {/* PLATO DE FONDO SELECCIONADO (1 A ELECCIÓN) */}
                        {(() => {
                          const dishObj = MAIN_DISHES_DATA.find((d) => d.fullDescription === selectedMainDish)
                          return (
                            <div className="p-2.5 rounded-xl bg-stone-900/90 border border-[#caa44e]/50 space-y-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#eed182] flex items-center justify-between">
                                <span className="flex items-center gap-1.5">
                                  <span>🥩</span> Plato de Fondo (1 a elección):
                                </span>
                              </span>
                              <div className="pl-2 border-l-2 border-[#caa44e] space-y-0.5">
                                <p className="text-white font-bold text-xs flex items-center gap-1">
                                  <span>{dishObj?.icon || '🍽️'}</span>
                                  <span>{dishObj ? dishObj.title : selectedMainDish}</span>
                                </p>
                                {dishObj && (
                                  <>
                                    <p className="text-stone-300 text-[10px] leading-snug">
                                      <b className="text-amber-200/80">Guarnición:</b> {dishObj.accompaniment}
                                    </p>
                                    <p className="text-stone-300 text-[10px] leading-snug">
                                      <b className="text-amber-200/80">Ensalada:</b> {dishObj.salad}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          )
                        })()}

                        {/* POSTRE SELECCIONADO (1 A ELECCIÓN) */}
                        {(() => {
                          const dessertObj = DESSERTS_DATA.find((d) => d.fullDescription === selectedDessert)
                          return (
                            <div className="p-2.5 rounded-xl bg-stone-900/90 border border-[#caa44e]/50 space-y-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#eed182] flex items-center justify-between">
                                <span className="flex items-center gap-1.5">
                                  <span>🍨</span> Postre (1 a elección):
                                </span>
                              </span>
                              <div className="pl-2 border-l-2 border-[#caa44e] space-y-0.5">
                                <p className="text-white font-bold text-xs flex items-center gap-1">
                                  <span>{dessertObj?.icon || '✨'}</span>
                                  <span>{dessertObj ? dessertObj.title : selectedDessert}</span>
                                </p>
                                {dessertObj && (
                                  <>
                                    <p className="text-stone-300 text-[10px] leading-snug">
                                      <b className="text-amber-200/80">Composición:</b> {dessertObj.details}
                                    </p>
                                    <p className="text-stone-300 text-[10px] leading-snug">
                                      <b className="text-amber-200/80">Decoración:</b> {dessertObj.decoration}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          )
                        })()}

                        {/* BEBESTIBLES Y SERVICIO */}
                        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-[10px] text-stone-300 space-y-1">
                          <p className={`font-semibold flex items-center gap-1.5 ${
                            selectedOptionId === 'almuerzo_bebestible' ? 'text-emerald-400' : 'text-amber-300'
                          }`}>
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            {selectedOptionId === 'almuerzo_bebestible'
                              ? 'Bebestible 3 Horas Ilimitados Incluido (Jugos, bebidas y agua)'
                              : 'Almuerzo Base (Sin barra continua 3 hrs)'}
                          </p>
                          <p className="text-stone-400 text-[9.5px] leading-tight">
                            Personal y vajilla completa: Chef ejecutivo, ayudantes, garzones de gala uniformados, mantelería, vajilla de loza, cristalería y flores.
                          </p>
                        </div>
                      </div>
                    ) : selectedServiceId === 'fiesta_bar_dj' ? (
                      <div className="text-[11px] text-stone-300 space-y-1">
                        <span className="inline-block bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-semibold">
                          🎧 Bar Abierto 5 hrs + DJ en Vivo
                        </span>
                        <p className="text-stone-300 leading-snug">
                          Cóctel 8 variedades, barra libre completa y música en vivo.
                        </p>
                      </div>
                    ) : (
                      <div className="text-[11px] text-stone-300 space-y-0.5">
                        <span className="inline-block bg-[#332c1c] text-[#eed182] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#caa44e]/40">
                          👨‍🍳 Menú Gourmet del Chef
                        </span>
                        <p className="text-stone-300 leading-snug">
                          5 canapés finos de autor, empanadas de horno, brochetas, hamburguesas caseras y dulces.
                        </p>
                      </div>
                    )}

                    {specialNotes && (
                      <p className="text-amber-300 text-[11px] bg-amber-950/40 border border-amber-500/30 p-2 rounded-lg mt-2">
                        <b>Nota / Solicitud:</b> {specialNotes}
                      </p>
                    )}

                    {/* ADICIONAL DE CANAPÉS EXTRAS EN RESUMEN */}
                    {includeExtraCanapes && !isCanapesPack && (
                      <div className="mt-3 p-3 rounded-xl bg-[#262116] border border-[#caa44e]/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#eed182] flex items-center gap-1.5">
                            <span>🍱</span> Canapés Extras: +{extraCanapesUnits} un. (Venta por 100)
                          </span>
                          <span className="text-[10px] text-amber-300">
                            {selectedExtraCanapesVarieties.length} de {maxExtraVarietiesAllowed} var.
                          </span>
                        </div>
                        <div className="space-y-1 pl-1 text-[11px] text-stone-300">
                          {selectedExtraCanapesVarieties.map((v, i) => (
                            <p key={i} className="flex items-start gap-1.5 leading-snug">
                              <span className="text-[#eed182]">✦</span>
                              <span>{v}</span>
                            </p>
                          ))}
                        </div>
                        <div className="pt-1.5 border-t border-white/10 text-[10px] text-amber-200/90 italic">
                          * Tarifa de los canapés extras a coordinar directamente con el dueño.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* BLOQUE 3: DESGLOSE FINANCIERO */}
                <div className="py-4 space-y-2">
                  <div className="flex justify-between text-xs text-stone-400">
                    <span>Subtotal Base:</span>
                    <span className="text-stone-200 font-mono font-semibold">
                      {isCanapesPack ? 'A cotizar por el dueño' : formatCLP(calculation.baseTotal)}
                    </span>
                  </div>

                  {includeExtraCanapes && !isCanapesPack && (
                    <div className="flex justify-between text-xs text-amber-300">
                      <span>Canapés Extras (+{extraCanapesUnits} un.):</span>
                      <span className="font-semibold">A confirmar por el dueño</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs text-stone-400">
                    <span>Despacho a Domicilio:</span>
                    <span className="text-emerald-400 font-semibold">Incluido (RM)</span>
                  </div>

                  {/* PRECIO TOTAL ESTIMADO */}
                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                        Total Estimado
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {isCanapesPack
                          ? `${canapesPackUnits} canapés · ${selectedPackVarieties.length} variedades`
                          : isGraduation
                          ? `${peopleCount} pers. × $5.500 c/u`
                          : currentService.isCombo
                          ? `Equivale a aprox. ${formatCLP(calculation.perPersonFinal)} p/pers.`
                          : `Total para ${peopleCount} personas`}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-black text-[#eed182] tracking-tight">
                        {isCanapesPack ? (
                          <span className="text-xs sm:text-sm font-black bg-[#eed182] text-black px-2.5 py-1 rounded-md uppercase tracking-wide inline-block shadow-xs">
                            Precio por el dueño
                          </span>
                        ) : (
                          formatCLP(calculation.grandTotal)
                        )}
                      </span>
                      {includeExtraCanapes && !isCanapesPack && (
                        <span className="block text-[10px] text-amber-300 font-bold">
                          + Canapés Extras (A confirmar)
                        </span>
                      )}
                      {isCanapesPack && (
                        <span className="block text-[9px] uppercase tracking-widest text-[#eed182] font-semibold">
                          Tarifa confirmada por el dueño
                        </span>
                      )}
                    </div>
                  </div>

                  {isCanapesPack ? (
                    <div className="bg-[#eed182] p-4 rounded-2xl border-2 border-[#b38622] text-black shadow-lg space-y-1 mt-3">
                      <div className="flex items-center gap-2 text-black font-black text-xs uppercase tracking-wide">
                        <Info className="w-4 h-4 shrink-0 text-black stroke-[2.5]" />
                        <span>EL PRECIO DE LOS 100 CANAPÉS LO DICE EL DUEÑO</span>
                      </div>
                      <p className="text-black font-bold text-xs leading-snug">
                        El dueño de Maxibanquete te informará cordialmente el valor exacto de tus <b>{canapesPackUnits} canapés</b> directamente vía WhatsApp al recibir tu pedido.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-[#12110f] p-3 rounded-xl border border-white/10 text-[11px] text-stone-300 flex items-center justify-between mt-3">
                        <span className="text-stone-400">Abono requerido para reserva (40%):</span>
                        <span className="font-bold text-amber-300 font-mono">{formatCLP(calculation.suggestedAbono)}</span>
                      </div>

                      <div className="flex justify-between text-[11px] text-stone-400 px-1 pt-1">
                        <span>Saldo restante al evento (60%):</span>
                        <span className="text-stone-300 font-mono">{formatCLP(calculation.remainingBalance)}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* BOTÓN WHATSAPP OFICIAL CON NÚMERO DE PRUEBA */}
                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-900/40 hover:scale-[1.02] active:scale-98 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                    Cotizar y Reservar por WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={copyCotizacionText}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-stone-300 transition-colors border border-white/5"
                  >
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    {copiedLink ? '¡Copiado al portapapeles!' : 'Copiar cotización como texto'}
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-center text-[11px] text-stone-400">
                  <p>
                    Enviando a tu número de prueba: <b className="text-white">{WHATSAPP_DISPLAY}</b>
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1">
                    * Boleta o Factura electrónica disponible a solicitud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN OFICIAL DE INSTAGRAM - COMUNIDAD & TRABAJOS REALES */}
      <section id="instagram" className="py-16 sm:py-20 bg-gradient-to-b from-[#181613] via-[#12110e] to-[#0e0d0b] text-white border-t border-[#2a241b] relative overflow-hidden">
        {/* Glow decorativo sutil en el fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-36 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Encabezado de la sección */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#f09433]/20 via-[#e6683c]/20 to-[#bc1888]/20 border border-[#e6683c]/40 text-amber-200 text-xs font-bold tracking-wide uppercase mb-3.5 shadow-sm">
              <Instagram className="w-4 h-4 text-[#e6683c]" />
              <span>Comunidad Oficial en Instagram</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Síguenos en <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">@banqueteria.maxibanquete</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed">
              Conoce en vivo nuestros montajes de gala, cócteles de autor, videos reales de eventos y testimonios de novios y empresas en Santiago.
            </p>
          </div>

          {/* Tarjeta de Perfil Estilo Instagram */}
          <div className="max-w-4xl mx-auto bg-[#1a1714] border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl">
            {/* Header del Perfil: Foto + Info + Estadísticas */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7 pb-6 border-b border-white/10">
              {/* Foto de perfil con anillo degradado de Instagram Stories */}
              <div className="relative shrink-0">
                <div className="p-1 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
                  <div className="p-1 bg-[#1a1714] rounded-full">
                    <img
                      src="/assets/fotos/logo_maxibanquete_transparente.png"
                      alt="Banqueteria Maxibanquete Instagram"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-contain bg-[#0e0d0b] p-2"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#1a1714] flex items-center justify-center" title="En línea">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              {/* Información y Stats */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                    banqueteria.maxibanquete
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-semibold">
                    <Check className="w-3 h-3 stroke-[3]" /> Perfil Verificado
                  </span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Seguir</span>
                  </a>
                </div>

                {/* Métricas del Perfil */}
                <div className="flex items-center justify-center sm:justify-start gap-6 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white font-mono">2.354</span>
                    <span className="text-stone-400 ml-1.5">publicaciones</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#eed182] font-mono">10,6 mil</span>
                    <span className="text-stone-400 ml-1.5">seguidores</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="font-bold text-white font-mono">7.995</span>
                    <span className="text-stone-400 ml-1.5">seguidos</span>
                  </div>
                </div>

                {/* Bio Oficial */}
                <div className="text-xs text-stone-300 space-y-1 pt-1 leading-relaxed">
                  <p className="font-bold text-white">Banqueteria Maxibanquete · <span className="text-[#eed182] font-normal">Planificador de eventos</span></p>
                  <p className="text-stone-300">
                    🍸 Cocktail, Matrimonios, Graduaciones, coffee break, Garzones, DJ, iluminación.
                  </p>
                  <p className="text-stone-300">
                    🍽️ Servicios de catering, brunch de alta factura gastronómica.
                  </p>
                  <p className="text-stone-400 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
                    <span>🧾 Boletas y Facturas electrónicas</span>
                    <span>·</span>
                    <span>📍 Comunas de Santiago RM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Galería de Publicaciones Reales con Efecto Hover */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-[#eed182]" />
                  Publicaciones Recientes en @banqueteria.maxibanquete
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#eed182] hover:text-[#fae5a6] font-semibold flex items-center gap-1 group"
                >
                  <span>Ver todas en Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Grid 6 fotos reales del catálogo */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {[
                  { src: '/assets/fotos/servicio4_67bbed4d.jpg', alt: 'Hamburguesas caseras en bandeja dorada', tag: 'Bandeja de Gala', likes: '348' },
                  { src: '/assets/fotos/servicio2_696499b2.jpg', alt: 'Barra de sangría y macarons', tag: 'Coctelería & Dulces', likes: '412' },
                  { src: '/assets/fotos/servicio_5_42bfe5e9.jpg', alt: 'Mesón dulce con flores y alfajores', tag: 'Mesón Dulce', likes: '529' },
                  { src: '/assets/fotos/servicio_ce002b29.jpg', alt: 'Buffet 10 metros para empresas', tag: 'Buffet Masivo', likes: '684' },
                  { src: '/assets/fotos/servicio.7_00ff5093.jpg', alt: 'Estación cocktail con shots dulces', tag: 'Degustación', likes: '295' },
                  { src: '/assets/fotos/servicio_9_15e228c9.jpg', alt: 'Recepción al aire libre en terraza', tag: 'Terraza Chic', likes: '473' }
                ].map((post, idx) => (
                  <a
                    key={idx}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square rounded-xl overflow-hidden bg-black border border-white/10 block cursor-pointer"
                  >
                    <img
                      src={post.src}
                      alt={post.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 text-white">
                      <div className="flex items-center gap-1 text-[10px] text-rose-300 font-bold mb-0.5">
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                        <span>{post.likes}</span>
                      </div>
                      <span className="text-[10px] text-stone-200 font-medium line-clamp-1 leading-tight">
                        {post.tag}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Botón de acción directo */}
              <div className="mt-6 flex items-center justify-center">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-rose-950/30 hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Seguir @banqueteria.maxibanquete (10,6k seguidores)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACTO FINAL - BARRA FINAL EN NEGRO */}
      <footer id="contacto" className="bg-[#0e0d0b] text-stone-400 pt-16 pb-28 lg:pb-16 border-t border-[#24211b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="mb-4">
                <img
                  src="/assets/fotos/logo_maxibanquete_transparente.png"
                  alt="Banquetería Maxibanquete"
                  className="h-16 sm:h-20 w-auto object-contain drop-shadow-md mb-2"
                />
                <span className="font-serif text-xl font-bold tracking-wider text-white block">
                  MAXI<span className="text-[#eed182]">BANQUETE</span>
                </span>
                <p className="text-[11px] text-[#caa44e] font-serif italic mt-0.5">
                  Cócteles de autor, detalles que impactan
                </p>
              </div>
              <p className="text-xs text-stone-400 italic mb-3">
                "Sabor, calidad y distinción en cada detalle."
              </p>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                Producción gastronómica y coctelería para matrimonios, graduaciones, eventos de empresa y aniversarios en Santiago.
              </p>

              {/* REDES SOCIALES - INSTAGRAM & FACEBOOK */}
              <div className="pt-2">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[#eed182] mb-2.5">
                  Síguenos en Redes Sociales:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 hover:from-[#f09433]/25 hover:to-[#bc1888]/25 border border-[#dc2743]/30 text-white text-xs font-semibold transition-all hover:scale-[1.02] group"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-[#e6683c] group-hover:scale-110 transition-transform" />
                      <span>@banqueteria.maxibanquete</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#eed182] bg-black/40 px-1.5 py-0.5 rounded border border-[#eed182]/20">
                      10,6k
                    </span>
                  </a>

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 text-stone-200 hover:text-white text-xs font-semibold transition-all hover:scale-[1.02] group"
                  >
                    <svg className="w-4 h-4 fill-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>facebook.com/maxibanquete.1</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
                Menús Principales
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#canapes" className="hover:text-[#eed182] transition-colors">Venta por 100 de Canapés</a></li>
                <li><a href="#servicios" className="hover:text-[#eed182] transition-colors">Cocktail Gourmet ($13.990 - $24.990)</a></li>
                <li><a href="#servicios" className="hover:text-[#eed182] transition-colors">Combos Cocktail (10 a 50 personas)</a></li>
                <li><a href="#servicios" className="hover:text-[#eed182] transition-colors">Cocktail Graduación ($5.500 p/p)</a></li>
                <li><a href="#servicios" className="hover:text-[#eed182] transition-colors">Almuerzo Menú a la Mesa</a></li>
                <li><a href="#servicios" className="hover:text-[#eed182] transition-colors">Fiesta Bar Abierto 5 hrs & DJ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
                Contacto Directo
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-[#eed182] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Atención: {CONTACT_NAME}</span>
                    <span className="text-[11px] text-stone-400">Coordinadora de Eventos</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#eed182] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#eed182] font-bold hover:underline block"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <span className="text-[10px] text-stone-400">WhatsApp oficial configurado</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#eed182] shrink-0 mt-0.5" />
                  <span className="text-stone-300">Santiago, Región Metropolitana, Chile</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
                Cobertura & Respaldo
              </h4>
              <div className="bg-[#1c1a17] border border-white/10 rounded-xl p-4 text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-[#eed182] font-semibold">
                  <Truck className="w-4 h-4 text-[#caa44e]" />
                  <span>Despacho en Santiago RM</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Entrega puntual refrigerada en radio urbano de Santiago.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-stone-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#eed182]" />
                  <span>Boleta o Factura electrónica.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
            <p>© {new Date().getFullYear()} Maxibanquete. Sabor, calidad y distinción.</p>
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#eed182] transition-colors flex items-center gap-1.5 font-medium text-white"
              >
                <Instagram className="w-3.5 h-3.5 text-[#e6683c]" />
                @banqueteria.maxibanquete
              </a>
              <span>·</span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#eed182] transition-colors flex items-center gap-1.5 font-medium"
              >
                <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <span>·</span>
              <p className="text-stone-400">
                Santiago, Chile · Despacho a domicilio incluido.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* BARRA FLOTANTE DE ACCIÓN RÁPIDA (MÓVIL Y TABLET) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#12100d]/95 backdrop-blur-md border-t border-[#3d362b] px-3.5 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-semibold text-[#eed182] truncate max-w-[140px] sm:max-w-xs">
                {currentService.name}
              </span>
              {includeExtraCanapes && !isCanapesPack && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 shrink-0">
                  +{extraCanapesUnits} extras
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-bold text-white">
                {isCanapesPack ? (
                  <span className="text-[10px] font-black bg-[#eed182] text-black px-1.5 py-0.5 rounded uppercase">
                    Precio por el dueño
                  </span>
                ) : (
                  formatCLP(calculation.grandTotal)
                )}
              </span>
              <a
                href="#resumen-cotizacion"
                className="text-[10px] text-amber-300/80 hover:text-amber-200 underline"
              >
                Ver resumen
              </a>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-xs shadow-md shadow-emerald-950/40 whitespace-nowrap active:scale-95 transition-transform shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Cotizar WhatsApp</span>
          </a>
        </div>
      </div>

      {/* MODAL LIGHTBOX PARA FOTOS EN CELULAR Y ESCRITORIO */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181613] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BARRA SUPERIOR DEL MODAL */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#12100d] text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#eed182] uppercase tracking-wider">
                  Foto {activePhotoIndex + 1} de {GALLERY_PHOTOS.length}
                </span>
                <span className="text-[11px] text-stone-400 hidden sm:inline">
                  · Puesta en escena real
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition flex items-center gap-1 text-xs cursor-pointer"
                aria-label="Cerrar foto"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Cerrar</span>
              </button>
            </div>

            {/* IMAGEN AMPLIADA */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[260px] sm:min-h-[440px] overflow-hidden p-2">
              <img
                src={GALLERY_PHOTOS[activePhotoIndex].src}
                alt={GALLERY_PHOTOS[activePhotoIndex].alt}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none rounded-lg"
              />

              {/* FLECHAS DE NAVEGACIÓN ANTERIOR / SIGUIENTE */}
              {activePhotoIndex > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhotoIndex(activePhotoIndex - 1)
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition active:scale-95 cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </button>
              )}
              {activePhotoIndex < GALLERY_PHOTOS.length - 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhotoIndex(activePhotoIndex + 1)
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition active:scale-95 cursor-pointer"
                  aria-label="Siguiente foto"
                >
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </button>
              )}
            </div>

            {/* PIE DEL MODAL CON TÍTULO Y DESCRIPCIÓN */}
            <div className="p-4 bg-[#14120e] border-t border-white/10 text-stone-200">
              <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {GALLERY_PHOTOS[activePhotoIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

