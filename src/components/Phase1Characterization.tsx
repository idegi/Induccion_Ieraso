import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Sparkles, User, Wifi, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { LearnerProfile, LearningStyle, KolbQuadrant } from '../types/induction';

interface Phase1CharacterizationProps {
  onSaveProfile: (profile: LearnerProfile) => void;
  currentProfile: LearnerProfile | null;
  onAdvanceToNextPhase: () => void;
}

export const Phase1Characterization: React.FC<Phase1CharacterizationProps> = ({
  onSaveProfile,
  currentProfile,
  onAdvanceToNextPhase,
}) => {
  // Preset demo personas for quick testing
  const personas = [
    {
      name: 'Camila Montoya (Urbano TIC)',
      profile: {
        fullName: 'Camila Andrea Montoya Ríos',
        documentType: 'C.C.',
        documentNumber: '1020458921',
        age: 20,
        gender: 'Femenino',
        department: 'Antioquia',
        municipality: 'Medellín',
        stratum: 2,
        specialCondition: ['Joven en búsqueda de primer empleo'],
        headOfHousehold: false,
        dependentsCount: 0,
        internetAccess: 'Fibra/Banda Ancha Hogar' as const,
        primaryDevice: 'Computador Portátil / PC' as const,
        transportMode: 'Transporte Público (Bus / TransMilenio / MIO)' as const,
        commuteTimeMinutes: 40,
        varkScores: { visual: 4, auditory: 3, readWrite: 2, kinesthetic: 5 },
        dominantStyle: 'Kinestésico' as LearningStyle,
        kolbQuadrant: 'Acomodador' as KolbQuadrant,
        digitalSkills: {
          fileManagement: 4,
          officeSoftware: 4,
          lmsExperience: 4,
          virtualCommunication: 5,
          digitalSecurity: 4,
        },
        digitalAverage: 4.2,
        careerGoal: 'Empleo Inmediato' as const,
        weeklyStudyHours: 25,
        flags: {
          needsConnectivitySupport: false,
          needsTransportSubsidy: true,
          needsDigitalRemediation: false,
          highRiskDropOut: false,
          recommendedProgramModality: 'Presencial' as const,
        },
      },
    },
    {
      name: 'Yeison Palacios (Rural Pacífico)',
      profile: {
        fullName: 'Yeison Andrés Palacios Murillo',
        documentType: 'C.C.',
        documentNumber: '1077845120',
        age: 23,
        gender: 'Masculino',
        department: 'Chocó',
        municipality: 'Quibdó',
        stratum: 1,
        specialCondition: ['Población Afrocolombiana', 'Víctima del Conflicto'],
        headOfHousehold: true,
        dependentsCount: 2,
        internetAccess: 'Datos Móviles Limitados' as const,
        primaryDevice: 'Teléfono Inteligente (Smartphone)' as const,
        transportMode: 'A pie o Bicicleta' as const,
        commuteTimeMinutes: 75,
        varkScores: { visual: 3, auditory: 5, readWrite: 2, kinesthetic: 4 },
        dominantStyle: 'Auditivo' as LearningStyle,
        kolbQuadrant: 'Divergente' as KolbQuadrant,
        digitalSkills: {
          fileManagement: 2,
          officeSoftware: 2,
          lmsExperience: 1,
          virtualCommunication: 3,
          digitalSecurity: 2,
        },
        digitalAverage: 2.0,
        careerGoal: 'Creación de Empresa / Emprendimiento' as const,
        weeklyStudyHours: 15,
        flags: {
          needsConnectivitySupport: true,
          needsTransportSubsidy: true,
          needsDigitalRemediation: true,
          highRiskDropOut: true,
          recommendedProgramModality: 'Mixta' as const,
        },
      },
    },
  ];

  // Active form state
  const [formData, setFormData] = useState<LearnerProfile>(
    currentProfile || {
      fullName: 'Sebastián Gómez Morales',
      documentType: 'C.C.',
      documentNumber: '1098765432',
      age: 19,
      gender: 'Masculino',
      department: 'Santander',
      municipality: 'Bucaramanga',
      stratum: 2,
      specialCondition: [],
      headOfHousehold: false,
      dependentsCount: 0,
      internetAccess: 'Fibra/Banda Ancha Hogar',
      primaryDevice: 'Computador Portátil / PC',
      transportMode: 'Transporte Público (Bus / TransMilenio / MIO)',
      commuteTimeMinutes: 35,
      varkScores: {
        visual: 4,
        auditory: 2,
        readWrite: 3,
        kinesthetic: 4,
      },
      dominantStyle: 'Visual',
      kolbQuadrant: 'Convergente',
      digitalSkills: {
        fileManagement: 3,
        officeSoftware: 3,
        lmsExperience: 2,
        virtualCommunication: 4,
        digitalSecurity: 3,
      },
      digitalAverage: 3.0,
      careerGoal: 'Empleo Inmediato',
      weeklyStudyHours: 20,
      flags: {
        needsConnectivitySupport: false,
        needsTransportSubsidy: true,
        needsDigitalRemediation: true,
        highRiskDropOut: false,
        recommendedProgramModality: 'Presencial',
      },
    }
  );

  const [activeSubStep, setActiveSubStep] = useState<'form' | 'results'>('form');

  // Recalculate computed indicators
  const handleSkillChange = (field: keyof typeof formData.digitalSkills, value: number) => {
    const updatedSkills = { ...formData.digitalSkills, [field]: value };
    const avg = Object.values(updatedSkills).reduce((a, b) => a + b, 0) / 5;
    
    setFormData((prev) => ({
      ...prev,
      digitalSkills: updatedSkills,
      digitalAverage: Number(avg.toFixed(1)),
      flags: {
        ...prev.flags,
        needsDigitalRemediation: avg < 3.5,
      },
    }));
  };

  const handleVarkScoreChange = (style: 'visual' | 'auditory' | 'readWrite' | 'kinesthetic', value: number) => {
    const newScores = { ...formData.varkScores, [style]: value };
    
    // Find highest
    let dominant: LearningStyle = 'Visual';
    let max = newScores.visual;
    if (newScores.auditory > max) { dominant = 'Auditivo'; max = newScores.auditory; }
    if (newScores.readWrite > max) { dominant = 'Lectura/Escritura'; max = newScores.readWrite; }
    if (newScores.kinesthetic > max) { dominant = 'Kinestésico'; max = newScores.kinesthetic; }

    // Map to Kolb
    let quadrant: KolbQuadrant = 'Convergente';
    if (dominant === 'Kinestésico') quadrant = 'Acomodador';
    else if (dominant === 'Auditivo') quadrant = 'Divergente';
    else if (dominant === 'Lectura/Escritura') quadrant = 'Asimilador';
    else quadrant = 'Convergente';

    setFormData((prev) => ({
      ...prev,
      varkScores: newScores,
      dominantStyle: dominant,
      kolbQuadrant: quadrant,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compute final flags
    const isConnectivityLimited = formData.internetAccess !== 'Fibra/Banda Ancha Hogar' || formData.primaryDevice === 'Teléfono Inteligente (Smartphone)' || formData.primaryDevice === 'Dispositivo Compartido / Ninguno';
    const isTransportNeeded = formData.commuteTimeMinutes >= 45 || formData.stratum <= 2;
    const isDigitalRemediation = formData.digitalAverage < 3.5;
    const isHighRisk = formData.stratum === 1 && (formData.headOfHousehold || formData.dependentsCount > 0) && isConnectivityLimited;

    const finalProfile: LearnerProfile = {
      ...formData,
      flags: {
        needsConnectivitySupport: isConnectivityLimited,
        needsTransportSubsidy: isTransportNeeded,
        needsDigitalRemediation: isDigitalRemediation,
        highRiskDropOut: isHighRisk,
        recommendedProgramModality: isConnectivityLimited ? 'Presencial' : 'Mixta',
      },
    };

    onSaveProfile(finalProfile);
    setActiveSubStep('results');
  };

  const loadPreset = (preset: typeof personas[0]['profile']) => {
    setFormData(preset);
    onSaveProfile(preset);
    setActiveSubStep('results');
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-600/30">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider uppercase bg-emerald-950/40 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/30">
              Etapa 1 · Diagnóstico Integral
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Diagnóstico & Caracterización Inicial del Aprendiz
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-emerald-100 mr-2">Cargar perfil de prueba:</span>
            {personas.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => loadPreset(p.profile)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white text-white hover:text-emerald-900 border border-white/30 transition-colors cursor-pointer"
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white space-y-4">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            El proceso de caracterización no es un mero censo demográfico: es el instrumento técnico y psicopedagógico que calibra de forma personalizada tu experiencia en el SENA. A partir de tus respuestas sobre estilos de aprendizaje (VARK / Kolb), competencias digitales, barreras de movilidad y conectividad, el sistema activa alertas tempranas de bienestar y rutas de nivelación a tu medida.
          </p>

          {/* Sub Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-200 pt-2">
            <button
              type="button"
              onClick={() => setActiveSubStep('form')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                activeSubStep === 'form'
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              1. Formulario de Medición de Variables
            </button>
            <button
              type="button"
              onClick={() => setActiveSubStep('results')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                activeSubStep === 'results'
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              2. Diagnóstico & Personalización Dinámica
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeSubStep === 'form' ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Group 1: Socioeconomic Profile */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Variables Socioeconómicas & Demográficas</h3>
                <p className="text-xs text-slate-500">Determinantes para la asignación de apoyos y focalización institucional.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo y Documento</label>
                <div className="flex gap-2">
                  <select
                    value={formData.documentType}
                    onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                    className="w-24 px-2 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  >
                    <option value="C.C.">C.C.</option>
                    <option value="T.I.">T.I.</option>
                    <option value="C.E.">C.E.</option>
                    <option value="P.P.T.">P.P.T.</option>
                  </select>
                  <input
                    type="text"
                    required
                    value={formData.documentNumber}
                    onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Edad y Género</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={14}
                    max={85}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                    className="w-20 px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  >
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="No binario / Otro">No binario / Otro</option>
                    <option value="Prefiero no decir">Prefiero no decir</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Departamento de Residencia</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Municipio / Vereda</label>
                <input
                  type="text"
                  value={formData.municipality}
                  onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Estrato Socioeconómico</label>
                <select
                  value={formData.stratum}
                  onChange={(e) => setFormData({ ...formData, stratum: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value={1}>Estrato 1 (Prioritario Bienestar)</option>
                  <option value={2}>Estrato 2 (Prioritario Bienestar)</option>
                  <option value={3}>Estrato 3</option>
                  <option value={4}>Estrato 4</option>
                  <option value={5}>Estrato 5 o 6</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.headOfHousehold}
                    onChange={(e) => setFormData({ ...formData, headOfHousehold: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>¿Es cabeza de hogar o principal aportante económico de su núcleo?</span>
                </label>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span>Personas a cargo económicamente:</span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={formData.dependentsCount}
                    onChange={(e) => setFormData({ ...formData, dependentsCount: Number(e.target.value) })}
                    className="w-16 px-2 py-1 rounded border border-slate-300 text-center font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Group 2: Connectivity & Transport Barriers */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm">
                B
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Barreras de Conectividad, Hardware y Transporte</h3>
                <p className="text-xs text-slate-500">Diagnóstico de infraestructura personal para adaptar las tareas en Zajuna.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Acceso habitual a Internet en lugar de residencia
                </label>
                <select
                  value={formData.internetAccess}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      internetAccess: e.target.value as any,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value="Fibra/Banda Ancha Hogar">Fibra óptica o banda ancha fija estable</option>
                  <option value="Datos Móviles Limitados">Datos móviles prepago (paquetes limitados)</option>
                  <option value="Sin Internet Propio (Café/Familiar)">Sin internet propio (depende de café internet o vecinos)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Dispositivo tecnológico de estudio principal
                </label>
                <select
                  value={formData.primaryDevice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primaryDevice: e.target.value as any,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value="Computador Portátil / PC">Computador portátil o de escritorio de uso personal</option>
                  <option value="Teléfono Inteligente (Smartphone)">Solo teléfono inteligente (Smartphone)</option>
                  <option value="Tablet">Tablet con teclado o táctil</option>
                  <option value="Dispositivo Compartido / Ninguno">Computador familiar compartido por varias personas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Medio principal de transporte al Centro de Formación
                </label>
                <select
                  value={formData.transportMode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transportMode: e.target.value as any,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value="Transporte Público (Bus / TransMilenio / MIO)">Transporte público masivo (Bus, Metro, MIO, TransMilenio)</option>
                  <option value="A pie o Bicicleta">A pie o bicicleta</option>
                  <option value="Motocicleta o Vehículo">Motocicleta o vehículo particular</option>
                  <option value="Ruta Intermunicipal / Mixto">Ruta intermunicipal o transporte fluvial/mixto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tiempo estimado de desplazamiento de ida (minutos)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={5}
                    max={150}
                    step={5}
                    value={formData.commuteTimeMinutes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        commuteTimeMinutes: Number(e.target.value),
                      })
                    }
                    className="w-full accent-emerald-600"
                  />
                  <span className="w-16 text-center font-mono font-bold text-slate-800 text-sm bg-slate-100 px-2 py-1 rounded">
                    {formData.commuteTimeMinutes} m
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Group 3: Learning Styles (VARK & Kolb) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                C
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Estilos de Aprendizaje: Modelo VARK y Ciclo de Kolb</h3>
                <p className="text-xs text-slate-500">¿Cómo asimilas mejor la información técnica y práctica? Califica de 1 a 5 tu afinidad.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Visual</span>
                  <span className="text-xs font-mono font-bold text-slate-700">{formData.varkScores.visual}/5</span>
                </div>
                <p className="text-xs text-slate-600">
                  Aprendo mejor con diagramas, planos, infografías, colores, esquemas y videos demostrativos.
                </p>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={formData.varkScores.visual}
                  onChange={(e) => handleVarkScoreChange('visual', Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Auditivo</span>
                  <span className="text-xs font-mono font-bold text-slate-700">{formData.varkScores.auditory}/5</span>
                </div>
                <p className="text-xs text-slate-600">
                  Asimilo mejor escuchando explicaciones, debatiendo con instructores, podcasts y discusiones de grupo.
                </p>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={formData.varkScores.auditory}
                  onChange={(e) => handleVarkScoreChange('auditory', Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Lectura/Escritura</span>
                  <span className="text-xs font-mono font-bold text-slate-700">{formData.varkScores.readWrite}/5</span>
                </div>
                <p className="text-xs text-slate-600">
                  Prefiero leer manuales técnicos, guías en PDF, tomar apuntes detallados y redactar informes.
                </p>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={formData.varkScores.readWrite}
                  onChange={(e) => handleVarkScoreChange('readWrite', Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Kinestésico</span>
                  <span className="text-xs font-mono font-bold text-slate-700">{formData.varkScores.kinesthetic}/5</span>
                </div>
                <p className="text-xs text-slate-600">
                  Aprendo manipulando herramientas, armando circuitos, ensayando en simuladores y cometiendo errores prácticos.
                </p>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={formData.varkScores.kinesthetic}
                  onChange={(e) => handleVarkScoreChange('kinesthetic', Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
              <div>
                Estilo Predominante detectado: <strong>{formData.dominantStyle}</strong> · Cuadrante de Kolb estimado: <strong>{formData.kolbQuadrant}</strong>
              </div>
              <span className="text-slate-500 text-[11px]">Se actualiza en tiempo real</span>
            </div>
          </div>

          {/* Group 4: Digital Skills Self-Diagnosis */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                D
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Competencias Digitales Básicas para Zajuna</h3>
                <p className="text-xs text-slate-500">Auto-evalúa con honestidad tu nivel actual de 1 (Principiante) a 5 (Experto).</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { key: 'fileManagement', label: 'Gestión de Archivos y Carpetas', desc: 'Crear carpetas, descomprimir .ZIP, convertir documentos a PDF y organizar descargas.' },
                { key: 'officeSoftware', label: 'Procesadores de Texto y Hojas de Cálculo', desc: 'Manejo básico de Word/Google Docs y tablas sencillas en Excel.' },
                { key: 'lmsExperience', label: 'Uso de Plataformas Virtuales de Estudio', desc: 'Subir tareas a foros, descargar materiales y presentar exámenes en línea.' },
                { key: 'virtualCommunication', label: 'Comunicación en Línea y Correo', desc: 'Uso de correo formal, Teams/Meet y normas de Netiqueta.' },
                { key: 'digitalSecurity', label: 'Seguridad Digital y Contraseñas', desc: 'Identificar correos falsos (phishing) y proteger claves personales.' },
              ].map((skill) => (
                <div key={skill.key} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{skill.label}</span>
                    <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border text-emerald-700">
                      {formData.digitalSkills[skill.key as keyof typeof formData.digitalSkills]} / 5
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">{skill.desc}</p>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={formData.digitalSkills[skill.key as keyof typeof formData.digitalSkills]}
                    onChange={(e) => handleSkillChange(skill.key as any, Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>
              ))}

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-center items-center text-center space-y-2">
                <span className="text-xs font-semibold text-slate-600">Promedio Digital Inicial</span>
                <span className="text-3xl font-extrabold text-emerald-800 font-mono">
                  {formData.digitalAverage} <span className="text-sm font-normal text-slate-500">/ 5.0</span>
                </span>
                <span className="text-xs text-slate-600">
                  {formData.digitalAverage >= 3.5 ? (
                    <span className="text-emerald-700 font-medium">Competencias TIC adecuadas para inicio directo</span>
                  ) : (
                    <span className="text-amber-700 font-medium">Se activará Micro-curso de Nivelación en Zajuna</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="submit"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Generar Diagnóstico y Perfil Adaptativo</span>
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </form>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  Síntesis de Caracterización Exitosa
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Perfil del Aprendiz: {formData.fullName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">
                  Documento: {formData.documentType} {formData.documentNumber} · {formData.department} ({formData.municipality}) · Estrato {formData.stratum}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSubStep('form')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
                >
                  Modificar Datos
                </button>
                <button
                  onClick={onAdvanceToNextPhase}
                  className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Continuar a: Regionales e Identidad Institucional</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Diagnostic Indicators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase">Estilo de Aprendizaje</span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {formData.dominantStyle}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {formData.dominantStyle === 'Visual' && 'Asimilas mejor mapas conceptuales, diagramas de flujo y videos estructurados.'}
                  {formData.dominantStyle === 'Auditivo' && 'Retienes con mayor efectividad explicaciones verbales, debates y cátedras dialogadas.'}
                  {formData.dominantStyle === 'Lectura/Escritura' && 'Tu punto fuerte es el análisis de manuales técnicos, guías en PDF y resúmenes escritos.'}
                  {formData.dominantStyle === 'Kinestésico' && 'Aprendes ejecutando, manipulando maquinaria, simuladores de taller y proyectos vivenciales.'}
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  Cuadrante Kolb: <strong>{formData.kolbQuadrant}</strong> (Orientado a la experimentación activa).
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase">Alistamiento Digital</span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {formData.digitalAverage} / 5.0
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {formData.digitalAverage >= 3.5
                    ? 'Cuentas con las competencias ofimáticas y de navegación para iniciar sin tropiezos en la plataforma Zajuna.'
                    : 'Se ha programado de forma proactiva tu participación en el módulo corto de nivelación digital durante la primera semana.'}
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  Dispositivo: <strong>{formData.primaryDevice}</strong> · Red: <strong>{formData.internetAccess}</strong>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase">Prioridad de Bienestar</span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    formData.flags.highRiskDropOut
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {formData.flags.highRiskDropOut ? 'Focalización Alta' : 'Focalización Estándar'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {formData.stratum <= 2
                    ? 'Cumples con los requisitos base para postularte al Apoyo de Sostenimiento Regular y bonos de transporte del SENA.'
                    : 'Acceso garantizado a toda la oferta de deportes, cultura, psicología y asesoría ocupacional de tu centro.'}
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  Tiempo de viaje diario: <strong>{formData.commuteTimeMinutes} minutos</strong> ({formData.transportMode}).
                </div>
              </div>
            </div>

            {/* Dynamic Customization Breakdown */}
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>¿Cómo personaliza este diagnóstico el resto de tu inducción?</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900">Adaptación de Materiales en Zajuna:</strong> Tus instructores recibirán un reporte agregado donde se sugiere priorizar {formData.dominantStyle === 'Visual' ? 'infografías y esquemas interactivos' : formData.dominantStyle === 'Auditivo' ? 'podcast y sesiones sincrónicas dialogadas' : 'talleres prácticos de taller'} acordes a tu estilo.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900">Plan de Alivio de Conectividad / Transporte:</strong> {formData.flags.needsConnectivitySupport ? 'Se incluye tu caso en la lista de postulantes para subsidio de datos o préstamo de tablet institucional.' : 'Canalización directa con el punto de Bienestar para entrega de carné y tarifa estudiantil de transporte.'}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900">Ruta de Nivelación Digital (Fase 5):</strong> {formData.flags.needsDigitalRemediation ? 'Tienes pre-asignado el micro-curso de 20 horas "Manejo Eficiente de Zajuna" para cerrar brechas de forma temprana.' : 'Estás exento de nivelación básica y puedes postularte a ser monitor de sala de cómputo.'}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-slate-900">Formación por Proyectos:</strong> Al conformar los grupos de trabajo del proyecto formativo, el instructor balanceará perfiles visuales, kinestésicos y auditivos para enriquecer el equipo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
