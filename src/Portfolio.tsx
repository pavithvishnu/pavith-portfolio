import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, TerminalSquare, Cpu, Radio, BrainCircuit, Boxes, Wrench, Cloud } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

// ---- Quick data knobs (edit here without touching the UI) ----
const PROFILE = {
  name: "Pavith Vishnu S",
  tagline: "Embedded Systems • Edge AI • IoT",
  location: "Coimbatore, India",
  about:
    "Engineer focused on building reliable embedded systems and edge AI pipelines. I work across Rust, Python, and C, with experience in Yocto-based Linux, container runtimes, and secure, modular middleware for data acquisition, inference, and control.",
  links: {
    github: "https://github.com/pavithvishnu",
    linkedin: "https://www.linkedin.com/in/pavithvishnu",
    email: "mailto:pavith21297@gmail.com",
    resume: "/resume.pdf" // Place your PDF in /public as resume.pdf
  }
};

const SKILLS = [
  { icon: <Cpu className="w-4 h-4" />, text: "Embedded C / C" },
  { icon: <TerminalSquare className="w-4 h-4" />, text: "Rust" },
  { icon: <TerminalSquare className="w-4 h-4" />, text: "Python" },
  { icon: <Boxes className="w-4 h-4" />, text: "RTOS /Zephyr" },
  { icon: <Boxes className="w-4 h-4" />, text: "Containers" },
  { icon: <Wrench className="w-4 h-4" />, text: "Yocto / Buildroot" },
  { icon: <Radio className="w-4 h-4" />, text: "MQTT / HTTP / Modbus / LORAWAN" },
  { icon: <Cloud className="w-4 h-4" />, text: "Azure IOT / AWS IOT Core / Eclipse IOT " },
  { icon: <BrainCircuit className="w-4 h-4" />, text: "TensorFlow • Edge AI" },
  { icon: <BrainCircuit className="w-4 h-4" />, text: "Solution Architecture / Microservice Orchestration /Data Flow Management" },
];

const EXPERIENCE = [
  {
    role: "Principal Engineer",
    org: "TinkerBlox Technology Private Limited",
    period: "Oct 2023 – Present",
    points: [
      "Leading development of a lightweight container-less microservice runtime for embedded and edge devices.",
      "Implemented secure service isolation using Linux kernel tools",
      "Built tooling for service lifecycle management.",
      "Developed custom Linux builds with Yocto for ARM architectures.",
      "Engaged in solution engineering, including project architecture design.",
      "Integrated protocol stacks (MQTT, AMQP) and frameworks (.NET Nano Framework, .NET IoT Framework).",
      "Implemented Azure DevOps integration, including App Server Azure Functions, Event Grid, and pipeline management"
    ],
  },
  {
    role: "Member Technical Staff",
    org: "HCLTech",
    period: "Sep 2021 – Sep 2023",
    points: [
     "Focused on IIoT product development as an IoT Edge Network Specialist.",
     "Managed protocol stack integration (MQTT, LoRaWAN, Kafka, BLE), sensor integration, and board bring-up activities.",
     "Developed IoT stack from edge to cloud using open-source tools and managed device backend with Azure IoT and AWS IoT Core.",
     "Conducted bootloader development for custom hardware with Zephyr and Yocto."
    ],
  },
  {
    role: "Freelancer - Embedded and IoT Developer",
    org: "Duplex Healthcare (Australia)",
    period: "Mar 2021 & Dec 2020",
    points: [
      "Integrated sensors with development boards and managed data calibration and transfer to AWS IoT Core via LoRaWAN.",
      "Expanded LoRaWAN network coverage, established AWS IoT Core as database storage, and trained interns on build system usage."
    ],
  },
  {
    role: "Incubatee Entrepreneur",
    org: "TBI @ KEC",
    period: "Mar 2019 – Feb 2021",
    points: [
      "Developed technology prototypes under the government-funded NIDHI PRAYAS scheme.",
      "Conducted customer exploration/validation and deployed prototypes with enhanced accuracy in various locations."
    ],
  },
  {
    role: "Fellowship (LaunchPad)",
    org: "Forge",
    period: "Aug 2018 – Feb 2019",
    points: [
      "Explored new technologies and created prototypes for specific POCs.",
      "Conducted field surveys, and customer discovery, and deployed prototypes for data gathering." ],
  },
];

const PROJECTS = [
  {
    title: "Edge Middleware (Rust Core + C Adapters)",
    desc:
      "Scalable, modular middleware with dynamic connectors, rule engine, diagnostics, OTA, and encrypted storage. Runs on HPC and SDV targets.",
    tags: ["Rust", "C", "Containerd", "CNI", "SQLite", "DDS"],
    link: "#",
  },
  {
    title: "AC Energy Optimizer",
    desc:
      "Time-series model predicts usage patterns and auto-sets temperature, fan speed, and mode to reduce power while maintaining comfort.",
    tags: ["Python", "TensorFlow", "Time Series", "Edge"],
    link: "#",
  },
  {
    title: "Object Detection on Yocto",
    desc:
      "Deployed TensorFlow-based object classification on embedded camera; optimized pipelines and memory footprint for real-time performance.",
    tags: ["Yocto", "TensorFlow", "OpenCV", "SBC"],
    link: "#",
  },
  {
    title: "ROS + DDS Dataflow",
    desc:
      "Modular node-based dataflow with YAML configs, dynamic loading, and robust interprocess communication via DDS.",
    tags: ["ROS", "DDS", "YAML", "Edge"],
    link: "#",
  },
];

const CERTS = [
  "Graduate Diploma in Hardware/AIoT Product Design and Engineering at Forge Accelerator.",
  "Programming for Everybody (Getting Started with Python) - Coursera"
];

const PATENT = [
  "A real-time monitoring system and method for movements of pachyderms in areas surrounding forests using LoRa WAN (Low Power Wide Area Networks) and providing instantaneous alerts to people. Published in the E-Journal of the Indian Patent Office, 8th Jan 2021."
]


// ---- UI helpers ----
const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const sectionTitle = (t: string) => (
  <motion.h2
    className="text-2xl sm:text-3xl font-semibold tracking-tight"
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {t}
  </motion.h2>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Header / Hero */}
      <header className="border-b border-zinc-800/60 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 z-50">
        <div className={`${container} py-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl bg-zinc-800 grid place-items-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-semibold">{PROFILE.name}</div>
              <div className="text-xs text-zinc-400">{PROFILE.tagline}</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-3">
            <a href="#about" className="text-sm text-zinc-300 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-zinc-300 hover:text-white">Skills</a>
            <a href="#experience" className="text-sm text-zinc-300 hover:text-white">Experience</a>
            <a href="#certifications" className="text-sm text-zinc-300 hover:text-white">Certification</a>
            <a href="#patent" className="text-sm text-zinc-300 hover:text-white">Patent</a>
            <a href="#contact" className="text-sm text-zinc-300 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-14 sm:py-20">
        <div className={container}>
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">{PROFILE.name}</span>
              </h1>
              <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-prose">
                {PROFILE.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href={PROFILE.links.resume} target="_blank" rel="noreferrer">Download Resume</a>
                </Button>
                <Button variant="secondary" asChild className="rounded-2xl">
                  <a href="#experience">View Experience</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-zinc-300">
                <span className="inline-flex items-center gap-1 text-sm"><MapPin className="w-4 h-4" /> {PROFILE.location}</span>
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub"><Github className="w-5 h-5"/></a>
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn"><Linkedin className="w-5 h-5"/></a>
                <a href={PROFILE.links.email} className="hover:text-white" aria-label="Email"><Mail className="w-5 h-5"/></a>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("About")}
          <p className="mt-4 text-zinc-300 max-w-3xl">
            I enjoy designing systems that bridge hardware and cloud: efficient firmware, secure messaging, and clean data flows that make AI-in-the-loop decisions reliable at the edge. Recently, I've been building a Rust core with C adapters, containerized services, and schema-driven configs to scale across devices.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Core Skills")}
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <Badge key={i} className="rounded-xl px-3 py-1.5 flex items-center gap-1">
                {s.icon}
                <span className="text-sm">{s.text}</span>
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Experience")}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{e.role}</span>
                      <span className="text-xs text-zinc-400">{e.period}</span>
                    </CardTitle>
                    <div className="text-sm text-zinc-400">{e.org}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm">
                      {e.points.map((p, j) => <li key={j}>{p}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* <section id="projects" className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Projects")}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noreferrer" : undefined}
                className="block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <p className="text-sm text-zinc-400">{p.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, k) => (
                        <Badge key={k}>{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section id="certifications" className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Certifications")}
          <div className="mt-4 flex flex-wrap gap-2">
            {CERTS.map((c, i) => (
              <Badge key={i}>{c}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Patent */}
      <section id="patent"  className="py-10 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Patent")}
          <div className="mt-4 flex flex-wrap gap-2">
            {PATENT.map((c, i) => (
              <Badge key={i}>{c}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 border-t border-zinc-800/60">
        <div className={container}>
          {sectionTitle("Contact")}
          <p className="mt-4 text-zinc-300 max-w-2xl">
            I'm open to Embedded/IoT, Edge AI, and systems roles. If my work aligns with your needs, drop a note and I'll get back soon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href={PROFILE.links.email}><Mail className="w-4 h-4 mr-2"/> Email Me</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2"/> GitHub</a>
            </Button>
          </div>
          <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.</div>
        </div>
      </section>
    </div>
  );
}
