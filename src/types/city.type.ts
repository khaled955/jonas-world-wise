export type Position = {
  lat: number;
  lng: number;
};

export type City = {
  id: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
};

export type CitiesResponse = City[];

export type Country = {
  country: string;
  emoji: string;
};

export type LocationResponse = {
  latitude: number;
  lookupSource: string;
  longitude: number;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  localityInfo: {
    administrative: AdministrativeLocation[];
    informative: InformativeLocation[];
  };
};

export type AdministrativeLocation = {
  name: string;
  description?: string;
  order: number;
  adminLevel: number;
  wikidataId?: string;
};

export type InformativeLocation = {
  name: string;
  description?: string;
  order: number;
  wikidataId?: string;
  geonameId?: number;
};
