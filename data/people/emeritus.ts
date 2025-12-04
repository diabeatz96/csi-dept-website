import type { EmeritusFaculty } from "../types";

export const emeritusFaculty: EmeritusFaculty[] = [
  { name: "Emile Chi" },
  { name: "Bernard Domanski" },
  { name: "Natacha Gueorguieva" },
  { name: "Anatoliy Gordonov" },
  { name: "Susan Imberman" },
  { name: "Roberta Klibaner" },
  { name: "Michael Kress" },
  { name: "Herbert Schanker" },
  { name: "Miriam Tausner" },
  { name: "Deborah Sturm" },
];

// Helper to get just the names as strings (for backward compatibility)
export const emeritusFacultyNames: string[] = emeritusFaculty.map((f) => f.name);
