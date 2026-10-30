export const STATUSES = ["Ready", "In progress", "Done"];
export const TEAMS = {
  Product: {
    title: "Website launch",
    description: "A small team. One big next step.",
    tasks: [
      {
        id: "p1",
        title: "Map the new site",
        owner: "Maya",
        day: "Mon",
        status: "Done",
        category: "Planning",
      },
      {
        id: "p2",
        title: "Write the homepage story",
        owner: "Alex",
        day: "Tue",
        status: "Done",
        category: "Content",
      },
      {
        id: "p3",
        title: "Build the product page",
        owner: "Sam",
        day: "Wed",
        status: "In progress",
        category: "Development",
      },
      {
        id: "p4",
        title: "Make the mobile details sing",
        owner: "Maya",
        day: "Thu",
        status: "In progress",
        category: "Design",
      },
      {
        id: "p5",
        title: "Review with the whole team",
        owner: "Alex",
        day: "Thu",
        status: "Ready",
        category: "Review",
      },
      {
        id: "p6",
        title: "Put something good out there",
        owner: "Sam",
        day: "Fri",
        status: "Ready",
        category: "Launch",
      },
    ],
  },
  Design: {
    title: "Brand refresh",
    description: "Good ideas, taking shape together.",
    tasks: [
      {
        id: "d1",
        title: "Collect references worth keeping",
        owner: "Maya",
        day: "Mon",
        status: "Done",
        category: "Research",
      },
      {
        id: "d2",
        title: "Find the right color story",
        owner: "Alex",
        day: "Tue",
        status: "In progress",
        category: "Identity",
      },
      {
        id: "d3",
        title: "Give the wordmark some character",
        owner: "Maya",
        day: "Wed",
        status: "In progress",
        category: "Typography",
      },
      {
        id: "d4",
        title: "Test it in the real world",
        owner: "Sam",
        day: "Thu",
        status: "Ready",
        category: "Review",
      },
      {
        id: "d5",
        title: "Wrap up the brand toolkit",
        owner: "Alex",
        day: "Fri",
        status: "Ready",
        category: "Delivery",
      },
    ],
  },
  Operations: {
    title: "A better onboarding",
    description: "Make the first week feel like home.",
    tasks: [
      {
        id: "o1",
        title: "Ask the team what is missing",
        owner: "Alex",
        day: "Mon",
        status: "Done",
        category: "Discovery",
      },
      {
        id: "o2",
        title: "Rewrite the welcome guide",
        owner: "Sam",
        day: "Tue",
        status: "Done",
        category: "Documentation",
      },
      {
        id: "o3",
        title: "Set up the first-week checklist",
        owner: "Maya",
        day: "Wed",
        status: "In progress",
        category: "Planning",
      },
      {
        id: "o4",
        title: "Give the new process a trial run",
        owner: "Alex",
        day: "Thu",
        status: "Ready",
        category: "Review",
      },
      {
        id: "o5",
        title: "Share it with every team lead",
        owner: "Sam",
        day: "Fri",
        status: "Ready",
        category: "Delivery",
      },
    ],
  },
};
export const FAQS = [
  [
    "What is NOVA?",
    "NOVA is a concept for a shared project workspace: tasks, owners, and the next step in one place. This site is a portfolio project by Naif, and the projects and people shown here are fictional.",
  ],
  [
    "Can I actually try it?",
    "Yes. Add a task, change its status, switch between the board and list, or explore a different team. The workspace is a working frontend demo. There is no account to create or software to install.",
  ],
  [
    "Where do my changes go?",
    "Your demo tasks are saved in this browser only. They are not sent to a server or shared with anyone. Reset the workspace to restore the sample projects. If browser storage is unavailable, you can still use the demo for this visit.",
  ],
  [
    "Are these real subscriptions?",
    "No. Starter, Pro, and Enterprise illustrate how NOVA could be priced. Plan buttons open the demo workspace; they do not create an account, start a subscription, or charge you.",
  ],
  [
    "Does it work on my phone?",
    "Yes. The board becomes a readable stack on smaller screens. Tasks can be updated with a standard status selector, so you never need to drag a card or use a mouse. Reduced motion and keyboard navigation are supported.",
  ],
];
export function initialProjects() {
  return Object.fromEntries(
    Object.entries(TEAMS).map(([name, team]) => [
      name,
      team.tasks.map((task) => ({ ...task })),
    ]),
  );
}
export function validProjects(value) {
  return (
    value &&
    Object.keys(TEAMS).every(
      (key) =>
        Array.isArray(value[key]) &&
        value[key].length > 0 &&
        value[key].length <= 60 &&
        value[key].every(
          (task) =>
            task &&
            typeof task.id === "string" &&
            typeof task.title === "string" &&
            task.title.length <= 100 &&
            ["Maya", "Alex", "Sam"].includes(task.owner) &&
            STATUSES.includes(task.status) &&
            ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(task.day) &&
            typeof task.category === "string",
        ),
    )
  );
}
