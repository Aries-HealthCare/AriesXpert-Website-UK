import { UKInsuranceProvider } from './types';

export const UK_INSURANCE_PROVIDERS: UKInsuranceProvider[] = [
  {
    id: "ins-bupa",
    code: "bupa",
    name: "Bupa UK",
    shortName: "Bupa",
    directBillingPortal: "Bupa Providers Online / Healthcode",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: true,
    notes: "Direct fee recognition for HCPC physiotherapists. We invoice Bupa directly via Healthcode with your pre-authorization code."
  },
  {
    id: "ins-axa",
    code: "axa",
    name: "AXA Health",
    shortName: "AXA Health",
    directBillingPortal: "AXA PPP Health Online",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: true,
    notes: "Direct billing accepted for all in-home and virtual physical therapy sessions with valid AXA authorization number."
  },
  {
    id: "ins-aviva",
    code: "aviva",
    name: "Aviva Health",
    shortName: "Aviva",
    directBillingPortal: "Aviva Medical Provider Network",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: true,
    notes: "Direct claims settlement for acute musculoskeletal injuries, spinal disc recovery, and post-surgical rehabilitation."
  },
  {
    id: "ins-vitality",
    code: "vitality",
    name: "Vitality Health",
    shortName: "Vitality",
    directBillingPortal: "Vitality Health Partner Portal",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: true,
    notes: "Coverage including Vitality Premier Consultant-referred and fast-track direct access physical therapy."
  },
  {
    id: "ins-wpa",
    code: "wpa",
    name: "WPA (Western Provident Association)",
    shortName: "WPA",
    directBillingPortal: "WPA Provider Direct",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: false,
    notes: "Flexible private medical benefits. Direct billing and instant clinical invoice generation."
  },
  {
    id: "ins-healix",
    code: "healix",
    name: "Healix Health Services",
    shortName: "Healix",
    directBillingPortal: "Healix Corporate Scheme Direct",
    typicalCoveragePercent: 100,
    physioPreAuthRequired: true,
    notes: "Direct settlement for corporate and private corporate trust medical schemes."
  },
  {
    id: "ins-cigna",
    code: "cigna-uk",
    name: "Cigna Healthcare UK",
    shortName: "Cigna UK",
    directBillingPortal: "Cigna Global Health Benefits",
    typicalCoveragePercent: 90,
    physioPreAuthRequired: true,
    notes: "International and UK corporate executive healthcare policy direct settlement."
  },
  {
    id: "ins-simplyhealth",
    code: "simplyhealth",
    name: "Simplyhealth Cash Plan",
    shortName: "Simplyhealth",
    directBillingPortal: "Patient Cash Plan Reimbursement",
    typicalCoveragePercent: 80,
    physioPreAuthRequired: false,
    notes: "Instant itemized HCPC/CSP registered receipts provided for quick 24-hour reimbursement claims."
  }
];
