export type BodyRegion = 
  | 'head'
  | 'neck'
  | 'shoulder'
  | 'elbow'
  | 'wrist'
  | 'spine'
  | 'hip'
  | 'knee'
  | 'ankle'
  | 'foot'
  | 'cervical-spine' 
  | 'lumbar-spine' 
  | 'elbow-wrist' 
  | 'pelvic-floor'
  | 'vestibular-balance';

export type AnatomicalLayer = 'skeletal' | 'muscular' | 'articular' | 'nervous' | 'fascial';

export type CareFormat = 'in-clinic' | 'in-home' | 'virtual';

export interface Condition {
  id: string;
  name: string;
  slug: string;
  category: 'orthopedic' | 'sports' | 'neurological' | 'chronic-pain' | 'post-surgical' | 'geriatric' | 'pediatric' | 'womens-health' | 'vestibular' | 'tmj';
  bodyRegion: BodyRegion;
  shortDescription: string;
  whatIsIt: string;
  anatomyOverview: string;
  symptoms: string[];
  movementImpact: string[];
  assessmentProtocol: string[];
  evidenceBasedTreatments: string[];
  rehabilitationTimeline: {
    phase: string;
    duration: string;
    goal: string;
    focus: string;
  }[];
  homeCareEducation: string[];
  redFlagsUrgentCare: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedConditions: string[];
  relatedTreatments: string[];
  interactive3DModelKey: string;
}

export interface Treatment {
  id: string;
  name: string;
  slug: string;
  category: 'hands-on' | 'exercise-therapy' | 'technology-modality' | 'specialized-care';
  shortDescription: string;
  whatItIs: string;
  howItWorks: string;
  whoItHelps: string[];
  sessionExpectations: string[];
  evidenceSummary: string;
  treatedConditions: string[];
  gbpPricingEstimate?: string;
  cadPricingEstimate?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  longDescription: string;
  clinicalObjectives: string[];
  targetConditions: string[];
  careFormats: ('clinic' | 'in-home' | 'telehealth')[];
}

export interface SurgicalRehabTimeline {
  id: string;
  procedureName: string;
  slug: string;
  anatomicalRegion: BodyRegion;
  procedureOverview: string;
  surgicalDistinction: string;
  phases: {
    phaseId: string;
    title: string;
    timelineLabel: string;
    anatomicalState: string;
    rehabFocus: string[];
    precautions: string[];
    movementGoal: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BiomechanicalMovement {
  id: string;
  title: string;
  slug: string;
  description: string;
  primaryJointsInvolved: string[];
  criticalKinematicAngles: {
    joint: string;
    optimalAngle: string;
    compensationWarning: string;
  }[];
  muscleActivationGroups: {
    name: string;
    role: 'prime-mover' | 'stabilizer' | 'antagonist';
    functionInMovement: string;
  }[];
  clinicalAssessments: string[];
}

export interface UKCityHub {
  id: string;
  name: string;
  nation: 'England' | 'Scotland' | 'Wales' | 'Northern Ireland';
  region: string;
  slug: string;
  headline: string;
  description: string;
  keyPostcodes: string[];
  keyHubs: string[];
  image: string;
  inHomeLeadTime: string;
  directBillingSupported: boolean;
}

export interface UKNation {
  code: 'ENG' | 'SCT' | 'WLS' | 'NIR';
  name: string;
  slug: string;
  capital: string;
  majorHubs: UKCityHub[];
  regulatoryCollegeName: string;
  hpcFrameworkNote: string;
}

export interface UKInsuranceProvider {
  id: string;
  code: string;
  name: string;
  shortName: string;
  logoUrl?: string;
  directBillingPortal: string;
  typicalCoveragePercent: number;
  physioPreAuthRequired: boolean;
  notes: string;
}

export interface HCPCExpert {
  id: string;
  slug: string;
  fullName: string;
  credentials: string;
  hcpcNumber: string;
  cspNumber: string;
  specialties: string[];
  languagesSpoken: string[];
  experienceYears: number;
  imageUrl: string;
  citiesServed: string[];
  primaryHub: string;
  bio: string;
  clinicalFocus: string[];
}

export interface RegisteredExpert extends HCPCExpert {
  regulatoryCollege?: string;
  registrationNumberPlaceholder?: string;
  provincesPracticing?: string[];
  serviceModes?: ('in-clinic' | 'in-home' | 'virtual')[];
  clinicalPhilosophy?: string;
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  authorCredentials: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
    clinicalNote?: string;
  }[];
  relatedConditions: string[];
  publishedDate: string;
}

export interface BookingState {
  concernCategory: string;
  bodyRegion: BodyRegion | '';
  careMode: 'in-clinic' | 'in-home' | 'virtual' | '';
  nation: string;
  city: string;
  postcode: string;
  practitionerPreference: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  insuranceProvider: string;
  membershipPolicyNumber: string;
  additionalNotes: string;
}
