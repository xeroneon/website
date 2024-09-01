import React from "react";
import { PiArrowRight } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

const projects = [
  {
    title: "Crystal Collector",
    description: "My first game I made during bootcamp using HTML, CSS, and JS",
    tagline: "a game I made",
    image: "crystal-collector.png",
    url: "https://xeroneon.github.io/unit-4-game/",
  },
  {
    title: "Crystal Collector",
    description: "My first game I made during bootcamp using HTML, CSS, and JS",
    tagline: "a game I made",
    image: "crystal-collector.png",
    url: "https://xeroneon.github.io/unit-4-game/",
  },
  {
    title: "Crystal Collector",
    description: "My first game I made during bootcamp using HTML, CSS, and JS",
    tagline: "a game I made",
    image: "crystal-collector.png",
    url: "https://xeroneon.github.io/unit-4-game/",
  },
  {
    title: "Crystal Collector",
    description: "My first game I made during bootcamp using HTML, CSS, and JS",
    tagline: "a game I made",
    image: "crystal-collector.png",
    url: "https://xeroneon.github.io/unit-4-game/",
  },
];

type Props = {
  showAll: boolean;
};

export default function ProjectsList({ showAll = false }: Props) {
  return (
    <>
      <div className="flex item-center justify-between">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {!showAll && (
          <Link to="/projects">
            <Button
              className="cursor-pointer flex items-center gap-2"
              variant="outline"
            >
              View All
              <PiArrowRight className="inline-block" />
            </Button>
          </Link>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img className="object-cover" src={`images/${project.image}`} />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.tagline}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <Button variant="outline">View Project</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
