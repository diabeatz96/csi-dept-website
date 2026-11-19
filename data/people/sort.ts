// Display order for the people page: alphabetical by first name.

// Fixed locale so the server and browser always produce the same order
const compareNames = (a: { name: string }, b: { name: string }): number => {
  return a.name.localeCompare(b.name, "en");
};

// Names are stored "First Last", so this orders by first name
export const sortByName = <T extends { name: string }>(people: T[]): T[] => {
  return [...people].sort(compareNames);
};
