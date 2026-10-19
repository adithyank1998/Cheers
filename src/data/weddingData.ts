export interface FamilyDetail {
  groomTitle: string;
  groomName: string;
  groomParents: string;
  groomHouse: string;
  brideTitle: string;
  brideName: string;
  brideParents: string;
  brideHouse: string;
  bestCompliments: string;
}

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapQuery: string;
  iconName: 'rings' | 'sparkles';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  aspect: 'square' | 'portrait' | 'landscape';
  imageUrl: string;
  category: string;
}

export interface StoryMilestone {
  date: string;
  title: string;
  description: string;
}

export interface WeddingConfig {
  partner1: string;
  partner2: string;
  partner1FullName: string;
  partner2FullName: string;
  formalSubtitle: string;
  weddingDate: string;
  targetTimestamp: string;
  venueName: string;
  venueCityState: string;
  venueAddress: string;
  receptionVenueName: string;
  receptionVenueCityState: string;
  receptionVenueAddress: string;
  whatsappNumber: string;
  weddingHashtag: string;
  family: FamilyDetail;
  invitationNote: string;
}

export const weddingConfig: WeddingConfig = {
  partner1: 'Gokul',
  partner2: 'Mydhili',
  partner1FullName: 'Gokul P. R.',
  partner2FullName: 'Mydhili S Thalachira',
  formalSubtitle: 'Cordially invite your esteemed presence and blessings with family on the auspicious occasion of their wedding',
  weddingDate: 'Sunday, December 6, 2026',
  targetTimestamp: '2026-12-06T12:15:00+05:30',
  venueName: 'Lijo Auditorium',
  venueCityState: 'Pathanamthitta, Keralam',
  venueAddress: 'Kumbazha, Pathanamthitta - 689653, Keralam',
  receptionVenueName: 'Kumarakam Gateway KTDC',
  receptionVenueCityState: 'Cherthala, Keralam',
  receptionVenueAddress: 'Thanneermukkom, Cherthala, Keralam - 688527',
  whatsappNumber: '+918281544783',
  weddingHashtag: '#GokulWedsMydhili',
  family: {
    groomTitle: 'Groom',
    groomName: 'Gokul P. R.',
    groomParents: 'S/o Smt. Beena S S & Late Sri. Rajan P M',
    groomHouse: 'Panikattil House, Pallipuram, Cherthala',
    brideTitle: 'Bride',
    brideName: 'Mydhili S Thalachira',
    brideParents: 'D/o Sri. P A Suresh Kumar & Smt. Prasanthi Suresh',
    brideHouse: 'Midhila, Thalachira, Pathanamthitta',
    bestCompliments: 'Rahul P. R. & Family'
  },
  invitationNote: 'With the blessings of our beloved elders and families, we warmly welcome you to celebrate this sacred union of two souls and two loving families.'
};

export const weddingEvents: EventDetail[] = [
  {
    id: 'muhurtham',
    title: 'The Wedding Ceremony (Muhurtham)',
    subtitle: 'The auspicious union & sacred marriage ceremony',
    date: 'Sunday, December 6, 2026',
    time: 'Between 12:15 p.m. and 12:27 p.m.',
    location: 'Lijo Auditorium',
    address: 'Kumbazha, Pathanamthitta - 689653, Keralam',
    mapQuery: 'Lijo Auditorium, Kumbazha, Pathanamthitta, Kerala 689653',
    iconName: 'rings'
  },
  {
    id: 'reception',
    title: 'The Wedding Reception',
    subtitle: 'An evening of dinner, music & celebration with family and friends',
    date: 'Monday, December 7, 2026',
    time: '6:00 PM to 9:00 PM',
    location: 'Kumarakam Gateway KTDC',
    address: 'Thanneermukkom, Cherthala, Keralam - 688527',
    mapQuery: 'Kumarakam Gateway KTDC, Thanneermukkom, Cherthala, Kerala 688527',
    iconName: 'sparkles'
  }
];

export const loveStoryMilestones: StoryMilestone[] = [
  {
    date: 'June 23, 2026',
    title: 'The First Spark',
    description: 'Started chatting online, turning a simple conversation into something special.'
  },
  {
    date: 'June 27, 2026',
    title: 'First Meeting',
    description: 'Met in person for the very first time, bringing our online connection to life.'
  },
  {
    date: 'July 25, 2026',
    title: 'Meeting the Families',
    description: 'Our first official meetup with our parents, marking a meaningful step forward together.'
  },
  {
    date: 'September 13, 2026',
    title: 'The Engagement',
    description: 'Exchanged rings and promised forever, surrounded by our loved ones as we look ahead to the wedding.'
  }
];

// Curated high-aesthetic vector illustrations in Sangria, Oat, Thistle, Clay, and Rose palette
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Auspicious Vows & Union',
    caption: 'Two hearts joined in sacred tradition, devotion, and joy.',
    aspect: 'portrait',
    category: 'Ceremony',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
        <defs>
          <linearGradient id="gSky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3A101C"/>
            <stop offset="35%" stop-color="#76263F"/>
            <stop offset="65%" stop-color="#D28793"/>
            <stop offset="85%" stop-color="#C48A4E"/>
            <stop offset="100%" stop-color="#F8F3EC"/>
          </linearGradient>
          <radialGradient id="sunGlow1" cx="50%" cy="58%" r="42%">
            <stop offset="0%" stop-color="#FFF5F7" stop-opacity="0.95"/>
            <stop offset="45%" stop-color="#EBB6BF" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#76263F" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="landGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4B1525"/>
            <stop offset="100%" stop-color="#240710"/>
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill="url(#gSky1)"/>
        <circle cx="400" cy="580" r="150" fill="url(#sunGlow1)"/>
        <!-- Mandap / Arch Silhouette in Sunset -->
        <path d="M160,1000 L160,540 Q400,380 640,540 L640,1000 Z" fill="#290E17" opacity="0.6"/>
        <path d="M0,720 Q200,660 400,700 T800,670 L800,1000 L0,1000 Z" fill="url(#landGrad1)"/>
        <!-- Couple Silhouette -->
        <g transform="translate(365, 545)">
          <ellipse cx="28" cy="42" rx="11" ry="13" fill="#1C060D"/>
          <path d="M16,56 Q28,52 38,56 L42,160 L14,160 Z" fill="#1C060D"/>
          <ellipse cx="50" cy="48" rx="10" ry="12" fill="#1C060D"/>
          <path d="M40,60 Q52,57 60,60 L75,160 Q48,165 35,160 Z" fill="#1C060D"/>
          <!-- Traditional garland / kasavu drape accent in Clay -->
          <path d="M32,66 Q42,88 56,70" stroke="#C48A4E" stroke-width="3" fill="none"/>
        </g>
        <text x="400" y="930" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-style="italic" fill="#F8F3EC" text-anchor="middle" letter-spacing="3">The Sacred Muhurtham</text>
        <text x="400" y="960" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#DCD0DE" text-anchor="middle" letter-spacing="4">PATHANAMTHITTA · KERALAM</text>
      </svg>
    `)
  },
  {
    id: 'g2',
    title: 'Backwater Sunset Reflections',
    caption: 'Serene backwaters of Cherthala and Thanneermukkom at sunset hour.',
    aspect: 'landscape',
    category: 'Portraits',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
        <defs>
          <linearGradient id="bkSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3D1220"/>
            <stop offset="40%" stop-color="#76263F"/>
            <stop offset="75%" stop-color="#D28793"/>
            <stop offset="100%" stop-color="#F8F3EC"/>
          </linearGradient>
          <linearGradient id="bkWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5B1C2E"/>
            <stop offset="50%" stop-color="#3D1220"/>
            <stop offset="100%" stop-color="#1B050D"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="700" fill="url(#bkSky)"/>
        <circle cx="750" cy="270" r="80" fill="#FFF2F4" opacity="0.9"/>
        <!-- Shoreline in Sangria / Water -->
        <path d="M0,380 Q300,340 600,380 T1000,360 L1000,700 L0,700 Z" fill="url(#bkWater)"/>
        <!-- Palm silhouettes along shoreline -->
        <g stroke="#260C14" stroke-width="4" fill="none">
          <path d="M140,400 Q150,280 180,210"/>
          <path d="M180,210 Q140,190 120,200"/>
          <path d="M180,210 Q210,180 230,195"/>
          <path d="M180,210 Q220,230 235,250"/>
        </g>
        <!-- Traditional Boat Silhouette -->
        <g transform="translate(480, 410)">
          <path d="M-60,10 Q0,25 70,10 L50,22 L-40,22 Z" fill="#200A11"/>
          <ellipse cx="5" cy="5" rx="6" ry="8" fill="#200A11"/>
          <ellipse cx="25" cy="8" rx="5" ry="7" fill="#200A11"/>
        </g>
        <!-- Shimmering water ripples in Clay and Rose -->
        <ellipse cx="750" cy="420" rx="90" ry="12" fill="#EBB6BF" opacity="0.6"/>
        <ellipse cx="750" cy="480" rx="130" ry="14" fill="#C48A4E" opacity="0.5"/>
        <text x="500" y="650" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-style="italic" fill="#F8F3EC" text-anchor="middle" letter-spacing="2">Sunset Along the Shores of Cherthala</text>
      </svg>
    `)
  },
  {
    id: 'g3',
    title: 'Tradition & Golden Kasavu',
    caption: 'Classic Kerala wedding motifs with brass nilavilakku and fragrant jasmine garlands.',
    aspect: 'square',
    category: 'Details',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
        <defs>
          <radialGradient id="lampBg" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#EDE5ED"/>
            <stop offset="60%" stop-color="#C48A4E"/>
            <stop offset="100%" stop-color="#5C182B"/>
          </radialGradient>
          <linearGradient id="brassGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#FFF6D9"/>
            <stop offset="30%" stop-color="#C48A4E"/>
            <stop offset="70%" stop-color="#EED596"/>
            <stop offset="100%" stop-color="#915B22"/>
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="40%" stop-color="#FFDA73"/>
            <stop offset="100%" stop-color="#D28793" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="800" fill="url(#lampBg)"/>
        <!-- Nilavilakku (Traditional Kerala Brass Lamp) Silhouette & Gold -->
        <g transform="translate(400, 220)">
          <ellipse cx="0" cy="380" rx="140" ry="30" fill="url(#brassGold)"/>
          <rect x="-18" y="220" width="36" height="160" fill="url(#brassGold)"/>
          <ellipse cx="0" cy="220" rx="110" ry="24" fill="url(#brassGold)"/>
          <rect x="-14" y="90" width="28" height="130" fill="url(#brassGold)"/>
          <ellipse cx="0" cy="90" rx="90" ry="20" fill="url(#brassGold)"/>
          <circle cx="0" cy="40" r="35" fill="url(#flameGlow)"/>
          <path d="M-8,55 Q0,10 0,5 Q0,10 8,55 Z" fill="#FFE885"/>
        </g>
        <text x="400" y="730" font-family="'Cormorant Garamond', Georgia, serif" font-size="26" font-style="italic" fill="#FAF5EF" text-anchor="middle" letter-spacing="2">Sacred Light of Love &amp; Prosperity</text>
      </svg>
    `)
  },
  {
    id: 'g4',
    title: 'The Evening Reception',
    caption: 'Celebratory night at Kumarakam Gateway KTDC, Cherthala.',
    aspect: 'portrait',
    category: 'Celebration',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
        <defs>
          <linearGradient id="recpBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#14060A"/>
            <stop offset="50%" stop-color="#2D0F19"/>
            <stop offset="100%" stop-color="#4C1527"/>
          </linearGradient>
          <radialGradient id="fairylight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFF3F5" stop-opacity="0.95"/>
            <stop offset="40%" stop-color="#D28793" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#2D0F19" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="1000" fill="url(#recpBg)"/>
        <!-- Festive fairy lights festoon in Rose and Clay -->
        <path d="M0,170 Q400,270 800,150" stroke="#D28793" stroke-width="2" fill="none" opacity="0.6"/>
        <circle cx="150" cy="215" r="28" fill="url(#fairylight)"/>
        <circle cx="150" cy="215" r="5" fill="#FFFFFF"/>
        <circle cx="320" cy="235" r="28" fill="url(#fairylight)"/>
        <circle cx="320" cy="235" r="5" fill="#FFFFFF"/>
        <circle cx="500" cy="230" r="28" fill="url(#fairylight)"/>
        <circle cx="500" cy="230" r="5" fill="#FFFFFF"/>
        <circle cx="680" cy="195" r="28" fill="url(#fairylight)"/>
        <circle cx="680" cy="195" r="5" fill="#FFFFFF"/>
        <path d="M120,1000 L120,480 Q400,320 680,480 L680,1000 Z" fill="#200A12" opacity="0.75"/>
        <text x="400" y="930" font-family="'Cormorant Garamond', Georgia, serif" font-size="26" font-style="italic" fill="#F8F3EC" text-anchor="middle" letter-spacing="3">The Grand Wedding Reception</text>
        <text x="400" y="960" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#DCD0DE" text-anchor="middle" letter-spacing="4">CHERTHALA · KERALAM</text>
      </svg>
    `)
  },
  {
    id: 'g5',
    title: 'Floral Garlands & Lotus Blooms',
    caption: 'Traditional fragrant tuberose, marigolds, and lotus blossoms.',
    aspect: 'square',
    category: 'Details',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
        <defs>
          <linearGradient id="lotusBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F8F3EC"/>
            <stop offset="50%" stop-color="#EDE5ED"/>
            <stop offset="100%" stop-color="#D28793"/>
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#lotusBg)"/>
        <circle cx="400" cy="400" r="260" fill="#C48A4E" stroke="#76263F" stroke-width="6"/>
        <circle cx="400" cy="400" r="240" fill="#4E1525"/>
        <circle cx="400" cy="400" r="230" fill="#2D0B16"/>
        <!-- Floating Lotus in Rose and Sangria -->
        <g transform="translate(400, 390)">
          <ellipse cx="0" cy="0" rx="35" ry="70" fill="#D28793" opacity="0.95"/>
          <ellipse cx="-45" cy="20" rx="30" ry="60" fill="#76263F" transform="rotate(-35 -45 20)"/>
          <ellipse cx="45" cy="20" rx="30" ry="60" fill="#76263F" transform="rotate(35 45 20)"/>
          <circle cx="0" cy="15" r="20" fill="#C48A4E"/>
        </g>
        <text x="400" y="740" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-style="italic" fill="#FAF5EF" text-anchor="middle" letter-spacing="2">Auspicious Blessings &amp; Joy</text>
      </svg>
    `)
  },
  {
    id: 'g6',
    title: 'Cherished Family & New Beginnings',
    caption: 'With the blessings of our elders and the love of our families.',
    aspect: 'landscape',
    category: 'Memories',
    imageUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
        <defs>
          <linearGradient id="warmGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3D1220"/>
            <stop offset="45%" stop-color="#76263F"/>
            <stop offset="70%" stop-color="#D28793"/>
            <stop offset="100%" stop-color="#F8F3EC"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="700" fill="url(#warmGrad)"/>
        <circle cx="500" cy="350" r="100" fill="#FFF2F4" opacity="0.85"/>
        <text x="500" y="520" font-family="'Cormorant Garamond', Georgia, serif" font-size="34" font-style="italic" fill="#2B1019" text-anchor="middle">Gokul &amp; Mydhili</text>
        <text x="500" y="560" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#76263F" text-anchor="middle" letter-spacing="4">DECEMBER 2026</text>
      </svg>
    `)
  }
];
