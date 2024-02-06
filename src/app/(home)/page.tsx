import { BentoGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gollum | especial page",
  description: "This application is a test",
};

export default function Home() {
  return (
    <section className="h-screen flex justify-center items-center">
      <BentoGrid />
    </section>
  );
}
