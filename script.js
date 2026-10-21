/* Hela Jobs dashboard — plain JavaScript version of the original Figma Make (React) app. */

/* ---------- Icons ---------- */
const ICONS = {
  apps: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  bookmark: '<path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.7L6 21V4.8Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  file: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.1 2.3c-.9.3-.9 1.1-.9 1.7M12 17h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 15v5h14v-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 15.2A8 8 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  sparkle: '<path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3L12 3Z"/><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>'
};

const ic = (name, size = 19) =>
  `<svg aria-hidden="true" class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/* ---------- Data ---------- */
const NAV = [
  { label: "Overview", icon: "apps" },
  { label: "My applications", icon: "briefcase", count: "8" },
  { label: "Saved jobs", icon: "bookmark", count: "12" },
  { label: "Discover jobs", icon: "compass" },
  { label: "My resume", icon: "file" }
];

const JOBS = [
  { id: 1, role: "Associate Software Engineer", company: "LankaLogic", location: "Colombo", district: "Colombo", mode: "Hybrid", type: "Full time", time: "2h ago", color: "cobalt", initials: "LL", tags: ["JavaScript", "React", "SQL"], premium: true },
  { id: 2, role: "Frontend Developer Intern", company: "Morpho Labs", location: "Moratuwa", district: "Colombo", mode: "On-site", type: "Part time", time: "5h ago", color: "purple", initials: "ML", tags: ["HTML", "CSS", "Figma"], premium: false },
  { id: 3, role: "Junior UI/UX Designer", company: "Kandy Digital", location: "Kandy", district: "Kandy", mode: "Remote", type: "Full time", time: "1d ago", color: "orange", initials: "KD", tags: ["UI/UX", "Figma", "Research"], premium: false },
  { id: 4, role: "Graduate Software Engineer", company: "Serendib Systems", location: "Gampaha", district: "Gampaha", mode: "Hybrid", type: "Full time", time: "1d ago", color: "green", initials: "SS", tags: ["Java", "Spring Boot", "SQL"], premium: false },
  { id: 5, role: "Web Development Trainee", company: "Ceylon Cloud", location: "Horana", district: "Kalutara", mode: "On-site", type: "Contract", time: "2d ago", color: "red", initials: "CC", tags: ["PHP", "JavaScript", "MySQL"], premium: false },
  { id: 6, role: "Junior QA Engineer", company: "Virtusa Nova", location: "Colombo", district: "Colombo", mode: "Hybrid", type: "Full time", time: "2d ago", color: "teal", initials: "VN", tags: ["Testing", "Selenium", "Agile"], premium: true },
  { id: 7, role: "Data Analyst Intern", company: "Dialog Digital Lab", location: "Colombo", district: "Colombo", mode: "Remote", type: "Internship", time: "3d ago", color: "red", initials: "DD", tags: ["SQL", "Power BI", "Python"], premium: false },
  { id: 8, role: "IT Support Executive", company: "Hill Capital", location: "Kandy", district: "Kandy", mode: "On-site", type: "Part time", time: "4d ago", color: "green", initials: "HC", tags: ["Networks", "Windows", "Support"], premium: false }
];

const DISTRICTS = ["Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];
const SKILLS = ["JavaScript", "HTML", "CSS", "SQL", "C Programming", "Database Design", "Problem Solving", "Teamwork"];
const RESUME_SKILLS = ["C Programming", "JavaScript", "HTML", "CSS", "SQL", "Database Design", "Problem Solving", "Teamwork"];

const APPLICATIONS = [
  ["Software Developer Intern", "CodeCraft Solutions", "In review", "Oct 17, 2026", "blue"],
  ["Frontend Developer Intern", "Morpho Labs", "Interview", "Oct 14, 2026", "green"],
  ["Associate Software Engineer", "LankaLogic", "Applied", "Oct 12, 2026", "purple"],
  ["Web Development Trainee", "Ceylon Cloud", "Shortlisted", "Oct 08, 2026", "gold"]
];

const NOTICES = [
  { icon: "users", title: "Interview invitation", copy: "Morpho Labs invited you to a frontend internship interview.", time: "12 minutes ago", unread: true },
  { icon: "eye", title: "Your profile was viewed", copy: "A verified employer in Colombo viewed your profile.", time: "2 hours ago", unread: true },
  { icon: "briefcase", title: "Application update", copy: "CodeCraft Solutions moved your application to In review.", time: "Yesterday", unread: false },
  { icon: "sparkle", title: "6 new matches", copy: "New software and IT jobs match your saved search.", time: "2 days ago", unread: false }
];

const HELP_CARDS = [
  ["briefcase", "Applying for jobs", "Applications, statuses, interviews, and follow-ups"],
  ["file", "Profile & resume", "Build a profile employers can understand"],
  ["sparkle", "Premium membership", "Plans, billing, renewal, and cancellation"],
  ["settings", "Account & privacy", "Security, visibility, and notification controls"]
];
const FAQS = ["How do I know if an employer is verified?", "Can I apply for jobs without Premium?", "How do I update or replace my resume?", "How are sponsored jobs shown in search results?"];

/* ---------- State ---------- */
const state = {
  dark: false,
  collapsed: false,
  mobileOpen: false,
  active: "Overview",
  saved: [2, 3, 6],
  toast: "",
  modal: null, // "premium" | "job" | null
  query: "",
  district: "All districts",
  jobType: "All job types",
  workMode: "All work modes",
  notices: NOTICES.map((n) => ({ ...n })),
  cv: "Sandakalum_Yatawara_CV.pdf"
};
try { state.dark = localStorage.getItem("hela-theme") === "dark"; } catch (e) { /* storage unavailable */ }

/* ---------- Small components ---------- */
const button = (label, { variant = "primary", icon, attrs = "" } = {}) =>
  `<button class="button button--${variant}" type="button" ${attrs}>${label}${icon ? ic(icon, 17) : ""}</button>`;

const stat = (icon, value, label, delta, tone) =>
  `<article class="stat-card"><div class="stat-icon ${tone}">${ic(icon)}</div><div><span class="stat-value">${value}</span><p>${label}</p></div><span class="delta">${delta}</span></article>`;

const header = (eyebrow, title, description, extra = "") =>
  `<section class="workspace-header"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${description}</p></div>${extra}</section>`;

const chips = (list) => `<div class="skill-cloud">${list.map((s) => `<span>${s}</span>`).join("")}</div>`;

function jobCard(job, saved) {
  return `<article class="job-card">
    ${job.premium ? `<span class="sponsored">${ic("sparkle", 12)} Sponsored</span>` : ""}
    <div class="company-logo logo-${job.color}">${job.initials}</div>
    <div class="job-main">
      <p>${job.company} ${job.id === 1 ? `<span class="verified" title="Verified employer">${ic("check", 10)}</span>` : ""}</p>
      <h3>${job.role}</h3>
      <div class="job-meta"><span>${ic("pin", 14)}${job.location}</span><span>${job.mode}</span><span>${job.type}</span><span>${ic("clock", 14)}${job.time}</span></div>
      <div class="tags">${job.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
    <div class="job-actions">
      <button class="save-button ${saved ? "saved" : ""}" type="button" aria-label="Save job" aria-pressed="${saved}" data-save="${job.id}">${ic("bookmark")}</button>
      <button class="view-button" type="button" data-modal="job">View job ${ic("arrow", 15)}</button>
    </div>
  </article>`;
}

/* ---------- Discover (filters) ---------- */
function filteredJobs() {
  const search = state.query.trim().toLowerCase();
  return JOBS.filter((job) => {
    const matchesQuery = !search || [job.role, job.company, job.location, ...job.tags].some((v) => v.toLowerCase().includes(search));
    return matchesQuery
      && (state.district === "All districts" || job.district === state.district)
      && (state.jobType === "All job types" || job.type === state.jobType)
      && (state.workMode === "All work modes" || job.mode === state.workMode);
  });
}

function discoverResults() {
  const list = filteredJobs();
  const hasFilters = Boolean(state.query || state.district !== "All districts" || state.jobType !== "All job types" || state.workMode !== "All work modes");
  return `<div class="filter-summary"><span>${hasFilters ? "Filters applied" : "Showing all opportunities"}</span>${hasFilters ? '<button type="button" data-clear>Clear all</button>' : ""}</div>
    <div class="results-heading"><strong>${list.length} ${list.length === 1 ? "job" : "jobs"} found</strong><span>Sorted by relevance</span></div>
    ${list.length
      ? `<div class="job-grid">${list.map((j) => jobCard(j, state.saved.includes(j.id))).join("")}</div>`
      : `<section class="panel no-results"><span>${ic("search")}</span><h2>No jobs match these filters</h2><p>Try another district, job type, or work mode.</p>${button("Clear filters", { variant: "secondary", attrs: "data-clear" })}</section>`}`;
}

const options = (all, list, current) =>
  [all, ...list].map((o) => `<option${o === current ? " selected" : ""}>${o}</option>`).join("");

/* ---------- Pages ---------- */
const pages = {
  "My applications": () => {
    const rows = APPLICATIONS.map(([role, company, status, date, tone], i) => `
      <div class="table-row">
        <span class="company-logo logo-${["blue", "purple", "cobalt", "teal"][i]}">${company.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
        <div><strong>${role}</strong><small>${company}</small></div>
        <span class="status-pill status-${tone}">${status}</span>
        <span class="date-cell">Applied ${date}</span>
        <button type="button" aria-label="View ${role}">${ic("chevron", 16)}</button>
      </div>`).join("");
    return header("Career pipeline", "My applications", "Track every opportunity and stay ready for your next step.", button("Find more jobs", { icon: "search", attrs: 'data-nav="Discover jobs"' }))
      + `<div class="tab-stats">${stat("briefcase", "8", "Total applications", "+2 this week", "blue")}${stat("users", "3", "Interviews", "1 upcoming", "green")}${stat("eye", "4", "In review", "Active", "purple")}</div>
      <section class="panel data-panel"><div class="panel-heading"><div><p class="eyebrow">Recent activity</p><h2>Application tracker</h2></div><span class="small-note">Updated today</span></div><div class="application-table">${rows}</div></section>`;
  },

  "Saved jobs": () => {
    const list = JOBS.filter((j) => state.saved.includes(j.id));
    return header("Your shortlist", "Saved jobs", `${list.length} demo opportunities saved for later.`, button("Explore jobs", { icon: "search", attrs: 'data-nav="Discover jobs"' }))
      + `<div class="filter-row"><button class="filter-chip active" type="button">All saved</button><button class="filter-chip" type="button">Recently added</button><button class="filter-chip" type="button">Closing soon</button></div>
      <div class="job-grid">${list.map((j) => jobCard(j, true)).join("")}</div>`;
  },

  "Discover jobs": () =>
    header("Explore opportunities", "Find your next role", "Fresh opportunities from trusted employers across Sri Lanka.")
    + `<section class="discovery-search panel">
        <label class="keyword-field">${ic("search")}<input id="f-query" value="${esc(state.query)}" placeholder="Job title, skill, or company"></label>
        <label><span>District</span><select id="f-district" aria-label="Sri Lankan district">${options("All districts", DISTRICTS, state.district)}</select></label>
        <label><span>Job type</span><select id="f-type" aria-label="Job type">${options("All job types", ["Full time", "Part time", "Internship", "Contract"], state.jobType)}</select></label>
        <label><span>Work mode</span><select id="f-mode" aria-label="Work mode">${options("All work modes", ["Remote", "Hybrid", "On-site"], state.workMode)}</select></label>
      </section>
      <div id="discover-results">${discoverResults()}</div>`,

  "My profile": () =>
    header("Professional profile", "My profile", "This is the information verified employers can see.", button("Edit profile", { variant: "secondary", attrs: 'data-toast="Profile editing is not part of this demo"' }))
    + `<div class="profile-page">
      <section class="panel profile-overview"><div class="profile-banner"></div>
        <div class="profile-intro"><div class="large-avatar">SY<span>${ic("check", 11)}</span></div><div><span class="member-badge">Open to opportunities</span><h2>Sandakalum Yatawara</h2><p>IT Undergraduate · Aspiring Software Developer</p><div class="profile-location">${ic("pin", 15)} Colombo, Sri Lanka</div></div></div>
        <div class="profile-bio"><p class="eyebrow">About me</p><p>Motivated IT undergraduate with a strong interest in building accessible, reliable web applications. Looking for an internship or entry-level software development role where I can learn, contribute, and grow with an experienced team.</p></div>
      </section>
      <aside class="panel contact-card"><p class="eyebrow">Contact information</p><h2>Profile details</h2><dl>
        <div><dt>Email</dt><dd>sandakalum.yatawara@example.com</dd></div><div><dt>Phone</dt><dd>+94 77 123 4567</dd></div><div><dt>Preferred role</dt><dd>Software Developer</dd></div><div><dt>Work preference</dt><dd>Hybrid or Remote</dd></div></dl></aside>
      <section class="panel profile-section"><div class="panel-heading"><div><p class="eyebrow">Capabilities</p><h2>Skills</h2></div></div>${chips(SKILLS)}</section>
      <section class="panel profile-section"><p class="eyebrow">Education</p><h2>Bachelor of Information Technology</h2><p class="profile-muted">Undergraduate · Expected graduation 2027</p><p>Coursework in software engineering, databases, web development, and computer networks.</p></section>
    </div>`,

  "My resume": () =>
    header("Career profile", "Resume manager", "Keep your experience current and ready for every application.", button("Upload new resume", { icon: "upload", attrs: "data-upload" }))
    + `<div class="resume-layout">
      <section class="panel resume-main">
        <div class="resume-preview"><span>${ic("file", 28)}</span><div><strong>${esc(state.cv)}</strong><small>PDF · 1.2 MB · Updated October 15, 2026</small></div><span class="success-dot">Primary</span></div>
        <div class="resume-score"><div class="score-ring">82<small>%</small></div><div><h2>Strong foundation</h2><p>Your resume is clear and relevant. Add one measurable project outcome to make it even stronger.</p></div></div>
        <div class="checklist"><span>${ic("check")} Contact-free public preview</span><span>${ic("check")} 8 relevant skills detected</span><span>${ic("check")} Education section complete</span><span class="pending">${ic("clock")} Add measurable project impact</span></div>
      </section>
      <aside class="panel skills-panel"><p class="eyebrow">Detected skills</p><h2>Your skills</h2>${chips(RESUME_SKILLS)}${button("Edit skills", { variant: "secondary", attrs: 'data-toast="Skill editing is not part of this demo"' })}</aside>
    </div>`,

  "Notifications": () =>
    header("Stay informed", "Notifications", "Application updates, job alerts, and useful account activity.", button("Mark all as read", { variant: "secondary", attrs: "data-readall" }))
    + `<section class="panel notification-list">${state.notices.map((n, i) => `
      <article class="${n.unread ? "notice unread" : "notice"}" data-read="${i}">
        <span class="notice-icon">${ic(n.icon)}</span><div><strong>${n.title}</strong><p>${n.copy}</p><small>${n.time}</small></div>${n.unread ? "<i></i>" : ""}
      </article>`).join("")}</section>`,

  "Settings": () => {
    const toggle = (label, note, checked) => `<label class="setting-toggle"><span><strong>${label}</strong><small>${note}</small></span><input type="checkbox"${checked ? " checked" : ""}><i></i></label>`;
    const heading = (icon, title, copy) => `<div class="settings-heading"><span>${ic(icon)}</span><div><h2>${title}</h2><p>${copy}</p></div></div>`;
    return header("Personal preferences", "Settings", "Control your experience, privacy, and notification preferences.")
      + `<div class="settings-layout">
        <section class="panel settings-card">${heading("sun", "Appearance", "Choose how Hela Jobs looks on this device.")}
          <div class="theme-options">
            <button class="${!state.dark ? "selected" : ""}" type="button" data-theme="light"><span class="theme-preview light-preview"></span><strong>Light</strong><small>Bright and clean</small></button>
            <button class="${state.dark ? "selected" : ""}" type="button" data-theme="dark"><span class="theme-preview dark-preview"></span><strong>Dark</strong><small>Easy on the eyes</small></button>
          </div></section>
        <section class="panel settings-card">${heading("bell", "Notifications", "Choose what you want to hear about.")}
          ${["Application status updates", "Interview reminders", "New job recommendations", "Weekly career digest"].map((l, i) => toggle(l, i < 2 ? "Recommended" : "Personalized for your interests", i < 3)).join("")}</section>
        <section class="panel settings-card">${heading("eye", "Profile visibility", "Manage how employers discover your profile.")}
          ${toggle("Open to opportunities", "Verified employers can discover your professional profile.", true)}</section>
      </div>`;
  },

  "Help center": () =>
    header("Support center", "How can we help?", "Find clear answers and guidance for your Hela Jobs journey.")
    + `<section class="help-search">${ic("search")}<input id="help-search" placeholder="Search help articles and common questions"></section>
      <div class="help-grid">${HELP_CARDS.map(([i, t, c]) => `<article class="panel help-card"><span>${ic(i)}</span><h2>${t}</h2><p>${c}</p><button type="button" data-toast="Help articles are not part of this demo">Browse articles ${ic("arrow", 15)}</button></article>`).join("")}</div>
      <section class="panel faq-panel"><p class="eyebrow">Popular questions</p><h2>Frequently asked</h2>${FAQS.map((q) => `<button type="button"><span>${q}</span>${ic("chevron")}</button>`).join("")}</section>`
};

function overview() {
  const recommended = JOBS.slice(0, 3).map((j) => jobCard(j, state.saved.includes(j.id))).join("");
  return `
  <section class="welcome"><div><p class="eyebrow">Job seeker dashboard</p><h1>Good morning, Sandakalum.</h1><p>Here’s what’s happening with your career journey today.</p></div>${button("Find a new job", { icon: "search", attrs: 'data-nav="Discover jobs"' })}</section>
  <section class="stats-grid" aria-label="Application statistics">
    ${stat("briefcase", "8", "Applications", "+2 this week", "blue")}${stat("eye", "24", "Profile views", "+18%", "purple")}${stat("bookmark", "12", "Saved jobs", "3 new matches", "gold")}${stat("users", "3", "Interviews", "1 upcoming", "green")}
  </section>
  <div class="dashboard-grid">
    <div class="primary-column">
      <section class="panel progress-panel">
        <div class="panel-heading"><div><p class="eyebrow">Your progress</p><h2>Application activity</h2></div><button class="text-action" type="button" data-nav="My applications">View all ${ic("arrow", 15)}</button></div>
        <div class="application-row">
          <div class="company-logo logo-blue">CC</div>
          <div class="application-info"><strong>Software Developer Intern</strong><span>CodeCraft Solutions · Colombo</span></div>
          <div class="timeline">
            <span class="timeline-step done"><i>${ic("check", 12)}</i><small>Applied</small></span><span class="timeline-line done"></span>
            <span class="timeline-step current"><i></i><small>Review</small></span><span class="timeline-line"></span>
            <span class="timeline-step"><i></i><small>Interview</small></span>
          </div>
          <span class="status-pill">In review</span>
        </div>
      </section>
      <section class="jobs-section">
        <div class="panel-heading"><div><p class="eyebrow">Picked for you</p><h2>Recommended jobs</h2></div><button class="text-action" type="button" data-nav="Discover jobs">Explore all ${ic("arrow", 15)}</button></div>
        <div class="job-list">${recommended}</div>
      </section>
    </div>
    <aside class="right-column">
      <section class="panel profile-card"><div class="profile-cover"></div>
        <div class="profile-body">
          <div class="large-avatar">SY<span>${ic("check", 11)}</span></div><span class="member-badge">Job seeker</span>
          <h2>Sandakalum Yatawara</h2><p>IT Undergraduate · Aspiring Software Developer</p>
          <div class="completion-row"><span>Profile completion</span><strong>78%</strong></div><div class="progress-track"><span></span></div>
          <p class="profile-tip">Add a portfolio project to stand out to employers.</p>
          ${button("View profile", { variant: "secondary", attrs: 'data-nav="My profile"' })}
        </div>
      </section>
      <section class="premium-card"><div class="premium-orb">${ic("sparkle")}</div><span class="premium-label">HelaJob Premium</span><h2>Put your profile in the spotlight.</h2>
        <p>See application insights, organize your search, and showcase your best work.</p>
        <ul><li>${ic("check", 15)} Enhanced profile</li><li>${ic("check", 15)} Application insights</li></ul>
        ${button("Explore Premium", { attrs: 'data-modal="premium"' })}<small>Essential job applications always stay free.</small>
      </section>
      <section class="panel resume-card">
        <div class="panel-heading"><div><p class="eyebrow">Resume</p><h2>Your resume</h2></div><span class="success-dot">Ready</span></div>
        <div class="resume-file"><span>${ic("file")}</span><div><strong>${esc(state.cv)}</strong><small>Updated 4 days ago · 1.2 MB</small></div><button type="button" aria-label="Upload a new resume" data-upload>${ic("upload")}</button></div>
      </section>
    </aside>
  </div>`;
}

/* ---------- Modal ---------- */
function modalHtml() {
  if (!state.modal) return "";
  const job = JOBS[0];
  const body = state.modal === "premium"
    ? `<div class="premium-modal"><span class="modal-icon gold">${ic("sparkle")}</span><p class="eyebrow">Premium membership</p>
        <h2>Accelerate your career, thoughtfully.</h2><p>Get better tools and richer insights without restricting essential opportunities for free members.</p>
        <div class="price"><strong>LKR 1,490</strong><span>/ month</span></div>
        <div class="feature-list"><span>${ic("check")} Enhanced profile and portfolio</span><span>${ic("check")} Application tracking insights</span><span>${ic("check")} Saved searches and priority alerts</span></div>
        ${button("Review subscription", { icon: "arrow", attrs: 'data-checkout' })}<small>Configurable demo price. No payment will be processed.</small></div>`
    : `<div class="job-modal"><div class="company-logo logo-cobalt large">LL</div><p class="eyebrow">${job.company} · Verified employer</p><h2>${job.role}</h2>
        <div class="job-meta"><span>${ic("pin", 14)} Colombo</span><span>Hybrid</span><span>Full time</span></div><hr>
        <h3>About the role</h3><p>Join a collaborative product team building accessible digital experiences for customers across Sri Lanka. You’ll work closely with senior engineers and designers while growing your frontend skills.</p>
        <div class="modal-actions">${button("Apply now", { attrs: "data-apply" })}${button("Save job", { variant: "secondary", attrs: 'data-save="1"' })}</div></div>`;
  return `<div class="modal-backdrop" role="presentation" data-backdrop>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${state.modal === "premium" ? "Premium membership" : "Job details"}">
      <button class="modal-close" type="button" aria-label="Close" data-close>${ic("close")}</button>${body}
    </section></div>`;
}

/* ---------- Layout / render ---------- */
function render() {
  const { dark, collapsed, mobileOpen, active } = state;
  const hasUnread = state.notices.some((n) => n.unread);
  const navBtn = (label, iconName, extra = "") =>
    `<button class="nav-item ${active === label ? "active" : ""}" type="button" data-nav="${label}">${ic(iconName)}<span class="nav-text">${label}</span>${extra}</button>`;

  document.documentElement.style.colorScheme = dark ? "dark" : "light";

  document.getElementById("root").innerHTML = `
  <div class="${dark ? "app dark" : "app"}">
    <aside class="sidebar ${collapsed ? "sidebar--collapsed" : ""} ${mobileOpen ? "sidebar--mobile-open" : ""}">
      <div class="brand-row">
        <button class="brand" type="button" aria-label="HelaJob home" data-nav="Overview">
          <span class="brand-mark"><img src="hela-jobs-logo.jpg" alt=""></span>
          <span class="brand-name"><span>හෙළ</span> Jobs<small>Your Career Partner</small></span>
        </button>
        <button class="close-mobile" type="button" aria-label="Close menu" data-mobile="close">${ic("close")}</button>
      </div>
      <nav aria-label="Dashboard navigation">
        <p class="nav-label">Workspace</p>
        ${NAV.map((n) => navBtn(n.label, n.icon, n.count ? `<span class="nav-count">${n.count}</span>` : "")).join("")}
        <p class="nav-label secondary-label">Account</p>
        ${navBtn("Notifications", "bell", hasUnread ? '<span class="unread-dot"></span>' : "")}
        ${navBtn("My profile", "users")}
        ${navBtn("Settings", "settings")}
        ${navBtn("Help center", "help")}
      </nav>
      <div class="premium-mini">
        <span class="premium-mini__icon">${ic("sparkle", 17)}</span>
        <div class="premium-mini__copy"><strong>Unlock Premium</strong><span>Get seen by top employers</span></div>
        <button type="button" aria-label="View premium" data-modal="premium">${ic("arrow", 16)}</button>
      </div>
      <button class="collapse-button" type="button" data-collapse>${ic("chevron")}<span>Collapse sidebar</span></button>
    </aside>

    <main class="main">
      <header class="topbar">
        <button class="mobile-menu" type="button" aria-label="Open menu" data-mobile="open">${ic("menu")}</button>
        <label class="global-search">${ic("search", 18)}<input id="global-search" aria-label="Search jobs and companies" placeholder="Search jobs, companies, or skills"><kbd>⌘ K</kbd></label>
        <div class="top-actions">
          <button class="theme-toggle" type="button" aria-label="Switch to ${dark ? "light" : "dark"} theme" title="Switch to ${dark ? "light" : "dark"} theme" data-theme-toggle>
            <span class="${!dark ? "selected" : ""}">${ic("sun", 16)}</span><span class="${dark ? "selected" : ""}">${ic("moon", 16)}</span>
          </button>
          <button class="notification-button" type="button" aria-label="Notifications" data-nav="Notifications">${ic("bell")}${hasUnread ? "<span></span>" : ""}</button>
          <button class="profile-menu" type="button" aria-label="View my profile" data-nav="My profile">
            <span class="avatar">SY</span><span class="profile-copy"><strong>Sandakalum Yatawara</strong><small>Job seeker</small></span>${ic("chevron", 15)}
          </button>
        </div>
      </header>
      <div class="content">${active === "Overview" ? overview() : pages[active]()}</div>
    </main>

    ${state.toast ? `<div class="toast" role="status"><span>${ic("check", 14)}</span>${state.toast}</div>` : ""}
    ${modalHtml()}
  </div>`;
}

/* ---------- Actions ---------- */
let toastTimer;
function showToast(message) {
  state.toast = message;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = ""; render(); }, 2600);
}

function setTheme(dark) {
  state.dark = dark;
  try { localStorage.setItem("hela-theme", dark ? "dark" : "light"); } catch (e) { /* ignore */ }
  render();
}

function go(label) {
  state.active = label;
  state.mobileOpen = false;
  render();
  window.scrollTo(0, 0);
}

function toggleSave(id) {
  const isSaved = state.saved.includes(id);
  state.saved = isSaved ? state.saved.filter((x) => x !== id) : [...state.saved, id];
  showToast(isSaved ? "Job removed from saved jobs" : "Job saved to your list");
  const again = document.querySelector(`[data-save="${id}"]`);
  if (again) again.focus({ preventScroll: true });
}

function clearFilters() {
  Object.assign(state, { query: "", district: "All districts", jobType: "All job types", workMode: "All work modes" });
  render();
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-nav],[data-save],[data-modal],[data-close],[data-backdrop],[data-theme],[data-theme-toggle],[data-collapse],[data-mobile],[data-clear],[data-readall],[data-read],[data-apply],[data-checkout],[data-toast],[data-upload]");
  if (!t) return;
  const d = t.dataset;

  if (t.hasAttribute("data-backdrop")) { if (e.target === t) { state.modal = null; render(); } return; }
  if ("nav" in d) return go(d.nav);
  if ("save" in d) return toggleSave(Number(d.save));
  if ("modal" in d) { state.modal = d.modal; return render(); }
  if ("close" in d) { state.modal = null; return render(); }
  if ("theme" in d) return setTheme(d.theme === "dark");
  if ("themeToggle" in d) return setTheme(!state.dark);
  if ("collapse" in d) { state.collapsed = !state.collapsed; return render(); }
  if ("mobile" in d) { state.mobileOpen = d.mobile === "open"; return render(); }
  if ("clear" in d) return clearFilters();
  if ("readall" in d) { state.notices.forEach((n) => (n.unread = false)); return render(); }
  if ("read" in d) { state.notices[Number(d.read)].unread = false; return render(); }
  if ("apply" in d) { state.modal = null; return showToast("Application started — your details are prefilled"); }
  if ("checkout" in d) { state.modal = null; return showToast("Demo checkout is ready to explore"); }
  if ("toast" in d) return showToast(d.toast);
  if ("upload" in d) return document.getElementById("resume-file").click();
});

/* Filters only refresh the results so the search box keeps focus while typing */
function refreshResults() {
  const box = document.getElementById("discover-results");
  if (box) box.innerHTML = discoverResults();
}

document.addEventListener("input", (e) => {
  if (e.target.id === "f-query") { state.query = e.target.value; refreshResults(); }
  if (e.target.id === "help-search") {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".faq-panel button").forEach((b) => { b.style.display = b.textContent.toLowerCase().includes(q) ? "" : "none"; });
  }
});

document.addEventListener("change", (e) => {
  const id = e.target.id;
  if (id === "f-district") state.district = e.target.value;
  else if (id === "f-type") state.jobType = e.target.value;
  else if (id === "f-mode") state.workMode = e.target.value;
  else if (id === "resume-file" && e.target.files[0]) {
    state.cv = e.target.files[0].name;
    e.target.value = "";
    return showToast("Resume uploaded");
  } else return;
  refreshResults();
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    const s = document.getElementById("global-search");
    if (s) s.focus();
  }
  if (e.key === "Enter" && e.target.id === "global-search") {
    state.query = e.target.value;
    Object.assign(state, { district: "All districts", jobType: "All job types", workMode: "All work modes" });
    go("Discover jobs");
  }
  if (e.key === "Escape" && (state.modal || state.mobileOpen)) { state.modal = null; state.mobileOpen = false; render(); }
});

render();
