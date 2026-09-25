import { VirtualPlatform } from '../types/induction';

export const VIRTUAL_PLATFORMS: VirtualPlatform[] = [
  {
    id: 'zajuna',
    name: 'Zajuna',
    officialTag: 'Ecosistema LMS Oficial de Formación Virtual y B-Learning',
    status: 'Vigente Principal (Nuevo LMS)',
    accessUrl: 'https://zajuna.sena.edu.co/',
    role: 'Plataforma central donde el aprendiz asiste a clases virtuales, descarga guías de aprendizaje, entrega evidencias, participa en foros temáticos y recibe retroalimentación de sus instructores.',
    description:
      'Zajuna es la nueva plataforma de aprendizaje del SENA (desarrollada con arquitectura abierta y adaptada a la identidad institucional). Permite sincronizar calendarios académicos, salas de videoconferencia (Microsoft Teams integradas), repositorios de recursos y seguimiento analítico por competencias.',
    keyFeatures: [
      'Acceso a la ruta de aprendizaje por Ficha y Proyecto Formativo.',
      'Buzón de evidencias con detector de plagio y rúbrica de evaluación transparente.',
      'Foros de dudas e inquietudes atendidos por instructores en máximo 48 horas hábiles.',
      'Integración directa con la Biblioteca Digital SENA (bases de datos científicas y libros electrónicos).',
      'Compatibilidad móvil optimizada para navegación desde teléfonos inteligentes.'
    ],
    credentialsFormula:
      'Usuario: Tu tipo y número de documento (Ej: CC1020304050). Contraseña inicial: La misma contraseña registrada en el portal SOFIA Plus.',
    firstLoginGuide: [
      {
        step: 1,
        title: 'Ingreso al portal',
        action: 'Ingresa a zajuna.sena.edu.co desde un navegador actualizado (Chrome, Edge o Firefox).',
        caution: 'Verifica siempre que el candado de seguridad HTTPS esté activo y el dominio termine en .sena.edu.co'
      },
      {
        step: 2,
        title: 'Autenticación única',
        action: 'Haz clic en "Iniciar Sesión" y selecciona la opción "Ingreso Aprendices / Instructores". Digita tu cédula y clave de Sofía Plus.',
        caution: 'No compartas tus credenciales; la actividad en plataforma queda registrada con tu IP y firma digital.'
      },
      {
        step: 3,
        title: 'Verificación de ficha y perfil',
        action: 'En el Área Personal, confirma que tu programa de formación y número de Ficha correspondan exactamente a tu matrícula.',
        caution: 'Actualiza de inmediato tu correo institucional @soy.sena.edu.co y tu foto formal de perfil.'
      },
      {
        step: 4,
        title: 'Exploración de la Inducción',
        action: 'Ingresa al curso "Inducción a la Formación Profesional Integral" y revisa los foros de presentación social.',
        caution: 'Participa con lenguaje respetuoso siguiendo la Netiqueta Institucional SENA.'
      }
    ]
  },
  {
    id: 'sofia-plus',
    name: 'Sofía Plus',
    officialTag: 'Sistema Optimizado para la Formación Integral del Aprendizaje Activo (Betowa Oferta)',
    status: 'Administrativo Oficial',
    accessUrl: 'https://betowa.sena.edu.co/oferta',
    role: 'Portal central de gestión académica, matrícula, certificación, consulta de calificaciones oficiales por competencia (Aprobado / No Aprobado) y registro de contratos de aprendizaje.',
    description:
      'Sofía Plus (y su portal de oferta Betowa) es el cerebro administrativo del SENA. Desde https://betowa.sena.edu.co/oferta se consultan las convocatorias y programas, se confirman las matrículas, se descargan los certificados con verificación digital y se formaliza el paso a la Etapa Productiva.',
    keyFeatures: [
      'Generación de certificados de estudio, constancias de matrícula y carné digital.',
      'Consulta del Juicio Evaluativo Oficial (estado de aprobación de cada resultado de aprendizaje).',
      'Gestión de novedades académicas (traslado de centro, aplazamiento, reingreso justificado, retiro voluntario).',
      'Intermediación y postulación de hojas de vida para Contratos de Aprendizaje con el sector productivo.'
    ],
    credentialsFormula:
      'Usuario: Tipo de documento (CC, TI, PPT, CE) y número. Contraseña: Clave alfanumérica de 8 a 16 caracteres definida en el registro inicial.',
    firstLoginGuide: [
      {
        step: 1,
        title: 'Acceso seguro al portal',
        action: 'Ingresa directamente a https://betowa.sena.edu.co/oferta para explorar la oferta educativa y acceder al sistema de gestión Sofía Plus.',
        caution: 'Verifica siempre el dominio oficial .sena.edu.co para proteger tus datos de registro.'
      },
      {
        step: 2,
        title: 'Selección de Rol',
        action: 'Una vez autenticado, despliega el menú superior izquierdo y cambia el rol de "Usuario" a "Aprendiz".',
        caution: 'Si no cambias al rol "Aprendiz", no podrás ver tus fichas activas ni tus certificados.'
      },
      {
        step: 3,
        title: 'Consulta de Juicios Evaluativos',
        action: 'Dirígete a: Certificación > Consultar Constancias del Aprendiz para verificar tus asignaturas y créditos aprobados.',
        caution: 'Revisa periódicamente que ningún instructor deje competencias en estado "Pendiente" al terminar cada trimestre.'
      }
    ]
  },
  {
    id: 'territorium',
    name: 'Territorium',
    officialTag: 'Plataforma LMS Anterior (En Transición hacia Zajuna)',
    status: 'En Transición / Consulta',
    role: 'Plataforma histórica empleada en cohortes previas; actualmente activa únicamente para consulta de registros históricos, cierre de fichas en culminación o migración de evidencias.',
    description:
      'Durante años fue el entorno de formación virtual. Actualmente el SENA migró su ecosistema a Zajuna, por lo cual los nuevos aprendices deben concentrar su día a día en Zajuna y usar Territorium sólo si su instructor o centro expresamente lo indica para consultar historiales anteriores.',
    keyFeatures: [
      'Repositorio de evidencias de cursos dictados antes del ciclo de actualización.',
      'Consulta de certificados de cursos cortos complementarios cursados en vigencias anteriores.',
      'Enlace espejo para homologaciones internas de programas de formación.'
    ],
    credentialsFormula:
      'Mismas credenciales vinculadas al correo institucional o acceso federado Sofía Plus.',
    firstLoginGuide: [
      {
        step: 1,
        title: 'Claridad para Nuevos Aprendices',
        action: 'Como nuevo aprendiz, tu inducción y formación se realizarán en Zajuna. Consulta Territorium únicamente bajo indicación expresa.',
        caution: 'No subas evidencias a Territorium si tu ficha está activa en Zajuna.'
      }
    ]
  }
];
