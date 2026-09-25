import React, { useState } from 'react';
import { REGIONALES_SENA } from '../data/regionalesData';
import { RegionalSENA } from '../types/induction';
import { 
  Search, MapPin, Building2, Phone, Mail, Award, Volume2, ShieldCheck, 
  CheckCircle2, Flag, Compass, ChevronRight, X, Sparkles, Users, GraduationCap, ExternalLink 
} from 'lucide-react';

interface Phase2RegionalMapProps {
  onAdvanceToNextPhase: () => void;
  onSelectRegional?: (reg: RegionalSENA) => void;
}

export const Phase2RegionalMap: React.FC<Phase2RegionalMapProps> = ({
  onAdvanceToNextPhase,
  onSelectRegional,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegional, setSelectedRegional] = useState<RegionalSENA>(REGIONALES_SENA[1]); // Default to Bogotá or Antioquia
  const [isPlayingWelcome, setIsPlayingWelcome] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'mapa' | 'simbolos'>('mapa');
  const [showRegionalModal, setShowRegionalModal] = useState<boolean>(false);

  // Filter regionales
  const filteredRegionales = REGIONALES_SENA.filter((reg) => {
    const matchesZone = selectedZone === 'Todas' || reg.zone === selectedZone;
    const matchesSearch =
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.centers.some((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesZone && matchesSearch;
  });

  const handleSelectRegional = (reg: RegionalSENA) => {
    setSelectedRegional(reg);
    setShowRegionalModal(true); // Open modal with specified characteristics immediately
    if (onSelectRegional) onSelectRegional(reg);
  };

  const zones = ['Todas', 'Andina', 'Caribe', 'Pacífica', 'Orinoquía', 'Amazonía', 'Insular'];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-600/30">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider uppercase bg-emerald-950/40 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/30">
              Etapa 2 · Geolocalización & Pertenencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Geolocalización Institucional: Las 33 Regionales del SENA
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('mapa')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'mapa'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Mapa & Centros de Formación
            </button>
            <button
              onClick={() => setActiveTab('simbolos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'simbolos'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Símbolos Patrios & Valores SENA
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            El SENA hace presencia en el 100% de la geografía nacional a través de 33 Direcciones Regionales y 118 Centros de Formación Profesional Integral. Esta infraestructura pública conecta desde los puertos marítimos y valles interandinos hasta las selvas y sabanas de Colombia, garantizando equidad formativa y pertinencia productiva.
          </p>
        </div>
      </div>

      {activeTab === 'mapa' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Map & Region Selector (7 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            {/* Search & Filters */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Buscar por Regional, Ciudad, Especialidad (ej. Software, Cacao, Mecatrónica)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              {/* Zone Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {zones.map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      selectedZone === zone
                        ? 'bg-emerald-700 text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Representation of Colombia Map */}
            <div className="relative bg-slate-900 rounded-2xl p-4 sm:p-5 overflow-hidden border-2 border-emerald-900/60 shadow-inner flex flex-col items-center">
              <div className="w-full flex flex-wrap items-center justify-between text-xs text-slate-300 mb-3 px-1 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">Toca cualquier departamento para seleccionarlo</span>
                </div>
                <span className="font-mono text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50">
                  {filteredRegionales.length} Regionales disponibles
                </span>
              </div>

              {/* Map of Colombia with Image & Interactive Department Hotspots */}
              <div className="relative w-full max-w-[540px] aspect-[4/5] rounded-xl overflow-hidden border-2 border-emerald-800/80 bg-slate-950 shadow-2xl group">
                {/* Detailed Colombia Map & Flag Background Image */}
                <img
                  src="https://thumbs.dreamstime.com/b/colombia-ejemplo-detallado-del-vector-mapa-y-de-la-bandera-108064561.jpg"
                  alt="Mapa detallado de Colombia y sus departamentos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay for optimal pin contrast */}
                <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />

                {/* Interactive Department Touchpoints / Hotspots */}
                <div className="absolute inset-0">
                  {REGIONALES_SENA.map((reg) => {
                    const isSelected = selectedRegional.id === reg.id;
                    const isInFilter = filteredRegionales.some((f) => f.id === reg.id);
                    if (!isInFilter) return null;

                    return (
                      <button
                        key={reg.id}
                        type="button"
                        onClick={() => handleSelectRegional(reg)}
                        style={{
                          left: `${reg.coordinates.x}%`,
                          top: `${reg.coordinates.y}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 flex flex-col items-center group/pin ${
                          isSelected ? 'z-30 scale-125' : 'z-10 hover:scale-115 hover:z-20'
                        }`}
                        title={`${reg.name} · ${reg.centersCount} Centros de Formación · Especialidad: ${reg.representativeSpecialty}`}
                      >
                        {/* Selected Radar Ring in Dark Green */}
                        {isSelected && (
                          <span className="absolute -inset-2 rounded-full bg-[#064e3b] opacity-60 animate-ping pointer-events-none" />
                        )}

                        {/* Pin Head */}
                        <div
                          className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full border shadow-lg transition-colors ${
                            isSelected
                              ? 'bg-[#064e3b] text-white border-emerald-400 ring-2 ring-emerald-500 shadow-emerald-950'
                              : 'bg-white/90 text-slate-800 border-slate-300 hover:bg-[#064e3b] hover:text-white hover:border-emerald-400 backdrop-blur-xs'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-emerald-300 animate-pulse' : 'bg-emerald-600'
                            }`}
                          />
                          <span className="text-[10px] font-bold whitespace-nowrap leading-none">
                            {reg.capital.split(' ')[0]}
                          </span>
                        </div>

                        {/* Tooltip on hover/select */}
                        <div
                          className={`pointer-events-none text-[9px] font-semibold px-2 py-0.5 rounded-md shadow-md mt-0.5 transition-opacity whitespace-nowrap flex items-center gap-1 ${
                            isSelected
                              ? 'bg-[#064e3b] text-emerald-200 border border-emerald-600 opacity-100'
                              : 'bg-slate-900/90 text-white opacity-0 group-hover/pin:opacity-100'
                          }`}
                        >
                          <span>{reg.name.replace('Regional ', '')}</span>
                          <span className="text-emerald-300 font-mono font-bold">({reg.centersCount} centros)</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Map Legend Overlay */}
                <div className="absolute bottom-2 left-2 right-2 sm:right-auto bg-[#064e3b]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-600/50 text-[11px] text-emerald-100 shadow-xl space-y-1">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Mapa Oficial de Colombia · SENA</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#064e3b] border border-emerald-400 ring-2 ring-emerald-400" />
                      <span>Activo (Verde Oscuro)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white border border-slate-300" />
                      <span>Sede Departamental</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Regional Cards by Department - Turns Verde Oscuro upon Selection */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Departamentos de Colombia (33 Regionales):
                </span>
                <span className="text-[11px] text-slate-500">
                  Toca un departamento para ver sus centros y especialidad
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1">
                {filteredRegionales.map((reg) => {
                  const isSelected = selectedRegional.id === reg.id;
                  return (
                    <button
                      key={reg.id}
                      onClick={() => handleSelectRegional(reg)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all duration-200 border cursor-pointer flex flex-col justify-between gap-1.5 ${
                        isSelected
                          ? 'bg-[#064e3b] text-white border-emerald-400 shadow-md ring-2 ring-emerald-600 font-semibold'
                          : 'bg-white hover:bg-emerald-50/50 border-slate-200 text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold truncate">{reg.name.replace('Regional ', '')}</span>
                        {isSelected ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                        ) : (
                          <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded">
                            {reg.centersCount} centros
                          </span>
                        )}
                      </div>

                      {isSelected && (
                        <div className="text-[10px] text-emerald-300 font-mono font-semibold">
                          {reg.centersCount} Centros de Formación
                        </div>
                      )}

                      <div
                        className={`text-[10px] line-clamp-1 border-t pt-1 ${
                          isSelected ? 'border-emerald-700 text-emerald-100' : 'border-slate-100 text-slate-600'
                        }`}
                        title={reg.representativeSpecialty}
                      >
                        🎯 {reg.representativeSpecialty}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* In-Line Highlight of Selected Regional Characteristics */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-500/60 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#064e3b] animate-ping" />
                  <span className="text-xs font-bold text-slate-900">
                    Regional Activa: <strong className="text-emerald-900">{selectedRegional.name}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRegionalModal(true)}
                  className="px-3 py-1 bg-[#064e3b] hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                >
                  <span>Ver Ficha Completa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Especificación de Centros y Especialidad Representativa */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Sede Principal</span>
                  <strong className="text-slate-900 text-xs truncate block">{selectedRegional.capital}</strong>
                </div>
                <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 block uppercase font-bold">Total Centros</span>
                  <strong className="text-emerald-950 text-xs font-black block">{selectedRegional.centersCount} Sede(s)</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Aprendices</span>
                  <strong className="text-slate-900 text-xs block">{selectedRegional.activeApprentices.toLocaleString('es-CO')}</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Zona</span>
                  <strong className="text-emerald-800 text-xs block">{selectedRegional.zone}</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-100/60 border border-emerald-300 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                  <GraduationCap className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Especialidad en la Formación Más Representativa:</span>
                </div>
                <p className="text-slate-900 font-extrabold text-xs pl-5">
                  {selectedRegional.representativeSpecialty}
                </p>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-100">
                <strong className="text-slate-800">Vocación Regional: </strong>{selectedRegional.description}
              </p>
            </div>
          </div>

          {/* Right Column: Selected Regional Detailed Dossier (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-emerald-900/40 shadow-sm space-y-5 flex flex-col justify-between overflow-hidden">
            {/* Dark Green Dossier Header */}
            <div className="bg-[#064e3b] text-white p-5 sm:p-6 space-y-3 border-b-2 border-emerald-500/40">
              <div className="flex items-center justify-between text-xs text-emerald-200">
                <span className="font-mono font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-600">
                  {selectedRegional.code}
                </span>
                <span className="bg-emerald-900/90 text-emerald-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-700">
                  Zona {selectedRegional.zone}
                </span>
              </div>
              
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">
                  Características de la Regional
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mt-0.5">
                  {selectedRegional.name}
                </h3>
                <p className="text-xs text-emerald-100 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>Sede Principal: <strong className="text-white">{selectedRegional.capital}</strong></span>
                </p>
              </div>

              {/* Key Quick Stats Grid in Header */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="bg-emerald-950/60 p-2 rounded-lg border border-emerald-700/50">
                  <div className="text-base font-black text-white">{selectedRegional.centersCount}</div>
                  <div className="text-[10px] text-emerald-200 uppercase font-medium">Centros de Formación</div>
                </div>
                <div className="bg-emerald-950/60 p-2 rounded-lg border border-emerald-700/50">
                  <div className="text-base font-black text-white">
                    {selectedRegional.activeApprentices.toLocaleString('es-CO')}
                  </div>
                  <div className="text-[10px] text-emerald-200 uppercase font-medium">Aprendices Activos</div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-5 flex-1">
              {/* Especialidad de Formación Más Representativa */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-2 border-emerald-400 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-emerald-700" />
                    Especialidad de Formación Más Representativa
                  </span>
                  <span className="bg-[#064e3b] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    {selectedRegional.centersCount} Centros
                  </span>
                </div>
                <p className="text-xs font-black text-slate-900 leading-snug">
                  {selectedRegional.representativeSpecialty}
                </p>
              </div>

              {/* Regional Narrative / Vocación Productiva */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  Vocación Productiva y Enfoque Formativo
                </span>
                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-slate-700 leading-relaxed">
                  {selectedRegional.description}
                </div>
              </div>

              {/* Institutional Welcome Voice Narrative */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#064e3b] via-emerald-900 to-slate-900 text-white space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-emerald-300" />
                    <span className="text-xs font-bold text-emerald-200">Mensaje de Bienvenida Institucional</span>
                  </div>
                  <button
                    onClick={() => setIsPlayingWelcome(!isPlayingWelcome)}
                    className="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-emerald-50 text-[#064e3b] rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    {isPlayingWelcome ? 'Pausar Mensaje' : 'Escuchar Mensaje'}
                  </button>
                </div>

                <p className="text-xs text-slate-200 italic leading-snug">
                  "Aprendiz SENA: Esta regional es tu centro de crecimiento. En sus talleres y laboratorios se forja la fuerza que dinamiza el progreso de nuestra tierra. ¡Bienvenido a ser protagonista del desarrollo nacional!"
                </p>
                {isPlayingWelcome && (
                  <div className="flex items-center gap-2 text-[10px] text-emerald-300 font-mono">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Voz activa · Director(a): {selectedRegional.regionalDirector}</span>
                  </div>
                )}
              </div>

              {/* Centers List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                    Centros de Formación Integral ({selectedRegional.centers.length})
                  </span>
                  <span className="text-[11px] text-slate-500">Especialidades activas</span>
                </div>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedRegional.centers.map((center) => (
                    <div
                      key={center.id}
                      className="p-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xs transition-all space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">
                            {center.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                            Código {center.code} · {center.city}
                          </p>
                        </div>
                        {center.technoPark && (
                          <span className="bg-[#064e3b] text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                            TecnoParque
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-slate-600">
                        <strong className="text-slate-800">Especialidades:</strong>{' '}
                        {center.specialties.join(', ')}
                      </div>

                      <div className="text-[11px] text-slate-500 flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                        <span>📍 {center.address}</span>
                        <span>✉️ {center.contactEmail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact & Authority Information */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-900">Director(a) Regional:</span>
                  <span className="text-slate-800 font-medium">{selectedRegional.regionalDirector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-800">PBX Oficial:</span>
                  <span className="font-mono text-slate-700">{selectedRegional.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-800">Correo Institucional:</span>
                  <span className="font-mono text-emerald-800 font-medium">{selectedRegional.email}</span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-slate-200/80">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Dirección Sede Principal: </span>
                    <span className="text-slate-600">{selectedRegional.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0">
              <button
                onClick={onAdvanceToNextPhase}
                className="w-full py-2.5 bg-[#064e3b] hover:bg-emerald-900 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Avanzar a: Ecosistema de Formación (Programas & LMS)</span>
                <ChevronRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Symbols & Values Tab */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Símbolos Institucionales, Himno y Código de Integridad SENA
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Elementos emblemáticos que refuerzan el sentido de pertenencia y compromiso ético de cada aprendiz con la patria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Escudo */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
                ⚙️
              </div>
              <h4 className="text-base font-bold text-slate-900">El Escudo Oficial</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Refleja los 3 sectores económicos fundacionales del país:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                <li><strong className="text-slate-900">El Piñón:</strong> Representa la industria, la tecnología y el sector metalmecánico.</li>
                <li><strong className="text-slate-900">El Caduceo:</strong> Simboliza el comercio, los servicios, la gestión y la logística.</li>
                <li><strong className="text-slate-900">El Café:</strong> Hace homenaje al agro colombiano, la tierra fértil y el campesinado.</li>
              </ul>
            </div>

            {/* Bandera */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
                🏁
              </div>
              <h4 className="text-base font-bold text-slate-900">La Bandera y el Lema</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fondo blanco con el escudo en el centro y franjas verdes que expresan:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                <li><strong className="text-slate-900">Blanco:</strong> La paz, la transparencia, la honestidad y la tranquilidad formativa.</li>
                <li><strong className="text-slate-900">Verde:</strong> La esperanza de Colombia, la biodiversidad y la juventud trabajadora.</li>
                <li><strong className="text-slate-900">Lema:</strong> Formación profesional integral para el desarrollo humano y la paz.</li>
              </ul>
            </div>

            {/* Himno */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
                🎵
              </div>
              <h4 className="text-base font-bold text-slate-900">El Himno del SENA</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Letra de Luis Alfredo Osorio y música del maestro Daniel Marles.
              </p>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 italic space-y-2 font-serif">
                <p><strong>Coro:</strong><br />
                "Estudiantes del SENA, adelante,<br />
                por Colombia luchad con amor,<br />
                con el ánimo noble y constante,<br />
                sembraremos la paz y el honor."</p>
              </div>
            </div>
          </div>

          {/* Código de Integridad */}
          <div className="p-6 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-4">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Los 7 Valores Éticos del Aprendiz SENA</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { name: 'Honestidad', desc: 'Actuar siempre con la verdad' },
                { name: 'Respeto', desc: 'Valorar la dignidad de todos' },
                { name: 'Compromiso', desc: 'Cumplir con las metas' },
                { name: 'Diligencia', desc: 'Esmero y excelencia en el hacer' },
                { name: 'Justicia', desc: 'Equidad en las decisiones' },
                { name: 'Solidaridad', desc: 'Apoyo mutuo ante la dificultad' },
                { name: 'Lealtad', desc: 'Fidelidad a los principios' },
              ].map((val) => (
                <div key={val.name} className="p-3 bg-white rounded-lg border border-emerald-200 text-center space-y-1">
                  <div className="text-xs font-bold text-emerald-900">{val.name}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Interactivo de Características Principales de la Regional */}
      {showRegionalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-emerald-700">
            {/* Modal Header en Verde Oscuro */}
            <div className="bg-[#064e3b] text-white p-5 sm:p-6 flex items-start justify-between border-b border-emerald-600 gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs bg-emerald-950 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-600">
                    {selectedRegional.code}
                  </span>
                  <span className="bg-emerald-900/90 text-emerald-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-700">
                    Zona {selectedRegional.zone}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {selectedRegional.name}
                </h3>
                <p className="text-xs text-emerald-100 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Sede Principal: <strong className="text-white">{selectedRegional.capital}</strong></span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowRegionalModal(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 text-sm font-bold"
                title="Cerrar ventana"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Content: Características Principales Especificadas */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
              {/* Highlight Card: Centros y Especialidad Representativa */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#064e3b] via-emerald-900 to-[#064e3b] text-white shadow-md space-y-2 border-2 border-emerald-500/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Especialidad en la Formación Más Representativa
                    </span>
                  </div>
                  <span className="bg-white text-[#064e3b] text-xs font-mono font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    {selectedRegional.centersCount} Centros de Formación
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                  {selectedRegional.representativeSpecialty}
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Línea pedagógica y técnica prioritaria que impulsa la competitividad y la inserción laboral de los aprendices en {selectedRegional.name}.
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold uppercase block">Centros de Formación</span>
                  <strong className="text-lg font-black text-emerald-950 block">{selectedRegional.centersCount}</strong>
                  <span className="text-[10px] text-slate-500">Sedes integrales</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold uppercase block">Aprendices Activos</span>
                  <strong className="text-lg font-black text-emerald-950 block">{selectedRegional.activeApprentices.toLocaleString('es-CO')}</strong>
                  <span className="text-[10px] text-slate-500">Matriculados</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-emerald-800 font-bold uppercase block">Ubicación</span>
                  <strong className="text-base font-black text-emerald-950 block truncate">{selectedRegional.capital}</strong>
                  <span className="text-[10px] text-slate-500">Región {selectedRegional.zone}</span>
                </div>
              </div>

              {/* Vocación Productiva */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  Vocación Productiva y Enfoque Estratégico
                </span>
                <p className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  {selectedRegional.description}
                </p>
              </div>

              {/* Centros de Formación y Especialidades */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                  Centros de Formación Integral y Especialidades ({selectedRegional.centers.length})
                </span>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {selectedRegional.centers.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-2xs">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-slate-900 text-xs">{c.name}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">Código {c.code} · {c.city}</span>
                        </div>
                        {c.technoPark && (
                          <span className="bg-[#064e3b] text-white text-[9px] font-bold px-2 py-0.5 rounded shrink-0">
                            TecnoParque
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-600">
                        <strong className="text-slate-800">Especialidades: </strong>
                        {c.specialties.join(', ')}
                      </div>

                      <div className="text-[10px] text-slate-500 flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                        <span>📍 {c.address}</span>
                        <span>✉️ {c.contactEmail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Autoridad y Datos de Contacto Oficial */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-900">Director(a) Regional:</span>
                  <span className="text-slate-800 font-medium">{selectedRegional.regionalDirector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-800">PBX Oficial:</span>
                  <span className="font-mono text-slate-700">{selectedRegional.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-800">Correo Institucional:</span>
                  <span className="font-mono text-emerald-800 font-medium">{selectedRegional.email}</span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-slate-200/80">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Sede Principal: </span>
                    <span className="text-slate-600">{selectedRegional.address}</span>
                  </div>
                </div>
              </div>

              {/* Bienestar al Aprendiz en esta Regional */}
              {selectedRegional.wellnessProgramsAvailable && selectedRegional.wellnessProgramsAvailable.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    Beneficios y Programas de Bienestar al Aprendiz
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                    {selectedRegional.wellnessProgramsAvailable.map((prog, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsPlayingWelcome(!isPlayingWelcome)}
                className="px-3.5 py-2 bg-white text-emerald-900 border border-slate-300 rounded-xl text-xs font-bold transition-colors hover:bg-slate-100 cursor-pointer flex items-center gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isPlayingWelcome ? 'Pausar Relato' : 'Escuchar Bienvenida'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowRegionalModal(false)}
                className="px-5 py-2 bg-[#064e3b] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Entendido / Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
