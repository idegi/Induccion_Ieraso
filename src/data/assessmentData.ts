import { QuizQuestion, RemediationCourse } from '../types/induction';
import acuerdoData from './acuerdo009_2024.json';

export const ACUERDO_009_DATA = acuerdoData;

export const CULTURE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Reglamento y Derechos',
    question: '¿Dentro de qué plazo el aprendiz SENA tiene derecho a conocer el resultado de sus evaluaciones y qué tiempo tiene para solicitar por escrito su revisión si considera que no fue objetiva?',
    scenario:
      'Carlos presentó la entrega final de su proyecto en la semana 4 y requiere conocer las notas para su planeación académica.',
    options: [
      {
        id: 'opt-1a',
        text: 'Conocer resultados dentro de los 8 días hábiles siguientes (Art. 5 num. 15), y cuenta con 2 días hábiles tras la publicación para solicitar por escrito la revisión formal ante el instructor (Art. 5 num. 16 y Art. 38).',
        isCorrect: true,
        explanation: '¡Correcto! El Acuerdo 009 de 2024 garantiza que las evaluaciones se publiquen en máximo 8 días hábiles y otorga 2 días hábiles al aprendiz para radicar solicitud motivada de revisión.'
      },
      {
        id: 'opt-1b',
        text: 'Debe esperar hasta el último día del año lectivo sin derecho a reclamar o solicitar aclaraciones.',
        isCorrect: false,
        explanation: 'Incorrecto. La retroalimentación es continua y oportuna; el aprendiz tiene derecho a conocer sus juicios en 8 días hábiles.'
      },
      {
        id: 'opt-1c',
        text: 'Los resultados se publican en 30 días calendario y no existe ningún mecanismo reglamentario de revisión.',
        isCorrect: false,
        explanation: 'Incorrecto. El plazo fijado por el Acuerdo 009 es de 8 días hábiles con derecho de revisión y designación de segundo evaluador si persiste desacuerdo.'
      },
      {
        id: 'opt-1d',
        text: 'Solo los aprendices con matrícula de honor pueden conocer sus calificaciones antes de graduarse.',
        isCorrect: false,
        explanation: 'Incorrecto. La transparencia y el conocimiento de la evaluación es un derecho de todos los aprendices sin distinción.'
      }
    ]
  },
  {
    id: 2,
    category: 'Reglamento y Derechos',
    question: 'Si un aprendiz presenta una inasistencia no programada por enfermedad comprobada o calamidad doméstica, ¿cuál es el plazo reglamentario para radicar la debida justificación con soportes válidos ante su instructor?',
    scenario:
      'Ana sufrió una urgencia médica que le impidió asistir a dos sesiones presenciales de su programa. Cuenta con certificado e incapacidad médica de su EPS.',
    options: [
      {
        id: 'opt-2a',
        text: 'Avisar por redes sociales a un compañero al final del trimestre sin presentar incapacidad médica.',
        isCorrect: false,
        explanation: 'Incorrecto. Los avisos informales no tienen validez jurídica ni administrativa ante la coordinación del Centro.'
      },
      {
        id: 'opt-2b',
        text: 'Dentro de los cinco (5) días hábiles siguientes a la ocurrencia del hecho, allegando los respectivos soportes médicos o de fuerza mayor (Art. 8 num. 7 y Art. 28).',
        isCorrect: true,
        explanation: '¡Excelente! El Acuerdo 009 de 2024 fija un término de hasta 5 días hábiles para justificar inasistencias no programadas con soportes válidos.'
      },
      {
        id: 'opt-2c',
        text: 'Esperar 20 días hábiles para presentar la incapacidad cuando se inicie el proceso de cancelación de matrícula.',
        isCorrect: false,
        explanation: 'Incorrecto. Acumular 3 días continuos o 5 no continuos de inasistencia injustificada configura causal de deserción.'
      },
      {
        id: 'opt-2d',
        text: 'No es necesario justificar nunca porque en el SENA la asistencia es opcional.',
        isCorrect: false,
        explanation: 'Incorrecto. El Artículo 8 numeral 5 establece como deber asistir con puntualidad a todas las actividades formativas.'
      }
    ]
  },
  {
    id: 3,
    category: 'Reglamento y Derechos',
    question: 'En caso de que un aprendiz sea investigado por una presunta falta disciplinaria y citado al Comité de Evaluación y Seguimiento, ¿cuáles son sus garantías fundamentales según el Acuerdo 009?',
    scenario:
      'Felipe fue citado formalmente a descargos por un presunto altercado y necesita tener claridad sobre sus derechos en el procedimiento sancionatorio.',
    options: [
      {
        id: 'opt-3a',
        text: 'El Comité puede sancionarlo inmediatamente de manera verbal sin permitirle hablar ni revisar las pruebas.',
        isCorrect: false,
        explanation: 'Incorrecto. Toda sanción debe garantizar debido proceso, contradicción, notificación formal y motivación escrita.'
      },
      {
        id: 'opt-3b',
        text: 'Garantía del debido proceso, presunción de inocencia, citación previa con mínimo 3 días hábiles, derecho a conocer las pruebas, ser escuchado en descargos, controvertir testimonios y no autoincriminarse (Art. 5 num. 10 y Arts. 39, 50, 51).',
        isCorrect: true,
        explanation: '¡Totalmente cierto! El Acuerdo 009 de 2024 blinda las garantías constitucionales del debido proceso, derecho a la defensa y recursos de reposición y apelación.'
      },
      {
        id: 'opt-3c',
        text: 'Solo se le permite comparecer acompañado de un abogado penalista contratado obligatoriamente.',
        isCorrect: false,
        explanation: 'Incorrecto. El aprendiz puede comparecer por sí mismo, con su vocero o representante legal si es menor de edad.'
      },
      {
        id: 'opt-3d',
        text: 'Si el aprendiz no asiste a la primera citación por fuerza mayor demostrada, se le cancela la matrícula de inmediato.',
        isCorrect: false,
        explanation: 'Incorrecto. Si media justificación de fuerza mayor dentro de los 5 días, se programa una segunda fecha de citación formal.'
      }
    ]
  },
  {
    id: 4,
    category: 'Reglamento y Derechos',
    question: '¿Cuál es el deber del aprendiz respecto a la autoría de sus evidencias, investigaciones y exámenes, y qué prohibición expresa sanciona el Acuerdo 009 de 2024?',
    scenario:
      'Un aprendiz evalúa copiar un código de programación o un ensayo completo descargado de internet para entregarlo en su evidencia de aprendizaje.',
    options: [
      {
        id: 'opt-4a',
        text: 'Es libre de copiar cualquier documento de internet sin citar autores porque toda la web es de uso público y no requiere esfuerzo personal.',
        isCorrect: false,
        explanation: 'Incorrecto. Apropiarse de creaciones de terceros viola la legislación de derechos de autor y el reglamento institucional.'
      },
      {
        id: 'opt-4b',
        text: 'Deber de realizar personalmente las actividades haciendo uso de sus conocimientos y abstenerse de plagiar o presentar como propios trabajos ajenos (Art. 8 num. 12/13 y Art. 9 num. 4).',
        isCorrect: true,
        explanation: '¡Correcto! El Acuerdo 009 prohíbe taxativamente el plagio y la suplantación, catalogándolos como faltas que pueden acarrear sanciones de condicionamiento o cancelación.'
      },
      {
        id: 'opt-4c',
        text: 'El plagio solo está prohibido si el texto copiado supera las 100 páginas continuas.',
        isCorrect: false,
        explanation: 'Incorrecto. Cualquier fragmento de obra ajena no atribuido o presentado como propio constituye falta al régimen de propiedad intelectual.'
      },
      {
        id: 'opt-4d',
        text: 'El aprendiz puede pagar a una empresa externa para que realice sus evaluaciones y proyectos.',
        isCorrect: false,
        explanation: 'Incorrecto. El fraude y la delegación remunerada a terceros es una falta gravísima contra la integridad formativa.'
      }
    ]
  },
  {
    id: 5,
    category: 'Reglamento y Derechos',
    question: 'Para los aprendices que se forman en talleres industriales, laboratorios o ambientes con riesgos específicos, ¿qué derecho consagra taxativamente el Artículo 5 numeral 5?',
    scenario:
      'Santiago ingresa al taller de manufactura avanzada y mecanizado CNC donde se operan tornos y soldadura con altas temperaturas.',
    options: [
      {
        id: 'opt-5a',
        text: 'Recibir oportunamente del Centro de Formación los elementos de protección personal (EPP) requeridos para salvaguardar su integridad física durante su formación (Art. 5 num. 5).',
        isCorrect: true,
        explanation: '¡Exacto! El SENA está obligado a proveer oportunamente los EPP adecuados a los aprendices en ambientes de formación técnica con factores de riesgo.'
      },
      {
        id: 'opt-5b',
        text: 'Trabajar sin ningún tipo de protección obligatoria para agilizar los tiempos de producción del taller.',
        isCorrect: false,
        explanation: 'Incorrecto. Las normas de Seguridad y Salud en el Trabajo (SST) exigen el uso riguroso de EPP.'
      },
      {
        id: 'opt-5c',
        text: 'Comprar obligatoriamente gafas y caretas de una marca extranjera exclusiva recomendada por un tercero.',
        isCorrect: false,
        explanation: 'Incorrecto. El Centro debe suministrar los elementos requeridos y no se pueden imponer marcas ni proveedores exclusivos.'
      },
      {
        id: 'opt-5d',
        text: 'Firmar una renuncia a cualquier servicio médico institucional en caso de accidente laboral en el taller.',
        isCorrect: false,
        explanation: 'Incorrecto. Los aprendices están cubiertos por pólizas y rutas de atención en salud ocupacional.'
      }
    ]
  },
  {
    id: 6,
    category: 'Reglamento y Derechos',
    question: '¿Qué estipula el Artículo 8 numeral 20 del Acuerdo 009 de 2024 sobre el porte de prendas institucionales y uniformes en los ambientes de formación?',
    scenario:
      'A una ficha de aprendices les indican que deben adquirir su uniforme exclusivamente en un local comercial determinado por el instructor.',
    options: [
      {
        id: 'opt-6a',
        text: 'Los instructores tienen la potestad legal de multar a los aprendices que no compren en el almacén de su preferencia.',
        isCorrect: false,
        explanation: 'Incorrecto. El reglamento prohíbe de forma tajante cualquier imposición comercial sobre los aprendices.'
      },
      {
        id: 'opt-6b',
        text: 'El aprendiz debe portar las prendas de trabajo y protección adecuadas, pero en ningún caso se podrá exigir uniformes de una marca específica o de un proveedor determinado (Art. 8 num. 20).',
        isCorrect: true,
        explanation: '¡Muy bien! El numeral 20 del Artículo 8 protege la economía del aprendiz garantizando que no se monopolice la adquisición de prendas ni se restrinja el acceso por carecer de uniforme de uso diario.'
      },
      {
        id: 'opt-6c',
        text: 'El uso de uniforme formal es obligatorio las 24 horas del día incluso en la casa del aprendiz.',
        isCorrect: false,
        explanation: 'Incorrecto. Las prendas institucionales se circunscriben al ambiente y contexto formativo respectivo.'
      },
      {
        id: 'opt-6d',
        text: 'Está prohibido llevar ropa adecuada para talleres o laboratorios de formación.',
        isCorrect: false,
        explanation: 'Incorrecto. Portar elementos y prendas de trabajo apropiadas a la especialidad técnica es un deber normativo.'
      }
    ]
  },
  {
    id: 7,
    category: 'Reglamento y Derechos',
    question: '¿Cuáles de las siguientes conductas constituyen prohibiciones expresas tipificadas en el Artículo 9 del Acuerdo 009 de 2024 dentro de instalaciones físicas o virtuales del SENA?',
    scenario:
      'Un aprendiz revisa el decálogo de convivencia para socializar con sus compañeros las conductas no toleradas en el Centro.',
    options: [
      {
        id: 'opt-7a',
        text: 'Ingresar o consumir bebidas alcohólicas o sustancias psicoactivas, portar armas, realizar bullying/acoso, cometer fraude y usar redes institucionales para fines ilegales o lesivos (Art. 9).',
        isCorrect: true,
        explanation: '¡Correcto! El Artículo 9 enumera 14 prohibiciones orientadas a preservar la vida, la integridad física, la convivencia pacífica y el patrimonio institucional.'
      },
      {
        id: 'opt-7b',
        text: 'Solicitar libros prestados en la biblioteca y participar en grupos de estudio extracurriculares.',
        isCorrect: false,
        explanation: 'Incorrecto. Esas son actividades académicas plenamente promovidas y respaldadas por la entidad.'
      },
      {
        id: 'opt-7c',
        text: 'Postularse a los torneos deportivos organizados por la coordinación de bienestar al aprendiz.',
        isCorrect: false,
        explanation: 'Incorrecto. La participación en actividades lúdicas y deportivas es un beneficio directo del bienestar integral.'
      },
      {
        id: 'opt-7d',
        text: 'Ingresar a la plataforma Zajuna para consultar guías de aprendizaje a las 7 de la noche.',
        isCorrect: false,
        explanation: 'Incorrecto. Las plataformas virtuales están disponibles 24/7 para el aprendizaje autónomo.'
      }
    ]
  },
  {
    id: 8,
    category: 'Reglamento y Derechos',
    question: '¿Cómo se materializa el derecho a la representatividad democrática de los aprendices en los Centros de Formación según el Artículo 7 del Acuerdo 009 de 2024?',
    scenario:
      'En el mes de septiembre se realiza la jornada nacional de elección democrática de líderes de aprendices en el Centro de Formación.',
    options: [
      {
        id: 'opt-8a',
        text: 'El Subdirector nombra a dedo a un solo aprendiz para que hable en nombre de todos sin votación.',
        isCorrect: false,
        explanation: 'Incorrecto. El Artículo 7 exige elección democrática y participativa por voto libre y espontáneo.'
      },
      {
        id: 'opt-8b',
        text: 'Elección de representantes por jornada y modalidad en septiembre, voceros por cada ficha de formación y vocerías de poblaciones con enfoque diferencial (indígenas, NARP, campesinos, LGTBIQ+, discapacidad y mujer) (Art. 7).',
        isCorrect: true,
        explanation: '¡Excelente! El Acuerdo 009 fortalece la representatividad plural, garantizando voceros por jornada, por ficha y con representatividad específica de comunidades diversas.'
      },
      {
        id: 'opt-8c',
        text: 'Solo pueden participar aprendices que tengan más de 40 años y sean directivos de empresas.',
        isCorrect: false,
        explanation: 'Incorrecto. Todo aprendiz matriculado en formación laboral o tecnológica tiene derecho a elegir y ser elegido.'
      },
      {
        id: 'opt-8d',
        text: 'Las votaciones se realizan cada 10 años y no existen voceros de grupo.',
        isCorrect: false,
        explanation: 'Incorrecto. Las elecciones de representantes son anuales (septiembre) y cada ficha elige sus propios voceros.'
      }
    ]
  },
  {
    id: 9,
    category: 'Reglamento y Derechos',
    question: 'Respecto al acceso a las plataformas virtuales institucionales (Zajuna / Sofía Plus), ¿cuál es el deber y la responsabilidad legal estipulada en el Artículo 8 numeral 21?',
    scenario:
      'Julián se encuentra ocupado y considera compartir su usuario y clave con un tercero para que le suba sus talleres en el LMS institucional.',
    options: [
      {
        id: 'opt-9a',
        text: 'Las credenciales son de dominio público y se pueden compartir en foros abiertos de internet.',
        isCorrect: false,
        explanation: 'Incorrecto. La divulgación de contraseñas vulnera la seguridad informática y la autenticidad de las evidencias.'
      },
      {
        id: 'opt-9b',
        text: 'El usuario y contraseña son personales e intransferibles; el aprendiz asume de forma directa las responsabilidades derivadas del mal uso o cesión de sus credenciales (Art. 8 num. 21 y Art. 9 num. 2).',
        isCorrect: true,
        explanation: '¡Correcto! El uso no autorizado de cuentas institucionales acarrea responsabilidad disciplinaria e investigativa directa para el titular de la cuenta.'
      },
      {
        id: 'opt-9c',
        text: 'El aprendiz debe pagar una fianza mensual al instructor por cada inicio de sesión que realice en Zajuna.',
        isCorrect: false,
        explanation: 'Incorrecto. El acceso a las plataformas y ecosistema digital del SENA es 100% público y gratuito.'
      },
      {
        id: 'opt-9d',
        text: 'Está permitido suplantar a compañeros en foros y evaluaciones virtuales si existe amistad personal.',
        isCorrect: false,
        explanation: 'Incorrecto. La suplantación de identidad en cualquier trámite o ambiente virtual está tipificada como prohibición expresa (Art. 9 num. 2).'
      }
    ]
  },
  {
    id: 10,
    category: 'Reglamento y Derechos',
    question: '¿Qué distinciones y beneficios formativos institucionales contempla el Artículo 6 del Acuerdo 009 de 2024 para aprendices con actuaciones meritorias y desempeño sobresaliente?',
    scenario:
      'Mariana se destaca por su rendimiento académico, capacidad investigativa en SENNOVA y liderazgo social en su Centro de Formación.',
    options: [
      {
        id: 'opt-10a',
        text: 'Mención de honor por desempeño sobresaliente, representar al SENA en competencias nacionales o internacionales, selección para prácticas formativas destacadas y selección como monitor remunerado (Art. 6).',
        isCorrect: true,
        explanation: '¡Brillante! El Artículo 6 consagra incentivos pedagógicos de excelencia que enriquecen la hoja de vida del aprendiz y permiten acceder a monitorías remuneradas.'
      },
      {
        id: 'opt-10b',
        text: 'Exoneración total de presentar evidencias y entrega directa del título sin cursar la etapa productiva.',
        isCorrect: false,
        explanation: 'Incorrecto. Todos los aprendices deben superar las competencias lectivas y productivas para certificarse según la ley.'
      },
      {
        id: 'opt-10c',
        text: 'Recibir un vehículo de alta gama y salario vitalicio garantizado por el Estado.',
        isCorrect: false,
        explanation: 'Incorrecto. Los reconocimientos son de carácter formativo, académico, honorífico y de estímulo institucional.'
      },
      {
        id: 'opt-10d',
        text: 'La potestad de sancionar a sus compañeros de clase sin intervención de los instructores.',
        isCorrect: false,
        explanation: 'Incorrecto. Ningún aprendiz ejerce funciones disciplinarias; estas corresponden a los comités y subdirecciones de Centro.'
      }
    ]
  }
];

export const REMEDIATION_COURSES: RemediationCourse[] = [
  {
    id: 'rem-tic-1',
    title: 'Alfabetización Digital y Manejo Eficiente de Zajuna LMS',
    category: 'Competencias Digitales',
    durationHours: 20,
    modality: 'Autoformación Virtual en Zajuna',
    targetTrigger: 'Activado si la autoevaluación digital es menor a 3.5/5.0 o hay dificultad en carga de evidencias.',
    description:
      'Curso práctico intensivo para aprendices que requieren afianzar la gestión de archivos en la nube (OneDrive SENA), navegación ágil en foros y buzones de Zajuna, compresión de documentos y formatos PDF.',
    modules: [
      'Navegación segura y configuración de perfil en Zajuna',
      'Creación de documentos en procesadores de texto y conversión a PDF',
      'Uso de OneDrive y correo institucional @soy.sena.edu.co',
      'Entrega sin errores de evidencias individuales y colaborativas'
    ]
  },
  {
    id: 'rem-autonomo-2',
    title: 'Estrategias de Aprendizaje Autónomo según Estilo VARK',
    category: 'Hábitos de Estudio',
    durationHours: 15,
    modality: 'Autoformación Virtual en Zajuna',
    targetTrigger: 'Activado para perfiles con alta carga laboral o estilo de aprendizaje divergente/kinestésico.',
    description:
      'Metodologías comprobadas de organización del tiempo (Técnica Pomodoro, mapas conceptuales dinámicos, resúmenes visuales) diseñadas a la medida del estilo de aprendizaje predominante del aprendiz.',
    modules: [
      'Gestión del tiempo y cronograma semanal de estudio en casa',
      'Técnicas de estudio personalizadas según diagnóstico VARK (Visual, Auditivo, Kinestésico)',
      'Estrategias de concentración y reducción de la procrastinación',
      'Preparación efectiva para evaluaciones por competencias'
    ]
  },
  {
    id: 'rem-logica-3',
    title: 'Fundamentos de Razonamiento Lógico y Resolución de Problemas',
    category: 'Nivelación Lógica',
    durationHours: 25,
    modality: 'Taller Presencial de Apoyo',
    targetTrigger: 'Recomendado para aprendices de tecnologías duras (ADSO, Mecatrónica, Automatización).',
    description:
      'Entrenamiento dinámico en abstracción, secuencias algorítmicas, operaciones matemáticas básicas aplicadas a la vida diaria y comprensión lectora de instrucciones complejas.',
    modules: [
      'Descomposición de problemas complejos en pasos sencillos',
      'Tablas de verdad y lógica proposicional cotidiana',
      'Interpretación de gráficos de datos, porcentajes y proporciones',
      'Lectura crítica de especificaciones técnicas'
    ]
  },
  {
    id: 'rem-etica-4',
    title: 'Apropiación Normativa: Acuerdo 009 de 2024 (Reglamento del Aprendiz SENA)',
    category: 'Cultura SENA',
    durationHours: 10,
    modality: 'Autoformación Virtual en Zajuna',
    targetTrigger: 'Activado si el puntaje en la evaluación de derechos y deberes es menor al 80%.',
    description:
      'Estudio contextualizado del nuevo Acuerdo 009 de 2024 (Reglamento del Aprendiz SENA): análisis de los 24 derechos, 24 deberes, 14 prohibiciones, régimen sancionatorio, debido proceso y comités de evaluación.',
    modules: [
      'Los 24 Derechos del Aprendiz SENA y garantías de debido proceso (Art. 5)',
      'Los 24 Deberes del Aprendiz y uso responsable de plataformas (Art. 8)',
      'Las 14 Prohibiciones y tipificación de faltas leves, graves y gravísimas (Arts. 9 y 42)',
      'Comité de Evaluación y Seguimiento, planes de mejoramiento y recursos de ley (Arts. 46 a 51)'
    ]
  }
];
