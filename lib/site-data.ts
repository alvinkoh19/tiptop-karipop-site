

export type IconKey =
  | 'calendar-days'
  | 'camera'
  | 'clapperboard'
  | 'globe'
  | 'handshake'
  | 'heart'
  | 'layout-grid'
  | 'message-circle'
  | 'play'
  | 'search'
  | 'share2'
  | 'sparkles'
  | 'store'
  | 'trophy'
  | 'users'

export type OverviewItem = {
  label: string
  value: string
}

export type StrategyCard = {
  icon: IconKey
  title: string
  desc: string
}

export type ImpactItem = {
  icon: IconKey
  title: string
  sub: string
}

export type GalleryItem = {
  image: string
  title: string
  caption: string
}

export type CaseStudy = {
  slug: string
  category: string
  title: string
  subtitle: string
  location: string
  hero: string
  overview: OverviewItem[]
  challengeTitle: string
  challengeBody: string
  challengePoints: string[]
  approachTitle: string
  approachCards: StrategyCard[]
  impacts: ImpactItem[]
  gallery: GalleryItem[]
}

export const assets = {
  logo: '/images/ttk-logo.png',
  team: '/images/team-group.jpg',
  communityCrowd: '/images/community-crowd.jpg',
  kldfHero: '/images/kldf-hero.jpg',
  kldfNight: '/images/kldf-night.jpg',
  kldfWide: '/images/kldf-wide.jpg',
  kldfRibbon: '/images/kldf-ribbon.jpg',
  retailHero: '/images/retail-hero.jpg',
  retailClose: '/images/retail-close.jpg',
  retailLaunch: '/images/retail-launch.jpg',
  interior: '/images/interior.jpg',
} as const

export const serviceCards = [
  {
    icon: 'clapperboard',
    title: 'Social Media Growth Management',
    desc: '通过平台专属内容策略、内容选题规划、制作发布管理与月度复盘，帮助品牌建立持续曝光，而不是只赌单条内容爆不爆。',
    bullets: [
      'Platform-specific content strategy',
      'Marketing-driven content planning',
      'Content production & posting management',
      'Traffic & performance analysis',
    ],
  },
  {
    icon: 'message-circle',
    title: 'CRM & Community Management',
    desc: '不只回复私讯，而是把咨询、客户画像、社群运营与私域承接做成长期资产沉淀，推动真正的成交转化。',
    bullets: [
      'Multi-platform customer management',
      'Customer profile & segmentation',
      'Community operation & private domain conversion',
      'Customer feedback & insight analysis',
    ],
  },
  {
    icon: 'play',
    title: 'Livestream Management',
    desc: '把直播当成稳定销售渠道来经营，而不是临时开播。包含直播策略、执行管理、成交转化与 GMV 目标协同。',
    bullets: [
      'Livestream strategy planning',
      'Livestream production management',
      'Sales conversion management',
      'GMV performance target alignment',
    ],
  },
  {
    icon: 'sparkles',
    title: 'Event & Campaign Planning',
    desc: '通过活动与项目制营销，把品牌节点变成有曝光、有到场、有社交扩散与后续复盘的完整事件。',
    bullets: [
      'Marketing campaign design',
      'Event execution management',
      'Vendor coordination',
      'Performance review & optimisation',
    ],
  },
] as const

export const homeHighlights = [
  {
    image: assets.team,
    title: 'A team that actually executes',
    desc: 'The point is not to look like an agency. The point is to build like an operator.',
  },
  {
    image: assets.kldfHero,
    title: 'Event-led momentum',
    desc: 'Crowd, atmosphere and public visibility only matter when they are designed into the experience.',
  },
  {
    image: assets.retailHero,
    title: 'Retail as brand theatre',
    desc: 'Physical touchpoints are not decoration. They are where memory gets made.',
  },
] as const

export const processSteps = [
  {
    no: '01',
    title: 'See the real problem',
    desc: 'We separate vanity requests from the real growth blockage: awareness, precision, arrival, conversion or retention.',
  },
  {
    no: '02',
    title: 'Design the full route',
    desc: 'Content, activity, experience and conversion are designed as one route, not four disconnected tasks.',
  },
  {
    no: '03',
    title: 'Build momentum on site',
    desc: 'The现场 matters. People decide whether to trust, remember and share based on what the experience actually feels like.',
  },
  {
    no: '04',
    title: 'Turn attention into business',
    desc: 'We care about what happens after the photo moment: enquiry, arrival, sales and long-term brand equity.',
  },
] as const

export const caseStudies: CaseStudy[] = [
  {
    slug: 'kuala-lumpur-durian-fest-2025',
    category: 'Event Marketing',
    title: 'Kuala Lumpur Durian Fest 2025',
    subtitle:
      'A multi-day durian celebration shaped as a city-facing brand experience across culture, footfall and community.',
    location: 'Kuala Lumpur, Malaysia',
    hero: assets.kldfWide,
    overview: [
      { label: 'Client', value: 'Kuala Lumpur Durian Fest 2025' },
      {
        label: 'Scope',
        value: 'Event Strategy, Content & Social, Influencer Engagement, On-Ground Activation, O2O Integration',
      },
      { label: 'Year', value: '2025' },
      {
        label: 'Deliverables',
        value: 'Campaign Strategy, Content Rollout, Event Experience, Media & PR, Digital & O2O Drive',
      },
    ],
    challengeTitle: 'Elevate a local favourite into a city-wide moment',
    challengeBody:
      'The goal was not just to host a seasonal event. It was to turn a durian-led celebration into a public-facing urban experience that people would notice, show up for, and remember.',
    challengePoints: [
      'Build strong pre-event buzz across digital and traditional channels.',
      'Drive sustained footfall and keep audiences engaged throughout the event.',
      'Create memorable on-ground experiences that celebrate culture and community.',
    ],
    approachTitle: 'A full-funnel experience strategy',
    approachCards: [
      {
        icon: 'clapperboard',
        title: 'Content Rollout',
        desc: 'Teased the event through social content, community pages and shareable visual moments before launch.',
      },
      {
        icon: 'sparkles',
        title: 'Event Momentum',
        desc: 'Built press-worthy and public-facing moments through opening ceremony, live activity and partner presence.',
      },
      {
        icon: 'users',
        title: 'On-Ground Experience',
        desc: 'Designed a visitor journey with tasting, family activities, cultural touchpoints and seamless movement.',
      },
      {
        icon: 'share2',
        title: 'O2O Conversion',
        desc: 'Connected offline attention with digital touchpoints so visibility could continue after the visit.',
      },
    ],
    impacts: [
      { icon: 'users', title: 'High footfall', sub: '高人流与参与度' },
      { icon: 'globe', title: 'Strong public visibility', sub: '强大的公众曝光' },
      { icon: 'share2', title: 'Multi-touchpoint exposure', sub: '多渠道品牌曝光' },
      { icon: 'heart', title: 'Community engagement', sub: '社区深度参与' },
    ],
    gallery: [
      {
        image: assets.kldfHero,
        title: 'Festival atmosphere',
        caption: 'City crowd, leisure zone and public energy in one frame.',
      },
      {
        image: assets.kldfRibbon,
        title: 'Official ribbon-cutting ceremony',
        caption: 'Opening protocol turned into a visible public moment, not a silent formality.',
      },
      {
        image: assets.kldfNight,
        title: 'Night activation',
        caption: 'After-dark programming extended the life of the event and widened audience appeal.',
      },
    ],
  },
  {
    slug: 'mybolehboleh-retail-experience',
    category: 'Retail Experience',
    title: 'MyBolehBoleh Retail Experience',
    subtitle:
      'A culture-forward retail entrance that turned a mall threshold into a memorable durian-led brand touchpoint.',
    location: 'Kuala Lumpur, Malaysia',
    hero: assets.retailHero,
    overview: [
      { label: 'Client', value: 'MyBolehBoleh / Jaya Grocer Group' },
      {
        label: 'Scope',
        value: 'Brand Entrance, Environmental Design, Retail Experience, Event Activation, Community Engagement',
      },
      { label: 'Year', value: '2025' },
      {
        label: 'Deliverables',
        value: 'Entrance Design, In-Store Touchpoints, Launch Event, Experiential Zones, Social Content Moments',
      },
    ],
    challengeTitle: 'Create a retail entrance that stops traffic and starts memory',
    challengeBody:
      'The entrance needed to do more than look festive. It had to communicate freshness, cultural character and product identity fast enough to win attention inside a crowded retail environment.',
    challengePoints: [
      'Stand out in a competitive mall environment and capture attention quickly.',
      'Communicate Malaysian heritage and durian specialty in a clear, engaging way.',
      'Drive footfall, in-store engagement and social sharing during launch.',
    ],
    approachTitle: 'What we built',
    approachCards: [
      {
        icon: 'store',
        title: 'Brand Entrance Design',
        desc: 'Used bold illustration, tropical fauna and clear signage to create a stop-you-in-your-tracks threshold.',
      },
      {
        icon: 'layout-grid',
        title: 'Retail Experience',
        desc: 'Extended the first impression into a warmer in-store journey with curated visual moments and flow.',
      },
      {
        icon: 'handshake',
        title: 'Community Atmosphere',
        desc: 'Launch activities and ceremonial moments turned the opening into something people wanted to witness.',
      },
      {
        icon: 'trophy',
        title: 'Offline Conversion',
        desc: 'Clear arrival path, queue logic and irresistible curiosity worked together to increase entry and stay time.',
      },
    ],
    impacts: [
      { icon: 'users', title: 'Stronger walk-in appeal', sub: '显著提升到店吸引力' },
      { icon: 'search', title: 'Higher brand recall', sub: '品牌记忆度提升' },
      { icon: 'share2', title: 'More social sharing', sub: '更多社交分享' },
      { icon: 'heart', title: 'Experience-led retail', sub: '体验驱动零售' },
    ],
    gallery: [
      {
        image: assets.retailClose,
        title: 'Entrance branding detail',
        caption: 'The visual identity had to work from both a distance and close-up smartphone view.',
      },
      {
        image: assets.interior,
        title: 'In-store experience',
        caption: 'The interior atmosphere supported the promise made at the entrance instead of breaking it.',
      },
      {
        image: assets.retailLaunch,
        title: 'Launch activation',
        caption: 'Ceremony and atmosphere gave the retail story a human pulse.',
      },
    ],
  },
  {
    slug: 'mybolehboleh-community-activation',
    category: 'Community Activation',
    title: 'MyBolehBoleh Community Activation',
    subtitle:
      'A durian-powered celebration built to bring people together through local pride, photo moments and real participation.',
    location: 'Kuala Lumpur, Malaysia',
    hero: assets.team,
    overview: [
      { label: 'Client', value: 'MyBolehBoleh' },
      {
        label: 'Scope',
        value: 'Community Activation, Event Design, Content Creation, Social Strategy, On-Ground Engagement',
      },
      { label: 'Year', value: '2025' },
      {
        label: 'Deliverables',
        value: 'Event Design & Build, Content Pack, Influencer Engagement, PR, Digital Marketing, Photo & Video Assets',
      },
    ],
    challengeTitle: 'Create joyful participation, not passive attendance',
    challengeBody:
      'The brand wanted people to feel part of something local, alive and shareable. That meant designing a community moment with enough warmth and recognisable identity for people to join in naturally.',
    challengePoints: [
      'Build stronger community bonds between brand and durian lovers.',
      'Drive brand affinity through immersive storytelling and shared experience.',
      'Generate photo-worthy moments people would willingly amplify across platforms.',
    ],
    approachTitle: 'Our approach',
    approachCards: [
      {
        icon: 'calendar-days',
        title: 'Community Event Design',
        desc: 'Built a durian-themed activation with games, demos, lucky draws and human-scale brand touchpoints.',
      },
      {
        icon: 'message-circle',
        title: 'Brand Storytelling',
        desc: 'Wrapped the experience around durian pride, local flavour and a more personal brand character.',
      },
      {
        icon: 'camera',
        title: 'Social Content Moments',
        desc: 'Created photo-friendly moments and installation logic that encouraged organic sharing.',
      },
      {
        icon: 'users',
        title: 'On-Ground Engagement',
        desc: 'Activated through team presence, supporters and real-time participation instead of staged detachment.',
      },
    ],
    impacts: [
      { icon: 'users', title: 'Community participation', sub: '社群积极参与' },
      { icon: 'heart', title: 'Brand affinity', sub: '品牌好感提升' },
      { icon: 'camera', title: 'Photo-worthy experience', sub: '打卡体验出圈' },
      { icon: 'sparkles', title: 'Repeat visitation', sub: '回访率提升' },
    ],
    gallery: [
      {
        image: assets.communityCrowd,
        title: 'Public response',
        caption: 'Crowd density alone is not the story; willingness to stop, gather and participate is.',
      },
      {
        image: assets.retailLaunch,
        title: 'Cultural touchpoints',
        caption: 'Ceremonial and festive cues deepened the emotional texture of the activation.',
      },
      {
        image: assets.interior,
        title: 'Meaningful interaction',
        caption: 'The strongest brand moments often happen in quieter spaces after the first excitement lands.',
      },
    ],
  },
]

export const contactInfo = {
  eventMarketing: '011-6770 0633',
  contentMarketing: '011-3773 7338',
  email: 'alvin.koh@mybolehboleh.com',
  location: 'Kuala Lumpur, Malaysia',
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}
