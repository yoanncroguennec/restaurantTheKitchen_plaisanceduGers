import type { Metadata } from "next";
// STYLES
import "./utils/constants/styles/globals.css";
import Container_App from "./components/layouts/containers/ContainerApp";

export const metadata: Metadata = {
  title: "Restaurant - The Kitchen",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Container_App>
        {children}
        </Container_App>
      </body>
    </html>
  );
}
