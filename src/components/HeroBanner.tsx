import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, Compass, Laptop, ShieldCheck } from 'lucide-react';
import { LearnerProfile } from '../types/induction';

interface HeroBannerProps {
  onStartJourney: () => void;
  onSelectPhase: (phaseId: string) => void;
  completedPhases: number[];
  learnerProfile: LearnerProfile | null;
  onOpenDossier: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartJourney,
  onSelectPhase,
  completedPhases,
  learnerProfile,
  onOpenDossier,
}) => {
  const phases = [
    {
      id: 'fase1',
      number: 1,
      title: 'Diagnóstico & Caracterización',
      subtitle: 'VARK, TIC, socioeconómico y barreras',
      icon: Users,
    },
    {
      id: 'fase2',
      number: 2,
      title: 'Geolocalización & Identidad',
      subtitle: '33 Regionales, centros y símbolos patrios',
      icon: Compass,
    },
    {
      id: 'fase3',
      number: 3,
      title: 'Ecosistema de Formación',
      subtitle: 'Oferta académica, etapas y plataformas LMS',
      icon: Laptop,
    },
    {
      id: 'fase4',
      number: 4,
      title: 'Bienestar & Ruta del Aprendiz',
      subtitle: 'Apoyos económicos y syllabus de 5 días',
      icon: ShieldCheck,
    },
    {
      id: 'fase5',
      number: 5,
      title: 'Evaluación & Cierre de Brechas',
      subtitle: 'Reto gamificado, nivelación y constancia',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Container with Institutional Styling */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl border border-emerald-800/30">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/src/assets/images/sena_induction_hero_1790277521006.jpg"
            alt="Aprendices SENA en ambiente de innovación"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 py-12 sm:px-10 sm:py-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-emerald-300">
            <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
              Proceso Oficial de Inducción SENA
            </span>
            <span aria-hidden="true">·</span>
            <span>Aspirantes & Nuevos Aprendices</span>
            <span aria-hidden="true">·</span>
            <span>Vigencia Nacional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Bienvenido a la comunidad que transforma el futuro de Colombia
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            La inducción es tu primer gran resultado de aprendizaje. Un recorrido estructurado, digital y centrado en ti: desde tu caracterización individual y el mapa de las 33 regionales, hasta el dominio de las plataformas y el cierre de brechas formativas.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartJourney}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
            >
              <span>{learnerProfile ? 'Continuar Mi Inducción' : 'Iniciar Diagnóstico & Caracterización'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDossier}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20 backdrop-blur-xs cursor-pointer text-sm"
            >
              Guía Técnica para Desarrolladores & Diseñadores
            </button>
          </div>

          {/* Quick Stats or Learner Recognition */}
          {learnerProfile && (
            <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">
                  {learnerProfile.fullName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{learnerProfile.fullName}</p>
                  <p className="text-xs text-emerald-300">
                    Estilo dominante: {learnerProfile.dominantStyle} · Digital: {learnerProfile.digitalAverage.toFixed(1)}/5.0
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-300">
                Progreso: <strong className="text-white font-mono">{completedPhases.length}/5 fases completadas</strong> ({Math.round((completedPhases.length / 5) * 100)}%)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Institutional Video Welcome */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Mensaje de Bienvenida - Dirección General</h3>
        <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/NbnGwlRBdLU?rel=0"
            title="Bienvenida Director SENA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* The 5 Core Phases Interactive Road Map */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Las 5 Fases del Proceso de Inducción
            </h2>
            <p className="text-sm text-slate-600">
              Haz clic en cualquier fase para explorar su arquitectura técnica, interactuar con sus herramientas o registrar tu avance.
            </p>
          </div>
          <div className="hidden sm:block text-xs font-mono text-slate-500">
            {completedPhases.length} de 5 Completadas
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {phases.map((phase) => {
            const isCompleted = completedPhases.includes(phase.number);
            const Icon = phase.icon;

            return (
              <div
                key={phase.id}
                onClick={() => onSelectPhase(phase.id)}
                className={`group relative rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isCompleted
                    ? 'border-emerald-600 bg-white'
                    : 'border-emerald-500/50 bg-white hover:border-emerald-600'
                }`}
              >
                {/* Green Header Zone */}
                <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white px-4 py-2.5 flex items-center justify-between border-b border-emerald-600/30">
                  <span className="text-xs font-bold font-mono tracking-wider text-emerald-100">
                    0{phase.number} · SENA
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  ) : (
                    <Icon className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                  )}
                </div>

                {/* White Content Zone */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-normal line-clamp-2">
                      {phase.subtitle}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span>{isCompleted ? 'Revisar' : 'Ingresar'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
