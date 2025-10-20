"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../components/InputField";
import { register } from "../../lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const response = await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (response.token) {
        localStorage.setItem("token", response.token);
        router.push("/profile");
      } else {
        setError(response.message || "Error al registrar el usuario.");
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
        Crear cuenta
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Únete a <span className="font-semibold">MyBank</span> en segundos 🚀
      </p>

      {error && (
        <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          label="Nombre completo"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Juan Pérez"
        />

        <InputField
          label="Correo electrónico"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />

        <InputField
          label="Contraseña"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <InputField
          label="Confirmar contraseña"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
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
          {loading ? "Creando cuenta..." : "Registrarme"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        ¿Ya tienes una cuenta?{" "}
        <a
          href="/login"
          className="text-orange-500 font-medium hover:underline"
        >
          Inicia sesión aquí
        </a>
      </p>
    </section>
  );
}
