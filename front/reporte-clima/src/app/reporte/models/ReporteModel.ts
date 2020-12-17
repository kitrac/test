export class ActualModel {
  base: string;
  clouds: CloudModel;
  cod: number
  coord: CoordModel;
  dt: number;
  dt_txt: string;
  id: number;
  main: MainModel;
  name: string;
  sys: SysModel;
  timezone: number;
  visibility: number;
  weather: WheaterModel[];
  wind: WindModel;
}

export class ForecastModel {
  city: CityModel;
  cnt: number;
  cod: string;
  list: ActualModel[];
}

export class CityModel {
  coord: CoordModel;
  lat: number;
  lon: number;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export class CloudModel {
  all: number;
}

export class CoordModel {
  lat: number;
  lon: number;
}

export class MainModel {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export class SysModel {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export class WheaterModel {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class WindModel {
  deg: number;
  speed: number;
}
