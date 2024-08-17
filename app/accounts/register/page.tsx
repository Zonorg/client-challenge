"use client";

import { API_URL } from "@/config/site";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";

export default function Register() {
  const router = useRouter();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Validar que todos los campos estén llenos
    if (!data.username || !data.password || !data["repeat-password"]) {
      alert("Completa todos los campos");
      return;
    }
    // Validar que las contraseñas coincidan
    if (data.password !== data["repeat-password"]) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post(API_URL + "/register", data);
      if (response.status === 201) {
        alert("Registrado correctamente, inicia sesión para continuar");
        router.push("/accounts/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      }
      console.log(error);
    }
  };
  return (
    <div className="content">
      <h1>Registro de usuario</h1>
      <form className="form" onSubmit={handleRegister}>
        <input type="text" id="username" name="username" placeholder="Nombre de usuario" />
        <input type="password" id="password" name="password" placeholder="Contraseña" />
        <input type="password" id="repeat-password" name="repeat-password" placeholder="Repetir contraseña" />

        <button className="button" type="submit">
          Registrarse <AiOutlineRight />
        </button>
      </form>

      <p>
        {" "}
        ¿Ya tienes cuenta?{" "}
        <Link className="text-orange-500" href="/accounts/login">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
