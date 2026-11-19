// Department News & Student Spotlight data

export type NewsCategory =
  | "Grant"
  | "Award"
  | "Research"
  | "Event"
  | "Student Spotlight";

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
      id: "women-tech",
      title: "CS Student Team Wins 'Women in Tech' Incubator Competition",
      category: "Student Spotlight",
      date: "May 2024",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
      link: "https://www.businesswire.com/news/home/20240510262696/en/Standard-Chartered-celebrates-Women-in-Tech-Incubator-Competition-winners-and-10-Year-partnership-anniversary-with-Zahn-Innovation-Center-at-City-College-of-New-York",
    },
    {
      id: "game-jam",
      title: "First-Ever Game Jam Event Showcases Talent of CS Students",
      category: "Student Spotlight",
      date: "February 2024",
      image: "/news/game-jam-2024.jpg",
      link: "https://csitoday.com/2024/02/first-ever-game-jam-event-showcases-talent-of-csis-computer-science-students/",
    },
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
    {
      id: "ttp-ceremony",
      title: "TTP Post-Internship Ceremony",
      category: "Student Spotlight",
      date: "2023",
      image: "/cunycsicampus.png",
      link: "https://drive.google.com/file/d/1pntPW1g2SsdO6T2N6rOILKzFJ6NzxmEB/view",
    },
  ],
  "2022": [
    {
      id: "internships",
      title: "Students Offered Full-Time Positions After Summer Internship",
      category: "Student Spotlight",
      date: "October 2022",
      image: "/news/internship-full-time-offers.jpg",
      link: "https://csitoday.com/2022/10/csi-computer-science-students-offered-full-time-positions-after-summer-internship/",
    },
    {
      id: "eric-benedetto",
      title:
        "For Eric Benedetto, Remote Learning Was Perfect For Pot-Bellied Pigs",
      category: "Student Spotlight",
      date: "June 2022",
      image: "/news/eric-benedetto.jpg",
      author: "Eric Benedetto",
      link: "https://csitoday.com/2022/06/for-recent-grad-eric-benedetto-remote-learning-was-perfect-for-pot-bellied-pigs/",
    },
    {
      id: "summer-of-success",
      title:
        "Summer Of Success: Computer Science Grads Ready To Embark On Careers In The Field",
      category: "Student Spotlight",
      date: "June 2022",
      image: "/news/summer-of-success.jpg",
      link: "https://csitoday.com/2022/06/summer-of-success-computer-science-grads-ready-to-embark-on-careers-in-the-field/",
    },
    {
      id: "lowes",
      title: "Lowe's Laying Pipeline For CS Students",
      category: "Student Spotlight",
      date: "May 2022",
      image: "/news/lowes-pipeline.jpg",
      link: "https://csitoday.com/2022/05/lowes-laying-pipeline-for-csi-students/",
    },
    {
      id: "forage-top-50",
      title:
        "Forage Names CSI a Top 50 College Nationwide for Experiential Learning",
      category: "Student Spotlight",
      date: "May 2022",
      image: "/news/forage-top-50.jpg",
      link: "https://csitoday.com/2022/05/forage-names-csi-a-top-50-college-nationwide-for-experiential-learning/",
    },
    {
      id: "praise-adejunmobi",
      title: "CSI Today Talks Features CS Graduating Senior Praise Adejunmobi",
      category: "Student Spotlight",
      date: "May 2022",
      image: "/news/praise-adejunmobi.jpg",
      author: "Praise Adejunmobi",
      link: "https://csitoday.com/2022/05/csi-today-talks-features-graduating-senior-praise-adejunmobi/",
    },
    {
      id: "megan-mcnamee",
      title: "Grad Megan Mcnamee Lands Pair Of Internships In Gaming",
      category: "Student Spotlight",
      date: "March 2022",
      image: "/news/MeganMcNamee.jpeg",
      author: "Megan Mcnamee",
      link: "https://csitoday.com/2022/03/computer-science-grad-megan-mcnamee-lands-pair-of-internships-in-gaming/",
    },
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
    {
      id: "codepath-club",
      title:
        "CodePath Club Provides New Grounds for Computer Science Student Exploration",
      category: "Student Spotlight",
      date: "October 2021",
      image: "/news/codepath-club.jpg",
      link: "https://csitoday.com/2021/10/codepath-provides-new-grounds-for-computer-science-student-exploration/",
    },
    {
      id: "hack-csi",
      title: '"Hack: CSI" Puts Computer Science Students in Competitive Arena',
      category: "Student Spotlight",
      date: "September 2021",
      image: "/news/hack-csi.jpg",
      link: "https://csitoday.com/2021/09/hack-csi-puts-computer-science-students-in-competitive-arena/",
    },
    {
      id: "developforgood",
      title:
        "CS Students Mohammed Othman & Ramiz Faragalla Highlighted in Develop for Good Newsletter",
      category: "Student Spotlight",
      date: "July 2021",
      image: "/cunycsicampus.png",
      author: "Mohammed Othman & Ramiz Faragalla",
      link: "https://developforgood.substack.com/p/develop-for-good-newsletter-july",
    },
    {
      id: "omar-barragan",
      title:
        "Omar Barragan CS Graduate Featured in NY Jobs CEO Council Annual Report",
      category: "Student Spotlight",
      date: "2021",
      image: "/csi-graduation.jpg",
      author: "Omar Barragan",
      link: "https://nyjobsceocouncil.org/annual-report-2021/",
    },
  ],
  "2019": [
    {
      id: "ibm-watson",
      title: "CSI Team Wins 1st Place at CUNY-IBM Watson Social Impact Challenge",
      category: "Student Spotlight",
      date: "2019",
      image: "/news/IBMWatsonWin.jpg",
      link: "https://blogs.baruch.cuny.edu/ibmwatson2019/",
    },
  ],
};

// Available years for filtering
export const newsYears: string[] = ["2026", "2024", "2023", "2022", "2021", "2019"];


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
