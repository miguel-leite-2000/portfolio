"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Navbar } from "@/components/navbar";
import {
  Check,
  Code,
  Facebook,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Server,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import PhotoMiguelLeite from "@/assets/miguelleite.png";
import { Card } from "@/components/card";
import { Divisor } from "@/components/divisor";
import { UserIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .email({
      message: "email must be a valid email address.",
    }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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

      <main className="container grid grid-cols-3 gap-5 pb-16 mb-10 -mt-16  xl:-mt-10 2xl:-mt-40">
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
          title="Back-End"
          description="I also like to work with some backend technologies."
          languages="JavaScript, TypeScript, PHP, Python"
          techs="Nodejs, Nestjs, GraphQL, Apollo Client, Expressjs, Laravel, Codeigniter, Django, Flask, MVC, API Rest, API GraphQL..."
        />
      </main>
      <Divisor />
      <section className="container py-20">
        <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-8 py-5 px-8 bg-zinc-950 rounded-md border border-zinc-900">
            <h2 className="text-green-500 text-4xl font-bold">Engineering</h2>
            <p className="text-base text-zinc-500">
              In building JavaScript applications, {"I'm"} equipped with just
              the right tools, and can absolutely function independently of them
              to deliver fast, resilient solutions optimized for scale,
              performance and scalabilty are priorities on my radar.
            </p>
          </div>

          <div className="flex flex-col gap-8 py-5 px-8 bg-zinc-950 rounded-md border border-zinc-900">
            <h2 className="text-green-500 text-4xl font-bold">Projects</h2>
            <p className="text-base text-zinc-500">
              {"I'm"} probably not the designer, but I design. Immersed in
              stylesheets, tweaking font sizes and contemplating layouts is
              where {"you'll"} find me. {"I'm"} committed to creating fluent
              user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="w-screen py-14 bg-history">
        <div className="container flex items-center justify-between gap-36">
          <div>
            <h2 className="text-4xl text-white font-bold">
              Over the <br /> last 3 years
            </h2>

            <div className="mt-12 flex flex-col gap-4 text-zinc-300">
              <p>
                I worked for five companies (5) Angolan companies and interned
                in two (2) Brazilian company, created products for several
                Angolan entities to solutions and corporate applications focused
                on fast and accessible user experience.
              </p>

              <p>
                I currently work at PETROHOST as a Full Stack Senior developer
                which is one of the best providers of website hosting and
                application creation in Angola that follow the web standards for
                many companies in Angola.
              </p>

              <p>
                Before that I was the main Full Stack Developer at NEXT LEVEL,
                LDA where I worked with a set of tools and services customized
                to quickly build a finance application for a company that
                provides services in all countries.
              </p>

              <p>
                Before NEXT LEVEL, LDA, I worked as a senior Front-END developer
                at Startup Gootech, creating JavaScript applications (Reactjs &
                Nextjs) and interfaces for organizations and individuals.
              </p>

              <p>
                Before starting to work at Startup Gootech, I also interned at a
                Brazilian company BETTRADS where I contributed to a Reactjs
                application.
              </p>

              <p>
                Long before these companies, I also worked as a senior Back-End
                developer at SNIR, where I develop two applications, a banking
                application and a Bulk SMS. In the banking application I was
                back-end support and in the Bulk SMS application I was the main
                Back-End developer.
              </p>

              <p>
                I also once worked as a back-end developer on a project called
                Living, which is an Angolan social network that is under
                construction.
              </p>
            </div>
          </div>
          <div>
            <UserIcon />
          </div>
        </div>
      </section>

      <section className="container my-28">
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col gap-3 p-8 rounded-md bg-gradient-to-b from-zinc-900 border border-zinc-900 transition hover:border-green-600 hover:shadow-green-600/15 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-green-600">
              Font-end Works
            </h3>
            <p className="text-xl">
              Open source projects, web <br /> apps and experimentals.
            </p>
            <div className="mt-5">
              <Button className="bg-transparent px-9 rounded-none border border-green-600 text-green-600 hover:bg-zinc-900">
                See my works
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-8 rounded-md bg-gradient-to-b from-zinc-900 border border-zinc-900 transition hover:border-green-600 hover:shadow-green-600/15 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-green-600">
              Back-end Works
            </h3>
            <p className="text-xl">
              Open source projects, web <br /> apps and experimentals.
            </p>
            <div className="mt-5">
              <Button className="bg-transparent px-9 rounded-none border border-green-600 text-green-600 hover:bg-zinc-900">
                See my works
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Divisor />

      <section className="container flex justify-center items-center mt-28 pb-28">
        <div className="max-w-[45.313rem] w-full">
          <div className="text-center mb-10">
            <h2 className="text-5xl text-green-500 font-bold">Send message</h2>
            <p className="text-base text-zinc-500 mt-4">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-700 text-zinc-300 focus:border-green-700"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your e-mail</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-700 text-zinc-300 focus:border-green-700"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        className="bg-zinc-900 border-zinc-800 placeholder:text-zinc-700 text-zinc-300 focus:border-green-700 resize-none"
                        placeholder="Type your message here."
                        defaultValue="Hello, we need a Software developer to work with us, able to meet the demands of our company. Are Miguel Leite available?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <center>
                <Button
                  type="submit"
                  className="text-center w-96 bg-green-600 text-white hover:bg-green-800"
                >
                  Shoot
                </Button>
              </center>
            </form>
          </Form>
        </div>
      </section>

      <footer className="pt-20 bg-gradient-to-t from-zinc-900 border-t border-zinc-900">
        <div className="container flex items-center justify-between">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Image
                src={PhotoMiguelLeite}
                className="rounded-full w-10 border border-green-600"
                alt="Photo Miguel Leite"
              />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-100">
                  Miguel Leite
                </h3>
                <p className="text-xs text-zinc-500">
                  Software Developer - miguelleite2000leite@gmail.com
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 text-zinc-400">
              <Link href="#">Home</Link>
              <Link href="#">My Self</Link>
              <Link href="#">My Projects</Link>
              <Link href="#">My Resume</Link>
              <Link href="#">Say hello</Link>
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            <Button className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-4">
              <Instagram size={16} />
            </Button>
            <Button className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-4">
              <Facebook size={16} />
            </Button>
            <Button className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-4">
              <Linkedin size={16} />
            </Button>
            <Button className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-4">
              <Github size={16} />
            </Button>
          </div>
        </div>
        <div className="py-10 bg-zinc-950 mt-20 bg-gradient-to-t from-zinc-900">
          <div className="container">
            <p className="text-base text-zinc-500">
              Copyright © 2024. Miguel Leite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
