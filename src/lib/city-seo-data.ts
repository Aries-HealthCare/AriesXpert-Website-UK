export interface CityFaq {
    question: string;
    answer: string;
}

export interface CityArea {
    name: string;
    slug: string;
}

export interface CitySeoData {
    cityName: string;
    stateName: string;
    citySlug: string;
    stateSlug: string;
    pageSlug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroHeading: string;
    heroSubheading: string;
    localIntro: string;
    whySection: string;
    stats: { label: string; value: string }[];
    popularAreas: CityArea[];
    conditions: string[];
    faqs: CityFaq[];
    canonicalUrl: string;
}

const BASE = 'https://uk.ariesphysiocare.com';

export const citySeoPages: CitySeoData[] = [
    {
        cityName: 'London',
        stateName: 'England',
        citySlug: 'london',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-london',
        metaTitle: 'Best In-Home Physiotherapy in London | Aries PhysioCare UK',
        metaDescription: 'Top-rated chartered in-home physiotherapy across Greater London. HCPC & CSP registered physios in Westminster, Kensington, Chelsea, City & North London. Direct billing to Bupa, AXA Health, Aviva & Vitality. Book same-day!',
        keywords: ['physiotherapy in london', 'home physiotherapy london', 'chartered physiotherapist london', 'physio at home london', 'bupa physiotherapy london', 'axa health physiotherapy london', 'physiotherapy westminster', 'physiotherapy kensington'],
        heroHeading: 'Chartered In-Home Physiotherapy in London',
        heroSubheading: 'Hospital-grade physical therapy and orthopedic rehabilitation delivered to your residence, mews, or office anywhere across Greater London.',
        localIntro: 'London’s fast-paced corporate life and high desk hours in the City and Canary Wharf lead to acute postural strain, sciatica, and cervical spine stiffness. Aries PhysioCare brings HCPC and CSP registered chartered physiotherapists directly to your doorstep across London, eliminating long NHS waiting lists and clinic travel times.',
        whySection: 'Every physiotherapist in our UK network is registered with the Health and Care Professions Council (HCPC) and the Chartered Society of Physiotherapy (CSP), with direct billing for all major UK private medical insurers.',
        stats: [
            { label: 'Active Clinicians in London', value: '75+' },
            { label: 'London Boroughs Covered', value: '32+' },
            { label: 'Private Insurer Direct Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Westminster & Central', slug: 'westminster-central' },
            { name: 'Kensington & Chelsea', slug: 'kensington-chelsea' },
            { name: 'City of London & East', slug: 'city-of-london-east' },
            { name: 'North London (Hampstead & Highgate)', slug: 'north-london' },
            { name: 'South West London (Richmond & Wimbledon)', slug: 'south-west-london' },
        ],
        conditions: ['Sciatica & Lumbar Disc Prolapse', 'Post-Op Total Knee Replacement (TKR)', 'Post-Op Total Hip Replacement (THR)', 'Rotator Cuff Impingement', 'Cervical Spondylosis & Whiplash', 'NHS Step-Down Spinal Rehab', 'Stroke Neurological Recovery', 'Senior Balance & Fall Prevention'],
        faqs: [
            { question: 'How quickly can a chartered physiotherapist visit my home in London?', answer: 'We offer same-day and next-day clinical home visits across Central, West, North, and South London. You can book directly online or contact our London clinical intake team.' },
            { question: 'Do you direct-bill UK private medical insurance (Bupa, AXA Health, Aviva, Vitality)?', answer: 'Yes! We are registered with all major UK private healthcare insurers including Bupa, AXA Health, Aviva, Vitality, WPA, and Healix. Provide your pre-authorization code during booking.' },
            { question: 'Are your physiotherapists registered with the HCPC and CSP?', answer: 'Yes, 100% of our UK clinicians are registered with the Health and Care Professions Council (HCPC) and are members of the Chartered Society of Physiotherapy (CSP).' },
            { question: 'Do I need a GP referral to book private in-home physiotherapy in London?', answer: 'No GP referral is required for self-pay appointments. If you are claiming through private medical insurance, some insurers may require a GP referral to activate your pre-authorization.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-london`,
    },
    {
        cityName: 'Manchester',
        stateName: 'England',
        citySlug: 'manchester',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-manchester',
        metaTitle: 'Chartered In-Home Physiotherapy in Manchester | Aries PhysioCare UK',
        metaDescription: 'Expert HCPC registered home physiotherapy across Manchester City Centre, Salford Quays, Didsbury, Altrincham & Cheshire. Direct billing to Bupa & AXA Health.',
        keywords: ['physiotherapy in manchester', 'home physio manchester', 'chartered physio manchester', 'physiotherapy didsbury', 'physio salford quays'],
        heroHeading: 'In-Home Physiotherapy in Manchester',
        heroSubheading: 'Specialized orthopaedic, sports, and neurological rehabilitation delivered directly to your home across Greater Manchester.',
        localIntro: 'Serving athletes, busy professionals, and seniors across Manchester and Cheshire, our chartered physiotherapists deliver hospital-standard assessment and hands-on therapy directly in your living room.',
        whySection: 'Direct billing for UK private health insurance with rapid same-day home appointment availability.',
        stats: [
            { label: 'Active Clinicians in Manchester', value: '45+' },
            { label: 'Greater Manchester Hubs', value: '15+' },
            { label: 'Private Insurer Recognition', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Manchester City Centre & Deansgate', slug: 'deansgate-city-centre' },
            { name: 'Salford Quays & MediaCityUK', slug: 'salford-quays' },
            { name: 'Didsbury & Chorlton', slug: 'didsbury-chorlton' },
            { name: 'Altrincham & Hale', slug: 'altrincham-hale' },
        ],
        conditions: ['Sports Knee & ACL Tears', 'Spine & Lumbar Pain', 'Post-Surgical Joint Replacement', 'Shoulder Impingement', 'Neurological Rehabilitation'],
        faqs: [
            { question: 'Do you cover areas outside Manchester city centre like Altrincham and Wilmslow?', answer: 'Yes, our mobile teams cover the entirety of Greater Manchester and the North Cheshire corridor.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-manchester`,
    },
    {
        cityName: 'Birmingham',
        stateName: 'England',
        citySlug: 'birmingham',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-birmingham',
        metaTitle: 'In-Home Physiotherapy in Birmingham & West Midlands | Aries PhysioCare UK',
        metaDescription: 'Chartered home physical therapy in Birmingham, Edgbaston, Solihull, and Sutton Coldfield. HCPC verified specialists with private medical insurance direct billing.',
        keywords: ['physiotherapy in birmingham', 'home physio birmingham', 'physio edgbaston', 'physiotherapy solihull'],
        heroHeading: 'In-Home Physiotherapy in Birmingham',
        heroSubheading: 'Specialized musculoskeletal and neurological physiotherapy at your home across Birmingham and the West Midlands.',
        localIntro: 'From spine rehabilitation to post-operative knee recovery, our Birmingham mobile physiotherapists deliver individual clinical care right to your doorstep.',
        whySection: 'HCPC and CSP registered clinicians with full private insurance direct billing support.',
        stats: [
            { label: 'Active Clinicians in Birmingham', value: '35+' },
            { label: 'West Midlands Zones', value: '12+' },
            { label: 'Same-Day Availability', value: 'Yes' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'City Centre & Jewellery Quarter', slug: 'birmingham-city-centre' },
            { name: 'Edgbaston & Harborne', slug: 'edgbaston-harborne' },
            { name: 'Solihull & Knowle', slug: 'solihull-knowle' },
            { name: 'Sutton Coldfield', slug: 'sutton-coldfield' },
        ],
        conditions: ['Chronic Back Pain', 'Knee Osteoarthritis', 'Post-Op Joint Replacement', 'Whiplash Injuries', 'Senior Fall Prevention'],
        faqs: [
            { question: 'How do I pay for private physiotherapy sessions in Birmingham?', answer: 'We support direct insurer billing for Bupa, AXA, Aviva, or major credit cards and debit cards with electronic receipts for HSA/cash plans.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-birmingham`,
    },
    {
        cityName: 'Edinburgh',
        stateName: 'Scotland',
        citySlug: 'edinburgh',
        stateSlug: 'scotland',
        pageSlug: 'physiotherapy-in-edinburgh',
        metaTitle: 'Chartered In-Home Physiotherapy in Edinburgh | Aries PhysioCare UK',
        metaDescription: 'HCPC chartered home physiotherapy in Edinburgh New Town, Stockbridge, West End, Morningside, and Leith. Direct billing to all UK insurers.',
        keywords: ['physiotherapy in edinburgh', 'home physio edinburgh', 'chartered physio scotland', 'physio stockbridge'],
        heroHeading: 'In-Home Physiotherapy in Edinburgh',
        heroSubheading: 'Hospital-grade chartered physical therapy delivered to your home across Edinburgh and the Lothians.',
        localIntro: 'Skip the clinic commute. Our Scottish chartered physiotherapists bring advanced diagnostic assessment and treatment directly to your residence across Edinburgh.',
        whySection: 'HCPC and CSP registered chartered clinicians direct billing Bupa, AXA Health, and Aviva.',
        stats: [
            { label: 'Active Clinicians in Edinburgh', value: '30+' },
            { label: 'Lothian Coverage Zones', value: '10+' },
            { label: 'Direct Billing Support', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'New Town & Stockbridge', slug: 'new-town-stockbridge' },
            { name: 'West End & Haymarket', slug: 'west-end-haymarket' },
            { name: 'Morningside & Bruntsfield', slug: 'morningside-bruntsfield' },
            { name: 'Leith & Shore', slug: 'leith-shore' },
        ],
        conditions: ['Lumbar Spine & Sciatica', 'Knee & Shoulder Sports Trauma', 'Post-Surgical Joint Replacement', 'Elderly Independence Rehab'],
        faqs: [
            { question: 'Are your Scottish clinicians registered with the HCPC?', answer: 'Yes, all our Scottish clinicians are fully registered with the Health and Care Professions Council (HCPC) and members of the CSP.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-edinburgh`,
    }
];

export function getCityData(slug: string): CitySeoData | undefined {
    return citySeoPages.find(c => c.citySlug === slug || c.pageSlug === slug);
}
