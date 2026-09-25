import { InductionDay } from '../types/induction';

export const INDUCTION_SCHEDULE: InductionDay[] = [
  {
    dayNumber: 1,
    dayName: 'Día 1: Lunes',
    themeTitle: 'Identidad Institucional, Misión y Sentido de Pertenencia',
    pedagogicalObjective:
      'Apropiar la historia, misión, valores, principios éticos y símbolos institucionales del SENA, reconociendo el papel transformador de la entidad en el desarrollo social y productivo del país.',
    competencyTarget: 'Interactuar en el contexto productivo y social de acuerdo con principios antropológicos, éticos y normativos institucionales.',
    activities: [
      {
        timeSlot: '08:00 - 09:30',
        title: 'Acto de Bienvenida y Transmisión Nacional de la Dirección General',
        pedagogicalDescription:
          'Saludo del Director General y del Subdirector de Centro. Proyección de video inspirador sobre el impacto histórico del SENA desde su fundación en 1957 por Rodolfo Martínez Tono.',
        methodology: 'Cátedra Dialogada',
        platformOrSpace: 'Auditorio Principal del Centro / Transmisión YouTube Institucional',
        deliverable: 'Registro de asistencia y firma simbólica del Libro de Honor del Aprendiz.',
        responsibleRole: 'Subdirector de Centro y Equipo Directivo'
      },
      {
        timeSlot: '09:45 - 11:30',
        title: 'Taller Vivencial: Símbolos, Himno y Código de Integridad SENA',
        pedagogicalDescription:
          'Análisis del significado del Escudo, la Bandera (el piñón, el caduceo y el café) y el Himno institucional. Trabajo en subgrupos para interpretar los 7 valores éticos: Honestidad, Respeto, Compromiso, Diligencia, Justicia, Solidaridad y Lealtad.',
        methodology: 'Taller Vivencial',
        platformOrSpace: 'Aulas de inducción asignadas',
        deliverable: 'Mural colaborativo o infografía grupal: "Mi compromiso con los valores SENA".',
        responsibleRole: 'Instructores de Humanidades y Ética'
      },
      {
        timeSlot: '11:45 - 13:00',
        title: 'Recorrido Guiado "Ruta de la Innovación": Conociendo Nuestro Centro',
        pedagogicalDescription:
          'Caminata pedagógica por los talleres especializados, laboratorios de biotecnología, TecnoParques, ambientes polivalentes, biblioteca y puntos de primeros auxilios.',
        methodology: 'Dinámica Grupal',
        platformOrSpace: 'Instalaciones del Centro de Formación / Campus Virtual 360',
        deliverable: 'Croquis de ubicación de áreas críticas y foto de integración de la ficha.',
        responsibleRole: 'Líderes de Bienestar y Guías Aprendices de Semestres Avanzados'
      }
    ],
    evaluationChecklist: [
      'Identifica la misión del SENA como entidad pública tripartita que capacita a la fuerza laboral colombiana.',
      'Reconoce la letra y el significado del Himno del SENA.',
      'Ubica físicamente los servicios neurálgicos de su centro de formación.'
    ]
  },
  {
    dayNumber: 2,
    dayName: 'Día 2: Martes',
    themeTitle: 'Mi Programa de Formación, Proyecto Formativo y Competencias',
    pedagogicalObjective:
      'Comprender la estructura curricular del programa de formación, los resultados de aprendizaje por trimestre, la metodología basada en proyectos (ABP) y el perfil de egreso en el mercado laboral.',
    competencyTarget: 'Gestionar la información formativa para planificar su proceso de aprendizaje autónomo.',
    activities: [
      {
        timeSlot: '08:00 - 10:00',
        title: 'Desglose Curricular: Lectiva, Productiva y Resultados de Aprendizaje',
        pedagogicalDescription:
          'Presentación del diseño curricular del programa. Explicación de la diferencia entre competencia técnica y competencia transversal (inglés, TIC, ética, seguridad y salud en el trabajo).',
        methodology: 'Cátedra Dialogada',
        platformOrSpace: 'Ambiente Técnico Especializado del Programa',
        deliverable: 'Ficha de caracterización académica y mapa de ruta trimestral del aprendiz.',
        responsibleRole: 'Equipo de Instructores Técnicos del Área'
      },
      {
        timeSlot: '10:15 - 12:00',
        title: 'La Metodología SENA: Formación por Proyectos y Aprendizaje Activo',
        pedagogicalDescription:
          'Presentación del Proyecto Formativo macro que desarrollará la ficha a lo largo de su formación. Ejemplos de proyectos reales desarrollados con empresas de la región.',
        methodology: 'Taller Vivencial',
        platformOrSpace: 'Ambiente de Formación / Talleres de Prototipado',
        deliverable: 'Concertación inicial de roles para los grupos de proyecto (Equipos de 3-4 aprendices).',
        responsibleRole: 'Instructor Líder de Ficha y Gestor SENNOVA'
      },
      {
        timeSlot: '12:15 - 13:00',
        title: 'Horizontes de la Etapa Productiva: Alternativas de Grado',
        pedagogicalDescription:
          'Explicación detallada de las 5 modalidades para cumplir la etapa productiva (Contrato de aprendizaje, Proyecto productivo Fondo Emprender, Pasantía, Vínculo laboral y Monitoría).',
        methodology: 'Cátedra Dialogada',
        platformOrSpace: 'Auditorio o Sala de Conferencias',
        deliverable: 'Cuestionario de preferencia de modalidad productiva diligenciado.',
        responsibleRole: 'Coordinador de Relaciones Corporativas y Empleo'
      }
    ],
    evaluationChecklist: [
      'Diferencia claramente las fases lectiva (formación) y productiva (práctica laboral).',
      'Describe las competencias nucleares que dominará al graduarse de su tecnología o técnica.',
      'Entiende el concepto de evidencia de conocimiento, desempeño y producto.'
    ]
  },
  {
    dayNumber: 3,
    dayName: 'Día 3: Miércoles',
    themeTitle: 'Ecosistema Digital SENA: Zajuna, Sofía Plus y Netiqueta',
    pedagogicalObjective:
      'Dominar el acceso operativo y seguro a las plataformas virtuales institucionales (Zajuna, Sofía Plus, correo @soy.sena.edu.co), reconociendo las normas de comunicación digital y convivencia virtual.',
    competencyTarget: 'Utilizar herramientas informáticas y plataformas digitales de acuerdo con los estándares y protocolos institucionales.',
    activities: [
      {
        timeSlot: '08:00 - 10:00',
        title: 'Taller Inmersivo en Zajuna: Navegación, Foros y Entrega de Evidencias',
        pedagogicalDescription:
          'Práctica individual con computador o dispositivo móvil: primer inicio de sesión, actualización de perfil y foto, navegación en el curso de inducción, participación en el foro de presentación y simulación de envío de una evidencia en formato PDF.',
        methodology: 'Práctica en Plataforma',
        platformOrSpace: 'Salas de Cómputo del Centro / Plataforma zajuna.sena.edu.co',
        deliverable: 'Evidencia 01 cargada exitosamente en el buzón virtual de Zajuna.',
        responsibleRole: 'Instructor Líder TIC y Administrador LMS de Centro'
      },
      {
        timeSlot: '10:15 - 11:30',
        title: 'Sofía Plus: Mi Portal Administrativo y Certificados',
        pedagogicalDescription:
          'Manejo del cambio de rol (Usuario a Aprendiz), consulta del estado de matrícula, verificación de ficha, consulta de juicios evaluativos trimestrales y descarga del carné de estudiante virtual.',
        methodology: 'Práctica en Plataforma',
        platformOrSpace: 'Salas de Sistemas / portal.senasofiaplus.edu.co',
        deliverable: 'Carné virtual descargado en el teléfono inteligente del aprendiz.',
        responsibleRole: 'Equipo de Registro y Control Académico'
      },
      {
        timeSlot: '11:45 - 13:00',
        title: 'Netiqueta, Ciberseguridad y Correo @soy.sena.edu.co',
        pedagogicalDescription:
          'Activación de la cuenta de correo institucional en Office 365. Buenas prácticas de comunicación escrita con instructores, respeto en grupos de WhatsApp/Teams y prevención de phishing.',
        methodology: 'Cátedra Dialogada',
        platformOrSpace: 'Aulas Multimedia',
        deliverable: 'Mensaje de saludo institucional enviado desde el correo @soy.sena.edu.co al instructor.',
        responsibleRole: 'Coordinador de Soporte Informático'
      }
    ],
    evaluationChecklist: [
      'Ingresa sin dificultades técnicas a Zajuna y a Sofía Plus con sus credenciales.',
      'Sabe cómo adjuntar archivos y verificar el estado de calificación de una evidencia.',
      'Aplica normas de cortesía y comunicación respetuosa en entornos digitales.'
    ]
  },
  {
    dayNumber: 4,
    dayName: 'Día 4: Jueves',
    themeTitle: 'Ruta de Bienestar Integral y Reglamento del Aprendiz',
    pedagogicalObjective:
      'Apropiar los derechos, deberes, prohibiciones y faltas consagrados en el Reglamento del Aprendiz SENA (Acuerdo 007 de 2012), e inscribirse en los programas de Bienestar al Aprendiz.',
    competencyTarget: 'Asumir deberes y libertades ciudadanas en coherencia con la normativa y el manual de convivencia institucional.',
    activities: [
      {
        timeSlot: '08:00 - 10:15',
        title: 'El Reglamento del Aprendiz en Acción: Estudio de Casos y Dilemas',
        pedagogicalDescription:
          'Dinámica de juego de roles sobre situaciones cotidianas: justificación de inasistencias en los 3 días hábiles, uso adecuado de uniformes y EPP, comités de evaluación, faltas leves, graves y gravísimas, y planes de mejoramiento pedagógico.',
        methodology: 'Taller Vivencial',
        platformOrSpace: 'Aulas de formación',
        deliverable: 'Resolución escrita de caso hipotético con sustento en artículos del reglamento.',
        responsibleRole: 'Equipo de Apoyo Jurídico y Coordinación Académica'
      },
      {
        timeSlot: '10:30 - 12:00',
        title: 'Feria de Servicios de Bienestar al Aprendiz',
        pedagogicalDescription:
          'Stands interactivos donde los aprendices conocen los requisitos y se postulan directamente a: Apoyos de Sostenimiento Regular/FIC, Servicio Psicosocial, Gimnasio, Danzas, Música y Selecciones Deportivas.',
        methodology: 'Dinámica Grupal',
        platformOrSpace: 'Plaza Central / Pasillos del Centro de Formación',
        deliverable: 'Pasaporte de Bienestar sellado en mínimo 3 estaciones de servicio.',
        responsibleRole: 'Líderes de Bienestar al Aprendiz'
      },
      {
        timeSlot: '12:15 - 13:00',
        title: 'Democracia SENA: Elección de Voceros de Ficha',
        pedagogicalDescription:
          'Sensibilización sobre el rol del vocero como puente constructivo entre aprendices e instructores. Presentación de candidatos voluntarios y votación secreta por parte de los aprendices.',
        methodology: 'Dinámica Grupal',
        platformOrSpace: 'Ambiente de Formación',
        deliverable: 'Acta formal de elección de vocero principal y suplente con posesión simbólica.',
        responsibleRole: 'Instructor Líder de Ficha'
      }
    ],
    evaluationChecklist: [
      'Conoce los causales de deserción (3 inasistencias injustificadas consecutivas) y el conducto regular.',
      'Identifica cómo tramitar una cita psicológica o postularse al apoyo de transporte.',
      'Elige y respalda a los voceros de su ficha formativa.'
    ]
  },
  {
    dayNumber: 5,
    dayName: 'Día 5: Viernes',
    themeTitle: 'Evaluación de Salida, Cierre de Brechas y Compromiso de Graduación',
    pedagogicalObjective:
      'Evaluar formativamente la apropiación de la cultura SENA mediante un desafío interactivo gamificado, activar planes de nivelación inmediata para vacíos detectados y suscribir el pacto de compromiso ético.',
    competencyTarget: 'Monitorear el propio proceso de aprendizaje mediante la autoevaluación y autorregulación formativa.',
    activities: [
      {
        timeSlot: '08:00 - 09:30',
        title: 'Desafío Gamificado: "Cultura SENA en Juego"',
        pedagogicalDescription:
          'Evaluación interactiva individual mediante la plataforma web: 5 situaciones problémicas sobre reglamento, uso de Zajuna, etapas formativas y valores institucionales. Retroalimentación inmediata de aciertos y oportunidades de mejora.',
        methodology: 'Cierre Evaluativo',
        platformOrSpace: 'Plataforma Web de Inducción',
        deliverable: 'Puntaje de aprobación de la prueba de salida (mínimo 80% para aprobación directa).',
        responsibleRole: 'Equipo Evaluador de Inducción'
      },
      {
        timeSlot: '09:45 - 11:15',
        title: 'Taller de Cierre de Brechas: Activación de Cursos Nivelatorios',
        pedagogicalDescription:
          'A los aprendices con bajas competencias digitales en el diagnóstico o debilidades en la prueba se les matricula automáticamente en micro-cursos cortos en Zajuna (Alfabetización TIC, Técnicas de Estudio según estilo VARK).',
        methodology: 'Práctica en Plataforma',
        platformOrSpace: 'Salas de Sistemas y Modalidad Virtual Asincrónica',
        deliverable: 'Plan individual de mejoramiento y suscripción al curso de nivelación correspondiente.',
        responsibleRole: 'Instructores de Nivelación y Apoyo Pedagógico'
      },
      {
        timeSlot: '11:30 - 13:00',
        title: 'Pacto de Graduación y Ceremonia de Imposición de la Chaqueta / Camisa SENA',
        pedagogicalDescription:
          'Lectura colectiva del Compromiso del Aprendiz. Entrega de insignias y bienvenida formal a la comunidad SENA. Emisión de la Constancia Digital de Culminación Exitosa de la Inducción.',
        methodology: 'Cierre Evaluativo',
        platformOrSpace: 'Auditorio Central / Ágora Institucional',
        deliverable: 'Constancia Digital de Inducción descargada con código QR de verificación.',
        responsibleRole: 'Subdirector de Centro, Coordinador Académico y Aprendices'
      }
    ],
    evaluationChecklist: [
      'Alcanza el resultado de aprendizaje de la competencia de inducción institucional.',
      'Cuenta con su plan de nivelación personalizado si presentó brechas en competencias digitales.',
      'Consolida su sentido de pertenencia y compromiso ético con la comunidad SENA.'
    ]
  }
];
