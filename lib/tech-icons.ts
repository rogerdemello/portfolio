import type { IconType } from "react-icons";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiC, SiGnubash, SiYaml,
  SiLangchain, SiOpenai, SiScikitlearn, SiPytorch, SiNumpy, SiPandas, SiFastapi, SiFlask,
  SiExpress, SiNodedotjs, SiReact, SiNextdotjs, SiPostgresql, SiRedis, SiMlflow, SiDocker,
  SiGithubactions, SiPytest, SiWhatsapp, SiInstagram,
} from "react-icons/si";
import {
  FaJava, FaAws, FaDatabase, FaProjectDiagram, FaRobot, FaSitemap, FaBrain, FaExchangeAlt, FaChartLine,
  FaLayerGroup, FaLanguage, FaEye, FaCubes, FaInfinity, FaCodeBranch, FaCogs, FaCode,
} from "react-icons/fa";

export interface Tech {
  icon: IconType;
  /** Brand colour, nudged darker where the brand's own colour would vanish on paper. */
  color: string;
}

const t = (icon: IconType, color: string): Tech => ({ icon, color });

// Brand marks where one exists; otherwise a plain glyph in a tone that sits with its neighbours.
export const TECH: Record<string, Tech> = {
  // Languages
  "Python": t(SiPython, "#3776AB"),
  "Java": t(FaJava, "#E76F00"),
  "TypeScript": t(SiTypescript, "#3178C6"),
  "JavaScript": t(SiJavascript, "#D9AE00"),
  "SQL": t(FaDatabase, "#5B6B7F"),
  "C++": t(SiCplusplus, "#00599C"),
  "C": t(SiC, "#5A6B8C"),
  "Bash": t(SiGnubash, "#4EAA25"),
  "YAML": t(SiYaml, "#CB171E"),
  // Generative AI
  "RAG Pipelines": t(FaProjectDiagram, "#0F766E"),
  "LangChain": t(SiLangchain, "#1F6F5C"),
  "LangGraph": t(FaSitemap, "#1F6F5C"),
  "Multi-Agent Systems": t(FaRobot, "#0F766E"),
  "FAISS": t(FaLayerGroup, "#0668E1"),
  "OpenAI API": t(SiOpenai, "#10A37F"),
  // Machine learning
  "Scikit-learn": t(SiScikitlearn, "#F7931E"),
  "PyTorch": t(SiPytorch, "#EE4C2C"),
  "XGBoost": t(FaChartLine, "#1F77B4"),
  "LightGBM": t(FaChartLine, "#2E9E5B"),
  "Anomaly Detection": t(FaBrain, "#C2410C"),
  "NLP": t(FaLanguage, "#7C3AED"),
  "Computer Vision": t(FaEye, "#0891B2"),
  // Backend & APIs
  "FastAPI": t(SiFastapi, "#009688"),
  "Flask": t(SiFlask, "#1C1B19"),
  "Express": t(SiExpress, "#1C1B19"),
  "Node.js": t(SiNodedotjs, "#5FA04E"),
  "REST APIs": t(FaExchangeAlt, "#0F766E"),
  "Microservices": t(FaCubes, "#475569"),
  "React": t(SiReact, "#149ECA"),
  "Next.js": t(SiNextdotjs, "#1C1B19"),
  // Data & cloud
  "PostgreSQL": t(SiPostgresql, "#336791"),
  "Redis": t(SiRedis, "#DC382D"),
  "Pandas": t(SiPandas, "#3B2F8F"),
  "NumPy": t(SiNumpy, "#4DABCF"),
  "MLflow": t(SiMlflow, "#0194E2"),
  "Docker": t(SiDocker, "#2496ED"),
  "AWS": t(FaAws, "#FF9900"),
  "CI/CD": t(FaInfinity, "#2088FF"),
  "GitHub Actions": t(SiGithubactions, "#2088FF"),
  "MLOps": t(FaCogs, "#475569"),
  // CS fundamentals
  "Data Structures": t(FaSitemap, "#475569"),
  "Algorithms": t(FaCodeBranch, "#475569"),
  "System Design": t(FaProjectDiagram, "#475569"),
  "OOP": t(FaCubes, "#475569"),
  "pytest": t(SiPytest, "#0A9EDC"),
  // Seen in the Experience tool lists
  "WhatsApp Business Cloud API": t(SiWhatsapp, "#25A244"),
  "Instagram Graph API": t(SiInstagram, "#C13584"),
};

export const techFor = (name: string): Tech => TECH[name] ?? { icon: FaCode, color: "#475569" };
