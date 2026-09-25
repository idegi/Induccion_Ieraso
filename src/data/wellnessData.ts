import { WellnessDimension } from '../types/induction';

export const WELLNESS_DIMENSIONS: WellnessDimension[] = [
  {
    id: 'socioeconomica',
    dimensionNumber: 1,
    title: 'Apoyos Socioeconómicos y Alivios de Permanencia',
    subtitle: 'Garantía de equidad para que ningún aprendiz abandone por razones económicas',
    description:
      'Conjunto de subsidios económicos monetarios y en especie diseñados para mitigar las condiciones de vulnerabilidad socioeconómica y asegurar la permanencia hasta la graduación.',
    services: [
      {
        name: 'Apoyo de Sostenimiento Regular',
        details: 'Auxilio económico mensual equivalente al 50% de un SMLV para aprendices de estratos 1 y 2 que no cuenten con patrocinio empresarial ni contrato de aprendizaje.',
        requirements: 'Estar matriculado en programa titulado presencial o virtual, estrato 1 o 2, SISBEN grupo A o B, no tener vínculo laboral activo.',
        deliveryMode: 'Giro mensual a cuenta bancaria o billetera digital certificada.'
      },
      {
        name: 'Apoyo Fondo FIC (Industria de la Construcción)',
        details: 'Apoyo exclusivo para aprendices matriculados en especialidades afines a la construcción, obras civiles, soldadura, electricidad y topografía.',
        requirements: 'Pertenecer a programas priorizados FIC, acreditar rendimiento académico satisfactorio y asistencia mínima del 95%.',
        deliveryMode: 'Asignación mensual directa aprobada por comité de centro.'
      },
      {
        name: 'Bono de Transporte y Rutas de Acercamiento',
        details: 'Tarifas preferenciales, convenios con sistemas masivos (TransMilenio, Metro, MIO, Transmetro) o rutas circulares gratuitas propias del SENA.',
        requirements: 'Presentar carné digital de aprendiz y certificado de residencia en municipios distantes al centro de formación.',
        deliveryMode: 'Tarjeta recargada mensual o acceso directo a vehículos institucionales.'
      },
      {
        name: 'Servicio de Alimentación y Cafetería Subsidiada',
        details: 'Almuerzos calientes y refrigerios balanceados preparados por nutricionistas en las cafeterías de los centros de formación.',
        requirements: 'Focalización socioeconómica a cargo del equipo de Bienestar de cada centro.',
        deliveryMode: 'Ticket diario electrónico canjeable en el comedor institucional.'
      }
    ],
    impactStory: 'En el último año, más de 85.000 aprendices de estratos 1 y 2 en todo el país lograron culminar su etapa lectiva gracias a los apoyos de sostenimiento regular y FIC.'
  },
  {
    id: 'psicologia',
    dimensionNumber: 2,
    title: 'Acompañamiento Psicológico, Salud Mental y Orientación',
    subtitle: 'Escucha empática, resiliencia emocional y adaptación al ritmo de formación',
    description:
      'Un equipo multidisciplinar de psicólogos y trabajadores sociales brinda contención, primeros auxilios psicológicos y desarrollo de habilidades socioemocionales para la vida y el trabajo.',
    services: [
      {
        name: 'Línea de Escucha y Asesoría Psicológica Individual',
        details: 'Sesiones confidenciales individuales para el manejo del estrés, ansiedad académica, duelos familiares y orientación vocacional.',
        requirements: 'Solicitud directa mediante formulario en línea o remisión por parte del instructor del área técnica.',
        deliveryMode: 'Presencial en consultorio de centro o teleorientación virtual segura.'
      },
      {
        name: 'Talleres de Habilidades para la Vida (Socioemocionales)',
        details: 'Módulos prácticos de comunicación asertiva, empatía, resolución pacífica de conflictos, inteligencia emocional y trabajo en equipo.',
        requirements: 'Participación en las jornadas programadas en el plan de inducción y en trimestres regulares.',
        deliveryMode: 'Talleres dinámicos vivenciales en aula y espacios abiertos.'
      },
      {
        name: 'Prevención del Suicidio y Consumo de Sustancias',
        details: 'Estrategias de autocuidado, redes de apoyo entre pares y rutas interinstitucionales de salud con las EPS y secretarías de salud.',
        requirements: 'Abierto a toda la comunidad de aprendices sin restricción.',
        deliveryMode: 'Campañas permanentes, ferias de salud y atención prioritaria.'
      }
    ],
    impactStory: 'Los aprendices que participan en talleres de habilidades socioemocionales aumentan su tasa de retención académica en un 32% y destacan por su adaptabilidad laboral.'
  },
  {
    id: 'deporte',
    dimensionNumber: 3,
    title: 'Deporte, Recreación y Acondicionamiento Físico',
    subtitle: 'Mente sana en cuerpo sano: disciplina, trabajo en equipo y salud física',
    description:
      'Fomento de hábitos de vida saludable a través del deporte formativo, torneos competitivos y el uso de instalaciones polideportivas y gimnasios institucionales.',
    services: [
      {
        name: 'Juegos Nacionales de la Confraternidad SENA',
        details: 'El evento multideportivo más importante del SENA donde compiten las 33 regionales en fútbol, baloncesto, voleibol, atletismo, natación y ajedrez.',
        requirements: 'Ser aprendiz activo con promedio académico destacado y pertenecer a las selecciones de centro.',
        deliveryMode: 'Fase de centro > Fase regional > Encuentro nacional con cobertura de viáticos.'
      },
      {
        name: 'Gimnasios Institucionales y Pausas Activas',
        details: 'Acceso libre a máquinas de pesas, cardio y entrenamiento funcional guiado por instructores de acondicionamiento físico.',
        requirements: 'Carné de aprendiz y valoración médica general inicial.',
        deliveryMode: 'Horarios flexibles matutinos, vespertinos y nocturnos.'
      },
      {
        name: 'Torneos Relámpago Interfichas',
        details: 'Campeonatos de fútbol de salón, vóley playa, tenis de mesa y videojuegos deportivos para fortalecer la integración del grupo.',
        requirements: 'Inscripción del equipo de la ficha formativa ante el coordinador de deportes.',
        deliveryMode: 'Jornadas de fin de semana o franjas de bienestar entre clases.'
      }
    ],
    impactStory: 'Las selecciones deportivas del SENA han sido semillero de atletas de alto rendimiento y fomentan la camaradería entre aprendices de diversas regiones.'
  },
  {
    id: 'cultura',
    dimensionNumber: 4,
    title: 'Arte, Cultura y Expresión Patrimonial',
    subtitle: 'Orgullo por la diversidad cultural, las artes escénicas y el folclor colombiano',
    description:
      'Espacio para el florecimiento del talento artístico de los aprendices, celebrando la rica identidad multicultural de las regiones colombianas.',
    services: [
      {
        name: 'Grupos Representativos de Danza, Música y Teatro',
        details: 'Ensambles de música andina, chirimía del Pacífico, vallenato tradicional, salsa, teatro experimental y danzas folclóricas.',
        requirements: 'Audición formativa al inicio de cada trimestre (se valoran ganas de aprender por encima de experiencia previa).',
        deliveryMode: 'Ensayos semanales en auditorios y presentaciones en eventos de ciudad.'
      },
      {
        name: 'Festival Nacional de la Canción SENA',
        details: 'Competencia anual para compositores e intérpretes que promueve la creación de música inédita y rescate de tradiciones.',
        requirements: 'Inscripción de obra original con aval de la coordinación de bienestar.',
        deliveryMode: 'Galas de centro y transmisión en vivo por los canales oficiales del SENA.'
      },
      {
        name: 'Clubes de Lectura, Cineforo y Fotografía',
        details: 'Espacios de diálogo crítico, apreciación cinematográfica y fotografía documental del entorno comunitario.',
        requirements: 'Acceso libre en la red de bibliotecas de centro.',
        deliveryMode: 'Encuentros presenciales quincenales y muestras de artes visuales.'
      }
    ],
    impactStory: 'Los ensambles artísticos SENA representan a la institución en ferias internacionales del libro, carnavales y festividades patrimoniales de Colombia.'
  },
  {
    id: 'liderazgo',
    dimensionNumber: 5,
    title: 'Liderazgo, Vocería y Participación Democrática',
    subtitle: 'Voz activa en la toma de decisiones institucionales y comités de centro',
    description:
      'Fortalecimiento de la ciudadanía participativa mediante la elección democrática de representantes, voceros de ficha y líderes comunitarios.',
    services: [
      {
        name: 'Elección de Voceros de Ficha',
        details: 'Cada ficha elige en su primera semana un vocero principal y un suplente para canalizar inquietudes académicas y concertar planes de mejoramiento.',
        requirements: 'Postulación democrática voluntaria y respaldo por voto de la mayoría de compañeros de aula.',
        deliveryMode: 'Votación transparente en jornada presencial o digital en Zajuna.'
      },
      {
        name: 'Representación ante el Consejo de Centro',
        details: 'Elección anual del Representante de los Aprendices quien tiene voz y voto en el Consejo Directivo del Centro y comités de bienestar.',
        requirements: 'Aprendiz con matrícula activa, sin sanciones disciplinarias y con propuesta de gobierno estudiantil.',
        deliveryMode: 'Campaña democrática institucional con debate público de propuestas.'
      },
      {
        name: 'Escuela de Líderes SENA (Campamentos de Paz)',
        details: 'Capacitación intensiva en liderazgo transformacional, mediación comunitaria, formulación de proyectos sociales y derechos humanos.',
        requirements: 'Haber sido elegido vocero o líder de semillero de innovación.',
        deliveryMode: 'Campamento vivencial en sedes campestres o granjas del SENA.'
      }
    ],
    impactStory: 'Los representantes de aprendices han impulsado históricamente mejoras cruciales en la infraestructura tecnológica, comedores y conectividad de los centros.'
  }
];
