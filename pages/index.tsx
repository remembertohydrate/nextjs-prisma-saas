import type { NextPage } from "next";
import LandingLayout from "../components/layouts/LandingLayout";

const Home: NextPage = () => {
  return (
    <LandingLayout
      title="Landing Page - Saas Template"
      meta="Landing Page - SaaS Template"
    >
      <main className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-semibold">
          Welcome to the SaaS Ttemplate
        </h1>
      </main>
    </LandingLayout>
  );
};

export default Home;
