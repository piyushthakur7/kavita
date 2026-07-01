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
    name: 'Prerna S.',
    role: 'Individual Therapy',
    avatar: 'https://ui-avatars.com/api/?name=Prerna+S&background=random',
    quote:
      'I came to Dr. Kavita after years of feeling like something was broken inside me. Within three months I understood that nothing was broken. I had just never been taught how to feel safely. That shift changed everything.',
  },
  {
    id: 3,
    name: 'Rohini M.',
    role: 'Inner Child Healing',
    avatar: 'https://ui-avatars.com/api/?name=Rohini+M&background=random',
    quote:
      'Dr. Kavita has a rare quality — she makes you feel seen without making you feel exposed. Her inner child work gave me language for things I had been carrying silently since childhood.',
  },
  {
    id: 4,
    name: 'Rohan Sharma',
    role: 'Software Engineer',
    avatar: 'https://ui-avatars.com/api/?name=Rohan+Sharma&background=random',
    quote: 'Therapy with Dr. Kavita has been life-changing. Her profound understanding of anxiety and trauma helped me regain my confidence and balance in life. I highly recommend her to anyone feeling overwhelmed.'
  },
  {
    id: 5,
    name: 'Priya Desai',
    role: 'HR Professional',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Desai&background=random',
    quote: 'Our corporate wellness program was completely transformed by Dr. Kavita. She brought a compassionate yet practical approach to mental health that truly resonated with our entire team.'
  },
  {
    id: 6,
    name: 'Amit Patel',
    role: 'Entrepreneur',
    avatar: 'https://ui-avatars.com/api/?name=Amit+Patel&background=random',
    quote: 'The executive stress management sessions with Dr. Kabira were exactly what I needed. She helped me navigate through burnout with actionable strategies and profound empathy.'
  },
  {
    id: 7,
    name: 'Neha Kapoor',
    role: 'Teacher',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Kapoor&background=random',
    quote: 'Inner child healing sounded intimidating at first, but Dr. Kavita’s gentle guidance made the process incredibly safe. She has a unique ability to make you feel truly heard and understood.'
  },
  {
    id: 8,
    name: 'Vikram Singh',
    role: 'Marketing Director',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=random',
    quote: 'My partner and I were on the brink of separation, but couples therapy with Dr. Kavita helped us rebuild our foundation. She taught us how to communicate honestly and compassionately.'
  },
  {
    id: 9,
    name: 'Anjali Verma',
    role: 'Graphic Designer',
    avatar: 'https://ui-avatars.com/api/?name=Anjali+Verma&background=random',
    quote: 'Dr. Kavita is incredible at what she does. Her holistic approach to somatic healing and emotional regulation gave me the tools to overcome years of stored trauma.'
  },
  {
    id: 10,
    name: 'Rahul Mehta',
    role: 'Financial Analyst',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=random',
    quote: 'I have never felt more supported. Dr. Kabira combines clinical expertise with genuine warmth, making every session feel like a safe haven for personal growth.'
  },
  {
    id: 11,
    name: 'Sneha Reddy',
    role: 'Medical Student',
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=random',
    quote: 'Navigating the pressures of med school took a massive toll on my mental health. Dr. Kavita’s therapy sessions equipped me with resilience and self-compassion when I needed it the most.'
  },
  {
    id: 12,
    name: 'Karan Malhotra',
    role: 'Sales Manager',
    avatar: 'https://ui-avatars.com/api/?name=Karan+Malhotra&background=random',
    quote: 'Finding the right therapist is hard, but finding Dr. Kabira was a blessing. Her insights into family systems therapy have helped me resolve deep-rooted conflicts with absolute grace.'
  },
  {
    id: 13,
    name: 'Pooja Iyer',
    role: 'Homemaker',
    avatar: 'https://ui-avatars.com/api/?name=Pooja+Iyer&background=random',
    quote: 'A wonderful, warm, and highly skilled psychologist. Dr. Kavita helped me rediscover my self-worth during a very challenging transition in my life. I am deeply grateful.'
  },
  {
    id: 14,
    name: 'Siddharth Rao',
    role: 'Architect',
    avatar: 'https://ui-avatars.com/api/?name=Siddharth+Rao&background=random',
    quote: 'Her approach to neurosis and panic attacks is incredibly grounding. Dr. Kavita creates a space devoid of judgment where you can truly work on healing your nervous system.'
  },
  {
    id: 15,
    name: 'Meera Nair',
    role: 'Content Writer',
    avatar: 'https://ui-avatars.com/api/?name=Meera+Nair&background=random',
    quote: 'Dr. Kabira’s sessions on women’s emotional health were an eye-opener. She empowered me to set healthy boundaries and embrace my identity with pride and confidence.'
  },
  {
    id: 16,
    name: 'Arjun Das',
    role: 'Data Scientist',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Das&background=random',
    quote: 'I was skeptical about online counseling, but Dr. Kavita’s virtual sessions are just as warm and effective as in-person ones. She has a true gift for emotional healing.'
  },
  {
    id: 17,
    name: 'Divya Chauhan',
    role: 'Project Manager',
    avatar: 'https://ui-avatars.com/api/?name=Divya+Chauhan&background=random',
    quote: 'Her mindfulness strategies have completely shifted how I handle stress at work. Dr. Kavita is not just a therapist; she is a phenomenal mindset coach.'
  },
  {
    id: 18,
    name: 'Manish Gupta',
    role: 'Business Consultant',
    avatar: 'https://ui-avatars.com/api/?name=Manish+Gupta&background=random',
    quote: 'The depth of her knowledge and the sincerity in her voice make Dr. Kavita one of the best psychologists in India. My journey towards mental well-being wouldn’t have been possible without her.'
  }
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
  { value: 6, suffix: '+', label: 'Years of Clinical Practice' },
  { value: 3000, suffix: '+', label: 'Client Interactions' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '', label: 'Signature Programs' },
];

export const blogPosts = [
  {
    id: 'inner-child-work',
    category: 'Inner Child Healing',
    title: 'What Is Inner Child Work — And Why It Changes Everything',
    date: 'July 1, 2026',
    updated: 'July 1, 2026',
    author: 'Kavita Kabira',
    views: '0',
    likes: 0,
    comments: 0,
    image: '/images/blog_inner_child_ai.png',
    excerpt:
      "Most people have heard the term 'inner child' — but few understand what it actually means clinically. This article explains the inner child concept through a neuroscience lens.",
    body: [
      'Most people have heard the term "inner child" — but few understand what it actually means clinically. This article explains the inner child concept through a neuroscience lens.',
      'It describes why early relational wounds show up in adult behaviour, and introduces the reader to my five-doorway healing protocol. If you are ready, join the Inner Child Healing Journey group course.',
    ],
  },
  {
    id: 'struggle-say-no',
    category: "Women's Emotional Health",
    title: 'Why Indian Women Struggle to Say No — And What the Nervous System Has to Do With It',
    date: 'July 15, 2026',
    updated: 'July 15, 2026',
    author: 'Kavita Kabira',
    views: '0',
    likes: 0,
    comments: 0,
    image: '/images/blog_say_no_ai.png',
    excerpt:
      "Explores the cultural, familial, and neurological roots of people-pleasing and boundary collapse in Indian women.",
    body: [
      'This article explores the cultural, familial, and neurological roots of people-pleasing and boundary collapse in Indian women.',
      'Drawing on clinical observations and Gabor Maté\'s work on the connection between people-pleasing and early relational trauma, it provides a practical, culturally specific, and validating perspective.',
    ],
  },
  {
    id: 'fixing-vs-healing',
    category: 'Therapy & Mindset',
    title: 'The Difference Between Fixing Yourself and Healing Yourself',
    date: 'August 1, 2026',
    updated: 'August 1, 2026',
    author: 'Kavita Kabira',
    views: '0',
    likes: 0,
    comments: 0,
    image: '/images/blog_fixing_healing_ai.png',
    excerpt:
      "A reflective piece on the cultural tendency to approach therapy as self-improvement — and why this framing often keeps people stuck.",
    body: [
      'This is a reflective piece on the cultural tendency to approach therapy as self-improvement — and why this framing often keeps people stuck.',
      'It distinguishes between the fixing mindset (something is wrong with me) and the healing mindset (something happened to me), drawing on my experience as both a clinician and a writer.',
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
    'I am Dr. Kavita Kabira.\n\nFor over 6 years, I have sat across from more than 3,000 individuals—listening to the things they do not know how to say out loud. I hold a Ph.D. in Social Psychology and am an NCAHP Registered Clinical Psychologist. I am also trained as an Art Therapist and Psychodrama Therapist.\n\nMy work is not about fixing you—because you are not broken. My work is about helping your nervous system remember what it feels like to be safe.',
  paragraphs: [
    "I believe that therapy is a deeply collaborative process. The patterns that exhaust you today were originally learned as survival mechanisms. Together, we safely deconstruct these mechanisms so you can experience emotional freedom.",
    "At Kavita Kabira Wellness Clinic, we blend evidence-based clinical psychology with trauma-informed somatic practices. This holistic approach respects the complexities of the Indian emotional landscape, offering a space where you can finally put down the weight you've been carrying."
  ],
  timeline: [
    {
      period: 'The Early Years',
      title: 'Literature, Psychology & Education',
      desc: 'My journey began with a deep curiosity about the human story. I pursued my B.A. and M.A. in English Literature from the University of Delhi, which taught me the power of narrative. Seeking to understand the minds behind the stories, I completed a B.Ed. from Indraprastha University, laying the foundation for my work in behavioral sciences.',
    },
    {
      period: 'Clinical Foundations',
      title: 'Psychology & Counseling',
      desc: 'To translate my understanding of human behavior into clinical practice, I completed a PGD in Psychological Counseling from the University of Mumbai, followed by an M.A. in Psychology from Sabarmati University. This period grounded me in Cognitive Behavioral Therapy and the crucial importance of emotional regulation.',
    },
    {
      period: 'Specialised Modalities',
      title: 'Trauma & Somatic Work',
      desc: 'Realizing that traditional talk therapy often wasn\'t enough for deep-rooted trauma, I expanded my clinical toolkit. I trained extensively as an Art Therapist and a Psychodrama Therapist, integrating somatic healing techniques to address how trauma is stored in the nervous system and the body.',
    },
    {
      period: 'Present Day',
      title: 'Clinical Practice & Research',
      desc: 'I culminated my academic journey with a Ph.D. in Social Psychology from American East Coast University. Today, as an NCAHP Registered Clinical Psychologist, I run my private clinic, focusing on inner child healing, women\'s emotional health, and trauma recovery, while also bringing somatic-informed wellness programs to the corporate sector.',
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
