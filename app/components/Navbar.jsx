"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // Enlaces según el estado del usuario
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
    <nav className="bg-white shadow-md border-b border-orange-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          MyBank<span className="text-gray-800">App</span>
        </Link>

        {/* Navegación */}
        <div className="flex items-center gap-5">
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

          {/* Botón de cerrar sesión si está logueado */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 transition-all"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
