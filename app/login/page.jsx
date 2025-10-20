"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../components/InputField";
import { login } from "../../lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await login(form);

      if (response?.token) {
        localStorage.setItem("token", response.token);

        // ✅ recargamos la página para que el Navbar se actualice de inmediato
        window.location.href = "/profile";
      } else {
        setError(response.message || "Credenciales incorrectas.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-12 border border-orange-100">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
        Iniciar Sesión
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Accede a tu cuenta de <span className="font-semibold">MyBank</span>
      </p>

      {error && (
        <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          label="Correo electrónico"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tucorreo@ejemplo.com"
        />

        <InputField
          label="Contraseña"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full py-3 rounded-xl font-semibold text-white transition-all shadow ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Accediendo..." : "Entrar"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        ¿No tienes una cuenta?{" "}
        <a
          href="/register"
          className="text-orange-500 font-medium hover:underline"
        >
          Regístrate aquí
        </a>
      </p>
    </section>
  );
}
