import { Navbar } from "@/components/navbar";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import PhotoMiguelLeite from "@/assets/miguelleite.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-500">
      <header className="w-screen h-screen bg-hero py-16">
        <div className="container">
          <Navbar />
          <div className="flex items-center justify-between mt-24">
            <div className="flex-1">
              <h1 className="text-7xl font-bold text-green-600 break-words">
                Software Developer.
              </h1>
              <p className="break-words text-zinc-300 text-base my-8">
                Hello, I'm Miguel Pascoal Alfredo Leite, with more than 4 years
                of experience in software development Software, with experience
                working in large company projects.
              </p>
              <div className="flex items-start gap-4">
                <div className="flex items-start gap-4 pr-4 border-r border-dashed border-zinc-500">
                  <div>
                    <div className="p-1.5 rounded-full bg-green-600 text-white">
                      <Check size={12} />
                    </div>
                  </div>
                  <div>
                    <p>
                      Highly Skilled in Progressive Improvement, UI Engineering,
                      and Others
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <div className="p-1.5 rounded-full bg-green-600 text-white">
                      <Check size={12} />
                    </div>
                  </div>
                  <div>
                    <p>
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
    </main>
  );
}
