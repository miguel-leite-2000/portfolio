import { Navbar } from "@/components/navbar";
import { Check, Code, Layers, Server } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import PhotoMiguelLeite from "@/assets/miguelleite.png";
import { Card } from "@/components/card";

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

      <main className="container grid grid-cols-3 gap-5 pb-16 -mt-16  xl:-mt-10 2xl:-mt-40">
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
    </main>
  );
}
