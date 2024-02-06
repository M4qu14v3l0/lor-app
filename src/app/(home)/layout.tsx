import { Navbar, Sidebar } from "@/components";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="h-full">
        <Navbar />
        <Sidebar />
        <div className=" text-white">
            {children}
        </div>
    </main>
  );
}