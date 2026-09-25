import React, { useState } from 'react';
import { CULTURE_QUIZ_QUESTIONS, REMEDIATION_COURSES, ACUERDO_009_DATA } from '../data/assessmentData';
import { LearnerProfile, RemediationCourse } from '../types/induction';
import { 
  Award, CheckCircle2, AlertTriangle, RefreshCw, Sparkles, BookOpen, 
  ShieldCheck, Printer, FileText, Search, Copy, Check, ChevronDown, 
  ChevronUp, ChevronRight, Scale, HelpCircle, ExternalLink, Download,
  Frown, Smile, PartyPopper, Volume2, VolumeX, RotateCcw, ThumbsUp
} from 'lucide-react';

// Web Audio API Sound Synthesizers for Interactive Effects
function playApplauseAndCheersSound() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // 1. Victory Fanfare Arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0.18, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.38);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.4);
    });

    // 2. Synthesized Applause & Cheering Noise Bursts (Handclapping simulation)
    for (let i = 0; i < 26; i++) {
      const clapTime = now + 0.28 + Math.random() * 1.3;
      const bufferSize = Math.floor(ctx.sampleRate * 0.04);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.25));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100 + Math.random() * 900, clapTime);
      filter.Q.setValueAtTime(1.9, clapTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12 + Math.random() * 0.08, clapTime);
      gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.045);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(clapTime);
    }
  } catch (err) {
    console.debug('Audio context not available', err);
  }
}

function playSadSound() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // Gentle playful descending sad minor notes: D4 -> C#4 -> C4 -> B3
    const notes = [293.66, 277.18, 261.63, 246.94];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.22);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.94, now + idx * 0.22 + 0.22);
      gain.gain.setValueAtTime(0.14, now + idx * 0.22);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.22 + 0.24);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.22);
      osc.stop(now + idx * 0.22 + 0.25);
    });
  } catch (err) {
    console.debug('Audio context not available', err);
  }
}

interface Phase5AssessmentRemediationProps {
  learnerProfile: LearnerProfile | null;
  onCompleteInduction: () => void;
}

interface ItemAcuerdo {
  numeral: number;
  titulo?: string;
  texto: string;
}

interface ArticuloAcuerdo {
  articulo: string;
  nombre: string;
  totalItems?: number;
  contenido?: string;
  items?: ItemAcuerdo[];
}

interface CapituloAcuerdo {
  numero: string;
  titulo: string;
  articulos: ArticuloAcuerdo[];
}

export const Phase5AssessmentRemediation: React.FC<Phase5AssessmentRemediationProps> = ({
  learnerProfile,
  onCompleteInduction,
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'quiz' | 'normativa'>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [enrolledRemediations, setEnrolledRemediations] = useState<string[]>([]);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [showAcuerdoModal, setShowAcuerdoModal] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});

  // Acuerdo 009 Consultation state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('Todos');
  const [showRawJson, setShowRawJson] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({
    'Artículo 5º': true,
    'Artículo 8º': true,
    'Artículo 9º': true,
  });

  const toggleArticle = (artName: string) => {
    setExpandedArticles((prev) => ({ ...prev, [artName]: !prev[artName] }));
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(ACUERDO_009_DATA, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ACUERDO_009_DATA, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Acuerdo_009_2024_Reglamento_SENA.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const currentQuestion = CULTURE_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (questionId: number, optionId: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setCheckedQuestions((prev) => ({ ...prev, [questionId]: true }));

    const question = CULTURE_QUIZ_QUESTIONS.find((q) => q.id === questionId);
    const chosenOption = question?.options.find((o) => o.id === optionId);

    if (chosenOption?.isCorrect) {
      if (soundEnabled) playApplauseAndCheersSound();
    } else {
      if (soundEnabled) playSadSound();
    }
  };

  const handleRetryQuestion = (questionId: number) => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
    setCheckedQuestions((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < CULTURE_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
      onCompleteInduction();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Calculate score (10 questions)
  const correctCount = CULTURE_QUIZ_QUESTIONS.reduce((count, q) => {
    const chosenOptionId = userAnswers[q.id];
    const correctOption = q.options.find((o) => o.isCorrect);
    return chosenOptionId === correctOption?.id ? count + 1 : count;
  }, 0);

  const percentageScore = Math.round((correctCount / CULTURE_QUIZ_QUESTIONS.length) * 100);
  const isApproved = percentageScore >= 80;

  // Determine needed remediations based on diagnostic + quiz
  const neededRemediations: RemediationCourse[] = [];

  // Rule 1: Digital skills < 3.5
  if (!learnerProfile || learnerProfile.digitalAverage < 3.5) {
    neededRemediations.push(REMEDIATION_COURSES[0]); // Alfabetización digital
  }

  // Rule 2: Non-ideal study habit or kinesthetic/divergent profile
  if (learnerProfile && (learnerProfile.dominantStyle === 'Kinestésico' || learnerProfile.dominantStyle === 'Auditivo')) {
    neededRemediations.push(REMEDIATION_COURSES[1]); // Estrategias de estudio
  }

  // Rule 3: Quiz score < 80% (ethics/regulations gap)
  if (quizFinished && percentageScore < 80) {
    neededRemediations.push(REMEDIATION_COURSES[3]); // Apropiación normativa Acuerdo 009
  }

  const handleEnrollCourse = (courseId: string) => {
    if (!enrolledRemediations.includes(courseId)) {
      setEnrolledRemediations((prev) => [...prev, courseId]);
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setCheckedQuestions({});
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  // Filtered chapters & articles for consultation
  const allCapitulos = ACUERDO_009_DATA.capitulos as unknown as CapituloAcuerdo[];
  const filteredCapitulos = allCapitulos.filter((cap) => {
    if (selectedChapter !== 'Todos' && cap.numero !== selectedChapter) return false;
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const matchesCapTitle = cap.titulo.toLowerCase().includes(term);
    const matchesArticles = cap.articulos.some(
      (a) =>
        a.articulo.toLowerCase().includes(term) ||
        a.nombre.toLowerCase().includes(term) ||
        (a.contenido && a.contenido.toLowerCase().includes(term)) ||
        (a.items && a.items.some((it) => it.texto.toLowerCase().includes(term) || (it.titulo && it.titulo.toLowerCase().includes(term))))
    );
    return matchesCapTitle || matchesArticles;
  });

  return (
    <div className="space-y-8">
      {/* Header institucional en Verde y Blanco */}
      <div className="bg-white rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-600/30">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider uppercase bg-emerald-950/40 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/30">
              Etapa 5 · Evaluación Formativa & Normativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Evaluación de Derechos & Deberes y Consulta del Acuerdo 009 de 2024
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Toggle between Quiz and Reglamento */}
            <div className="flex items-center bg-white/10 p-1 rounded-xl border border-white/20 text-xs">
              <button
                type="button"
                onClick={() => setActiveMainTab('quiz')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeMainTab === 'quiz'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Prueba (10 Preguntas)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMainTab('normativa')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeMainTab === 'normativa'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Consultar Acuerdo 009 (JSON)</span>
              </button>
            </div>

            {quizFinished && isApproved && (
              <button
                onClick={() => setShowCertificate(true)}
                className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs rounded-xl transition-colors shadow-xs flex items-center gap-2 cursor-pointer border border-white/40"
              >
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Ver Constancia</span>
              </button>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-7 bg-white">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            Esta fase integra el <strong>Acuerdo No. 0009 de 2024</strong> (Reglamento del Aprendiz SENA) digitalizado en formato JSON estructurado como herramienta interactiva de consulta permanente, y una prueba evaluativa de <strong>10 dilemas contextuales</strong> enfocados en los <strong>24 Derechos</strong>, <strong>24 Deberes</strong> y <strong>14 Prohibiciones</strong> de la comunidad formativa.
          </p>
        </div>
      </div>

      {/* Main Tab 1: Quiz (10 Preguntas) */}
      {activeMainTab === 'quiz' && (
        <>
          {!quizFinished ? (
            /* Gamified Quiz Active View */
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-600/40 shadow-sm space-y-6 max-w-3xl mx-auto relative">
              {/* Top Banner with Consultation Shortcut & Sound Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md border border-emerald-200">
                    Pregunta {currentQuestionIndex + 1} de {CULTURE_QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    (Mínimo aprobatorio: 8 de 10 · 80%)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Sound Effects Toggle */}
                  <button
                    type="button"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                      soundEnabled
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                        : 'bg-slate-100 text-slate-500 border-slate-300 hover:bg-slate-200'
                    }`}
                    title={soundEnabled ? 'Silenciar aplausos y vítores' : 'Activar efectos de sonido'}
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                    ) : (
                      <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                    )}
                    <span className="hidden sm:inline">{soundEnabled ? 'Aplausos/Vítores On' : 'Silenciado'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowAcuerdoModal(true)}
                    className="px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-300 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    title="Abrir reglamento en panel flotante"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Consultar Acuerdo 009</span>
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / CULTURE_QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Scenario prompt */}
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold uppercase tracking-wider text-[10px]">
                  <Scale className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Caso Práctico en Formación</span>
                </div>
                <p className="italic text-slate-800">{currentQuestion.scenario}</p>
              </div>

              {/* Main Question */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Interactive Recognition Effect Banner: Aplausos y Vítores vs. Cara Triste */}
              {checkedQuestions[currentQuestion.id] && (() => {
                const chosenId = userAnswers[currentQuestion.id];
                const correctOpt = currentQuestion.options.find((o) => o.isCorrect);
                const isPositive = chosenId === correctOpt?.id;

                if (isPositive) {
                  return (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-xl space-y-2 border-2 border-emerald-300 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full bg-yellow-400 text-emerald-950 flex items-center justify-center shadow-md animate-bounce">
                            <PartyPopper className="w-5 h-5 text-emerald-950" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-200 font-bold block">
                              ¡Reconocimiento de Excelencia!
                            </span>
                            <h4 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5 text-white">
                              <span>👏 ¡APLAUSOS Y VÍTORES! ¡RESPUESTA CORRECTA! 🎉</span>
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-2xl select-none animate-pulse">
                          <span>🥳</span><span>👏</span><span>✨</span><span>🏆</span>
                        </div>
                      </div>
                      <p className="text-xs text-emerald-50 leading-relaxed pl-1 sm:pl-12 font-medium">
                        ¡Felicitaciones! Has identificado con precisión la respuesta correcta respaldada por el <strong>Acuerdo 009 de 2024</strong>. ¡Continúa así!
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 text-white shadow-xl space-y-2 border-2 border-rose-300 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full bg-white text-rose-700 flex items-center justify-center shadow-md">
                            <Frown className="w-6 h-6 text-rose-700 animate-pulse" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-rose-200 font-bold block">
                              Orientación Pedagógica
                            </span>
                            <h4 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5 text-white">
                              <span>😢 RESPUESTA INCORRECTA 😞</span>
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-2xl select-none">
                          <span>😢</span><span>😞</span><span>💔</span>
                        </div>
                      </div>
                      <p className="text-xs text-rose-100 leading-relaxed pl-1 sm:pl-12 font-medium">
                        ¡Ánimo! El error en inducción es una valiosa oportunidad formativa. Revisa abajo la <strong>opción correcta resaltada en verde</strong> y analiza la fundamentación jurídica para aprender de este intento.
                      </p>
                    </div>
                  );
                }
              })()}

              {/* Options with Instant Feedback & Visual Highlights */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isChecked = !!checkedQuestions[currentQuestion.id];
                  const isSelected = userAnswers[currentQuestion.id] === opt.id;
                  const isCorrect = opt.isCorrect;

                  let buttonStyle = 'bg-white border-slate-200 hover:border-emerald-300 text-slate-700 hover:bg-slate-50';
                  let badge = null;

                  if (isChecked) {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-100/90 border-2 border-emerald-600 ring-2 ring-emerald-500/50 text-emerald-950 font-bold shadow-xs';
                      badge = (
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-900 bg-white/80 px-2 py-0.5 rounded border border-emerald-300 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{isSelected ? '👏 ¡Tu Respuesta Acertada!' : '✓ Respuesta Correcta Oficial'}</span>
                        </div>
                      );
                    } else if (isSelected) {
                      buttonStyle = 'bg-rose-100/90 border-2 border-rose-500 ring-2 ring-rose-400 text-rose-950 font-medium shadow-xs';
                      badge = (
                        <div className="flex items-center gap-1 text-[11px] font-bold text-rose-900 bg-white/80 px-2 py-0.5 rounded border border-rose-300 shrink-0">
                          <Frown className="w-3.5 h-3.5 text-rose-600" />
                          <span>Tu Elección 😢 (Incorrecta)</span>
                        </div>
                      );
                    } else {
                      buttonStyle = 'opacity-40 bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed';
                    }
                  } else if (isSelected) {
                    buttonStyle = 'bg-emerald-50/90 border-emerald-600 text-emerald-950 font-medium ring-2 ring-emerald-500/50 shadow-xs';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all border cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between gap-3 ${buttonStyle}`}
                    >
                      <div className="flex items-start gap-3.5 flex-1">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                            isChecked
                              ? isCorrect
                                ? 'border-emerald-700 bg-emerald-700 text-white'
                                : isSelected
                                ? 'border-rose-600 bg-rose-600 text-white'
                                : 'border-slate-300 text-slate-400 bg-white'
                              : isSelected
                              ? 'border-emerald-700 bg-emerald-700 text-white'
                              : 'border-slate-300 text-slate-500 bg-white'
                          }`}
                        >
                          {isChecked ? (
                            isCorrect ? '✓' : isSelected ? '✕' : '•'
                          ) : (
                            opt.id.split('-')[1]?.replace('opt', '').replace('1', '').replace('2', '').replace('3', '').replace('4', '').replace('5', '').replace('6', '').replace('7', '').replace('8', '').replace('9', '').replace('0', '').toUpperCase() || '•'
                          )}
                        </div>
                        <span className="leading-relaxed">{opt.text}</span>
                      </div>

                      {badge && <div className="self-end sm:self-center mt-1 sm:mt-0">{badge}</div>}
                    </button>
                  );
                })}
              </div>

              {/* Dedicated Pedagogical & Normative Feedback Box when Answered */}
              {checkedQuestions[currentQuestion.id] && (() => {
                const correctOpt = currentQuestion.options.find((o) => o.isCorrect);
                const isPositive = userAnswers[currentQuestion.id] === correctOpt?.id;

                return (
                  <div className={`p-4 rounded-xl border-2 space-y-2 text-xs animate-in fade-in duration-300 ${
                    isPositive ? 'bg-emerald-50/80 border-emerald-300' : 'bg-amber-50/80 border-amber-300'
                  }`}>
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5 text-xs text-slate-900">
                        <BookOpen className={`w-4 h-4 ${isPositive ? 'text-emerald-700' : 'text-amber-700'}`} />
                        <span>Fundamentación Pedagógica y Normativa (Acuerdo 009 de 2024):</span>
                      </span>

                      {!isPositive && (
                        <button
                          type="button"
                          onClick={() => handleRetryQuestion(currentQuestion.id)}
                          className="text-[11px] text-amber-900 hover:text-amber-950 font-bold flex items-center gap-1 cursor-pointer bg-white px-2.5 py-1 rounded-md border border-amber-300 shadow-2xs hover:bg-amber-100 transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Intentar de nuevo</span>
                        </button>
                      )}
                    </div>

                    <p className="text-slate-800 leading-relaxed font-medium bg-white p-3 rounded-lg border border-slate-200">
                      {correctOpt?.explanation}
                    </p>
                  </div>
                );
              })()}

              {/* Nav buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  disabled={currentQuestionIndex === 0}
                  onClick={handlePrevious}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-30 cursor-pointer"
                >
                  Anterior
                </button>

                <button
                  type="button"
                  disabled={!checkedQuestions[currentQuestion.id]}
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>
                    {currentQuestionIndex === CULTURE_QUIZ_QUESTIONS.length - 1
                      ? 'Finalizar y Calificar Prueba'
                      : 'Siguiente Pregunta'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-200" />
                </button>
              </div>
            </div>
          ) : (
            /* Quiz Finished View & Remediation Engine */
            <div className="space-y-8">
              {/* Result Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-600/40 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-xs ${
                        isApproved
                          ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border-2 border-amber-300'
                      }`}
                    >
                      {percentageScore}%
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Resultado de la Evaluación de Derechos & Deberes
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                        {isApproved
                          ? '¡Aprobación Sobresaliente del Reglamento SENA!'
                          : 'Evaluación en Proceso · Requiere Refuerzo en Normativa'}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Aciertos: <strong>{correctCount} de {CULTURE_QUIZ_QUESTIONS.length} preguntas</strong> ({percentageScore}%) · Mínimo para aprobar: 80% (8 preguntas)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleResetQuiz}
                      className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reintentar Prueba</span>
                    </button>
                    {isApproved && (
                      <button
                        onClick={() => setShowCertificate(true)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Award className="w-4 h-4" />
                        <span>Ver Constancia Oficial</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Answer breakdown review */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Retroalimentación de las 10 Preguntas (Fundamentadas en Acuerdo 009)
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveMainTab('normativa')}
                      className="text-xs text-emerald-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver artículos completos en el visor</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-1">
                    {CULTURE_QUIZ_QUESTIONS.map((q) => {
                      const chosenId = userAnswers[q.id];
                      const chosenOpt = q.options.find((o) => o.id === chosenId);
                      const correctOpt = q.options.find((o) => o.isCorrect);
                      const isCorrect = chosenId === correctOpt?.id;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border text-xs space-y-2 ${
                            isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-amber-50/50 border-amber-200'
                          }`}
                        >
                          <div className="flex items-center justify-between font-semibold">
                            <span className="text-slate-900 font-bold">
                              Pregunta {q.id}: {q.question}
                            </span>
                            <span
                              className={`font-mono font-bold text-[11px] px-2 py-0.5 rounded ${
                                isCorrect
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {isCorrect ? 'Aprobada' : 'A Mejorar'}
                            </span>
                          </div>
                          <p className="text-slate-600 text-[11px]">
                            Tu respuesta: <em>"{chosenOpt?.text}"</em>
                          </p>
                          <p className="text-slate-800 text-[11px] bg-white p-2.5 rounded-lg border border-slate-200">
                            <strong>Fundamento jurídico pedagógico:</strong> {correctOpt?.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Automated Remediation Engine (Cierre de Brechas) */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Motor Automatizado de Cierre de Brechas</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Ruta Personalizada de Nivelación y Refuerzo en Zajuna
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    A partir de tu autodiagnóstico en la Fase 1 y los resultados de este desafío, el sistema ha estructurado los siguientes cursos cortos para nivelar tus competencias antes del inicio del primer trimestre:
                  </p>
                </div>

                {neededRemediations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {neededRemediations.map((course) => {
                      const isEnrolled = enrolledRemediations.includes(course.id);
                      return (
                        <div
                          key={course.id}
                          className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 transition-all space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                                {course.durationHours} Horas
                              </span>
                              <span className="text-slate-500 text-[11px]">{course.modality}</span>
                            </div>

                            <h4 className="text-sm font-bold text-slate-900 leading-snug">
                              {course.title}
                            </h4>

                            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                              <strong>Detonante:</strong> {course.targetTrigger}
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {course.description}
                            </p>

                            <div className="pt-2 border-t border-slate-200 space-y-1">
                              <span className="text-[11px] font-bold text-slate-700 block">Módulos del Curso:</span>
                              <ul className="text-[11px] text-slate-600 space-y-0.5 list-disc list-inside">
                                {course.modules.map((m, i) => (
                                  <li key={i}>{m}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleEnrollCourse(course.id)}
                            className={`w-full py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                              isEnrolled
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                            }`}
                          >
                            {isEnrolled ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>Matriculado en Zajuna · Iniciar Módulo</span>
                              </>
                            ) : (
                              <>
                                <BookOpen className="w-4 h-4" />
                                <span>Inscribirme en Zajuna LMS (Sin costo)</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-900">
                      ¡No requieres cursos de nivelación obligatorios!
                    </h4>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Tus competencias digitales y tu apropiación del Acuerdo 009 de 2024 superaron con creces el estándar mínimo. Puedes iniciar tu etapa lectiva de forma directa o postularte como monitor académico.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Main Tab 2: Visor Interactivo y Consulta del Acuerdo 009 en JSON */}
      {activeMainTab === 'normativa' && (
        <div className="space-y-6">
          {/* Metadata & Actions Header */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-600/40 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs bg-emerald-950 text-white px-2.5 py-0.5 rounded">
                    {ACUERDO_009_DATA.acuerdo}
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                    Fecha: {ACUERDO_009_DATA.fechaAprobacion}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {ACUERDO_009_DATA.ciudad}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {ACUERDO_009_DATA.titulo}
                </h3>
                <p className="text-xs text-slate-600 max-w-3xl">
                  {ACUERDO_009_DATA.descripcion} Deroga en su totalidad los Acuerdos 07 de 2012, 02 de 2014, 06 de 2023 y 02 de 2024.
                </p>
              </div>

              {/* JSON export actions */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowRawJson(!showRawJson)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                    showRawJson
                      ? 'bg-slate-900 text-white border-slate-800'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>{showRawJson ? 'Ocultar JSON' : 'Ver Formato JSON'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  {copiedJson ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>¡JSON Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-700" />
                      <span>Copiar JSON</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar .json</span>
                </button>
              </div>
            </div>

            {/* Raw JSON viewer if enabled */}
            {showRawJson && (
              <div className="p-4 bg-slate-950 text-emerald-300 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>src/data/acuerdo009_2024.json (Estructura Objeto JSON)</span>
                  <span>{JSON.stringify(ACUERDO_009_DATA).length} caracteres</span>
                </div>
                <pre className="max-h-80 overflow-y-auto p-2 bg-slate-900/90 rounded text-[11px] leading-relaxed text-slate-200 select-all">
                  {JSON.stringify(ACUERDO_009_DATA, null, 2)}
                </pre>
              </div>
            )}

            {/* Search and Filters */}
            <div className="space-y-3 pt-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Buscar en el Acuerdo 009 (ej. 'derechos', 'deberes', 'prohibiciones', 'deserción', 'revisión', 'debido proceso')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              {/* Chapter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                <span className="text-slate-500 font-semibold shrink-0">Filtrar Capítulo:</span>
                {[
                  { id: 'Todos', label: 'Todos los Capítulos' },
                  { id: 'I', label: 'Cap. I: Definiciones & Principios' },
                  { id: 'II', label: 'Cap. II: Derechos (24)' },
                  { id: 'III', label: 'Cap. III: Deberes (24) & Prohibiciones (14)' },
                  { id: 'IV', label: 'Cap. IV: Novedades & Evaluación' },
                  { id: 'V', label: 'Cap. V: Faltas & Régimen Sancionatorio' },
                ].map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedChapter(cap.id)}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      selectedChapter === cap.id
                        ? 'bg-[#064e3b] text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cap.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List / Accordions */}
            <div className="space-y-6 pt-2">
              {filteredCapitulos.map((cap) => (
                <div key={cap.numero} className="space-y-3">
                  <div className="flex items-center gap-2 border-b-2 border-emerald-600/30 pb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#064e3b] text-white font-mono font-bold text-xs flex items-center justify-center">
                      {cap.numero}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Capítulo {cap.numero}: {cap.titulo}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {cap.articulos.map((art) => {
                      const isExpanded = expandedArticles[art.articulo] ?? false;
                      return (
                        <div
                          key={art.articulo}
                          className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-emerald-300 transition-colors"
                        >
                          <button
                            type="button"
                            onClick={() => toggleArticle(art.articulo)}
                            className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-emerald-50/30 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-300">
                                {art.articulo}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-900">
                                {art.nombre}
                              </span>
                              {art.totalItems && (
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  {art.totalItems} Numerales
                                </span>
                              )}
                            </div>
                            <div className="text-slate-400">
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="p-4 sm:p-5 space-y-3 border-t border-slate-100 text-xs text-slate-700 bg-white">
                              {art.contenido && (
                                <p className="leading-relaxed text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                  {art.contenido}
                                </p>
                              )}

                              {art.items && (
                                <div className="space-y-2">
                                  {art.items.map((it) => (
                                    <div
                                      key={it.numeral}
                                      className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/30 transition-colors space-y-1"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                                          {it.numeral}
                                        </span>
                                        {it.titulo && (
                                          <strong className="text-slate-900 text-xs">
                                            {it.titulo}
                                          </strong>
                                        )}
                                      </div>
                                      <p className="text-slate-700 text-xs leading-relaxed pl-7">
                                        {it.texto}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating / Pop-up Consultation Modal for use DURING the quiz */}
      {showAcuerdoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-emerald-700">
            {/* Modal Header */}
            <div className="bg-[#064e3b] text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-600">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-emerald-300" />
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                    Consulta Oficial: Acuerdo No. 0009 de 2024 (Reglamento del Aprendiz SENA)
                  </h3>
                  <p className="text-[11px] text-emerald-200">
                    Documento JSON Estructurado para consulta de Derechos, Deberes y Procedimientos
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAcuerdoModal(false)}
                className="text-white hover:text-emerald-200 font-bold text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>

            {/* Modal Search Bar */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-2">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar en el reglamento (ej. '8 días', '5 días', 'EPP', 'uniforme', 'falta gravísima')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
                />
              </div>
              <button
                type="button"
                onClick={handleCopyJson}
                className="px-3 py-1.5 bg-white text-emerald-900 border border-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer hover:bg-slate-100"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJson ? '¡Copiado!' : 'Copiar JSON'}</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {filteredCapitulos.map((cap) => (
                <div key={cap.numero} className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900 border-b border-slate-200 pb-1">
                    <span className="bg-[#064e3b] text-white px-2 py-0.5 rounded text-[10px] font-mono">
                      Cap. {cap.numero}
                    </span>
                    <span>{cap.titulo}</span>
                  </div>

                  <div className="space-y-2">
                    {cap.articulos.map((art) => (
                      <div key={art.articulo} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <strong className="text-emerald-900 font-bold">
                            {art.articulo} - {art.nombre}
                          </strong>
                          {art.totalItems && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                              {art.totalItems} Items
                            </span>
                          )}
                        </div>

                        {art.contenido && (
                          <p className="text-slate-700 leading-relaxed text-[11px]">{art.contenido}</p>
                        )}

                        {art.items && (
                          <div className="space-y-1.5 pt-1">
                            {art.items.map((it) => (
                              <div key={it.numeral} className="bg-white p-2 rounded border border-slate-100 text-[11px] leading-relaxed">
                                <span className="font-bold text-emerald-800 mr-1.5">#{it.numeral} {it.titulo ? `(${it.titulo}):` : ''}</span>
                                <span className="text-slate-700">{it.texto}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>Normativa oficial SENA 2024</span>
              <button
                type="button"
                onClick={() => setShowAcuerdoModal(false)}
                className="px-4 py-1.5 bg-[#064e3b] hover:bg-emerald-900 text-white font-bold rounded-lg cursor-pointer transition-colors"
              >
                Volver a la Prueba
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Certificate Modal / Preview */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 relative border border-slate-200">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-sm font-bold p-2 cursor-pointer"
            >
              ✕ Cerrar
            </button>

            {/* Certificate Canvas */}
            <div className="border-4 border-double border-emerald-700 p-6 sm:p-8 rounded-xl text-center space-y-6 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
              {/* Institutional Watermark Shield */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-extrabold text-xl shadow-xs">
                  SENA
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Servicio Nacional de Aprendizaje - SENA
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Ministerio del Trabajo · República de Colombia
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs font-serif italic text-slate-600 block">
                  Hace constar que el(la) aspirante y nuevo(a) aprendiz:
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
                  {learnerProfile?.fullName || 'Sebastián Gómez Morales'}
                </h2>
                <p className="text-xs font-mono text-slate-600">
                  Identificado(a) con {learnerProfile?.documentType || 'C.C.'} {learnerProfile?.documentNumber || '1098765432'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
                Ha completado satisfactoriamente las 5 fases de la <strong>Inducción a la Formación Profesional Integral</strong>: Caracterización Inicial, Geolocalización e Identidad Institucional, Exploración de Ecosistemas Curriculares (Zajuna y Sofía Plus), Ruta de Bienestar al Aprendiz y Evaluación Formativa sobre <strong>Derechos y Deberes (Acuerdo No. 0009 de 2024)</strong>.
              </p>

              {/* Badges & QR */}
              <div className="flex flex-wrap items-center justify-around gap-4 pt-4 border-t border-slate-200 text-left">
                <div className="text-[11px] text-slate-600 space-y-0.5 font-mono">
                  <div><strong>Código de Verificación:</strong> SENA-AC009-2026-X992</div>
                  <div><strong>Puntaje Obtenido:</strong> {percentageScore}% (Aprobado)</div>
                  <div><strong>Aciertos:</strong> {correctCount} de 10 preguntas</div>
                </div>

                {/* Simulated QR Code */}
                <div className="w-16 h-16 bg-slate-900 p-1 rounded flex items-center justify-center text-white text-[8px] font-mono text-center">
                  [QR VERIFICADO SENA SOFIA]
                </div>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-600">
                <div>
                  <div className="font-serif italic text-slate-800 font-bold border-b border-slate-400 pb-1 w-40 mx-auto">
                    Dr. Jorge Eduardo Londoño
                  </div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Director General SENA</span>
                </div>
                <div>
                  <div className="font-serif italic text-slate-800 font-bold border-b border-slate-400 pb-1 w-40 mx-auto">
                    Comité de Inducción
                  </div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Coordinación de Formación</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Constancia</span>
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
