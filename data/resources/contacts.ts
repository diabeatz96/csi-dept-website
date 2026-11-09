// Resources page contacts. Staff details come from data/people/staff.ts,
// so a change there updates this page too.

import { allStaff } from "../people";
import type { ResourceAdvisor, ResourceContact, ResourceItem } from "./types";

function contactFromStaff(id: string, role: string): ResourceContact {
  const member = allStaff.find((staff) => staff.id === id);
  if (!member) throw new Error(`Unknown staff id: ${id}`);

  return {
    role,
    name: member.name,
    title: member.title,
    email: member.email,
    emailHref: `mailto:${member.email}`,
    office: member.office,
    phone: member.phone,
    phoneHref: member.phone && `tel:${member.phone.replace(/\D/g, "")}`,
  };
}

export const csAdvisor: ResourceAdvisor = {
  ...contactFromStaff("kristi-brescia", "Your CS Academic Advisor"),
  description: "Advising for AAS, BS Computer Science and BS CS-Math students.",
  linkedinHref: "https://www.linkedin.com/in/kristibrescia/",
  ctaLabel: "Email Kristi",
  image: "/faculty-headshot/kristi.jpeg",
};

// Add `href` once the help desk URL is known; the button stays hidden until then
export const helpDesk: ResourceItem = {
  id: "student-technology-help-desk",
  title: "Need Technical Assistance?",
  description: "The Student Technology Help Desk is available 24/7.",
  iconName: "Monitor",
  ctaLabel: "Contact Help Desk",
};
