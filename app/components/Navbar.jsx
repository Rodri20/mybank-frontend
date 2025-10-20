"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react"; // Iconos elegantes

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Verificar token al montar el componente
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const links = isLoggedIn
    ? [
        { href: "/", label: "Inicio" },
        { href: "/profile", label: "Perfil" },
      ]
    : [
        { href: "/", label: "Inicio" },
        { href: "/login", label: "Iniciar Sesión" },
        { href: "/register", label: "Registrarse" },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-orange-600 tracking-tight"
        >
          MyBank<span className="text-gray-800 font-bold">App</span>
        </Link>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-orange-600 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Enlaces de escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-all ${
                pathname === link.href
                  ? "text-orange-600 underline underline-offset-4"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 ml-4 px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 shadow transition-all"
            >
              <LogOut size={16} />
              Salir
            </button>
          )}
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-inner">
          <div className="flex flex-col items-center py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-medium text-lg transition ${
                  pathname === link.href
                    ? "text-orange-600 underline underline-offset-4"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 mt-3 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all"
              >
                <LogOut size={18} />
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
