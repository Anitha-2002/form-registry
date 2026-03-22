import "./globals.css";
import Header from "@/shared/components/layout/Header";
import Sidebar from "@/shared/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6 bg-gray-50 min-h-screen text-ink-secondary">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
