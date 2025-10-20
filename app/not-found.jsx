"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-orange-100 via-white to-orange-50 text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md border border-orange-200">
        <h1 className="text-8xl font-extrabold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>

        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
