import { Code, LucideProps } from "lucide-react";
import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  tools?: string;
  techs?: string;
  languages?: string;
};

export function Card({
  description,
  icon: Icon,
  title,
  tools,
  techs,
  languages,
  ...rest
}: CardProps) {
  return (
    <div
      className="py-10 px-5 bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col items-center justify-center gap-5"
      {...rest}
    >
      <header className="flex flex-col items-center gap-4">
        <div>
          <div className="p-4 rounded-full border border-green-400 bg-green-700 flex items-center justify-center text-white">
            <Icon size={24} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </header>
      <div className="text-center">
        <p className="text-base text-zinc-500">{description}</p>
        {!tools && (
          <div className="mt-5 text-center flex flex-col gap-2">
            <h3 className="text-xl font-bold text-green-500">Languages</h3>
            <p className="text-base text-zinc-100">{languages}</p>
          </div>
        )}
      </div>
      <footer className="mt-5 text-center flex flex-col gap-2">
        <h3 className="text-xl font-bold text-green-500">
          {tools ? "Tools" : "Tech’s"}
        </h3>
        <p className="text-base text-zinc-500">{tools || techs}</p>
      </footer>
    </div>
  );
}
