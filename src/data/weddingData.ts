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

// Gallery photos: files live in public/gallery/
const galleryFiles = Array.from({ length: 13 }, (_, i) => `g${i + 1}.jpeg`);

export const galleryPhotos: GalleryPhoto[] = galleryFiles.map((file, i) => ({
  id: `g${i + 1}`,
  title: `Moment ${i + 1}`,
  caption: 'A cherished moment from the celebration.',
  aspect: 'portrait',
  category: 'Celebration',
  imageUrl: `/gallery/${file}`,
}));