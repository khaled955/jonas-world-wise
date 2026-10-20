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
