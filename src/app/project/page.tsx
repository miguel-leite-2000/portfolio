"use client";

import { useEffect, useState } from "react";
import { Heart, Users } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/markdown.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuTop } from "@/components/menu-top";
import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactDragDropUploadREADME } from "@/docs/react-drag-drop-upload/README";

export default function Project() {
  const [readmeContent, setReadmeContent] = useState("");

  return (
    <ScrollArea className="min-h-screen h-screen bg-neutral-950 text-zinc-500">
      <MenuTop />
      <section className="container flex items-center justify-between mt-12 pb-12 border-b border-neutral-900">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/miguel-leite-2000.png"
                    sizes="24"
                    alt="Avatar Miguel Leite"
                  />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <strong className="text-sm font-normal text-zinc-300">
                  Miguel Leite
                </strong>
              </div>
              <h1 className="text-3xl text-white font-bold text-wrap">
                Project Front-End - React Drag Drop Upload
              </h1>
            </div>

            <div className="flex items-center gap-2.5 text-neutral-400">
              <p className="text-xs">Front-End</p>
              <div className="w-1 h-1 rounded-full bg-neutral-400" />
              <p className="flex items-cente gap-1">
                <Heart size={12} />
                <span className="text-xs">12</span>
              </p>
              <div className="w-1 h-1 rounded-full bg-neutral-400" />
              <p className="flex items-cente gap-1">
                <Users size={12} />
                <span className="text-xs">0 contributors</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Button className="px-2.5 py-2 bg-green-700 hover:bg-green-700/80 text-white lg:px-5 lg:py-2.5">
              {" "}
              Preview{" "}
            </Button>
            <Button className="p-2.5 bg-neutral-900 border border-neutral-800">
              <Heart size={16} />
            </Button>
            <Button className="p-2.5 bg-neutral-900 border border-neutral-800">
              <Users size={16} />
            </Button>
          </div>
        </div>
        <div className="w-[43.75rem] h-[21.563rem] rounded-lg bg-neutral-800 border border-neutral-700" />
      </section>
      <section className="container mt-20">
        <main className="flex items-start gap-28">
          <div className="flex-1">
            <Markdown
              remarkPlugins={[remarkGfm]}
              className="markdown-body bg-neutral-950 p-10 rounded-lg"
            >
              {ReactDragDropUploadREADME}
            </Markdown>
          </div>
        </main>
      </section>
    </ScrollArea>
  );
}
