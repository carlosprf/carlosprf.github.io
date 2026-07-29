/**
 * Traducciones al inglés para cada elemento [data-i18n] del HTML.
 * El español vive directamente en index.html (contenido por defecto, bueno para SEO).
 * main.js lee este objeto para sustituir el texto al cambiar de idioma.
 *
 * Para completar los placeholders (proyectos de IA / marketing / escritos y sus
 * skills), edita tanto el HTML (busca "PLACEHOLDER" en index.html) como las
 * claves correspondientes aquí abajo.
 */
const translations = {
  en: {
    "nav.logo": "Carlos Pérez Ródenas",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Kuala Lumpur · Madrid · Wrocław",
    "hero.name": "Carlos Pérez Ródenas",
    "hero.headline": "International Business · Artificial Intelligence · Marketing",
    "hero.lede": "From tourism operations to economic diplomacy: I've built my career connecting people, markets and ideas across three continents. Now I'm exploring how artificial intelligence can extend that same drive to connect.",
    "hero.cta.cv": "Download CV",
    "hero.cta.contact": "Get in touch",
    "hero.cta.projects": "See projects",

    "about.kicker": "About me",
    "about.title": "A path that isn't a straight line — and that's the point",
    "about.p1": "<p>I started managing group travel logistics across Europe. Then I supported passengers for an airline in Poland. After that, I coordinated international mobility programmes at my university. Today I work at the Spanish Economic and Commercial Office in Kuala Lumpur, helping Spanish and Malaysian companies find each other. On paper, these look like four different jobs. In reality, it's the same question asked in different forms: <em>how do I get two parties who don't know each other to find a reason to trust one another?</em></p>",
    "about.p2": "<p>I studied Business Administration at the University of Murcia, with an Erasmus year in Wrocław, Poland, that probably shaped how I see the world more than any single course. Since then I've worked across three continents, in sectors ranging from tourism to aviation, through public higher education, and now economic diplomacy. It was never a plan — it was following curiosity and saying yes to whatever taught me the most, fastest.</p>",
    "about.p3": "<p>I'm comfortable with ambiguity. I'd rather understand the context before proposing a solution, and I believe most business problems are, underneath, communication problems between people with different incentives. That's what draws me to artificial intelligence: not as a trend, but as a tool to scale that same translation work — between languages, between cultures, between departments, between data and decisions.</p>",

    "exp.kicker": "Track record",
    "exp.title": "Experience",

    "exp.1.date": "Jan 2026 — Present",
    "exp.1.role": "Trade & Investment Advisor",
    "exp.1.org": "Economic and Commercial Office of Spain in Kuala Lumpur · Embassy of Spain",
    "exp.1.b1": "Co-led investor outreach for \"Invest in Spain\", engaging major Malaysian corporates (TNB, PNB, Berjaya, Yinson).",
    "exp.1.b2": "Coordinated trade missions and institutional relations with the Malaysian Spanish Chamber of Commerce.",
    "exp.1.b3": "Produced market intelligence reports on key industries (halal, creative, digital commerce) and trade fairs to support Spanish exporters.",

    "exp.2.date": "Apr 2023 — Feb 2025",
    "exp.2.role": "Operations Coordinator",
    "exp.2.org": "G Adventures · Europe",
    "exp.2.b1": "Managed tour logistics and operations, with deep product and destination knowledge, including partnerships such as National Geographic and Planeterra.",
    "exp.2.b2": "Managed budgets and negotiated supplier rates to balance cost efficiency and service quality.",

    "exp.3.date": "Oct 2021 — Oct 2022",
    "exp.3.role": "Customer Success",
    "exp.3.org": "Qatar Airways · Poland",
    "exp.3.b1": "Supported passengers and resolved issues within a demanding international operations environment.",
    "exp.3.b2": "Coordinated across multiple teams to ensure continuity of service and customer experience.",

    "exp.4.date": "Oct 2020 — Jul 2021",
    "exp.4.role": "International Relations",
    "exp.4.org": "University of Murcia",
    "exp.4.b1": "Supported the formalisation of mobility agreements with foreign universities.",
    "exp.4.b2": "Led the university's International Relations Office.",
    "exp.4.b3": "Coordinated students across all mobility programmes (ISEP, ILA, Erasmus, bilateral agreements).",

    "exp.5.date": "Apr 2020 — Jul 2020",
    "exp.5.role": "Account Manager Intern",
    "exp.5.org": "Dr Brand Factory",
    "exp.5.b1": "Identified and managed local customer needs, implementing upselling strategies.",
    "exp.5.b2": "Conducted market research and product analysis.",

    "edu.title": "Education & programmes",
    "edu.1.name": "Bilingual degree in Business Administration",
    "edu.1.detail": "University of Murcia · Erasmus+ year at Uniwersytet Wrocławski (Poland)",
    "edu.2.name": "Challenges of Internationalisation",
    "edu.2.detail": "ICEX · 140 h — international strategy, digitalisation, sustainability and finance",
    "edu.3.name": "Business Internationalisation Strategy",
    "edu.3.detail": "ICEX · INFO Murcia · 75 h — one of 10 scholarships selected in the INFO–ICEX programme",
    "edu.4.name": "Explorer Entrepreneur Programme",
    "edu.4.detail": "Santander X Explorer — entrepreneurship training and mentoring",

    "projects.kicker": "Own initiative",
    "projects.title": "Projects & side projects",
    "projects.intro": "Beyond the formal role: things I've built, proposed or explored out of pure curiosity.",

    "proj.greenspot.title": "GreenSpot",
    "proj.greenspot.tags": "Hydroponics · Product concept · Santander X Explorer",
    "proj.greenspot.desc": "Designed and presented GreenSpot, a hydroponic module for autonomous home cultivation. The project was selected for the Santander X Explorer entrepreneurship programme, where I received training and mentoring to develop the idea.",

    "proj.ai.title": "[AI project — pending]",
    "proj.ai.tags": "AI · Automation · —",
    "proj.ai.desc": "Tell me about an AI experiment, tool or automation you've built — title, what it solves, what you used, and a link if it exists. Edit js/content.js to fill in this card.",

    "proj.marketing.title": "[Marketing project — pending]",
    "proj.marketing.tags": "Marketing · Brand · —",
    "proj.marketing.desc": "Any campaign, content, personal brand or marketing initiative worth highlighting? Fill it in in js/content.js.",

    "proj.writing.title": "[Book or writing — pending]",
    "proj.writing.tags": "Writing · Ideas · —",
    "proj.writing.desc": "Reserved space for a book, blog, newsletter or personal writing. Fill it in in js/content.js once you have the content.",

    "skills.kicker": "Toolkit",
    "skills.title": "Skills & tools",
    "skills.business.title": "Business & International",
    "skills.business.1": "International trade",
    "skills.business.2": "Institutional relations",
    "skills.business.3": "Market intelligence",
    "skills.business.4": "Project management",
    "skills.business.5": "Supplier negotiation",

    "skills.ai.title": "AI & Data",
    "skills.ai.1": "[fill in: AI tools]",
    "skills.ai.2": "[fill in]",
    "skills.ai.3": "[fill in]",

    "skills.marketing.title": "Marketing",
    "skills.marketing.1": "Market research",
    "skills.marketing.2": "Upselling strategy",
    "skills.marketing.3": "[fill in]",

    "skills.languages.title": "Languages",
    "skills.languages.1": "Spanish — native",
    "skills.languages.2": "English",
    "skills.languages.3": "Portuguese",

    "contact.kicker": "Let's talk",
    "contact.title": "Shall we grab a (virtual) coffee?",
    "contact.lede": "If you're thinking about Malaysia, international business, or just want to chat about how AI can change the way we work, drop me a line. I always reply.",

    "footer.text": "Carlos Pérez Ródenas · Kuala Lumpur"
  }
};
