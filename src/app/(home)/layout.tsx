import { Navbar, Sidebar } from "@/components";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        <Navbar />
        <Sidebar />
        <div className="bg-[#333333] text-white min-h-screen">
            {children}
        </div>
    </main>
  );
}