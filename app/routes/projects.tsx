import React from "react";
import ProjectsList from "~/components/projects-list";

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <main className="container mx-auto px-4 py-12">
        <ProjectsList showAll={true} />
      </main>
    </div>
  );
}
