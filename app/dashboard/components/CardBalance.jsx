"use client";
export default function CardBalance() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-2xl shadow-lg p-8 flex justify-between items-center">
      <div>
        <p className="text-sm opacity-80">Saldo disponible</p>
        <h2 className="text-4xl font-bold mt-2">S/ 3,450.75</h2>
      </div>
      <div className="text-right">
        <p className="text-sm opacity-80">Cuenta N°</p>
        <p className="text-lg font-semibold">001-239823-12</p>
      </div>
    </div>
  );
}
