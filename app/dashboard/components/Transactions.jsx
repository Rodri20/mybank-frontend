"use client";

const data = [
  { id: 1, type: "Depósito", amount: "+ S/ 500.00", date: "2025-10-18" },
  { id: 2, type: "Pago tarjeta", amount: "- S/ 120.00", date: "2025-10-17" },
  { id: 3, type: "Transferencia", amount: "- S/ 75.50", date: "2025-10-16" },
];

export default function Transactions() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Movimientos recientes
      </h3>
      <ul className="divide-y">
        {data.map((tx) => (
          <li key={tx.id} className="py-3 flex justify-between">
            <div>
              <p className="font-medium text-gray-700">{tx.type}</p>
              <p className="text-sm text-gray-500">{tx.date}</p>
            </div>
            <span
              className={`font-semibold ${
                tx.amount.startsWith("+")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
