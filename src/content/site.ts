export type NavLink = { href: string; label: string };

export type AppModule = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  users: string;
  highlights: string[];
  screenshot: string;
  screenshots?: string[];
  accent: string;
};

export type Layer = {
  id: string;
  title: string;
  summary: string;
  apps: string[];
};

export type Indicator = {
  id: string;
  name: string;
  short: string;
  description: string;
  range?: string;
};

export type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  screenshot: string;
  screenshots?: string[];
  accent: string;
};

export type BentoCell = {
  title: string;
  metric?: string;
  badge?: string;
  description: string;
};

export const SITE = {
  name: 'CIVIKA',
  tagline: 'Ecosistema digital para la gobernanza y gestión municipal.',
  description:
    'CIVIKA es un ecosistema digital para la gobernanza y gestión municipal: ciudadanía, operación en terreno, analítica territorial e inteligencia sobre un mismo gemelo digital.',
};

export const NAV: NavLink[] = [
  { href: '#capas', label: 'Capas' },
  { href: '#ecosistema', label: 'Ecosistema' },
  { href: '#pilares', label: 'Pilares' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#indicadores', label: 'Indicadores' },
  { href: '#ley', label: 'Marco legal' },
  { href: '#plataforma', label: 'Plataforma' },
];

export const HERO = {
  badge: 'CIVIKA',
  title: 'Ecosistema digital para la gobernanza y gestión municipal',
  subtitle:
    'Un ecosistema conectado — no una app suelta — que integra ciudadanía, operación en terreno, indicadores territoriales e inteligencia para que la municipalidad decida con evidencia.',
  secondaryCta: { href: '#ecosistema', label: 'Ver ecosistema' },
};

export const HERO_TABS = [
  {
    id: 'operaciones',
    label: 'Operaciones',
    title: 'Nexo — central viva',
    caption: 'Bandeja de casos, mapa en tiempo real, despacho y chat con terreno.',
    screenshot: '/screenshots/nexo.png',
    accent: '#00d1ff',
  },
  {
    id: 'ciudadania',
    label: 'Ciudadanía',
    title: 'Pulse — canal con la comuna',
    caption: 'Reportes, alertas, encuestas de percepción y seguimiento al vecino.',
    screenshot: '/screenshots/pulse.png',
    accent: '#7b74ff',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Visión — lectura ejecutiva',
    caption: 'PI por sector, costo operativo, impacto de intervenciones y priorización.',
    screenshot: '/screenshots/vision.png',
    accent: '#c26bff',
  },
] as const;

export const PULSE_SCREENSHOTS = {
  feed: '/screenshots/pulse.png',
  survey: '/screenshots/pulse-survey.png',
} as const;

export type MarqueeItem = {
  label: string;
  screenshot?: string;
  pulseDuo?: boolean;
};

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: 'Pulse', pulseDuo: true },
  { label: 'Nexo', screenshot: '/screenshots/nexo.png' },
  { label: 'Sentinel', screenshot: '/screenshots/sentinel.png' },
  { label: 'Focus', screenshot: '/screenshots/focus.png' },
  { label: 'Visión', screenshot: '/screenshots/vision.png' },
  { label: 'Pulse Manager', screenshot: '/screenshots/manager.png' },
  { label: 'LIRA', screenshot: '/screenshots/lira.svg' },
];

export const LAYERS: Layer[] = [
  {
    id: 'ciudadania',
    title: 'Capa ciudadana',
    summary: 'Captura percepción, reportes y conversación territorial antes de que el problema escale.',
    apps: ['Pulse', 'Pulse Manager'],
  },
  {
    id: 'operacion',
    title: 'Capa operativa',
    summary: 'Coordina casos, despacho, terreno y comunicaciones en tiempo real sobre el mismo mapa.',
    apps: ['Nexo', 'Sentinel', 'S.O.S.', 'Central Call', 'PTT'],
  },
  {
    id: 'gestion',
    title: 'Capa de gestión',
    summary: 'Personal, turnos, inventario, costos y cumplimiento de metas operativas.',
    apps: ['Focus'],
  },
  {
    id: 'inteligencia',
    title: 'Capa de inteligencia',
    summary: 'Prioriza intervenciones con PI, costo e historial; LIRA explica y recomienda con trazabilidad.',
    apps: ['Visión', 'LIRA', 'Intelligence'],
  },
  {
    id: 'core',
    title: 'CIVIKA Core',
    summary: 'Identidad, APIs, PostGIS, gemelo digital, auditoría y proyección territorial compartida.',
    apps: ['Core', 'Realtime', 'Push'],
  },
];

export const PILLARS_SECTION = {
  eyebrow: 'Producto en acción',
  title: 'Tres pilares del ecosistema',
  intro:
    'Pulse captura la voz del territorio, Nexo coordina la operación en tiempo real y LIRA traduce registros en decisiones con trazabilidad. Tres roles distintos — ciudadanía, central e inteligencia — sobre el mismo ciclo municipal.',
};

export const PILLARS: Pillar[] = [
  {
    id: 'lira',
    eyebrow: 'LIRA',
    title: 'Lectura inteligente de registros y alertas',
    body: 'LIRA no es un chat genérico: opera sobre los datos del municipio con permisos, contexto territorial y fuentes rastreables.',
    bullets: [
      'Resume bandejas, operaciones y tendencias en lenguaje natural.',
      'Sugiere prioridades apoyadas en PI, costo e historial del sector.',
      'Dictado y voz en terreno para reportes y consultas rápidas.',
      'Cada respuesta puede vincularse a registros del Core.',
    ],
    screenshot: '/screenshots/lira.svg',
    accent: '#00eaff',
  },
  {
    id: 'nexo',
    eyebrow: 'Nexo',
    title: 'La central que ve el territorio completo',
    body: 'Bandeja unificada, triage, capas del gemelo digital y coordinación con inspectores y ciudadanía en un solo flujo.',
    bullets: [
      'Mapa vivo con incidentes, patrullajes y capas territoriales.',
      'Chat bidireccional Pulse ↔ central ↔ terreno.',
      'Triage y asignación con trazabilidad de cada decisión.',
      'Integración con S.O.S., llamadas centrales y PTT.',
    ],
    screenshot: '/screenshots/nexo.png',
    accent: '#00d1ff',
  },
  {
    id: 'pulse',
    eyebrow: 'Pulse',
    title: 'La comuna en el bolsillo del vecino',
    body: 'Canal oficial para reportar, recibir alertas y medir percepción de inseguridad de forma continua — no solo en encuestas anuales.',
    bullets: [
      'Reportes georreferenciados con seguimiento visible.',
      'Feed informativo y campañas segmentadas por territorio.',
      'Encuestas de percepción que alimentan el índice PI.',
      'PWA en iPhone y Android, app nativa Android y notificaciones push.',
    ],
    screenshot: PULSE_SCREENSHOTS.feed,
    screenshots: [PULSE_SCREENSHOTS.feed, PULSE_SCREENSHOTS.survey],
    accent: '#7174ff',
  },
];

export const MODULES: AppModule[] = [
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'App ciudadana',
    description:
      'Canal móvil para reportes, chat con la central, alertas territoriales y medición de percepción de inseguridad.',
    users: 'Comunidad, vecinos, organizaciones locales',
    highlights: ['Reportes con foto y ubicación', 'Push y seguimiento de casos', 'Encuestas PI', 'PWA · iOS · Android'],
    screenshot: PULSE_SCREENSHOTS.feed,
    screenshots: [PULSE_SCREENSHOTS.feed, PULSE_SCREENSHOTS.survey],
    accent: '#7174ff',
  },
  {
    id: 'manager',
    name: 'Pulse Manager',
    tagline: 'Comunicaciones territoriales',
    description:
      'Publicaciones, campañas por sector, analytics de alcance y mapa de percepción para alinear el mensaje con la realidad local.',
    users: 'Equipo de comunicaciones, prensa municipal',
    highlights: ['Campañas por geometría', 'Mapa de PI', 'Analytics de engagement', 'Canales Pulse'],
    screenshot: '/screenshots/manager.png',
    accent: '#5b8cff',
  },
  {
    id: 'nexo',
    name: 'Nexo',
    tagline: 'Central operativa',
    description:
      'Bandeja de casos, despacho, mapa en tiempo real, triage y coordinación con terreno y ciudadanía.',
    users: 'Operadores, televigilancia, jefatura de turno',
    highlights: ['Triage y priorización', 'Gemelo digital en vivo', 'Chat multicanal', 'Capas y filtros'],
    screenshot: '/screenshots/nexo.png',
    accent: '#00d1ff',
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    tagline: 'Ejecución en terreno',
    description:
      'Operaciones asignadas, evidencias, checklists, infracciones y registro estructurado desde el dispositivo del inspector.',
    users: 'Inspectores, agentes, técnicos de terreno',
    highlights: ['Checklists y evidencias', 'PTT y comunicación', 'Operaciones asignadas', 'Modo offline parcial'],
    screenshot: '/screenshots/sentinel.png',
    accent: '#4cd4a8',
  },
  {
    id: 'focus',
    name: 'Focus',
    tagline: 'Backoffice operativo',
    description:
      'Personal, turnos, inventario, costos operativos, combustible y metas SLA — la gestión que sostiene la operación diaria.',
    users: 'Jefatura, analistas, administración',
    highlights: ['Turnos y dotación', 'Costos y egresos', 'Inventario', 'Metas y SLA'],
    screenshot: '/screenshots/focus.png',
    accent: '#ffb347',
  },
  {
    id: 'vision',
    name: 'Visión',
    tagline: 'Vista ejecutiva',
    description:
      'Tableros para alcaldía y dirección: PI territorial, impacto de operaciones, patrones, economía e inteligencia operativa.',
    users: 'Alcaldía, dirección de seguridad, concejo técnico',
    highlights: ['PI por sector', 'ΔPI vs costo', 'Patrones temporales', 'Panel de priorización'],
    screenshot: '/screenshots/vision.png',
    accent: '#c26bff',
  },
  {
    id: 'lira',
    name: 'LIRA',
    tagline: 'Asistente territorial',
    description:
      'IA aplicada con sobriedad institucional: consultas, resúmenes y recomendaciones sobre datos del municipio.',
    users: 'Todos los roles (según permisos)',
    highlights: ['Lenguaje natural', 'Trazabilidad a fuentes', 'Voz y dictado', 'Contexto territorial'],
    screenshot: '/screenshots/lira.svg',
    accent: '#00eaff',
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    tagline: 'Motor analítico',
    description:
      'Predicción de PI, eficiencia operativa (ΔPI por costo) y priorización de tareas — resultados visibles en Visión.',
    users: 'Servicio backend; consumo en Visión y LIRA',
    highlights: ['Modelos territoriales', 'Scoring de eficiencia', 'Priorización automática', 'API Core'],
    screenshot: '/screenshots/intelligence.png',
    accent: '#8856ff',
  },
];

export const INDICATORS: Indicator[] = [
  {
    id: 'pi',
    name: 'Percepción de Inseguridad (PI)',
    short: 'PI',
    range: '0 – 100',
    description:
      'Índice GLOBAL territorial en Visión. 100 es máxima inseguridad percibida; se alimenta con encuestas Pulse, campañas y retroalimentación post-atención.',
  },
  {
    id: 'ci',
    name: 'Confianza institucional',
    short: 'CI',
    range: 'CONF_GLOBAL',
    description:
      'Métrica de confianza en la gestión municipal por sector — visible en el resumen ejecutivo y en indicadores territoriales de Visión.',
  },
  {
    id: 'delta-pi',
    name: 'ΔPI por intervención',
    short: 'ΔPI',
    description:
      'Variación de percepción tras operaciones, patrullajes o campañas — panel de impacto operaciones vs PI.',
  },
  {
    id: 'triangulation',
    name: 'Triangulación percepción vs hechos',
    short: 'DIV_HOT_PI',
    description:
      'Cruza cuadrantes de percepción (PI) con incidencias y delitos (INC_N, DEL_N) para detectar sectores donde lo vivido no coincide con el registro.',
  },
  {
    id: 'incidents',
    name: 'Incidencias territoriales',
    short: 'INC_N',
    range: '30 días',
    description:
      'Volumen de incidencias por sector en ventana móvil — base del gemelo digital y de la estadística criminal en Visión.',
  },
  {
    id: 'crime',
    name: 'Delitos y clusters calientes',
    short: 'DEL_N',
    range: '30 días',
    description:
      'Concentración delictiva DEL_N_30D y clusters HOT_CLUSTER_N para priorizar prevención situacional.',
  },
  {
    id: 'legal-types',
    name: 'Tipificación legal',
    short: 'Ley 21.802',
    description:
      'Distribución de hechos por categoría legal alineada a la Ley 21.802 — lectura ejecutiva en Visión para el director/a.',
  },
  {
    id: 'costo',
    name: 'Economía operativa',
    short: 'PI/$',
    description:
      'Costos, combustible y egresos por sector cruzados con evolución de PI — eficiencia territorial por peso invertido.',
  },
  {
    id: 'intelligence',
    name: 'Inteligencia operativa',
    short: 'Prioridad',
    description:
      'Tareas ordenadas por impacto esperado en PI y costo observado — motor Intelligence consumido en Visión y LIRA.',
  },
  {
    id: 'community',
    name: 'Índices comunitarios',
    short: 'Comunidad',
    description:
      'Miden cómo vive y se organiza el barrio: vínculo entre vecinos, calidad de la convivencia, disposición a participar, apoyo a decisiones municipales y capacidad de actuar juntos ante problemas locales.',
  },
  {
    id: 'sla',
    name: 'SLA de respuesta',
    short: 'SLA',
    description:
      'Tiempos de primera respuesta, asignación y cierre por tipo de caso — Focus y Visión para rendición de cuentas.',
  },
  {
    id: 'engagement',
    name: 'Engagement Pulse',
    short: 'Pulse',
    description:
      'Alcance de publicaciones, reacciones y campañas territoriales — conecta comunicación preventiva con medición de percepción.',
  },
];

export type CompliancePillar = {
  law: string;
  title: string;
  summary: string;
  apps: string[];
};

export const COMPLIANCE = {
  eyebrow: 'Marco legal',
  title: 'Alineados con la legislación de seguridad municipal',
  intro:
    'CIVIKA es plataforma operativa y de evidencia: no sustituye reglamentos ni convenios, pero el ecosistema está diseñado para la prevención prioritaria, la trazabilidad y el rol coadyuvante que exige la normativa chilena vigente y en tramitación.',
  note:
    'Hoy Focus cubre con fuerza televigilancia, turnos, patrullas e inventario; el conjunto del ecosistema — Pulse, Nexo, Sentinel, Visión y Core — extiende esa cobertura a alerta ciudadana, coordinación, PI y tipificación legal.',
  pillars: [
    {
      law: 'Ley 21.802',
      title: 'Fortalecimiento institucional municipal',
      summary:
        'Prevención del delito como labor prioritaria, alerta ciudadana, televigilancia, coordinación con FF.OO. y evidencia para el director/a de seguridad.',
      apps: ['Pulse', 'Nexo', 'Focus', 'Visión', 'Sentinel'],
    },
    {
      law: 'Ley 20.965',
      title: 'Consejo y plan comunal de seguridad',
      summary:
        'Trabajo territorial coordinado, participación vecinal y estrategias preventivas — reforzado por art. 64 de la Ley 21.802.',
      apps: ['Pulse Manager', 'Visión', 'Core'],
    },
  ] satisfies CompliancePillar[],
  focusHighlight:
    'Focus va más allá de un solo artículo: inventario de televigilancia (art. 5 y 25), dotación y turnos, patrullas, costos operativos y soporte al director/a — la columna de gestión que sostiene el cumplimiento en terreno.',
};

export const BENTO: BentoCell[] = [
  {
    title: 'Tiempo real',
    metric: 'WebSocket',
    badge: 'LIVE',
    description: 'S.O.S., central call, PTT y señales operativas con latencia baja sobre el Core.',
  },
  {
    title: 'Gemelo digital',
    metric: 'PostGIS',
    description: 'Incidentes, operaciones, PI y geometrías en una capa territorial compartida.',
  },
  {
    title: 'Seguridad',
    metric: 'RBAC',
    description: 'Roles por app, auditoría de acciones y despliegue con túnel seguro.',
  },
  {
    title: 'Mobile',
    metric: 'PWA · iOS · Android',
    description:
      'Pulse en navegador (incluye iPhone y iPad), app Android nativa y experiencia móvil en terreno con push.',
  },
  {
    title: 'Analytics',
    metric: 'PI · SLA',
    description: 'Visión consolida indicadores para autoridad y equipos técnicos.',
  },
  {
    title: 'Integración',
    metric: 'API Core',
    description: 'Un backend, múltiples apps especializadas y LIRA sobre el mismo dato.',
  },
];

export const ECOSYSTEM = {
  eyebrow: 'Ecosistema',
  title: 'Un flujo continuo',
  cycle: ['Capturar', 'Coordinar', 'Actuar', 'Medir'],
  cycleNote: 'El ciclo vuelve a empezar: cada vuelta prioriza de nuevo con PI, costo y evidencia territorial.',
  intro:
    'La ciudadanía y el terreno alimentan la operación; Nexo coordina; Focus y Sentinel ejecutan; Visión y LIRA miden y devuelven prioridades al siguiente ciclo.',
};

export const CTA = {
  title: 'Menos intuición. Más inteligencia territorial.',
  body: 'Conoce cómo CIVIKA integra operación, indicadores y ecosistema municipal en un solo territorio.',
  primary: { href: 'mailto:contacto@civika.sbs', label: 'Contactar' },
  secondary: { href: '#modulos', label: 'Explorar módulos' },
};
