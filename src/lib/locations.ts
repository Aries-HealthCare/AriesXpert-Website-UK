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

export const UKNations: IndianStateType[] = [
    {
        name: "England",
        slug: "england",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "London", slug: "london", isActive: true, seoEnabled: true, areas: [
                    {
                        name: "Westminster & Central", slug: "westminster-central", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Westminster", slug: "westminster", isActive: true, seoEnabled: true },
                            { name: "Mayfair", slug: "mayfair", isActive: true, seoEnabled: true },
                            { name: "Marylebone", slug: "marylebone", isActive: true, seoEnabled: true },
                            { name: "Soho & Covent Garden", slug: "soho-covent-garden", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Kensington & Chelsea", slug: "kensington-chelsea", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "South Kensington", slug: "south-kensington", isActive: true, seoEnabled: true },
                            { name: "Chelsea", slug: "chelsea", isActive: true, seoEnabled: true },
                            { name: "Notting Hill", slug: "notting-hill", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "City of London & East", slug: "city-of-london-east", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "City of London", slug: "city-of-london", isActive: true, seoEnabled: true },
                            { name: "Canary Wharf", slug: "canary-wharf", isActive: true, seoEnabled: true },
                            { name: "Shoreditch & Islington", slug: "shoreditch-islington", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "North London", slug: "north-london", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Hampstead & Highgate", slug: "hampstead-highgate", isActive: true, seoEnabled: true },
                            { name: "St John's Wood", slug: "st-johns-wood", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "South West London", slug: "south-west-london", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Richmond & Twickenham", slug: "richmond-twickenham", isActive: true, seoEnabled: true },
                            { name: "Wimbledon & Putney", slug: "wimbledon-putney", isActive: true, seoEnabled: true },
                            { name: "Battersea & Clapham", slug: "battersea-clapham", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },
            {
                name: "Manchester", slug: "manchester", isActive: true, seoEnabled: true, areas: [
                    { name: "Manchester City Centre & Deansgate", slug: "deansgate-city-centre", isActive: true, seoEnabled: true },
                    { name: "Salford Quays & MediaCityUK", slug: "salford-quays", isActive: true, seoEnabled: true },
                    { name: "Didsbury & Chorlton", slug: "didsbury-chorlton", isActive: true, seoEnabled: true },
                    { name: "Altrincham & Hale", slug: "altrincham-hale", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Birmingham", slug: "birmingham", isActive: true, seoEnabled: true, areas: [
                    { name: "City Centre & Jewellery Quarter", slug: "birmingham-city-centre", isActive: true, seoEnabled: true },
                    { name: "Edgbaston & Harborne", slug: "edgbaston-harborne", isActive: true, seoEnabled: true },
                    { name: "Solihull & Knowle", slug: "solihull-knowle", isActive: true, seoEnabled: true },
                    { name: "Sutton Coldfield", slug: "sutton-coldfield", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Leeds", slug: "leeds", isActive: true, seoEnabled: true, areas: [
                    { name: "Leeds City Centre", slug: "leeds-city-centre", isActive: true, seoEnabled: true },
                    { name: "Headingley & Roundhay", slug: "headingley-roundhay", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Bristol", slug: "bristol", isActive: true, seoEnabled: true, areas: [
                    { name: "Clifton & Harbourside", slug: "clifton-harbourside", isActive: true, seoEnabled: true },
                    { name: "Redland & Cotham", slug: "redland-cotham", isActive: true, seoEnabled: true }
                ]
            }
        ]
    },
    {
        name: "Scotland",
        slug: "scotland",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Edinburgh", slug: "edinburgh", isActive: true, seoEnabled: true, areas: [
                    { name: "New Town & Stockbridge", slug: "new-town-stockbridge", isActive: true, seoEnabled: true },
                    { name: "West End & Haymarket", slug: "west-end-haymarket", isActive: true, seoEnabled: true },
                    { name: "Morningside & Bruntsfield", slug: "morningside-bruntsfield", isActive: true, seoEnabled: true },
                    { name: "Leith & Shore", slug: "leith-shore", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Glasgow", slug: "glasgow", isActive: true, seoEnabled: true, areas: [
                    { name: "Glasgow City Centre & Merchant City", slug: "glasgow-city-centre", isActive: true, seoEnabled: true },
                    { name: "West End & Hillhead", slug: "west-end-hillhead", isActive: true, seoEnabled: true },
                    { name: "Southside & Shawlands", slug: "southside-shawlands", isActive: true, seoEnabled: true }
                ]
            }
        ]
    }
];

export const IndianStates = UKNations;
