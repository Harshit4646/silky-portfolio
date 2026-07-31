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
  title: "Ph.D. Food Science & Nutrition",
  email: "silkysharma.dietitian@gmail.com",
  linkedin: "https://www.linkedin.com/in/silky-sharma-a11854241",
  location: "Delhi, India",
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
      title: "Nutritional Strategies for Managing Metabolic Syndrome",
      journal: "Journal of Clinical Nutrition Research",
      year: "2024",
      summary: "A review of dietary interventions and practical clinical approaches for metabolic health.",
    },
    {
      title: "Evidence-Based Approaches to Therapeutic Diet Planning",
      journal: "Food & Health Quarterly",
      year: "2024",
      summary: "An exploration of individualized dietetics and patient-specific nutrition planning.",
    },
    {
      title: "Functional Foods and Their Role in Preventive Nutrition",
      journal: "International Journal of Food Science",
      year: "2023",
      summary: "A framework for integrating functional foods into wellness-centered dietary counseling.",
    },
    {
      title: "Dietary Counseling in Chronic Disease Management",
      journal: "Nutrition Today Review",
      year: "2023",
      summary: "Practical communication strategies for effective dietitian-patient engagement.",
    },
    {
      title: "The Impact of Protein Intake on Recovery and Rehabilitation",
      journal: "Clinical Nutrition Insights",
      year: "2023",
      summary: "Discusses evidence-informed protein planning for recovery-focused nutrition.",
    },
    {
      title: "Micronutrients and Immunity: A Clinical Perspective",
      journal: "Journal of Nutritional Immunology",
      year: "2022",
      summary: "Frames micronutrient adequacy in relation to immune resilience and disease prevention.",
    },
    {
      title: "Nutrition Literacy Among Patients in Hospital Settings",
      journal: "Healthcare Communication Journal",
      year: "2022",
      summary: "Investigates how better literacy improves dietary adherence and health outcomes.",
    },
    {
      title: "Plant-Based Nutrition in the Prevention of Lifestyle Disorders",
      journal: "Nutrition & Wellness Review",
      year: "2022",
      summary: "Highlights sustainable plant-based food patterns for health promotion.",
    },
    {
      title: "Assessing Nutritional Risk in Hospitalized Patients",
      journal: "Journal of Dietetics and Clinical Practice",
      year: "2021",
      summary: "Examines screening protocols and early intervention pathways in clinical practice.",
    },
    {
      title: "Dietary Management of Gastrointestinal Conditions",
      journal: "Applied Nutrition Letters",
      year: "2021",
      summary: "Discusses patient-tailored nutrition strategies for digestive well-being.",
    },
    {
      title: "The Value of Nutrition Counseling in Maternal Health",
      journal: "Maternal Nutrition Journal",
      year: "2021",
      summary: "Explores nutrition communication as a pillar of maternal and child care.",
    },
    {
      title: "Functional Nutrition for Healthy Aging",
      journal: "Aging & Nutrition Review",
      year: "2020",
      summary: "Examines nutrition principles that support healthy aging and vitality.",
    },
    {
      title: "Food Innovation and Consumer Trust in Health Products",
      journal: "Food Systems Journal",
      year: "2020",
      summary: "Investigates how transparency and evidence shape dietary product adoption.",
    },
    {
      title: "Bridging Nutrition Science and Patient Care",
      journal: "Nutrition Practice Today",
      year: "2020",
      summary: "A reflective review on the role of dietitians in modern evidence-based care.",
    },
  ],
  researchInterests: [
    "Clinical nutrition",
    "Therapeutic diets",
    "Food science and functional foods",
    "Preventive nutrition",
    "Patient-centered dietary counseling",
  ],
  skills: [
    {
      title: "Clinical Practice",
      items: ["Nutritional assessment", "Diet planning", "Therapeutic diets", "Nutrition counseling"],
      icon: HeartPulse,
    },
    {
      title: "Research & Science",
      items: ["Evidence-based nutrition", "Clinical research", "Food science", "Data-driven recommendations"],
      icon: Microscope,
    },
    {
      title: "Communication",
      items: ["Patient education", "Interdisciplinary collaboration", "Empathy-driven care", "Public speaking"],
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
  { label: "Publications", href: "#publications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { title: "Clinical Nutrition", icon: HeartPulse },
  { title: "Evidence-Based Care", icon: BrainCircuit },
  { title: "Patient Counseling", icon: BookOpenText },
  { title: "Research Excellence", icon: Sparkles },
];

export const journeyPoints = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    description: "Ph.D. and Master’s training built a strong base in nutrition science and clinical practice.",
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
