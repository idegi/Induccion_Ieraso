export type StudyLevel = 'Tecnología' | 'Técnica' | 'Operario' | 'Auxiliar';

export type EconomicSector =
  | 'Agropecuario y Ambiental'
  | 'Comercio y Servicios'
  | 'Industria y Construcción'
  | 'Tecnologías de la Información y Software'
  | 'Salud, Cuidados y Deporte'
  | 'Economía Popular y Creativa';

export type LearningStyle = 'Visual' | 'Auditivo' | 'Lectura/Escritura' | 'Kinestésico';
export type KolbQuadrant = 'Acomodador' | 'Divergente' | 'Asimilador' | 'Convergente';

export interface LearnerProfile {
  fullName: string;
  documentType: string;
  documentNumber: string;
  age: number;
  gender: string;
  department: string;
  municipality: string;
  stratum: number;
  specialCondition: string[];
  headOfHousehold: boolean;
  dependentsCount: number;
  
  // Conectividad y Transporte
  internetAccess: 'Fibra/Banda Ancha Hogar' | 'Datos Móviles Limitados' | 'Sin Internet Propio (Café/Familiar)';
  primaryDevice: 'Computador Portátil / PC' | 'Teléfono Inteligente (Smartphone)' | 'Tablet' | 'Dispositivo Compartido / Ninguno';
  transportMode: 'A pie o Bicicleta' | 'Transporte Público (Bus / TransMilenio / MIO)' | 'Motocicleta o Vehículo' | 'Ruta Intermunicipal / Mixto';
  commuteTimeMinutes: number;

  // Estilos de Aprendizaje
  varkScores: {
    visual: number;
    auditory: number;
    readWrite: number;
    kinesthetic: number;
  };
  dominantStyle: LearningStyle;
  kolbQuadrant: KolbQuadrant;

  // Competencias Digitales Básicas
  digitalSkills: {
    fileManagement: number; // 1-5
    officeSoftware: number; // 1-5
    lmsExperience: number; // 1-5
    virtualCommunication: number; // 1-5
    digitalSecurity: number; // 1-5
  };
  digitalAverage: number;

  // Expectativas y Motivación
  careerGoal: 'Empleo Inmediato' | 'Creación de Empresa / Emprendimiento' | 'Continuación a Universidad' | 'Mejora de Posición Actual';
  weeklyStudyHours: number;

  // Banderas dinámicas automáticas
  flags: {
    needsConnectivitySupport: boolean;
    needsTransportSubsidy: boolean;
    needsDigitalRemediation: boolean;
    highRiskDropOut: boolean;
    recommendedProgramModality: 'Presencial' | 'Virtual' | 'Mixta';
  };
}

export interface SenaCenter {
  id: string;
  code: string;
  name: string;
  city: string;
  address: string;
  director: string;
  contactEmail: string;
  contactPhone: string;
  specialties: string[];
  infrastructureHighlights: string[];
  wellnessAmenities: string[];
  technoPark: boolean;
  sennovaGroup: string;
}

export interface RegionalSENA {
  id: string;
  name: string;
  code: string;
  capital: string;
  zone: 'Andina' | 'Caribe' | 'Pacífica' | 'Orinoquía' | 'Amazonía' | 'Insular';
  coordinates: { x: number; y: number }; // Relative coordinates for SVG map positioning 0-100
  svgPathId: string;
  phone: string;
  address: string;
  email: string;
  regionalDirector: string;
  centersCount: number;
  representativeSpecialty: string;
  activeApprentices: number;
  description: string;
  centers: SenaCenter[];
  wellnessProgramsAvailable: string[];
}

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  level: StudyLevel;
  sector: EconomicSector;
  modality: 'Presencial' | 'Virtual' | 'Mixta';
  durationTotalMonths: number;
  durationLectivaMonths: number;
  durationProductivaMonths: number;
  graduationProfile: string;
  keyCompetencies: string[];
  laborDemand: 'Muy Alta' | 'Alta' | 'Moderada';
  primaryPlatforms: ('Zajuna' | 'Sofía Plus' | 'Territorium')[];
  featuredSede: string;
}

export interface VirtualPlatform {
  id: string;
  name: 'Zajuna' | 'Sofía Plus' | 'Territorium';
  officialTag: string;
  role: string;
  description: string;
  keyFeatures: string[];
  firstLoginGuide: {
    step: number;
    title: string;
    action: string;
    caution: string;
  }[];
  credentialsFormula: string;
  status: 'Vigente Principal (Nuevo LMS)' | 'Administrativo Oficial' | 'En Transición / Consulta';
  accessUrl?: string;
}

export interface WellnessDimension {
  id: string;
  dimensionNumber: number;
  title: string;
  subtitle: string;
  description: string;
  services: {
    name: string;
    details: string;
    requirements: string;
    deliveryMode: string;
  }[];
  impactStory: string;
}

export interface InductionDay {
  dayNumber: number;
  dayName: string;
  themeTitle: string;
  pedagogicalObjective: string;
  competencyTarget: string;
  activities: {
    timeSlot: string;
    title: string;
    pedagogicalDescription: string;
    methodology: 'Taller Vivencial' | 'Cátedra Dialogada' | 'Práctica en Plataforma' | 'Dinámica Grupal' | 'Cierre Evaluativo';
    platformOrSpace: string;
    deliverable: string;
    responsibleRole: string;
  }[];
  evaluationChecklist: string[];
}

export interface QuizQuestion {
  id: number;
  category: 'Valores e Identidad' | 'Reglamento y Derechos' | 'Ecosistema Académico' | 'Plataformas y Bienestar';
  question: string;
  scenario: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface RemediationCourse {
  id: string;
  title: string;
  category: 'Competencias Digitales' | 'Hábitos de Estudio' | 'Cultura SENA' | 'Nivelación Lógica';
  durationHours: number;
  modality: 'Autoformación Virtual en Zajuna' | 'Taller Presencial de Apoyo';
  description: string;
  targetTrigger: string;
  modules: string[];
}
