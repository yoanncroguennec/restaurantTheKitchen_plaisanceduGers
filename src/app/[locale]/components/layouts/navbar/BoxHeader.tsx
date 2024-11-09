import React from "react";
import { useLocale } from "next-intl";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/AuthOptions";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

export default async function BoxHeader() {
  const localActive = useLocale();
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session ? (
        <Link href={`/${localActive}/admin/admin-dashboard`}>{session?.user?.email}</Link>
      ) : (
        <Link href={`/${localActive}/auth/login`}>
          <CiUser size={40} className="cursor-pointer" />
        </Link>
      )}
    </div>
  );
}
