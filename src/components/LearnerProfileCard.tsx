import React from 'react';
import { LearnerProfile } from '../types/induction';
import { User, CheckCircle2, Award, ShieldCheck } from 'lucide-react';

interface LearnerProfileCardProps {
  learnerProfile: LearnerProfile | null;
  completedPhases: number[];
  onOpenPhase: (phaseId: string) => void;
  onOpenDossier: () => void;
}

export const LearnerProfileCard: React.FC<LearnerProfileCardProps> = ({
  learnerProfile,
  completedPhases,
  onOpenPhase,
  onOpenDossier,
}) => {
  if (!learnerProfile) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
          {learnerProfile.fullName.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-slate-900">{learnerProfile.fullName}</h4>
            <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
              {learnerProfile.dominantStyle}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            {learnerProfile.department} ({learnerProfile.municipality}) · TIC: {learnerProfile.digitalAverage}/5.0 · Estrato {learnerProfile.stratum}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <div className="hidden md:block">
          <span className="text-slate-400">Ruta: </span>
          <strong className="text-emerald-700 font-mono">{completedPhases.length}/5 Completadas</strong>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'fase1', num: 1, name: 'Diagnóstico' },
            { id: 'fase2', num: 2, name: 'Regionales' },
            { id: 'fase3', num: 3, name: 'Programas' },
            { id: 'fase4', num: 4, name: 'Bienestar' },
            { id: 'fase5', num: 5, name: 'Evaluación' },
          ].map((phase) => {
            const isDone = completedPhases.includes(phase.num);
            return (
              <button
                key={phase.id}
                onClick={() => onOpenPhase(phase.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  isDone
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title={`Ir a ${phase.name}`}
              >
                <span>{phase.name}</span>
                {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
