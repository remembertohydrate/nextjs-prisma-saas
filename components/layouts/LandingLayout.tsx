import Head from "next/head";
import Link from "next/link";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function LandingLayout({
  children,
  title,
  meta,
}: {
  children: React.ReactNode;
  title: string;
  meta: string;
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isDesktop ? <Navbar /> : <Sidebar />}
      <div className="flex-1">{children}</div>
      <footer className="bg-slate-100 w-full py-4 flex justify-center">
        This is the footer.
      </footer>
    </div>
  );
}

const Sidebar = () => {
  return (
    <header className="bg-slate-100 w-full py-4 flex justify-center">
      <nav>
        This is the Sidebar -{" "}
        <Link href="/auth/login">
          <a className="underline">Click here to Login</a>
        </Link>
      </nav>
    </header>
  );
};
const Navbar = () => {
  return (
    <header className="bg-slate-100 w-full py-4 flex justify-center">
      <nav>
        This is the Navbar - {""}
        <Link href="/auth/login">
          <a className="underline">Click here to Login</a>
        </Link>
      </nav>
    </header>
  );
};
