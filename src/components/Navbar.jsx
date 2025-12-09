export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b bg-white sticky top-0 z-50">
      <div className="text-xl font-bold">Celeste Bareiro</div>

      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>

      <div className="md:hidden text-2xl">☰</div>
    </nav>
  );
}
