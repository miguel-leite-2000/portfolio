import Link from "next/link";
import {
  Bell,
  ChevronDown,
  HardDriveDownload,
  Info,
  Search,
  Settings2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
                <Button className="flex items-center gap-1 lg:gap-2 bg-transparent px-0 hover:bg-transparent focus:bg-transparent">
                  <Image
                    src="https://github.com/miguel-leite-2000.png"
                    className="rounded-full w-3.5 h-3.5 lg:w-5 lg:h-5"
                    width={21}
                    height={21}
                    alt="Avatar Miguel Leite"
                  />
                  <div className="flex items-center gap-1 lg:gap-1.5 text-[0.75rem] lg:text-sm text-zinc-100">
                    <span>Miguel Leite</span>
                    <ChevronDown
                      className="lg:text-base text-[0.75rem]"
                      size={16}
                    />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-neutral-950 border border-neutral-800 text-neutral-400 ml-2.5 shadow-2xl py-5 px-0">
                <div className="text-center flex flex-col items-center justify-start gap-2.5">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/miguel-leite-2000.png"
                      sizes="48"
                      alt="Avatar Miguel Leite"
                    />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <strong className="text-sm font-bold text-white">
                      Miguel Leite
                    </strong>
                    <p className="text-xs text-neutral-400">
                      miguelleite200leite@gmail.com
                    </p>
                  </div>
                </div>

                <div>
                  <ul className="mt-11 text-sm flex flex-col gap-3.5">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center justify-between px-5"
                      >
                        <div className="items-center flex gap-2">
                          <Settings2 size={14} className="text-zinc-100" />
                          <span className="text-zinc-300">My Skills</span>
                        </div>
                      </Link>
                    </li>
                    <Separator className="bg-neutral-900" />
                    <li>
                      <Link
                        href="#"
                        className="flex items-center justify-between px-5"
                      >
                        <div className="items-center flex gap-2">
                          <Info size={14} className="text-zinc-100" />
                          <span className="text-zinc-300">About me</span>
                        </div>
                      </Link>
                    </li>
                    <Separator className="bg-neutral-900" />
                    <li>
                      <Link
                        href="#"
                        className="flex items-center justify-between px-5"
                      >
                        <div className="items-center flex gap-2">
                          <HardDriveDownload
                            size={14}
                            className="text-zinc-100"
                          />
                          <span className="text-zinc-300">Download CV</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>

            <Button className="bg-transparent">
              <Bell className="lg:text-base text-[0.75rem]" size={16} />
            </Button>
          </div>
          <Separator orientation="vertical" className="h-16 bg-neutral-900" />
          <Link href="#" className="text-sm hidden  text-zinc-100">
            Community
          </Link>
        </div>

        <div className="hidden lg:flex items-center max-w-[600px] w-full gap-2.5 px-2.5 rounded bg-neutral-800 ">
          <Search size={16} className="text-neutral-500" />
          <Input
            placeholder='Search for resource like "portfolio"'
            className="rounded-none bg-transparent border-none outline-none text-sm placeholder:text-neutral-600 px-0 text-zinc-300"
          />
        </div>

        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent lg:hidden">
                <Search size={14} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full bg-neutral-950 border-neutral-900 lg:hidden">
              <div className="flex items-center w-full gap-2.5 px-2.5 rounded bg-neutral-800">
                <Search size={16} className="text-neutral-500" />
                <Input
                  placeholder='Search for resource like "portfolio"'
                  className="rounded-none bg-transparent border-none outline-none text-sm placeholder:text-neutral-600 px-0 text-zinc-300"
                />
              </div>
            </PopoverContent>
          </Popover>

          <Button className="px-2.5 py-2 bg-green-700 hover:bg-green-700/80 text-white lg:px-5 lg:py-2.5">
            Meet
          </Button>
        </div>
      </div>
    </nav>
  );
}
