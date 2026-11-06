import { Project, Service, LabItem, ChecklistItem } from './types';

import heroAbstract from './assets/images/hero_abstract_1783335007375.jpg';
import heroEditorial from './assets/images/hero_warm_editorial_1783342891864.jpg';
import founderPortrait from './assets/images/EBELE NWEJE.jpeg';
import omaPortrait from './assets/images/OMA MARKET IMAGE.jpeg';
import omaFullLength from './assets/images/AI MODEL.jpeg';
import linksPharmacyPortrait from './assets/images/pharm_jude.jpg';
import ebookPublishingMockup from './assets/images/JOB SEEKER TO HIRED.52.47.jpeg';
import japaCover from './assets/images/“JAPA” ACROSS THE SAHARA DESERT cover.jpeg';

import omaWarrior from './assets/images/oma_warrior_1783856000926.jpg';
import omaSilkShirt from './assets/images/oma_silk_shirt_1783856013803.jpg';
import omaCloseUp from './assets/images/oma_close_up_1783856024848.jpg';
import omaWrapDress from './assets/images/oma_wrap_dress_1783856039272.jpg';
import omaYacht from './assets/images/oma_yacht_1783856052545.jpg';
import omaWinter from './assets/images/oma_winter_1783856071007.jpg';
import omaLake from './assets/images/oma_lake_1783856083667.jpg';
import omaKayak from './assets/images/oma_kayak_1783856094470.jpg';
import omaJetski from './assets/images/oma_jetski_1783856105268.jpg';
import omaBlueCorset from './assets/images/oma_blue_corset_1783856116671.jpg';

// User uploaded high-fidelity assets for Oma
import omaValkyrie from './assets/images/Oma valkyrie.jpeg';
import omaFantasyWarrior from './assets/images/Oma fantasy warrior.jpeg';
import omaBurgundySnow from './assets/images/Oma burgundy snow.jpeg';
import omaCobalt from './assets/images/Oma cobalt.jpeg';
import omaFjord from './assets/images/Oma fjord.jpeg';
import omaJetSki from './assets/images/Oma Jet Ski.jpeg';
import omaKayaking from './assets/images/Oma kayaking.jpeg';
import omaYatchPartey from './assets/images/Oma yatch partey.jpeg';
import omaWhiteDressBeach from './assets/images/Oma white dress beach.jpeg';
import oma34Facial from './assets/images/Oma 34 facial.png';
import omaFacePackGrid from './assets/images/Oma_FacePack_V1_Grid.jpg';
import omaFaceGrid2 from './assets/images/Oma face grid 2.png';
import omaReady from './assets/images/Oma ready.jpeg';
import omaHavingDrink from './assets/images/Oma having a drink.jpeg';
import omaLacyBurgundyPosing from './assets/images/Oma in lacy burgundy posing.jpeg';
import omaInWhiteWalking from './assets/images/Oma in white, walking.jpeg';
import omaFlagshipImage from './assets/images/Oma flagship image.jpeg';
import turquoiseFantasyModel from './assets/images/Torquoise fantasy model.jpeg';
import turquoiseRunway1 from './assets/images/Torquoise runway 1.jpeg';
import pinkRunway from './assets/images/Pink runway.jpeg';
import manuscriptHistory from './assets/images/Manuscript history Japa.png';
import ebookClientProjectCard from './assets/images/ebook_client_project_card.png';
import hiringGuideSampleCard from './assets/images/hiring_guide_sample_card.png';

export const HERO_ABSTRACT_PATH = heroAbstract;
export const HERO_EDITORIAL_PATH = heroEditorial;
export const FOUNDER_PORTRAIT_PATH = founderPortrait;
export const OMA_PORTRAIT_PATH = omaPortrait;
export const OMA_FULL_LENGTH_PATH = omaFullLength;
export const OMA_FACEPACK_GRID_PATH = omaFacePackGrid;
export const OMA_FACE_GRID_2_PATH = omaFaceGrid2;
export const OMA_READY_PATH = omaReady;
export const OMA_HAVING_DRINK_PATH = omaHavingDrink;
export const OMA_LACY_BURGUNDY_POSING_PATH = omaLacyBurgundyPosing;
export const OMA_IN_WHITE_WALKING_PATH = omaInWhiteWalking;
export const OMA_FLAGSHIP_PATH = omaFlagshipImage;
export const TURQUOISE_FANTASY_MODEL_PATH = turquoiseFantasyModel;
export const TURQUOISE_RUNWAY_1_PATH = turquoiseRunway1;
export const PINK_RUNWAY_PATH = pinkRunway;
export const LINKS_PHARMACY_PORTRAIT_PATH = linksPharmacyPortrait;
export const EBOOK_PUBLISHING_MOCKUP_PATH = ebookPublishingMockup;
export const JAPA_COVER_PATH = japaCover;
export const MANUSCRIPT_HISTORY_PATH = manuscriptHistory;
export const EBOOK_CLIENT_PROJECT_CARD_PATH = ebookClientProjectCard;
export const HIRING_GUIDE_SAMPLE_CARD_PATH = hiringGuideSampleCard;

export const SERVICES_DATA: Service[] = [
  {
    id: 'publish-package',
    title: 'Publish & Package',
    description: 'We turn your manuscript, course concept, or raw knowledge into fully formatted, sellable, high-quality digital products.',
    details: [
      'eBook formatting & publishing support (ePub, PDF, Mobi)',
      'Digital cover design & product packaging',
      'Course structuring, scripting, & workbook layout',
      'Selar & Amazon KDP store setup and product listings',
      'Lead magnet design & resource guide creation'
    ]
  },
  {
    id: 'create',
    title: 'Create',
    description: 'We develop consistent digital assets and AI-enhanced character personas to breathe visual life into your stories and content campaigns.',
    details: [
      'AI character development & visual consistency models',
      'Virtual influencer concept design & worldbuilding',
      'Custom visual storytelling graphics & creative assets',
      'Brand style boards and aesthetic alignment assets'
    ]
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'We design the digital launching pads and brand identities that represent your work with editorial elegance and drive sales.',
    details: [
      'Sleek landing page & conversion-focused website design',
      'Brand development & aesthetic systems (typography, palette)',
      'Digital presence development & launch assets',
      'High-impact lead generation opt-in pages'
    ],
    isNew: true
  }
];

export const WORK_DATA: Project[] = [
  {
    id: 'ebook-publishing',
    title: 'Premium eBook Publishing Project',
    type: 'publishing',
    overview: 'An expert with a finished manuscript needed support formatting, designing, and launching an eBook that stood out on major self-publishing platforms.',
    clientNeeds: 'A complete end-to-end publishing pipeline that handles interior styling, custom typography, professional book covers, and platform integration without technical frustration.',
    delivered: [
      'Complete typography & interior book formatting for mobile and e-readers',
      'Bespoke digital cover art styled for maximum readability on small displays',
      'Integration and product listings configured on Amazon KDP and Selar',
      'Optimized pricing strategy and description layout for high conversions'
    ],
    quote: "The publishing support from Phoenix Creative Labs was seamless. They took my Google Doc and turned it into a professionally formatted eBook live on Selar and Amazon in less than two weeks. I'm now making daily sales.",
    author: "Chika D., MPH",
    role: "Expert Educator & Author",
    image: JAPA_COVER_PATH
  },
  {
    id: 'interactive-course-workbook',
    title: 'The Modern Executive Course & Workbook Suite',
    type: 'publishing',
    overview: 'A corporate consultant needed to package their signature leadership training framework into a premium interactive digital textbook and a companion Selar course catalog.',
    clientNeeds: 'A high-end editorial digital design that felt professional and prestigious, paired with robust interactive PDF worksheets and automatic delivery setups.',
    delivered: [
      'Editorial-grade page layouts and interactive PDF form fields for self-reflection',
      'Stunning golden and slate style system aligned with luxury publishing standards',
      'Configured automated email sequence and Selar payment gateways',
      'Step-by-step digital course onboarding guidelines for executives'
    ],
    quote: "Phoenix Creative Labs didn't just format my materials — they elevated my entire training curriculum into a premium brand experience. My students are raving about the workbook design.",
    author: "Osagie Alonge",
    role: "Leadership Consultant & Executive Coach",
    image: HERO_ABSTRACT_PATH
  },
  {
    id: 'creative-harvest-anthology',
    title: 'Professional eBook Editing & Publishing Project',
    type: 'publishing',
    overview: 'A comprehensive design, editing, and technical layout project for the bestselling career-advancement guide, "FROM JOB SEEKER TO HIRED". We oversaw the full production pipeline to translate the high-impact career blueprint into a beautiful physical and digital reality.',
    clientNeeds: 'The author required professional editorial design, advanced typographic formatting for complex checklists, and seamless file generation for digital ePub formats alongside physical paperback and hardcover editions.',
    delivered: [
      'Premium cover design configured dynamically for digital thumbnail formats, paperback spine wrap, and dust-jacket hardcover layout',
      'Meticulous interior typesetting featuring elegant drop caps, custom tables, action-oriented checklists, and modern layout design',
      'Fully validated, reflowable ePub formatting for Kindle and Apple Books with interactive cross-linked chapters',
      'High-resolution, prepress-calibrated PDF files tailored specifically for major global print-on-demand and offset distribution systems'
    ],
    quote: "Phoenix Creative Labs didn't just design a book; they created an experience. 'FROM JOB SEEKER TO HIRED' looks absolutely gorgeous in hands and on screens, from the eBook to the paperback and premium hardcover versions.",
    author: "Ginika I.",
    role: "Author & Senior Talent Acquisition Consultant",
    image: EBOOK_PUBLISHING_MOCKUP_PATH
  },
  {
    id: 'oma-character',
    title: 'Oma — AI Character Development',
    type: 'character',
    overview: 'A digital content creator wanted to establish a consistent virtual brand ambassador and AI character to run educational content campaigns.',
    clientNeeds: 'An AI-powered character persona with a distinct digital identity, consistent expressions, clothing styles, and rich backstories to run high-engagement campaigns.',
    delivered: [
      'Visual model consistency for various settings and moods',
      'Full visual storytelling assets and lifestyle digital renders',
      'Persona development, core voice parameters, and backstory framework',
      'Creative asset toolkit for ongoing social media publishing'
    ],
    quote: "Oma has completely transformed how I engage my community. Having a consistent, high-fidelity digital persona gives us an infinite creative runway for visual campaigns and branding.",
    author: "Kelechi O.",
    role: "Director of Digital Strategy",
    image: OMA_PORTRAIT_PATH
  },
  {
    id: 'oma-lifestyle',
    title: 'Oma — Full-Length Lifestyle Series',
    type: 'character',
    overview: 'Expanding Oma’s brand universe, the client requested a high-fidelity full-length lifestyle and editorial fashion asset library showing full posture and clothing layouts.',
    clientNeeds: 'A set of head-to-toe assets showing full outfit composition, footwear alignment, and body posture models while retaining 100% face and features consistency.',
    delivered: [
      'Full-body posture mapping & custom apparel styling alignment',
      'Realistic material renders including fabric textures and leather detailing',
      'Unified high-end studio lighting using deep emerald and soft gold environments',
      'High-resolution multi-aspect export optimized for websites and print assets'
    ],
    quote: "Seeing Oma rendered beautifully in a full-length high-fashion posture gave us the exact premium aesthetic we needed for our launch campaign. Absolutely breathtaking detail.",
    author: "Kelechi O.",
    role: "Director of Digital Strategy",
    image: OMA_FULL_LENGTH_PATH
  },
  {
    id: 'links-pharmacist',
    title: 'Pharm. Jude — Virtual Pharmacist for Links Pharmacy',
    type: 'character',
    overview: 'Created a custom, highly professional male virtual pharmacist persona, Pharm. Jude, designed to act as the digital face of Links Pharmacy. He provides friendly, accessible healthcare tips and guides patient wellness campaigns across their digital channels.',
    clientNeeds: 'A trustworthy, professional-looking virtual pharmacist with a high-fidelity digital presence, consistent branding elements (such as lab coat details, name tag, and glasses-optional setups), and clean pharmacy background aesthetics.',
    delivered: [
      'Engineered deep facial and professional posture consistency across 10+ medical consultation scenes',
      'Curated a clean clinical aesthetic incorporating a branded lab coat, formal tie, and an authentic Links Pharmacy background layout',
      'Optimized lighting and color balance to match a bright, welcoming, trust-inducing pharmacy environment',
      'Delivered high-resolution social-ready assets for daily wellness tips and digital advisory campaigns'
    ],
    quote: "Phoenix Creative Labs successfully brought Pharm. Jude to life with incredible realism. Having a consistent virtual pharmacist as our brand ambassador has boosted our digital engagement and built trust with our patients.",
    author: "Pharm. Kingsley O., PharmD",
    role: "Managing Director, Links Pharmacy",
    image: LINKS_PHARMACY_PORTRAIT_PATH
  }
];

export const THE_LAB_DATA: LabItem[] = [
  {
    id: 'oma-vault',
    title: 'Oma Character Vault',
    description: 'Our first flagship AI character development. Explore the prompt structures, facial coherence maps, and aesthetic guidelines we engineered for Oma.',
    badge: 'Character Vault',
    date: 'June 2026',
    details: 'The Oma project showcases our ability to bridge raw AI generation with professional art direction. We mapped facial consistency parameters across 12 expression matrices and developed custom lighting styles in warm golds and deep emerald tones to maintain a luxury, high-end editorial feel.',
    steps: [
      {
        id: 'ov-step-1',
        title: '01 | Face Grid Mapping',
        description: 'Mapping the custom 3D facial node structures to retain 100% facial features consistency and likeness across various dynamic angles.',
        defaultImage: OMA_FACEPACK_GRID_PATH
      },
      {
        id: 'ov-step-2',
        title: '02 | Stylistic Seeds & Prompts',
        description: 'Compiling specific negative prompts and seed matrices for consistent luxurious gold/emerald fashion styles and backgrounds.',
        defaultImage: OMA_FLAGSHIP_PATH
      },
      {
        id: 'ov-step-3',
        title: '03 | Expression Matrices',
        description: 'Constructing dynamic facial expression profiles (warm smile, reflective look, professional poise) for high-engagement social branding.',
        defaultImage: OMA_READY_PATH
      }
    ],
    gallery: [
      {
        id: 'og-1',
        title: 'Fantasy Valkyrie Armor',
        image: omaValkyrie,
        tag: 'Editorial Fantasy',
        prompt: 'Oma with long burgundy wavy braids wearing detailed gold and leather Valkyrie warrior armor. Deep moody, cinematic fantasy lighting.'
      },
      {
        id: 'og-2',
        title: 'Fantasy Warrior Armor',
        image: omaFantasyWarrior,
        tag: 'Editorial Fantasy',
        prompt: 'Oma wearing detailed medieval leather and gold fantasy warrior armor. Deep moody, cinematic lighting.'
      },
      {
        id: 'og-3',
        title: '3/4 Facial Coherence Map',
        image: oma34Facial,
        tag: 'Beauty & Coherence',
        prompt: 'High-resolution 3/4 beauty portrait of Oma, showcasing flawless facial consistency and symmetry with rich burgundy curls framing her face.'
      },
      {
        id: 'og-4',
        title: 'Golden Hour Beach Walk',
        image: omaWhiteDressBeach,
        tag: 'Resort Lookbook',
        prompt: 'Oma wearing a breathtaking, flowing white dress walking along a tropical beach during a golden hour sunset.'
      },
      {
        id: 'og-5',
        title: 'Luxury Yacht Party',
        image: omaYatchPartey,
        tag: 'Lifestyle Editorial',
        prompt: 'Smiling Oma holding a glass of white wine on a luxury yacht, wearing a plunging gold silk wrap dress and gold drop earrings.'
      },
      {
        id: 'og-6',
        title: 'Snowy Alpine Winter',
        image: omaBurgundySnow,
        tag: 'Seasonal Editorial',
        prompt: 'Outdoor portrait of Oma in a snowy landscape, wearing a long deep burgundy winter coat with a metallic gold belt.'
      },
      {
        id: 'og-7',
        title: 'Serene Sunset Fjord',
        image: omaFjord,
        tag: 'Outdoor Landscape',
        prompt: 'Oma standing near a calm Norwegian fjord, wearing an oversized dark green knit cable sweater under a warm sunset glow.'
      },
      {
        id: 'og-8',
        title: 'Crystal Kayak Expedition',
        image: omaKayaking,
        tag: 'Active Lifestyle',
        prompt: 'Oma sitting in a transparent crystal kayak on a pristine clear lake, wearing athletic wear with towering mountains in the background.'
      },
      {
        id: 'og-9',
        title: 'Golden Hour Jet Ski',
        image: omaJetSki,
        tag: 'Action Portrait',
        prompt: 'Joyful photo of Oma riding a jet ski at golden hour, wearing a deep forest green bikini, laughing and splashing water.'
      },
      {
        id: 'og-10',
        title: 'Vibrant Cobalt Blue Corset',
        image: omaCobalt,
        tag: 'Studio Fashion',
        prompt: 'High-contrast studio fashion portrait of Oma wearing a cobalt blue structured corset and a thick gold collar necklace.'
      }
    ]
  },
  {
    id: 'interactive-storytelling',
    title: 'Narrative-Led Micro-Landings',
    description: 'An experimental web layout built around a single scroll action where text, typography, and imagery morph in unison.',
    badge: 'Experiments',
    date: 'May 2026',
    details: 'Testing the limits of single-screen narrative progression. Utilizing React Motion to trigger layout shifts that feel like turning the page of a high-end physical editorial magazine.',
    steps: [
      {
        id: 'is-step-1',
        title: '01 | Scroll-Linked Grid Layouts',
        description: 'Configuring precise, physics-based gesture inputs and touch-friendly layouts for fluid scaling across screen form-factors.',
        defaultImage: HERO_ABSTRACT_PATH
      },
      {
        id: 'is-step-2',
        title: '02 | High-Contrast Typography Pairing',
        description: 'Styling high-end Space Grotesk display headings against roomy Inter body elements for maximum visual contrast and luxury feel.',
        defaultImage: HERO_EDITORIAL_PATH
      },
      {
        id: 'is-step-3',
        title: '03 | Animation Performance Optimization',
        description: 'Optimizing Framer Motion layout animations and component transitions for high-performance, butter-smooth page morphs.',
        defaultImage: HERO_ABSTRACT_PATH
      }
    ]
  },
  {
    id: 'behind-the-build-01',
    title: 'Publishing on Selar vs. Amazon KDP',
    description: 'A deep dive into fee structures, formatting differences, and payment gates for creators across emerging markets.',
    badge: 'Behind the Build',
    date: 'April 2026',
    details: 'While Amazon KDP offers organic search visibility, Selar excels at immediate localized payment options (Naira, GHS, KES, USD). We outline why a hybrid approach is the gold standard for African authors and experts.',
    steps: [
      {
        id: 'bb-step-1',
        title: '01 | Multi-Device Reader Formatting',
        description: 'Meticulously engineering eBook layout flows for smartphones, tablets, and Kindle readers, complete with an intensive editorial revision cycle consisting of over 50 adjustments.',
        defaultImage: MANUSCRIPT_HISTORY_PATH
      },
      {
        id: 'bb-step-2',
        title: '02 | Full eBook Publishing & Client Success',
        description: 'Transforming rough drafts and tentative outlines into polished multi-platform publications with custom editorial styling, cover direction, and high-fidelity 3D mockups.',
        defaultImage: EBOOK_CLIENT_PROJECT_CARD_PATH
      },
      {
        id: 'bb-step-3',
        title: '03 | High-Value Remote Hiring Lead Magnet',
        description: 'Architecting actionable sample lead magnets like our "Hiring Nigerian Remote Talent" guide—designed to filter candidate skills thoroughly before the interview stage.',
        defaultImage: HIRING_GUIDE_SAMPLE_CARD_PATH
      }
    ]
  },
  {
    id: 'creative-notes-01',
    title: 'The "One Idea, Five Forms" Principle',
    description: 'How we advise clients to split a single manuscript into an eBook, a lead magnet, a checklist, a character series, and a 3-page site.',
    badge: 'Creative Notes',
    date: 'March 2026',
    details: `Do not publish and go silent.
One book, one course, one idea, can show up in more than one place. A manuscript is not just a book. It is also an excerpt for a newsletter, a quote for social media, a chapter breakdown for a workbook, a hook for a sales page. At Phoenix Creative Labs, we treat every finished piece of work as a starting point, not a finish line.`,
    steps: [
      {
        id: 'cn-step-1',
        title: '01 | Modular Manuscript Decomposition',
        description: 'Deconstructing a full-length book manuscript into high-value micro-segments tailored for bite-sized modern reader attention.',
        defaultImage: JAPA_COVER_PATH
      },
      {
        id: 'cn-step-2',
        title: '02 | Interactive Lead Magnet Structuring',
        description: 'Designing actionable digital checklists and mini-templates to drive fast subscriber growth and capture valuable buyer leads.',
        defaultImage: EBOOK_PUBLISHING_MOCKUP_PATH
      },
      {
        id: 'cn-step-3',
        title: '03 | Ultra-Focused Landing Page Funnel',
        description: 'Drafting high-conversion single-goal sales landing pages optimized to direct targeted social media traffic into immediate purchases.',
        defaultImage: HERO_EDITORIAL_PATH
      }
    ]
  }
];

export const CHECKLIST_DATA: ChecklistItem[] = [
  // Section 1: Before You Upload
  { id: 'b1', section: 'before', text: 'Pick one clear topic and one specific reader' },
  { id: 'b2', section: 'before', text: 'Finish your manuscript in Google Docs or Word' },
  { id: 'b3', section: 'before', text: 'Insert your front cover as page 1, with a page break after it' },
  { id: 'b4', section: 'before', text: 'Export the full manuscript (cover + text) as one PDF' },
  { id: 'b5', section: 'before', text: 'Design a simple, professional cover with your title, subtitle, and author name (Canva works well)' },
  { id: 'b6', section: 'before', text: 'Save the cover separately as a JPG or PNG' },
  { id: 'b7', section: 'before', text: 'Create your Selar account (and Amazon KDP account, if using both)' },
  
  // Section 2: Uploading on Selar
  { id: 's1', section: 'selar', text: 'Log into your Selar dashboard' },
  { id: 's2', section: 'selar', text: 'Click Create Product → Digital Product' },
  { id: 's3', section: 'selar', text: 'Add your title and a clear product description' },
  { id: 's4', section: 'selar', text: 'Upload your PDF manuscript and cover image' },
  { id: 's5', section: 'selar', text: 'Set your price in Naira or Dollars' },
  { id: 's6', section: 'selar', text: 'Enable payment options and click Publish' },
  
  // Section 3: Uploading on Amazon KDP
  { id: 'a1', section: 'amazon', text: 'Log into Amazon KDP → Create → Kindle eBook' },
  { id: 'a2', section: 'amazon', text: 'Add title, subtitle, and author name' },
  { id: 'a3', section: 'amazon', text: 'Write your book description and choose 7 keywords + 2 categories' },
  { id: 'a4', section: 'amazon', text: 'Upload your manuscript and cover (recommended cover size: 1600 × 2560px)' },
  { id: 'a5', section: 'amazon', text: 'Preview using the KDP Previewer before publishing' },
  { id: 'a6', section: 'amazon', text: 'Set your price and choose your royalty option' },
  { id: 'a7', section: 'amazon', text: 'Click Publish' },
  
  // Section 4: Final Check
  { id: 'f1', section: 'final', text: 'Title is readable on a phone screen' },
  { id: 'f2', section: 'final', text: 'Cover looks clean and professional' },
  { id: 'f3', section: 'final', text: 'File opens correctly on mobile and desktop' },
  { id: 'f4', section: 'final', text: 'Price makes sense for your audience' },
  
  // Section 5: Mistakes to Avoid
  { id: 'm1', section: 'mistakes', text: 'Publishing and then going silent — no promotion, no follow-up' },
  { id: 'm2', section: 'mistakes', text: 'Using irrelevant or stuffed keywords' },
  { id: 'm3', section: 'mistakes', text: 'Picking the wrong category' },
  { id: 'm4', section: 'mistakes', text: 'Sloppy formatting, especially on mobile' },
  { id: 'm5', section: 'mistakes', text: 'A cover that looks rushed or outdated' }
];
