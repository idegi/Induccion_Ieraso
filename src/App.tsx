import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { Phase1Characterization } from './components/Phase1Characterization';
import { Phase2RegionalMap } from './components/Phase2RegionalMap';
import { Phase3AcademicEcosystem } from './components/Phase3AcademicEcosystem';
import { Phase4WellnessRoute } from './components/Phase4WellnessRoute';
import { Phase5AssessmentRemediation } from './components/Phase5AssessmentRemediation';
import { TechnicalDossierModal } from './components/TechnicalDossierModal';
import { LearnerProfileCard } from './components/LearnerProfileCard';
import { LearnerProfile } from './types/induction';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [completedPhases, setCompletedPhases] = useState<number[]>([1]); // Fase 1 default acknowledged or started
  const [learnerProfile, setLearnerProfile] = useState<LearnerProfile | null>(() => {
    const saved = localStorage.getItem('sena_learner_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Persist learner profile in localStorage
  useEffect(() => {
    if (learnerProfile) {
      localStorage.setItem('sena_learner_profile', JSON.stringify(learnerProfile));
    }
  }, [learnerProfile]);

  const markPhaseComplete = (phaseNum: number) => {
    setCompletedPhases((prev) => (prev.includes(phaseNum) ? prev : [...prev, phaseNum]));
  };

  const handleSaveProfile = (profile: LearnerProfile) => {
    setLearnerProfile(profile);
    markPhaseComplete(1);
  };

  const handleCompleteInduction = () => {
    markPhaseComplete(5);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Universal Top Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDossier={() => setIsDossierOpen(true)}
        learnerProfile={learnerProfile}
        completedPhases={completedPhases}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Floating Learner Profile Summary (if registered) */}
        {learnerProfile && activeTab !== 'hero' && (
          <LearnerProfileCard
            learnerProfile={learnerProfile}
            completedPhases={completedPhases}
            onOpenPhase={(phaseId) => setActiveTab(phaseId)}
            onOpenDossier={() => setIsDossierOpen(true)}
          />
        )}

        {/* Dynamic Tab Views */}
        {activeTab === 'hero' && (
          <HeroBanner
            onStartJourney={() => setActiveTab('fase1')}
            onSelectPhase={(phaseId) => {
              setActiveTab(phaseId);
              const num = parseInt(phaseId.replace('fase', ''), 10);
              if (!isNaN(num)) markPhaseComplete(num);
            }}
            completedPhases={completedPhases}
            learnerProfile={learnerProfile}
            onOpenDossier={() => setIsDossierOpen(true)}
          />
        )}

        {activeTab === 'fase1' && (
          <Phase1Characterization
            onSaveProfile={handleSaveProfile}
            currentProfile={learnerProfile}
            onAdvanceToNextPhase={() => {
              markPhaseComplete(1);
              setActiveTab('fase2');
            }}
          />
        )}

        {activeTab === 'fase2' && (
          <Phase2RegionalMap
            onAdvanceToNextPhase={() => {
              markPhaseComplete(2);
              setActiveTab('fase3');
            }}
          />
        )}

        {activeTab === 'fase3' && (
          <Phase3AcademicEcosystem
            onAdvanceToNextPhase={() => {
              markPhaseComplete(3);
              setActiveTab('fase4');
            }}
          />
        )}

        {activeTab === 'fase4' && (
          <Phase4WellnessRoute
            onAdvanceToNextPhase={() => {
              markPhaseComplete(4);
              setActiveTab('fase5');
            }}
            learnerProfile={learnerProfile}
          />
        )}

        {activeTab === 'fase5' && (
          <Phase5AssessmentRemediation
            learnerProfile={learnerProfile}
            onCompleteInduction={handleCompleteInduction}
          />
        )}
      </main>

      {/* Technical & Instructional Blueprint Modal */}
      <TechnicalDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Institutional Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              SENA
            </div>
            <div>
              <p className="font-semibold text-white">Servicio Nacional de Aprendizaje - SENA</p>
              <p className="text-[11px] text-slate-500">Ministerio del Trabajo · República de Colombia</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <button
              onClick={() => setIsDossierOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Dossier para Desarrolladores & Diseñadores
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.sena.edu.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Portal Institucional
            </a>
            <span aria-hidden="true">·</span>
            <span>Línea Gratuita Nacional: 018000 910270</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
