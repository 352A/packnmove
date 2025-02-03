"use client";

import { LogoCarousel } from "@/app/_components/ui/logo-carousel";
import { Card, CardContent } from "@/app/_components/ui/card";

const demoLogos = [
  { id: 1, name: "Dub", src: "/acc1.webp" },
  {
    id: 2,
    name: "Supabase",
    src: "/acc2.webp",
  },
  { id: 3, name: "Vercel", src: "/acc3.webp" },
  { id: 4, name: "Resend", src: "/acc4.webp" },
  { id: 5, name: "Shadcn", src: "/acc5.webp" },
];

export default function Accreditations2() {
  return (
    <section>
      <Card className="border-none">
        <CardContent className="bg-gradient-to-tr py-24 dark:bg-zinc-800/85 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
          <div className="mb-20 space-y-4 text-center">
            <p className="text-md font-medium text-zinc-400 lg:text-lg">
              Teamwork begins by building trust
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 lg:text-4xl">
              Memberships | Certifications | Accreditation&apos;s
            </h2>
          </div>
          <LogoCarousel logos={demoLogos} />
        </CardContent>
      </Card>
    </section>
  );
}
