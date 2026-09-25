import React, { useState } from 'react';
import { ACADEMIC_PROGRAMS, ETAPAS_PRODUCTIVAS_ALTERNATIVAS } from '../data/programsData';
import { VIRTUAL_PLATFORMS } from '../data/platformsData';
import { AcademicProgram, VirtualPlatform, StudyLevel, EconomicSector } from '../types/induction';
import { Search, Filter, Clock, BookOpen, Laptop, ExternalLink, ChevronRight, CheckCircle2, ShieldAlert, Award, Globe } from 'lucide-react';

interface Phase3AcademicEcosystemProps {
  onAdvanceToNextPhase: () => void;
}

export const Phase3AcademicEcosystem: React.FC<Phase3AcademicEcosystemProps> = ({
  onAdvanceToNextPhase,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('Todos');
  const [selectedSector, setSelectedSector] = useState<string>('Todos');
  const [selectedModality, setSelectedModality] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram>(ACADEMIC_PROGRAMS[0]);
  const [activePlatformTab, setActivePlatformTab] = useState<'zajuna' | 'sofia-plus' | 'territorium'>('zajuna');
  const [subView, setSubView] = useState<'programas' | 'plataformas' | 'etapa_productiva'>('programas');

  const levels: (string | StudyLevel)[] = ['Todos', 'Tecnología', 'Técnica', 'Operario', 'Auxiliar'];
  const sectors: (string | EconomicSector)[] = [
    'Todos',
    'Tecnologías de la Información y Software',
    'Comercio y Servicios',
    'Industria y Construcción',
    'Agropecuario y Ambiental',
    'Salud, Cuidados y Deporte',
    'Economía Popular y Creativa',
  ];

  const filteredPrograms = ACADEMIC_PROGRAMS.filter((prog) => {
    const matchesLevel = selectedLevel === 'Todos' || prog.level === selectedLevel;
    const matchesSector = selectedSector === 'Todos' || prog.sector === selectedSector;
    const matchesModality = selectedModality === 'Todas' || prog.modality === selectedModality;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.code.includes(searchQuery) ||
      prog.keyCompetencies.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesLevel && matchesSector && matchesModality && matchesSearch;
  });

  const currentPlatform = VIRTUAL_PLATFORMS.find((p) => p.id === activePlatformTab) || VIRTUAL_PLATFORMS[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-600/30">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider uppercase bg-emerald-950/40 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/30">
              Etapa 3 · Ecosistema Curricular & Ambientes Virtuales
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Programas de Formación y Ecosistema Digital (Zajuna & Sofía Plus)
            </h2>
          </div>

          {/* Sub-view switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-lg border border-white/20 text-xs">
            <button
              onClick={() => setSubView('programas')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                subView === 'programas' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              Oferta & Duración
            </button>
            <button
              onClick={() => setSubView('plataformas')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                subView === 'plataformas' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              Plataformas (Zajuna)
            </button>
            <button
              onClick={() => setSubView('etapa_productiva')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                subView === 'etapa_productiva' ? 'bg-white text-emerald-900 font-bold shadow-xs' : 'text-white hover:bg-white/10'
              }`}
            >
              Etapas Productivas
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            Conoce en detalle la arquitectura de tu programa: cuántos meses comprende la Etapa Lectiva en ambientes de aprendizaje, cómo se cumplen los 6 meses de Etapa Productiva remunerada en empresas, y cómo operar fluidamente en las plataformas oficiales del SENA.
          </p>
        </div>
      </div>

      {/* Subview 1: Academic Programs & Filtering */}
      {subView === 'programas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Filter & Program Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Buscar programa por título, código (ej. 228106) o palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white shadow-xs"
              />
            </div>

            {/* Filter Pills */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3 text-xs">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="font-semibold text-slate-500 shrink-0">Nivel:</span>
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-colors cursor-pointer ${
                      selectedLevel === lvl ? 'bg-emerald-700 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="font-semibold text-slate-500 shrink-0">Sector:</span>
                {sectors.map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedSector(sec)}
                    className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-colors cursor-pointer ${
                      selectedSector === sec ? 'bg-emerald-700 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {sec.replace('Tecnologías de la Información y Software', 'TIC & Software')}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>Programas coincidentes: <strong>{filteredPrograms.length}</strong></span>
                <span>Selecciona uno para ver desglose de lectiva/productiva</span>
              </div>

              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
                {filteredPrograms.map((prog) => {
                  const isSelected = selectedProgram.id === prog.id;
                  return (
                    <div
                      key={prog.id}
                      onClick={() => setSelectedProgram(prog)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2.5 ${
                        isSelected
                          ? 'bg-emerald-50/70 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mb-1">
                            <span className="font-bold text-emerald-800">{prog.level}</span>
                            <span>·</span>
                            <span>Código {prog.code}</span>
                            <span>·</span>
                            <span className="text-slate-600">{prog.modality}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">
                            {prog.title}
                          </h4>
                        </div>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0">
                          {prog.durationTotalMonths} Meses
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1 border-t border-slate-100">
                        <span>📖 Lectiva: <strong>{prog.durationLectivaMonths}m</strong></span>
                        <span>🏭 Productiva: <strong>{prog.durationProductivaMonths}m</strong></span>
                        <span>💼 Demanda: <strong className="text-emerald-700">{prog.laborDemand}</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Program Deep-Dive (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Card Header */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-bold text-emerald-700 font-mono">Ficha Técnica Oficial</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-mono text-[11px]">
                    SENA Sofía Plus
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {selectedProgram.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sector: <strong>{selectedProgram.sector}</strong> · Modalidad {selectedProgram.modality}
                </p>
              </div>

              {/* Duration Breakdown Visualization */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Cronología de Formación</span>
                  <span className="font-mono text-emerald-800">{selectedProgram.durationTotalMonths} Meses Totales</span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full h-3 rounded-full bg-slate-200 flex overflow-hidden">
                  <div
                    style={{
                      width: `${(selectedProgram.durationLectivaMonths / selectedProgram.durationTotalMonths) * 100}%`,
                    }}
                    className="bg-emerald-600 h-full"
                    title={`Etapa Lectiva: ${selectedProgram.durationLectivaMonths} meses`}
                  />
                  <div
                    style={{
                      width: `${(selectedProgram.durationProductivaMonths / selectedProgram.durationTotalMonths) * 100}%`,
                    }}
                    className="bg-sky-600 h-full"
                    title={`Etapa Productiva: ${selectedProgram.durationProductivaMonths} meses`}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-emerald-600" />
                    <span>Etapa Lectiva: <strong>{selectedProgram.durationLectivaMonths} meses</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-sky-600" />
                    <span>Etapa Productiva: <strong>{selectedProgram.durationProductivaMonths} meses</strong></span>
                  </div>
                </div>
              </div>

              {/* Perfil de Egreso */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Perfil de Egreso Ocupacional
                </span>
                <p className="text-xs text-slate-600 leading-relaxed p-3 bg-slate-50 rounded-xl border border-slate-200">
                  {selectedProgram.graduationProfile}
                </p>
              </div>

              {/* Key Competencies */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Competencias Clave del Diseño Curricular
                </span>
                <ul className="space-y-2">
                  {selectedProgram.keyCompetencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Campus & Platform with direct access links */}
              <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <div><strong>Ambiente de Referencia:</strong> {selectedProgram.featuredSede}</div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-emerald-200/60">
                  <div>
                    <strong>Plataformas del programa:</strong>{' '}
                    <span>{selectedProgram.primaryPlatforms.join(' y ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://zajuna.sena.edu.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded font-bold text-[11px] inline-flex items-center gap-1 transition-colors shadow-2xs"
                      title="Abrir Zajuna LMS en nueva pestaña"
                    >
                      <span>Zajuna LMS</span>
                      <ExternalLink className="w-3 h-3 text-emerald-700" />
                    </a>
                    <a
                      href="https://betowa.sena.edu.co/oferta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded font-bold text-[11px] inline-flex items-center gap-1 transition-colors shadow-2xs"
                      title="Abrir Sofía Plus / Betowa Oferta en nueva pestaña"
                    >
                      <span>Sofía Plus (Betowa)</span>
                      <ExternalLink className="w-3 h-3 text-emerald-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSubView('plataformas')}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                Ver guía de acceso a Zajuna →
              </button>
              <button
                onClick={onAdvanceToNextPhase}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
              >
                Avanzar a: Bienestar & Ruta del Aprendiz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subview 2: Virtual Platforms (Zajuna, Sofía Plus, Territorium) */}
      {subView === 'plataformas' && (
        <div className="space-y-6">
          {/* Platform Tabs */}
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            {VIRTUAL_PLATFORMS.map((plat) => (
              <button
                key={plat.id}
                onClick={() => setActivePlatformTab(plat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  activePlatformTab === plat.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>{plat.name}</span>
                <span className="text-[10px] opacity-75 font-normal">({plat.status.split(' ')[0]})</span>
              </button>
            ))}
          </div>

          {/* Platform Detail Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {currentPlatform.officialTag}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {currentPlatform.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Estado: <strong className="text-slate-800">{currentPlatform.status}</strong>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 max-w-md">
                <span className="font-bold text-slate-900">Fórmula de credenciales:</span><br />
                {currentPlatform.credentialsFormula}
              </div>
            </div>

            {/* Description & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900">¿Para qué se utiliza en tu formación?</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentPlatform.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentPlatform.description}
                  </p>

                  {currentPlatform.accessUrl && (
                    <div className="pt-2">
                      <a
                        href={currentPlatform.accessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm hover:shadow-md group"
                      >
                        <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span>Abrir {currentPlatform.name} Oficial</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900">Funcionalidades Principales:</span>
                    <ul className="space-y-1.5">
                      {currentPlatform.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Login Simulator */}
              <div className="p-5 rounded-xl bg-slate-900 text-white space-y-4 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    Paso a Paso de Primer Ingreso
                  </span>
                  <span className="text-[10px] text-slate-400">Guía Oficial</span>
                </div>

                <div className="space-y-3">
                  {currentPlatform.firstLoginGuide.map((step) => (
                    <div key={step.step} className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">
                          {step.step}
                        </span>
                        <strong className="text-white">{step.title}</strong>
                      </div>
                      <p className="text-slate-300 pl-7 text-[11px] leading-relaxed">
                        {step.action}
                      </p>
                      <p className="text-amber-300 pl-7 text-[10px] italic">
                        ⚠️ Precaución: {step.caution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subview 3: Etapas Productivas Alternativas */}
      {subView === 'etapa_productiva' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              Etapa Productiva (6 Meses Obligatorios de Práctica)
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Las 5 Alternativas Legales para Certificar tu Etapa Productiva
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Todos los programas titulados exigen el cumplimiento de la etapa productiva. Puedes optar por cualquiera de estas vías autorizadas en el Reglamento del Aprendiz:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ETAPAS_PRODUCTIVAS_ALTERNATIVAS.map((alt, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {alt.badge}
                    </span>
                    <span className="text-[10px] text-slate-500">Opción 0{i + 1}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {alt.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {alt.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                  Marco Legal: {alt.legalBasis}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
