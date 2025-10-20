"use client";
import Link from "next/link";
import { Home, Settings, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen flex flex-col p-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
          <Home size={20} /> Inicio
        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
          <Settings size={20} /> Configuración
        </Link>
        <Link href="/dashboard/profile" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
          <User size={20} /> Perfil
        </Link>
      </nav>
    </aside>
  );
}
