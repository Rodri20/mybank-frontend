// app/layout.js
import "./globals.css";
import { Signika } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "MyBank | Plataforma Financiera",
  description: "Gestión moderna de cuentas y perfiles bancarios con seguridad y estilo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={signika.className}>
      <body className="bg-orange-50 text-gray-900 flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-1 w-full flex flex-col justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
