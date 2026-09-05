export interface ClinicDoctor {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  timings: string;
  imageUrl: string;
}

export interface ClinicPackage {
  duration: string;
  perSession: string;
  totalPrice: string;
  savings: string;
  isPopular?: boolean;
}

export interface ClinicBranch {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  isFlagship?: boolean;
  tagline: string;
  address: string;
  subArea: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phones: string[];
  whatsapp: string;
  googleRating: number;
  reviewCount: number;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  workingHours: string;
  daysOpen: string;
  imageUrl: string;
  galleryImages: string[];
  specialties: string[];
  amenities: string[];
  equipment: string[];
  doctors: ClinicDoctor[];
  consultationFee: string;
  regularSessionFee: string;
  packages: ClinicPackage[];
  pricingNotice: string;
  description: string;
}

export const ARIES_CLINICS_DIRECTORY: ClinicBranch[] = [
  {
    id: "clinic-canary-wharf-flagship",
    slug: "aries-physiocare-canary-wharf-london",
    name: "AriesXpert : Advanced Physiotherapy & Clinical Wellness Hub | Canary Wharf London",
    badge: "Flagship UK Clinical Hub",
    isFlagship: true,
    tagline: "Hospital-Grade Integrated Physiotherapy, Musculoskeletal Rehab & Post-Surgical Care",
    address: "Level 32, 1 Canada Square, Canary Wharf, London, E14 5AA",
    subArea: "Canary Wharf",
    city: "London",
    state: "Greater London",
    pincode: "E14 5AA",
    phone: "0800 274 3785",
    phones: ["0800 274 3785", "+44 20 7946 0192"],
    whatsapp: "448002743785",
    googleRating: 4.9,
    reviewCount: 312,
    googleMapsUrl: "https://maps.google.com/?q=1+Canada+Square+Canary+Wharf+London+E14+5AA",
    workingHours: "8:00 AM – 8:00 PM",
    daysOpen: "Monday – Saturday (Sunday Emergency Appointments)",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=85&w=1600",
    ],
    specialties: [
      "Orthopaedic & Joint Mobilisation",
      "Neurological Stroke & Brain Injury Rehab",
      "Spine Decompression & Sciatica Relief",
      "Elite Sports Injury Conditioning",
      "Geriatric Balance & Fall Prevention",
      "Post-Surgical TKR / THR Rehabilitation",
      "Women's Pelvic Health & Postnatal Recovery",
      "Cardiopulmonary Conditioning",
    ],
    amenities: [
      "Air-Conditioned Private Consultation Suites",
      "Full Step-Free Wheelchair Accessibility & Lifts",
      "High-Speed Wi-Fi & Executive Patient Lounge",
      "Dedicated On-Site Underground Parking",
      "Digital Kinematic Gait Analysis Suite",
      "Direct Private Medical Insurance Billing",
      "Electronic Health Record (EHR) & Treatment Logs",
      "Hospital-Grade Medical Disinfection Protocols",
    ],
    equipment: [
      "High-Intensity Class IV Laser Therapy Unit",
      "Multi-Channel Interferential Therapy (IFT)",
      "Dual-Frequency Therapeutic Ultrasound (1 & 3 MHz)",
      "Continuous Passive Motion (CPM) Knee Unit",
      "Cervical & Lumbar Electronic Spinal Traction",
      "Pneumatic Recovery Boots & Compression Therapy",
      "Digital Neuromuscular Stimulator (TENS / EMS)",
      "Dynamic Balance Assessment & Tilt Platform",
    ],
    doctors: [
      {
        name: "Mr. Alastair Wright, MCSP",
        qualification: "BSc (Hons) Physiotherapy, MCSP, HCPC Reg.",
        specialization: "Lead Consultant Musculoskeletal & Sports Physiotherapist",
        experience: "15+ Years NHS & Elite Sports Practice",
        timings: "8:30 AM – 1:30 PM",
        imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Ms. Charlotte Sinclair, MCSP",
        qualification: "MSc Neurological Rehabilitation, MCSP, HCPC Reg.",
        specialization: "Senior Neurological & Stroke Recovery Specialist",
        experience: "12+ Years Teaching Hospital Experience",
        timings: "1:30 PM – 5:30 PM",
        imageUrl: "https://images.unsplash.com/photo-1594824813596-f94d9346d849?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Mr. Edward Davies, MCSP",
        qualification: "BSc (Hons) Physiotherapy, MCSP, HCPC Reg.",
        specialization: "Complex Spinal Care & Joint Mobilisation Specialist",
        experience: "10+ Years Orthopaedic Clinical Experience",
        timings: "5:00 PM – 8:00 PM",
        imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
      },
    ],
    consultationFee: "£85",
    regularSessionFee: "£85 per session",
    packages: [
      {
        duration: "5 Sessions Plan",
        perSession: "£80 / session",
        totalPrice: "£400",
        savings: "Save £25",
      },
      {
        duration: "10 Sessions Plan",
        perSession: "£75 / session",
        totalPrice: "£750",
        savings: "Save £100",
        isPopular: true,
      },
      {
        duration: "20 Sessions Plan",
        perSession: "£70 / session",
        totalPrice: "£1,400",
        savings: "Save £300",
      },
    ],
    pricingNotice: "Direct insurer billing available via Healthcode for Bupa, AXA Health, Aviva, Vitality, and WPA. Detailed itemised receipts provided for immediate claim reimbursement.",
    description: "AriesXpert Canary Wharf is our flagship London clinical centre, providing hospital-grade rehabilitation, advanced diagnostic gait analysis, Class IV laser therapy, and bespoke physiotherapy tailored to busy professionals and post-operative patients across Greater London.",
  },
  {
    id: "clinic-manchester-deansgate",
    slug: "aries-physiocare-deansgate-manchester",
    name: "AriesXpert : Premier Physiotherapy & Sports Rehabilitation | Deansgate Manchester",
    badge: "Regional Clinical Hub",
    isFlagship: false,
    tagline: "Evidence-Based Orthopaedic, Spinal & Neurological Care in Greater Manchester",
    address: "1 Deansgate, Manchester, M3 1AZ",
    subArea: "Deansgate",
    city: "Manchester",
    state: "Greater Manchester",
    pincode: "M3 1AZ",
    phone: "0800 274 3785",
    phones: ["0800 274 3785", "+44 161 832 9400"],
    whatsapp: "448002743785",
    googleRating: 4.9,
    reviewCount: 184,
    googleMapsUrl: "https://maps.google.com/?q=1+Deansgate+Manchester+M3+1AZ",
    workingHours: "8:00 AM – 7:30 PM",
    daysOpen: "Monday – Friday (Saturday by Appointment)",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=85&w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=85&w=1600",
    ],
    specialties: [
      "Orthopaedic Assessment & Manual Therapy",
      "Spine & Lumbar Herniation Care",
      "Sports Performance & Ligament Recovery",
      "Post-Op Total Knee & Hip Replacement",
      "Senior Mobility & Fall Prevention",
      "Occupational Ergonomics & Posture Correction",
    ],
    amenities: [
      "Private Sound-Insulated Clinical Suites",
      "Modern Gymnasium & Active Rehab Zone",
      "Direct Lift Access & Disabled Facilities",
      "Healthcode Direct Insurer Clearing Desk",
      "Free High-Speed Wi-Fi",
    ],
    equipment: [
      "Therapeutic Laser & Electro-Stimulation Units",
      "Continuous Passive Motion (CPM)",
      "Targeted Ultrasound Soft Tissue Devices",
      "Digital Grip & Joint Inclinometers",
    ],
    doctors: [
      {
        name: "Mr. James Callum, MCSP",
        qualification: "BSc (Hons) Physiotherapy, MCSP, HCPC Reg.",
        specialization: "Clinical Lead & Spinal Rehabilitation Specialist",
        experience: "11+ Years Clinical Practice",
        timings: "8:30 AM – 3:30 PM",
        imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Ms. Fiona MacDougall, MCSP",
        qualification: "BSc (Hons) Physiotherapy, MCSP, HCPC Reg.",
        specialization: "Senior Neuro & Mobility Specialist",
        experience: "9+ Years NHS Clinical Practice",
        timings: "12:00 PM – 7:30 PM",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      },
    ],
    consultationFee: "£75",
    regularSessionFee: "£75 per session",
    packages: [
      {
        duration: "5 Sessions Plan",
        perSession: "£70 / session",
        totalPrice: "£350",
        savings: "Save £25",
      },
      {
        duration: "10 Sessions Plan",
        perSession: "£65 / session",
        totalPrice: "£650",
        savings: "Save £100",
        isPopular: true,
      },
      {
        duration: "20 Sessions Plan",
        perSession: "£60 / session",
        totalPrice: "£1,200",
        savings: "Save £300",
      },
    ],
    pricingNotice: "Direct billing supported for all major UK private health insurers (Bupa, AXA Health, Aviva, Vitality, WPA).",
    description: "AriesXpert Deansgate Manchester delivers elite clinical physiotherapy, sports injury recovery, and post-surgical rehabilitation across the North West.",
  },
];
