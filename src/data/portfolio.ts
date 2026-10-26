export type SkillGroup = {
  title: string;
  items: string[];
};

export const projectCategories = ['Professional Projects', 'Academic Projects', 'DIY Projects'] as const;

export type Project = {
  featured?: boolean;
  category: typeof projectCategories[number];
  title: string;
  period: string;
  type: string;
  problem: string;
  contribution: string[];
  technologies: string[];
  status: string;
  repository?: string;
  demo?: string;
  demoLabel?: string;
};

export type EarlierProject = {
  title: string;
  context: string;
  role: string;
  summary: string;
  technologies: string[];
  visualization: string;
  result: string;
};

export type Experience = {
  responsibilities?: string[];
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
};

export const profile = {
  name: 'Vrushali Alugade',
  username: 'vrush0206',
  headline: 'Frontend Developer | Salesforce | Applied AI',
  intro:
    'I build interfaces, application logic, and API integrations across enterprise software and research settings. My experience spans Salesforce delivery, frontend development at SAP, and applied AI work focused on agent tooling, research prototypes, and practical product experimentation.',
  email: 'vrush02cc@gmail.com',
  githubUrl: 'https://github.com/vrush0206',
  linkedinUrl: 'https://www.linkedin.com/in/vrushali-alugade/',
  location: 'Kaiserslautern 67663, Germany',
  phone: '+49 1748433772',
};

export const achievements = [
  "Building MCP servers enabling AI agents to access SAP's process catalogue in Databricks and retrieve relevant S/4HANA Cloud OData URLs through natural-language queries via the Business Knowledge Graph.",
  'Automated telecom number-management requests through Salesforce using REST APIs eliminating 3-4 operations tickets per day.',
  'Contributed to migrating nearly 100,000 customer services from Salesforce to CloudSense CPQ within a project that cut order processing from two days to 30 minutes during the pandemic.',
];

export const projects: Project[] = [
  {
    category: 'DIY Projects',
    featured: true,
    title: 'AI Agent Research Digest',
    period: '08/2026',
    type: 'Personal project · Prototype',
    problem: "An experimental research digest that collects recent Hacker News and arXiv content, avoids repeat items, and delivers AI-generated summaries by email.",
    contribution: [
      "Built the API-to-email workflow, combining JavaScript recency filtering, persistent item tracking, LLM summarization, and scheduled delivery.",
      "Integrated Hacker News and arXiv APIs and converted Markdown summaries to HTML for the email digest. This remains a personal prototype.",
    ],
    technologies: ['JavaScript', 'Hacker News API', 'arXiv API', 'LLM summarization'],
    status: 'Experimental prototype',
  },
  {
    category: 'DIY Projects',
    title: 'System for Full Immunization Coverage',
    period: '07/2018 - 05/2019',
    type: 'Full Stack Developer | Academic team project',
    problem: "A prototype web application for digitizing immunization coverage in India, with Tableau visualizations to explore the data.",
    contribution: [
      "Worked as a full-stack developer on the team prototype, designing and implementing the application with Node.js, MongoDB, Tableau, and CNN technology.",
      "Co-authored and presented the associated System for Full Immunization Coverage publication at ICDSM 2021, published in Springer proceedings.",
    ],
    technologies: ['Node.js', 'Tableau', 'MongoDB', 'CNN'],
    status: 'Prototype web application',
    demo: 'https://bit.ly/49HOKjp',
    demoLabel: 'View Tableau visualization',
  },
  {
    category: 'DIY Projects',
    title: 'Dashboard for AICTE Schemes',
    period: '02/2018 - 03/2018',
    type: 'Full Stack Developer | Smart India Hackathon',
    problem: "A hackathon prototype that visualizes positive and negative trends in Government of India AICTE schemes.",
    contribution: [
      "Developed the dashboard as a full-stack contributor using Node.js, MongoDB, and Tableau to present scheme trends.",
      "The team prototype achieved a Top 8 position at Smart India Hackathon 2018; this distinction reflects the team result.",
    ],
    technologies: ['Tableau', 'MongoDB', 'Node.js'],
    status: 'Prototype | Team: Top 8, Smart India Hackathon 2018',
    demo: 'https://bit.ly/3PcppWR',
    demoLabel: 'View Tableau visualization',
  },
  {
    category: 'Academic Projects',
    featured: true,
    title: 'SysML to AAS Model Transformation',
    period: '10/2024 – 03/2025',
    type: 'Master’s thesis · DFKI Kaiserslautern',
    problem: "A transformation workflow that converts SysML state-machine models into Asset Administration Shell (AAS) models and JSON representations.",
    contribution: [
      "Implemented ATL transformation rules with EMF/Ecore, then built a Python/FastAPI workflow to produce AAS JSON from the transformed models.",
      "Validated source models and tested generated outputs against IDTA specifications.",
      "Structured the transformation code for future extension to other UML/SysML diagram types; the implemented scope was state-machine models.",
    ],
    technologies: ['ATL', 'EMF/Ecore', 'Python', 'FastAPI', 'Uvicorn'],
    status: 'Outputs tested against IDTA specifications',
  },
  {
    category: 'Academic Projects',
    title: 'SysMD Notebook View Feature',
    period: '11/2023 – 03/2024',
    type: 'UI development',
    problem: "An in-notebook class-diagram view that lets users inspect packages and classes produced by the SysMD Analyze action.",
    contribution: [
      "Implemented the View dropdown in Kotlin, connecting package-namespace selection to class-diagram rendering within a notebook cell.",
      "Enabled users to inspect the internal model generated by Analyze directly in the notebook through the View action.",
    ],
    technologies: ['Kotlin', 'SysMD'],
    status: 'View dropdown implemented',
  },
  {
    category: 'Professional Projects',
    featured: true,
    title: 'AI Agent Research Interfaces',
    period: '05/2026 – present',
    type: 'SAP • AI research',
    problem: "User-facing applications for SAP AI agent research, connecting frontend workflows with backend APIs, AI services, and enterprise tools.",
    contribution: [
      "Developing interfaces with SAP UI5 Web Components for React and integrating backend APIs and AI services into research applications.",
      "Investigating agent reliability issues including tool-call failures, iteration limits, context management, and termination.",
      "Supporting open-weight model proofs of concept under researcher guidance: testing models locally and contributing SAP AI Core deployment scripts.",
      "Building MCP servers that access SAP's process catalogue in Databricks and retrieve relevant S/4HANA Cloud OData URLs through natural-language queries via the Business Knowledge Graph.",
    ],
    technologies: ['React', 'SAP UI5', 'REST APIs', 'MCP', 'AI services'],
    status: 'In progress',
  },
  {
    category: 'Professional Projects',
    title: 'Quantum Prototype Interfaces',
    period: '2024 – 2026',
    type: 'SAP • Research tooling',
    problem: "Interfaces for SAP quantum-computing demonstrators focused on time-series forecasting and synthetic data generation.",
    contribution: [
      "Developed and enhanced frontend features for the demonstrators, improving existing UI code and interface usability.",
      "This work supported research demonstrators and prototype evaluation, rather than a production quantum-computing service.",
    ],
    technologies: ['React', 'UI design', 'Data workflows'],
    status: 'Completed internal prototype work',
  },
  {
    category: 'Professional Projects',
    title: 'Salesforce Workflow Automation',
    period: '2019 – 2022',
    type: 'Accenture & TCS • Enterprise apps',
    problem: "Enterprise CRM workflows spanning banking credit-account management and the telecom lifecycle, from lead capture through order processing and service activation.",
    contribution: [
      "Implemented Lightning Web Components, Apex logic, and Visualforce interfaces, alongside REST API integrations for Salesforce workflow automation.",
      "Implemented scheduled Salesforce batch processes for REST-based CRUD operations on a PL/SQL backend.",
      "Automated telecom number-management requests through Salesforce and REST APIs, eliminating 3-4 operations tickets per day.",
      "Contributed to migrating nearly 100,000 customer services to CloudSense CPQ within a project that reduced order processing from two days to 30 minutes. The processing-time reduction was a project outcome.",
      "Maintained Apex test classes and conducted code quality checks and deployment reviews to support release validation.",
    ],
    technologies: ['Salesforce', 'Lightning Web Components', 'Apex', 'REST APIs'],
    status: 'Completed enterprise delivery',
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    title: 'System for Full Immunization Coverage',
    context: 'Academic team project | July 2018–May 2019',
    role: 'Full Stack Developer',
    summary: 'Helped design and implement a prototype web application to digitize immunization coverage in India.',
    technologies: ['Node.js', 'MongoDB', 'Tableau'],
    visualization: 'https://bit.ly/49HOKjp',
    result: 'Publication: “System for Full Immunization Coverage,” ICDSM 2021, Springer proceedings.',
  },
  {
    title: 'Dashboard for AICTE Schemes',
    context: 'Smart India Hackathon | February–March 2018',
    role: 'Full Stack Developer',
    summary: 'Contributed to a prototype dashboard highlighting positive and negative trends in government AICTE schemes.',
    technologies: ['Node.js', 'MongoDB', 'Tableau'],
    visualization: 'https://bit.ly/3PcppWR',
    result: 'Team achievement: Top 8 at Smart India Hackathon 2018.',
  },
];

export const experience: Experience[] = [
  {
    role: 'Front End Developer for AI Agent Research',
    responsibilities: [
      'Investigated tool-call failures, iteration limits, context management, and termination.',
      'Supported open-weight model proofs of concept under researcher guidance, testing models locally and contributing SAP AI Core deployment scripts.',
      'Built MCP servers to access the process catalogue and retrieve relevant S/4HANA Cloud OData URLs through natural-language queries via the Business Knowledge Graph.',
    ],
    company: 'SAP',
    location: 'Walldorf',
    period: '05/2026 – present',
    summary: 'Building frontend interfaces for AI research applications and related tools, with work spanning agent reliability, API integration, and applied research prototyping.',
  },
  {
    role: 'Working Student Frontend Developer',
    company: 'SAP (Quantum Exploration)',
    location: 'Walldorf',
    period: '10/2024 – 05/2026',
    summary: 'Developed and enhanced interfaces for quantum computing demonstrators covering time-series forecasting and synthetic data generation.',
    responsibilities: ['Supported AI agent research by investigating agent behavior and contributing to framework proofs of concept to assess technical feasibility.'],
  },
  {
    role: 'Working Student UI Developer',
    company: 'RPTU Kaiserslautern',
    location: 'Kaiserslautern',
    period: '02/2023 – 08/2023',
    summary: 'Contributed to Kotlin UI development, including drag-and-drop and dynamic cell shifting.',
    responsibilities: ['Resolved bugs to improve SysMD tool performance.'],
  },
  {
    role: 'Application Developer',
    responsibilities: [
      'Partnered with cross-functional stakeholders to gather and refine CRM requirements.',
      'Conducted code quality checks and post-deployment reviews, and supported release cycles with Bitbucket and Jenkins.',
    ],
    company: 'Accenture',
    location: 'India',
    period: '11/2021 – 10/2022',
    summary: 'Delivered Salesforce solutions for banking credit account management, translating business requirements into scalable workflow and interface improvements.',
  },
  {
    role: 'Application Developer',
    responsibilities: [
      'Contributed to migrating nearly 100,000 customer services from Salesforce to CloudSense CPQ within a project that cut order processing from two days to 30 minutes during the pandemic. This was a project outcome, not an individual result.',
      'Implemented REST API-based CRUD operations on a PL/SQL backend through scheduled Salesforce batch processes.',
      'Developed and maintained Apex test classes and performed code quality checks for release validation.',
    ],
    company: 'TCS',
    location: 'India',
    period: '08/2019 – 11/2021',
    summary: 'Built Salesforce workflows and enterprise integrations for telecom processes, including lead handling, order flow, and API-driven automation.',
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'SAP UI5 Web Components', 'Next.js', 'AngularJS', 'HTML/CSS'],
  },
  {
    title: 'Enterprise apps',
    items: ['Salesforce', 'Lightning Web Components', 'Apex', 'Visualforce'],
  },
  {
    title: 'API & integration',
    items: ['Node.js', 'FastAPI', 'REST APIs', 'SOAP APIs', 'External system integration', 'Data migration'],
  },
  {
    title: 'AI & prototyping',
    items: ['SAP BTP', 'AI Core SDK', 'LangChain', 'LangGraph', 'MCP'],
  },
  {
    title: 'Delivery & collaboration',
    items: ['Git', 'CI/CD', 'Jenkins', 'Bitbucket', 'Linux', 'Agile/Scrum', 'Jira'],
  },
  {
    title: 'Core stack',
    items: ['JavaScript', 'Python', 'Java', 'SQL', 'MongoDB', 'PostgreSQL'],
  },
];

export const beyondWork = {
  awards: [
    'Nikohack Winner, 2022',
    'Start HACK participant, Switzerland, 2024',
    'Smart India Hackathon finalist, 2018',
  ],
  certifications: [
    'Generative AI for Everyone — DeepLearning.AI, 2025',
    'Oracle Certified Java Associate Programmer, 2018',
    'Angular JS & Bootstrap Core Fundamentals, 2017',
    'Web Technologist Level 1, 2017',
  ],
  publication:
    'Co-authored and presented “System for Full Immunization Coverage” at ICDSM 2021 in the Springer proceedings.',
  languages: ['English — C1', 'Deutsch — A2 (B1 ongoing)'],
};

export const education = [
  {
    degree: 'MSc. Informatik',
    specialty: 'Software Engineering | Intelligent Systems',
    institution: 'RPTU Kaiserslautern',
    period: '10/2022 – 03/2026',
  },
  {
    degree: 'Bachelor of Engineering',
    specialty: 'Computer Engineering',
    institution: 'University of Mumbai',
    period: '07/2015 – 07/2019',
  },
];
