"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProfile, updateProfile, logout } from "../../lib/api";
import InputField from "../components/InputField";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  // 🔸 Obtener datos del perfil
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    async function fetchProfile() {
      const data = await getProfile(token);
      if (data?.id || data?.user) {
        const profile = data.user || data;
        setUser(profile);
        setForm({ name: profile.name, email: profile.email });
      } else {
        router.push("/login");
      }
    }

    fetchProfile();
  }, [router]);

  // 🔸 Manejar cambios
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔸 Actualizar perfil
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const token = localStorage.getItem("token");

    const response = await updateProfile(token, form);
    setLoading(false);

    if (response?.user) {
      setUser(response.user);
      setEditMode(false);
      setMessage("Perfil actualizado correctamente ✅");
    } else {
      setMessage("Ocurrió un error al actualizar 😞");
    }
  };

  // 🔸 Cerrar sesión
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    await logout(token);
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user)
    return (
      <div className="flex items-center justify-center h-96 text-orange-600 text-xl font-semibold">
        Cargando perfil...
      </div>
    );

  // 🔸 Inicial del usuario (si no tiene imagen)
  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <section className="max-w-3xl mx-auto mt-12 bg-gradient-to-b from-orange-50 to-white shadow-lg rounded-3xl border border-orange-100 overflow-hidden">
      {/* Encabezado con avatar */}
      <div className="bg-orange-500 text-white p-8 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-orange-500 text-5xl font-bold shadow-lg">
          {userInitial}
        </div>
        <h2 className="text-3xl font-semibold mt-4">{user.name}</h2>
        <p className="text-orange-100">{user.email}</p>
      </div>

      {/* Contenido del perfil */}
      <div className="p-8">
        {message && (
          <div className="bg-green-100 text-green-700 text-sm p-3 rounded-lg mb-4 text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleUpdate} className="flex flex-col gap-5">
          <InputField
            label="Nombre completo"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            disabled={!editMode}
          />

          <InputField
            label="Correo electrónico"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            disabled={!editMode}
          />

          {editMode ? (
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow ${
                  loading
                    ? "bg-orange-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? "Guardando..." : "Guardar cambios"}
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="w-full py-3 rounded-xl font-semibold text-gray-700 border border-gray-300 hover:bg-gray-100 transition-all"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="w-full py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all shadow"
              >
                Editar perfil
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gray-600 hover:bg-gray-700 transition-all shadow"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </form>

        <div className="text-center mt-10 text-gray-400 text-sm">
          Última actualización:{" "}
          <span className="text-orange-500 font-medium">
            {new Date(user.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </section>
  );
}
