// Page translations. English is read from the HTML itself; French and Arabic live here.
// Each key matches a data-i18n attribute in index.html. Values may contain HTML.
const translations = {
  fr: {
    skip: 'Aller au contenu',
    'brand.role': 'Ingénieure Full Stack',
    'nav.menu': 'Ouvrir le menu',
    'nav.work': 'Projets',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.cta': 'Me contacter <span>↗</span>',
    'hero.availability': '<span class="pulse"></span>Basée au Maroc · Ouverte aux projets qui ont du sens',
    'hero.eyebrow': 'Ingénieure logicielle sur toute la stack',
    'hero.title': 'Des logiciels<br />solides <span>à grande échelle.</span>',
    'hero.intro': 'Je conçois et livre des produits numériques complets, en Java/Spring Boot comme en JavaScript/TypeScript avec Node.js et NestJS — des interfaces React soignées aux applications mobiles et à l’infrastructure cloud.',
    'hero.explore': 'Voir mes projets <span>↘</span>',
    'hero.scroll': 'DÉFILER POUR EXPLORER',
    'work.eyebrow': '01 / Projets sélectionnés',
    'work.title': 'Des produits pensés<br />pour la complexité du réel.',
    'work.intro': 'Une sélection de plateformes d’automatisation, de banque, de commerce et de mobilité : architecture backend, web responsive, mobile, fonctionnalités intelligentes et déploiement cloud.',
    'work.featured': '★ Projet phare',
    'kit.badge': 'AUTOMATISATION · OUTIL DÉVELOPPEUR',
    'kit.desc': 'La couche de fiabilité pour les workflows n8n en production : prévention des doublons, correspondance d’identifiants, verrous et synchronisation incrémentale, sous forme de nœud n8n, de serveur auto-hébergé et de tableau de bord.',
    'tgr.badge': 'BANQUE · APPLICATION MOBILE',
    'tgr.desc': 'Application bancaire mobile officielle de la Trésorerie Générale du Royaume : soldes, virements, bénéficiaires, RIB et relevés, 24h/24 et 7j/7.',
    'store.mobile': 'Application mobile',
    'okeyo.badge': 'COMMERCE · WEB + MOBILE',
    'okeyo.desc': 'Le shopping par la vidéo, sur le web et sur mobile multiplateforme.',
    'pippy.badge': 'MOBILITÉ · WEB + MOBILE',
    'pippy.desc': 'Comparaison de trajets interurbains en bus, train et covoiturage.',
    'carnet.pill': '✦ ANALYSES VÉHICULES PAR IA',
    'carnet.desc': 'Place de marché automobile avec une recherche intelligente.',
    'about.eyebrow': '02 / Parcours & expérience',
    'about.title': 'L’ingénierie avec<br /><span>polyvalence et rigueur.</span>',
    'about.intro': 'J’évolue avec aisance entre architecture et implémentation, en gardant en vue le produit, l’utilisateur et la maintenabilité à long terme.',
    'about.lead': 'Je suis <strong>Nouhaila Chkhonty</strong>, ingénieure logicielle Full Stack, passionnée par la transformation de systèmes complexes en produits fiables et intuitifs.',
    'about.now': '2026 — AUJOURD’HUI',
    'about.job': 'Développeuse Full Stack Java',
    'about.jobDesc': 'Conception de systèmes d’entreprise internes et orientés clients, dont la TGR : services Spring Boot, intégrations, interfaces Angular, CI/CD et infrastructure cloud.',
    'about.project': 'PROJET',
    'about.carnetPlace': 'Belgique · Web',
    'about.carnetDesc': 'Conception de services backend et d’API REST pour une place de marché automobile, avec l’intégration du frontend et d’un assistant IA pour des analyses de véhicules plus pertinentes.',
    'about.pippyPlace': 'Casablanca · Web + Mobile',
    'about.pippyDesc': 'Développement d’une expérience de transport multiplateforme pour comparer les trajets interurbains en bus, train et covoiturage.',
    'edu.label': 'FORMATION',
    'edu.degree': 'Master en DevOps & Cloud Computing',
    'edu.distinction': 'MENTION',
    'edu.honours': 'Très bien',
    'edu.university': 'UNIVERSITÉ',
    'skills.eyebrow': '03 / Boîte à outils technique',
    'skills.title': 'Conçu pour livrer,<br />pas seulement prototyper.',
    'skills.intro': 'Une boîte à outils orientée production, sur les écosystèmes Java et JavaScript/TypeScript, couvrant tout le parcours : modèle de données, API, interface, déploiement, monitoring et itération.',
    'skills.backend': 'Backend & API',
    'skills.backendDesc': 'Backends orientés services, intégrations sécurisées et API pensées pour évoluer.',
    'skills.frontend': 'Frontend & Mobile',
    'skills.frontendDesc': 'Interfaces responsives et produits mobiles multiplateformes, avec une forte attention à l’UX.',
    'skills.cloud': 'Cloud & DevOps',
    'skills.cloudDesc': 'Pipelines de livraison fiables, plateformes de conteneurs et environnements cloud observables.',
    'skills.data': 'Données & IA',
    'skills.dataDesc': 'Des fondations de données solides et des fonctionnalités intelligentes intégrées à de vrais produits.',
    'principle.1': 'Scalable dès la conception',
    'principle.2': 'La clarté avant l’astuce',
    'principle.3': 'Assumer le résultat',
    'principle.4': 'Toujours apprendre',
    'contact.eyebrow': '04 / Échangeons',
    'contact.title': 'Un problème complexe<br />à résoudre ?',
    'contact.text': 'Je suis toujours intéressée par les produits réfléchis, les défis d’ingénierie ambitieux et les belles équipes.',
    'footer.role': 'Ingénieure logicielle Full Stack · Maroc',
    'footer.built': 'Conçu avec soin',
  },
  ar: {
    skip: 'الانتقال إلى المحتوى',
    'brand.role': 'مهندسة Full Stack',
    'nav.menu': 'فتح القائمة',
    'nav.work': 'الأعمال',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.cta': 'لنتحدث <span>↖</span>',
    'hero.availability': '<span class="pulse"></span>مقيمة في المغرب · منفتحة على المشاريع الهادفة',
    'hero.eyebrow': 'مهندسة برمجيات Full Stack',
    'hero.title': 'برمجيات تُبنى<br />لتبقى <span>قوية مع النمو.</span>',
    'hero.intro': 'أصمم وأطلق منتجات رقمية متكاملة باستخدام Java/Spring Boot وJavaScript/TypeScript مع Node.js وNestJS، من واجهات React المتقنة إلى تطبيقات الهاتف والبنية التحتية السحابية.',
    'hero.explore': 'استكشف أعمالي <span>↙</span>',
    'hero.scroll': 'مرّر للاستكشاف',
    'work.eyebrow': '01 / أعمال مختارة',
    'work.title': 'منتجات مصممة<br />لتعقيدات الواقع.',
    'work.intro': 'مجموعة مختارة من منصات الأتمتة والخدمات البنكية والتجارة والتنقل، تشمل هندسة الأنظمة الخلفية والويب المتجاوب وتطبيقات الهاتف والميزات الذكية والنشر السحابي.',
    'work.featured': '★ مشروع مميز',
    'kit.badge': 'أتمتة · أداة للمطورين',
    'kit.desc': 'طبقة الموثوقية لسير عمل n8n في بيئة الإنتاج: منع التكرار، وربط المعرّفات، والأقفال، والمزامنة التدريجية، عبر عقدة n8n وخادم مستضاف ذاتيًا ولوحة تحكم.',
    'tgr.badge': 'خدمات بنكية · تطبيق هاتف',
    'tgr.desc': 'التطبيق البنكي الرسمي للخزينة العامة للمملكة: الأرصدة، والتحويلات، والمستفيدون، وبيان الهوية البنكية (RIB) والكشوفات، على مدار الساعة.',
    'store.mobile': 'تطبيق الهاتف',
    'okeyo.badge': 'تجارة · ويب + هاتف',
    'okeyo.desc': 'تسوّق قائم على الفيديو عبر الويب وتطبيقات الهاتف متعددة المنصات.',
    'pippy.badge': 'تنقّل · ويب + هاتف',
    'pippy.desc': 'مقارنة الرحلات بين المدن بالحافلة والقطار والسيارة المشتركة.',
    'carnet.pill': '✦ تحليلات ذكية للمركبات',
    'carnet.desc': 'سوق للسيارات مع بحث ذكي.',
    'about.eyebrow': '02 / نبذة وخبرات',
    'about.title': 'هندسة تجمع<br /><span>التنوع والدقة.</span>',
    'about.intro': 'أنتقل بسلاسة بين التصميم المعماري والتنفيذ، مع إبقاء المنتج والمستخدم وقابلية الصيانة على المدى الطويل في صلب اهتمامي.',
    'about.lead': 'أنا <strong>Nouhaila Chkhonty</strong>، مهندسة برمجيات Full Stack أستمتع بتحويل الأنظمة المعقدة إلى منتجات موثوقة وسهلة الاستخدام.',
    'about.now': '2026 — حاليًا',
    'about.job': 'مطوّرة Full Stack Java',
    'about.jobDesc': 'بناء أنظمة مؤسسية داخلية وموجهة للعملاء، من بينها أنظمة الخزينة العامة للمملكة (TGR)، عبر خدمات Spring Boot والتكاملات وواجهات Angular وCI/CD والبنية التحتية السحابية.',
    'about.project': 'مشروع',
    'about.carnetPlace': 'بلجيكا · ويب',
    'about.carnetDesc': 'تصميم خدمات خلفية وواجهات REST API لسوق سيارات، مع دمج ميزات الواجهة الأمامية ومساعد ذكي لتحليلات أدق للمركبات.',
    'about.pippyPlace': 'الدار البيضاء · ويب + هاتف',
    'about.pippyDesc': 'تطوير تجربة تنقل متعددة المنصات لمقارنة الرحلات بين المدن بالحافلة والقطار والسيارة المشتركة.',
    'edu.label': 'التكوين',
    'edu.degree': 'ماستر في DevOps والحوسبة السحابية',
    'edu.distinction': 'الميزة',
    'edu.honours': 'حسن جدًا',
    'edu.university': 'الجامعة',
    'skills.eyebrow': '03 / الأدوات التقنية',
    'skills.title': 'مصممة للإنجاز،<br />لا للنماذج الأولية فقط.',
    'skills.intro': 'مجموعة أدوات موجهة للإنتاج في منظومتي Java وJavaScript/TypeScript، تغطي المسار الكامل من نموذج البيانات وواجهات API إلى الواجهة والنشر والمراقبة والتحسين المستمر.',
    'skills.backend': 'الأنظمة الخلفية وواجهات API',
    'skills.backendDesc': 'أنظمة خلفية قائمة على الخدمات، وتكاملات آمنة، وواجهات API مصممة لتتطور.',
    'skills.frontend': 'الواجهات وتطبيقات الهاتف',
    'skills.frontendDesc': 'واجهات متجاوبة ومنتجات هاتف متعددة المنصات مع تركيز قوي على تجربة المستخدم.',
    'skills.cloud': 'السحابة وDevOps',
    'skills.cloudDesc': 'مسارات تسليم موثوقة، ومنصات حاويات، وبيئات سحابية قابلة للمراقبة.',
    'skills.data': 'البيانات والذكاء الاصطناعي',
    'skills.dataDesc': 'أسس بيانات عملية وميزات ذكية مدمجة في منتجات حقيقية.',
    'principle.1': 'قابلية التوسع منذ التصميم',
    'principle.2': 'الوضوح قبل التعقيد',
    'principle.3': 'تحمّل مسؤولية النتيجة',
    'principle.4': 'التعلم المستمر',
    'contact.eyebrow': '04 / لنتواصل',
    'contact.title': 'لديك مشكلة<br />معقدة تحتاج إلى حل؟',
    'contact.text': 'أهتم دائمًا بالمنتجات المدروسة، وتحديات الهندسة الطموحة، والفرق الرائعة.',
    'footer.role': 'مهندسة برمجيات Full Stack · المغرب',
    'footer.built': 'صُنع بعناية',
  },
};

const meta = {
  en: { title: document.title, description: document.querySelector('meta[name="description"]')?.content ?? '' },
  fr: { title: 'Nouhaila Chkhonty — Ingénieure logicielle Full Stack', description: 'Nouhaila Chkhonty est ingénieure logicielle Full Stack et conçoit des produits web, mobiles, cloud et IA évolutifs.' },
  ar: { title: 'Nouhaila Chkhonty — مهندسة برمجيات Full Stack', description: 'Nouhaila Chkhonty مهندسة برمجيات Full Stack تبني منتجات ويب وهاتف وسحابة وذكاء اصطناعي قابلة للتوسع.' },
};

const supportedLanguages = ['en', 'fr', 'ar'];
const languageSelect = document.querySelector('[data-lang-select]');
const translatable = document.querySelectorAll('[data-i18n]');
const english = new Map();
translatable.forEach((element) => {
  if (!english.has(element.dataset.i18n)) english.set(element.dataset.i18n, element.innerHTML);
});

const setLanguage = (lang, remember = false) => {
  if (!supportedLanguages.includes(lang)) lang = 'en';
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[lang]?.[key] ?? english.get(key);
  });
  document.title = meta[lang].title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta[lang].description);
  if (languageSelect) languageSelect.value = lang;
  if (remember) {
    try { localStorage.setItem('lang', lang); } catch {}
  }
};

const preferredLanguage = () => {
  try {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (supportedLanguages.includes(fromUrl)) return fromUrl;
    const saved = localStorage.getItem('lang');
    if (supportedLanguages.includes(saved)) return saved;
  } catch {}
  const browser = (navigator.languages ?? [navigator.language]).map((code) => code.slice(0, 2));
  return browser.find((code) => supportedLanguages.includes(code)) ?? 'en';
};

languageSelect?.addEventListener('change', () => setLanguage(languageSelect.value, true));
setLanguage(preferredLanguage());
