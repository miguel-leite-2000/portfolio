import Link from "next/link";
import { Bell, ChevronDown, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuTop() {
  return (
    <nav className=" border-b border-neutral-900">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="flex items-center gap-2 bg-transparent">
                  <Image
                    src="https://github.com/miguel-leite-2000.png"
                    className="rounded-full"
                    width={21}
                    height={21}
                    alt="Avatar Miguel Leite"
                  />
                  <div className="flex items-center gap-1.5 text-sm text-zinc-100">
                    <span>Miguel Leite</span>
                    <ChevronDown size={16} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-neutral-950 border border-neutral-800 text-neutral-400 ml-2.5 shadow-2xl py-5">
                <div className="text-center flex flex-col items-center justify-start gap-2.5">
                  <Image
                    src="https://github.com/miguel-leite-2000.png"
                    className="rounded-full"
                    width={48}
                    height={48}
                    alt="Avatar Miguel Leite"
                  />
                  <div className="space-y-2">
                    <strong className="text-sm font-bold text-white">
                      Miguel Leite
                    </strong>
                    <p className="text-xs text-neutral-400">
                      miguelleite200leite@gmail.com
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button className="bg-transparent">
              <Bell size={16} />
            </Button>
          </div>
          <Separator orientation="vertical" className="h-16 bg-neutral-900" />
          <Link href="#" className="text-sm text-zinc-100">
            Community
          </Link>
        </div>

        <div className="flex items-center max-w-[600px] w-full gap-2.5 px-2.5 rounded bg-neutral-800">
          <Search size={16} className="text-neutral-500" />
          <Input
            placeholder='Search for resource like "portfolio"'
            className="rounded-none bg-transparent border-none outline-none text-sm placeholder:text-neutral-600 px-0"
          />
        </div>

        <Button className="py-2.5 px-5 bg-green-700 hover:bg-green-700/80 text-white">
          Meet
        </Button>
      </div>
    </nav>
  );
}
