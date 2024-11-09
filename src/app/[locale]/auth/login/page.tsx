"use client";

import Input from "@/components/Input";
import { signIn, signOut } from "next-auth/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign(`/${localActive}/admin/admin-dashboard`);
      // window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };


  const localActive = useLocale();

  return (

       <>
        <div className="space-y-5 flex flex-col items-center">
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            type="password"
          />
          <div
            onClick={login}
            className="px-10 py-3 bg-neutral-900 rounded-full text-white disabled:opacity-70 cursor-pointer"
          >
            Se connecter
          </div>
        </div>
        <div className="text-sm text-center text-neutral-500 mt-5">
          Pas de compte ?{" "}
          <Link href={`/${localActive}/auth/register`} className="font-bold text-neutral-900">
            S'inscrire
          </Link>
        </div></>
 
  );
}
