# CyberCareer AI – AI Cybersecurity Career Copilot
> **College Cybersecurity Capstone Project**  
> *An air-gapped, client-side cybersecurity career navigation and readiness platform built with HTML5, CSS3, and Vanilla JavaScript.*

---

## 🛡️ Project Overview

**CyberCareer AI** is an interactive career copilot and readiness accelerator engineered specifically for cybersecurity students, career switchers, and aspiring security analysts. 

Navigating the transition from academic theory to hands-on industry roles—such as SOC Analysts, Penetration Testers, Cloud Security Engineers, and Incident Responders—presents severe challenges: fragmented certification roadmaps, complex tooling prerequisites, and opaque hiring expectations. CyberCareer AI bridges this gap with an autonomous, zero-cost, privacy-first web application running 100% in the browser.

### Key Highlights
- **100% Client-Side Architecture**: Zero remote database servers, zero tracking cookies, zero paid API keys.
- **Air-Gapped Privacy**: All user inputs (resumes, assessments, roadmap progress) are stored strictly in browser `localStorage`.
- **Instant Deployment**: Double-click `index.html` to run locally on any computer, or deploy to **GitHub Pages** in under 60 seconds with zero build steps.
- **Realistic Capstone Pedagogy**: Curated with verified industry benchmarks (NIST CSF, MITRE ATT&CK, OWASP Top 10, CompTIA, OffSec).

---

## 🚀 Key Modules & Functional Features

### 1. 📊 Home Dashboard & Progress Hub
- **Career Readiness Index**: Real-time calculated readiness score combining module completions, diagnostic assessment performance, and resume draft status.
- **Dynamic Recommendation Engine**: Automatically detects your next uncompleted roadmap lesson and highlights priority actions.
- **Domain Mastery Breakdown**: Live visual meters for 6 core security disciplines.
- **One-Click Demo Baseline**: Instant demo profile toggle demonstrating a completed state for capstone presentations.

### 2. 🧭 Cybersecurity Career Explorer (8 Specialized Roles)
Covers 8 industry tracks:
1. **SOC Analyst** (Defensive Operations & Alert Triage)
2. **Penetration Tester** (Offensive Security & Ethical Hacking)
3. **Security Analyst** (GRC, Risk Assessment & Auditing)
4. **Incident Responder** (DFIR, Memory Forensics & Containment)
5. **Digital Forensics Analyst** (Artifact Investigation & Evidence Handling)
6. **Cloud Security Engineer** (AWS/Azure Architecture & Least Privilege IAM)
7. **Application Security Engineer** (AppSec, DevSecOps & OWASP Defense)
8. **Cybersecurity Consultant** (Advisory, CIS Benchmarks & Strategy)

*Each card features: Technical skill badges, recommended certifications, core responsibilities, curated free learning resources, interactive "Day-in-the-Life" modals, and a working "Set as Target Career" coordinator.*

### 3. 🎯 Interactive Diagnostic Skill Assessment
- **18 Practical Scenario Questions** across 6 core pillars:
  1. *Computer Networking* (TCP 3-way handshake, DNS, /26 subnetting)
  2. *Linux Fundamentals* (Octal permissions `750`, log analysis in `/var/log/auth.log`, socket monitoring `ss -tulpn`)
  3. *Python for Security* (Raw sockets, regex IPv4 parsing, error handling)
  4. *Security Fundamentals* (CIA Triad, symmetric vs asymmetric encryption, multi-factor authentication)
  5. *Web Application Security* (SQL injection prevention via parameterized queries, Stored XSS, SameSite cookies)
  6. *Cloud Security* (Shared Responsibility Model, IAM least privilege, Zero Trust principles)
- **Instant Algorithmic Evaluation**: Tier ranking (Novice, Apprentice, Practitioner, Specialist), automated Strengths & Improvement findings, and personalized career alignment rankings.
- **Comprehensive Answer Review**: Step-by-step technical explanations for every question.

### 4. 🗺️ 9-Stage Personalized Learning Roadmap
Structured progression containing **45+ interactive checklist milestones**:
- Stage 01: Computer Networking Fundamentals
- Stage 02: Linux & Command-Line Essentials
- Stage 03: Python Programming for Security
- Stage 04: Cybersecurity Fundamentals & Architecture
- Stage 05: Web Application Security & OWASP Top 10
- Stage 06: Ethical Hacking in Authorized Labs
- Stage 07: Security Monitoring & Incident Response (SIEM/SOC)
- Stage 08: Cloud Security Basics (AWS/Azure)
- Stage 09: Practical Projects & Portfolio Building
- Features interactive checkboxes, persistent progress tracking, and curated external free resource links (OverTheWire, PortSwigger, TryHackMe, NIST, Wireshark).

### 5. 💼 Job & Internship Preparation Hub
- **Job Description Skill Matcher**: Paste real job requirements (or load pre-configured Junior SOC, Cloud, or PenTest postings) to automatically extract 30+ keywords, calculate your match percentage, identify tooling gaps, and generate direct roadmap recommendations.
- **Portfolio Project Blueprints**: Detailed architectures, tools, and resume accomplishment bullets for 4 hands-on labs:
  1. *Virtual Enterprise SOC Lab* (Wazuh SIEM + Sysmon)
  2. *Automated Network Port Scanner* (Python + Scapy + NVD API)
  3. *Cloud Honeypot & Threat Intel Visualizer* (AWS EC2 + Cowrie)
  4. *Web Application Security Audit* (OWASP Juice Shop)
- **Internship Readiness Checklist**: 8 verified career prep milestones.
- **Recruiter Resume Tips**: Authentic DOs and DON'Ts with action-verb frameworks.

### 6. 🎤 Cybersecurity Interview Preparation
- **Flashcard Question Bank**: 20+ realistic questions spanning Technical, Incident Handling, and Behavioral HR prompts using the STAR methodology.
- **Interactive Mock Interview Simulator**:
  - Select tracks (SOC Analyst Tier 1, Ransomware Containment, Penetration Testing RCE Disclosure, Security vs Product Conflict).
  - Draft your response under realistic scenario conditions.
  - Interactive self-evaluation rubric with point checkpoints and expert model answers.

### 7. 📄 ATS Resume & Portfolio Assistant
- **Dual-Pane Live Editor**: Interactive form on the left, pixel-perfect simulated A4 ATS resume sheet on the right.
- **One-Click Quick Templates**: Instant professional summaries for SOC, Pentesting, and collegiate capstones.
- **Print / PDF Engine**: Dedicated `@media print` CSS cleanly strips navigation, sidebars, and dark styling, outputting an executive black-and-white ATS document ready for employer submission.
- **Plain Text & JSON Export**: Copy plain text for web application forms or export JSON backups.

---

## 🛠️ Technology Stack & Architecture

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Structure** | Semantic HTML5 | Clean accessibility, ARIA labels, zero framework overhead. |
| **Styling** | Modern CSS3 (Variables, Grid, Flexbox) | Cybersecurity dark mode, crisp light mode, and dedicated `@media print` rules. |
| **Logic & Engine** | Vanilla JavaScript (ES6+) | Lightweight, reactive event coordination, fast execution on any browser. |
| **Persistence** | Browser `localStorage` API | Zero remote telemetry; complete user privacy and instant offline persistence. |
| **Dependencies** | **Zero npm packages / zero build tools** | Eliminates build failures, package vulnerabilities, and complex node installations. |

---

## 📂 Project Directory Structure

```text
soruban/
├── index.html        # Single-page application markup with all 8 module views & modals
├── style.css         # Cybersecurity theme design system, variables, responsive & print CSS
├── script.js         # Unified application state manager, data models, scoring & render engines
└── README.md         # Capstone project documentation & deployment guide
```

---

## 💻 Quick Start: Running Locally

No server setup, Node.js, or package installation is required!

### Option 1: Direct File Open (Easiest)
1. Download the repository folder or clone it to your computer.
2. Locate `index.html` in your file explorer.
3. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Local HTTP Server (Optional)
If you prefer running via a local development server:
```bash
# Using Python 3 built-in server
python -m http.server 8000

# Then open in your browser:
# http://localhost:8000
```

---

## 🌐 Step-by-Step GitHub Pages Deployment Guide

Deploy your project online with a free, permanent URL for your capstone presentation:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right corner and select **New repository**.
3. Name your repository `cybercareer-ai` (or any name you choose).
4. Set the repository to **Public**.
5. Do NOT initialize with a README (you already have this one).
6. Click **Create repository**.

### Step 2: Upload Files via Web Browser (Zero Git Required)
1. On your newly created repository page, click the **uploading an existing file** link.
2. Drag and drop all four files (`index.html`, `style.css`, `script.js`, and `README.md`) into the upload box.
3. In the "Commit changes" box, type: `Initial capstone commit: CyberCareer AI complete application`.
4. Click **Commit changes**.

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on the **Settings** tab (gear icon at the top).
2. On the left sidebar menu, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Branch**:
   - Change `None` to **`main`** (or `master`).
   - Leave the folder set to **`/(root)`**.
4. Click **Save**.
5. Wait 60–90 seconds. Refresh the page until a green notification box appears:
   > *"Your site is live at https://<your-username>.github.io/cybercareer-ai/"*

---

## 🎓 Capstone Presentation & Evaluation Guide

When presenting this project for academic or technical review, highlight:
1. **Air-Gapped Client Security**: Contrast with commercial platforms that ingest candidate resumes into cloud databases. CyberCareer AI demonstrates strict adherence to privacy-by-design principles.
2. **Real-World Alignment**: Review the 8 career matrices against NIST SP 800-181 (National Initiative for Cybersecurity Education - NICE Framework).
3. **Interactive ATS Engine**: Demonstrate the live ATS resume generator, showing how user inputs translate into an industry-standard format ready for PDF export via browser print dialogs (`Ctrl+P` / `Cmd+P`).
4. **Keyword Extraction Parser**: Demonstrate pasting live cybersecurity job descriptions into the Skill Matcher to illustrate automated gap analysis.

---

## 📄 License & Academic Integrity

This project is open-source under the **MIT License**. Created as a collegiate Cybersecurity Capstone project. All certification names and trademarks (CompTIA, SANS, OffSec, AWS, Microsoft) are property of their respective holders and are referenced strictly for educational comparison.
