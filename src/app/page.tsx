import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {

  const request = await fetch("https://api.pabloeguilaz.es/porfolio")

  const res = await request.json();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hola, soy ${res.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={res.subtitle}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={res.name} src={res.image} />
                <AvatarFallback>{res.iniciales}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Acerca de mi</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {res.about}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experiencia laboral</h2>
          </BlurFade>
          {res.trabajos.map((work: any, id: number) => (
            <BlurFade
              key={work.empresa}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.empresa}
                logoUrl={work.imagen}
                altText={work.empresa}
                title={work.empresa}
                subtitle={work.puesto}
                href={work.enlace}
                badges={work.tags}
                period={`${work.desde} - ${work.hasta ?? "Present"}`}
                description={work.descripcion}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Educación</h2>
          </BlurFade>
          {res.educacion.map((education: any, id: number) => (
            <BlurFade
              key={education.nombre}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.nombre}
                href={education.url}
                logoUrl={education.imagen}
                altText={education.nombre}
                title={education.nombre}
                subtitle={education.descripcion}
                period={`${education.desde} - ${education.hasta}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-5">
            {res.skills.map((skill: any, id: number) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="flex flex-wrap gap-1">
                  {skill.icons.map((s: any, i: number) => (
                    <div key={i} style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translateY(-6px) translateZ(0px)" }}>
                      <div className="cursor-pointer inline-flex items-center rounded-md border px-2.5 md:px-4 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-box dark:bg-box_dark text-black dark:text-white shadow">
                        <img src={s.icon} alt={s.name} className="size-5 md:size-7 mr-1 md:p-0.5" />
                        <p className="text-black dark:text-white">{s.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Link className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-box_border dark:border-box_border_dark bg-box dark:bg-box_dark  text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs rounded-full" href={"https://pabloeguilaz.dev/creating"}>
                  {/*🎉*/}
                  🛠️
                  <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-px mx-2 h-4"></div>Ver todos los proyectos
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4 text-subtitle"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Proyectos
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  He trabajado en una variedad de proyectos, desde sitios web sencillos hasta aplicaciones web complejas. Estos son algunos de mis favoritos.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {res.proyectos.map((project: any, id: number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.nombre}
                  title={project.nombre}
                  description={project.descripcion}
                  dates={project.fechas}
                  tags={project.tags}
                  image={project.imagen}
                  video={project.video}
                  link={project.website}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Me gusta construir cosas.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Durante mi época en la universidad, asistí a más de{" "}
                  {res.hackathons.length} hackathones. Personas de todo el 
                  país se reunían para crear cosas increíbles en tan solo 2 
                   3 días. Fue revelador ver las infinitas posibilidades que 
                   podían hacerse realidad gracias a un grupo de personas 
                   motivadas y apasionadas.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {res.hackathons.map((project: any, id: number) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
