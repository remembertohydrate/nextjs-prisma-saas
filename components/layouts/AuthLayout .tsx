import Head from "next/head";
import Link from "next/link";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function AuthLayout({
  children,
  title,
  meta,
}: {
  children: React.ReactNode;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-16">{children}</div>
    </div>
  );
}
