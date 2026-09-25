export interface DossierSection {
  id: string;
  title: string;
  category: 'Arquitectura Técnica' | 'Diseño Instruccional' | 'Modelos de Datos' | 'Flujos de Integración';
  summary: string;
  contentMarkdown: string;
}

export const ARCHITECTURE_DOSSIER: DossierSection[] = [
  {
    id: 'fase1-tech-pedagogy',
    title: 'Fase 1: Especificación Técnica y Pedagógica del Diagnóstico Inicial',
    category: 'Diseño Instruccional',
    summary: 'Variables psicométricas, modelo VARK/Kolb, brechas de conectividad y matriz de personalización algorítmica.',
    contentMarkdown: `### 1. Marco Pedagógico y Psicométrico de Caracterización
El formulario inicial trasciende la recolección estática de datos demográficos para constituirse en un **motor de inferencia formativa**. Se fundamenta en dos marcos pedagógicos validados:
- **Modelo VARK (Fleming & Mills)**: Cuantifica las preferencias perceptivas de entrada sensorial (Visual, Aural/Auditivo, Read/Write - Lectura/Escritura, Kinesthetic - Kinestésico).
- **Ciclo de Aprendizaje Experiencial de David Kolb**: Mapea la interacción entre las dimensiones de Procesamiento (Experimentación Activa vs. Observación Reflexiva) y Percepción (Experiencia Concreta vs. Conceptualización Abstracta), clasificando al aprendiz en: Divergente, Asimilador, Convergente o Acomodador.

### 2. Matriz de Variables y Reglas de Personalización Dinámica
| Variable Clave | Indicador Técnico | Impacto Dinámico en la Inducción |
| :--- | :--- | :--- |
| **Acceso a Conectividad** | Dispositivo exclusivo vs. Móvil compartido / Datos prepago | Prioriza descarga offline de guías en Zajuna y genera alerta temprana al área de Bienestar para asignación de tarjeta SIM o préstamos de equipos. |
| **Estilo Dominante (VARK)** | Predominancia Kinestésica o Visual | Ajusta la jerarquía de contenidos en el LMS: coloca infografías y laboratorios interactivos en primer orden, sugiriendo podcasts para perfiles auditivos. |
| **Competencias TIC** | Promedio < 3.5 en escala de 1 a 5 | Inscribe automáticamente al aprendiz en el *Micro-curso de Nivelación Digital en Zajuna* desde el Día 3 de inducción. |
| **Barrera de Movilidad** | Commute > 60 min o transporte público complejo | Sugiere horarios flexibles de biblioteca, acceso a rutas intermunicipales del centro o postulación prioritaria a bono de transporte. |
| **Carga de Cuidado** | Cabeza de hogar con personas a cargo | Alerta al instructor técnico para calendarización asincrónica de evidencias y vinculación con la sala de lactancia o apoyos de alimentación. |`
  },
  {
    id: 'fase2-gis-architecture',
    title: 'Fase 2: Arquitectura de Navegación GIS y Geolocalización Regional',
    category: 'Arquitectura Técnica',
    summary: 'Topología de las 33 Regionales del SENA, modelo de datos de centros y narrativa de pertenencia.',
    contentMarkdown: `### 1. Estructura de Navegación y Capa Cartográfica
El mapa interactivo implementa un visor vectorial SVG interactivo calibrado geográficamente para los 33 departamentos y distritos de Colombia, organizado en 6 macro-zonas de desarrollo productivo:
- **Región Andina** (Bogotá D.C., Antioquia, Cundinamarca, Santander, Boyacá, Caldas, Risaralda, Quindío, Tolima, Huila, Norte de Santander).
- **Región Caribe** (Atlántico, Bolívar, Cesar, Córdoba, La Guajira, Magdalena, Sucre, San Andrés y Providencia).
- **Región Pacífica** (Valle del Cauca, Cauca, Nariño, Chocó).
- **Región Orinoquía** (Meta, Arauca, Casanare, Vichada).
- **Región Amazonía** (Amazonas, Caquetá, Putumayo, Guaviare, Guainía, Vaupés).
- **Región Insular** (Archipiélago de San Andrés, Providencia y Santa Catalina).

### 2. Ficha Técnica por Regional al Evento onClick
Cada nodo regional expone mediante un Drawer/Modal accesible:
- Identificador y Código DANE Regional (Ej: REG-05 Antioquia, REG-11 Distrito Capital).
- Nómina de Centros de Formación con código de sede, especialidades técnicas acreditadas y convenios SENNOVA.
- Infraestructura estratégica: TecnoParques, laboratorios acreditados ONAC, hangares de aviación, granjas agroforestales.
- Canales de atención ciudadana y buzón de peticiones, quejas y reclamos (PQRS).
- Narrativa de pertenencia regional: video o relato testimonial de impacto territorial.`
  },
  {
    id: 'fase3-curriculo-plataformas',
    title: 'Fase 3: Ecosistema Curricular y Gobernanza de Plataformas LMS',
    category: 'Flujos de Integración',
    summary: 'Desglose lectiva-productiva, taxonomía de programas y orquestación Zajuna vs Sofía Plus.',
    contentMarkdown: `### 1. Taxonomía Curricular y Etapa Productiva
La oferta de formación profesional integral se clasifica en 4 niveles de cualificación:
- **Tecnología (27 meses)**: 21 meses lectiva + 6 meses productiva. Nivel de educación superior técnica.
- **Técnica Laboral (15 a 18 meses)**: 9 a 12 meses lectiva + 6 meses productiva. Enfoque procedimental y operativo.
- **Operario (12 meses)**: 6 meses lectiva + 6 meses productiva. Destrezas manuales e instrumentales específicas.
- **Auxiliar (12 meses)**: 6 meses lectiva + 6 meses productiva. Operaciones asistenciales y de soporte.

### 2. Gobernanza de Plataformas Tecnológicas
| Plataforma | Función en la Inducción | Rol para Desarrolladores |
| :--- | :--- | :--- |
| **Zajuna (LMS)** | Ambiente Virtual de Aprendizaje (AVA). Entrega de evidencias, foros, rúbricas de evaluación. | Consumo de API REST/LTI para sincronización de matrículas y calificaciones. |
| **Sofía Plus** | ERP Académico. Matrícula oficial, juicios evaluativos y emisión de certificados. | Sistema central de verdad; emite el token de sesión y sincroniza datos de ficha. |
| **Territorium** | Repositorio histórico en fase de transición controlada. | Solo lectura para cohortes en proceso de homologación. |`
  },
  {
    id: 'fase4-wellness-induction',
    title: 'Fase 4: Matriz de Bienestar Integral y Cronograma de la Primera Semana',
    category: 'Diseño Instruccional',
    summary: '9 dimensiones del Bienestar al Aprendiz y syllabus pedagógico día a día con artefactos evaluables.',
    contentMarkdown: `### 1. Protocolo de los Servicios de Bienestar Obligatorios
Conforme a la Resolución 1227 de 2014, los centros de formación deben presentar y facilitar la postulación obligatoria a:
1. **Apoyo de Sostenimiento Regular (50% SMLV)**: Para estratos 1 y 2 sin contrato de aprendizaje.
2. **Apoyo Fondo FIC**: Para especialidades de construcción, soldadura y obras civiles.
3. **Orientación Psicosocial y Salud Mental**: Línea de escucha, prevención de adicciones y primeros auxilios emocionales.
4. **Alimentación y Transporte**: Cafeterías subsidiadas y tarjetas de transporte masivo.
5. **Deporte y Cultura**: Convocatoria a Juegos Nacionales SENA y grupos folclóricos.

### 2. Estructura Didáctica de la Semana de Inducción
- **Día 1**: Identidad Institucional, Valores Éticos y Recorrido de Centro.
- **Día 2**: Arquitectura del Programa Técnico/Tecnológico y Formación por Proyectos.
- **Día 3**: Práctica Operativa en Zajuna, Sofía Plus y Netiqueta Digital.
- **Día 4**: Reglamento del Aprendiz, Feria de Bienestar y Elección de Voceros.
- **Día 5**: Reto Gamificado de Cultura SENA, Activación de Cursos Nivelatorios y Certificado de Salida.`
  },
  {
    id: 'fase5-evaluacion-nivelacion',
    title: 'Fase 5: Motor de Evaluación Gamificada y Nivelación Adaptativa',
    category: 'Arquitectura Técnica',
    summary: 'Lógica de ramificación, cálculo de puntajes y matrícula automatizada en rutas de refuerzo.',
    contentMarkdown: `### 1. Motor de Evaluación Gamificada
- **Estructura**: 5 dilemas contextuales con casos reales del entorno formativo SENA.
- **Criterio de Aprobación**: Puntaje $\ge 80\\%$. Desbloquea la emisión inmediata de la *Constancia Digital de Inducción con Código QR de verificación criptográfica*.

### 2. Flujo Automatizado de Remediación (Cierre de Brechas)
\`\`\`
[Diagnóstico Inicial Fase 1] + [Evaluación de Salida Fase 5]
                     │
         ¿Competencias Digitales < 3.5/5?
            ├── SÍ ──> Matrícula Automática en: "Alfabetización Digital y Manejo Eficiente de Zajuna" (20h)
            └── NO
                     │
         ¿Estilo VARK Kinestésico / Divergente?
            ├── SÍ ──> Asignación de Guía Interactiva: "Estrategias de Estudio Autónomo" (15h)
            └── NO
                     │
         ¿Evaluación de Salida < 80%?
            ├── SÍ ──> Módulo de Refuerzo en Zajuna: "Apropiación Normativa y Reglamento" (10h)
            └── NO ──> Aprobación Plena Directa y Certificación Inmediata
\`\`\``
  }
];
