/**
 * AriesXpert UK - Comprehensive Locality, Postcode & Tiered Pricing System (2026)
 * Standardized across Customer-Facing Website Landing Pages and Clinical Dispatch
 */

export interface PackageTierOption {
  days: number; // 6, 10, 15, 20, 30
  ratePerSession: number;
  totalPrice: number;
  totalSavings: number;
  discountPercent: number;
}

export interface PricingTier {
  id: 'economy' | 'standard' | 'premium' | 'luxury' | 'custom';
  name: string;
  badge: string;
  basePrice: number; // Single session base price (GBP)
  currency: string;
  description: string;
  recommendedAreas: string[];
  packages: {
    days10: PackageTierOption;
    days15: PackageTierOption;
    days20: PackageTierOption;
    days30: PackageTierOption;
  };
}

export interface LocalityPricingRecord {
  state: string; // Nation (England, Scotland, Wales, Northern Ireland)
  city: string;
  subArea: string;
  tierId: 'economy' | 'standard' | 'premium' | 'luxury';
  basePrice: number;
  pincodes: string[]; // Postcodes / Outward codes
  keywords: string[];
}

export const STANDARD_PRICING_TIERS: Record<string, PricingTier> = {
  economy: {
    id: 'economy',
    name: 'Regional UK Tier',
    badge: '£85/-',
    basePrice: 85,
    currency: 'GBP',
    description: 'Regional UK towns and commuter counties (Oxford, Cambridge, York, Exeter, Southampton)',
    recommendedAreas: ['Reading', 'Oxford', 'Cambridge', 'Norwich', 'Exeter', 'Plymouth', 'York', 'Durham', 'Brighton', 'Bournemouth', 'Southampton', 'Coventry'],
    packages: {
      days10: {
        days: 10,
        ratePerSession: 78,
        totalPrice: 780,
        totalSavings: 70,
        discountPercent: 8,
      },
      days15: {
        days: 15,
        ratePerSession: 75,
        totalPrice: 1125,
        totalSavings: 150,
        discountPercent: 12,
      },
      days20: {
        days: 20,
        ratePerSession: 70,
        totalPrice: 1400,
        totalSavings: 300,
        discountPercent: 18,
      },
      days30: {
        days: 30,
        ratePerSession: 65,
        totalPrice: 1950,
        totalSavings: 600,
        discountPercent: 24,
      },
    },
  },
  standard: {
    id: 'standard',
    name: 'Major UK Metros',
    badge: '£100/-',
    basePrice: 100,
    currency: 'GBP',
    description: 'Major UK metropolitan centres (Manchester, Birmingham, Edinburgh, Glasgow, Leeds, Bristol, Cardiff, Belfast)',
    recommendedAreas: ['Manchester', 'Birmingham', 'Edinburgh', 'Glasgow', 'Bristol', 'Leeds', 'Sheffield', 'Liverpool', 'Cardiff', 'Belfast', 'Bath', 'Newcastle'],
    packages: {
      days10: {
        days: 10,
        ratePerSession: 92,
        totalPrice: 920,
        totalSavings: 80,
        discountPercent: 8,
      },
      days15: {
        days: 15,
        ratePerSession: 88,
        totalPrice: 1320,
        totalSavings: 180,
        discountPercent: 12,
      },
      days20: {
        days: 20,
        ratePerSession: 82,
        totalPrice: 1640,
        totalSavings: 360,
        discountPercent: 18,
      },
      days30: {
        days: 30,
        ratePerSession: 75,
        totalPrice: 2250,
        totalSavings: 750,
        discountPercent: 25,
      },
    },
  },
  premium: {
    id: 'premium',
    name: 'Greater London Hubs',
    badge: '£130/-',
    basePrice: 130,
    currency: 'GBP',
    description: 'Greater London boroughs & financial corridors (Canary Wharf, Richmond, Wimbledon, Islington, Shoreditch)',
    recommendedAreas: ['London', 'Canary Wharf', 'Richmond', 'Wimbledon', 'Hammersmith', 'Islington', 'Shoreditch', 'Hackney', 'Brixton', 'Greenwich', 'Battersea'],
    packages: {
      days10: {
        days: 10,
        ratePerSession: 120,
        totalPrice: 1200,
        totalSavings: 100,
        discountPercent: 8,
      },
      days15: {
        days: 15,
        ratePerSession: 115,
        totalPrice: 1725,
        totalSavings: 225,
        discountPercent: 12,
      },
      days20: {
        days: 20,
        ratePerSession: 108,
        totalPrice: 2160,
        totalSavings: 440,
        discountPercent: 17,
      },
      days30: {
        days: 30,
        ratePerSession: 98,
        totalPrice: 2940,
        totalSavings: 960,
        discountPercent: 25,
      },
    },
  },
  luxury: {
    id: 'luxury',
    name: 'Prime Central London Concierge',
    badge: '£160/-',
    basePrice: 160,
    currency: 'GBP',
    description: 'Prime Central London concierge in-home physiotherapy (Mayfair, Kensington, Chelsea, Westminster, Belgravia)',
    recommendedAreas: ['Mayfair', 'Belgravia', 'Kensington', 'Chelsea', 'Knightsbridge', 'Westminster', 'Marylebone', 'St John\'s Wood', 'Hampstead', 'Holland Park'],
    packages: {
      days10: {
        days: 10,
        ratePerSession: 148,
        totalPrice: 1480,
        totalSavings: 120,
        discountPercent: 7.5,
      },
      days15: {
        days: 15,
        ratePerSession: 140,
        totalPrice: 2100,
        totalSavings: 300,
        discountPercent: 12.5,
      },
      days20: {
        days: 20,
        ratePerSession: 130,
        totalPrice: 2600,
        totalSavings: 600,
        discountPercent: 18.75,
      },
      days30: {
        days: 30,
        ratePerSession: 120,
        totalPrice: 3600,
        totalSavings: 1200,
        discountPercent: 25,
      },
    },
  },
};

/**
 * 2026 Comprehensive UK Locality, Postcode & Pricing Registry
 */
export const UK_LOCALITIES_PRICING: LocalityPricingRecord[] = [
  // ─── GREATER LONDON : PRIME CONCIERGE & CENTRAL ─────────────────────
  { state: 'England', city: 'London', subArea: 'Mayfair & St James\'s', tierId: 'luxury', basePrice: 160, pincodes: ['W1', 'W1J', 'W1K', 'SW1', 'SW1A'], keywords: ['mayfair', 'st james', 'bond street', 'piccadilly', 'park lane', 'berkeley square'] },
  { state: 'England', city: 'London', subArea: 'Kensington & Chelsea', tierId: 'luxury', basePrice: 160, pincodes: ['SW3', 'SW7', 'SW10', 'W8'], keywords: ['kensington', 'chelsea', 'south kensington', 'kings road', 'sloane square', 'brompton'] },
  { state: 'England', city: 'London', subArea: 'Belgravia & Knightsbridge', tierId: 'luxury', basePrice: 160, pincodes: ['SW1X', 'SW1W', 'SW7'], keywords: ['belgravia', 'knightsbridge', 'eaton square', 'harrods', 'cadogan'] },
  { state: 'England', city: 'London', subArea: 'Westminster & Marylebone', tierId: 'luxury', basePrice: 160, pincodes: ['SW1P', 'W1U', 'W1G', 'W1H'], keywords: ['westminster', 'marylebone', 'victoria', 'baker street', 'harley street', 'regent park'] },
  { state: 'England', city: 'London', subArea: 'Hampstead & St John\'s Wood', tierId: 'luxury', basePrice: 160, pincodes: ['NW3', 'NW8'], keywords: ['hampstead', 'st johns wood', 'highgate', 'primrose hill', 'swiss cottage', 'belsize park'] },

  // ─── GREATER LONDON : PREMIUM URBAN HUBS ────────────────────────────
  { state: 'England', city: 'London', subArea: 'Canary Wharf & Docklands', tierId: 'premium', basePrice: 130, pincodes: ['E14', 'SE16'], keywords: ['canary wharf', 'docklands', 'isle of dogs', 'canada water', 'rotherhithe'] },
  { state: 'England', city: 'London', subArea: 'City of London & Shoreditch', tierId: 'premium', basePrice: 130, pincodes: ['EC1', 'EC2', 'EC3', 'EC4', 'E1', 'E2'], keywords: ['city of london', 'shoreditch', 'liverpool street', 'bank', 'moorgate', 'hoxton', 'spitalfields'] },
  { state: 'England', city: 'London', subArea: 'Richmond & Twickenham', tierId: 'premium', basePrice: 130, pincodes: ['TW9', 'TW10', 'TW1'], keywords: ['richmond', 'twickenham', 'kew', 'richmond hill', 'st margarets', 'petersham'] },
  { state: 'England', city: 'London', subArea: 'Wimbledon & Putney', tierId: 'premium', basePrice: 130, pincodes: ['SW19', 'SW15', 'SW20'], keywords: ['wimbledon', 'putney', 'wimbledon village', 'southfields', 'raynes park'] },
  { state: 'England', city: 'London', subArea: 'Islington & Highbury', tierId: 'premium', basePrice: 130, pincodes: ['N1', 'N5'], keywords: ['islington', 'highbury', 'angel', 'upper street', 'canonbury', 'essex road'] },
  { state: 'England', city: 'London', subArea: 'Battersea & Clapham', tierId: 'premium', basePrice: 130, pincodes: ['SW11', 'SW4'], keywords: ['battersea', 'clapham', 'battersea power station', 'clapham common', 'nine elms'] },
  { state: 'England', city: 'London', subArea: 'Greenwich & Blackheath', tierId: 'premium', basePrice: 130, pincodes: ['SE10', 'SE3'], keywords: ['greenwich', 'blackheath', 'greenwich park', 'cutty sark', 'maze hill'] },

  // ─── GREATER MANCHESTER ─────────────────────────────────────────────
  { state: 'England', city: 'Manchester', subArea: 'Manchester City Centre & Deansgate', tierId: 'standard', basePrice: 100, pincodes: ['M1', 'M2', 'M3', 'M4'], keywords: ['manchester city centre', 'deansgate', 'northern quarter', 'spinningfields', 'ancoats', 'castlefield'] },
  { state: 'England', city: 'Manchester', subArea: 'Salford Quays & MediaCityUK', tierId: 'standard', basePrice: 100, pincodes: ['M50', 'M5'], keywords: ['salford quays', 'mediacityuk', 'salford', 'oradall'] },
  { state: 'England', city: 'Manchester', subArea: 'Didsbury & Chorlton', tierId: 'standard', basePrice: 100, pincodes: ['M20', 'M21'], keywords: ['didsbury', 'chorlton', 'west didsbury', 'east didsbury', 'chorlton-cum-hardy'] },
  { state: 'England', city: 'Manchester', subArea: 'Altrincham, Hale & Bowdon', tierId: 'standard', basePrice: 100, pincodes: ['WA14', 'WA15'], keywords: ['altrincham', 'hale', 'bowdon', 'hale barns', 'trafford'] },
  { state: 'England', city: 'Manchester', subArea: 'Wilmslow & Alderley Edge', tierId: 'standard', basePrice: 100, pincodes: ['SK9', 'SK10'], keywords: ['wilmslow', 'alderley edge', 'cheshire golden triangle', 'handforth'] },

  // ─── BIRMINGHAM & WEST MIDLANDS ────────────────────────────────────
  { state: 'England', city: 'Birmingham', subArea: 'City Centre & Jewellery Quarter', tierId: 'standard', basePrice: 100, pincodes: ['B1', 'B2', 'B3', 'B18'], keywords: ['birmingham city centre', 'jewellery quarter', 'bullring', 'digbeth', 'brindleyplace'] },
  { state: 'England', city: 'Birmingham', subArea: 'Edgbaston & Harborne', tierId: 'standard', basePrice: 100, pincodes: ['B15', 'B17'], keywords: ['edgbaston', 'harborne', 'university of birmingham', 'hagley road'] },
  { state: 'England', city: 'Birmingham', subArea: 'Solihull & Knowle', tierId: 'standard', basePrice: 100, pincodes: ['B90', 'B91', 'B92', 'B93'], keywords: ['solihull', 'knowle', 'dorridge', 'shirley', 'bentley heath'] },
  { state: 'England', city: 'Birmingham', subArea: 'Sutton Coldfield & Four Oaks', tierId: 'standard', basePrice: 100, pincodes: ['B72', 'B73', 'B74', 'B75'], keywords: ['sutton coldfield', 'four oaks', 'little aston', 'boldmere', 'walmley'] },

  // ─── EDINBURGH & SCOTLAND ──────────────────────────────────────────
  { state: 'Scotland', city: 'Edinburgh', subArea: 'New Town & Stockbridge', tierId: 'standard', basePrice: 100, pincodes: ['EH2', 'EH3', 'EH4'], keywords: ['edinburgh new town', 'stockbridge', 'george street', 'queen street', 'dean village'] },
  { state: 'Scotland', city: 'Edinburgh', subArea: 'West End & Haymarket', tierId: 'standard', basePrice: 100, pincodes: ['EH1', 'EH12'], keywords: ['edinburgh west end', 'haymarket', 'murrayfield', 'roseburn'] },
  { state: 'Scotland', city: 'Edinburgh', subArea: 'Morningside & Bruntsfield', tierId: 'standard', basePrice: 100, pincodes: ['EH10'], keywords: ['morningside', 'bruntsfield', 'marchmont', 'the meadows'] },
  { state: 'Scotland', city: 'Edinburgh', subArea: 'Leith & Shore', tierId: 'standard', basePrice: 100, pincodes: ['EH6'], keywords: ['leith', 'the shore', 'ocean terminal', 'leith walk'] },
  { state: 'Scotland', city: 'Glasgow', subArea: 'Glasgow West End & Kelvingrove', tierId: 'standard', basePrice: 100, pincodes: ['G12', 'G11'], keywords: ['glasgow west end', 'kelvingrove', 'byres road', 'hillhead', 'partick'] },
  { state: 'Scotland', city: 'Glasgow', subArea: 'City Centre & Merchant City', tierId: 'standard', basePrice: 100, pincodes: ['G1', 'G2'], keywords: ['glasgow city centre', 'merchant city', 'george square', 'buchanan street'] },

  // ─── BRISTOL, BATH & LEEDS ─────────────────────────────────────────
  { state: 'England', city: 'Bristol', subArea: 'Clifton & Redland', tierId: 'standard', basePrice: 100, pincodes: ['BS8', 'BS6'], keywords: ['clifton', 'redland', 'cotham', 'whiteladies road', 'clifton suspension bridge'] },
  { state: 'England', city: 'Bristol', subArea: 'Harbourside & City Centre', tierId: 'standard', basePrice: 100, pincodes: ['BS1'], keywords: ['bristol harbourside', 'bristol city centre', 'wapping wharf'] },
  { state: 'England', city: 'Bath', subArea: 'Bath City Centre & Lansdown', tierId: 'standard', basePrice: 100, pincodes: ['BA1', 'BA2'], keywords: ['bath', 'royal crescent', 'lansdown', 'widcombe', 'bathwick'] },
  { state: 'England', city: 'Leeds', subArea: 'Leeds City Centre & Dock', tierId: 'standard', basePrice: 100, pincodes: ['LS1', 'LS2', 'LS10'], keywords: ['leeds city centre', 'leeds dock', 'briggate', 'granary wharf'] },
  { state: 'England', city: 'Leeds', subArea: 'Headingley & Roundhay', tierId: 'standard', basePrice: 100, pincodes: ['LS6', 'LS8'], keywords: ['headingley', 'roundhay', 'far headingley', 'roundhay park', 'oakwood'] },

  // ─── WALES & NORTHERN IRELAND ──────────────────────────────────────
  { state: 'Wales', city: 'Cardiff', subArea: 'Cardiff Bay & City Centre', tierId: 'standard', basePrice: 100, pincodes: ['CF10', 'CF11'], keywords: ['cardiff bay', 'cardiff city centre', 'pontcanna', 'penarth'] },
  { state: 'Northern Ireland', city: 'Belfast', subArea: 'City Centre & Titanic Quarter', tierId: 'standard', basePrice: 100, pincodes: ['BT1', 'BT2', 'BT3'], keywords: ['belfast city centre', 'titanic quarter', 'malone road', 'stranmillis'] },

  // ─── REGIONAL UK (ECONOMY TIER) ────────────────────────────────────
  { state: 'England', city: 'Oxford', subArea: 'Oxford Central & North Oxford', tierId: 'economy', basePrice: 85, pincodes: ['OX1', 'OX2'], keywords: ['oxford', 'north oxford', 'jericho', 'summertown'] },
  { state: 'England', city: 'Cambridge', subArea: 'Cambridge Central & Newnham', tierId: 'economy', basePrice: 85, pincodes: ['CB1', 'CB2', 'CB3'], keywords: ['cambridge', 'newnham', 'chesterton', 'trumpington'] },
  { state: 'England', city: 'York', subArea: 'York Central & Clifton', tierId: 'economy', basePrice: 85, pincodes: ['YO1', 'YO30'], keywords: ['york', 'clifton york', 'fulford', 'heslington'] },
  { state: 'England', city: 'Exeter', subArea: 'Exeter Central & St Leonards', tierId: 'economy', basePrice: 85, pincodes: ['EX1', 'EX2'], keywords: ['exeter', 'st leonards', 'topsham'] },
  { state: 'England', city: 'Brighton', subArea: 'Brighton & Hove', tierId: 'economy', basePrice: 85, pincodes: ['BN1', 'BN2', 'BN3'], keywords: ['brighton', 'hove', 'kemptown', 'clifton hill'] },
  { state: 'England', city: 'Southampton', subArea: 'Southampton Central & Ocean Village', tierId: 'economy', basePrice: 85, pincodes: ['SO14', 'SO15'], keywords: ['southampton', 'ocean village', 'portswood'] },
];

export const ALL_INDIA_LOCALITIES_2026 = UK_LOCALITIES_PRICING;

/**
 * Fast search for any UK Locality, Postcode, City, or Nation
 */
export function searchAllIndiaLocalities(query: string, limit: number = 20): LocalityPricingRecord[] {
  return searchUKLocalities(query, limit);
}

export function searchUKLocalities(query: string, limit: number = 20): LocalityPricingRecord[] {
  const q = (query || '').trim().toLowerCase();
  if (!q) return UK_LOCALITIES_PRICING.slice(0, limit);

  const matched = UK_LOCALITIES_PRICING.filter((loc) => {
    const inPostcode = loc.pincodes.some((pin) => pin.toLowerCase().startsWith(q) || q.startsWith(pin.toLowerCase()));
    const inSubArea = loc.subArea.toLowerCase().includes(q);
    const inCity = loc.city.toLowerCase().includes(q);
    const inState = loc.state.toLowerCase().includes(q);
    const inKeywords = loc.keywords.some((kw) => kw.includes(q) || q.includes(kw));
    return inPostcode || inSubArea || inCity || inState || inKeywords;
  });

  return matched.slice(0, limit);
}

/**
 * Intelligent location matching algorithm
 * Returns appropriate tier based on location text or UK outward postcode
 */
export function detectTierFromLocation(locationText: string): 'economy' | 'standard' | 'premium' | 'luxury' {
  const text = (locationText || '').toLowerCase().trim();
  if (!text) return 'standard';

  // 1. Prime Central London Luxury check (SW1, SW3, SW7, W1, NW3, NW8, etc.)
  const luxuryPostcodes = ['sw1', 'sw3', 'sw7', 'sw10', 'w1', 'w8', 'nw3', 'nw8'];
  if (luxuryPostcodes.some(pc => text.includes(pc))) return 'luxury';

  const luxuryKeywords = [
    'mayfair', 'belgravia', 'kensington', 'chelsea', 'knightsbridge', 'westminster',
    'marylebone', 'st john\'s wood', 'hampstead', 'holland park', 'sloane square',
    'harrods', 'hyde park', 'regent\'s park'
  ];
  if (luxuryKeywords.some(kw => text.includes(kw))) return 'luxury';

  // 2. Greater London & Financial Corridor Premium check (E14, EC1-4, SE16, TW9, SW19, N1, SW11)
  const premiumPostcodes = ['e14', 'ec1', 'ec2', 'ec3', 'ec4', 'e1', 'e2', 'se1', 'se16', 'tw9', 'tw10', 'sw19', 'sw15', 'n1', 'n5', 'sw11', 'sw4', 'se10'];
  if (premiumPostcodes.some(pc => text.includes(pc))) return 'premium';

  const premiumKeywords = [
    'london', 'canary wharf', 'docklands', 'richmond', 'wimbledon', 'islington',
    'shoreditch', 'hackney', 'battersea', 'clapham', 'greenwich', 'putney', 'highbury',
    'angel', 'hoxton', 'city of london', 'hammersmith', 'fulham', 'chiswick'
  ];
  if (premiumKeywords.some(kw => text.includes(kw))) return 'premium';

  // 3. Economy / Regional check
  const economyKeywords = [
    'oxford', 'cambridge', 'york', 'exeter', 'brighton', 'hove', 'southampton',
    'bournemouth', 'norwich', 'plymouth', 'durham', 'coventry', 'reading'
  ];
  if (economyKeywords.some(kw => text.includes(kw))) return 'economy';

  // 4. Default to standard (Manchester, Birmingham, Edinburgh, Glasgow, Leeds, Bristol, Cardiff, Belfast)
  return 'standard';
}

/**
 * Returns full PricingTier object for a given location or postcode
 */
export function getTierForLocation(locationText: string): PricingTier {
  const tierId = detectTierFromLocation(locationText);
  return STANDARD_PRICING_TIERS[tierId] || STANDARD_PRICING_TIERS.standard;
}

/**
 * Generate custom package discounts from any base session price
 */
export function calculateCustomPackages(basePrice: number) {
  const p10Rate = Math.round(basePrice * 0.92);
  const p15Rate = Math.round(basePrice * 0.88);
  const p20Rate = Math.round(basePrice * 0.82);
  const p30Rate = Math.round(basePrice * 0.75);

  return {
    days10: {
      days: 10,
      ratePerSession: p10Rate,
      totalPrice: p10Rate * 10,
      totalSavings: (basePrice - p10Rate) * 10,
      discountPercent: Math.round(((basePrice - p10Rate) / basePrice) * 100),
    },
    days15: {
      days: 15,
      ratePerSession: p15Rate,
      totalPrice: p15Rate * 15,
      totalSavings: (basePrice - p15Rate) * 15,
      discountPercent: Math.round(((basePrice - p15Rate) / basePrice) * 100),
    },
    days20: {
      days: 20,
      ratePerSession: p20Rate,
      totalPrice: p20Rate * 20,
      totalSavings: (basePrice - p20Rate) * 20,
      discountPercent: Math.round(((basePrice - p20Rate) / basePrice) * 100),
    },
    days30: {
      days: 30,
      ratePerSession: p30Rate,
      totalPrice: p30Rate * 30,
      totalSavings: (basePrice - p30Rate) * 30,
      discountPercent: Math.round(((basePrice - p30Rate) / basePrice) * 100),
    },
  };
}

export function getAllPincodesForTier(tierId: 'economy' | 'standard' | 'premium' | 'luxury'): string[] {
  return UK_LOCALITIES_PRICING
    .filter((loc) => loc.tierId === tierId)
    .flatMap((loc) => loc.pincodes);
}

export function getTopLocalitiesByCity(cityName: string, limit: number = 8): LocalityPricingRecord[] {
  const c = cityName.toLowerCase().trim();
  return UK_LOCALITIES_PRICING
    .filter((loc) => loc.city.toLowerCase() === c || loc.city.toLowerCase().includes(c))
    .slice(0, limit);
}

export const DEFAULT_ALL_INDIA_SESSION_PRICES = UK_LOCALITIES_PRICING.map((loc) => {
  const tier = STANDARD_PRICING_TIERS[loc.tierId];
  return {
    city: loc.city,
    subArea: loc.subArea,
    tier: loc.tierId,
    basePrice: loc.basePrice,
    currency: 'GBP',
    country: 'United Kingdom',
    packages: tier.packages,
  };
});
