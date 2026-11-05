import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { campusLinks, departmentContacts, helpDesk, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function ContactsSection() {
  return (
    <ResourceSection section={resourceSections.contacts} className="pb-20 pt-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {departmentContacts.map((contact) => (
          <div
            key={contact.role}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-[22px]"
          >
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#0369A1]">
                {contact.role}
              </span>
              <h3 className="mt-1.5 text-[17px] font-bold text-slate-900">{contact.name}</h3>
              <p className="mt-0.5 text-[13px] text-slate-500">{contact.title}</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-50 pt-3 text-sm text-slate-600">
              {contact.office && (
                <span className="flex items-center gap-2">
                  <MapPin aria-hidden="true" size={15} className="flex-none text-[#0369A1]" />
                  {contact.office}
                </span>
              )}
              {contact.phone && (
                <a href={contact.phoneHref} className="flex items-center gap-2">
                  <Phone aria-hidden="true" size={15} className="flex-none text-[#0369A1]" />
                  {contact.phone}
                </a>
              )}
              <a
                href={contact.emailHref}
                className="flex items-center gap-2 break-all font-medium text-[#0369A1]"
              >
                <Mail aria-hidden="true" size={15} className="flex-none" />
                {contact.email}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3.5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Campus Support</h3>
        <div className="flex flex-wrap gap-2.5">
          {campusLinks.map((link) => (
            <ExternalLink
              key={link.id}
              href={link.href}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#0369A1] hover:text-[#0369A1]"
            >
              <ResourceIcon name={link.iconName} size={16} className="text-[#0369A1]" />
              {link.title}
              <ArrowUpRight aria-hidden="true" size={13} className="text-slate-400" />
            </ExternalLink>
          ))}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="flex rounded-2xl bg-white/10 p-4 text-blue-300">
            <ResourceIcon name={helpDesk.iconName} size={32} />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-bold">{helpDesk.title}</h3>
            <p className="text-sm text-slate-300">{helpDesk.description}</p>
          </div>
        </div>
        {helpDesk.href && (
          <ExternalLink
            href={helpDesk.href}
            className="whitespace-nowrap rounded-xl bg-[#0369A1] px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-blue-900/50 transition-colors hover:bg-blue-700"
          >
            {helpDesk.ctaLabel}
          </ExternalLink>
        )}
      </div>
    </ResourceSection>
  );
}
