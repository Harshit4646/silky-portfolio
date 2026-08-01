import type { LucideIcon } from "lucide-react";
import {
  Award,
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

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type ConferenceEntry = {
  title: string;
  type: string;
  organization: string;
  year: string;
};

export type Profile = {
  name: string;
  title: string;
  heroTitles: string[];
  email: string;
  linkedin: string;
  fiverr: string;
  location: string;
  heroBadge: string;
  heroFocus: string;
  intro: string;
  about: string;
  aboutHighlights: string[];
  aboutClosing: string;
  education: EducationEntry[];
  internship: {
    hospital: string;
    location: string;
    period: string;
    details: string;
    focusAreas: string[];
  };
  currentWork: {
    title: string;
    description: string;
  };
  services: string[];
  publications: Publication[];
  researchInterests: string[];
  researchCompetencies: string[];
  skills: SkillGroup[];
  facultyAchievement: {
    title: string;
    highlight: string;
    context: string;
    organization: string;
  };
  conferences: ConferenceEntry[];
  languages: string[];
  interests: string[];
  contactHeading: string;
  contactDescription: string;
  contactNote: string;
};

export const profile: Profile = {
  name: "Dr. Silky Sharma",
  title: "Ph.D. in Food Science & Nutrition",
  heroTitles: [
    "Ph.D. in Food Science & Nutrition",
    "Clinical Dietitian",
    "Nutrition Researcher",
    "Freelance Nutrition Consultant",
  ],
  email: "sharmasilky3003@gmail.com",
  linkedin: "https://www.linkedin.com/in/silky-sharma-a11854241",
  fiverr: "https://www.fiverr.com/silky3003",
  location: "India",
  heroBadge: "Research-led clinical nutrition practice",
  heroFocus: "Translating nutrition science into compassionate, evidence-based patient care.",
  intro:
    "Dr. Silky Sharma is a nutrition researcher and clinical dietitian whose work draws on food science, research, and patient-centred practice to support evidence-based dietary care.",
  about:
    "Dr. Silky Sharma holds a Ph.D. in Food Science and Nutrition and brings together clinical nutrition, nutrition research, and evidence-based dietary practice in her professional work.",
  aboutHighlights: [
    "Ph.D. in Food Science & Nutrition",
    "Clinical Nutrition",
    "Nutrition Research",
    "Evidence-based dietary practice",
    "Patient-centred care",
    "Passion for helping people improve health through nutrition",
    "Looking for opportunities as Dietitian and Nutrition Consultant",
  ],
  aboutClosing:
    "She is committed to helping people improve health through nutrition while continuing to grow professionally in clinical and consultancy settings.",
  education: [
    {
      degree: "Ph.D. in Food Science and Nutrition",
      institution: "Banasthali Vidyapeeth",
      period: "2025",
      details: "Thesis: Effect of supplementation of pumpkin and sesame seeds on Serum zinc level of diabetic subjects.",
    },
    {
      degree: "M.Sc. in Food Science and Nutrition",
      institution: "Banasthali Vidyapeeth",
      period: "2018",
      details:
        "Dissertation: Influence of malting on nutrient composition and alpha-amylase activity in wheat cultivars (aestivum, dicoccum and durum)",
    },
    {
      degree: "Diploma in Food Processing and Service",
      institution: "Banasthali Vidyapeeth",
      period: "2018",
      details: "",
    },
    {
      degree: "B.Sc. in Home Science",
      institution: "Banasthali Vidyapeeth",
      period: "2016",
      details: "",
    },
  ],
  internship: {
    hospital: "MAX Super Specialty Hospital",
    location: "Shalimar Bagh",
    period: "May–June 2017",
    details:
      "Clinical internship experience supporting patient diet consultation, ICU nutrition, therapeutic diet formulation, nutritional assessment, diet planning, and nutrition counselling.",
    focusAreas: [
      "Patient Diet Consultation",
      "ICU Nutrition",
      "Therapeutic Diet Formulation",
      "Nutritional Assessment",
      "Diet Planning",
      "Nutrition Counselling",
    ],
  },
  currentWork: {
    title: "Currently working as an Online Clinical Dietitian",
    description: "Providing online nutrition consultations and evidence-based guidance to individuals seeking practical support.",
  },
  services: [
    "Personalized Diet Planning",
    "Weight Management",
    "Diabetes Nutrition Management",
    "Clinical Nutrition Consultation",
    "Therapeutic Diet Planning",
    "Medical Nutrition Therapy",
    "Online Nutrition Consultation",
    "Nutrition Counselling",
    "Lifestyle Modification Guidance",
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
        "Research Methodologies",
        "Literature Review",
        "Scientific Writing",
        "Data Analysis using MS Excel",
      ],
      icon: Microscope,
    },
    {
      title: "Personal Skills",
      items: ["Communication Skills", "Adaptability", "Interpersonal Skills"],
      icon: Stethoscope,
    },
  ] as SkillGroup[],
  facultyAchievement: {
    title: "Faculty Achievement",
    highlight: "Secured 2nd Position",
    context: "Intramural Program",
    organization: "Home Science Faculty",
  },
  conferences: [
    {
      title: "Zinc supplementation for the prevention of Type-2 Diabetes Mellitus in humans with insulin resistance",
      type: "Poster Presentation",
      organization: "5th International Hybrid Conference on Diabetes & Healthcare",
      year: "2022",
    },
    {
      title: "Association between obesity and zinc deficiency — A Review",
      type: "E-Poster Presentation",
      organization: "AIIMS BARICON",
      year: "2022",
    },
  ],
  languages: ["English", "Hindi"],
  interests: ["Badminton", "Travelling", "Reading Books"],
  contactHeading: "Let’s connect for evidence-based nutrition care",
  contactDescription:
    "I welcome the opportunity to collaborate with individuals, clinics, and organizations that value compassionate and evidence-based nutrition guidance.",
  contactNote:
    "Please share the public Fiverr profile URL to display it here.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Services", href: "#services" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Presentations", href: "#presentations" },
  { label: "Community Outreach", href: "#community-outreach" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    title: "Clinical Nutrition",
    icon: HeartPulse,
  },
  {
    title: "Research Excellence",
    icon: GraduationCap,
  },
  {
    title: "Evidence-Based Care",
    icon: BrainCircuit,
  },
  {
    title: "Online Consultation",
    icon: Sparkles,
  },
];

export const journeyPoints = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Completed education from Banasthali Vidyapeeth in Food Science and Nutrition, spanning undergraduate, diploma, postgraduate, and doctoral studies.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Clinical Exposure",
    description: "Internship at MAX Super Specialty Hospital strengthened hands-on experience in patient care and nutrition counselling.",
  },
  {
    icon: Award,
    title: "Research and Practice",
    description: "Publications, presentations, and professional practice reflect a commitment to evidence-led nutrition work.",
  },
];