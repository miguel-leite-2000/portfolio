"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { MenuTop } from "@/components/menu-top";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Project } from "@/components/project";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <ScrollArea className="min-h-screen h-screen bg-neutral-950 text-zinc-500">
      <MenuTop />
      <div className="w-full py-6 border-b border-neutral-900">
        <div className="container">
          <h1 className="font-bold text-base lg:text-xl text-zinc-100">
            Software Developer.
          </h1>
        </div>
      </div>

      <section className="container flex items-start gap-12 mt-12">
        <Sidebar />

        <main className="w-full max-h-[725px]">
          <header className="flex items-center justify-between">
            <Button className="text-zinc-100 lg:hidden bg-transparent px-0 hover:bg-transparent focus:bg-transparent">
              <Menu size={24} />
            </Button>
            <div className="flex items-center max-lg:gap-6 lg:justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2.5 text-xs lg:text-sm outline-none text-zinc-200">
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
                <DropdownMenuTrigger className="flex items-center gap-2.5 text-xs lg:text-sm outline-none text-zinc-300">
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
            </div>
          </header>

          <section className="my-9 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 xl:gap-x-14 gap-y-6 relative">
            <div className="h-32 w-full bg-gradient-to-t from-neutral-950 fixed bottom-0 left-0 right-0 z-50 mt-5" />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </section>
        </main>
      </section>
    </ScrollArea>
  );
}
