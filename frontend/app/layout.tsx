import "./globals.css";
import Providers from "@/app/providers";
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
        <Providers>
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="min-h-screen bg-gray-50 p-6 text-ink-secondary">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
