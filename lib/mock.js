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
  { 
    label: 'Services', 
    to: '/services',
    subLinks: [
      { label: 'Our Services', to: '/services' },
    ]
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Corporate Wellness', to: '/corporate-wellness' },
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
    image: '/images/09243ea1-f278-4a1b-b31f-0c18a1baf674.jpeg',
    desc: "Experience professional support from the comfort of your home with our online psychotherapy sessions in Gurgaon and Delhi. As the <b>Best Psychologist in Gurgaon</b>, I offer affordable online therapy to help you navigate anxiety, depression, and stress. Connect virtually with a leading mental health expert.",
  },
  {
    id: 'group',
    title: 'Individual & Group Therapy',
    image: '/images/332bb62b-e2b6-42ba-9961-0b47cd454e2c.jpeg',
    desc: 'Unlock personal growth through individual therapy or our group sessions. As the <b>Top Psychotherapist in Gurgaon and Delhi</b>, I specialize in cognitive behavioral therapy to address your unique needs. My <b>Affordable Therapy Services in Gurgaon</b> are designed to help you on your path to mental wellness.',
  },
  {
    id: 'corporate',
    title: 'Corporate Wellness',
    image: '/images/44D7C705-DC0E-44F8-BBFE-CCD95A51D89D.jpeg',
    desc: "Enhance your team's productivity with our corporate wellness programs. As the <b>Best Wellness Coach for Executives</b>, I provide executive stress management coaching in Gurgaon. Invest in your organization's success by prioritizing mental health with guidance from the <b>Top Psychologist in Gurgaon Delhi</b>.",
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
    id: 'dating',
    title: 'Dating & Relationships',
    excerpt: 'Loving each other makes it easier to solve the invariable issues that come up daily.',
    image: '/images/893751FE-8ABA-4543-B648-18DC7CF791DE.jpeg',
  },
  {
    id: 'self-esteem',
    title: 'Self-Esteem Issues',
    excerpt: 'The most common and dangerous features of low self-esteem is negative self-talk.',
    image: '/images/9A0AFB4D-1A41-4560-9C14-AB2B9692670B.jpeg',
  },
  {
    id: 'family',
    title: 'Family Psychology',
    excerpt: 'Principles of theory with the interpersonal system of the family, focus of assessment.',
    image: '/images/D6F571CF-7186-4CD9-A175-E7CEC66E7114.jpeg',
  },
  {
    id: 'young-adult',
    title: 'Young Adult Intensive',
    excerpt: 'Adolescents are the age when they are forming their thoughts, so it is difficult to understand themselves.',
    image: '/images/b5cdd099-154b-42a7-a628-c7ab845b5fbe.jpeg',
  },
  {
    id: 'career',
    title: 'Career Counseling',
    excerpt: 'Career counseling is a type of advice-giving and support provided by career counselors to their clients, to help.',
    image: '/images/b9fe9b7b-3035-46d3-b424-b074abd73f40.jpeg',
  },
  {
    id: 'impulsivity',
    title: 'Chronic Impulsivity',
    excerpt: 'Being angry will make things worse, be calm in any situation to be more smart, be a smart.',
    image: '/images/da58081b-92f8-4898-9f8c-3a6918e31b65.jpeg',
  },
];

export const pricingPlans = [
  {
    id: 'silver',
    name: 'Silver',
    subtitle: 'One week consultancy package',
    price: 199,
    featured: false,
    features: [
      'Consulted by an expert',
      'Provide the optimal treatment plan',
      'In-house consultation services',
      'Psychologically analyzed',
      'Evaluation of Psychological',
      'Example of Premium Pricing',
    ],
  },
  {
    id: 'golden',
    name: 'Golden',
    subtitle: 'One month consultancy package',
    price: 299,
    featured: true,
    features: [
      'Consulted by an expert',
      'Provide the optimal treatment plan',
      'In-house consultation services',
      'Psychologically analyzed',
      'Evaluation of Psychological',
      'Example of Premium Pricing',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond',
    subtitle: 'Three month consultancy package',
    price: 999,
    featured: false,
    features: [
      'Consulted by an expert',
      'Provide the optimal treatment plan',
      'In-house consultation services',
      'Psychologically analyzed',
      'Evaluation of Psychological',
      'Example of Premium Pricing',
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
export const drImage = '/images/DSC_0166.jpeg';
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
      desc: "Dr. Kavita's journey began with a passion for understanding human behavior, first cultivated through her B.A. in English Literature from University of Delhi. Followed by an M.A. in English Literature at Delhi University and a B.Ed. from Indraprastha University focusing on educational psychology.",
    },
    {
      period: '2005 \u2013 2010',
      title: 'Transition to Psychological Counseling',
      desc: 'Pursued a PGD in Psychological Counseling from University of Mumbai and an M.A. in Psychology from Sabarmati University. Developed deep expertise in Cognitive Behavioral Therapy (CBT) and emotional regulation, and entered corporate counseling.',
    },
    {
      period: '2010 \u2013 2020',
      title: 'Expertise in Emotional Healing & Trauma Recovery',
      desc: 'Integrated art therapy, mindfulness and emotional healing techniques. Earned a Certificate in Behavioral Sciences from Amity Institute, and developed renowned trauma-recovery programs for clients across India.',
    },
    {
      period: '2020 \u2013 Present',
      title: 'Leadership in Mindful Communication & Corporate Wellness',
      desc: 'Completed a Ph.D. in Social Psychology from American East Coast University. Founded Kavita Kabira Wellness Clinic, offering mental health therapy, corporate wellness programs and inner-child healing. Recently completed a Certificate in Start-up Management from IIM Bangalore.',
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
  phone: '+91-8287045427',
  phoneRaw: '8287045427',
  email: 'kavitakabira1@gmail.com',
  address: 'A1404, BPTP Freedom Park, Sector 57, Gurgaon',
  hours: 'On Appointment',
};
