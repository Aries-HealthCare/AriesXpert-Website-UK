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

const BASE = 'https://www.ariesxpert.co.uk';

export const citySeoPages: CitySeoData[] = [
    // 01. LONDON
    {
        cityName: 'London',
        stateName: 'England',
        citySlug: 'london',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-london',
        metaTitle: 'Best In-Home Physiotherapy in London | AriesXpert UK',
        metaDescription: 'Top-rated chartered in-home physiotherapy across Greater London. HCPC & CSP registered physios in Westminster, Kensington, Chelsea, City & North London. Direct billing to Bupa, AXA Health, Aviva & Vitality. Book same-day!',
        keywords: ['physiotherapy in london', 'home physiotherapy london', 'chartered physiotherapist london', 'physio at home london', 'bupa physiotherapy london', 'axa health physiotherapy london', 'physiotherapy westminster', 'physiotherapy kensington'],
        heroHeading: 'Chartered In-Home Physiotherapy in London',
        heroSubheading: 'Hospital-grade physical therapy and orthopedic rehabilitation delivered to your residence, mews, or office anywhere across Greater London.',
        localIntro: 'London’s fast-paced corporate life and long desk hours in the City and Canary Wharf lead to acute postural strain, sciatica, and cervical spine stiffness. AriesXpert brings HCPC and CSP registered chartered physiotherapists directly to your doorstep across London, eliminating long NHS waiting lists and clinic travel times.',
        whySection: 'Every physiotherapist in our UK network is registered with the Health and Care Professions Council (HCPC) and the Chartered Society of Physiotherapy (CSP), with direct billing for all major UK private medical insurers.',
        stats: [
            { label: 'Active Clinicians in London', value: '75+' },
            { label: 'London Boroughs Covered', value: '32+' },
            { label: 'Private Insurer Direct Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Westminster & Central', slug: 'westminster' },
            { name: 'Kensington & Chelsea', slug: 'kensington-and-chelsea' },
            { name: 'City of London & East', slug: 'city-of-london' },
            { name: 'Camden & Hampstead', slug: 'camden' },
            { name: 'Richmond & Twickenham', slug: 'richmond-upon-thames' },
            { name: 'Wandsworth & Battersea', slug: 'wandsworth' },
            { name: 'Islington & Highbury', slug: 'islington' },
            { name: 'Wimbledon & Merton', slug: 'merton' }
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

    // 02. MANCHESTER
    {
        cityName: 'Manchester',
        stateName: 'England',
        citySlug: 'manchester',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-manchester',
        metaTitle: 'Chartered In-Home Physiotherapy in Manchester | AriesXpert UK',
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
            { name: 'Altrincham & Hale (Trafford)', slug: 'altrincham-hale' },
            { name: 'Stockport & Cheadle', slug: 'stockport' },
            { name: 'Bolton & Bury', slug: 'bolton' }
        ],
        conditions: ['Sports Knee & ACL Tears', 'Spine & Lumbar Pain', 'Post-Surgical Joint Replacement', 'Shoulder Impingement', 'Neurological Rehabilitation'],
        faqs: [
            { question: 'Do you cover areas outside Manchester city centre like Altrincham and Wilmslow?', answer: 'Yes, our mobile teams cover the entirety of Greater Manchester and the North Cheshire corridor.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-manchester`,
    },

    // 03. BIRMINGHAM
    {
        cityName: 'Birmingham',
        stateName: 'England',
        citySlug: 'birmingham',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-birmingham',
        metaTitle: 'In-Home Physiotherapy in Birmingham & West Midlands | AriesXpert UK',
        metaDescription: 'Trusted chartered physiotherapists at home in Birmingham, Solihull, Sutton Coldfield, Edgbaston & Harborne. HCPC certified, private insurance billing.',
        keywords: ['physiotherapy in birmingham', 'home physio birmingham', 'chartered physio birmingham', 'physio solihull', 'physio edgbaston'],
        heroHeading: 'Chartered In-Home Physiotherapy in Birmingham',
        heroSubheading: 'Specialized MSK, post-operative, and elderly mobility care across the West Midlands metropolitan area.',
        localIntro: 'Our Birmingham clinical network brings certified physical therapy to homes across Edgbaston, Solihull, Sutton Coldfield, and the Jewellery Quarter.',
        whySection: 'Specialized portable electrotherapy, ultrasound, and manual therapy equipment brought directly to your home.',
        stats: [
            { label: 'Active Clinicians in West Midlands', value: '38+' },
            { label: 'West Midlands Districts Covered', value: '12+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Birmingham City Centre & Jewellery Quarter', slug: 'birmingham-city-centre' },
            { name: 'Edgbaston & Harborne', slug: 'edgbaston-harborne' },
            { name: 'Solihull & Knowle', slug: 'solihull' },
            { name: 'Sutton Coldfield & Four Oaks', slug: 'sutton-coldfield' },
            { name: 'Coventry & Warwickshire', slug: 'coventry' },
            { name: 'Wolverhampton & Dudley', slug: 'wolverhampton' }
        ],
        conditions: ['Chronic Back Pain & Sciatica', 'Knee & Hip Osteoarthritis', 'Post-Stroke Hemiplegia Recovery', 'Sports Sprains & Tendinopathy'],
        faqs: [
            { question: 'Can you visit elderly patients in care homes or sheltered housing in Birmingham?', answer: 'Yes, our clinicians regularly visit private residences, sheltered housing, and residential care homes across Birmingham and Solihull.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-birmingham`,
    },

    // 04. LEEDS
    {
        cityName: 'Leeds',
        stateName: 'England',
        citySlug: 'leeds',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-leeds',
        metaTitle: 'Chartered Home Physiotherapy in Leeds & Yorkshire | AriesXpert UK',
        metaDescription: 'Premier home visit physiotherapy in Leeds, Headingley, Roundhay, Harrogate & West Yorkshire. HCPC certified practitioners, fast dispatch.',
        keywords: ['physiotherapy in leeds', 'home physio leeds', 'chartered physio yorkshire', 'physiotherapy headingley', 'physio roundhay'],
        heroHeading: 'In-Home Physiotherapy in Leeds',
        heroSubheading: 'Clinical-standard physical rehabilitation delivered directly to your home across Leeds and West Yorkshire.',
        localIntro: 'Experience dedicated 1-on-1 rehabilitation in the comfort of your home in Headingley, Roundhay, Alwoodley, or Central Leeds.',
        whySection: 'Eliminate NHS backlog delays with certified private physiotherapy covered by Bupa, AXA Health, and Aviva.',
        stats: [
            { label: 'Active Clinicians in Leeds', value: '30+' },
            { label: 'Yorkshire Hubs', value: '10+' },
            { label: 'Direct Billing Available', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Leeds City Centre', slug: 'leeds-city-centre' },
            { name: 'Headingley & Far Headingley', slug: 'headingley' },
            { name: 'Roundhay & Oakwood', slug: 'roundhay' },
            { name: 'Horsforth & Alwoodley', slug: 'alwoodley' },
            { name: 'Bradford & Saltaire', slug: 'bradford' },
            { name: 'Harrogate & North Yorkshire', slug: 'harrogate' }
        ],
        conditions: ['Post-Operative Orthopaedic Rehab', 'Spinal Decompression & Sciatica', 'Frozen Shoulder', 'Parkinson’s Movement Therapy'],
        faqs: [
            { question: 'Do you cover Harrogate and Bradford from Leeds?', answer: 'Yes, our mobile physiotherapist teams cover the entire Leeds-Bradford-Harrogate metropolitan triangle.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-leeds`,
    },

    // 05. NEWCASTLE UPON TYNE
    {
        cityName: 'Newcastle upon Tyne',
        stateName: 'England',
        citySlug: 'newcastle-upon-tyne',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-newcastle-upon-tyne',
        metaTitle: 'In-Home Physiotherapy in Newcastle upon Tyne & North East | AriesXpert UK',
        metaDescription: 'HCPC registered chartered physiotherapy in Newcastle upon Tyne, Jesmond, Gosforth, Sunderland & Durham. Same-day clinical visits, private medical insurance billing.',
        keywords: ['physiotherapy in newcastle upon tyne', 'home physio newcastle', 'chartered physio north east', 'physiotherapy jesmond', 'physio gosforth'],
        heroHeading: 'Chartered In-Home Physiotherapy in Newcastle',
        heroSubheading: 'Hospital-grade physical therapy and mobility rehabilitation across Newcastle upon Tyne, Gateshead, and the North East.',
        localIntro: 'Providing expert musculoskeletal and neurological rehabilitation directly to homes across Newcastle City Centre, Jesmond, Gosforth, Sunderland, and County Durham.',
        whySection: 'Direct billing with Bupa, AXA Health, and Aviva, backed by statutory HCPC registration and CSP membership.',
        stats: [
            { label: 'Active Clinicians in North East', value: '25+' },
            { label: 'North East Hubs', value: '8+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Newcastle City Centre & Quayside', slug: 'newcastle-city-centre' },
            { name: 'Jesmond & Gosforth', slug: 'jesmond' },
            { name: 'Gateshead & Low Fell', slug: 'gateshead' },
            { name: 'Sunderland & Washington', slug: 'sunderland' },
            { name: 'Durham & Bishop Auckland', slug: 'durham' },
            { name: 'Tynemouth & Whitley Bay', slug: 'tynemouth' }
        ],
        conditions: ['Lumbar Disc Bulge & Sciatica', 'Total Joint Replacement Recovery', 'Rotator Cuff Rehab', 'Senior Mobility & Fall Prevention'],
        faqs: [
            { question: 'Do you cover Gateshead, Sunderland, and Durham from Newcastle?', answer: 'Yes, our mobile North East clinicians cover Newcastle upon Tyne, Gateshead, North & South Tyneside, Sunderland, and County Durham.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-newcastle-upon-tyne`,
    },

    // 06. SHEFFIELD
    {
        cityName: 'Sheffield',
        stateName: 'England',
        citySlug: 'sheffield',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-sheffield',
        metaTitle: 'In-Home Physiotherapy in Sheffield & South Yorkshire | AriesXpert UK',
        metaDescription: 'Expert chartered home physiotherapy in Sheffield, Ecclesall, Broomhill, Dore, Rotherham & Doncaster. HCPC certified, private insurance accepted.',
        keywords: ['physiotherapy in sheffield', 'home physio sheffield', 'chartered physio south yorkshire', 'physio ecclesall', 'physio dore'],
        heroHeading: 'In-Home Physiotherapy in Sheffield',
        heroSubheading: 'Specialized orthopaedic, post-surgical, and sports physiotherapy in Sheffield and South Yorkshire.',
        localIntro: 'Skip clinic travel in Sheffield’s hilly terrain with hospital-grade home visits across Ecclesall, Broomhill, Dore, and Central Sheffield.',
        whySection: 'Experienced chartered physiotherapists delivering portable ultrasound, joint mobilisation, and tailored rehab exercises.',
        stats: [
            { label: 'Active Clinicians in Sheffield', value: '22+' },
            { label: 'South Yorkshire Zones', value: '7+' },
            { label: 'Private Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Sheffield City Centre', slug: 'sheffield-city-centre' },
            { name: 'Ecclesall & Millhouses', slug: 'ecclesall' },
            { name: 'Broomhill & Crookes', slug: 'broomhill' },
            { name: 'Dore & Totley', slug: 'dore-totley' },
            { name: 'Rotherham & Doncaster', slug: 'rotherham' }
        ],
        conditions: ['Hip & Knee Osteoarthritis', 'Back Strain & Lumbar Herniation', 'Post-Op Knee Replacement', 'Frozen Shoulder'],
        faqs: [
            { question: 'Can you provide rehabilitation after orthopedic surgery in Sheffield?', answer: 'Yes, our clinicians specialize in Phase 1-3 post-operative rehabilitation following total knee, hip, or shoulder surgeries.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-sheffield`,
    },

    // 07. LIVERPOOL
    {
        cityName: 'Liverpool',
        stateName: 'England',
        citySlug: 'liverpool',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-liverpool',
        metaTitle: 'Chartered In-Home Physiotherapy in Liverpool & Merseyside | AriesXpert UK',
        metaDescription: 'HCPC certified physiotherapy at home in Liverpool, Baltic Triangle, Allerton, Crosby & Wirral. Fast dispatch, direct private insurance billing.',
        keywords: ['physiotherapy in liverpool', 'home physio liverpool', 'chartered physio merseyside', 'physio allerton', 'physio wirral'],
        heroHeading: 'In-Home Physiotherapy in Liverpool',
        heroSubheading: 'Expert clinical rehabilitation and physical therapy delivered to your home across Liverpool and Merseyside.',
        localIntro: 'Our Liverpool chartered physiotherapists deliver hands-on care and progressive rehabilitation across Central Liverpool, Sefton Park, Allerton, and the Wirral.',
        whySection: 'Direct billing available for Bupa, AXA Health, Aviva, and Vitality policyholders.',
        stats: [
            { label: 'Active Clinicians in Merseyside', value: '28+' },
            { label: 'Merseyside Boroughs Covered', value: '6+' },
            { label: 'Direct Billing Available', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Liverpool City Centre & Waterfront', slug: 'liverpool-city-centre' },
            { name: 'Allerton & Sefton Park', slug: 'allerton' },
            { name: 'Crosby & Southport', slug: 'crosby' },
            { name: 'Wirral & Birkenhead', slug: 'wirral' },
            { name: 'St Helens & Knowsley', slug: 'st-helens' }
        ],
        conditions: ['Sports Knee & Ankle Injuries', 'Chronic Lumbar Pain', 'Post-Fracture Rehab', 'Neurological Stroke Recovery'],
        faqs: [
            { question: 'Do you cover the Wirral and Southport from Liverpool?', answer: 'Yes, we provide full mobile coverage across both sides of the Mersey including the Wirral, Sefton, and Knowsley.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-liverpool`,
    },

    // 08. BRISTOL
    {
        cityName: 'Bristol',
        stateName: 'England',
        citySlug: 'bristol',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-bristol',
        metaTitle: 'Best In-Home Physiotherapy in Bristol & Bath | AriesXpert UK',
        metaDescription: 'Chartered in-home physiotherapy across Bristol, Clifton, Redland, Harbourside & Bath. HCPC certified specialists with direct private health insurance billing.',
        keywords: ['physiotherapy in bristol', 'home physio bristol', 'chartered physio bristol', 'physiotherapy clifton', 'physio bath'],
        heroHeading: 'In-Home Physiotherapy in Bristol & Bath',
        heroSubheading: 'Restoring active movement with hospital-grade home physical therapy across Clifton, Redland, Harbourside, and Bath.',
        localIntro: 'Our Bristol clinical team serves active outdoor athletes, busy professionals, and seniors across Clifton, Cotham, Bishopston, and the Georgian city of Bath.',
        whySection: 'Statutory HCPC and CSP certified clinicians equipped with portable therapeutic equipment.',
        stats: [
            { label: 'Active Clinicians in South West', value: '32+' },
            { label: 'Bristol & Bath Zones', value: '9+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Clifton & Harbourside', slug: 'clifton-harbourside' },
            { name: 'Redland & Cotham', slug: 'redland-cotham' },
            { name: 'Bath City Centre & Lansdown', slug: 'bath' },
            { name: 'Southville & Bedminster', slug: 'southville' },
            { name: 'Cheltenham & Gloucester', slug: 'cheltenham' }
        ],
        conditions: ['Sports Injuries & ACL Tears', 'Post-Op Joint Replacements', 'Cervical & Lumbar Spinal Care', 'Elderly Balance & Gait Retraining'],
        faqs: [
            { question: 'How do I arrange in-home physiotherapy in Clifton or Bath?', answer: 'Simply call our UK intake line on 0800 274 3785 or book online. We will match you with a nearby chartered clinician.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-bristol`,
    },

    // 09. NOTTINGHAM
    {
        cityName: 'Nottingham',
        stateName: 'England',
        citySlug: 'nottingham',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-nottingham',
        metaTitle: 'In-Home Physiotherapy in Nottingham & East Midlands | AriesXpert UK',
        metaDescription: 'Premier chartered home physiotherapy in Nottingham, West Bridgford, Wollaton, Derby & Leicester. HCPC registered, direct health insurance billing.',
        keywords: ['physiotherapy in nottingham', 'home physio nottingham', 'chartered physio east midlands', 'physio west bridgford'],
        heroHeading: 'In-Home Physiotherapy in Nottingham',
        heroSubheading: 'Specialized physical rehabilitation and pain relief delivered to your home across Nottingham and Nottinghamshire.',
        localIntro: 'Receive prompt, hospital-grade physiotherapy in West Bridgford, Wollaton, The Park, or Central Nottingham without clinic waiting lists.',
        whySection: 'Registered with HCPC and CSP, offering direct claims handling with Bupa, AXA, and Aviva.',
        stats: [
            { label: 'Active Clinicians in Nottingham', value: '20+' },
            { label: 'East Midlands Districts', value: '8+' },
            { label: 'Private Insurer Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Nottingham City Centre', slug: 'nottingham-city-centre' },
            { name: 'West Bridgford & Gamston', slug: 'west-bridgford' },
            { name: 'Wollaton & Beeston', slug: 'wollaton' },
            { name: 'Mansfield & Worksop', slug: 'mansfield' },
            { name: 'Derby City Centre', slug: 'derby' }
        ],
        conditions: ['Back & Neck Pain', 'Total Knee Replacement', 'Tennis & Golfer’s Elbow', 'Mobility & Falls Assessment'],
        faqs: [
            { question: 'Do you cover West Bridgford and Beeston?', answer: 'Yes, our mobile Nottingham clinicians cover the entire city area and Nottinghamshire commuter towns.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-nottingham`,
    },

    // 10. LEICESTER
    {
        cityName: 'Leicester',
        stateName: 'England',
        citySlug: 'leicester',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-leicester',
        metaTitle: 'Chartered In-Home Physiotherapy in Leicester | AriesXpert UK',
        metaDescription: 'Expert home physiotherapy in Leicester, Clarendon Park, Oadby, Loughborough & Leicestershire. HCPC registered clinicians, fast booking.',
        keywords: ['physiotherapy in leicester', 'home physio leicester', 'chartered physio leicester', 'physio oadby', 'physio loughborough'],
        heroHeading: 'In-Home Physiotherapy in Leicester',
        heroSubheading: 'Hospital-grade physical therapy and rehabilitation delivered to your residence across Leicester and Leicestershire.',
        localIntro: 'Serving patients across Clarendon Park, Stoneygate, Oadby, and Loughborough with evidence-based in-home physiotherapy.',
        whySection: 'Convenient home appointments with zero waiting lists and direct medical insurance processing.',
        stats: [
            { label: 'Active Clinicians in Leicester', value: '18+' },
            { label: 'Leicestershire Hubs', value: '6+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Leicester City Centre', slug: 'leicester-city-centre' },
            { name: 'Clarendon Park & Stoneygate', slug: 'clarendon-park' },
            { name: 'Oadby & Wigston', slug: 'oadby' },
            { name: 'Loughborough & Hinckley', slug: 'loughborough' }
        ],
        conditions: ['Sciatica & Disc Prolapse', 'Arthritic Joint Pain', 'Post-Op Rehab', 'Stroke Rehabilitation'],
        faqs: [
            { question: 'Do you bill private health insurance in Leicester?', answer: 'Yes, we directly bill Bupa, AXA Health, Aviva, Vitality, and WPA.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-leicester`,
    },

    // 11. CAMBRIDGE
    {
        cityName: 'Cambridge',
        stateName: 'England',
        citySlug: 'cambridge',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-cambridge',
        metaTitle: 'In-Home Physiotherapy in Cambridge & East of England | AriesXpert UK',
        metaDescription: 'Premier chartered home physiotherapy in Cambridge, Trumpington, Newnham, Peterborough & Cambridgeshire. HCPC certified specialists.',
        keywords: ['physiotherapy in cambridge', 'home physio cambridge', 'chartered physio cambridge', 'physio trumpington'],
        heroHeading: 'In-Home Physiotherapy in Cambridge',
        heroSubheading: 'Specialized orthopaedic, desk-ergonomics, and athletic rehabilitation delivered to your home or college in Cambridge.',
        localIntro: 'Supporting researchers, tech leaders, and residents across Cambridge, Trumpington, and Ely with high-standard chartered physiotherapy.',
        whySection: 'Flexible appointment times tailored around busy academic and clinical schedules.',
        stats: [
            { label: 'Active Clinicians in Cambridge', value: '20+' },
            { label: 'Cambridgeshire Zones', value: '6+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Cambridge City Centre', slug: 'cambridge-city-centre' },
            { name: 'Trumpington & Newnham', slug: 'trumpington' },
            { name: 'Peterborough & Ely', slug: 'peterborough' },
            { name: 'Norwich & Ipswich', slug: 'norwich' }
        ],
        conditions: ['Postural Strain & Ergonomic Neck Pain', 'Sports Running Injuries', 'Post-Op Knee/Hip Replacement', 'Chronic Tendinopathy'],
        faqs: [
            { question: 'Can a therapist visit my college accommodation or research campus in Cambridge?', answer: 'Yes, we provide in-home and on-campus clinical visits across Cambridge colleges and residential colleges.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-cambridge`,
    },

    // 12. OXFORD
    {
        cityName: 'Oxford',
        stateName: 'England',
        citySlug: 'oxford',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-oxford',
        metaTitle: 'In-Home Physiotherapy in Oxford & Oxfordshire | AriesXpert UK',
        metaDescription: 'Chartered physiotherapy at home in Oxford, Jericho, Summertown, Headington, Banbury & Bicester. HCPC registered, private health insurance billing.',
        keywords: ['physiotherapy in oxford', 'home physio oxford', 'chartered physio oxfordshire', 'physio summertown', 'physio jericho'],
        heroHeading: 'In-Home Physiotherapy in Oxford',
        heroSubheading: 'Clinical-standard physical rehabilitation delivered directly to your home in Oxford and Oxfordshire.',
        localIntro: 'Providing expert musculoskeletal rehabilitation across Central Oxford, Summertown, Headington, and the wider Oxfordshire countryside.',
        whySection: 'Direct billing with major private healthcare insurers with same-day and next-day appointment availability.',
        stats: [
            { label: 'Active Clinicians in Oxfordshire', value: '22+' },
            { label: 'Oxfordshire Hubs', value: '7+' },
            { label: 'Direct Billing Available', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Oxford Historic Centre', slug: 'oxford' },
            { name: 'Summertown & Jericho', slug: 'summertown' },
            { name: 'Headington & Cowley', slug: 'headington' },
            { name: 'Banbury & Bicester', slug: 'banbury' },
            { name: 'Reading & Berkshire', slug: 'reading' }
        ],
        conditions: ['Back & Neck Pain', 'Sports Ligament Tears', 'Hip/Knee Joint Replacement', 'Elderly Balance & Mobility'],
        faqs: [
            { question: 'Do you visit homes outside Oxford like Bicester, Witney, and Abingdon?', answer: 'Yes, our mobile Oxfordshire teams cover the city of Oxford as well as Witney, Abingdon, Didcot, and Bicester.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-oxford`,
    },

    // 13. SOUTHAMPTON
    {
        cityName: 'Southampton',
        stateName: 'England',
        citySlug: 'southampton',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-southampton',
        metaTitle: 'In-Home Physiotherapy in Southampton & Hampshire | AriesXpert UK',
        metaDescription: 'HCPC certified home physiotherapy in Southampton, Portsmouth, Winchester & Basingstoke. Rapid mobile visits, private health insurance billing.',
        keywords: ['physiotherapy in southampton', 'home physio southampton', 'chartered physio hampshire', 'physio winchester', 'physio portsmouth'],
        heroHeading: 'In-Home Physiotherapy in Southampton',
        heroSubheading: 'Comprehensive physical rehabilitation and pain relief delivered to your home across Southampton and Hampshire.',
        localIntro: 'Our chartered physiotherapists cover Southampton City Centre, Ocean Village, Bassett, Winchester, and Portsmouth with rapid in-home appointments.',
        whySection: 'Avoid clinic journeys with complete portable clinical equipment brought to your living room.',
        stats: [
            { label: 'Active Clinicians in Hampshire', value: '24+' },
            { label: 'South Coast Hubs', value: '8+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Southampton City Centre', slug: 'southampton' },
            { name: 'Portsmouth & Southsea', slug: 'portsmouth' },
            { name: 'Winchester', slug: 'winchester' },
            { name: 'Basingstoke & Andover', slug: 'basingstoke' }
        ],
        conditions: ['Sciatica & Spinal Pain', 'Post-Op Knee Replacement', 'Shoulder Impingement', 'Stroke Rehabilitation'],
        faqs: [
            { question: 'Can I claim through Bupa or AXA Health in Southampton?', answer: 'Yes, we are pre-approved healthcare providers for Bupa, AXA Health, Aviva, and Vitality in Hampshire.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-southampton`,
    },

    // 14. EDINBURGH
    {
        cityName: 'Edinburgh',
        stateName: 'Scotland',
        citySlug: 'edinburgh',
        stateSlug: 'scotland',
        pageSlug: 'physiotherapy-in-edinburgh',
        metaTitle: 'Chartered In-Home Physiotherapy in Edinburgh | AriesXpert UK',
        metaDescription: 'Top-rated HCPC chartered physiotherapists in Edinburgh New Town, West End, Morningside, Leith & Lothian. Bupa & AXA direct billing.',
        keywords: ['physiotherapy in edinburgh', 'home physio edinburgh', 'chartered physio scotland', 'physio morningside', 'physio new town edinburgh'],
        heroHeading: 'In-Home Physiotherapy in Edinburgh',
        heroSubheading: 'Scotland’s capital trusted clinical home physiotherapy across Edinburgh New Town, Morningside, Leith, and the Lothians.',
        localIntro: 'Navigating Edinburgh’s steep hills and cobbled streets after injury or surgery is difficult. AriesXpert brings chartered physiotherapists directly to your doorstep across Edinburgh.',
        whySection: 'Recognized by all major UK private medical insurers with rapid same-day clinical visits.',
        stats: [
            { label: 'Active Clinicians in Edinburgh', value: '28+' },
            { label: 'Edinburgh Districts Covered', value: '14+' },
            { label: 'Direct Insurer Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'New Town & Stockbridge', slug: 'new-town-stockbridge' },
            { name: 'West End & Haymarket', slug: 'west-end-haymarket' },
            { name: 'Morningside & Bruntsfield', slug: 'morningside-bruntsfield' },
            { name: 'Leith & Shore', slug: 'leith-shore' },
            { name: 'South Queensferry', slug: 'south-queensferry' }
        ],
        conditions: ['Post-Op Total Hip/Knee Replacement', 'Spine & Lumbar Herniation', 'Rotator Cuff Rehab', 'Neurological Stroke Recovery'],
        faqs: [
            { question: 'Do you cover areas outside Edinburgh like Livingston and East Lothian?', answer: 'Yes, our mobile clinicians provide in-home therapy throughout Edinburgh, Midlothian, East Lothian, and West Lothian.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-edinburgh`,
    },

    // 15. GLASGOW
    {
        cityName: 'Glasgow',
        stateName: 'Scotland',
        citySlug: 'glasgow',
        stateSlug: 'england',
        pageSlug: 'physiotherapy-in-glasgow',
        metaTitle: 'In-Home Physiotherapy in Glasgow & Clyde Valley | AriesXpert UK',
        metaDescription: 'Chartered home physiotherapy across Glasgow West End, City Centre, Southside & Bearsden. Registered with HCPC, private insurance direct billing.',
        keywords: ['physiotherapy in glasgow', 'home physio glasgow', 'chartered physio glasgow', 'physio west end glasgow', 'physio bearsden'],
        heroHeading: 'Chartered In-Home Physiotherapy in Glasgow',
        heroSubheading: 'Specialized orthopaedic, post-surgical, and neuro rehabilitation delivered to your home across Greater Glasgow.',
        localIntro: 'Our Glasgow chartered clinicians bring clinic-standard physiotherapy to your home across the West End, Merchant City, Southside, and East Dunbartonshire.',
        whySection: 'Direct billing with Bupa, AXA Health, and Aviva with rapid appointment scheduling.',
        stats: [
            { label: 'Active Clinicians in Glasgow', value: '32+' },
            { label: 'Greater Glasgow Zones', value: '12+' },
            { label: 'Private Insurer Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Glasgow City Centre & Merchant City', slug: 'glasgow-city-centre' },
            { name: 'West End & Hillhead', slug: 'west-end-hillhead' },
            { name: 'Southside & Shawlands', slug: 'southside-shawlands' },
            { name: 'Bearsden & Milngavie', slug: 'bearsden-milngavie' },
            { name: 'Paisley & Renfrewshire', slug: 'paisley' }
        ],
        conditions: ['Sciatica & Lumbar Pain', 'Sports ACL & Knee Sprains', 'Post-Op Joint Care', 'Elderly Mobility & Fall Recovery'],
        faqs: [
            { question: 'Can I book a same-day home visit in Glasgow?', answer: 'Yes, we offer same-day and next-day clinical home appointments across Glasgow and surrounding suburbs.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-glasgow`,
    },

    // 16. ABERDEEN
    {
        cityName: 'Aberdeen',
        stateName: 'Scotland',
        citySlug: 'aberdeen',
        stateSlug: 'scotland',
        pageSlug: 'physiotherapy-in-aberdeen',
        metaTitle: 'In-Home Physiotherapy in Aberdeen & North East Scotland | AriesXpert UK',
        metaDescription: 'Expert chartered home physiotherapy in Aberdeen City, Aberdeenshire, Peterhead & Stonehaven. HCPC registered, private health insurance billing.',
        keywords: ['physiotherapy in aberdeen', 'home physio aberdeen', 'chartered physio aberdeen', 'physio aberdeenshire'],
        heroHeading: 'In-Home Physiotherapy in Aberdeen',
        heroSubheading: 'Hospital-grade physical rehabilitation delivered directly to your home across Aberdeen City and Aberdeenshire.',
        localIntro: 'Serving energy sector professionals, seniors, and families across Aberdeen City and the North East with certified in-home physical therapy.',
        whySection: 'Experienced HCPC and CSP certified clinicians with comprehensive direct insurance billing.',
        stats: [
            { label: 'Active Clinicians in Aberdeen', value: '16+' },
            { label: 'Aberdeenshire Hubs', value: '5+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Aberdeen City', slug: 'aberdeen-city' },
            { name: 'Aberdeenshire', slug: 'aberdeenshire' },
            { name: 'Peterhead & Fraserburgh', slug: 'peterhead' },
            { name: 'Inverurie & Stonehaven', slug: 'inverurie' }
        ],
        conditions: ['Back & Neck Pain', 'Joint Replacements', 'Sports Injuries', 'Senior Fall Prevention'],
        faqs: [
            { question: 'Do you cover rural Aberdeenshire?', answer: 'Yes, our mobile clinicians travel to homes across both Aberdeen City and Aberdeenshire.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-aberdeen`,
    },

    // 17. CARDIFF
    {
        cityName: 'Cardiff',
        stateName: 'Wales',
        citySlug: 'cardiff',
        stateSlug: 'wales',
        pageSlug: 'physiotherapy-in-cardiff',
        metaTitle: 'Chartered In-Home Physiotherapy in Cardiff & South Wales | AriesXpert UK',
        metaDescription: 'HCPC certified bilingual physiotherapy in Cardiff Bay, Pontcanna, Penarth & Newport. Direct health insurance clearing with Bupa & AXA.',
        keywords: ['physiotherapy in cardiff', 'home physio cardiff', 'chartered physio wales', 'physio cardiff bay', 'physio pontcanna'],
        heroHeading: 'In-Home Physiotherapy in Cardiff',
        heroSubheading: 'Hospital-standard clinical physiotherapy delivered across Cardiff, Vale of Glamorgan, and South Wales.',
        localIntro: 'Our HCPC registered Welsh chartered physiotherapists deliver specialized physical therapy in your home, removing clinic travel strain and NHS wait times.',
        whySection: 'Recognized by major UK private insurers with bilingual English and Welsh clinical consultation options.',
        stats: [
            { label: 'Active Clinicians in Cardiff', value: '18+' },
            { label: 'South Wales Zones', value: '7+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Cardiff Bay & City Centre', slug: 'cardiff-bay-city-centre' },
            { name: 'Pontcanna & Llandaff', slug: 'pontcanna-llandaff' },
            { name: 'Penarth & Vale of Glamorgan', slug: 'penarth-vale' },
            { name: 'Newport & Caerleon', slug: 'newport' },
            { name: 'Swansea & Gower', slug: 'swansea' }
        ],
        conditions: ['Spinal Conditions & Sciatica', 'Knee Ligament & Cartilage Rehab', 'Post-Surgical Recovery', 'Neurological Rehabilitation'],
        faqs: [
            { question: 'Are your physiotherapists in Cardiff registered in Wales?', answer: 'Yes, all our clinicians hold statutory registration with the HCPC and are accredited members of the Chartered Society of Physiotherapy (CSP).' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-cardiff`,
    },

    // 18. SWANSEA
    {
        cityName: 'Swansea',
        stateName: 'Wales',
        citySlug: 'swansea',
        stateSlug: 'wales',
        pageSlug: 'physiotherapy-in-swansea',
        metaTitle: 'In-Home Physiotherapy in Swansea & South West Wales | AriesXpert UK',
        metaDescription: 'Chartered home physiotherapy in Swansea, Mumbles, Gower, Neath & Llanelli. HCPC registered, direct private medical insurance billing.',
        keywords: ['physiotherapy in swansea', 'home physio swansea', 'chartered physio swansea', 'physio mumbles'],
        heroHeading: 'In-Home Physiotherapy in Swansea',
        heroSubheading: 'Specialized physical therapy and mobility rehabilitation across Swansea, Mumbles, Gower, and South West Wales.',
        localIntro: 'Receive hospital-grade physiotherapy in the comfort of your home in Swansea Marina, Mumbles, Sketty, or Neath.',
        whySection: 'Direct insurance claims handling for Bupa, AXA Health, and Aviva with rapid home dispatch.',
        stats: [
            { label: 'Active Clinicians in Swansea', value: '14+' },
            { label: 'South West Wales Zones', value: '6+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Swansea Marina & City Centre', slug: 'swansea-city-centre' },
            { name: 'Mumbles & Gower', slug: 'mumbles' },
            { name: 'Neath Port Talbot', slug: 'neath-port-talbot' },
            { name: 'Llanelli & Carmarthenshire', slug: 'carmarthenshire' }
        ],
        conditions: ['Sciatica & Lumbar Spondylosis', 'Total Knee/Hip Replacement Rehab', 'Sports Injuries', 'Senior Mobility Care'],
        faqs: [
            { question: 'Do you cover Mumbles and the Gower from Swansea?', answer: 'Yes, our mobile physiotherapists cover Swansea, Mumbles, the Gower Peninsula, and Neath Port Talbot.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-swansea`,
    },

    // 19. BELFAST
    {
        cityName: 'Belfast',
        stateName: 'Northern Ireland',
        citySlug: 'belfast',
        stateSlug: 'northern-ireland',
        pageSlug: 'physiotherapy-in-belfast',
        metaTitle: 'In-Home Physiotherapy in Belfast & Greater Area | AriesXpert UK',
        metaDescription: 'Direct-access chartered home physical therapy across Belfast City Centre, Malone Road, Titanic Quarter & North Down. Registered with HCPC.',
        keywords: ['physiotherapy in belfast', 'home physio belfast', 'chartered physio northern ireland', 'physio malone road'],
        heroHeading: 'In-Home Physiotherapy in Belfast',
        heroSubheading: 'Hospital-grade chartered physical therapy delivered directly to your home across Belfast and Northern Ireland.',
        localIntro: 'Skip the clinic journey with premier in-home physiotherapy across Greater Belfast, Lisburn, and North Down.',
        whySection: 'Statutory HCPC registered chartered clinicians with direct billing for Bupa, AXA Health, and Aviva.',
        stats: [
            { label: 'Active Clinicians in Belfast', value: '15+' },
            { label: 'Northern Ireland Zones', value: '6+' },
            { label: 'Direct Billing Available', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Belfast City Centre & Titanic Quarter', slug: 'belfast-city-centre' },
            { name: 'Malone Road & Stranmillis', slug: 'malone-road' },
            { name: 'Holywood & North Down', slug: 'holywood-north-down' },
            { name: 'Lisburn & Castlereagh', slug: 'lisburn-and-castlereagh' },
            { name: 'Bangor & Newtownards', slug: 'ards-and-north-down' }
        ],
        conditions: ['Back & Neck Pain', 'Post-Surgical Joint Care', 'Sports Musculoskeletal Tears', 'Elderly Fall Prevention'],
        faqs: [
            { question: 'Do you direct-bill private medical insurance in Northern Ireland?', answer: 'Yes, we bill Bupa, AXA Health, Aviva, Vitality, and WPA directly with your pre-authorization code.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-belfast`,
    },

    // 20. DERRY / LONDONDERRY
    {
        cityName: 'Derry / Londonderry',
        stateName: 'Northern Ireland',
        citySlug: 'derry',
        stateSlug: 'northern-ireland',
        pageSlug: 'physiotherapy-in-derry',
        metaTitle: 'Chartered In-Home Physiotherapy in Derry / Londonderry | AriesXpert UK',
        metaDescription: 'Expert home physiotherapy across Derry / Londonderry, Strabane & North West NI. HCPC certified specialists, same-day appointment availability.',
        keywords: ['physiotherapy in derry', 'home physio derry', 'chartered physio londonderry', 'physio strabane'],
        heroHeading: 'In-Home Physiotherapy in Derry / Londonderry',
        heroSubheading: 'Hospital-grade chartered physical therapy delivered to your home across Derry City and Strabane.',
        localIntro: 'Bringing experienced chartered clinicians directly to your residence across Derry City, Waterside, Cityside, and Strabane.',
        whySection: 'HCPC and CSP certified care with direct health insurance claims handling.',
        stats: [
            { label: 'Active Clinicians in North West NI', value: '12+' },
            { label: 'Districts Covered', value: '4+' },
            { label: 'Insurer Clearing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Derry / Londonderry City', slug: 'derry-city' },
            { name: 'Strabane', slug: 'strabane' },
            { name: 'Causeway Coast & Coleraine', slug: 'causeway-coast-and-glens' }
        ],
        conditions: ['Spinal Disc & Sciatica Pain', 'Total Knee/Hip Replacement Recovery', 'Sports Sprains', 'Post-Fracture Rehab'],
        faqs: [
            { question: 'Can you visit rural areas around Derry and Strabane?', answer: 'Yes, our mobile clinicians provide in-home therapy across Derry City, Strabane, and neighboring districts.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-derry`,
    }
];

const CITY_ALIASES: Record<string, string> = {
    'city-of-edinburgh': 'edinburgh',
    'physiotherapy-in-city-of-edinburgh': 'physiotherapy-in-edinburgh',
    'glasgow-city': 'glasgow',
    'physiotherapy-in-glasgow-city': 'physiotherapy-in-glasgow',
    'londonderry': 'derry',
    'physiotherapy-in-londonderry': 'physiotherapy-in-derry',
    'derry-londonderry': 'derry',
    'physiotherapy-in-derry-londonderry': 'physiotherapy-in-derry',
    'greater-london': 'london',
    'physiotherapy-in-greater-london': 'physiotherapy-in-london',
};

export function getCityData(slug: string): CitySeoData | undefined {
    if (!slug) return undefined;
    const clean = slug.toLowerCase();
    const match = citySeoPages.find(c => c.citySlug === clean || c.pageSlug === clean);
    if (match) return match;
    const alias = CITY_ALIASES[clean];
    if (alias) {
        return citySeoPages.find(c => c.citySlug === alias || c.pageSlug === alias);
    }
    return undefined;
}
