import React from 'react';
import { BookOpen, MapPin, Award, Heart, CheckCircle2, FileText, User } from 'lucide-react';
import { LearnerProfile } from '../types/induction';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDossier: () => void;
  learnerProfile: LearnerProfile | null;
  completedPhases: number[];
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenDossier,
  learnerProfile,
  completedPhases
}) => {
  const navItems = [
    { id: 'fase1', label: 'Diagnóstico & Caracterización', shortLabel: 'Diagnóstico', icon: User },
    { id: 'fase2', label: 'Geolocalización & Identidad', shortLabel: 'Regionales', icon: MapPin },
    { id: 'fase3', label: 'Ecosistema de Formación', shortLabel: 'Programas & LMS', icon: BookOpen },
    { id: 'fase4', label: 'Bienestar & Ruta Integral', shortLabel: 'Bienestar', icon: Heart },
    { id: 'fase5', label: 'Evaluación & Nivelación', shortLabel: 'Evaluación', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200 shadow-xs shrink-0">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.yVyjkVoRh75gRyv5hOVNkwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Logo SENA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-0.5 scale-150 transition-transform"
                style={{ transform: 'scale(1.5)' }}
              />
            </div>
            <button
              onClick={() => setActiveTab('hero')}
              className="text-left group cursor-pointer focus:outline-hidden"
            >
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                Ruta de Inducción
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-500 ml-2">
                · Formación Profesional Integral
              </span>
            </button>
          </div>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, idx) => {
              const isCompleted = completedPhases.includes(idx + 1);
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isCompleted && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-0.5" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap border border-slate-200 cursor-pointer"
              title="Ver especificación técnica y pedagógica para desarrolladores e instructores"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Dossier Técnico</span>
              <span className="sm:hidden">Dossier</span>
            </button>

            {learnerProfile ? (
              <button
                onClick={() => setActiveTab('fase1')}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-900 bg-emerald-100/80 rounded-lg border border-emerald-200 hover:bg-emerald-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold max-w-[120px] truncate">{learnerProfile.fullName.split(' ')[0]}</span>
                <span className="text-emerald-700 hidden sm:inline">· {learnerProfile.dominantStyle}</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('fase1')}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
              >
                Caracterizarme
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2 border-t border-slate-100 gap-1 text-xs">
          {navItems.map((item, idx) => {
            const isCompleted = completedPhases.includes(idx + 1);
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium flex items-center gap-1 ${
                  isActive
                    ? 'bg-emerald-700 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{item.shortLabel}</span>
                {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-300" />}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
