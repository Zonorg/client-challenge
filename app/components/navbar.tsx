"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  if (pathname !== "/accounts/login" && pathname !== "/accounts/register")
    return (
      <nav className="p-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-evenly">
          <Link href="/">Publicaciones de la API</Link>
          <Link href="/created-posts">Publicaciones creadas</Link>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </nav>
    );
}
