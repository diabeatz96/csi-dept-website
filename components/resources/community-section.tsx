import Image from 'next/image';
import { ArrowUpRight, Users } from 'lucide-react';
import { clubs, resourceSections } from '@/data/resources';
import type { ResourceItem } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceSection from './resource-section';

const cardClass =
  'flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 text-slate-900';

function ClubContent({ club }: { club: ResourceItem }) {
  return (
    <>
      {club.image ? (
        <Image
          src={club.image}
          alt=""
          width={52}
          height={52}
          className="size-[52px] flex-none rounded-xl object-contain"
        />
      ) : (
        <span className="flex size-[52px] flex-none items-center justify-center rounded-xl bg-slate-50 text-slate-600">
          <Users aria-hidden="true" size={24} />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="font-bold">{club.title}</p>
        <p className="mt-0.5 text-[13px] text-slate-500">{club.description}</p>
      </div>
    </>
  );
}

export default function CommunitySection() {
  return (
    <ResourceSection section={resourceSections.community}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {clubs.map((club) =>
          club.href ? (
            <ExternalLink
              key={club.id}
              href={club.href}
              className={`${cardClass} transition-all duration-300 hover:border-blue-100 hover:shadow-xl`}
            >
              <ClubContent club={club} />
              <ArrowUpRight aria-hidden="true" size={16} className="flex-none text-blue-400" />
            </ExternalLink>
          ) : (
            <div key={club.id} className={cardClass}>
              <ClubContent club={club} />
            </div>
          ),
        )}
      </div>
    </ResourceSection>
  );
}
