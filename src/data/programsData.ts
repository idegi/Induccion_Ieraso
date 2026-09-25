import { AcademicProgram } from '../types/induction';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'adso-tec',
    code: '228106',
    title: 'Tecnología en Análisis y Desarrollo de Software (ADSO)',
    level: 'Tecnología',
    sector: 'Tecnologías de la Información y Software',
    modality: 'Virtual',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Muy Alta',
    featuredSede: 'Centro de Electricidad, Electrónica y Telecomunicaciones (CEET)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'El Tecnólogo en Análisis y Desarrollo de Software diseña, modela, codifica, testea y despliega arquitecturas de software modernas (web, móviles, servicios backend y bases de datos relacionales y NoSQL), aplicando metodologías ágiles como Scrum y estándares de seguridad de código limpio.',
    keyCompetencies: [
      'Establecer requisitos de software según estándares y necesidades del cliente.',
      'Diseñar la solución de software con modelado UML, patrones de diseño y diagramas de bases de datos.',
      'Desarrollar componentes frontend y backend utilizando frameworks modernos y APIs REST.',
      'Implementar pruebas unitarias, de integración y despliegues continuos (CI/CD).'
    ]
  },
  {
    id: 'ges-emp-tec',
    code: '122115',
    title: 'Tecnología en Gestión Empresarial',
    level: 'Tecnología',
    sector: 'Comercio y Servicios',
    modality: 'Presencial',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro de Servicios y Gestión Empresarial (Medellín)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Capacitado para formular planes estratégicos, coordinar áreas de talento humano, diseñar planes de marketing, estructurar análisis financieros y optimizar procesos administrativos en empresas públicas o privadas de cualquier sector económico.',
    keyCompetencies: [
      'Proponer programas de mejora continua y control de gestión administrativa.',
      'Elaborar presupuestos, costos y proyecciones de rentabilidad financiera.',
      'Coordinar procesos de reclutamiento, inducción y bienestar laboral en organizaciones.',
      'Diseñar planes comerciales y estrategias de fidelización de clientes.'
    ]
  },
  {
    id: 'mec-ind-tec',
    code: '223201',
    title: 'Tecnología en Mecatrónica Industrial',
    level: 'Tecnología',
    sector: 'Industria y Construcción',
    modality: 'Presencial',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Muy Alta',
    featuredSede: 'Centro de Tecnología de la Manufactura Avanzada (CTMA)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Integra sistemas mecánicos, electrónicos y de software en líneas de producción automatizadas. Diagnostica y mantiene brazos robóticos, controladores lógicos programables (PLC), actuadores neumáticos e hidráulicos bajo normas de seguridad industrial.',
    keyCompetencies: [
      'Programar y calibrar autómatas programables (PLC) y redes industriales SCADA.',
      'Diagnosticar fallas electromecánicas con instrumentación de precisión osciloscópica.',
      'Integrar celdas de manufactura robotizadas y visión artificial para control de calidad.',
      'Ejecutar planes de mantenimiento predictivo y preventivo en plantas continuas.'
    ]
  },
  {
    id: 'biotec-agr-tec',
    code: '723104',
    title: 'Tecnología en Biotecnología Vegetal y Agropecuaria',
    level: 'Tecnología',
    sector: 'Agropecuario y Ambiental',
    modality: 'Presencial',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro de Biotecnología Agropecuaria CBA (Mosquera)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Lidera procesos de propagación in vitro de especies vegetales de alto valor comercial, biofertilización microbiana, diagnóstico fitosanitario molecular y producción limpia en campo, respondiendo a la sostenibilidad agroalimentaria del país.',
    keyCompetencies: [
      'Operar cámaras de flujo laminar y medios de cultivo para micropropagación vegetal.',
      'Formular bioinsumos y controladores biológicos a partir de cepas nativas.',
      'Aplicar técnicas de biología molecular para detección temprana de plagas agrícolas.',
      'Certificar Buenas Prácticas Agrícolas (BPA) y protocolos de bioseguridad.'
    ]
  },
  {
    id: 'enf-tec',
    code: '331120',
    title: 'Técnico en Enfermería',
    level: 'Técnica',
    sector: 'Salud, Cuidados y Deporte',
    modality: 'Presencial',
    durationTotalMonths: 18,
    durationLectivaMonths: 12,
    durationProductivaMonths: 6,
    laborDemand: 'Muy Alta',
    featuredSede: 'Centro de Formación en Actividad Física y Cultura / Complejo Sur Bogotá',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Brinda atención integral y humanizada en salud preventiva y curativa. Administra medicamentos bajo prescripción médica, toma signos vitales, apoya procedimientos quirúrgicos y participa en programas comunitarios de salud pública con ética y calidez.',
    keyCompetencies: [
      'Asistir al usuario en las actividades de la vida diaria según su condición de salud.',
      'Administrar medicamentos por vías parenteral, enteral y tópica con doble verificación.',
      'Aplicar técnicas asépticas en curaciones, desinfección y esterilización de instrumental.',
      'Realizar vigilancia epidemiológica y educación en hábitos de autocuidado a familias.'
    ]
  },
  {
    id: 'anim-dig-tec',
    code: '524119',
    title: 'Tecnología en Animación 3D y Contenidos Digitales',
    level: 'Tecnología',
    sector: 'Economía Popular y Creativa',
    modality: 'Virtual',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro de Diseño e Innovación Tecnológica Industrial (Dosquebradas)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Crea personajes, escenarios y efectos visuales tridimensionales para producciones cinematográficas, videojuegos, publicidad y simuladores virtuales interactivos, dominando flujos de modelado, texturizado, rigging e iluminación digital.',
    keyCompetencies: [
      'Desarrollar storyboards, guiones técnicos y conceptos visuales de arte digital.',
      'Modelar objetos orgánicos e inorgánicos con topología limpia para animación.',
      'Configurar esqueletos cinemáticos (rigging) y sincronización labial.',
      'Renderizar secuencias complejas optimizando motores gráficos y composición final.'
    ]
  },
  {
    id: 'panif-tec',
    code: '635201',
    title: 'Técnico en Panificación y Pastelería Artesanal',
    level: 'Técnica',
    sector: 'Comercio y Servicios',
    modality: 'Presencial',
    durationTotalMonths: 15,
    durationLectivaMonths: 9,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro de Comercio, Industria y Turismo de Córdoba (Montería)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Domina las técnicas de fermentación prolongada, masas madre, bollería fina tradicional y decoración de pastelería moderna, cumpliendo con la normatividad sanitaria de inocuidad alimentaria y costeo de recetas estándar.',
    keyCompetencies: [
      'Formular y estandarizar recetas de masas dulces, saladas y hojaldradas.',
      'Controlar variables de tiempo, humedad y temperatura en hornos industriales.',
      'Elaborar rellenos, cubiertas y decoraciones artísticas para eventos.',
      'Implementar el sistema HACCP y Buenas Prácticas de Manufactura (BPM).'
    ]
  },
  {
    id: 'sold-oper',
    code: '834201',
    title: 'Operario en Procesos de Soldadura SMAW y GMAW',
    level: 'Operario',
    sector: 'Industria y Construcción',
    modality: 'Presencial',
    durationTotalMonths: 12,
    durationLectivaMonths: 6,
    durationProductivaMonths: 6,
    laborDemand: 'Muy Alta',
    featuredSede: 'Centro Industrial de Mantenimiento Integral CIMI (Girón / Barrancabermeja)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Opera equipos de soldadura por arco eléctrico con electrodo revestido y soldadura semiautomática con gas protector en posiciones 1G a 4G sobre láminas y perfiles estructurales de acero al carbono, siguiendo especificaciones de planos WPS y normas AWS.',
    keyCompetencies: [
      'Preparar biseles, juntas y superficies metálicas mediante corte térmico y pulido.',
      'Depositar cordones de soldadura homogéneos sin defectos de penetración ni porosidad.',
      'Interpretar símbolos de soldadura y tolerancias en planos mecánicos de taller.',
      'Utilizar elementos de protección personal contra radiación ultravioleta y humos metálicos.'
    ]
  },
  {
    id: 'log-aux',
    code: '137101',
    title: 'Auxiliar en Almacenamiento, Empaque y Logística',
    level: 'Auxiliar',
    sector: 'Comercio y Servicios',
    modality: 'Presencial',
    durationTotalMonths: 12,
    durationLectivaMonths: 6,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro Náutico Pesquero de Buenaventura / Sede Fontibón Bogotá',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Recepciona, clasifica, ubica, etiqueta y despacha mercancías en centros de distribución y bodegas logísticas. Maneja lectores de código de barras, inventarios en software WMS y transpaletas manuales.',
    keyCompetencies: [
      'Inspeccionar físicamente el estado de embalajes y verificar listas de empaque.',
      'Ubicar productos en estanterías según rotación ABC y cadena de frío.',
      'Alistar pedidos (picking) y consolidar bultos para transporte terrestre o marítimo.',
      'Registrar movimientos de entrada y salida en sistemas de kardex digital.'
    ]
  },
  {
    id: 'cacao-tec',
    code: '733108',
    title: 'Técnico en Cultivo, Poscosecha y Catación de Cacao',
    level: 'Técnica',
    sector: 'Agropecuario y Ambiental',
    modality: 'Presencial',
    durationTotalMonths: 15,
    durationLectivaMonths: 9,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro de Gestión y Desarrollo Agroindustrial de Arauca (Arauquita)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Especialista en podas técnicas, injertación de clones finos de aroma, fermentación en cajones de madera escalonados, secado solar y evaluación sensorial de licor de cacao para mercados de exportación.',
    keyCompetencies: [
      'Manejar agronómicamente plantaciones de cacao bajo sistemas agroforestales.',
      'Monitorear curvas de temperatura y pH en fermentadores de cacao.',
      'Clasificar almendras de cacao mediante la prueba de corte y porcentaje de humedad.',
      'Elaborar perfiles sensoriales de aromas florales, frutales y a nuez.'
    ]
  },
  {
    id: 'ciber-tec',
    code: '228123',
    title: 'Tecnología en Gestión de Seguridad en Redes y Ciberseguridad',
    level: 'Tecnología',
    sector: 'Tecnologías de la Información y Software',
    modality: 'Virtual',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Muy Alta',
    featuredSede: 'Centro de Teleinformática y Producción Industrial CTPI (Popayán)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Configura firewalls, detectores de intrusos (IDS/IPS), protocolos VPN y gestiona incidentes de seguridad digital. Realiza análisis de vulnerabilidades éticas para blindar infraestructuras corporativas frente a ciberataques.',
    keyCompetencies: [
      'Auditar políticas de seguridad informática según la norma ISO/IEC 27001.',
      'Detectar anomalías de tráfico en redes locales mediante analizadores de paquetes.',
      'Configurar copias de seguridad inmutables y planes de recuperación ante desastres (DRP).',
      'Mitigar brechas de seguridad en endpoints y servidores perimetrales.'
    ]
  },
  {
    id: 'tur-guia-tec',
    code: '634122',
    title: 'Tecnología en Guianza Turística Especializada',
    level: 'Tecnología',
    sector: 'Economía Popular y Creativa',
    modality: 'Presencial',
    durationTotalMonths: 27,
    durationLectivaMonths: 21,
    durationProductivaMonths: 6,
    laborDemand: 'Alta',
    featuredSede: 'Centro para la Biodiversidad y el Turismo del Amazonas (Leticia)',
    primaryPlatforms: ['Zajuna', 'Sofía Plus'],
    graduationProfile:
      'Lidera recorridos de ecoturismo, turismo de aventura y aviturismo en español e inglés. Domina primeros auxilios en áreas remotas (WFA), georreferenciación GPS, interpretación del patrimonio natural y gestión de riesgos en campo.',
    keyCompetencies: [
      'Diseñar y cotizar itinerarios turísticos sostenibles con comunidades locales.',
      'Orientar grupos con técnicas de oratoria empática y bilingüismo funcional.',
      'Aplicar protocolos de rescate, evacuación y primeros auxilios en senderos.',
      'Divulgar saberes de flora, fauna endémica y cosmogonía ancestral colombiana.'
    ]
  }
];

export const ETAPAS_PRODUCTIVAS_ALTERNATIVAS = [
  {
    title: 'Contrato de Aprendizaje (Modalidad Estándar)',
    description: 'La empresa patrocinadora otorga el 100% de un SMLV (Salario Mínimo) más afiliación obligatoria a EPS y ARL mientras el aprendiz realiza labores afines a su formación.',
    badge: 'Más Común (78% de aprendices)',
    legalBasis: 'Ley 789 de 2002 y Decreto 933 de 2003'
  },
  {
    title: 'Proyecto Productivo (Emprendimiento SENA)',
    description: 'El aprendiz formula y ejecuta su propio plan de negocio con asesoría de la Unidad de Emprendimiento Fondo Emprender. Valida la etapa productiva creando su empresa.',
    badge: 'Autonomía y Negocio Propio',
    legalBasis: 'Acuerdo 00007 de 2012'
  },
  {
    title: 'Pasantía Comunitaria o en Entidad Pública',
    description: 'Concertación entre el SENA y una ONG, institución educativa o entidad del Estado para que el aprendiz aporte sus competencias en proyectos de impacto social.',
    badge: 'Impacto Comunitario',
    legalBasis: 'Reglamento del Aprendiz Art. 12'
  },
  {
    title: 'Monitoría Académica Institucional',
    description: 'Aprendices destacados en etapa lectiva son seleccionados para apoyar laboratorios, ambientes de formación y bienestar, recibiendo estímulo económico institucional.',
    badge: 'Mérito Académico',
    legalBasis: 'Resolución SENA 1234 de 2013'
  },
  {
    title: 'Vínculo Laboral Preexistente',
    description: 'Si el aprendiz ya trabaja formalmente en una empresa en un cargo directamente relacionado con el perfil de egreso de su programa, se homologan sus horas de práctica.',
    badge: 'Trabajadores Activos',
    legalBasis: 'Resolución de Homologación de Práctica'
  }
];
