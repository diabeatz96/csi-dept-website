import Image from 'next/image';
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react';
import { clubJoinNote, clubs, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function CommunitySection() {
  return (
    <ResourceSection section={resourceSections.community}>
      <div className="grid gap-4 md:grid-cols-2">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900"
          >
            <div className="flex items-start gap-4">
              {club.image ? (
                <Image
                  src={club.image}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 flex-none rounded-xl object-cover"
                />
              ) : (
                <span className="flex flex-none rounded-xl bg-slate-100 p-4 text-slate-700">
                  <ResourceIcon name={club.iconName} size={24} />
                </span>
              )}
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-tight">{club.title}</h3>
                <p className="mt-1.5 text-pretty text-base leading-relaxed text-slate-700">
                  {club.description}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 border-t border-slate-200 pt-4 text-center text-base text-slate-700">
              <span className="flex items-center gap-2">
                <Clock aria-hidden="true" size={16} className="flex-none text-[#0369A1]" />
                {club.meetingTime}
              </span>
              <span className="flex items-center gap-2">
                <MapPin aria-hidden="true" size={16} className="flex-none text-[#0369A1]" />
                {club.location}
              </span>
              {club.email && (
                <a
                  href={`mailto:${club.email}`}
                  className="flex items-center gap-2 break-all font-semibold text-[#0369A1] underline-offset-4 hover:underline"
                >
                  <Mail aria-hidden="true" size={16} className="flex-none" />
                  {club.email}
                </a>
              )}
              {club.href && (
                <ExternalLink
                  href={club.href}
                  className="flex items-center gap-2 font-semibold text-[#0369A1] underline-offset-4 hover:underline"
                >
                  View on CSI Connect
                  <ArrowUpRight aria-hidden="true" size={16} className="flex-none" />
                </ExternalLink>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-base text-slate-700">{clubJoinNote}</p>
    </ResourceSection>
  );
}
