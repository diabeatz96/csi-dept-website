// Department News & Achievements Data

export type NewsCategory = "Grant" | "Award" | "Research" | "Event";

export interface NewsItem {
  id: string;
  title: string;
  category: NewsCategory;
  date: string;
  image: string;
  author?: string;
  link?: string;
}

// News organized by year
export const newsData: Record<string, NewsItem[]> = {
  "2026": [
    {
      id: "26-1",
      title: "Dr. Sos Agaian: The 2026 SPIE Aden & Marjorie Meinel Technology Achievement Award.",
      category: "Award",
      date: "January 2026",
      image: "/SPIE-Award-Web-Cover-SosAgaian.jpg",
      author: "Prof. Sos Agaian",
      link: "https://csitoday.com/2026/01/csi-distinguished-professor-dr-sos-agaian-named-highly-ranked-scholar-by-scholargps/",
    },
    {
      id: "26-2",
      title: "Dr. Sos Agaian, Distinguished Professor of Computer Science, has been named a ScholarGPS® Highly Ranked Scholar.",
      category: "Award",
      date: "January 2026",
      image: "/Scholar-GPS-SosAgain.jpg",
      author: "Prof. Sos Agaian",
      link: "https://csitoday.com/2026/01/distinguished-professor-dr-sos-agaian-named-recipient-of-prestigious-spie-technology-achievement-award/",
    },
  ],
  "2024": [
    {
      id: "24-1",
      title: "NSF REU Grant: Computational Methods in High Performance Computing",
      category: "Grant",
      date: "January 2024",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. Louis Petingi",
      link: "https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5517",
    },
  ],
  "2023": [
    {
      id: "23-1",
      title: "Receipient of the Google CyberNYC Grant",
      category: "Grant",
      date: "July 2023",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. Xiaowen Zhang",
      link: "https://www.gc.cuny.edu/news/cuny-graduate-center-receives-3-million-through-google-cyber-nyc-institutional-research-program",
    },
    {
      id: "23-2",
      title: "Best Presentation Award at LaGuardia CRSP Symposium",
      category: "Award",
      date: "May 2023",
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2670&auto=format&fit=crop",
      author: "Student Maxim Voyevoda",
    },
    {
      id: "23-3",
      title: "Dolphin Award for Outstanding Teaching",
      category: "Award",
      date: "May 2023",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. Sarah Zelikovitz",
    },
  ],
  "2022": [
    {
      id: "22-1",
      title: "Best Paper Award: 2022 Intl Conference on Systems Biology",
      category: "Award",
      date: "September 2022",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. Louis Petingi",
      link: "https://www.ae-info.org",
    },
    {
      id: "22-2",
      title: "Elected as Academia Europaea (AE) Member",
      category: "Award",
      date: "July 2022",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. S. Agaian",
      link: "https://csitoday.com/2022/06/distinguished-professor-agaian-elected-as-member-of-academia-europaea/",
    },
    {
      id: "22-3",
      title: "Top 300 Scholar in Regeneron Science Talent Search",
      category: "Research",
      date: "January 2022",
      image:
        "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2670&auto=format&fit=crop",
      author: "Samuel Iskhakov (Mentee)",
      link: "https://www.societyforscience.org/regeneron-sts/",
    },
  ],
  "2021": [
    {
      id: "21-1",
      title: "Elected Fellow of Asia-Pacific Artificial Intelligence Association",
      category: "Award",
      date: "October 2021",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
      author: "Prof. S. Agaian",
      link: "https://www.aaia-ai.org",
    },
    {
      id: "21-2",
      title: "CSI Today Article: Research on COVID-19",
      category: "Research",
      date: "February 2021",
      image: "/cunycsicampus.png",
      author: "Prof. Sos Agaian",
      link: "https://csitoday.com/2021/02/distinguished-professor-agaian-leading-international-team-working-remotely-to-combat-covid-19/",
    },
  ],
};

// Available years for filtering
export const newsYears: string[] = ["2026","2024", "2023", "2022", "2021"];


// Helper functions
export const getNewsByYear = (year: string): NewsItem[] => {
  return newsData[year] || [];
};

export const getNewsByCategory = (category: NewsCategory): NewsItem[] => {
  return Object.values(newsData)
    .flat()
    .filter((item) => item.category === category);
};

export const getAllNews = (): NewsItem[] => {
  return Object.values(newsData).flat();
};

export const getFeaturedNews = (): NewsItem[] => {
  return getAllNews().filter((item) => item.link);
};
