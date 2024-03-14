"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuTop } from "@/components/menu-top";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-500">
      <MenuTop />
      <div className="w-full py-6 border-b border-neutral-900">
        <div className="container">
          <h1 className="font-bold text-xl text-zinc-100">
            Software Developer.
          </h1>
        </div>
      </div>

      <section className="container flex items-start gap-12 mt-12">
        <Sidebar />

        <main className="w-full">
          <header className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2.5 text-zinc-200">
                <span>All projects</span> <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-800 border border-neutral-700 text-zinc-300">
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Personal
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Freelancers
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Companies
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2.5 text-zinc-300">
                <span>Relevancy</span> <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-800 border border-neutral-700 text-zinc-300">
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Personal
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Freelancers
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 focus:bg-neutral-700 focus:text-zinc-200 hover:text-zinc-200">
                  Companies
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
        </main>
      </section>
    </main>
  );
}
