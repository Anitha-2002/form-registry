import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50">
      <main className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-10 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-ink-primary">
          Welcome to Compliance Registry
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-ink-secondary">
          Manage regulatory requirements, upload documents, and track compliance
          progress — all in one place.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signage"
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go to Signage
          </Link>

          <button className="px-6 py-3 rounded-md border border-gray-300 text-ink-secondary hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

        {/* Optional Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-ink-primary">📂 Upload Documents</h3>
            <p className="text-sm text-ink-secondary mt-1">
              Submit required documents for each compliance requirement.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-ink-primary">📊 Track Progress</h3>
            <p className="text-sm text-ink-secondary mt-1">
              Monitor completion status across categories and groups.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-ink-primary">✅ Stay Compliant</h3>
            <p className="text-sm text-ink-secondary mt-1">
              Ensure all regulatory requirements are fulfilled on time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
