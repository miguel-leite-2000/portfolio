import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FolderGit2, GitFork, Star } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
};

export function Project({
  description,
  title,
  url,
  forks,
  stars,
}: ProjectProps) {
  return (
    <Link href={url}>
      <div className="bg-project h-[153px] bg-cover bg-center rounded-lg p-5">
        <h2 className="font-bold text-white text-lg mb-2 text-wrap">{title}</h2>
        <p className="text-xs xl:text-[10px] text-zinc-300">{description}</p>
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
            <span className="text-xs xl:text-[10px]">{stars}</span>
          </span>
          <span className="flex items-center gap-2">
            <GitFork size={16} />
            <span className="text-xs xl:text-[10px]">{forks}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
