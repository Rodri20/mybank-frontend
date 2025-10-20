"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import {
  Home,
  CreditCard,
  BarChart3,
  LogOut,
  User,
} from "lucide-react";

export default function DashboardPage() {
  const [active, setActive] = useState("inicio");

  const gastos = [
    { name: "Comida", value: 400 },
    { name: "Transporte", value: 300 },
    { name: "Servicios", value: 300 },
    { name: "Ocio", value: 200 },
  ];

  const ingresos = [
    { mes: "Ene", monto: 1200 },
    { mes: "Feb", monto: 2100 },
    { mes: "Mar", monto: 1800 },
    { mes: "Abr", monto: 2500 },
  ];

  const COLORS = ["#F97316", "#FDBA74", "#FEF3C7", "#FFEDD5"];

  return (
    <div className="flex h-screen bg-orange-50 font-[Signika]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl border-r border-orange-100 flex flex-col justify-between">
        <div>
          <div className="p-6 text-center border-b border-orange-100">
            <h2 className="text-2xl font-bold text-orange-500">MyBank</h2>
            <p className="text-sm text-gray-500">Panel de usuario</p>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {[
              { name: "Inicio", icon: <Home size={18} /> },
              { name: "Cuentas", icon: <CreditCard size={18} /> },
              { name: "Reportes", icon: <BarChart3 size={18} /> },
              { name: "Perfil", icon: <User size={18} /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name.toLowerCase())}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-xl mx-3 transition-all ${
                  active === item.name.toLowerCase()
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-orange-100"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <button className="flex items-center gap-3 text-gray-500 hover:text-orange-600 transition-colors">
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">Dashboard</h1>

        {/* Cards resumen */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm mb-1">Saldo actual</h3>
            <p className="text-2xl font-bold text-orange-600">$4,250.00</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm mb-1">Ingresos este mes</h3>
            <p className="text-2xl font-bold text-green-600">$2,100.00</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm mb-1">Gastos este mes</h3>
            <p className="text-2xl font-bold text-red-500">$1,200.00</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Distribución de gastos
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={gastos}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {gastos.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Ingresos mensuales
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ingresos}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="monto" fill="#F97316" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
