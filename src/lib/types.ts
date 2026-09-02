import { LucideIcon } from "lucide-react";

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
  | 'foot';

export type AnatomicalLayer = 'skeletal' | 'muscular' | 'articular' | 'nervous' | 'fascial';

export type CareFormat = 'in-clinic' | 'in-home' | 'virtual';

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
  cadPricingEstimate?: string;
  faqs?: {
    id?: string;
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
  faqs?: {
    id?: string;
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

export interface RegisteredExpert {
  id: string;
  slug: string;
  fullName: string;
  credentials: string;
  regulatoryCollege: string;
  registrationNumberPlaceholder: string;
  specialties: string[];
  languagesSpoken: string[];
  provincesPracticing: string[];
  citiesServed: string[];
  serviceModes: ('in-clinic' | 'in-home' | 'virtual')[];
  experienceYears: number;
  clinicalPhilosophy: string;
  bio: string;
  imageUrl: string;
}

export interface CanadianCity {
  slug: string;
  name: string;
  provinceCode: string;
  provinceName: string;
  headline: string;
  subhead: string;
  keyServiceHubs: string[];
  postalCodePrefixes: string[];
  inHomeCareAvailable: boolean;
  virtualCareAvailable: boolean;
  clinicLocationsNote: string;
  directBillingProviders: string[];
  localFaqs: {
    id?: string;
    question: string;
    answer: string;
  }[];
}

export interface CanadianProvince {
  code: string;
  name: string;
  slug: string;
  capital: string;
  majorCities: CanadianCity[];
  regulatoryCollegeName: string;
  telehealthCoverageRegulations: string;
}

export interface UKCityHub {
  id: string;
  name: string;
  nation: string;
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
  hpcFrameworkNote?: string;
  regulatoryCollegeName?: string;
  capital?: string;
  code: string;
  name: string;
  slug: string;
  regulatoryBody?: string;
  telehealthRegulations?: string;
  majorHubs: UKCityHub[];
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
  province: string;
  city: string;
  postalCode: string;
  practitionerPreference: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  insuranceProvider: string;
  additionalNotes: string;
}

export type Service = {
  id: string;
  name: string;
  description: string;
  slug: string;
  longDescription: string;
  icon?: LucideIcon;
  conditions: Condition[];
};

export type Speciality = {
  id: string;
  name: string;
  description: string;
};

export type Therapist = {
  id: string;
  slug?: string;
  name: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  imageHint: string;
};

export type Location = {
  id: string;
  city: string;
  address: string;
  phone: string;
  timings: string;
  mapImageUrl: string;
  mapImageHint: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  date: string;
  serviceTag: string;
  relatedServiceSlug: string;
  readTime: string;
  keywords: string;
};

export type Faq = {
  id?: string;
  question: string;
  answer: string;
};

export type Condition = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  imageHint?: string;
  symptoms?: string[];
  treatmentDetails?: string;
  benefits?: string[];
  whoShouldOpt?: string[];
  faqs?: Faq[];
  category?: string;
  bodyRegion?: BodyRegion;
  shortDescription?: string;
  whatIsIt?: string;
  anatomyOverview?: string;
  movementImpact?: string[];
  assessmentProtocol?: string[];
  evidenceBasedTreatments?: string[];
  rehabilitationTimeline?: {
    phase: string;
    duration: string;
    goal: string;
    focus: string;
  }[];
  homeCareEducation?: string[];
  redFlagsUrgentCare?: string[];
  relatedConditions?: string[];
  relatedTreatments?: string[];
  interactive3DModelKey?: string;
};

export type SymptomDetail = {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  causes: string[];
  riskFactors: string[];
  whenToSeeDoctor: string;
  emergencySigns?: string;
  diagnosis: string;
  treatments: string[];
  benefits: string[];
  faqs: Faq[];
  imageUrl: string;
  imageHint: string;
};

export type TherapyDetail = {
  name: string;
  slug: string;
  description: string;
  howItWorks: string;
  benefits: string[];
  conditionsTreated: string[];
  techniques: string[];
  whoShouldOpt: string[];
  faqs: Faq[];
  imageUrl: string;
  imageHint: string;
};

export type SubArea = {
  name: string;
  slug: string;
  isActive: boolean;
  seoEnabled: boolean;
}

export type Area = {
  name: string;
  slug: string;
  isActive: boolean;
  seoEnabled: boolean;
  subAreas?: IndianSubAreaType[];
}

export type City = {
  name: string;
  slug: string;
  isActive: boolean;
  seoEnabled: boolean;
  areas: IndianAreaType[];
}

export type State = {
  name: string;
  slug: string;
  isActive: boolean;
  seoEnabled: boolean;
  cities: City[];
}

export type Country = {
  name: string;
  slug: string;
  isActive: boolean;
  seoEnabled: boolean;
  states: State[];
}

export type GeoPath = {
  country: Country | null;
  state: State | null;
  city: City | null;
  area: Area | null;
  subArea?: SubArea | null;
};

import { IndianAreaType, IndianSubAreaType } from './locations';

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

export interface UKInsuranceProvider {
  id: string;
  code: string;
  name: string;
  shortName: string;
  directBillingPortal: string;
  typicalCoveragePercent: number;
  physioPreAuthRequired: boolean;
  notes: string;
}
