"use client";

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
        <div className="max-w-6xl mx-auto flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
    );
}
