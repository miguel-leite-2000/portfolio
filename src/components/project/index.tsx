import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FolderGit2, GitFork, Star } from "lucide-react";

export function Project() {
  return (
    <Link href="#">
      <div className="bg-project h-[153px] bg-cover bg-center rounded-lg p-5">
        <h2 className="font-bold text-white text-lg mb-2 text-wrap">
          react-drag-drop-upload
        </h2>
        <p className="text-xs xl:text-[10px] text-zinc-300">
          React Drag Drop Upload is a lightweight library for uploading files
          and images with drag and drop, styled with Tailwind CSS and supporting
          customization...
        </p>
      </div>
      <div className="mt-3.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Avatar>
            <AvatarImage
              src="https://github.com/miguel-leite-2000.png"
              sizes="32"
              alt="Avatar Miguel Leite"
            />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm lg:text-base xl:text-sm text-zinc-100">
              Miguel Leite
            </h3>
            <p className="text-zinc-500 text-xs xl:text-[10px]">
              Project front-end
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <span>
            <FolderGit2 size={16} />
          </span>
          <span className="flex items-center gap-2">
            <Star size={16} />
            <span className="text-xs xl:text-[10px]">12</span>
          </span>
          <span className="flex items-center gap-2">
            <GitFork size={16} />
            <span className="text-xs xl:text-[10px]">5</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
