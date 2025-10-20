"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <header className="flex justify-end items-center p-4 bg-white border-b shadow-sm">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        <LogOut size={16} /> Cerrar sesión
      </button>
    </header>
  );
}
