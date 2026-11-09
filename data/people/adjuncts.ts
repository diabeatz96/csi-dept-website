import type { AdjunctFaculty } from "../types";
import { sortByName } from "./sort";

export const adjunctFaculty: AdjunctFaculty[] = sortByName([
  { name: "Daniel Agman" },
  { name: "Anthony Catalano" },
  { name: "Zaid Al-Mashhadani" },
  { name: "Dolores Hayes" },
  { name: "Safet Jahaj" },
  { name: "Amy Hills" },
  { name: "Louis Iacona" },
  { name: "Jonathan Wong" },
  { name: "Michael Kholodovsky" },
  { name: "Fatma Kausar" },
  { name: "Rich Weir" },
  { name: "Michael Deredita" },
  { name: "Roman Lavrov" },
  { name: "Philip Ciaccio" },
  { name: "Jonathan Parziale" },
  { name: "Luigi Kapaj" },
  { name: "Zhiqi Wang" },
  { name: "Kailie Yuan" },
  { name: "Jia Lu" },
  { name: "Joseph Tooker" },
  { name: "Kostandy Adam" },
]);

// Helper to get just the names as strings (for backward compatibility)
export const adjunctFacultyNames: string[] = adjunctFaculty.map((f) => f.name);
