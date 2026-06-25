// lang.js — i18n system for Jose Molina portfolio

const translations = {
  es: {
    'page.title.index': 'Jose Molina — Periodista de datos',
    'page.title.trabajo': 'Trabajo — Jose Molina',

    'nav.aria': 'Principal',
    'nav.bio': 'Bio y contacto',
    'nav.work': 'Trabajos',

    'hero.subtitle': 'Periodista de datos · Investigación digital',

    'bio.1': 'En los últimos años me he enfocado en el análisis de la actualidad política, la desinformación en redes y el rastreo de huellas digitales mediante fuentes abiertas (OSINT).',
    'bio.2': 'Busco prevenir y combatir el engaño, el fraude y la manipulación analizando sus narrativas, atribuyendo el origen de estas amenazas y diseñando estrategias orientadas a neutralizarlas.',
    'bio.3': 'Vivo en España y estoy abierto a proyectos freelance.',

    'skills.heading': 'Competencias:',
    'skills.1': 'Elaborar historias basadas en análisis técnicos, cuidando la redacción y el diseño narrativo y visual',
    'skills.2': 'Gestionar grandes volúmenes de información: adquisición, inspección, depuración y visualización',
    'skills.3': 'Verificar mediante fuentes digitales, documentales y humanas',
    'skills.4': 'Respuesta rápida ante incidentes en entornos de crisis',

    'contact.heading': 'Escríbeme:',
    'contact.placeholder.email': 'tu@email.com',
    'contact.placeholder.message': '¿En qué consiste el proyecto o investigación?',
    'contact.submit': 'Enviar mensaje',

    'view.journalism': 'Algunas piezas periodísticas',
    'view.other': 'Otras cosas',
    'view.switch.aria': 'Cambiar vista de trabajos',

    'filter.all': 'Todos',
    'filter.desinfo': 'Desinformación',
    'filter.datos': 'Datos',
    'filter.verificacion': 'Verificación',
    'filter.contexto': 'Contexto',

    'card.expand': 'Expandir',
    'card.collapse': 'Contraer',
    'card.read': 'Leer más →',
    'card.article': 'Artículo',

    'cat.datos': 'Datos',
    'cat.desinfo': 'Desinformación',
    'cat.verificacion': 'Verificación',
    'cat.contexto': 'Contexto',

    'months': ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
               'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

    'timeline.error': 'Error cargando los artículos. Por favor, recarga la página.',

    'beyond.fact-check.title': 'Verificación para reportajes o documentales',
    'beyond.fact-check.1': 'Revisión exhaustiva de documentación técnica y tratamiento directo con las fuentes involucradas',
    'beyond.fact-check.2': 'Verificación del contenido con datos de registros públicos, hemeroteca y herramientas OSINT',
    'beyond.fact-check.3': 'Capacidad de trabajar en flujos de producción y límites de entrega estrictos de prensa y producción documental',
    'beyond.fact-check.copy': '<strong>Proyectos destacados:</strong> <a href="https://premioggm.org/trabajo/edicion/2026/audio/se-llamaba-como-yo/" target="_blank" rel="noreferrer">De eso no se habla (T3): Se llamaba como yo</a> (EITB Media, 2025 - investigación y verificación en fase de producción); <a href="https://www.netflix.com/es/title/81275696" target="_blank" rel="noreferrer">800 metros</a> (Netflix, 2022 - análisis de sumario, sentencia y conteo individual de víctimas); Yo Ibextigo (La Marea, 2019-2020 - verificación de información corporativa de <a href="https://www.yoibextigo.lamarea.com/informe/tecnicas-reunidas/que-es/dossier-tecnicas-reunidas-negocios-en-paises-dictatoriales-y-escasa-rentabilidad/" target="_blank" rel="noreferrer">Técnicas Reunidas</a>, <a href="https://www.yoibextigo.lamarea.com/informe/indra/que-es/indra-lider-negocio-antimigratorio-tierra-mar-aire/" target="_blank" rel="noreferrer">Indra</a> y <a href="https://www.yoibextigo.lamarea.com/informe/grifols/que-es/grifols-mantiene-algunas-sociedades-nichos-fiscales/" target="_blank" rel="noreferrer">Grifols</a>)',

    'beyond.intel.title': 'Inteligencia corporativa',
    'beyond.intel.1': 'Análisis rápido ante incidentes, evaluación de riesgos reputacionales y de seguridad y toma de decisiones operativas en entornos de emergencia',
    'beyond.intel.2': 'Monitorización de repositorios con potencial fraudulento e investigación de perfiles e infraestructuras para el análisis de amenazas',
    'beyond.intel.3': 'Aplicación de medidas de protección y OPSEC para blindar la identidad y el entorno al investigar actores de riesgo',
    'beyond.intel.4': 'Diseño de flujos semiautomatizados para el estudio de temáticas, detección de ruido analítico, análisis de sentimiento y establecimiento de alertas tempranas',

    'beyond.forensics.title': 'Informática forense y peritaje',
    'beyond.forensics.1': 'Realización de análisis técnicos reproducibles que aporten validez legal en procesos judiciales garantizando la cadena de custodia',
    'beyond.forensics.2': 'Adquisición y preservación de evidencias digitales volátiles en contenido web y multimedia, como publicaciones de redes sociales',
    'beyond.forensics.3': 'Análisis técnico para verificar la autenticidad de perfiles o contenidos, auditoría de ficheros manipulados y trazabilidad cronológica (determinar desde cuándo existe un contenido y cuál fue su fecha real de publicación)',
    'beyond.forensics.4': 'Elaboración de informes técnicos completos, claros, visuales y accesibles',

    'beyond.teaching.title': 'Docencia y formación',
    'beyond.teaching.1': 'Acompañamiento técnico en el aprendizaje guiado de herramientas para el periodismo de datos, verificación e investigación digital',
    'beyond.teaching.copy': '<strong>Eventos destacados:</strong> Ponencia sobre el impacto de narrativas desinformativas en el sector primario (<a href="https://uagn.es/dialogo-agrario-2024-la-informacion-desinformada-en-agroalimentacion/" target="_blank" rel="noreferrer">UAGN</a>, 2025); Formación de procesos de verificación política en una redacción (El País, 2024); Clases de periodismo de datos, verificación política y cobertura electoral (<a href="https://maldita.es/nosotros/20220831/ultimas-plazas-master-maldita-urjc/" target="_blank" rel="noreferrer">Máster URJC/</a><a href="http://Maldita.es" target="_blank" rel="noreferrer">Maldita.es</a>, 2022-2023)',
  },

  en: {
    'page.title.index': 'Jose Molina — Data journalist',
    'page.title.trabajo': 'Work — Jose Molina',

    'nav.aria': 'Main',
    'nav.bio': 'About & contact',
    'nav.work': 'Work',

    'hero.subtitle': 'Data journalist · Digital investigation',

    'bio.1': 'Over the last few years I\'ve focused on the analysis of political news, disinformation on social media and the tracing of digital footprints through open sources (OSINT).',
    'bio.2': 'I work to prevent and counter deception, fraud and manipulation by analysing their narratives, attributing the origin of these threats and designing strategies to neutralise them.',
    'bio.3': 'I\'m based in Spain and open to freelance projects.',

    'skills.heading': 'Skills:',
    'skills.1': 'Build data-driven stories with care for writing and narrative and visual design',
    'skills.2': 'Handle large volumes of information: acquisition, inspection, cleaning and visualisation',
    'skills.3': 'Verify through digital, documentary and human sources',
    'skills.4': 'Fast response to incidents in crisis environments',

    'contact.heading': 'Get in touch:',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.message': 'What\'s the project or investigation about?',
    'contact.submit': 'Send message',

    'view.journalism': 'Some journalistic pieces',
    'view.other': 'Other things',
    'view.switch.aria': 'Switch work view',

    'filter.all': 'All',
    'filter.desinfo': 'Disinformation',
    'filter.datos': 'Data',
    'filter.verificacion': 'Verification',
    'filter.contexto': 'Context',

    'card.expand': 'Expand',
    'card.collapse': 'Collapse',
    'card.read': 'Read more →',
    'card.article': 'Article',

    'cat.datos': 'Data',
    'cat.desinfo': 'Disinformation',
    'cat.verificacion': 'Verification',
    'cat.contexto': 'Context',

    'months': ['', 'January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'],

    'timeline.error': 'Error loading articles. Please reload the page.',

    'beyond.fact-check.title': 'Fact-checking for reporting or documentaries',
    'beyond.fact-check.1': 'Thorough review of technical documentation and direct engagement with the sources involved',
    'beyond.fact-check.2': 'Content verification using public records, press archives and OSINT tools',
    'beyond.fact-check.3': 'Ability to work within production workflows and strict deadlines for press and documentary production',
    'beyond.fact-check.copy': '<strong>Featured projects:</strong> <a href="https://premioggm.org/trabajo/edicion/2026/audio/se-llamaba-como-yo/" target="_blank" rel="noreferrer">De eso no se habla (T3): Se llamaba como yo</a> (EITB Media, 2025 – research and verification in production); <a href="https://www.netflix.com/es/title/81275696" target="_blank" rel="noreferrer">800 metros</a> (Netflix, 2022 – case summary analysis, verdict and individual victim count); Yo Ibextigo (La Marea, 2019–2020 – corporate information verification for <a href="https://www.yoibextigo.lamarea.com/informe/tecnicas-reunidas/que-es/dossier-tecnicas-reunidas-negocios-en-paises-dictatoriales-y-escasa-rentabilidad/" target="_blank" rel="noreferrer">Técnicas Reunidas</a>, <a href="https://www.yoibextigo.lamarea.com/informe/indra/que-es/indra-lider-negocio-antimigratorio-tierra-mar-aire/" target="_blank" rel="noreferrer">Indra</a> and <a href="https://www.yoibextigo.lamarea.com/informe/grifols/que-es/grifols-mantiene-algunas-sociedades-nichos-fiscales/" target="_blank" rel="noreferrer">Grifols</a>)',

    'beyond.intel.title': 'Corporate intelligence',
    'beyond.intel.1': 'Rapid incident analysis, reputational and security risk assessment, and operational decision-making in emergency environments',
    'beyond.intel.2': 'Monitoring of potentially fraudulent repositories and investigation of profiles and infrastructure for threat analysis',
    'beyond.intel.3': 'Application of protective measures and OPSEC to secure identity and environment when investigating threat actors',
    'beyond.intel.4': 'Design of semi-automated workflows for topic analysis, detection of analytical noise, sentiment analysis and early warning systems',

    'beyond.forensics.title': 'Digital forensics and expert testimony',
    'beyond.forensics.1': 'Conducting reproducible technical analyses that provide legal validity in judicial proceedings while maintaining the chain of custody',
    'beyond.forensics.2': 'Acquisition and preservation of volatile digital evidence in web and multimedia content, such as social media posts',
    'beyond.forensics.3': 'Technical analysis to verify the authenticity of profiles or content, audit of manipulated files and chronological traceability (establishing when content first appeared and its actual publication date)',
    'beyond.forensics.4': 'Preparation of comprehensive, clear, visual and accessible technical reports',

    'beyond.teaching.title': 'Teaching and training',
    'beyond.teaching.1': 'Technical guidance in the hands-on learning of tools for data journalism, verification and digital investigation',
    'beyond.teaching.copy': '<strong>Featured events:</strong> Talk on the impact of disinformation narratives on the agricultural sector (<a href="https://uagn.es/dialogo-agrario-2024-la-informacion-desinformada-en-agroalimentacion/" target="_blank" rel="noreferrer">UAGN</a>, 2025); Training in political fact-checking processes in a newsroom (El País, 2024); Data journalism, political verification and electoral coverage classes (<a href="https://maldita.es/nosotros/20220831/ultimas-plazas-master-maldita-urjc/" target="_blank" rel="noreferrer">Máster URJC/</a><a href="http://Maldita.es" target="_blank" rel="noreferrer">Maldita.es</a>, 2022–2023)',
  }
};

function getLang() {
  return localStorage.getItem('lang') || 'es';
}

function t(key) {
  const lang = getLang();
  const dict = translations[lang];
  if (dict && dict[key] !== undefined) return dict[key];
  if (translations.es[key] !== undefined) return translations.es[key];
  return key;
}

function applyTranslations() {
  const lang = getLang();
  const dict = translations[lang] || translations.es;

  document.documentElement.lang = lang;

  const titleKey = document.body && document.body.dataset.i18nTitle;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const currentLang = lang;
    langBtn.innerHTML = `<span class="lang-option ${currentLang === 'es' ? 'active' : ''}">ES</span><span class="lang-separator">|</span><span class="lang-option ${currentLang === 'en' ? 'active' : ''}">EN</span>`;
  }
}

function toggleLang() {
  const next = getLang() === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', next);
  applyTranslations();
  if (typeof renderTimeline === 'function') {
    renderTimeline();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);
});
