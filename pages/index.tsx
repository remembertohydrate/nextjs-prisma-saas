import type { NextPage } from "next";
import Image from "next/image";
import LandingLayout from "../components/layouts/LandingLayout";

const Home: NextPage = () => {
  return (
    <LandingLayout
      title="Landing Page - Saas Template"
      meta="Landing Page - SaaS Template"
    >
      <main className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-semibold mb-12">
          Welcome to the SaaS Template
        </h1>
        <Image src="/computer-guy.png" width="80px" height="80px" />
      </main>
    </LandingLayout>
  );
};

export default Home;
