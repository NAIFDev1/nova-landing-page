import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Folder,
  FolderOpen,
  LayoutGrid,
  CreditCard,
  BookOpen,
  Github,
  Menu,
  X,
  ChevronRight,
  Check,
} from "lucide-react";
import { TEAMS, FAQS, initialProjects, validProjects } from "./data/workspace";
import ProjectBoard from "./components/ProjectBoard";

const STORAGE_KEY = "nova-workspace-v2";
const SOURCE = "https://github.com/NAIFDev1/nova-landing-page";
const routeToTeam = {
  product: "Product",
  design: "Design",
  operations: "Operations",
};
const teamToRoute = {
  Product: "product",
  Design: "design",
  Operations: "operations",
};
function readRoute() {
  const route = window.location.hash.replace(/^#\/?/, "");
  return ["projects", "plans", "guide", ...Object.keys(routeToTeam)].includes(
    route,
  )
    ? route
    : "product";
}
function Brand() {
  return (
    <span className="studio-brand">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 26V6h6l10 12V6h6v20h-6L11 14v12H5Z" fill="currentColor" />
      </svg>
      nova<span className="brand-studio">studio</span>
    </span>
  );
}

function Navigation({ route, projects, onNavigate }) {
  const total = Object.values(projects)
    .flat()
    .filter((task) => task.status !== "Done").length;
  return (
    <>
      <a
        href="#/projects"
        className="brand-link"
        aria-label="NOVA Studio projects"
        onClick={onNavigate}
      >
        <Brand />
      </a>
      <div className="workspace-identity">
        <span className="workspace-initial">S</span>
        <div>
          <strong>Studio workspace</strong>
          <span>Personal demo</span>
        </div>
      </div>
      <nav aria-label="Workspace navigation">
        <a
          className={route === "projects" ? "nav-item is-active" : "nav-item"}
          href="#/projects"
          aria-current={route === "projects" ? "page" : undefined}
          onClick={onNavigate}
        >
          <LayoutGrid size={17} />
          All projects<span className="nav-count">3</span>
        </a>
        <p className="nav-section-title">Your projects</p>
        {Object.entries(TEAMS).map(([team, project]) => (
          <a
            key={team}
            className={
              route === teamToRoute[team]
                ? "nav-item project-nav is-active"
                : "nav-item project-nav"
            }
            href={`#/${teamToRoute[team]}`}
            aria-current={route === teamToRoute[team] ? "page" : undefined}
            onClick={onNavigate}
          >
            {route === teamToRoute[team] ? (
              <FolderOpen size={17} />
            ) : (
              <Folder size={17} />
            )}
            <span>{project.title}</span>
          </a>
        ))}
        <p className="nav-section-title">Explore NOVA</p>
        <a
          href="#/plans"
          onClick={onNavigate}
          aria-current={route === "plans" ? "page" : undefined}
          className={`nav-item ${route === "plans" ? "is-active" : ""}`}
        >
          <CreditCard size={17} />
          Plans & pricing
        </a>
        <a
          href="#/guide"
          onClick={onNavigate}
          aria-current={route === "guide" ? "page" : undefined}
          className={`nav-item ${route === "guide" ? "is-active" : ""}`}
        >
          <BookOpen size={17} />
          Field guide
        </a>
      </nav>
      <div className="sidebar-bottom">
        <div className="workspace-mini-progress">
          <span>A little closer to done.</span>
          <p>{total} open tasks across your projects.</p>
        </div>
        <a className="nav-item" href={SOURCE} target="_blank" rel="noreferrer">
          <Github size={17} />
          View source
          <ArrowUpRight size={14} />
        </a>
        <a
          className="maker-link"
          href="https://naif-portfolio.naifalghamdi.workers.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="maker-avatar">N</span>
          <span>
            Built by Naif<small>Frontend & interface design</small>
          </span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </>
  );
}

function Projects({ projects, onOpen }) {
  const all = Object.values(projects).flat(),
    completed = all.filter((task) => task.status === "Done").length;
  return (
    <>
      <div className="screen-heading">
        <div>
          <h1 tabIndex={-1}>All projects</h1>
          <p>A little structure for everything you're making.</p>
        </div>
        <span className="screen-summary">
          {completed} of {all.length} tasks complete
        </span>
      </div>
      <div className="projects-intro">
        <p>
          Good work has
          <br />a place to start.
        </p>
        <div>
          <span className="intro-arrow" aria-hidden="true">
            <ArrowUpRight size={44} />
          </span>
          <span>
            Three teams. Three plans.
            <br />
            Room to make them your own.
          </span>
        </div>
      </div>
      <div className="project-index-head">
        <span>Project</span>
        <span>Team</span>
        <span>Progress</span>
        <span>Open</span>
      </div>
      <div className="project-index">
        {Object.entries(TEAMS).map(([team, project]) => {
          const tasks = projects[team],
            done = tasks.filter((task) => task.status === "Done").length;
          return (
            <button
              key={team}
              className="project-index-row"
              onClick={() => onOpen(teamToRoute[team])}
            >
              <span className="project-index-name">
                <Folder size={25} />
                <span>
                  {project.title}
                  <small>{project.description}</small>
                </span>
              </span>
              <span className="project-team-label">{team}</span>
              <span className="project-index-progress">
                <span>
                  {done} / {tasks.length} done
                </span>
                <span className="index-track">
                  <span
                    style={{
                      width: `${Math.round((done / tasks.length) * 100)}%`,
                    }}
                  />
                </span>
              </span>
              <ArrowUpRight size={21} />
            </button>
          );
        })}
      </div>
      <div className="concept-note">
        <span className="concept-dot" />
        This is a working concept. Your edits stay in this browser, and all
        projects and people are fictional.
      </div>
    </>
  );
}

function Plans({ onPreview }) {
  const [billing, setBilling] = useState("yearly");
  const plans = [
    {
      name: "Starter",
      price: 0,
      description: "A home for your next idea.",
      features: [
        "3 workspaces",
        "Unlimited tasks",
        "Basic analytics",
        "Personal automations",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: billing === "yearly" ? 15 : 19,
      description: "For the work you do together.",
      features: [
        "Unlimited workspaces",
        "Real-time collaboration",
        "Advanced analytics",
        "Unlimited integrations",
        "Advanced automations",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "A bigger team. A plan of its own.",
      features: [
        "Everything in Pro",
        "SSO & SCIM provisioning",
        "Granular permissions",
        "Audit logs & SLA",
        "Dedicated success manager",
      ],
    },
  ];
  return (
    <>
      <div className="screen-heading">
        <div>
          <h1 tabIndex={-1}>Room for your team</h1>
          <p>
            Simple concept plans, from the first idea to the bigger picture.
          </p>
        </div>
        <div
          className="billing-options"
          role="group"
          aria-label="Billing period"
        >
          <button
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            aria-pressed={billing === "yearly"}
            onClick={() => setBilling("yearly")}
          >
            Yearly <span>−21%</span>
          </button>
        </div>
      </div>
      <div className="plans-demo-note">
        <span>Just exploring?</span> Every plan opens the same working demo. No
        payment or account required.
      </div>
      <div className="studio-plans">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`studio-plan ${plan.name === "Pro" ? "recommended-plan" : ""}`}
          >
            <div className="plan-top">
              <h2>{plan.name}</h2>
              {plan.name === "Pro" && <span>Team favorite</span>}
            </div>
            <p className="plan-description">{plan.description}</p>
            <div className="studio-price">
              {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
            </div>
            <p className="price-period">
              {plan.name === "Enterprise"
                ? "Tailored to your organization"
                : plan.name === "Starter"
                  ? "Free, per user"
                  : `per user / month · ${billing === "yearly" ? "$180 billed yearly" : "billed monthly"}`}
            </p>
            <button
              className={
                plan.name === "Pro" ? "primary-action" : "secondary-action"
              }
              onClick={() => onPreview(plan.name)}
            >
              Explore {plan.name}
              <ArrowUpRight size={16} />
            </button>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="plan-details">
        <h2>A clear starting point.</h2>
        <p>
          These prices illustrate a fictional product. There are no
          subscriptions behind this page. The workspace lets you explore task
          planning, team ownership, and progress with your own changes.
        </p>
        <a href="#/guide">
          Read the field guide
          <ArrowRight size={16} />
        </a>
      </section>
    </>
  );
}

function Guide({ onOpen }) {
  return (
    <>
      <div className="screen-heading">
        <div>
          <h1 tabIndex={-1}>The field guide</h1>
          <p>A few things to know. Then make yourself at home.</p>
        </div>
        <button className="secondary-action" onClick={() => onOpen("product")}>
          Open a project
          <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="guide-layout">
        <section className="guide-start">
          <div className="guide-symbol" aria-hidden="true">
            <BookOpen size={38} />
          </div>
          <h2>
            A small place
            <br />
            for good work.
          </h2>
          <p>
            NOVA brings a project's tasks, owners, and next steps into one
            shared view. This version puts the workspace in your hands.
          </p>
          <dl>
            <div>
              <dt>Make it yours</dt>
              <dd>Add a task with an owner and a due day.</dd>
            </div>
            <div>
              <dt>Move it forward</dt>
              <dd>Use the status selector or mark a task complete.</dd>
            </div>
            <div>
              <dt>Find your focus</dt>
              <dd>Search, filter by owner, or switch to a list.</dd>
            </div>
          </dl>
          <button className="dark-action" onClick={() => onOpen("product")}>
            Try it for yourself
            <ArrowRight size={16} />
          </button>
        </section>
        <section className="studio-faq" aria-label="Frequently asked questions">
          {FAQS.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <PlusMark />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
      </div>
    </>
  );
}
function PlusMark() {
  return (
    <span className="disclosure-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Studio() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return validProjects(saved) ? saved : initialProjects();
    } catch {
      return initialProjects();
    }
  });
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const drawer = useRef(null),
    menuButton = useRef(null),
    main = useRef(null);
  const restoreDrawerFocus = useRef(true);
  const previousRoute = useRef(route);
  const team = routeToTeam[route] || "Product";
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
  }, [projects]);
  useEffect(() => {
    const changed = () => {
      setRoute(readRoute());
      setAnnouncement("");
      window.scrollTo({ top: 0, behavior: "instant" });
      restoreDrawerFocus.current = false;
      drawer.current?.close();
      setMenuOpen(false);
    };
    window.addEventListener("hashchange", changed);
    return () => window.removeEventListener("hashchange", changed);
  }, []);
  useEffect(() => {
    document.title = `NOVA Studio — ${routeToTeam[route] ? TEAMS[team].title : route === "plans" ? "Plans & pricing" : route === "guide" ? "Field guide" : "All projects"}`;
  }, [route, team]);
  useEffect(() => {
    if (previousRoute.current === route) return;
    previousRoute.current = route;
    const frame = requestAnimationFrame(() =>
      main.current?.querySelector("h1")?.focus({ preventScroll: true }),
    );
    return () => cancelAnimationFrame(frame);
  }, [route]);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = matchMedia("(min-width: 901px)");
    const resize = () => {
      if (media.matches) {
        drawer.current?.close();
        setMenuOpen(false);
      }
    };
    media.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", resize);
    };
  }, [menuOpen]);
  function navigate(next) {
    if (readRoute() === next) {
      restoreDrawerFocus.current = false;
      drawer.current?.close();
      setMenuOpen(false);
      requestAnimationFrame(() =>
        main.current?.querySelector("h1")?.focus({ preventScroll: true }),
      );
    }
    window.location.hash = `/${next}`;
  }
  function closeDrawer() {
    restoreDrawerFocus.current = true;
    drawer.current?.close();
    setMenuOpen(false);
  }
  function openMenu() {
    restoreDrawerFocus.current = true;
    drawer.current?.showModal();
    setMenuOpen(true);
  }
  function changeStatus(id, status) {
    const title = projects[team].find((task) => task.id === id)?.title;
    setProjects((current) => ({
      ...current,
      [team]: current[team].map((task) =>
        task.id === id ? { ...task, status } : task,
      ),
    }));
    setAnnouncement(`${title} moved to ${status}.`);
  }
  function addTask(task) {
    if (projects[team].length >= 60) {
      setAnnouncement("This project has reached the demo limit of 60 tasks.");
      return;
    }
    setProjects((current) => ({
      ...current,
      [team]: [
        ...current[team],
        {
          ...task,
          id: crypto.randomUUID?.() || `task-${Date.now()}`,
          status: "Ready",
          category: "Your task",
        },
      ],
    }));
    setAnnouncement(`Added ${task.title} to ${TEAMS[team].title}.`);
  }
  function resetProject() {
    setProjects((current) => ({ ...current, [team]: initialProjects()[team] }));
    setAnnouncement(`${TEAMS[team].title} restored to its sample tasks.`);
  }
  function previewPlan(plan) {
    navigate("product");
    window.setTimeout(
      () =>
        setAnnouncement(
          `${plan} preview opened. This is a local demo; no subscription was created.`,
        ),
      40,
    );
  }
  return (
    <div className="nova-studio">
      <a
        className="skip-content"
        href="#studio-main"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to workspace
      </a>
      <aside className="studio-sidebar">
        <Navigation route={route} projects={projects} />
      </aside>
      <header className="mobile-app-bar">
        <a href="#/projects" aria-label="NOVA Studio projects">
          <Brand />
        </a>
        <span className="mobile-demo-tag">Demo</span>
        <button
          ref={menuButton}
          aria-label="Open navigation"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={openMenu}
        >
          <Menu size={21} />
        </button>
      </header>
      <dialog
        id="mobile-navigation"
        ref={drawer}
        className="mobile-navigation"
        onClose={() => {
          setMenuOpen(false);
          if (restoreDrawerFocus.current) menuButton.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDrawer();
        }}
      >
        <div className="drawer-content">
          <button
            className="drawer-close"
            aria-label="Close navigation"
            onClick={closeDrawer}
          >
            <X size={21} />
          </button>
          <Navigation
            route={route}
            projects={projects}
            onNavigate={(event) => {
              restoreDrawerFocus.current = false;
              drawer.current?.close();
              setMenuOpen(false);
              if (event.currentTarget.hash === window.location.hash) {
                requestAnimationFrame(() =>
                  main.current
                    ?.querySelector("h1")
                    ?.focus({ preventScroll: true }),
                );
              }
            }}
          />
        </div>
      </dialog>
      <main className="studio-main" id="studio-main" ref={main} tabIndex={-1}>
        <div className="studio-topline">
          <div>
            <span>Workspace</span>
            <ChevronRight size={13} />
            <span>
              {routeToTeam[route]
                ? team
                : route === "plans"
                  ? "Plans & pricing"
                  : route === "guide"
                    ? "Field guide"
                    : "All projects"}
            </span>
          </div>
          <div>
            <span className="concept-status">
              <span />
              Interactive concept
            </span>
            <a href="#/guide" aria-label="About this demo">
              <BookOpen size={16} />
            </a>
          </div>
        </div>
        <div className="studio-content">
          {routeToTeam[route] ? (
            <ProjectBoard
              key={team}
              team={team}
              tasks={projects[team]}
              onStatus={changeStatus}
              onAdd={addTask}
              onReset={resetProject}
              storageAvailable={storageAvailable}
            />
          ) : route === "plans" ? (
            <Plans onPreview={previewPlan} />
          ) : route === "guide" ? (
            <Guide onOpen={navigate} />
          ) : (
            <Projects projects={projects} onOpen={navigate} />
          )}
        </div>
        <div className="studio-statusbar">
          <span className="save-status">
            <span />
            {storageAvailable
              ? "Local demo · changes saved in this browser"
              : "Storage unavailable · changes last for this visit"}
          </span>
          <span role="status" aria-live="polite">
            {announcement || "Fictional projects. Real interactions."}
          </span>
        </div>
      </main>
    </div>
  );
}
