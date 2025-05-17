import LevelImg1 from "@/public/images/property/level-1.jpg";
import LevelImg2 from "@/public/images/property/level-12.jpg";
import LevelImg3 from "@/public/images/property/level-63a.jpg";
import LevelImg4 from "@/public/images/property/level-66.jpg";
import LevelImg5 from "@/public/images/property/level-67.jpg";
import LayoutA from "@/public/images/property/layout_a1.jpg";
import LayoutB1 from "@/public/images/property/layout_b1.jpg";
import LayoutB2 from "@/public/images/property/layout_b2.jpg";
import LayoutC1 from "@/public/images/property/layout_c1.jpg";
import LayoutC2 from "@/public/images/property/layout_c2.jpg";
import LayoutC3 from "@/public/images/property/layout_c3.jpg";
import LayoutC4 from "@/public/images/property/layout_c4.jpg";
import LayoutD from "@/public/images/property/layout_d.jpg";
import OfficeLayout1 from "@/public/images/property/layout_1.jpg";
import OfficeLayout2 from "@/public/images/property/layout_2.jpg";
import OfficeLayout3 from "@/public/images/property/layout_3.jpg";
import OfficeLayout3A from "@/public/images/property/layout_3A.jpg";
import OfficeLayout5 from "@/public/images/property/layout_5.jpg";
import OfficeLayout5A from "@/public/images/property/layout_5A.jpg";
import OfficeLayoutPent from "@/public/images/property/layout_penthouse.jpg";

import PG_CS1 from "@/public/images/property/CS1.jpg";
import PG_CS2 from "@/public/images/property/CS2.jpg";
import PG_CS3 from "@/public/images/property/CS3.jpg";
import PG_CS4 from "@/public/images/property/CS4.jpg";
import PG_CS5 from "@/public/images/property/CS5.jpg";
import PG_R1 from "@/public/images/property/R1.jpg";
import PG_R2 from "@/public/images/property/R2.jpg";
import PG_R3 from "@/public/images/property/R3.jpg";
import PG_R4 from "@/public/images/property/R4.jpg";
import PG_R5 from "@/public/images/property/R5.jpg";

export const FacilitiesTabs = [
  {
    level: 1,
    image: LevelImg1,
    description: "LOBBY",
    item: [
      "Retail",
      "Lobby",
      "Concierge",
      "Waiting Lounge",
      "Mail Room",
      "Washroom",
      " Management Office",
      "Security Room",
      "Lift Lobby",
      "Collection Room",
    ],
  },
  {
    level: 12,
    image: LevelImg2,
    description: "COURTYARD GARDEN",
    item: [
      "Access to Link-bridge",
      "Water Feature and Plaza",
      "Serene Trail",
      "The Promenade Walkway",
      "Garden Terrace",
      "Yoga Deck",
      "Seating Courtyard",
      "The Retreat",
      "Club Lounge",
      "Lift Lobby",
      "Outdoor Lounge",
      "Multi-purpose Hall",
      "Pre-function Room",
      "Washroom",
      "Lanscape Terrace",
      "Karaoke Room",
      "Foosball Table",
      "Pool Table",
      "Entertainment Room",
      "Mahjong Room",
      "Snooker Table",
      "Lounge Area",
      "BBQ Deck",
      "Operation Office*",
      "Laundromat*",
      "Indoor Kids Room",
      "Kids Playground",
      "Surau",
    ],
  },
  {
    level: "63A",
    image: LevelImg3,
    description: "SKY WELLNESS",
    item: [
      "Outdoor Yoga Deck",
      "Gymnasium (Cardio & Strength Training)",
      "Lift Lobby",
      "Sports Lounge",
      "Outdoor Lounge",
      "Washroom",
      "Lockers",
      "Sauna",
      "Steam Room",
      "Changing Room",
      "Gymnasium (Functional Training)",
      "Facilities Lift (Level 66 & 67)",
      "Gymnasium (Cardio & Functional Training)",
      "Outdoor Gymnasium",
    ],
  },
  {
    level: 66,
    image: LevelImg4,
    description: "SKY GARDEN",
    item: [
      "Co-working Lounge",
      "Indoor Lounge",
      "Reading Court",
      "Sunken Plaza and Viewing Deck",
      "Facilities Lift (Level 66 & 67)",
      "Washroom",
      "Sky Plaza",
      "Spiral Staircase",
    ],
  },
  {
    level: 67,
    image: LevelImg5,
    description: "SKY POOL",
    item: [
      "Infinity Pool",
      "Kids Pool",
      "Table and Seating Area",
      "Wading Pool/Jacuzzi",
      "Pool Deck",
      "Outdoor Shower",
      "Sun Loungers",
      "Facilities Lift (Level 66 & 67)",
      "Spiral Staircase",
    ],
  },
];

export const ResidentialLayoutTabs = [
  {
    layout: "A",
    image: [LayoutA],
  },
  {
    layout: "B",
    image: [LayoutB1, LayoutB2],
  },
  {
    layout: "C",
    image: [LayoutC1, LayoutC2, LayoutC3, LayoutC4],
  },
  {
    layout: "D",
    image: [LayoutD],
  },
];

export const OfficeLayoutTabs = [
  {
    layout: "Office 1",
    image: [OfficeLayout1],
  },
  {
    layout: "Office 2",
    image: [OfficeLayout2],
  },
  {
    layout: "Office 3",
    image: [OfficeLayout3],
  },
  {
    layout: "Office 3A",
    image: [OfficeLayout3A],
  },
  {
    layout: "Office 5",
    image: [OfficeLayout5],
  },
  {
    layout: "Office 5A",
    image: [OfficeLayout5A],
  },
  {
    layout: "Penthouse",
    image: [OfficeLayoutPent],
  },
];

export const PhotoGalleryTabs = [
  {
    name: "Corporate Suites",
    image: [PG_CS1, PG_CS2, PG_CS3, PG_CS4, PG_CS5],
  },
  {
    name: "Luxury Residential",
    image: [PG_R1, PG_R2, PG_R3, PG_R4, PG_R5],
  },
];

export const FooterList = [
  {
    name: "Site Links",
    items: [
      {
        id: "#home",
        name: "Home",
      },
      {
        id: "#location",
        name: "Location",
      },
      {
        id: "#luxury-residences",
        name: "Luxury Residences",
      },
      {
        id: "#corporate-suites",
        name: "Corporate Suites",
      },
      {
        id: "#gallery",
        name: "Gallery",
      },
      {
        id: "#contact-us",
        name: "Contact Us",
      },
    ],
  },
  {
    name: "Info",
    items: [
      {
        id: "#",
        name: "Type of Development: Integrated Development",
      },
      {
        id: "#",
        name: "Location: Bukit Bintang Kuala Lumpur",
      },
      {
        id: "#",
        name: "Developer: Pavillion Group",
      },
    ],
  },
];
