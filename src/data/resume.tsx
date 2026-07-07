import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { Git } from "@/components/ui/svgs/git";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Firebase } from "@/components/ui/svgs/firebase";

export const DATA = {
  name: "Mohammad Shouqat Azeez",
  initials: "MSA",
  url: "https://mohammadshouqatazeez.vercel.app",
  location: "Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/andhra+pradesh",
  description:
    "Full Stack Developer building scalable apps with React, Next.js, FastAPI, and PostgreSQL.",
  summary:
    "Recent Computer Science graduate from [Kallam Haranadhareddy Institute of Technology](/#education). I build full-stack web applications with a focus on clean architecture, secure APIs, and AI integration. Currently looking for opportunities to grow as a developer.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Python", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Java", icon: Java },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Git", icon: Git },
    { name: "FastAPI", icon: FastAPI },
    { name: "Prisma", icon: Prisma },
    { name: "Supabase", icon: Supabase },
    { name: "Firebase", icon: Firebase },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://drive.google.com/drive/u/0/folders/1lznp4RtLdQhR2uyySWXExvXqvlOefZB2", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "mdshouqatazeez@gmail.com",
    tel: "+916305755345",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shouqatazeez",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shouqat-azeez-mohammad/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mdshouqatazeez@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] as Array<{
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }>,
  education: [
    {
      school: "Kallam Haranadhareddy Institute of Technology",
      href: "https://khitguntur.ac.in/",
      degree: "Bachelor of Technology – Computer Science Engineering",
      logoUrl: "/khit.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "HireTrack",
      href: "https://myhiretrack.vercel.app/",
      dates: "May 2026 - Jun 2026",
      active: true,
      description:
        "AI-powered job application tracker with cover letter generation, interview prep, match scoring, and referral message generator.",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini AI",
        "JWT",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://myhiretrack.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shouqatazeez/hiretrack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hiretrack.png",
      video: "",
    },
    {
      title: "InvoTrack",
      href: "https://myinvotrack.vercel.app/",
      dates: "Jun 2026 - Jul 2026",
      active: true,
      description:
        "Full-stack invoice management system with PDF generation, GST calculation, AI payment reminders via WhatsApp and email, and revenue analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
        "Google Gemini AI",
        "Resend",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://myinvotrack.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shouqatazeez/mini-invoice-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/invotrack.png",
      video: "",
    },
    {
      title: "ReceiptPro",
      href: "https://receipt-organizer-bice.vercel.app",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "Receipt management platform with image uploads, CRUD operations, filtering by amount/date/merchant, and secure authentication via Supabase.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://receipt-organizer-bice.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shouqatazeez/receipt-organizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/receiptpro.png",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }>,
};
