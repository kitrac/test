import {CoordModel} from "src/app/reporte/models/ReporteModel";

export class CiudadModel {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: CoordModel;
}

export const CIUDADES: CiudadModel[] = [
  {
    id: 833,
    name: "Ḩeşār-e Sefīd",
    state: "",
    country: "IR",
    coord: {
      "lon": 47.159401,
      "lat": 34.330502
    }
  },
  {
    id: 833,
    name: "Buenos Aires",
    state: "",
    country: "AR",
    coord: {
      "lon": 47.159401,
      "lat": 34.330502
    }
  },
  {
    id: 833,
    name: "Resistencia",
    state: "",
    country: "AR",
    coord: {
      "lon": 47.159401,
      "lat": 34.330502
    }
  },
  {
    id: 833,
    name: "London",
    state: "",
    country: "GB",
    coord: {
      "lon": 47.159401,
      "lat": 34.330502
    }
  },
  {
    id: 833,
    name: "Mar del plata",
    state: "",
    country: "AR",
    coord: {
      "lon": 47.159401,
      "lat": 34.330502
    }
  },
];
