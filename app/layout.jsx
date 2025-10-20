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
  description: "Gestión moderna de cuentas y perfiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={signika.className}>
      <body className="bg-orange-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
