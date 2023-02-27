// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from "next-sanity/studio/head";
// To customize it, use it as a children component:
import { NextStudioHead } from "next-sanity/studio/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patpicha's Studio",
  description: "Welcome to Studio",
};

export default function CustomStudioHead({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
      <main>{children}</main>
    </>
  );
}
