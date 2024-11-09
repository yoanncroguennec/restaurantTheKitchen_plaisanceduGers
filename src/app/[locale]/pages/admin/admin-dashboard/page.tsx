import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}


// import LogoutBtn from "@/components/LogoutBtn";
// import { authOptions } from "@/libs/AuthOptions";
// import { getServerSession } from "next-auth";
// import { useLocale } from "next-intl";
// import { redirect } from "next/navigation";
// import React from "react";

// export default async function AdminDashboard_Page() {
//   const localActive = useLocale();

//   const session = await getServerSession(authOptions);

//   if (!session?.user?.email) {
//     redirect(`/${localActive}/auth/login`);
//   }

//   return (
//     <div>
//       AdminDashboard_Page
//       <div>Protected Dashboard, hello: {session?.user?.email}</div>
//       <LogoutBtn />
//     </div>
//   );
// }
