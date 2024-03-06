import { Navbar } from "@/components/navbar";
import { Check, Code, Layers, Server } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import PhotoMiguelLeite from "@/assets/miguelleite.png";
import { Card } from "@/components/card";
import { Divisor } from "@/components/divisor";
import { UserIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-500">
      <header className="w-screen h-screen bg-hero py-16">
        <div className="container">
          <Navbar />
          <div className="flex items-center justify-between mt-16">
            <div className="flex-1">
              <h1 className="text-7xl font-bold text-green-600 break-words">
                Software Developer.
              </h1>
              <p className="break-words text-zinc-300 text-base my-8">
                Hello, {"I'm"} Miguel Pascoal Alfredo Leite, with more than 4
                years of experience in software development Software, with
                experience working in large company projects.
              </p>
              <div className="flex items-start gap-4">
                <div className="flex items-start gap-4 border py-3 px-3 border-zinc-800 bg-zinc-900 text-zinc-300 rounded-md transition hover:border-green-600 hover:shadow-green-600/15 hover:shadow-2xl">
                  <div>
                    <div className="p-1.5 rounded-full bg-green-600 text-white">
                      <Check size={12} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      Highly Skilled in Progressive Improvement, UI Engineering,
                      and Others
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border py-3 px-3 border-zinc-800 bg-zinc-900 text-zinc-300 rounded-md transition hover:border-green-600 hover:shadow-green-600/15 hover:shadow-2xl">
                  <div>
                    <div className="p-1.5 rounded-full bg-green-600 text-white">
                      <Check size={12} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      Highly Skilled in Progressive Improvement, UI Engineering,
                      and Others
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <Image src={PhotoMiguelLeite} alt="Photo Miguel Leite" />
            </div>
          </div>
        </div>
      </header>

      <main className="container grid grid-cols-3 gap-5 pb-16 mb-10 -mt-16  xl:-mt-10 2xl:-mt-40">
        <Card
          icon={Layers}
          title="Designer"
          description="I highly value an application's UI, because I believe it is of utmost importance that an application should have a user-friendly appearance for all application users. That's why I also like to design some applications to be able to share the little knowledge I acquire during my studies of UI/UX design."
          tools="Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator"
        />
        <Card
          icon={Code}
          title="Front-End"
          description="I like to code things from scratch and I like to bring ideas to life."
          languages="HTML, JavaScript, TypeScript"
          techs="Reactjs, Nextjs, Tailwindcss, Bootstrap, Matrial UI, React-Icons, Apollo Client, GraphQL, Oauth, Next-Auth, Vitejs..."
        />
        <Card
          icon={Server}
          title="Back-end"
          description="I also like to work with some backend technologies."
          languages="JavaScript, TypeScript, PHP, Python"
          techs="Nodejs, Nestjs, GraphQL, Apollo Client, Expressjs, Laravel, Codeigniter, Django, Flask, MVC, API Rest, API GraphQL..."
        />
      </main>
      <Divisor />
      <section className="container py-20">
        <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-8 py-5 px-8 bg-zinc-950 rounded-md border border-zinc-900">
            <h2 className="text-green-500 text-4xl font-bold">Engineering</h2>
            <p className="text-base text-zinc-500">
              In building JavaScript applications, {"I'm"} equipped with just
              the right tools, and can absolutely function independently of them
              to deliver fast, resilient solutions optimized for scale,
              performance and scalabilty are priorities on my radar.
            </p>
          </div>

          <div className="flex flex-col gap-8 py-5 px-8 bg-zinc-950 rounded-md border border-zinc-900">
            <h2 className="text-green-500 text-4xl font-bold">Projects</h2>
            <p className="text-base text-zinc-500">
              {"I'm"} probably not the designer, but I design. Immersed in
              stylesheets, tweaking font sizes and contemplating layouts is
              where {"you'll"} find me. {"I'm"} committed to creating fluent
              user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="w-screen py-14 bg-history">
        <div className="container flex items-center justify-between gap-36">
          <div>
            <h2 className="text-4xl text-white font-bold">
              Over the <br /> last 3 years
            </h2>

            <div className="mt-12 flex flex-col gap-4 text-zinc-300">
              <p>
                I worked for five companies (5) Angolan companies and interned
                in two (2) Brazilian company, created products for several
                Angolan entities to solutions and corporate applications focused
                on fast and accessible user experience.
              </p>

              <p>
                I currently work at PETROHOST as a Full Stack Senior developer
                which is one of the best providers of website hosting and
                application creation in Angola that follow the web standards for
                many companies in Angola.
              </p>

              <p>
                Before that I was the main Full Stack Developer at NEXT LEVEL,
                LDA where I worked with a set of tools and services customized
                to quickly build a finance application for a company that
                provides services in all countries.
              </p>

              <p>
                Before NEXT LEVEL, LDA, I worked as a senior Front-END developer
                at Startup Gootech, creating JavaScript applications (Reactjs &
                Nextjs) and interfaces for organizations and individuals.
              </p>

              <p>
                Before starting to work at Startup Gootech, I also interned at a
                Brazilian company BETTRADS where I contributed to a Reactjs
                application.
              </p>

              <p>
                Long before these companies, I also worked as a senior Back-End
                developer at SNIR, where I develop two applications, a banking
                application and a Bulk SMS. In the banking application I was
                back-end support and in the Bulk SMS application I was the main
                Back-End developer.
              </p>

              <p>
                I also once worked as a back-end developer on a project called
                Living, which is an Angolan social network that is under
                construction.
              </p>
            </div>
          </div>
          <div>
            <UserIcon />
          </div>
        </div>
      </section>
    </main>
  );
}
