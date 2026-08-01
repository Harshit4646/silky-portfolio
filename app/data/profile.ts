import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Microscope,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export type Publication = {
  title: string;
  journal: string;
  year: string;
  summary: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export const profile = {
  name: "Dr. Silky Sharma",

  title:
    "Ph.D. in Food Science & Nutrition | Freelance Clinical Dietitian | Nutrition Researcher",

  email: "sharmasilky3003@gmail.com",

  linkedin: "#",

  location: "India",

  intro:
    "I am Dr. Silky Sharma, a Ph.D. in Food Science and Nutrition with a strong academic foundation in clinical nutrition, therapeutic diet planning, food science, and nutrition research. I am currently working as a Freelance Clinical Dietitian, providing personalized online diet planning services based on evidence-based nutrition. My goal is to bridge scientific research with practical dietary guidance that empowers individuals to achieve sustainable health and improved quality of life.",

  about:
    "Nutrition has always been more than a profession for me—it is a commitment to improving lives through science-backed dietary practices. My academic journey at Banasthali Vidyapeeth strengthened my understanding of food science, clinical nutrition, public health nutrition, and research methodology. Throughout my education, I developed a deep interest in disease prevention, therapeutic nutrition, and functional foods.",

  aboutAdditional:
    "During my clinical internship at MAX Super Specialty Hospital, Shalimar Bagh, I gained practical exposure to patient diet consultation, ICU nutrition, therapeutic diet formulation, nutritional assessment, and multidisciplinary healthcare. These experiences enhanced my ability to apply scientific knowledge in real clinical settings while understanding the importance of personalized nutrition care.",

  aboutClosing:
    "Currently, I work as a Freelance Clinical Dietitian offering online personalized diet planning services. My objective is to help individuals adopt sustainable lifestyle changes through scientifically designed nutrition plans while continuing my journey in research, education, and community nutrition awareness.",

  education: [
    {
      degree: "Ph.D. in Food Science and Nutrition",
      institution: "Banasthali Vidyapeeth",
      period: "2025",
      details:
        "Doctoral research focused on the effect of supplementation of pumpkin and sesame seeds on serum zinc levels in diabetic subjects. The research emphasized nutritional interventions, functional foods, diabetes management, and micronutrient supplementation.",
    },

    {
      degree: "Master of Science (M.Sc.) in Food Science and Nutrition",
      institution: "Banasthali Vidyapeeth",
      period: "2018",
      details:
        "Dissertation titled 'Influence of Malting on Nutrient Composition and Alpha-Amylase Activity in Wheat Cultivars (Aestivum, Dicoccum and Durum)', focusing on food processing, nutrient analysis, and cereal science.",
    },

    {
      degree: "Diploma in Food Processing and Service",
      institution: "Banasthali Vidyapeeth",
      period: "2018",
      details:
        "Studied principles of food processing, food preservation, quality assurance, hygiene, and food service management.",
    },

    {
      degree: "Bachelor of Science (B.Sc.) in Home Science",
      institution: "Banasthali Vidyapeeth",
      period: "2016",
      details:
        "Built a strong foundation in food science, human nutrition, community health, family resource management, and applied home science.",
    },
  ],

  internship: {
    hospital: "MAX Super Specialty Hospital, Shalimar Bagh",

    period: "Clinical Nutrition Internship (May–June 2017)",

    details:
      "Completed a clinical nutrition internship with hands-on experience in patient diet consultation, nutritional assessment, ICU nutrition management, therapeutic diet formulation, medical nutrition therapy, and hospital diet planning. Worked alongside healthcare professionals to understand evidence-based nutritional care for patients with various medical conditions.",
  },
    services: [
    "Personalized Diet Plans (Content will be updated)",
    "Weight Loss Nutrition",
    "Weight Gain Nutrition",
    "Diabetes Management",
    "PCOS Nutrition",
    "Thyroid Nutrition",
    "Pregnancy & Lactation Nutrition",
    "Sports Nutrition",
    "Child Nutrition",
    "Therapeutic Diet Planning",
    "Online Nutrition Consultation",
  ],

  publications: [
    {
      title: "Sensory Acceptability and Nutritional Composition of Pumpkin Seeds Incorporated Biscuits",
      journal: "International Journal of Research Analytical Review",
      year: "2024",
      summary: "Research evaluating the nutritional composition and sensory acceptability of pumpkin seed incorporated biscuits.",
    },
    {
      title: "Nutritional Profile and Sensory Attributes of Sesame Seeds Flour Incorporated Biscuits",
      journal: "Global Journal for Research Analysis",
      year: "2024",
      summary: "Study on the nutritional quality and sensory characteristics of sesame seed flour incorporated biscuits.",
    },
    {
      title: "Importance and Health Benefits of Cucurbita pepo (Pumpkin Seeds)",
      journal: "International Journal of Home Science",
      year: "2024",
      summary: "Review discussing the nutritional value and health benefits of pumpkin seeds.",
    },
    {
      title: "Association between Obesity and Zinc Supplements",
      journal: "International Journal of All Research Education and Scientific Methods",
      year: "2024",
      summary: "Review exploring the relationship between obesity and zinc supplementation.",
    },
    {
      title: "Zinc: Importance of Zinc in Human Nutrition and Health in Plant-Based Diet",
      journal: "International Journal of Applied Home Science",
      year: "2024",
      summary: "Review highlighting the importance of zinc in plant-based diets.",
    },
    {
      title: "Plant-Based Diet Associated with Prevention of Diabetes in India",
      journal: "Journal of Emerging Technologies and Innovative Research",
      year: "2024",
      summary: "Evidence-based review on the role of plant-based nutrition in diabetes prevention.",
    },
    {
      title: "Therapeutic and Pharmacological Properties of Pumpkin Seeds: A Comprehensive Review",
      journal: "Journal for Research in Applied Sciences and Biotechnology",
      year: "2024",
      summary: "Comprehensive review on therapeutic and pharmacological benefits of pumpkin seeds.",
    },
    {
      title: "Phytochemical Composition, Medicinal Benefits and Food Applications of Sesame Seeds",
      journal: "International Journal of Scientific Research",
      year: "2024",
      summary: "Review of phytochemicals, medicinal properties and food applications of sesame seeds.",
    },
    {
      title: "Effect of Zinc Supplementation on Fasting Blood Glucose Level of Type-2 Diabetic Subjects",
      journal: "Indian Journal of Nutrition",
      year: "2024",
      summary: "Research on zinc supplementation and fasting blood glucose among diabetic subjects.",
    },
    {
      title: "Current Policies in India for Diabetic Care",
      journal: "European Journal of Biomedical and Pharmaceutical Sciences",
      year: "2024",
      summary: "Review of existing diabetes care policies in India.",
    },
    {
      title: "An Overview of the Present Issues with Diabetes Care in India",
      journal: "International Journal of Current Advanced Research",
      year: "2024",
      summary: "Discussion of challenges associated with diabetes care in India.",
    },
    {
      title: "The Prevalence of Zinc Deficiency in Diabetic Subjects",
      journal: "Community and Public Health Nursing",
      year: "2024",
      summary: "Review highlighting zinc deficiency among diabetic patients.",
    },
    {
      title: "Effect of Zinc Supplementation of Sesame Seeds Incorporated Biscuits on Fasting Blood Glucose of Type-2 Diabetic Subjects",
      journal: "International Journal of Food, Nutrition and Dietetics",
      year: "2024",
      summary: "Clinical research evaluating sesame seed supplementation in diabetic individuals.",
    },
    {
      title: "Youth in India and Importance of Their Health and Wellbeing",
      journal: "Indian Journal of Health and Wellbeing",
      year: "2024",
      summary: "Article discussing health promotion among Indian youth.",
    },
    {
      title: "Function and Health Benefits of Vinegar for Human Consumption",
      journal: "International Journal of Applied Home Science",
      year: "2024",
      summary: "Review of nutritional and health benefits associated with vinegar consumption.",
    },
    {
      title: "Declining Health Status of Young Women in India: A Cause of Concern",
      journal: "Journal of Advances in Food Science & Technology",
      year: "2024",
      summary: "Review focusing on nutritional and public health concerns affecting young women.",
    },
  ] as Publication[],

  researchInterests: [
    "Clinical Nutrition Strategies",
    "Diabetes Management",
    "Nutrient Composition Analysis",
    "Public Health Nutrition",
  ],

  researchCompetencies: [
    "Research Methodologies",
    "Literature Review",
    "Scientific Writing",
    "Nutritional Assessment",
    "Data Analysis using MS Excel",
  ],

  skills: [
    {
      title: "Clinical Nutrition",
      items: [
        "Nutritional Assessment",
        "Diet Planning",
        "Therapeutic Diet Formulation",
        "Medical Nutrition Therapy",
      ],
      icon: HeartPulse,
    },
    {
      title: "Research & Science",
      items: [
        "Clinical Research",
        "Evidence-Based Nutrition",
        "Food Science",
        "Scientific Writing",
      ],
      icon: Microscope,
    },
    {
      title: "Professional Skills",
      items: [
        "Communication Skills",
        "Adaptability",
        "Interpersonal Skills",
        "Patient Counselling",
      ],
      icon: Stethoscope,
    },
  ] as SkillGroup[],

  awards: [
    {
      title: "2nd Position - Intramural Program",
      organization: "Banasthali Vidyapeeth",
      year: "",
      details:
        "Secured second position in the Intramural Program as Home Science Faculty.",
    },
    {
      title: "Community Outreach",
      organization: "Nutrition Awareness Programs",
      year: "",
      details:
        "Actively participated in academic events and university-led nutrition awareness campaigns.",
    },
  ],

  conferences: [
    {
      title:
        "Zinc Supplementation for the Prevention of Type-2 Diabetes Mellitus in Humans with Insulin Resistance",
      type: "Poster Presentation",
      year: "2022",
    },
    {
      title:
        "Association Between Obesity and Zinc Deficiency — A Review",
      type: "E-Poster Presentation",
      year: "2022",
    },
  ],

  languages: ["English", "Hindi"],

  interests: [
    "Badminton",
    "Travelling",
    "Reading Books",
  ],
};
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    title: "Ph.D. Research",
    icon: GraduationCap,
  },
  {
    title: "Clinical Nutrition",
    icon: HeartPulse,
  },
  {
    title: "Evidence-Based Research",
    icon: BrainCircuit,
  },
  {
    title: "Online Diet Consultation",
    icon: Sparkles,
  },
];

export const journeyPoints = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Completed Bachelor's, Diploma, Master's and Ph.D. in Food Science & Nutrition from Banasthali Vidyapeeth with extensive academic and research experience.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Clinical Experience",
    description:
      "Completed Clinical Nutrition Internship at MAX Super Specialty Hospital, gaining practical experience in therapeutic nutrition, ICU diet management and patient counselling.",
  },
  {
    icon: Microscope,
    title: "Research Contribution",
    description:
      "Published multiple research papers focusing on diabetes, zinc supplementation, functional foods, pumpkin and sesame seeds, public health nutrition and therapeutic nutrition.",
  },
  {
    icon: Award,
    title: "Academic Recognition",
    description:
      "Presented research at national conferences, secured faculty recognition and actively participated in nutrition awareness and academic outreach programmes.",
  },
  {
    icon: BookOpenText,
    title: "Freelance Dietitian",
    description:
      "Currently providing evidence-based online diet planning services with personalized nutrition guidance for different health conditions and lifestyle goals.",
  },
];
