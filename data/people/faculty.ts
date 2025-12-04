import type { FacultyMember } from "../types";

export const faculty: FacultyMember[] = [
  {
    id: "sos-agaian",
    name: "Sos Agaian",
    title: "Distinguished Professor",
    email: "sos.agaian@csi.cuny.edu",
    office: "1N-203",
    phone: "718-982-2843",
    website: "https://www.csi.cuny.edu/campus-directory/sos-agaian",
  },
  {
    id: "tatiana-anderson",
    name: "Tatiana Anderson",
    title: "Lecturer",
    email: "tatiana.anderson@csi.cuny.edu",
    office: "1N-210",
    phone: "718-982-2850",
    website: "https://www.csi.cuny.edu/campus-directory/tatiana-anderson",
  },
  {
    id: "cong-chen",
    name: "Cong Chen",
    title: "Doctoral Lecturer",
    email: "cong.chen@csi.cuny.edu",
    office: "4N-206",
    phone: "718-982-2975",
    website: "https://www.csi.cuny.edu/campus-directory/cong-chen",
  },
  {
    id: "kennedy-edemacu",
    name: "Kennedy Edemacu",
    title: "Assistant Professor",
    email: "kennedy.edemacu@csi.cuny.edu",
    office: "1N-208",
    phone: "718-982-3273",
  },
  {
    id: "feng-gu",
    name: "Feng Gu",
    title: "Professor",
    email: "feng.gu@csi.cuny.edu",
    office: "1N-201",
    phone: "718-982-2847",
    website: "https://www.cs.csi.cuny.edu/~gu/",
  },
  {
    id: "yumei-huo",
    name: "Yumei Huo",
    title: "Professor",
    email: "yumei.huo@csi.cuny.edu",
    office: "1N-202",
    phone: "718-982-2841",
    website: "https://www.cs.csi.cuny.edu/~yumei/",
  },
  {
    id: "ali-mohamed",
    name: "Ali Mohamed",
    title: "Lecturer",
    email: "ali.mohamed@csi.cuny.edu",
    office: "1N-210",
    phone: "718-982-2850",
  },
  {
    id: "louis-petingi",
    name: "Louis Petingi",
    title: "Professor",
    email: "louis.petingi@csi.cuny.edu",
    office: "1N-211",
    phone: "718-982-2844",
    website: "https://www.cs.csi.cuny.edu/~petingi/",
  },
  {
    id: "jun-rao",
    name: "Jun Rao",
    title: "Doctoral Lecturer",
    email: "jun.rao@csi.cuny.edu",
    office: "5N-220",
    phone: "718-982-2854",
  },
  {
    id: "ping-shi",
    name: "Ping Shi",
    title: "Lecturer",
    email: "ping.shi@csi.cuny.edu",
    office: "1N-210",
    phone: "718-982-2850",
    website: "https://www.csi.cuny.edu/campus-directory/ping-shi",
  },
  {
    id: "sarah-zelikovitz",
    name: "Sarah Zelikovitz",
    title: "Professor",
    email: "sarah.zelikovitz@csi.cuny.edu",
    office: "1N-212",
    phone: "718-982-2849",
    website: "https://www.cs.csi.cuny.edu/~zelikovi/",
  },
  {
    id: "shuqun-zhang",
    name: "Shuqun Zhang",
    title: "Professor, Chairperson",
    email: "shuqun.zhang@csi.cuny.edu",
    office: "1N-204",
    phone: "718-982-2852",
    website: "https://www.cs.csi.cuny.edu/~zhangs/",
  },
  {
    id: "tianxiao-zhang",
    name: "Tianxiao Zhang",
    title: "Assistant Professor",
    email: "tianxiao.zhang@csi.cuny.edu",
    office: "1N-205",
    phone: "718-982-3288",
  },
  {
    id: "xiaowen-zhang",
    name: "Xiaowen Zhang",
    title: "Professor",
    email: "xiaowen.zhang@csi.cuny.edu",
    office: "1N-213",
    phone: "718-982-3262",
    website: "https://www.cs.csi.cuny.edu/~zhangx/",
  },
  {
    id: "zhanyang-zhang",
    name: "Zhanyang Zhang",
    title: "Professor",
    email: "zhanyang.zhang@csi.cuny.edu",
    office: "1N-206",
    phone: "718-982-3175",
    website: "https://www.cs.csi.cuny.edu/~zhangz/",
  },
  {
    id: "adam-kostandy",
    name: "Adam Kostandy",
    title: "Lecturer",
    email: "adam.kostandy@csi.cuny.edu",
    office: "1N-215",
  },
];

// Helper functions
export const getFacultyById = (id: string): FacultyMember | undefined => {
  return faculty.find((f) => f.id === id);
};

export const getFacultyByTitle = (title: string): FacultyMember[] => {
  return faculty.filter((f) =>
    f.title.toLowerCase().includes(title.toLowerCase())
  );
};

export const getChairperson = (): FacultyMember | undefined => {
  return faculty.find((f) => f.title.toLowerCase().includes("chairperson"));
};
