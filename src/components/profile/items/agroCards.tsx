import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const statuses = {
  "Available to buy": "text-green-700 bg-green-50 ring-green-600/20",
  "In progress": "text-yellow-600 bg-yellow-50 ring-yellow-500/10",
  Closed: "text-red-800 bg-red-200 ring-red-600/20",
};
const projects = [
  {
    id: 1,
    name: "Plot 1",
    href: "#",
    status: "Available to buy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Plot 2",
    href: "#",
    status: "In progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Plot 3",
    href: "#",
    status: "In progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Plot 4",
    href: "#",
    status: "In progress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Plot 5",
    href: "#",
    status: "Closed",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="mx-5 md:mx-20">
      <ul role="list" className="divide-y divide-white/10">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-50">
                  {project.name}
                </p>
                <p
                  className={classNames(
                    statuses[project.status],
                    "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {project.status}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">{project.description}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href="/marketplace/plot/123"
                className="mb-10 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset hover:bg-indigo-500 sm:block md:mb-auto"
              >
                View plot<span className="sr-only">, {project.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
