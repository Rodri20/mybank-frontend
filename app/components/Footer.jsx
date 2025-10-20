export default function Footer() {
  return (
    <footer className="bg-orange-50 text-center py-6 border-t border-orange-200 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-orange-500">MyBank</span>. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}
