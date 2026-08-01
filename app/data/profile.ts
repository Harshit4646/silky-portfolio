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

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type ConferenceEntry = {
  title: string;
  type: string;
  year: string;
};

export type Profile = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  location: string;
  heroBadge: string;
  heroFocus: string;
  intro: string;
  about: string;
  aboutAdditional: string;
  aboutClosing: string;
  education: EducationEntry[];
  internship: {
    hospital: string;
    period: string;
    details: string;
  };
  services: string[];
  publications: Publication[];
  researchInterests: string[];
  researchCompetencies: string[];
  skills: SkillGroup[];
  awards: Array<{
    title: string;
    organization: string;
    year: string;
    details: string;
  }>;
  conferences: ConferenceEntry[];
  languages: string[];
  interests: string[];
  contactHeading: string;
  contactDescription: string;
  contactNote: string;
};

export const profile: Profile = {
  name: "Dr. Silky Sharma",
  title: "Ph.D. in Food Science & Nutrition | Freelance Clinical Dietitian | Nutrition Researcher",
  email: "sharmasilky3003@gmail.com",
  linkedin: "https://www.linkedin.com/in/silky-sharma-a11854241",
  location: "India",
  heroBadge: "Premium nutrition science portfolio",
  heroFocus: "Translating nutrition science into compassionate, evidence-based patient care.",
  intro:
    "My name is Dr. Silky Sharma. I have completed my Ph.D. in Food Science and Nutrition from the Department of Home Science. I also hold a Master's degree in Food Science and Nutrition.",
  about:
    "During my academic journey, I gained practical exposure through my internship at Max Hospital, where I learned about patient nutritional assessment, diet planning, therapeutic diets, and nutrition counseling. My research background has also strengthened my understanding of clinical nutrition, food science, and evidence-based dietary management.",
  aboutAdditional:
    "I am passionate about helping people improve their health through proper nutrition. I have good communication skills, a strong willingness to learn, and I enjoy working with patients as part of a healthcare team.",
  aboutClosing:
    "I am looking for an opportunity as a Dietitian where I can apply my knowledge, continue learning, and contribute to improving patients' health and well-being.",
  education: [
    {
      degree: "Ph.D. Food Science & Nutrition",
      institution: "Department of Home Science",
      period: "2020 – 2024",
      details: "Research focused on nutrition science, dietary interventions, and evidence-based clinical nutrition strategies.",
    },

    {
      degree: "Master of Science in Food Science & Nutrition",
      institution: "Department of Home Science",
      period: "2018 – 2020",
      details: "Specialized in food chemistry, therapeutic nutrition, and public health dietary practices.",
    },
  ],

  internship: {
    hospital: "Max Hospital",
    period: "Clinical Nutrition Internship",
    details:
      "Gained hands-on experience in nutritional assessment, diet planning, therapeutic diets, and patient counseling under clinical supervision.",
  },
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
    "Clinical nutrition",
    "Therapeutic diets",
    "Food science and functional foods",
    "Preventive nutrition",
    "Patient-centered dietary counseling",
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
      title: "Best Oral Presentation",
      organization: "National Nutrition Research Symposium",
      year: "2023",
      details: "Recognized for presenting a compelling research paper on therapeutic nutrition and clinical outcomes.",
    },
    {
      title: "Academic Excellence Award",
      organization: "Department of Home Science",
      year: "2022",
      details: "Honored for distinguished academic performance and research contribution.",
    },
  ],
};
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
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
    title: "Clinical Exposure",
    description: "Internship at Max Hospital strengthened real-world experience in patient care.",
  },
  {
    icon: Award,
    title: "Recognized Impact",
    description: "Awards and publications reflect dedication to evidence-driven nutrition practice.",
  },
];