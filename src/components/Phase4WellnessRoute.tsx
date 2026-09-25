import React, { useState } from 'react';
import { WELLNESS_DIMENSIONS } from '../data/wellnessData';
import { INDUCTION_SCHEDULE } from '../data/scheduleData';
import { WellnessDimension, InductionDay, LearnerProfile } from '../types/induction';
import { Heart, Calendar, CheckSquare, ShieldCheck, ChevronRight, CheckCircle2, Clock, Users, Award, HelpCircle } from 'lucide-react';

interface Phase4WellnessRouteProps {
  onAdvanceToNextPhase: () => void;
  learnerProfile: LearnerProfile | null;
}

export const Phase4WellnessRoute: React.FC<Phase4WellnessRouteProps> = ({
  onAdvanceToNextPhase,
  learnerProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'bienestar' | 'cronograma' | 'simulador'>('cronograma');
  const [selectedDimension, setSelectedDimension] = useState<WellnessDimension>(WELLNESS_DIMENSIONS[0]);
  const [selectedDay, setSelectedDay] = useState<InductionDay>(INDUCTION_SCHEDULE[0]);
  const [checkedActivities, setCheckedActivities] = useState<Record<string, boolean>>({});

  // Simulator state for Apoyo de Sostenimiento
  const [simStratum, setSimStratum] = useState<number>(learnerProfile?.stratum || 1);
  const [simHasContract, setSimHasContract] = useState<boolean>(false);
  const [simIsFIC, setSimIsFIC] = useState<boolean>(false);
  const [simSisbenGroup, setSimSisbenGroup] = useState<'A' | 'B' | 'C' | 'D'>('A');

  const toggleActivity = (key: string) => {
    setCheckedActivities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isEligibleRegular = (simStratum === 1 || simStratum === 2) && !simHasContract && (simSisbenGroup === 'A' || simSisbenGroup === 'B');
  const isEligibleFIC = simIsFIC && !simHasContract;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-600/30">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider uppercase bg-emerald-950/40 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/30">
              Etapa 4 · Acompañamiento & Permanencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Ruta de Bienestar Integral y Cronograma de Inducción
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-lg border border-white/20 text-xs">
            <button
              onClick={() => setActiveTab('cronograma')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'cronograma' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ruta 5 Días (Syllabus)</span>
            </button>
            <button
              onClick={() => setActiveTab('bienestar')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'bienestar' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Servicios de Bienestar</span>
            </button>
            <button
              onClick={() => setActiveTab('simulador')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'simulador' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Simulador de Apoyos</span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            El plan de inducción dura una semana completa (Lunes a Viernes) y es la piedra angular de tu formación. En paralelo, Bienestar al Aprendiz garantiza apoyos socioeconómicos, salud psicológica, torneos deportivos, danzas y acompañamiento para evitar la deserción.
          </p>
        </div>
      </div>

      {/* Tab 1: 5-Day Induction Schedule (Ruta de la Primera Semana) */}
      {activeTab === 'cronograma' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Day Selector Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Cronograma Tipo: Día por Día
            </span>

            <div className="space-y-2">
              {INDUCTION_SCHEDULE.map((day) => {
                const isSelected = selectedDay.dayNumber === day.dayNumber;
                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => setSelectedDay(day)}
                    className={`w-full p-4 rounded-xl text-left transition-all border cursor-pointer space-y-1.5 ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 font-mono">
                        {day.dayName}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        08:00 - 13:00
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {day.themeTitle}
                    </h4>

                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {day.pedagogicalObjective}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <strong className="text-slate-900 block">Horario Estándar de Inducción:</strong>
              <p>Jornadas de 5 horas diarias presenciales con talleres interactivos y práctica en salas de cómputo.</p>
              <div className="text-emerald-700 font-medium pt-1 border-t border-slate-200">
                Total semana: 25 horas certificadas de inducción.
              </div>
            </div>
          </div>

          {/* Day Activities Detailed Schedule (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono font-bold text-emerald-700">Día {selectedDay.dayNumber} de 5</span>
                <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full font-semibold text-[11px]">
                  {selectedDay.dayName}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{selectedDay.themeTitle}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Objetivo Pedagógico:</strong> {selectedDay.pedagogicalObjective}
              </p>
              <div className="text-xs text-slate-500 font-mono">
                Competencia asociada: {selectedDay.competencyTarget}
              </div>
            </div>

            {/* Hourly Activities List */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Actividades Programadas ({selectedDay.activities.length})
              </span>

              <div className="space-y-3">
                {selectedDay.activities.map((act, idx) => {
                  const actKey = `d${selectedDay.dayNumber}-a${idx}`;
                  const isDone = !!checkedActivities[actKey];

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all space-y-2.5 ${
                        isDone
                          ? 'bg-emerald-50/40 border-emerald-300'
                          : 'bg-slate-50/60 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggleActivity(actKey)}
                            className="cursor-pointer text-slate-400 hover:text-emerald-600 transition-colors"
                          >
                            <CheckSquare className={`w-5 h-5 ${isDone ? 'text-emerald-600 fill-emerald-100' : ''}`} />
                          </button>
                          <div>
                            <span className="text-[11px] font-mono font-bold text-emerald-700 block">
                              {act.timeSlot} · {act.methodology}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                              {act.title}
                            </h4>
                          </div>
                        </div>

                        <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border shrink-0">
                          {act.platformOrSpace}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {act.pedagogicalDescription}
                      </p>

                      <div className="pl-7 pt-1 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                        <span>📦 Entregable: <strong className="text-slate-800">{act.deliverable}</strong></span>
                        <span>👤 Responsable: <strong className="text-slate-800">{act.responsibleRole}</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Checklist of Learner Verification */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 block">Criterios de Evaluación del Día:</span>
              <ul className="space-y-1">
                {selectedDay.evaluationChecklist.map((crit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveTab('bienestar')}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                Conocer servicios de Bienestar al Aprendiz →
              </button>
              <button
                onClick={onAdvanceToNextPhase}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Avanzar a: Evaluación & Cierre de Brechas</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Wellness Dimensions Explorer */}
      {activeTab === 'bienestar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dimensions Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Dimensiones de Bienestar Obligatorias
            </span>

            {WELLNESS_DIMENSIONS.map((dim) => {
              const isSelected = selectedDimension.id === dim.id;
              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedDimension(dim)}
                  className={`w-full p-4 rounded-xl text-left transition-all border cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-800">
                      Dimensión 0{dim.dimensionNumber}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {dim.services.length} Servicios
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {dim.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {dim.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Dimension Detail (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                Dimensión {selectedDimension.dimensionNumber}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {selectedDimension.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedDimension.description}
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Portafolio de Servicios Disponibles
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedDimension.services.map((serv, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900">{serv.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{serv.details}</p>
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
                      <div><strong className="text-slate-800">Requisitos:</strong> {serv.requirements}</div>
                      <div><strong className="text-slate-800">Canal de Entrega:</strong> {serv.deliveryMode}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Story */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Impacto en la Comunidad SENA:</span>
              </div>
              <p className="leading-relaxed">{selectedDimension.impactStory}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Apoyo de Sostenimiento Simulator */}
      {activeTab === 'simulador' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              Herramienta de Simulación y Focalización
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Simulador de Elegibilidad para Apoyos de Sostenimiento (Regular y FIC)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Verifica al instante si tu perfil cumple con las condiciones legales (Resolución 1227 de 2014) para recibir auxilio económico mensual durante tu etapa lectiva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Estrato Socioeconómico en tu Factura de Servicios
              </label>
              <select
                value={simStratum}
                onChange={(e) => setSimStratum(Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm"
              >
                <option value={1}>Estrato 1 (Prioridad Máxima)</option>
                <option value={2}>Estrato 2 (Prioridad Alta)</option>
                <option value={3}>Estrato 3 (Sujeto a disponibilidad remanente)</option>
                <option value={4}>Estrato 4</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Clasificación SISBÉN IV
              </label>
              <select
                value={simSisbenGroup}
                onChange={(e) => setSimSisbenGroup(e.target.value as any)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm"
              >
                <option value="A">Grupo A (Pobreza extrema - A1 a A5)</option>
                <option value="B">Grupo B (Pobreza moderada - B1 a B7)</option>
                <option value="C">Grupo C (Vulnerabilidad)</option>
                <option value="D">Grupo D (No vulnerable)</option>
              </select>
            </div>

            <div className="sm:col-span-2 space-y-3 pt-2">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simHasContract}
                  onChange={(e) => setSimHasContract(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>¿Ya tienes Contrato de Aprendizaje con una empresa patrocinadora que te pague el salario mínimo?</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simIsFIC}
                  onChange={(e) => setSimIsFIC(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>¿Tu programa pertenece al sector de Construcción, Obras Civiles, Soldadura o Electricidad (Fondo FIC)?</span>
              </label>
            </div>
          </div>

          {/* Results calculation */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-4">
            <span className="text-xs font-bold text-slate-900 uppercase">Resultado de la Simulación:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Apoyo Regular */}
              <div className={`p-4 rounded-xl border ${isEligibleRegular ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold">Apoyo Regular (50% SMLV)</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${isEligibleRegular ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-700'}`}>
                    {isEligibleRegular ? 'ELEGIBLE' : 'NO ELEGIBLE'}
                  </span>
                </div>
                <p className="text-xs leading-relaxed">
                  {isEligibleRegular
                    ? 'Cumples con los requisitos para postularte en la primera convocatoria de tu centro. Presenta copia de factura de servicios y certificado SISBÉN en el Día 4 de inducción.'
                    : 'Para ser elegible no debes tener contrato de aprendizaje y pertenecer a estratos 1 o 2 con SISBÉN grupo A o B.'}
                </p>
              </div>

              {/* Apoyo FIC */}
              <div className={`p-4 rounded-xl border ${isEligibleFIC ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold">Apoyo Fondo FIC (Construcción)</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${isEligibleFIC ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-700'}`}>
                    {isEligibleFIC ? 'ELEGIBLE' : 'NO APLICA'}
                  </span>
                </div>
                <p className="text-xs leading-relaxed">
                  {isEligibleFIC
                    ? 'Tu programa califica para la asignación directa del Fondo de la Industria de la Construcción. Requiere asistencia mínima del 95% y rendimiento satisfactorio.'
                    : 'Aplica únicamente para especialidades del sector construcción y obras civiles sin patrocinio activo.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
