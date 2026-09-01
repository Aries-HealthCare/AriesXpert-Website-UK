import { UKCityHub, UKNation } from './types';

export const UK_CITY_HUBS: UKCityHub[] = [
  {
    id: "hub-london",
    name: "Greater London",
    nation: "England",
    region: "London",
    slug: "england/london",
    headline: "In-Home & Virtual Physiotherapy across London & M25 Corridor",
    description: "Hospital-grade clinical physical therapy delivered directly to your home, mews, or office across Central London, West End, City, and surrounding commuter boroughs.",
    keyPostcodes: ["EC1-EC4", "WC1-WC2", "W1-W14", "SW1-SW20", "NW1-NW11", "SE1-SE28", "N1-N22", "E1-E18"],
    keyHubs: ["Westminster & Mayfair", "Kensington & Chelsea", "City of London & Canary Wharf", "Richmond & Wimbledon", "Hampstead & St John's Wood", "Islington & Shoreditch"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "Same Day / < 45 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-manchester",
    name: "Greater Manchester",
    nation: "England",
    region: "North West",
    slug: "england/manchester",
    headline: "Specialized Orthopaedic & Sports Rehab in Manchester",
    description: "Rapid in-home physical therapy across Manchester City Centre, Salford Quays, Didsbury, Altrincham, Trafford, and Cheshire Golden Triangle.",
    keyPostcodes: ["M1-M9", "M14-M20", "M33", "M50", "SK1-SK9", "WA14-WA15"],
    keyHubs: ["Manchester City Centre & Deansgate", "Salford Quays & MediaCityUK", "Didsbury & Chorlton", "Altrincham & Hale", "Wilmslow & Alderley Edge"],
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "Same Day / < 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-birmingham",
    name: "Birmingham & West Midlands",
    nation: "England",
    region: "West Midlands",
    slug: "england/birmingham",
    headline: "In-Home Musculoskeletal & Neuro Care in Birmingham",
    description: "Comprehensive home physiotherapy for spine conditions, joint replacements, and stroke rehabilitation across Birmingham, Edgbaston, Solihull, and Sutton Coldfield.",
    keyPostcodes: ["B1-B19", "B29-B32", "B72-B76", "B90-B94"],
    keyHubs: ["Birmingham City Centre & Jewellery Quarter", "Edgbaston & Harborne", "Solihull & Knowle", "Sutton Coldfield & Four Oaks"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-edinburgh",
    name: "Edinburgh & Lothians",
    nation: "Scotland",
    region: "Lothians",
    slug: "scotland/edinburgh",
    headline: "Chartered Physiotherapy in Scotland's Capital",
    description: "Mobile and clinic-grade physical rehabilitation delivered to Edinburgh New Town, West End, Morningside, Leith, and East/West Lothian.",
    keyPostcodes: ["EH1-EH17", "EH28-EH30"],
    keyHubs: ["Edinburgh New Town & Stockbridge", "West End & Haymarket", "Morningside & Bruntsfield", "Leith & Shore", "South Queensferry"],
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-glasgow",
    name: "Glasgow & Clyde Valley",
    nation: "Scotland",
    region: "Greater Glasgow",
    slug: "scotland/glasgow",
    headline: "Spine, Joint & Post-Surgical Recovery in Glasgow",
    description: "In-home physiotherapy services covering Glasgow West End, City Centre, Southside, Bearsden, Milngavie, and Newton Mearns.",
    keyPostcodes: ["G1-G5", "G11-G15", "G41-G46", "G61-G62", "G77"],
    keyHubs: ["Glasgow West End & Kelvingrove", "Merchant City & Centre", "Southside (Shawlands/Giffnock)", "Bearsden & Milngavie"],
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-bristol",
    name: "Bristol & Bath",
    nation: "England",
    region: "South West",
    slug: "england/bristol",
    headline: "Restoring Active Movement across the West of England",
    description: "Evidence-based home physical therapy in Clifton, Redland, Harbourside, Central Bristol, and the historic Georgian city of Bath.",
    keyPostcodes: ["BS1-BS9", "BS16", "BA1-BA2"],
    keyHubs: ["Clifton & Redland", "Bristol Harbourside", "Bath City Centre & Lansdown", "Cotham & Henleaze"],
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-leeds",
    name: "Leeds & West Yorkshire",
    nation: "England",
    region: "Yorkshire",
    slug: "england/leeds",
    headline: "Orthopaedic & Chronic Pain Physical Therapy in Yorkshire",
    description: "In-home physiotherapy across Leeds City Centre, Headingley, Roundhay, Alwoodley, Horsforth, and Bradford outskirts.",
    keyPostcodes: ["LS1-LS18", "LS29", "BD1-BD8"],
    keyHubs: ["Leeds City Centre", "Headingley & Far Headingley", "Roundhay & Alwoodley", "Horsforth & Guiseley"],
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-cardiff",
    name: "Cardiff & South Wales",
    nation: "Wales",
    region: "South Wales",
    slug: "wales/cardiff",
    headline: "Bilingual Registered Physiotherapy in Wales",
    description: "Chartered physical therapy for post-op, spinal, and sports conditions across Cardiff Bay, Pontcanna, Penarth, and Newport corridor.",
    keyPostcodes: ["CF10-CF11", "CF14-CF15", "CF23-CF24", "CF64"],
    keyHubs: ["Cardiff Bay & City Centre", "Pontcanna & Llandaff", "Penarth & Vale of Glamorgan", "Roath & Cyncoed"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  },
  {
    id: "hub-belfast",
    name: "Belfast & Greater Area",
    nation: "Northern Ireland",
    region: "Greater Belfast",
    slug: "northern-ireland/belfast",
    headline: "Direct Access Physical Therapy in Northern Ireland",
    description: "Hospital-standard in-home physiotherapy across Belfast City Centre, Titanic Quarter, Malone Road, Lisburn, and North Down.",
    keyPostcodes: ["BT1-BT15", "BT18-BT20", "BT27-BT28"],
    keyHubs: ["Belfast City Centre & Titanic Quarter", "Malone Road & Stranmillis", "Holywood & Bangor (North Down)", "Lisburn & Hillsborough"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    inHomeLeadTime: "< 60 Mins",
    directBillingSupported: true
  }
];

export const UK_NATIONS: UKNation[] = [
  {
    code: "ENG",
    name: "England",
    slug: "england",
    capital: "London",
    majorHubs: UK_CITY_HUBS.filter(h => h.nation === "England"),
    regulatoryCollegeName: "Health and Care Professions Council (HCPC)",
    hpcFrameworkNote: "Chartered Society of Physiotherapy (CSP) recognized practice."
  },
  {
    code: "SCT",
    name: "Scotland",
    slug: "scotland",
    capital: "Edinburgh",
    majorHubs: UK_CITY_HUBS.filter(h => h.nation === "Scotland"),
    regulatoryCollegeName: "Health and Care Professions Council (HCPC) Scotland",
    hpcFrameworkNote: "NHS Scotland step-down and direct private care."
  },
  {
    code: "WLS",
    name: "Wales",
    slug: "wales",
    capital: "Cardiff",
    majorHubs: UK_CITY_HUBS.filter(h => h.nation === "Wales"),
    regulatoryCollegeName: "Health and Care Professions Council (HCPC) Cymru",
    hpcFrameworkNote: "Bilingual English & Welsh clinical communication available."
  },
  {
    code: "NIR",
    name: "Northern Ireland",
    slug: "northern-ireland",
    capital: "Belfast",
    majorHubs: UK_CITY_HUBS.filter(h => h.nation === "Northern Ireland"),
    regulatoryCollegeName: "Health and Care Professions Council (HCPC) NI",
    hpcFrameworkNote: "Full Northern Ireland coverage and direct insurer billing."
  }
];
