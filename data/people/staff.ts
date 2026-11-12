import type { StaffMember } from "../types";
import { sortByName } from "./sort";

export const officeStaff: StaffMember[] = sortByName([
  {
    id: "laurie-guido",
    name: "Laurie Guido",
    title: "College Assistant",
    email: "laurie.guido@csi.cuny.edu",
    office: "1N-215",
    phone: "718-982-2850",
  },
  {
    id: "kristi-brescia",
    name: "Kristi Brescia",
    title: "Academic Advisor",
    email: "kristi.brescia@csi.cuny.edu",
    office: "1N-209",
    phone: "718-982-2842",
  },
  {
    id: "fred-loweff",
    name: "Fred Loweff",
    title: "CUNY 2X Manager",
    email: "fred.loweff@csi.cuny.edu",
    office: "1N-214",
    phone: "718-982-3178",
  },
]);

export const technicalStaff: StaffMember[] = sortByName([
  {
    id: "orit-gruber",
    name: "Orit D. Gruber",
    title: "Chief College Lab Technician",
    email: "orit.gruber@csi.cuny.edu",
    office: "1N-218",
    phone: "718-982-3015",
  },
  {
    id: "zhongcai-jiang",
    name: "Zhongcai Jiang",
    title: "College Lab Technician",
    email: "zhongcai.jiang@csi.cuny.edu",
    phone: "718-982-2857",
    office: "1N-219",
  }
]);

// Combined staff list
export const allStaff: StaffMember[] = [...officeStaff, ...technicalStaff];

// Helper functions
export const getStaffById = (id: string): StaffMember | undefined => {
  return allStaff.find((s) => s.id === id);
};

export const getStaffByTitle = (title: string): StaffMember[] => {
  return allStaff.filter((s) =>
    s.title.toLowerCase().includes(title.toLowerCase())
  );
};
