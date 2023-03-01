import "styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Welcome to My Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Banner />
      <main  className="max-w-6xl mx-auto">{children}</main>
    </>
  );
}
