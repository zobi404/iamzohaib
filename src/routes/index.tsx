import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Clients } from "@/components/portfolio/Clients";
import { Skills } from "@/components/portfolio/Skills";
import { Modules } from "@/components/portfolio/Modules";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Muhammad Zohaib — Odoo Technical Consultant & Full-Stack Developer",
      },
      {
        name: "description",
        content:
          "Muhammad Zohaib is an Odoo 17/18/19 technical consultant with 3+ years building custom modules, REST integrations, and React Native apps for enterprise clients.",
      },
      { name: "author", content: "Muhammad Zohaib" },
      {
        property: "og:title",
        content:
          "Muhammad Zohaib — Odoo Technical Consultant & Full-Stack Developer",
      },
      {
        property: "og:description",
        content:
          "3+ years turning complex business needs into scalable Odoo ERP solutions — from custom modules to real-time mobile integrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Clients />
        <Skills />
        <Modules />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
