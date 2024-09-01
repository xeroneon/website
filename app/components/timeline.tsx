import React from "react";

// Define the structure of a timeline entry
interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
}

// Sample career data (replace with your own)
const careerData: TimelineEntry[] = [
  {
    year: "2021",
    title: "Analyst II",
    company: "Sparq",
    description: "Worked as a consultant with clients to deliver value",
  },
  {
    year: "2021",
    title: "Father",
    company: "Parents inc",
    description: "My baby boy Bellamy Vasquez was born",
  },
  {
    year: "2020",
    title: "Freelance developer",
    company: "DAC",
    description: "description",
  },
  {
    year: "2019",
    title: "Freelance developer",
    company: "S2UI",
    description: "description",
  },
  {
    year: "2019",
    title: "Teachers Assistant",
    company: "Trilogy",
    description: "description",
  },
  {
    year: "2018",
    title: "Student",
    company: "Trinity Bootcamp (ASU)",
    description: "school description",
  },
];

export default function Timeline() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">My Career Journey</h2>
      <div className="relative border-l border-slate-500 ml-3">
        {careerData.map((entry, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-600 rounded-full -left-3">
              <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <time className="text-sm font-normal leading-none text-muted-foreground">
                {entry.year}
              </time>
              <h3 className="text-lg font-semibold text-primary ml-0 sm:ml-4">
                {entry.company}
              </h3>
            </div>
            <h4 className="mb-2 text-sm font-medium text-muted-foreground">
              {entry.title}
            </h4>
            <p className="mb-4 text-base font-normal text-muted-foreground">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
