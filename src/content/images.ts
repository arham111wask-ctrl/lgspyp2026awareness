// Real photographs from Wikimedia Commons, credited per their licences.
const t = (path: string, file: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/1280px-${file}`;

export const IMAGES = {
  valley: {
    src: t("1/17", "Dal_Lake%2C_Srinagar%2C_Jammu_and_Kashmir.jpg"),
    alt: "Dal Lake in Srinagar with mountains in the background",
    credit: "Dashrathgoyal85, CC BY-SA 4.0, via Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Dal_Lake,_Srinagar,_Jammu_and_Kashmir.jpg",
  },
  village: {
    src: t("8/81", "A_village_at_kashmir_vally.JPG"),
    alt: "A village in the Kashmir Valley",
    credit: "Dvellakat, CC BY-SA 4.0, via Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:A_village_at_kashmir_vally.JPG",
  },
  gurez: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/76/A_calm_morning_in_the_farmland_of_Markoot_Village_%2C_Gurez_Valley%2C_Kashmir.jpg",
    alt: "Morning farmland in Markoot village, Gurez Valley",
    credit: "Kausar Akhoon, CC BY-SA 4.0, via Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:A_calm_morning_in_the_farmland_of_Markoot_Village_,_Gurez_Valley,_Kashmir.jpg",
  },
};
