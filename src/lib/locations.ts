export type IndianSubAreaType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
};

export type IndianAreaType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    subAreas?: IndianSubAreaType[];
};

export type IndianCityType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    areas: IndianAreaType[];
};

export type IndianStateType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    cities: IndianCityType[];
};

// Aliases for UK naming clarity
export type UKSubArea = IndianSubAreaType;
export type UKArea = IndianAreaType;
export type UKCity = IndianCityType;
export type UKNationType = IndianStateType;

export const UKNations: IndianStateType[] = [
    // ══════════════════════════════════════════════════════════════════════
    // 1. ENGLAND (9 Official Government Office Regions)
    // ══════════════════════════════════════════════════════════════════════
    {
        name: "England",
        slug: "england",
        isActive: true,
        seoEnabled: true,
        cities: [
            // ──────────────────────────────────────────────────────────────
            // 01. London (32 London Boroughs + City of London)
            // ──────────────────────────────────────────────────────────────
            {
                name: "Greater London",
                slug: "london",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "City of London",
                        slug: "city-of-london",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bank & Monument", slug: "bank-monument", isActive: true, seoEnabled: true },
                            { name: "Liverpool Street & Broadgate", slug: "liverpool-street", isActive: true, seoEnabled: true },
                            { name: "Barbican & Moorgate", slug: "barbican", isActive: true, seoEnabled: true },
                            { name: "Fleet Street & St Paul's", slug: "fleet-street", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Westminster",
                        slug: "westminster",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Mayfair", slug: "mayfair", isActive: true, seoEnabled: true },
                            { name: "Marylebone", slug: "marylebone", isActive: true, seoEnabled: true },
                            { name: "Soho", slug: "soho", isActive: true, seoEnabled: true },
                            { name: "Covent Garden", slug: "covent-garden", isActive: true, seoEnabled: true },
                            { name: "Belgravia", slug: "belgravia", isActive: true, seoEnabled: true },
                            { name: "Pimlico", slug: "pimlico", isActive: true, seoEnabled: true },
                            { name: "Victoria", slug: "victoria", isActive: true, seoEnabled: true },
                            { name: "St James's", slug: "st-jamess", isActive: true, seoEnabled: true },
                            { name: "Paddington", slug: "paddington", isActive: true, seoEnabled: true },
                            { name: "Bayswater", slug: "bayswater", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Kensington and Chelsea",
                        slug: "kensington-and-chelsea",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "South Kensington", slug: "south-kensington", isActive: true, seoEnabled: true },
                            { name: "Chelsea & King's Road", slug: "chelsea", isActive: true, seoEnabled: true },
                            { name: "Notting Hill & Ladbroke Grove", slug: "notting-hill", isActive: true, seoEnabled: true },
                            { name: "Knightsbridge", slug: "knightsbridge", isActive: true, seoEnabled: true },
                            { name: "Earl's Court", slug: "earls-court", isActive: true, seoEnabled: true },
                            { name: "Holland Park", slug: "holland-park", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Camden",
                        slug: "camden",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Camden Town", slug: "camden-town", isActive: true, seoEnabled: true },
                            { name: "Hampstead", slug: "hampstead", isActive: true, seoEnabled: true },
                            { name: "Bloomsbury", slug: "bloomsbury", isActive: true, seoEnabled: true },
                            { name: "Holborn & King's Cross", slug: "holborn", isActive: true, seoEnabled: true },
                            { name: "Kentish Town", slug: "kentish-town", isActive: true, seoEnabled: true },
                            { name: "Highgate", slug: "highgate", isActive: true, seoEnabled: true },
                            { name: "Highgate (Camden)", slug: "highgate-camden", isActive: true, seoEnabled: true },
                            { name: "Primrose Hill", slug: "primrose-hill", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Islington",
                        slug: "islington",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Angel", slug: "angel", isActive: true, seoEnabled: true },
                            { name: "Angel & Upper Street", slug: "angel-islington", isActive: true, seoEnabled: true },
                            { name: "Highbury & Canonbury", slug: "highbury", isActive: true, seoEnabled: true },
                            { name: "Clerkenwell & Farringdon", slug: "clerkenwell", isActive: true, seoEnabled: true },
                            { name: "Finsbury Park (Islington)", slug: "finsbury-park-islington", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hackney",
                        slug: "hackney",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Shoreditch", slug: "shoreditch", isActive: true, seoEnabled: true },
                            { name: "Shoreditch & Hoxton", slug: "shoreditch-hoxton", isActive: true, seoEnabled: true },
                            { name: "Stoke Newington", slug: "stoke-newington", isActive: true, seoEnabled: true },
                            { name: "Hackney Central & London Fields", slug: "hackney-central", isActive: true, seoEnabled: true },
                            { name: "Dalston", slug: "dalston", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Tower Hamlets",
                        slug: "tower-hamlets",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Canary Wharf & Isle of Dogs", slug: "canary-wharf", isActive: true, seoEnabled: true },
                            { name: "Wapping & St Katharine Docks", slug: "wapping", isActive: true, seoEnabled: true },
                            { name: "Bethnal Green & Bow", slug: "bethnal-green", isActive: true, seoEnabled: true },
                            { name: "Whitechapel & Spitalfields", slug: "whitechapel", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Southwark",
                        slug: "southwark",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "London Bridge & Borough", slug: "london-bridge-borough", isActive: true, seoEnabled: true },
                            { name: "Dulwich & East Dulwich", slug: "dulwich", isActive: true, seoEnabled: true },
                            { name: "Bermondsey & Rotherhithe", slug: "bermondsey", isActive: true, seoEnabled: true },
                            { name: "Peckham & Camberwell", slug: "peckham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lambeth",
                        slug: "lambeth",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Waterloo & South Bank", slug: "waterloo-south-bank", isActive: true, seoEnabled: true },
                            { name: "Brixton & Herne Hill", slug: "brixton", isActive: true, seoEnabled: true },
                            { name: "Clapham", slug: "clapham", isActive: true, seoEnabled: true },
                            { name: "Clapham (Lambeth)", slug: "clapham-lambeth", isActive: true, seoEnabled: true },
                            { name: "Vauxhall & Kennington", slug: "vauxhall-kennington", isActive: true, seoEnabled: true },
                            { name: "Streatham", slug: "streatham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Wandsworth",
                        slug: "wandsworth",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Battersea & Nine Elms", slug: "battersea", isActive: true, seoEnabled: true },
                            { name: "Clapham Junction", slug: "clapham-junction", isActive: true, seoEnabled: true },
                            { name: "Putney & Roehampton", slug: "putney", isActive: true, seoEnabled: true },
                            { name: "Wandsworth Town", slug: "wandsworth-town", isActive: true, seoEnabled: true },
                            { name: "Balham & Tooting", slug: "balham-tooting", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Richmond upon Thames",
                        slug: "richmond-upon-thames",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Richmond", slug: "richmond", isActive: true, seoEnabled: true },
                            { name: "Richmond Town & Green", slug: "richmond-town", isActive: true, seoEnabled: true },
                            { name: "Twickenham & St Margarets", slug: "twickenham", isActive: true, seoEnabled: true },
                            { name: "Barnes & Mortlake", slug: "barnes", isActive: true, seoEnabled: true },
                            { name: "Teddington & Hampton", slug: "teddington", isActive: true, seoEnabled: true },
                            { name: "Kew", slug: "kew", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hammersmith and Fulham",
                        slug: "hammersmith-and-fulham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Hammersmith Broadway", slug: "hammersmith", isActive: true, seoEnabled: true },
                            { name: "Fulham & Parsons Green", slug: "fulham", isActive: true, seoEnabled: true },
                            { name: "Shepherd's Bush & White City", slug: "shepherds-bush", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Greenwich",
                        slug: "greenwich",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Greenwich Town & Cutty Sark", slug: "greenwich-town", isActive: true, seoEnabled: true },
                            { name: "Blackheath (Greenwich)", slug: "blackheath-greenwich", isActive: true, seoEnabled: true },
                            { name: "North Greenwich & O2", slug: "north-greenwich", isActive: true, seoEnabled: true },
                            { name: "Eltham", slug: "eltham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lewisham",
                        slug: "lewisham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Lewisham Central", slug: "lewisham-central", isActive: true, seoEnabled: true },
                            { name: "Blackheath (Lewisham)", slug: "blackheath-lewisham", isActive: true, seoEnabled: true },
                            { name: "Deptford & New Cross", slug: "deptford", isActive: true, seoEnabled: true },
                            { name: "Forest Hill & Sydenham", slug: "forest-hill", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Merton",
                        slug: "merton",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wimbledon", slug: "wimbledon", isActive: true, seoEnabled: true },
                            { name: "Wimbledon Town", slug: "wimbledon-town", isActive: true, seoEnabled: true },
                            { name: "Wimbledon Village", slug: "wimbledon-village", isActive: true, seoEnabled: true },
                            { name: "Mitcham", slug: "mitcham", isActive: true, seoEnabled: true },
                            { name: "Morden & Raynes Park", slug: "morden", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Kingston upon Thames",
                        slug: "kingston-upon-thames",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Kingston Town Centre", slug: "kingston-town", isActive: true, seoEnabled: true },
                            { name: "Surbiton", slug: "surbiton", isActive: true, seoEnabled: true },
                            { name: "New Malden & Coombe", slug: "new-malden", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Barnet",
                        slug: "barnet",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Finchley", slug: "finchley", isActive: true, seoEnabled: true },
                            { name: "Hendon", slug: "hendon", isActive: true, seoEnabled: true },
                            { name: "Golders Green & Hampstead Garden Suburb", slug: "golders-green", isActive: true, seoEnabled: true },
                            { name: "Edgware & Mill Hill", slug: "edgware", isActive: true, seoEnabled: true },
                            { name: "High Barnet", slug: "high-barnet", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Haringey",
                        slug: "haringey",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Muswell Hill", slug: "muswell-hill", isActive: true, seoEnabled: true },
                            { name: "Crouch End", slug: "crouch-end", isActive: true, seoEnabled: true },
                            { name: "Highgate (Haringey)", slug: "highgate-haringey", isActive: true, seoEnabled: true },
                            { name: "Tottenham & Wood Green", slug: "tottenham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Brent",
                        slug: "brent",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wembley & Park Royal", slug: "wembley", isActive: true, seoEnabled: true },
                            { name: "Kilburn & Queen's Park", slug: "kilburn", isActive: true, seoEnabled: true },
                            { name: "Willesden & Harlesden", slug: "willesden", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Ealing",
                        slug: "ealing",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Ealing Broadway & Common", slug: "ealing-broadway", isActive: true, seoEnabled: true },
                            { name: "Acton", slug: "acton", isActive: true, seoEnabled: true },
                            { name: "Southall", slug: "southall", isActive: true, seoEnabled: true },
                            { name: "Hanwell & West Ealing", slug: "hanwell", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hounslow",
                        slug: "hounslow",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Chiswick & Gunnersbury", slug: "chiswick", isActive: true, seoEnabled: true },
                            { name: "Brentford & Syon", slug: "brentford", isActive: true, seoEnabled: true },
                            { name: "Isleworth & Osterley", slug: "isleworth", isActive: true, seoEnabled: true },
                            { name: "Hounslow Central & Feltham", slug: "hounslow-central", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hillingdon",
                        slug: "hillingdon",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Uxbridge", slug: "uxbridge", isActive: true, seoEnabled: true },
                            { name: "Ruislip & Northwood", slug: "ruislip", isActive: true, seoEnabled: true },
                            { name: "Hayes & Harlington", slug: "hayes", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Harrow",
                        slug: "harrow",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Harrow on the Hill", slug: "harrow-on-the-hill", isActive: true, seoEnabled: true },
                            { name: "Pinner & Hatch End", slug: "pinner", isActive: true, seoEnabled: true },
                            { name: "Stanmore", slug: "stanmore", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Enfield",
                        slug: "enfield",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Enfield Town", slug: "enfield-town", isActive: true, seoEnabled: true },
                            { name: "Southgate & Oakwood", slug: "southgate", isActive: true, seoEnabled: true },
                            { name: "Palmers Green & Edmonton", slug: "palmers-green", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Waltham Forest",
                        slug: "waltham-forest",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Walthamstow & Village", slug: "walthamstow", isActive: true, seoEnabled: true },
                            { name: "Leyton & Leytonstone", slug: "leyton", isActive: true, seoEnabled: true },
                            { name: "Chingford", slug: "chingford", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Redbridge",
                        slug: "redbridge",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Ilford & Gants Hill", slug: "ilford", isActive: true, seoEnabled: true },
                            { name: "Wanstead & Snaresbrook", slug: "wanstead", isActive: true, seoEnabled: true },
                            { name: "Woodford & South Woodford", slug: "woodford", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Newham",
                        slug: "newham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Stratford & Olympic Park", slug: "stratford", isActive: true, seoEnabled: true },
                            { name: "Royal Docks & Canning Town", slug: "royal-docks", isActive: true, seoEnabled: true },
                            { name: "East Ham & Forest Gate", slug: "east-ham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Barking and Dagenham",
                        slug: "barking-and-dagenham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Barking", slug: "barking", isActive: true, seoEnabled: true },
                            { name: "Dagenham", slug: "dagenham", isActive: true, seoEnabled: true },
                            { name: "Chadwell Heath", slug: "chadwell-heath", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Havering",
                        slug: "havering",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Romford", slug: "romford", isActive: true, seoEnabled: true },
                            { name: "Hornchurch & Emerson Park", slug: "hornchurch", isActive: true, seoEnabled: true },
                            { name: "Upminster", slug: "upminster", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bexley",
                        slug: "bexley",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bexleyheath", slug: "bexleyheath", isActive: true, seoEnabled: true },
                            { name: "Sidcup", slug: "sidcup", isActive: true, seoEnabled: true },
                            { name: "Erith & Crayford", slug: "erith", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bromley",
                        slug: "bromley",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bromley Town", slug: "bromley-town", isActive: true, seoEnabled: true },
                            { name: "Beckenham", slug: "beckenham", isActive: true, seoEnabled: true },
                            { name: "Chislehurst & Bickley", slug: "chislehurst", isActive: true, seoEnabled: true },
                            { name: "Orpington & Petts Wood", slug: "orpington", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Croydon",
                        slug: "croydon",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Croydon Central", slug: "croydon-central", isActive: true, seoEnabled: true },
                            { name: "Purley & Kenley", slug: "purley", isActive: true, seoEnabled: true },
                            { name: "Coulsdon", slug: "coulsdon", isActive: true, seoEnabled: true },
                            { name: "Thornton Heath & Norbury", slug: "thornton-heath", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Sutton",
                        slug: "sutton",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Sutton Town", slug: "sutton-town", isActive: true, seoEnabled: true },
                            { name: "Cheam & Belmont", slug: "cheam", isActive: true, seoEnabled: true },
                            { name: "Carshalton & Wallington", slug: "carshalton", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 02. North East
            // ──────────────────────────────────────────────────────────────
            {
                name: "North East",
                slug: "north-east",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Newcastle upon Tyne",
                        slug: "newcastle-upon-tyne",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Newcastle City Centre & Quayside", slug: "newcastle-city-centre", isActive: true, seoEnabled: true },
                            { name: "Jesmond", slug: "jesmond", isActive: true, seoEnabled: true },
                            { name: "Gosforth", slug: "gosforth", isActive: true, seoEnabled: true },
                            { name: "Heaton & Ouseburn", slug: "heaton", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Sunderland",
                        slug: "sunderland",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Sunderland City Centre", slug: "sunderland-city-centre", isActive: true, seoEnabled: true },
                            { name: "Ashbrooke & Tunstall", slug: "ashbrooke", isActive: true, seoEnabled: true },
                            { name: "Roker & Seaburn", slug: "roker-seaburn", isActive: true, seoEnabled: true },
                            { name: "Washington", slug: "washington", isActive: true, seoEnabled: true },
                            { name: "Washington (Tyne and Wear)", slug: "washington-sunderland", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Durham",
                        slug: "durham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Durham City", slug: "durham-city", isActive: true, seoEnabled: true },
                            { name: "Bishop Auckland", slug: "bishop-auckland", isActive: true, seoEnabled: true },
                            { name: "Consett & Stanley", slug: "consett", isActive: true, seoEnabled: true },
                            { name: "Peterlee & Seaham", slug: "peterlee", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "County Durham", slug: "county-durham", isActive: true, seoEnabled: true },
                    {
                        name: "Gateshead",
                        slug: "gateshead",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Gateshead Quays & Town", slug: "gateshead-quays", isActive: true, seoEnabled: true },
                            { name: "Low Fell", slug: "low-fell", isActive: true, seoEnabled: true },
                            { name: "Whickham", slug: "whickham", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Darlington", slug: "darlington", isActive: true, seoEnabled: true },
                    { name: "Hartlepool", slug: "hartlepool", isActive: true, seoEnabled: true },
                    { name: "Middlesbrough", slug: "middlesbrough", isActive: true, seoEnabled: true },
                    {
                        name: "North Tyneside",
                        slug: "north-tyneside",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Tynemouth", slug: "tynemouth", isActive: true, seoEnabled: true },
                            { name: "Whitley Bay", slug: "whitley-bay", isActive: true, seoEnabled: true },
                            { name: "North Shields", slug: "north-shields", isActive: true, seoEnabled: true },
                            { name: "Wallsend", slug: "wallsend", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "South Tyneside",
                        slug: "south-tyneside",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "South Shields", slug: "south-shields", isActive: true, seoEnabled: true },
                            { name: "Jarrow & Hebburn", slug: "jarrow", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Northumberland",
                        slug: "northumberland",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Hexham & Tynedale", slug: "hexham", isActive: true, seoEnabled: true },
                            { name: "Morpeth", slug: "morpeth", isActive: true, seoEnabled: true },
                            { name: "Blyth & Cramlington", slug: "blyth", isActive: true, seoEnabled: true },
                            { name: "Alnwick & Berwick", slug: "alnwick", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Redcar and Cleveland", slug: "redcar-and-cleveland", isActive: true, seoEnabled: true },
                    { name: "Stockton-on-Tees", slug: "stockton-on-tees", isActive: true, seoEnabled: true }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 03. North West
            // ──────────────────────────────────────────────────────────────
            {
                name: "North West",
                slug: "north-west",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Manchester",
                        slug: "manchester",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Manchester City Centre & Deansgate", slug: "deansgate-city-centre", isActive: true, seoEnabled: true },
                            { name: "Northern Quarter & Ancoats", slug: "northern-quarter", isActive: true, seoEnabled: true },
                            { name: "Didsbury & Chorlton", slug: "didsbury-chorlton", isActive: true, seoEnabled: true },
                            { name: "Fallowfield & Withington", slug: "fallowfield", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Greater Manchester",
                        slug: "greater-manchester",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bolton", slug: "bolton", isActive: true, seoEnabled: true },
                            { name: "Bury", slug: "bury", isActive: true, seoEnabled: true },
                            { name: "Oldham", slug: "oldham", isActive: true, seoEnabled: true },
                            { name: "Rochdale", slug: "rochdale", isActive: true, seoEnabled: true },
                            { name: "Stockport", slug: "stockport", isActive: true, seoEnabled: true },
                            { name: "Tameside & Ashton", slug: "tameside", isActive: true, seoEnabled: true },
                            { name: "Wigan", slug: "wigan", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Salford",
                        slug: "salford",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Salford Quays & MediaCityUK", slug: "salford-quays", isActive: true, seoEnabled: true },
                            { name: "Worsley & Swinton", slug: "worsley", isActive: true, seoEnabled: true },
                            { name: "Eccles", slug: "eccles", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Trafford",
                        slug: "trafford",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Altrincham & Hale", slug: "altrincham-hale", isActive: true, seoEnabled: true },
                            { name: "Sale", slug: "sale", isActive: true, seoEnabled: true },
                            { name: "Stretford & Urmston", slug: "stretford", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Liverpool",
                        slug: "liverpool",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Liverpool City Centre & Waterfront", slug: "liverpool-city-centre", isActive: true, seoEnabled: true },
                            { name: "Baltic Triangle & Ropewalks", slug: "baltic-triangle", isActive: true, seoEnabled: true },
                            { name: "Allerton & Mossley Hill", slug: "allerton", isActive: true, seoEnabled: true },
                            { name: "Aigburth & Sefton Park", slug: "aigburth", isActive: true, seoEnabled: true },
                            { name: "Crosby & Waterloo", slug: "crosby", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Merseyside",
                        slug: "merseyside",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wirral & Birkenhead", slug: "wirral", isActive: true, seoEnabled: true },
                            { name: "Sefton", slug: "sefton", isActive: true, seoEnabled: true },
                            { name: "Southport", slug: "southport", isActive: true, seoEnabled: true },
                            { name: "St Helens", slug: "st-helens", isActive: true, seoEnabled: true },
                            { name: "Knowsley & Huyton", slug: "knowsley", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Cheshire",
                        slug: "cheshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Chester City Centre", slug: "chester", isActive: true, seoEnabled: true },
                            { name: "Warrington", slug: "warrington", isActive: true, seoEnabled: true },
                            { name: "Crewe & Nantwich", slug: "crewe", isActive: true, seoEnabled: true },
                            { name: "Macclesfield", slug: "macclesfield", isActive: true, seoEnabled: true },
                            { name: "Wilmslow & Alderley Edge", slug: "wilmslow-alderley-edge", isActive: true, seoEnabled: true },
                            { name: "Knutsford", slug: "knutsford", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lancashire",
                        slug: "lancashire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Preston", slug: "preston", isActive: true, seoEnabled: true },
                            { name: "Lancaster", slug: "lancaster", isActive: true, seoEnabled: true },
                            { name: "Blackpool & Fylde", slug: "blackpool", isActive: true, seoEnabled: true },
                            { name: "Blackburn", slug: "blackburn", isActive: true, seoEnabled: true },
                            { name: "Burnley", slug: "burnley", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Cumbria",
                        slug: "cumbria",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Carlisle", slug: "carlisle", isActive: true, seoEnabled: true },
                            { name: "Cumberland", slug: "cumberland", isActive: true, seoEnabled: true },
                            { name: "Westmorland and Furness", slug: "westmorland-and-furness", isActive: true, seoEnabled: true },
                            { name: "Barrow-in-Furness", slug: "barrow-in-furness", isActive: true, seoEnabled: true },
                            { name: "Kendal & South Lakeland", slug: "kendal", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 04. Yorkshire and the Humber
            // ──────────────────────────────────────────────────────────────
            {
                name: "Yorkshire and the Humber",
                slug: "yorkshire-and-the-humber",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Leeds",
                        slug: "leeds",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Leeds City Centre", slug: "leeds-city-centre", isActive: true, seoEnabled: true },
                            { name: "Headingley & Far Headingley", slug: "headingley", isActive: true, seoEnabled: true },
                            { name: "Roundhay & Oakwood", slug: "roundhay", isActive: true, seoEnabled: true },
                            { name: "Alwoodley & Moortown", slug: "alwoodley", isActive: true, seoEnabled: true },
                            { name: "Horsforth", slug: "horsforth", isActive: true, seoEnabled: true },
                            { name: "Chapel Allerton", slug: "chapel-allerton", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Sheffield",
                        slug: "sheffield",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Sheffield City Centre", slug: "sheffield-city-centre", isActive: true, seoEnabled: true },
                            { name: "Ecclesall & Millhouses", slug: "ecclesall", isActive: true, seoEnabled: true },
                            { name: "Broomhill & Crookes", slug: "broomhill", isActive: true, seoEnabled: true },
                            { name: "Dore & Totley", slug: "dore-totley", isActive: true, seoEnabled: true },
                            { name: "Hillsborough", slug: "hillsborough", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bradford",
                        slug: "bradford",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bradford City Centre", slug: "bradford-city-centre", isActive: true, seoEnabled: true },
                            { name: "Saltaire & Shipley", slug: "saltaire", isActive: true, seoEnabled: true },
                            { name: "Ilkley", slug: "ilkley", isActive: true, seoEnabled: true },
                            { name: "Keighley & Bingley", slug: "keighley", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "West Yorkshire",
                        slug: "west-yorkshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wakefield", slug: "wakefield", isActive: true, seoEnabled: true },
                            { name: "Kirklees", slug: "kirklees", isActive: true, seoEnabled: true },
                            { name: "Huddersfield", slug: "huddersfield", isActive: true, seoEnabled: true },
                            { name: "Calderdale", slug: "calderdale", isActive: true, seoEnabled: true },
                            { name: "Halifax", slug: "halifax", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "South Yorkshire",
                        slug: "south-yorkshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Doncaster", slug: "doncaster", isActive: true, seoEnabled: true },
                            { name: "Rotherham", slug: "rotherham", isActive: true, seoEnabled: true },
                            { name: "Barnsley", slug: "barnsley", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "York",
                        slug: "york",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "York Historic Centre", slug: "york-historic-centre", isActive: true, seoEnabled: true },
                            { name: "Clifton & Rawcliffe", slug: "clifton-york", isActive: true, seoEnabled: true },
                            { name: "Heslington & Fulford", slug: "heslington", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "North Yorkshire",
                        slug: "north-yorkshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Harrogate", slug: "harrogate", isActive: true, seoEnabled: true },
                            { name: "Scarborough", slug: "scarborough", isActive: true, seoEnabled: true },
                            { name: "Ripon & Knaresborough", slug: "ripon", isActive: true, seoEnabled: true },
                            { name: "Skipton & Yorkshire Dales", slug: "skipton", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "East Riding of Yorkshire",
                        slug: "east-riding-of-yorkshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Beverley", slug: "beverley", isActive: true, seoEnabled: true },
                            { name: "Bridlington", slug: "bridlington", isActive: true, seoEnabled: true },
                            { name: "Goole", slug: "goole", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Kingston upon Hull",
                        slug: "kingston-upon-hull",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Hull City Centre", slug: "hull", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "North East Lincolnshire",
                        slug: "north-east-lincolnshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Grimsby", slug: "grimsby", isActive: true, seoEnabled: true },
                            { name: "Cleethorpes", slug: "cleethorpes", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "North Lincolnshire",
                        slug: "north-lincolnshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Scunthorpe", slug: "scunthorpe", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 05. East Midlands
            // ──────────────────────────────────────────────────────────────
            {
                name: "East Midlands",
                slug: "east-midlands",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Nottingham",
                        slug: "nottingham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Nottingham City Centre", slug: "nottingham-city-centre", isActive: true, seoEnabled: true },
                            { name: "West Bridgford", slug: "west-bridgford", isActive: true, seoEnabled: true },
                            { name: "Wollaton & Beeston", slug: "wollaton", isActive: true, seoEnabled: true },
                            { name: "The Park Estate", slug: "the-park-nottingham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Nottinghamshire",
                        slug: "nottinghamshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Mansfield", slug: "mansfield", isActive: true, seoEnabled: true },
                            { name: "Worksop", slug: "worksop", isActive: true, seoEnabled: true },
                            { name: "Newark-on-Trent", slug: "newark-on-trent", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Leicester",
                        slug: "leicester",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Leicester City Centre", slug: "leicester-city-centre", isActive: true, seoEnabled: true },
                            { name: "Clarendon Park & Stoneygate", slug: "clarendon-park", isActive: true, seoEnabled: true },
                            { name: "Oadby & Wigston", slug: "oadby", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Leicestershire",
                        slug: "leicestershire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Loughborough", slug: "loughborough", isActive: true, seoEnabled: true },
                            { name: "Hinckley", slug: "hinckley", isActive: true, seoEnabled: true },
                            { name: "Melton Mowbray", slug: "melton-mowbray", isActive: true, seoEnabled: true },
                            { name: "Market Harborough", slug: "market-harborough", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Derby",
                        slug: "derby",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Derby City Centre", slug: "derby-city-centre", isActive: true, seoEnabled: true },
                            { name: "Allestree & Darley Abbey", slug: "allestree", isActive: true, seoEnabled: true },
                            { name: "Mickleover & Littleover", slug: "mickleover", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Derbyshire",
                        slug: "derbyshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Chesterfield", slug: "chesterfield", isActive: true, seoEnabled: true },
                            { name: "Buxton & Peak District", slug: "buxton", isActive: true, seoEnabled: true },
                            { name: "Matlock & Bakewell", slug: "matlock", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lincoln",
                        slug: "lincoln",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Cathedral Quarter & Bailgate", slug: "lincoln-cathedral-quarter", isActive: true, seoEnabled: true },
                            { name: "Lincoln City Centre", slug: "lincoln-city-centre", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lincolnshire",
                        slug: "lincolnshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Grantham", slug: "grantham", isActive: true, seoEnabled: true },
                            { name: "Boston", slug: "boston", isActive: true, seoEnabled: true },
                            { name: "Stamford", slug: "stamford", isActive: true, seoEnabled: true },
                            { name: "Spalding & Skegness", slug: "spalding", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Northamptonshire",
                        slug: "northamptonshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Northampton", slug: "northampton", isActive: true, seoEnabled: true },
                            { name: "Kettering", slug: "kettering", isActive: true, seoEnabled: true },
                            { name: "Corby", slug: "corby", isActive: true, seoEnabled: true },
                            { name: "Wellingborough", slug: "wellingborough", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Rutland", slug: "rutland", isActive: true, seoEnabled: true }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 06. West Midlands
            // ──────────────────────────────────────────────────────────────
            {
                name: "West Midlands",
                slug: "west-midlands",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Birmingham",
                        slug: "birmingham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Birmingham City Centre & Colmore Row", slug: "birmingham-city-centre", isActive: true, seoEnabled: true },
                            { name: "Jewellery Quarter", slug: "jewellery-quarter", isActive: true, seoEnabled: true },
                            { name: "Edgbaston & Harborne", slug: "edgbaston-harborne", isActive: true, seoEnabled: true },
                            { name: "Moseley & Kings Heath", slug: "moseley", isActive: true, seoEnabled: true },
                            { name: "Sutton Coldfield & Four Oaks", slug: "sutton-coldfield", isActive: true, seoEnabled: true },
                            { name: "Bournville & Selly Oak", slug: "bournville", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Coventry",
                        slug: "coventry",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Coventry City Centre", slug: "coventry-city-centre", isActive: true, seoEnabled: true },
                            { name: "Earlsdon", slug: "earlsdon", isActive: true, seoEnabled: true },
                            { name: "Finham & Kenilworth Border", slug: "finham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Wolverhampton",
                        slug: "wolverhampton",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wolverhampton City Centre", slug: "wolverhampton-city-centre", isActive: true, seoEnabled: true },
                            { name: "Tettenhall & Wightwick", slug: "tettenhall", isActive: true, seoEnabled: true },
                            { name: "Penn", slug: "penn-wolverhampton", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Solihull",
                        slug: "solihull",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Solihull Town Centre", slug: "solihull-town", isActive: true, seoEnabled: true },
                            { name: "Knowle & Dorridge", slug: "knowle-dorridge", isActive: true, seoEnabled: true },
                            { name: "Shirley", slug: "shirley", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Dudley",
                        slug: "dudley",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Dudley Town", slug: "dudley-town", isActive: true, seoEnabled: true },
                            { name: "Stourbridge", slug: "stourbridge", isActive: true, seoEnabled: true },
                            { name: "Halesowen", slug: "halesowen", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Sandwell",
                        slug: "sandwell",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "West Bromwich", slug: "west-bromwich", isActive: true, seoEnabled: true },
                            { name: "Oldbury & Smethwick", slug: "oldbury", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Walsall",
                        slug: "walsall",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Walsall Town", slug: "walsall-town", isActive: true, seoEnabled: true },
                            { name: "Aldridge & Brownhills", slug: "aldridge", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Stoke-on-Trent",
                        slug: "stoke-on-trent",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Hanley City Centre", slug: "hanley", isActive: true, seoEnabled: true },
                            { name: "Trentham", slug: "trentham", isActive: true, seoEnabled: true },
                            { name: "Newcastle-under-Lyme", slug: "newcastle-under-lyme", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Staffordshire",
                        slug: "staffordshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Stafford", slug: "stafford", isActive: true, seoEnabled: true },
                            { name: "Lichfield", slug: "lichfield", isActive: true, seoEnabled: true },
                            { name: "Tamworth", slug: "tamworth", isActive: true, seoEnabled: true },
                            { name: "Cannock", slug: "cannock", isActive: true, seoEnabled: true },
                            { name: "Burton upon Trent", slug: "burton-upon-trent", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Warwickshire",
                        slug: "warwickshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Warwick", slug: "warwick", isActive: true, seoEnabled: true },
                            { name: "Leamington Spa", slug: "leamington-spa", isActive: true, seoEnabled: true },
                            { name: "Stratford-upon-Avon", slug: "stratford-upon-avon", isActive: true, seoEnabled: true },
                            { name: "Nuneaton", slug: "nuneaton", isActive: true, seoEnabled: true },
                            { name: "Rugby", slug: "rugby", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Worcestershire",
                        slug: "worcestershire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Worcester", slug: "worcester", isActive: true, seoEnabled: true },
                            { name: "Kidderminster", slug: "kidderminster", isActive: true, seoEnabled: true },
                            { name: "Redditch", slug: "redditch", isActive: true, seoEnabled: true },
                            { name: "Bromsgrove", slug: "bromsgrove", isActive: true, seoEnabled: true },
                            { name: "Malvern", slug: "malvern", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Shropshire",
                        slug: "shropshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Shrewsbury", slug: "shrewsbury", isActive: true, seoEnabled: true },
                            { name: "Telford", slug: "telford", isActive: true, seoEnabled: true },
                            { name: "Oswestry", slug: "oswestry", isActive: true, seoEnabled: true },
                            { name: "Bridgnorth", slug: "bridgnorth", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Herefordshire",
                        slug: "herefordshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Hereford", slug: "hereford", isActive: true, seoEnabled: true },
                            { name: "Leominster", slug: "leominster", isActive: true, seoEnabled: true },
                            { name: "Ross-on-Wye", slug: "ross-on-wye", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 07. East of England
            // ──────────────────────────────────────────────────────────────
            {
                name: "East of England",
                slug: "east-of-england",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Cambridgeshire",
                        slug: "cambridgeshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Cambridge City Centre", slug: "cambridge-city-centre", isActive: true, seoEnabled: true },
                            { name: "Trumpington & Newnham", slug: "trumpington", isActive: true, seoEnabled: true },
                            { name: "Peterborough", slug: "peterborough", isActive: true, seoEnabled: true },
                            { name: "Ely", slug: "ely", isActive: true, seoEnabled: true },
                            { name: "Huntingdon & St Neots", slug: "huntingdon", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Norfolk",
                        slug: "norfolk",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Norwich City Centre", slug: "norwich", isActive: true, seoEnabled: true },
                            { name: "Great Yarmouth", slug: "great-yarmouth", isActive: true, seoEnabled: true },
                            { name: "King's Lynn", slug: "kings-lynn", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Suffolk",
                        slug: "suffolk",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Ipswich", slug: "ipswich", isActive: true, seoEnabled: true },
                            { name: "Bury St Edmunds", slug: "bury-st-edmunds", isActive: true, seoEnabled: true },
                            { name: "Lowestoft", slug: "lowestoft", isActive: true, seoEnabled: true },
                            { name: "Newmarket & Felixstowe", slug: "newmarket", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Essex",
                        slug: "essex",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Chelmsford", slug: "chelmsford", isActive: true, seoEnabled: true },
                            { name: "Colchester", slug: "colchester", isActive: true, seoEnabled: true },
                            { name: "Southend-on-Sea", slug: "southend-on-sea", isActive: true, seoEnabled: true },
                            { name: "Basildon", slug: "basildon", isActive: true, seoEnabled: true },
                            { name: "Harlow", slug: "harlow", isActive: true, seoEnabled: true },
                            { name: "Brentwood", slug: "brentwood", isActive: true, seoEnabled: true },
                            { name: "Thurrock", slug: "thurrock", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hertfordshire",
                        slug: "hertfordshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "St Albans", slug: "st-albans", isActive: true, seoEnabled: true },
                            { name: "Watford", slug: "watford", isActive: true, seoEnabled: true },
                            { name: "Stevenage", slug: "stevenage", isActive: true, seoEnabled: true },
                            { name: "Hemel Hempstead", slug: "hemel-hempstead", isActive: true, seoEnabled: true },
                            { name: "Hitchin & Letchworth", slug: "hitchin", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bedfordshire",
                        slug: "bedfordshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bedford", slug: "bedford", isActive: true, seoEnabled: true },
                            { name: "Luton", slug: "luton", isActive: true, seoEnabled: true },
                            { name: "Dunstable & Leighton Buzzard", slug: "dunstable", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 08. South East
            // ──────────────────────────────────────────────────────────────
            {
                name: "South East",
                slug: "south-east",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Oxfordshire",
                        slug: "oxfordshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Oxford Historic Centre", slug: "oxford", isActive: true, seoEnabled: true },
                            { name: "Summertown & Jericho", slug: "summertown", isActive: true, seoEnabled: true },
                            { name: "Headingley & Cowley (Oxford)", slug: "headington", isActive: true, seoEnabled: true },
                            { name: "Banbury & Bicester", slug: "banbury", isActive: true, seoEnabled: true },
                            { name: "Abingdon & Didcot", slug: "abingdon", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Berkshire",
                        slug: "berkshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Reading", slug: "reading", isActive: true, seoEnabled: true },
                            { name: "Slough", slug: "slough", isActive: true, seoEnabled: true },
                            { name: "Windsor & Maidenhead", slug: "windsor", isActive: true, seoEnabled: true },
                            { name: "Bracknell & Wokingham", slug: "bracknell", isActive: true, seoEnabled: true },
                            { name: "Newbury", slug: "newbury", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Buckinghamshire",
                        slug: "buckinghamshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Milton Keynes", slug: "milton-keynes", isActive: true, seoEnabled: true },
                            { name: "High Wycombe", slug: "high-wycombe", isActive: true, seoEnabled: true },
                            { name: "Aylesbury", slug: "aylesbury", isActive: true, seoEnabled: true },
                            { name: "Amersham & Chesham", slug: "amersham", isActive: true, seoEnabled: true },
                            { name: "Beaconsfield", slug: "beaconsfield", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Surrey",
                        slug: "surrey",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Guildford", slug: "guildford", isActive: true, seoEnabled: true },
                            { name: "Woking", slug: "woking", isActive: true, seoEnabled: true },
                            { name: "Epsom & Ewell", slug: "epsom", isActive: true, seoEnabled: true },
                            { name: "Farnham", slug: "farnham", isActive: true, seoEnabled: true },
                            { name: "Weybridge & Esher", slug: "weybridge", isActive: true, seoEnabled: true },
                            { name: "Reigate & Redhill", slug: "reigate", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Hampshire",
                        slug: "hampshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Southampton", slug: "southampton", isActive: true, seoEnabled: true },
                            { name: "Portsmouth & Southsea", slug: "portsmouth", isActive: true, seoEnabled: true },
                            { name: "Winchester", slug: "winchester", isActive: true, seoEnabled: true },
                            { name: "Basingstoke", slug: "basingstoke", isActive: true, seoEnabled: true },
                            { name: "Andover & Farnborough", slug: "andover", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Kent",
                        slug: "kent",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Canterbury", slug: "canterbury", isActive: true, seoEnabled: true },
                            { name: "Maidstone", slug: "maidstone", isActive: true, seoEnabled: true },
                            { name: "Tunbridge Wells", slug: "tunbridge-wells", isActive: true, seoEnabled: true },
                            { name: "Dover & Folkestone", slug: "dover", isActive: true, seoEnabled: true },
                            { name: "Margate & Thanet", slug: "margate", isActive: true, seoEnabled: true },
                            { name: "Dartford & Sevenoaks", slug: "dartford", isActive: true, seoEnabled: true },
                            { name: "Medway (Rochester & Chatham)", slug: "medway", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "East Sussex",
                        slug: "east-sussex",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Brighton", slug: "brighton", isActive: true, seoEnabled: true },
                            { name: "Hove", slug: "hove", isActive: true, seoEnabled: true },
                            { name: "Brighton and Hove", slug: "brighton-and-hove", isActive: true, seoEnabled: true },
                            { name: "Eastbourne", slug: "eastbourne", isActive: true, seoEnabled: true },
                            { name: "Hastings & Bexhill", slug: "hastings", isActive: true, seoEnabled: true },
                            { name: "Lewes", slug: "lewes", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "West Sussex",
                        slug: "west-sussex",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Crawley", slug: "crawley", isActive: true, seoEnabled: true },
                            { name: "Worthing", slug: "worthing", isActive: true, seoEnabled: true },
                            { name: "Chichester", slug: "chichester", isActive: true, seoEnabled: true },
                            { name: "Horsham", slug: "horsham", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Isle of Wight", slug: "isle-of-wight", isActive: true, seoEnabled: true }
                ]
            },

            // ──────────────────────────────────────────────────────────────
            // 09. South West
            // ──────────────────────────────────────────────────────────────
            {
                name: "South West",
                slug: "south-west",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Bristol",
                        slug: "bristol",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Clifton & Harbourside", slug: "clifton-harbourside", isActive: true, seoEnabled: true },
                            { name: "Redland & Cotham", slug: "redland-cotham", isActive: true, seoEnabled: true },
                            { name: "Southville & Bedminster", slug: "southville", isActive: true, seoEnabled: true },
                            { name: "Stoke Bishop & Henleaze", slug: "stoke-bishop", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bath and North East Somerset",
                        slug: "bath-and-north-east-somerset",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bath City Centre", slug: "bath", isActive: true, seoEnabled: true },
                            { name: "Lansdown & Widcombe", slug: "lansdown", isActive: true, seoEnabled: true },
                            { name: "Keynsham", slug: "keynsham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Gloucestershire",
                        slug: "gloucestershire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Gloucester", slug: "gloucester", isActive: true, seoEnabled: true },
                            { name: "Cheltenham", slug: "cheltenham", isActive: true, seoEnabled: true },
                            { name: "Stroud & Cotswolds", slug: "stroud", isActive: true, seoEnabled: true },
                            { name: "Cirencester", slug: "cirencester", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Wiltshire",
                        slug: "wiltshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Swindon", slug: "swindon", isActive: true, seoEnabled: true },
                            { name: "Salisbury", slug: "salisbury", isActive: true, seoEnabled: true },
                            { name: "Chippenham & Trowbridge", slug: "chippenham", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Somerset",
                        slug: "somerset",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Taunton", slug: "taunton", isActive: true, seoEnabled: true },
                            { name: "Yeovil", slug: "yeovil", isActive: true, seoEnabled: true },
                            { name: "Weston-super-Mare (North Somerset)", slug: "weston-super-mare", isActive: true, seoEnabled: true },
                            { name: "Frome & Glastonbury", slug: "frome", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "North Somerset", slug: "north-somerset", isActive: true, seoEnabled: true },
                    { name: "South Gloucestershire", slug: "south-gloucestershire", isActive: true, seoEnabled: true },
                    {
                        name: "Dorset",
                        slug: "dorset",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bournemouth", slug: "bournemouth", isActive: true, seoEnabled: true },
                            { name: "Poole & Sandbanks", slug: "poole", isActive: true, seoEnabled: true },
                            { name: "Christchurch", slug: "christchurch-uk", isActive: true, seoEnabled: true },
                            { name: "Weymouth & Dorchester", slug: "weymouth", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Bournemouth, Christchurch and Poole", slug: "bournemouth-christchurch-and-poole", isActive: true, seoEnabled: true },
                    {
                        name: "Devon",
                        slug: "devon",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Plymouth", slug: "plymouth", isActive: true, seoEnabled: true },
                            { name: "Exeter", slug: "exeter", isActive: true, seoEnabled: true },
                            { name: "Torquay", slug: "torquay", isActive: true, seoEnabled: true },
                            { name: "Paignton", slug: "paignton", isActive: true, seoEnabled: true },
                            { name: "Barnstaple & North Devon", slug: "barnstaple", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Cornwall",
                        slug: "cornwall",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Truro", slug: "truro", isActive: true, seoEnabled: true },
                            { name: "Falmouth", slug: "falmouth", isActive: true, seoEnabled: true },
                            { name: "Penzance & St Ives", slug: "penzance", isActive: true, seoEnabled: true },
                            { name: "Newquay & St Austell", slug: "newquay", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════════
    // 2. SCOTLAND (All 32 Council Areas)
    // ══════════════════════════════════════════════════════════════════════
    {
        name: "Scotland",
        slug: "scotland",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "City of Edinburgh",
                slug: "edinburgh",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "New Town & Stockbridge", slug: "new-town-stockbridge", isActive: true, seoEnabled: true },
                    { name: "West End & Haymarket", slug: "west-end-haymarket", isActive: true, seoEnabled: true },
                    { name: "Morningside & Bruntsfield", slug: "morningside-bruntsfield", isActive: true, seoEnabled: true },
                    { name: "Leith & Shore", slug: "leith-shore", isActive: true, seoEnabled: true },
                    { name: "South Queensferry", slug: "south-queensferry", isActive: true, seoEnabled: true },
                    { name: "Corstorphine & Murrayfield", slug: "corstorphine", isActive: true, seoEnabled: true },
                    { name: "Portobello & Joppa", slug: "portobello", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Glasgow City",
                slug: "glasgow",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "Glasgow City Centre & Merchant City", slug: "glasgow-city-centre", isActive: true, seoEnabled: true },
                    { name: "West End & Hillhead", slug: "west-end-hillhead", isActive: true, seoEnabled: true },
                    { name: "Southside & Shawlands", slug: "southside-shawlands", isActive: true, seoEnabled: true },
                    { name: "Kelvingrove & Finnieston", slug: "finnieston", isActive: true, seoEnabled: true },
                    { name: "Bearsden & Milngavie", slug: "bearsden-milngavie", isActive: true, seoEnabled: true },
                    { name: "Giffnock & Newton Mearns", slug: "giffnock", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Aberdeen & North East Scotland",
                slug: "aberdeen",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "Aberdeen City", slug: "aberdeen-city", isActive: true, seoEnabled: true },
                    { name: "Aberdeenshire", slug: "aberdeenshire", isActive: true, seoEnabled: true },
                    { name: "Peterhead", slug: "peterhead", isActive: true, seoEnabled: true },
                    { name: "Fraserburgh", slug: "fraserburgh", isActive: true, seoEnabled: true },
                    { name: "Inverurie & Stonehaven", slug: "inverurie", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Dundee & Angus",
                slug: "dundee",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "Dundee City", slug: "dundee-city", isActive: true, seoEnabled: true },
                    { name: "Angus", slug: "angus", isActive: true, seoEnabled: true },
                    { name: "Arbroath", slug: "arbroath", isActive: true, seoEnabled: true },
                    { name: "Montrose & Forfar", slug: "montrose", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Highland & Islands",
                slug: "highland",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "Highland", slug: "highland-council", isActive: true, seoEnabled: true },
                    { name: "Inverness", slug: "inverness", isActive: true, seoEnabled: true },
                    { name: "Fort William", slug: "fort-william", isActive: true, seoEnabled: true },
                    { name: "Moray", slug: "moray", isActive: true, seoEnabled: true },
                    { name: "Elgin", slug: "elgin", isActive: true, seoEnabled: true },
                    { name: "Argyll and Bute", slug: "argyll-and-bute", isActive: true, seoEnabled: true },
                    { name: "Oban", slug: "oban", isActive: true, seoEnabled: true },
                    { name: "Orkney Islands", slug: "orkney-islands", isActive: true, seoEnabled: true },
                    { name: "Shetland Islands", slug: "shetland-islands", isActive: true, seoEnabled: true },
                    { name: "Na h-Eileanan Siar (Western Isles)", slug: "na-h-eileanan-siar", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Fife & Central Scotland",
                slug: "fife-central",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "Fife", slug: "fife", isActive: true, seoEnabled: true },
                    { name: "Dunfermline", slug: "dunfermline", isActive: true, seoEnabled: true },
                    { name: "Kirkcaldy", slug: "kirkcaldy", isActive: true, seoEnabled: true },
                    { name: "Glenrothes", slug: "glenrothes", isActive: true, seoEnabled: true },
                    { name: "St Andrews", slug: "st-andrews", isActive: true, seoEnabled: true },
                    { name: "Stirling", slug: "stirling", isActive: true, seoEnabled: true },
                    { name: "Falkirk", slug: "falkirk", isActive: true, seoEnabled: true },
                    { name: "Clackmannanshire", slug: "clackmannanshire", isActive: true, seoEnabled: true },
                    { name: "Perth and Kinross", slug: "perth-and-kinross", isActive: true, seoEnabled: true },
                    { name: "Perth", slug: "perth", isActive: true, seoEnabled: true },
                    { name: "Perth (Scotland)", slug: "perth-scotland", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Lothian & Scottish Borders",
                slug: "lothian-borders",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "East Lothian", slug: "east-lothian", isActive: true, seoEnabled: true },
                    { name: "Midlothian", slug: "midlothian", isActive: true, seoEnabled: true },
                    { name: "West Lothian", slug: "west-lothian", isActive: true, seoEnabled: true },
                    { name: "Livingston", slug: "livingston", isActive: true, seoEnabled: true },
                    { name: "Scottish Borders", slug: "scottish-borders", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Lanarkshire & Renfrewshire",
                slug: "lanarkshire-renfrewshire",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "North Lanarkshire", slug: "north-lanarkshire", isActive: true, seoEnabled: true },
                    { name: "South Lanarkshire", slug: "south-lanarkshire", isActive: true, seoEnabled: true },
                    { name: "Motherwell & Wishaw", slug: "motherwell", isActive: true, seoEnabled: true },
                    { name: "Coatbridge", slug: "coatbridge", isActive: true, seoEnabled: true },
                    { name: "Airdrie", slug: "airdrie", isActive: true, seoEnabled: true },
                    { name: "East Kilbride", slug: "east-kilbride", isActive: true, seoEnabled: true },
                    { name: "Hamilton", slug: "hamilton", isActive: true, seoEnabled: true },
                    { name: "Hamilton (Scotland)", slug: "hamilton-scotland", isActive: true, seoEnabled: true },
                    { name: "Cumbernauld", slug: "cumbernauld", isActive: true, seoEnabled: true },
                    { name: "Renfrewshire", slug: "renfrewshire", isActive: true, seoEnabled: true },
                    { name: "Paisley", slug: "paisley", isActive: true, seoEnabled: true },
                    { name: "East Renfrewshire", slug: "east-renfrewshire", isActive: true, seoEnabled: true },
                    { name: "Inverclyde", slug: "inverclyde", isActive: true, seoEnabled: true },
                    { name: "Greenock", slug: "greenock", isActive: true, seoEnabled: true },
                    { name: "West Dunbartonshire", slug: "west-dunbartonshire", isActive: true, seoEnabled: true },
                    { name: "Clydebank & Dumbarton", slug: "clydebank", isActive: true, seoEnabled: true },
                    { name: "East Dunbartonshire", slug: "east-dunbartonshire", isActive: true, seoEnabled: true },
                    { name: "Bishopbriggs & Kirkintilloch", slug: "bishopbriggs", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Ayrshire & South Scotland",
                slug: "ayrshire-south",
                isActive: true,
                seoEnabled: true,
                areas: [
                    { name: "South Ayrshire", slug: "south-ayrshire", isActive: true, seoEnabled: true },
                    { name: "Ayr", slug: "ayr", isActive: true, seoEnabled: true },
                    { name: "North Ayrshire", slug: "north-ayrshire", isActive: true, seoEnabled: true },
                    { name: "East Ayrshire", slug: "east-ayrshire", isActive: true, seoEnabled: true },
                    { name: "Kilmarnock", slug: "kilmarnock", isActive: true, seoEnabled: true },
                    { name: "Dumfries and Galloway", slug: "dumfries-and-galloway", isActive: true, seoEnabled: true },
                    { name: "Dumfries", slug: "dumfries", isActive: true, seoEnabled: true }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════════
    // 3. WALES (All 22 Principal Areas)
    // ══════════════════════════════════════════════════════════════════════
    {
        name: "Wales",
        slug: "wales",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Cardiff & South East Wales",
                slug: "cardiff",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Cardiff",
                        slug: "cardiff-city",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Cardiff Bay & City Centre", slug: "cardiff-bay-city-centre", isActive: true, seoEnabled: true },
                            { name: "Pontcanna & Llandaff", slug: "pontcanna-llandaff", isActive: true, seoEnabled: true },
                            { name: "Roath & Cathays", slug: "roath-cathays", isActive: true, seoEnabled: true },
                            { name: "Cyncoed & Whitchurch", slug: "cyncoed", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Vale of Glamorgan",
                        slug: "vale-of-glamorgan",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Penarth", slug: "penarth-vale", isActive: true, seoEnabled: true },
                            { name: "Barry", slug: "barry", isActive: true, seoEnabled: true },
                            { name: "Cowbridge & Llantwit Major", slug: "cowbridge", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Newport",
                        slug: "newport",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Newport City Centre", slug: "newport-city-centre", isActive: true, seoEnabled: true },
                            { name: "Caerleon & Rogerstone", slug: "caerleon", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Bridgend",
                        slug: "bridgend",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bridgend Town", slug: "bridgend-town", isActive: true, seoEnabled: true },
                            { name: "Porthcawl & Maesteg", slug: "porthcawl", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Rhondda Cynon Taf",
                        slug: "rhondda-cynon-taf",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Pontypridd", slug: "pontypridd", isActive: true, seoEnabled: true },
                            { name: "Aberdare & Llantrisant", slug: "aberdare", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Caerphilly",
                        slug: "caerphilly",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Caerphilly Town", slug: "caerphilly-town", isActive: true, seoEnabled: true },
                            { name: "Blackwood & Risca", slug: "blackwood", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Merthyr Tydfil", slug: "merthyr-tydfil", isActive: true, seoEnabled: true },
                    {
                        name: "Torfaen",
                        slug: "torfaen",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Cwmbran", slug: "cwmbran", isActive: true, seoEnabled: true },
                            { name: "Pontypool & Blaenavon", slug: "pontypool", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Monmouthshire",
                        slug: "monmouthshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Abergavenny", slug: "abergavenny", isActive: true, seoEnabled: true },
                            { name: "Monmouth & Chepstow", slug: "monmouth", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Blaenau Gwent",
                        slug: "blaenau-gwent",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Ebbw Vale", slug: "ebbw-vale", isActive: true, seoEnabled: true },
                            { name: "Tredegar & Abertillery", slug: "tredegar", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },
            {
                name: "Swansea & South West Wales",
                slug: "swansea",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Swansea",
                        slug: "swansea-city",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Swansea Marina & City Centre", slug: "swansea-city-centre", isActive: true, seoEnabled: true },
                            { name: "Mumbles & Gower", slug: "mumbles", isActive: true, seoEnabled: true },
                            { name: "Sketty & Uplands", slug: "sketty", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Neath Port Talbot",
                        slug: "neath-port-talbot",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Neath", slug: "neath", isActive: true, seoEnabled: true },
                            { name: "Port Talbot", slug: "port-talbot", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Carmarthenshire",
                        slug: "carmarthenshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Llanelli", slug: "llanelli", isActive: true, seoEnabled: true },
                            { name: "Carmarthen", slug: "carmarthen", isActive: true, seoEnabled: true },
                            { name: "Ammanford", slug: "ammanford", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Pembrokeshire",
                        slug: "pembrokeshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Haverfordwest", slug: "haverfordwest", isActive: true, seoEnabled: true },
                            { name: "Pembroke & Pembroke Dock", slug: "pembroke", isActive: true, seoEnabled: true },
                            { name: "Milford Haven & Tenby", slug: "milford-haven", isActive: true, seoEnabled: true },
                            { name: "St Davids", slug: "st-davids", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Ceredigion",
                        slug: "ceredigion",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Aberystwyth", slug: "aberystwyth", isActive: true, seoEnabled: true },
                            { name: "Cardigan & Lampeter", slug: "cardigan", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },
            {
                name: "North Wales & Powys",
                slug: "north-wales",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Wrexham",
                        slug: "wrexham",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Wrexham City", slug: "wrexham-city", isActive: true, seoEnabled: true },
                            { name: "Rossett & Gresford", slug: "rossett", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Flintshire",
                        slug: "flintshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Mold & Buckley", slug: "mold", isActive: true, seoEnabled: true },
                            { name: "Deeside & Connah's Quay", slug: "deeside", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Denbighshire",
                        slug: "denbighshire",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Rhyl", slug: "rhyl", isActive: true, seoEnabled: true },
                            { name: "Prestatyn", slug: "prestatyn", isActive: true, seoEnabled: true },
                            { name: "Denbigh & Ruthin", slug: "denbigh", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Conwy",
                        slug: "conwy",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Colwyn Bay", slug: "colwyn-bay", isActive: true, seoEnabled: true },
                            { name: "Llandudno", slug: "llandudno", isActive: true, seoEnabled: true },
                            { name: "Conwy Town & Abergele", slug: "conwy-town", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Gwynedd",
                        slug: "gwynedd",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bangor", slug: "bangor", isActive: true, seoEnabled: true },
                            { name: "Bangor (Gwynedd)", slug: "bangor-wales", isActive: true, seoEnabled: true },
                            { name: "Caernarfon", slug: "caernarfon", isActive: true, seoEnabled: true },
                            { name: "Pwllheli & Snowdonia", slug: "pwllheli", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Isle of Anglesey",
                        slug: "isle-of-anglesey",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Holyhead", slug: "holyhead", isActive: true, seoEnabled: true },
                            { name: "Llangefni & Menai Bridge", slug: "llangefni", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Powys",
                        slug: "powys",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Newtown", slug: "newtown", isActive: true, seoEnabled: true },
                            { name: "Newtown (Powys)", slug: "newtown-powys", isActive: true, seoEnabled: true },
                            { name: "Brecon", slug: "brecon", isActive: true, seoEnabled: true },
                            { name: "Welshpool & Llandrindod Wells", slug: "welshpool", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════════
    // 4. NORTHERN IRELAND (All 11 Local Government Districts)
    // ══════════════════════════════════════════════════════════════════════
    {
        name: "Northern Ireland",
        slug: "northern-ireland",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Belfast & Greater Area",
                slug: "belfast",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Belfast",
                        slug: "belfast-city",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Belfast City Centre & Titanic Quarter", slug: "belfast-city-centre", isActive: true, seoEnabled: true },
                            { name: "Malone Road & Stranmillis", slug: "malone-road", isActive: true, seoEnabled: true },
                            { name: "Lisburn Road & Queen's Quarter", slug: "lisburn-road", isActive: true, seoEnabled: true },
                            { name: "Ballyhackamore & Stormont", slug: "ballyhackamore", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Lisburn and Castlereagh",
                        slug: "lisburn-and-castlereagh",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Lisburn City", slug: "lisburn", isActive: true, seoEnabled: true },
                            { name: "Castlereagh & Carryduff", slug: "castlereagh", isActive: true, seoEnabled: true },
                            { name: "Hillsborough", slug: "hillsborough-ni", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Ards and North Down",
                        slug: "ards-and-north-down",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Bangor", slug: "bangor-ni", isActive: true, seoEnabled: true },
                            { name: "Holywood", slug: "holywood", isActive: true, seoEnabled: true },
                            { name: "Holywood & Cultra", slug: "holywood-north-down", isActive: true, seoEnabled: true },
                            { name: "Newtownards & Comber", slug: "newtownards", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Antrim and Newtownabbey",
                        slug: "antrim-and-newtownabbey",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Newtownabbey & Glengormley", slug: "newtownabbey", isActive: true, seoEnabled: true },
                            { name: "Antrim", slug: "antrim", isActive: true, seoEnabled: true },
                            { name: "Antrim Town", slug: "antrim-town", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },
            {
                name: "Northern Ireland Districts",
                slug: "northern-ireland-districts",
                isActive: true,
                seoEnabled: true,
                areas: [
                    {
                        name: "Derry City and Strabane",
                        slug: "derry-city-and-strabane",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Derry", slug: "derry", isActive: true, seoEnabled: true },
                            { name: "Londonderry", slug: "londonderry", isActive: true, seoEnabled: true },
                            { name: "Derry / Londonderry City", slug: "derry-city", isActive: true, seoEnabled: true },
                            { name: "Strabane", slug: "strabane", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Armagh City, Banbridge and Craigavon",
                        slug: "armagh-city-banbridge-and-craigavon",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Armagh", slug: "armagh", isActive: true, seoEnabled: true },
                            { name: "Armagh City", slug: "armagh-city", isActive: true, seoEnabled: true },
                            { name: "Portadown", slug: "portadown", isActive: true, seoEnabled: true },
                            { name: "Lurgan", slug: "lurgan", isActive: true, seoEnabled: true },
                            { name: "Craigavon", slug: "craigavon", isActive: true, seoEnabled: true },
                            { name: "Banbridge", slug: "banbridge", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Newry, Mourne and Down",
                        slug: "newry-mourne-and-down",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Newry", slug: "newry", isActive: true, seoEnabled: true },
                            { name: "Newry City", slug: "newry-city", isActive: true, seoEnabled: true },
                            { name: "Downpatrick", slug: "downpatrick", isActive: true, seoEnabled: true },
                            { name: "Warrenpoint & Kilkeel", slug: "warrenpoint", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Causeway Coast and Glens",
                        slug: "causeway-coast-and-glens",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Coleraine", slug: "coleraine", isActive: true, seoEnabled: true },
                            { name: "Ballymoney & Limavady", slug: "ballymoney", isActive: true, seoEnabled: true },
                            { name: "Portrush & Portstewart", slug: "portrush", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Mid and East Antrim",
                        slug: "mid-and-east-antrim",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Ballymena", slug: "ballymena", isActive: true, seoEnabled: true },
                            { name: "Carrickfergus", slug: "carrickfergus", isActive: true, seoEnabled: true },
                            { name: "Larne", slug: "larne", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Mid Ulster",
                        slug: "mid-ulster",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Dungannon", slug: "dungannon", isActive: true, seoEnabled: true },
                            { name: "Cookstown", slug: "cookstown", isActive: true, seoEnabled: true },
                            { name: "Magherafelt", slug: "magherafelt", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Fermanagh and Omagh",
                        slug: "fermanagh-and-omagh",
                        isActive: true,
                        seoEnabled: true,
                        subAreas: [
                            { name: "Enniskillen", slug: "enniskillen", isActive: true, seoEnabled: true },
                            { name: "Omagh", slug: "omagh", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            }
        ]
    }
];

export const IndianStates = UKNations;
