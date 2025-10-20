export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-orange-100 to-orange-50 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4">
          Bienvenido a <span className="text-gray-800">MyBank</span>
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Tu plataforma financiera moderna para gestionar tus cuentas, transferencias
          y finanzas personales de manera simple, rápida y segura.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/login"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
          >
            Iniciar Sesión
          </a>
          <a
            href="/register"
            className="border border-orange-400 text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-100 transition"
          >
            Crear Cuenta
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            ¿Por qué elegir <span className="text-orange-600">MyBank</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                🔒 Seguridad Total
              </h3>
              <p className="text-gray-600">
                Tus datos y transacciones están protegidos con los más altos estándares de seguridad bancaria.
              </p>
            </div>

            <div className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                ⚡ Operaciones Rápidas
              </h3>
              <p className="text-gray-600">
                Realiza transferencias, pagos y consultas de forma instantánea desde cualquier dispositivo.
              </p>
            </div>

            <div className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                💡 Gestión Inteligente
              </h3>
              <p className="text-gray-600">
                Visualiza tus finanzas con paneles intuitivos y reportes claros para tomar mejores decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-t from-orange-50 to-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Con MyBank puedes consultar tus movimientos, programar pagos automáticos,
            gestionar tus tarjetas y recibir alertas en tiempo real.  
            Todo desde una interfaz moderna y fácil de usar.
          </p>

          <img
            src="/images/dashboard-preview.png"
            alt="Vista del panel MyBank"
            className="rounded-2xl shadow-xl mx-auto w-full max-w-4xl"
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-orange-600 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">
          Empieza hoy con <span className="text-orange-100">MyBank</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-orange-100">
          Regístrate gratis y disfruta de una experiencia bancaria moderna, rápida y segura.
        </p>
        <a
          href="/register"
          className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-orange-100 transition"
        >
          Crear mi cuenta
        </a>
      </section>
    </div>
  );
}
