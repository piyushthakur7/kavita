// Mock data for Kavita Kabira Wellness Clinic

export const navLinks = [
  { label: 'Home', to: '/' },
  { 
    label: 'About', 
    to: '/about',
    subLinks: [
      { label: 'Reviews', to: '/reviews' },
      { label: 'Masonry Gallery', to: '/gallery' },
      { label: 'About Me', to: '/about' },
    ]
  },
  { label: 'Programs', to: '/programs' },
  { 
    label: 'Services', 
    to: '/services',
    subLinks: [
      { label: 'Our Services', to: '/services' },
    ]
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Corporate Wellness', to: '/corporate-wellness' },
  { label: 'Media & Press', to: '/media' },
  { 
    label: 'Contact Us', 
    to: '/contact',
    subLinks: [
      { label: 'Book Appointment', to: '/contact' },
    ]
  },
];

export const heroImages = {
  primary: '/images/DSC_0146.jpeg',
  secondary: '/images/DSC_0166.jpeg',
};

export const featureCards = [
  {
    id: 'online',
    title: 'Online Counselling',
    image: '/images/online_counselling_ai.png',
    desc: "Healing doesn't require you to leave home. I offer one-on-one psychotherapy sessions online — warm, confidential, and deeply personal. Whether you are in Gurgaon, Delhi, or anywhere in India, your healing is a call away.",
  },
  {
    id: 'group',
    title: 'Individual & Group Therapy',
    image: '/images/group_therapy_ai.png',
    desc: 'Some wounds need a witness. In individual therapy, I sit with you — fully present. In group sessions, you discover that your story is not as lonely as it felt. Both are safe. Both go deep.',
  },
  {
    id: 'corporate',
    title: 'Corporate Wellness',
    image: '/images/corporate_wellness_ai.png',
    desc: "Burnout is not a character flaw — it is a nervous system in crisis. I bring evidence-based, somatic-informed wellness programs to organisations ready to build psychological safety from the inside out.",
  },
];

export const services = [
  {
    id: 'panic',
    title: 'Panic',
    tag: 'Features',
    excerpt: 'Calming techniques and CBT-based therapy to overcome panic attacks and anxiety triggers.',
    image: '/images/758da825-5a8c-4479-99a9-b58a563659fa.jpeg',
    body:
      'Panic attacks can be sudden, overwhelming and debilitating. Our specialized program combines cognitive behavioral therapy, breathing exercises and mindfulness practices to help you regain control. We work to identify triggers, build coping mechanisms, and create a personalized roadmap for sustainable recovery.',
  },
  {
    id: 'neurosis',
    title: 'Neurosis',
    tag: 'Features',
    excerpt: 'Compassionate care for chronic anxiety, obsessive thoughts and emotional distress.',
    image: '/images/79309167_10157949864282990_4055126877558276096_n (1).jpeg',
    body:
      'Neurotic patterns often manifest as persistent worry, emotional reactivity or compulsive behavior. Through evidence-based therapy and mindful awareness, we help you understand the roots of these patterns and develop healthier responses. Healing is gradual, gentle and lasting.',
  },
  {
    id: 'disturbance',
    title: 'Disturbance',
    tag: 'Features',
    excerpt: 'Treatment for emotional disturbances, mood swings and sleep difficulties.',
    image: '/images/79309167_10157949864282990_4055126877558276096_n.jpeg',
    body:
      'Emotional disturbances disrupt sleep, relationships and daily functioning. We offer a holistic blend of therapy, lifestyle coaching and trauma-informed techniques to bring stability back into your life. You deserve to feel calm, centered and in control.',
  },
];

export const psychServices = [
  {
    id: 'marriage',
    title: 'Couples & Relationship Therapy',
    excerpt: 'When love starts feeling like effort, something deeper needs attention. I work with couples using Esther Perel and Gabor Maté frameworks to restore safety, intimacy, and honest connection.',
    image: '/images/couples_therapy_ai.png',
  },
  {
    id: 'self-esteem',
    title: 'Inner Child Healing',
    excerpt: 'The patterns that exhaust you today were learned by a child trying to survive. We go back — gently — to understand and rewire them. This is the core of my clinical work.',
    image: '/images/inner_child_healing_ai.png',
  },
  {
    id: 'trauma',
    title: 'Trauma & Nervous System Work',
    excerpt: 'Trauma does not live in the mind alone — it lives in the body. Through somatic techniques, psychodrama, and art therapy, we help your nervous system learn that it is finally safe.',
    image: '/images/trauma_healing_ai.png',
  },
  {
    id: 'womens-health',
    title: "Women's Emotional Health",
    excerpt: 'Designed for women navigating identity, boundaries, grief, or transition. A space where you are not too much, not too sensitive — just human, and held.',
    image: '/images/womens_health_ai.png',
  },
  {
    id: 'young-adult',
    title: 'Young Adults & Adolescents',
    excerpt: 'The years between 16 and 30 carry enormous pressure. I offer therapy that meets young people where they are — curious, honest, and free of judgement.',
    image: '/images/young_adult_therapy_ai.png',
  },
  {
    id: 'family',
    title: 'Family Systems Therapy',
    excerpt: 'We did not choose our families. But we can choose how we relate to them. Family therapy here is about understanding patterns, not assigning blame.',
    image: '/images/family_therapy_ai.png',
  },
];

export const pricingPlans = [
  {
    id: 'silver',
    name: 'Silver',
    subtitle: 'Introductory Care Package',
    price: '₹4,200',
    featured: false,
    features: [
      'One-on-one session',
      'Initial psychological assessment',
      'Basic treatment roadmap',
      'Split-payment option available',
    ],
  },
  {
    id: 'golden',
    name: 'Golden',
    subtitle: 'Standard Care Package',
    price: '₹4,500',
    featured: true,
    features: [
      'Comprehensive consultation',
      'Personalised treatment plan',
      'Inner child & somatic assessment',
      'Follow-up roadmap',
      'Split-payment option available',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond',
    subtitle: 'Premium Care Package',
    price: '₹4,800',
    featured: false,
    features: [
      'In-depth therapeutic session',
      'Priority scheduling',
      'Extensive emotional evaluation',
      'Tailored trauma-informed interventions',
      'Split-payment option available',
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Lata Bala',
    role: 'Single Mother',
    avatar: '/images/dbeba107-08e8-44ad-affb-b32f76d06f5b.jpeg',
    quote:
      'Dr. Kavita Kabira is a renowned psychologist and mental health expert who delivers exceptional therapeutic services. As a highly skilled inner child healing specialist, Dr. Kavita Kabira brings not only depth, empathy, and expertise to her practice, but also a sense of humor and charm that fosters trust and comfort in her clients. I highly recommend Dr. Kavita Kabira to anyone seeking professional mental health therapy, emotional healing, or trauma recovery services.',
  },
  {
    id: 2,
    name: 'Preksha',
    role: 'CEO, Dentist',
    avatar: '/images/09243ea1-f278-4a1b-b31f-0c18a1baf674.jpeg',
    quote:
      'Dr. Kavita Kabira is a well-established psychologist who provides highly professional and trusted mental health services. As a skilled therapist, Dr. Kavita Kabira brings not only depth, warmth, and wisdom to her practice but also a sense of humor and charm that fosters trust and comfort with her clients. I highly recommend Dr. Kavita Kabira to any individual or organization in need of exceptional therapy and mental health services.',
  },
  {
    id: 3,
    name: 'Shalvin Joshi',
    role: 'Senior Manager',
    avatar: '/images/332bb62b-e2b6-42ba-9961-0b47cd454e2c.jpeg',
    quote:
      'Dr. Kavita Kabira is a well-established psychologist and delivers highly professional mental health services. As a skilled therapist, Dr. Kavita Kabira brings not only depth, empathy, and wisdom to her practice, but also a sense of humor and charm that invites trust and ease to her clients. I highly recommend Dr. Kavita Kabira to any individual or organization in need of quality mental health therapy and emotional healing services.',
  },
];

export const faqs = [
  {
    q: 'What Do Psychologists Do?',
    a: 'Psychologists like Dr. Kavita Kabira provide mental health therapy, emotional healing, and trauma recovery, focusing on inner child work, emotional regulation, and enhancing overall well-being.',
  },
  {
    q: 'What Are Working Conditions Like for Psychologists?',
    a: "Dr. Kavita Kabira's wellness clinic fosters a compassionate, client-centered environment, emphasizing holistic mental health care, trauma-informed therapy, and emotional healing practices.",
  },
  {
    q: 'Where Do Psychologists Typically Work?',
    a: 'Dr. Kavita Kabira operates from her wellness clinic, offering therapy, trauma healing, and mental health services both in-person and virtually.',
  },
  {
    q: 'Are There Any Accreditation or Licensing Requirements for Becoming a Psychologist?',
    a: 'Dr. Kavita Kabira is a AAHP registered psychologist with extensive training in mental health therapy, emotional healing, and trauma recovery techniques.',
  },
  {
    q: 'Are There a Lot of Job Opportunities in Psychology?',
    a: 'Mental health services, trauma healing, and therapy are growing fields, with increasing demand for psychologists like Dr. Kavita Kabira specializing in emotional healing and trauma recovery.',
  },
  {
    q: 'What Are the Benefits of Individual Counseling with Dr. Kavita Kabira?',
    a: 'Experience personalized mental health therapy, inner child healing, and emotional regulation, tailored to address trauma and improve emotional well-being.',
  },
  {
    q: 'What Are the Benefits of Corporate Counseling for Businesses?',
    a: 'Corporate counseling enhances employee well-being, reduces stress, and boosts productivity by providing support for personal and professional challenges.',
  },
];

export const stats = [
  { value: 25, suffix: '', label: 'Honorable Award' },
  { value: 32, suffix: '', label: 'Consultants' },
  { value: 95, suffix: '%', label: 'Happy Clients' },
  { value: 2059, suffix: '+', label: 'Successful Projects' },
];

export const blogPosts = [
  {
    id: 'happiness',
    category: 'Therapy',
    title: 'How to catch the happiness',
    date: 'January 13, 2023',
    updated: 'April 8, 2025',
    author: 'Kavita',
    views: '2K',
    likes: 3,
    comments: 0,
    image: '/images/DSC_0224.jpeg',
    excerpt:
      "Today, it feels like everything has changed\u2014it's either been closed, postponed, or canceled. Some states have officially shut down. You're working from home, while watching your kids and trying to maintain calm.",
    body: [
      'Happiness is a state of mind cultivated through gratitude, mindful action and meaningful connections. While circumstances ebb and flow, our inner landscape can remain stable through intentional practice.',
      'Begin each morning with three minutes of breath awareness. Notice the sensations, the rhythm, and let go of yesterday. This small ritual rewires the brain toward presence and peace.',
      'Build a daily gratitude practice. Even on difficult days, name three small joys \u2014 the warmth of tea, a kind word, sunlight on the floor. Gratitude expands what we have rather than what we lack.',
      'Finally, invest in relationships. Studies consistently show that connection is the strongest predictor of long-term wellbeing. Make the call, send the message, share a meal.',
    ],
  },
  {
    id: 'quarantine',
    category: 'Articles',
    title: '10 Quarantine Activities That Don\u2019t Involve Watching the News',
    date: 'January 16, 2023',
    updated: 'April 8, 2025',
    author: 'Kavita',
    views: '2K',
    likes: 0,
    comments: 0,
    image: '/images/DSC_0234.jpeg',
    excerpt:
      "Today, it feels like everything has changed\u2014it's either been closed, postponed, or canceled. Limiting news intake can dramatically improve mental wellbeing.",
    body: [
      'Continuous news consumption can heighten anxiety and obscure perspective. Choosing activities that nurture body and mind helps maintain balance during uncertain times.',
      'Try gentle yoga, journaling, baking, reading fiction, learning an instrument, gardening, cooking a new cuisine, calling old friends, doodling, and an evening walk \u2014 ten simple practices that restore equilibrium.',
      'Establish a digital boundary: check news only twice a day for 10 minutes. The rest of the day is yours to live fully.',
    ],
  },
  {
    id: 'please-thank-you',
    category: 'Articles',
    title: 'Is It Important to Say \u201CPlease\u201D and \u201CThank You\u201D to Your Partner?',
    date: 'January 16, 2023',
    updated: 'April 7, 2025',
    author: 'Kavita',
    views: '2K',
    likes: 0,
    comments: 0,
    image: '/images/DSC_0237.jpeg',
    excerpt:
      "Politeness in long-term relationships may seem unnecessary, but research suggests these small phrases create big emotional safety.",
    body: [
      'Familiarity can erode the small courtesies that originally built our relationships. Reintroducing \u201Cplease\u201D and \u201Cthank you\u201D signals respect and gratitude.',
      'Couples who practice everyday politeness report higher relationship satisfaction. These micro-rituals reinforce that partners are partners \u2014 not roommates.',
      'Start today: thank your partner for one small thing. Notice how it shifts the temperature of your home.',
    ],
  },
];

export const aboutImage = '/images/DSC_0146.jpeg';
export const drImage = '/images/image copy 2.png';
export const drFullImage = '/images/DSC_0224.jpeg';
export const drAltImage = '/images/DSC_0234.jpeg';
export const pageBannerImage = '/images/DSC_0237.jpeg';
export const corporateImage = '/images/44D7C705-DC0E-44F8-BBFE-CCD95A51D89D.jpeg';
export const blogBanner = '/images/DSC_0146.jpeg';

export const aboutInfo = {
  intro:
    'I am a psychologist and Mindset Coach with extensive experience in mental health therapy and emotional healing. I help individuals rebuild their lives, while also empowering corporations to enhance productivity and well-being.',
  paragraphs: [
    "With over 20 years of experience as a psychologist, Dr. Kavita Kabira specializes in providing expert mental health therapy and emotional healing. She is here to support you through your psychological challenges.",
    "In today's fast-paced world, individuals face various modern-day stressors and complex mental health concerns. Mental health issues, such as inner child trauma, anxiety, and emotional stress, have become significant yet often overlooked challenges in society. At Kavita Kabira Wellness Clinic, we address these concerns with a holistic approach, utilizing diverse techniques to tap into your natural healing potential. We help you restore balance, fostering mental resilience and emotional well-being.",
  ],
  timeline: [
    {
      period: '2000 \u2013 2005',
      title: 'Foundations in Literature & Psychology',
      desc: "Dr. Kavita's journey began with a passion for understanding human behavior, first cultivated through her B.A. in English Literature from University of Delhi. This was followed by an M.A. in English Literature at Delhi University, which deepened her insights into human emotions and communication. Simultaneously, she completed her B.Ed. from Indraprastha University, focusing on educational psychology and counseling techniques, which laid the groundwork for her future in behavioral sciences.",
    },
    {
      period: '2005 \u2013 2010',
      title: 'Transition to Psychological Counseling',
      desc: 'Her desire to apply her knowledge of human behavior led her to pursue a PGD in Psychological Counseling from the prestigious University of Mumbai. During this period, she further honed her skills with an M.A. in Psychology from Sabarmati University. It was here that Dr. Kavita developed a deep understanding of Cognitive Behavioral Therapy (CBT), emotional regulation, and workplace mental health strategies. This period also marked her entry into corporate counseling, where she helped organizations improve employee well-being and productivity.',
    },
    {
      period: '2010 \u2013 2020',
      title: 'Expertise in Emotional Healing & Trauma Recovery',
      desc: "As Dr. Kavita's career progressed, she integrated art therapy, mindfulness, and emotional healing techniques into her practice. She earned a Certificate in Behavioral Sciences from Amity Institute of Behavioral and Allied Sciences, which gave her the tools to address complex emotional challenges like inner child trauma and stress management. Dr. Kavita also became known for her trauma recovery programs, which helped clients heal deep emotional wounds while building resilience. Her innovative approach made her one of India's best psychologists in the fields of emotional wellness and corporate mental health.",
    },
    {
      period: '2020 \u2013 Present',
      title: 'Leadership in Mindful Communication & Corporate Wellness',
      desc: "In 2023, Dr. Kavita completed her Ph.D. in Social Psychology from the renowned American East Coast University, solidifying her expertise in non-violent verbal communication and emotional healing. Her research continues to focus on creating mindfulness-based communication strategies for both personal and corporate environments. As the founder of Kavita Kabira Wellness Clinic, she offers a comprehensive range of services that include mental health therapy, corporate wellness programs, and inner child healing. Dr. Kavita's recent educational endeavors, such as completing a Certificate in Start-up Management from IIM Bangalore, reflect her forward-thinking approach to wellness in the modern world.",
    },
  ],
  awards: [
    { year: '2002', title: 'Excellence in Behavioral Sciences', org: 'Amity Institute of Behavioral Sciences' },
    { year: '2006', title: 'Outstanding Contribution to Psychological Counseling', org: 'University of Mumbai' },
    { year: '2012', title: 'Leadership in Mental Health Innovation', org: 'Sabarmati University' },
    { year: '2023', title: 'Distinguished Expert in Emotional Wellness', org: 'American East Coast University' },
  ],
  specializations: [
    { title: 'Art Therapy for Emotional Wellness', desc: 'Leveraging creative expression to process emotions and build resilience.' },
    { title: 'Mindfulness for Mental Clarity', desc: 'Using mindfulness practices to reduce stress, anxiety, and promote mental clarity.' },
    { title: 'Corporate Counseling for Productivity', desc: 'Corporate wellness programs that enhance employee mental health and boost productivity.' },
    { title: 'Inner Child Trauma Healing', desc: 'Helping clients heal from childhood trauma and foster emotional well-being.' },
    { title: 'Non-Violent Verbal Communication', desc: 'Innovating methods to improve relationships through mindful, non-violent communication strategies.' },
  ],
};

export const corporatePrograms = [
  {
    title: 'Executive Stress Management',
    desc: 'Bespoke coaching for leadership teams to manage decision fatigue, burnout and high-pressure environments.',
  },
  {
    title: 'Team Resilience Workshops',
    desc: 'Interactive sessions that strengthen interpersonal trust, communication and emotional intelligence.',
  },
  {
    title: 'Mindful Leadership Coaching',
    desc: 'One-on-one mentorship for senior leaders integrating mindfulness, strategy and self-awareness.',
  },
  {
    title: 'Mental Wellness Audits',
    desc: 'Confidential organizational assessments to identify pressure points and build sustainable wellbeing policies.',
  },
];

export const contact = {
  phone: '+91 99718 80693',
  phoneRaw: '919971880693',
  whatsapp: 'https://wa.me/919971880693',
  email: 'kavitakabira1@gmail.com',
  address: 'A1404, BPTP Freedom Park, Sector 57, Gurgaon',
  hours: 'On Appointment',
};

export const mediaPresence = {
  videos: [
    { title: "Sanjay Chandra presents The Show", desc: "In conversation with Vardhan Dharkar — profiled as a High Achiever's Psychologist, Emotional Health Coach, and Mental Health & Couple Therapist.", link: "https://www.youtube.com/watch?v=IbGwSrjSxvU" },
    { title: "Josh Talks Aasha", desc: "ज़्यादा Cheating कौन करता हैं? | Love Life — discusses healthy relationships and emotional connection.", link: "https://www.youtube.com/watch?v=MCEmFq1HvmA" },
    { title: "Official YouTube Channel", desc: "Holistic mental health and a little poetry — full channel of videos and talks.", link: "https://www.youtube.com/@Drkavitakabira" }
  ],
  books: [
    { title: "Few Moments of Letting Go", desc: "(fiction)", links: [
      { label: "Amazon.com (Kindle)", url: "https://www.amazon.com/Few-Moments-Letting-Go-kavita-ebook/dp/B01M0257BS" },
      { label: "Amazon.in (Paperback)", url: "https://www.amazon.in/Few-moments-letting-go-KAVITA/dp/9384028614" },
      { label: "Goodreads", url: "https://www.goodreads.com/book/show/27418231-few-moments-of-letting-go" },
      { label: "Free-eBooks.net", url: "https://www.free-ebooks.net/fiction/Few-Moments-of-Letting-Go" }
    ]},
    { title: "Me and My Moonstone", desc: "(with Kavya Digani)", links: [
      { label: "Amazon.in", url: "https://www.amazon.in/MOONSTONE-Kavita-Kabira-Kavya-Digani/dp/8195942407" }
    ]}
  ],
  authorPages: [
    { title: "Amazon.in Author Storefront", link: "https://www.amazon.in/Books-Kavita-Kabira/s?rh=n%3A976389031%2Cp_27%3AKavita+Kabira" },
    { title: "Goodreads (Kavita Kabira)", link: "https://www.goodreads.com/author/show/18876420.Kavita_Kabira" },
    { title: "Goodreads (Kavita Bhutani, earlier listing)", link: "https://www.goodreads.com/author/show/14880708.Kavita_Bhutani" }
  ],
  press: [
    { title: "Opinion Power", desc: "Kavita Kabira interviews author Dr. Ankita Raj on writing and parenting.", link: "https://opinionpower.in/interview-of-dr-ankita-raj-by-ms-kavita-kabira-on-her-writing-and-other-related-issues1193-2/" },
    { title: "LinkedIn Guest Author Interview", desc: "Guest author interview feature", link: "https://www.linkedin.com/posts/drkavitakabira_author-interview-guest-author-kavita-kabira-activity-7151266422864646144-RQ84" },
    { title: "Blog — Purple Monks", desc: "Official blog posts and updates.", link: "http://purple-monks.com/blog/" }
  ],
  social: [
    { title: "Linktree (central hub)", desc: "Links to all platforms, books, and media in one place.", link: "https://linktr.ee/DrKavitaKabiraBhutani" },
    { title: "Website", link: "https://kavitakabira.com/" },
    { title: "Instagram", link: "https://www.instagram.com/drkavitakabira/" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/drkavitakabira/" },
    { title: "Twitter / X", link: "https://twitter.com/kavitabhutani" },
    { title: "Threads", link: "https://www.threads.net/@drkavitakabira" },
    { title: "Facebook (author page)", link: "https://www.facebook.com/kavita.echoesofmylife/" },
    { title: "Pinterest", link: "https://in.pinterest.com/kavitakabira/" }
  ],
  clinical: [
    { title: "Practo — Clinic Profile", link: "https://www.practo.com/gurgaon/clinic/kabira-mental-health-gurgaon-sector-57" },
    { title: "Practo — Therapist Profile", link: "https://www.practo.com/gurgaon/therapist/kavita-bhutani-psychologist" },
    { title: "MediBuddy — Doctor Profile", link: "https://www.medibuddy.in/doctor-consultation/Gurgaon/doctor-profile/dr-kavita-kabira-id73184" }
  ],
  notes: "The Linktree references a \"PODCAST\" link that routes to a general Google search rather than a single dedicated episode page, so no standalone podcast feed could be confirmed beyond the YouTube video conversations listed above. YouTube's automated feed access is blocked for direct RSS pulls, so the channel link above is the most reliable way to browse the full video catalogue."
};
