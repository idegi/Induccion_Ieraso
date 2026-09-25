import React, { useState } from 'react';
import { ARCHITECTURE_DOSSIER, DossierSection } from '../data/architectureDossier';
import { FileText, X, CheckCircle2, Code2, BookOpen, Layers, Database, ArrowRight, Printer } from 'lucide-react';

interface TechnicalDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalDossierModal: React.FC<TechnicalDossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSection, setSelectedSection] = useState<DossierSection>(ARCHITECTURE_DOSSIER[0]);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  if (!isOpen) return null;

  const categories = ['Todas', 'Diseño Instruccional', 'Arquitectura Técnica', 'Flujos de Integración'];

  const filteredSections = ARCHITECTURE_DOSSIER.filter(
    (sec) => activeCategory === 'Todas' || sec.category === activeCategory
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white max-w-5xl w-full h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Dossier Técnico & Pedagógico de Implementación
              </h3>
              <p className="text-xs text-slate-500">
                Guía completa para Equipos de Desarrollo de Software & Diseñadores Instruccionales SENA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 rounded-lg transition-colors cursor-pointer text-sm font-bold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Sidebar + Main Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Navigation (4 cols) */}
          <div className="md:col-span-4 border-r border-slate-200 bg-slate-50/50 p-4 space-y-3 overflow-y-auto">
            {/* Category Filter */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-emerald-700 text-white font-bold'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Section list */}
            <div className="space-y-1.5 pt-1">
              {filteredSections.map((sec) => {
                const isSelected = selectedSection.id === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSection(sec)}
                    className={`w-full p-3 rounded-xl text-left text-xs transition-all border cursor-pointer space-y-1 ${
                      isSelected
                        ? 'bg-white border-emerald-500 text-emerald-950 shadow-xs ring-1 ring-emerald-500'
                        : 'bg-transparent border-transparent hover:bg-white hover:border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span className="font-semibold text-emerald-800">{sec.category}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 leading-snug">{sec.title}</h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                      {sec.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Viewer (8 cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wide">
                {selectedSection.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {selectedSection.title}
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedSection.summary}
              </p>
            </div>

            {/* Markdown rendered with institutional clarity */}
            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4">
              {selectedSection.contentMarkdown.split('\n\n').map((block, idx) => {
                // Check if markdown table
                if (block.includes('| :--- |')) {
                  const rows = block.split('\n');
                  const headers = rows[0].split('|').filter(Boolean).map((h) => h.trim());
                  const bodyRows = rows.slice(2).map((r) => r.split('|').filter(Boolean).map((c) => c.trim()));

                  return (
                    <div key={idx} className="overflow-x-auto my-4 rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-slate-100/80 border-b border-slate-200 font-semibold text-slate-800">
                          <tr>
                            {headers.map((h, i) => (
                              <th key={i} className="p-3 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {bodyRows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 align-top leading-relaxed">
                                  {cell.startsWith('**') ? (
                                    <strong className="text-slate-900">{cell.replace(/\*\*/g, '')}</strong>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                // Check if code block
                if (block.startsWith('```')) {
                  const cleanedCode = block.replace(/```[a-z]*\n?/g, '');
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800">
                      <pre>{cleanedCode}</pre>
                    </div>
                  );
                }

                // Check if heading
                if (block.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-base font-bold text-slate-900 pt-2">
                      {block.replace('### ', '')}
                    </h3>
                  );
                }

                // Standard paragraph with inline bold support
                return (
                  <p key={idx} className="text-slate-700 leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Servicio Nacional de Aprendizaje (SENA) · Dirección de Formación Profesional</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Cerrar Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
