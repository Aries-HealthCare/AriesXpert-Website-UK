export interface TherapistCard {
  id: string;
  slug: string;
  fullName: string;
  name?: string;
  credentials: string;
  regulatoryCollege?: string;
  specialties: string[];
  languagesSpoken: string[];
  experienceYears: number;
  experience?: string | number;
  imageUrl: string;
  photoUrl?: string;
  citiesServed: string[];
  location?: string;
}
