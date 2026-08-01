import type { IconType } from "react-icons";
import {
  SiPython, SiTypescript, SiCplusplus, SiC, SiScikitlearn, SiPytorch,
  SiNumpy, SiPandas, SiFastapi, SiFlask, SiPostgresql, SiVercel,
  SiGit, SiGithub, SiLangchain, SiHuggingface, SiSupabase, SiDocker,
  SiLinux, SiGithubactions, SiNextdotjs, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiRedis, SiMlflow, SiOpenai,
  SiApachekafka, SiPrometheus, SiScipy, SiPydantic, SiSqlalchemy,
  SiPrisma, SiPuppeteer, SiSolidity, SiStripe, SiZod, SiGooglegemini,
  SiSui, SiJavascript,
} from "react-icons/si";
import {
  FaJava, FaDatabase, FaProjectDiagram, FaRobot, FaTerminal, FaSitemap,
  FaBrain, FaSearch, FaExchangeAlt, FaAws, FaChartLine, FaLayerGroup,
  FaCloud, FaMicrophone, FaShieldAlt, FaFileAlt, FaTheaterMasks, FaCubes,
} from "react-icons/fa";

/**
 * One icon map for the whole site - the stack section and the project cards
 * both read from it, so a logo added here shows up in both places.
 * Brand marks where they exist; a representative glyph otherwise.
 */
export const TECH_ICONS: Record<string, IconType> = {
  // Languages
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "C++": SiCplusplus,
  "Java": FaJava,
  "C": SiC,
  "SQL": FaDatabase,
  "Solidity": SiSolidity,
  "Sui Move": SiSui,

  // Agentic & GenAI
  "RAG Pipelines": FaProjectDiagram,
  "Multi-Agent Systems": FaRobot,
  "LangChain": SiLangchain,
  "LangGraph": FaSitemap,
  "Prompt Engineering": FaTerminal,
  "Semantic Search": FaSearch,
  "Azure OpenAI": SiOpenai,
  "OpenAI API": SiOpenai,
  "Hugging Face": SiHuggingface,
  "Gemini": SiGooglegemini,
  "Gemini API": SiGooglegemini,
  "MCP": FaSitemap,
  "Sarvam-105B": FaBrain,

  // Machine learning
  "Scikit-learn": SiScikitlearn,
  "PyTorch": SiPytorch,
  "XGBoost": FaChartLine,
  "LightGBM": FaChartLine,
  "Anomaly Detection": FaBrain,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "SciPy": SiScipy,
  "Model Evaluation": FaChartLine,

  // Data & stores
  "FAISS": FaLayerGroup,
  "Pinecone": FaLayerGroup,
  "ChromaDB": FaDatabase,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Redis": SiRedis,
  "MLflow": SiMlflow,
  "DataHub": FaDatabase,
  "Kafka": SiApachekafka,
  "Prometheus": SiPrometheus,
  "Walrus": FaLayerGroup,
  "Seal": FaShieldAlt,
  "Monad": FaCubes,
  "Pyth": FaChartLine,

  // Backend & frontend
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "REST APIs": FaExchangeAlt,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Pydantic": SiPydantic,
  "SQLAlchemy": SiSqlalchemy,
  "Prisma": SiPrisma,
  "Zod": SiZod,
  "Recharts": FaChartLine,
  "Stripe": SiStripe,
  "Web Audio API": FaMicrophone,

  // DevOps & tooling
  "Docker": SiDocker,
  "CI/CD": SiGithubactions,
  "GitHub Actions": SiGithubactions,
  "AWS": FaAws,
  "Vercel": SiVercel,
  "Render": FaCloud,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Linux": SiLinux,
  "Puppeteer": SiPuppeteer,
  "Playwright": FaTheaterMasks,
  "DOCX / PDF": FaFileAlt,
};

/** Returns the icon for a tech name, or undefined if there isn't one. */
export function techIcon(name: string): IconType | undefined {
  return TECH_ICONS[name];
}
