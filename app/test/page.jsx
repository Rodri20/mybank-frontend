'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('❌ Error al conectar con Laravel'));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Prueba de conexión con Laravel</h1>
        <p className="text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
}
