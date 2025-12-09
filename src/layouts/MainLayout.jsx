export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b p-4 text-xl font-bold">
        Celeste Bareiro
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
