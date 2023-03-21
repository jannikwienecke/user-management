import {
  UserIcon,
  FolderIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export const PROJECTS = [
  {
    id: 1,
    name: "Workflow Inc. / Website Redesign",
    category: "Projects",
    url: "#",
  },
  {
    id: 2,
    name: "Workflow 2222. / Website Redesign",
    category: "Projects",
    url: "#",
  },
  // More projects...
];

export const USERS = [
  {
    id: 1,
    name: "Leslie Alexander",
    url: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More users...
];

export const COMMANDS = [
  {
    label: "Show users",
    app: "User Management",
    icon: UserIcon,
    description: "Show all users",
    type: "command",
  },
  {
    label: "Show Projects",
    app: "Project Management",
    icon: FolderIcon,
    description: "Show all projects",
    type: "command",
    shortcut: ["⌘", "P"],
  },
  {
    label: "Change to Dark Mode",
    app: "System",
    icon: ExclamationTriangleIcon,
    description: "Toggle to enable dark mode",
    type: "command",
    shortcut: ["⌘", "D"],
  },
];
