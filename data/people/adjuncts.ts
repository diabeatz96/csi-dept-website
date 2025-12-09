import type { AdjunctFaculty } from "../types";

export const adjunctFaculty: AdjunctFaculty[] = [
  { name: "Agman, Daniel" },
  { name: "Catalano, Anthony" },
  { name: "Al-Mashhadani, Zaid" },
  { name: "Hayes, Dolores" },
  { name: "Jahaj, Safet" },
  { name: "Hills, Amy" },
  { name: "Iacona, Louis" },
  { name: "Wong, Jonathan" },
  { name: "Kholodovsky, Michael" },
  { name: "Kausar, Fatma" },
  { name: "Weir, Rich" },
  { name: "Michael Deredita" },
  { name: "Lavrov, Roman" },
  { name: "Ciaccio, Philip" },
  { name: "Parziale, Jonathan" },
  { name: "Kapaj, Luigi" },
  { name: "Wang, Zhiqi" },
  { name: "Yuan, Kailie" },
  { name: "Lu, Jia" },
  { name: "Tooker, Joseph" },
  { name: "Adam, Kostandy"},
];

// Helper to get just the names as strings (for backward compatibility)
export const adjunctFacultyNames: string[] = adjunctFaculty.map((f) => f.name);
