import { Sidebar } from "@/components";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        <Sidebar />

        <div className="px-0 sm:px-10">
            {children}
        </div>
    </main>
  );
}