// Display order for the people page. Titles not listed here sort last.
const FACULTY_TITLE_ORDER = [
  "Professor, Chairperson",
  "Distinguished Professor",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Doctoral Lecturer",
  "Lecturer",
];

const titleRank = (title: string): number => {
  const rank = FACULTY_TITLE_ORDER.indexOf(title);
  return rank === -1 ? FACULTY_TITLE_ORDER.length : rank;
};

// Fixed locale so the server and browser always produce the same order
const compareNames = (a: { name: string }, b: { name: string }): number => {
  return a.name.localeCompare(b.name, "en");
};

// Names are stored "First Last", so this orders by first name
export const sortByName = <T extends { name: string }>(people: T[]): T[] => {
  return [...people].sort(compareNames);
};

export const sortByTitleThenName = <T extends { name: string; title: string }>(
  people: T[]
): T[] => {
  return [...people].sort(
    (a, b) => titleRank(a.title) - titleRank(b.title) || compareNames(a, b)
  );
};
