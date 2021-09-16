export interface Tag {
  label: string;
  tag: string;
  path: string;
}

export const tags: Tag[] = [
  {
    label: "ALL",
    tag: "all",
    path: "/blog?tag=all",
  },
  {
    label: "React",
    tag: "react",
    path: "/blog?tag=react",
  },
  {
    label: "Node.js",
    tag: "node",
    path: "/blog?tag=node",
  },
  {
    label: "Next.js",
    tag: "next",
    path: "/blog?tag=next",
  },
  {
    label: "Nest.js",
    tag: "nest",
    path: "/blog?tag=nest",
  },
  {
    label: "Docker",
    tag: "docker",
    path: "/blog?tag=docker",
  },
  {
    label: "Database",
    tag: "database",
    path: "/blog?tag=database",
  },
  {
    label: "Dotnet",
    tag: "dotnet",
    path: "/blog?tag=dotnet",
  },
  {
    label: "UXUI",
    tag: "uxui",
    path: "/blog?tag=uxui",
  },
  {
    label: "Database",
    tag: "crypto",
    path: "/blog?tag=crypto",
  },
];
