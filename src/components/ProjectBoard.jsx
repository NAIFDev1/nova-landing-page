import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Plus,
  X,
  Search,
  List,
  LayoutGrid,
  Check,
  Circle,
  ChevronDown,
  ArrowUpRight,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { STATUSES, TEAMS } from "../data/workspace";

export function Person({ name, label = true }) {
  return (
    <span className="person">
      <span className={`person-avatar person-${name.toLowerCase()}`}>
        {name[0]}
      </span>
      {label && <span>{name}</span>}
    </span>
  );
}

function TaskCard({ task, onStatus, list, reduced }) {
  const done = task.status === "Done";
  return (
    <motion.article
      layout={!reduced}
      transition={{ duration: reduced ? 0 : 0.22 }}
      className={`work-task ${list ? "is-list" : ""}`}
    >
      <button
        className="work-task-heading task-toggle"
        aria-label={`${done ? "Reopen" : "Complete"} ${task.title}`}
        aria-pressed={done}
        onClick={() => onStatus(task.id, done ? "Ready" : "Done")}
      >
        <span className={`complete-task ${done ? "is-complete" : ""}`}>
          {done ? <Check size={13} /> : <Circle size={16} />}
        </span>
        <span className={`work-task-title ${done ? "completed-title" : ""}`}>
          {task.title}
        </span>
      </button>
      <span className="work-task-category">{task.category}</span>
      <div className="work-task-footer">
        <Person name={task.owner} />
        <span className="due-day">{task.day}</span>
      </div>
      <div className="task-state">
        <label className="sr-only" htmlFor={`status-${task.id}`}>
          Status of {task.title}
        </label>
        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) => onStatus(task.id, event.target.value)}
        >
          {STATUSES.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
        <ChevronDown size={12} aria-hidden="true" />
      </div>
    </motion.article>
  );
}

export default function ProjectBoard({
  team,
  tasks,
  onStatus,
  onAdd,
  onReset,
  storageAvailable,
}) {
  const [view, setView] = useState("board");
  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("Everyone");
  const [mobileStatus, setMobileStatus] = useState("Ready");
  const [composer, setComposer] = useState(false);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("Maya");
  const [day, setDay] = useState("Fri");
  const [error, setError] = useState("");
  const taskInput = useRef(null);
  const heading = useRef(null);
  const reduced = useReducedMotion();
  const finished = tasks.filter((task) => task.status === "Done").length;
  const progress = Math.round((finished / tasks.length) * 100) || 0;
  const filtered = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (ownerFilter === "Everyone" || task.owner === ownerFilter),
  );
  const filtering = Boolean(search || ownerFilter !== "Everyone");
  const next =
    tasks.find((task) => task.status === "In progress") ||
    tasks.find((task) => task.status === "Ready");
  useEffect(() => {
    if (composer) taskInput.current?.focus();
  }, [composer]);
  function submit(event) {
    event.preventDefault();
    if (tasks.length >= 60) {
      setError(
        "This project has reached its 60-task demo limit. Reset the project to start fresh.",
      );
      return;
    }
    if (!name.trim()) {
      setError("Add a task name first.");
      taskInput.current?.focus();
      return;
    }
    onAdd({ title: name.trim(), owner, day });
    setSearch("");
    setOwnerFilter("Everyone");
    setMobileStatus("Ready");
    setName("");
    setError("");
    setComposer(false);
    heading.current?.focus();
  }
  function clearFilters() {
    setSearch("");
    setOwnerFilter("Everyone");
  }
  return (
    <>
      <div className="project-title-row">
        <div>
          <h1 ref={heading} tabIndex={-1}>
            {TEAMS[team].title}
          </h1>
          <p>{TEAMS[team].description}</p>
        </div>
        <button
          className="primary-action"
          aria-expanded={composer}
          aria-controls="task-composer"
          disabled={tasks.length >= 60}
          onClick={() => {
            setComposer(!composer);
            setError("");
          }}
        >
          {composer ? <X size={17} /> : <Plus size={17} />}
          {composer ? "Cancel" : "New task"}
        </button>
      </div>
      <div className="project-context">
        <div className="project-note">
          <span className="project-glyph" aria-hidden="true">
            <ArrowUpRight />
          </span>
          <div>
            <p>
              {team === "Product"
                ? "A launch worth getting together for."
                : team === "Design"
                  ? "A fresh look, from first idea to final file."
                  : "A good first week starts with a clear plan."}
            </p>
            <span>
              {next
                ? `Up next: ${next.title}`
                : "Every task is complete. Take a breath."}
            </span>
          </div>
        </div>
        <div className="project-completion">
          <div>
            <span>Project progress</span>
            <span className="completion-number">{progress}%</span>
          </div>
          <div
            className="completion-track"
            role="progressbar"
            aria-label="Project completion"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <motion.span
              initial={false}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
            />
          </div>
          <p>
            {finished} of {tasks.length} tasks complete
          </p>
        </div>
        <div className="project-people">
          <span>The team</span>
          <div>
            {["Maya", "Alex", "Sam"].map((person) => (
              <Person key={person} name={person} label={false} />
            ))}
          </div>
          <p>Maya, Alex & Sam</p>
        </div>
      </div>
      <div className="project-tools">
        <div className="board-view-tabs" role="group" aria-label="Task view">
          <button
            aria-label="Board view"
            aria-pressed={view === "board"}
            onClick={() => setView("board")}
          >
            <LayoutGrid size={16} />
            Board
          </button>
          <button
            aria-label="List view"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            <List size={17} />
            List
          </button>
        </div>
        <div className="task-filters">
          <div className="project-search">
            <Search size={15} aria-hidden="true" />
            <label htmlFor="task-search" className="sr-only">
              Search tasks in this project
            </label>
            <input
              id="task-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Find a task"
              type="search"
            />
          </div>
          <label className="owner-filter">
            <SlidersHorizontal size={14} aria-hidden="true" />
            <span className="sr-only">Filter by owner</span>
            <select
              value={ownerFilter}
              onChange={(event) => setOwnerFilter(event.target.value)}
            >
              {["Everyone", "Maya", "Alex", "Sam"].map((person) => (
                <option key={person}>{person}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      {composer && (
        <form
          id="task-composer"
          className="new-task-form"
          onSubmit={submit}
          noValidate
        >
          <div className="new-task-title">
            <label htmlFor="new-task-name">Task name</label>
            <input
              id="new-task-name"
              ref={taskInput}
              value={name}
              maxLength={100}
              placeholder="Something worth doing…"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "task-error" : undefined}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
            />
            {error && (
              <p id="task-error" role="alert">
                {error}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="new-task-owner">Owner</label>
            <select
              id="new-task-owner"
              value={owner}
              onChange={(event) => setOwner(event.target.value)}
            >
              {["Maya", "Alex", "Sam"].map((person) => (
                <option key={person}>{person}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="new-task-day">Due day</label>
            <select
              id="new-task-day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
            >
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((date) => (
                <option key={date}>{date}</option>
              ))}
            </select>
          </div>
          <button className="dark-action" type="submit">
            Add task <Plus size={15} />
          </button>
        </form>
      )}
      {tasks.length >= 60 && (
        <p className="capacity-note">
          This demo supports 60 tasks per project. Reset this project to start
          fresh.
        </p>
      )}
      {filtering && (
        <div className="filter-result">
          <span>
            {filtered.length} of {tasks.length} tasks match
          </span>
          <button onClick={clearFilters}>
            Clear filters <X size={13} />
          </button>
        </div>
      )}
      {view === "board" && (
        <div
          className="phone-status-tabs"
          role="group"
          aria-label="Visible task status"
        >
          {STATUSES.map((status, index) => (
            <button
              key={status}
              aria-pressed={mobileStatus === status}
              aria-controls={`studio-column-${index}`}
              onClick={() => setMobileStatus(status)}
            >
              {status}
              <span>
                {filtered.filter((task) => task.status === status).length}
              </span>
            </button>
          ))}
        </div>
      )}
      {!filtered.length ? (
        <div className="no-tasks">
          <Search size={24} />
          <h2>No tasks found.</h2>
          <p>Try another name or choose a different owner.</p>
          <button className="secondary-action" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className={view === "board" ? "project-board" : "project-list"}>
          {view === "board" ? (
            STATUSES.map((status, index) => (
              <section
                id={`studio-column-${index}`}
                key={status}
                className={`task-lane ${mobileStatus === status ? "phone-visible" : ""}`}
                aria-label={`${status} tasks`}
              >
                <div className="lane-heading">
                  <h2>
                    <span className={`lane-dot lane-${index}`} />
                    {status}
                  </h2>
                  <span>
                    {filtered.filter((task) => task.status === status).length}
                  </span>
                </div>
                <div className="lane-tasks">
                  {filtered
                    .filter((task) => task.status === status)
                    .map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onStatus={onStatus}
                        reduced={reduced}
                      />
                    ))}
                  {!filtered.some((task) => task.status === status) && (
                    <p className="empty-lane">
                      {status === "Done"
                        ? "The next small win goes here."
                        : status === "Ready"
                          ? "Everything is moving along."
                          : "A little breathing room."}
                    </p>
                  )}
                </div>
                <button
                  className="lane-add"
                  disabled={tasks.length >= 60}
                  onClick={() => setComposer(true)}
                >
                  <Plus size={15} />
                  Add a task
                </button>
              </section>
            ))
          ) : (
            <>
              <div className="list-head">
                <span>Task</span>
                <span>Category</span>
                <span>Owner / due</span>
                <span>Status</span>
              </div>
              {filtered.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onStatus={onStatus}
                  list
                  reduced={reduced}
                />
              ))}
            </>
          )}
        </div>
      )}
      <div className="project-footnote">
        <span>
          {storageAvailable
            ? "Saved on this device"
            : "Storage unavailable — changes last for this visit"}
        </span>
        <button
          onClick={() => {
            onReset();
            clearFilters();
            setComposer(false);
          }}
        >
          <RotateCcw size={13} />
          Reset this project
        </button>
      </div>
    </>
  );
}
