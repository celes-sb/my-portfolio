import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="p-6">{children}</main>
    </div>
  );
}
