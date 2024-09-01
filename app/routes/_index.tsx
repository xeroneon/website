import type { MetaFunction } from "@remix-run/node";
import ProjectsList from "~/components/projects-list";
import Timeline from "~/components/timeline";

export const meta: MetaFunction = () => {
  return [
    { title: "Xeroneon" },
    {
      name: "description",
      content: "Andrew Vasquez (Xeroneon), a Software Engineer",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Andrew Vasquez is an experienced frontend developer with a strong
            focus on user experience and performance optimization. With six
            years of professional coding experience and an impressive 15-year
            background in CSS, Andrew has developed a deep expertise in
            JavaScript, TypeScript, and a wide array of web technologies. His
            career spans from creating presentational websites to developing
            complex, interactive internal tools for various industries.
            <br />
            <br /> Andrew's technical prowess is exemplified by his work on
            map-heavy applications, where he significantly improved performance
            by reducing load times from 10 seconds to under 1 second. He is
            passionate about crafting efficient, user-friendly interfaces and
            writing optimized code. Andrew holds a certificate from a coding
            bootcamp hosted by Arizona State University and continually expands
            his skills, currently exploring lower-level engineering and advanced
            development workflows. His goals include mastering Neovim, deepening
            his understanding of software engineering fundamentals, and creating
            highly flexible and efficient APIs. Outside of his professional
            endeavors, Andrew enjoys drone building and programming,
            skateboarding, and strategic gaming.
          </p>
        </section>
        <section>
          <ProjectsList />
        </section>
        <section className="mt-8">
          <Timeline />
        </section>
      </main>
    </div>
  );
}
