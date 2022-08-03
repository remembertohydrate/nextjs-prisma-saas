import React from "react";
import { VscGithub } from "react-icons/vsc";
import Button from "../primitives/Button";
import { useSession, signIn, signOut } from "next-auth/react";

function LoginForm() {
  const { data: session } = useSession();

  const handleGithub = async () => {
    await signIn("github");
  };

  return (
    <>
      <form className="w-64">
        {/* this is temporary \/ */}
        <div className="mb-12 text-center">
          {session
            ? `You are logged in as ${session.user?.email}`
            : "You are not logged in"}
        </div>
        {/* this is temporary /\ */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="johndoe@acme.com"
            required
          />
        </div>

        <Button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800"
        >
          Submit
        </Button>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-neutral-300"></div>
          <span className="mx-3.5 text-sm text-neutral-500">OR</span>
          <div className="flex-grow border-t border-neutral-300"></div>
        </div>
      </form>
      <Button
        rightIcon={<VscGithub />}
        className={"text-white bg-neutral-700 hover:bg-neutral-800"}
        onClick={() => handleGithub()}
      >
        Sign In with GitHub
      </Button>
      {/* this is temporary \/ */}
      <button className="mt-6" onClick={() => signOut()}>
        Click to Logout
      </button>
      {/* this is temporary /\ */}
    </>
  );
}

export default LoginForm;
