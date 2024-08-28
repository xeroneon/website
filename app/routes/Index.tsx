import ProfileCard from "~/components/ProfileCard";

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <ProfileCard />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a passionate web developer specializing in TypeScript and modern
            web technologies. With a keen eye for detail and a love for clean,
            efficient code, I create robust and scalable web applications that
            deliver exceptional user experiences.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="TypeScript Task Manager preview"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>TypeScript Task Manager</CardTitle>
                <CardDescription>
                  A full-stack task management application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Built with React, TypeScript, and Node.js, this app showcases
                  state management and RESTful API integration.
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Next.js Blog Platform preview"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Next.js Blog Platform</CardTitle>
                <CardDescription>
                  A performant and SEO-friendly blog system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Leveraging Next.js and TypeScript, this platform demonstrates
                  server-side rendering and dynamic routing.
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="TypeScript Design System preview"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>TypeScript Design System</CardTitle>
                <CardDescription>A reusable component library</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A collection of TypeScript-based UI components, showcasing
                  advanced type usage and component architecture.
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
