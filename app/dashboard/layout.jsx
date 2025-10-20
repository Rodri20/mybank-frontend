"use client";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50 font-[Signika]">
      <Sidebar />       {/* Solo el Sidebar del dashboard */}
      <div className="flex-1 flex flex-col">
        <Topbar />      {/* Solo el Topbar del dashboard */}
        <main className="p-8">
          {children}    {/* Aquí se renderiza el dashboard index o páginas internas */}
        </main>
      </div>
    </div>
  );
}
