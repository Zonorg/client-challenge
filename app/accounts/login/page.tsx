"use client";

import { API_URL } from "@/config/site";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const response = await axios.post(API_URL + "/login", data);
      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");
      }
    } catch (error) {
      alert("Ocurrió un error, revisa tus datos");
      console.log(error);
    }
  };

  return (
    <div className="content">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="form">
        <input type="text" id="username" name="username" placeholder="Nombre de usuario" />
        <input type="password" id="password" name="password" placeholder="Contraseña" />
        <button type="submit">
          Iniciar sesión <AiOutlineRight />
        </button>
      </form>
      <p>
        ¿No tienes cuenta?{" "}
        <Link className="text-blue-500" href="/accounts/register">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
